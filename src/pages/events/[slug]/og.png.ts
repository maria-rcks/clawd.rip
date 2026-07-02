import { readFileSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import opentype from "opentype.js";
import satori from "satori";
import { timelineEvents } from "@/data/timeline";
import type { TimelineEvent } from "@/data/timeline";

export function getStaticPaths() {
  return timelineEvents.map((event) => ({
    params: { slug: event.slug },
    props: { event },
  }));
}

// Static instances of the variable Anthropic fonts (satori can't parse fvar tables).
// Regenerate with: fonttools varLib.instancer public/fonts/anthropic-<f>-roman.ttf wght=<w> opsz=<o>
const serif500 = readFileSync("src/assets/og-fonts/serif-500.ttf");
const serif600 = readFileSync("src/assets/og-fonts/serif-600.ttf");
const sans400 = readFileSync("src/assets/og-fonts/sans-400.ttf");
const sans600 = readFileSync("src/assets/og-fonts/sans-600.ttf");
const sans700 = readFileSync("src/assets/og-fonts/sans-700.ttf");

const starburst = `data:image/svg+xml;base64,${readFileSync("public/brand/claude-ai-icon.svg").toString("base64")}`;
const crab = `data:image/png;base64,${readFileSync("public/brand/og-crab.png").toString("base64")}`;

const INK = "#141413";
const ACCENT = "#d97757";
const MUTED = "#81796f";
const CANVAS = "#faf9f5";

type Node = {
  type: string;
  props: Record<string, unknown> & { children?: unknown };
};

const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

const TITLE_MAX_WIDTH = 700;
const CRAB_WIDTH = 340;
const CRAB_HEIGHT = 153;
const WORD_GAP = 0.24; // em, rendered as marginRight between words
const TRACKING = -0.02; // em, letter-spacing on title spans
const SAFETY = 1.02; // over-measure slightly so a line never exceeds the box

// Measure title text with the exact font satori renders with, and break lines
// ourselves — a width estimate that disagrees with satori's own wrapping is how
// three-line titles escaped the crab band in the first deploy.
const serifMetrics = opentype.parse(
  serif500.buffer.slice(serif500.byteOffset, serif500.byteOffset + serif500.byteLength),
);

function wordWidth(word: string, size: number): number {
  const advance = serifMetrics.getAdvanceWidth(word, size, { kerning: true });
  return (advance + word.length * size * TRACKING) * SAFETY;
}

function breakLines(title: string, size: number): string[][] {
  const spaceWidth = size * WORD_GAP;
  const lines: string[][] = [[]];
  let lineWidth = 0;
  for (const word of title.split(" ")) {
    const width = wordWidth(word, size);
    if (lineWidth > 0 && lineWidth + spaceWidth + width > TITLE_MAX_WIDTH) {
      lines.push([word]);
      lineWidth = width;
    } else {
      lines[lines.length - 1].push(word);
      lineWidth += (lineWidth > 0 ? spaceWidth : 0) + width;
    }
  }
  return lines;
}

/**
 * Prefer exactly two lines at the largest size that produces them; the
 * line-height stretches the block toward CRAB_HEIGHT (clamped to stay
 * typographically sane — slightly-short blocks center within the crab band).
 * Titles that can't make two lines fall back to three, never more.
 */
function fitTitle(title: string): { fontSize: number; lineHeight: number; lines: string[][] } {
  const sizes = [68, 66, 64, 62, 60, 58, 56, 54, 52, 50, 48, 46, 44, 42];
  for (const target of [2, 3]) {
    for (const size of sizes) {
      const lines = breakLines(title, size);
      // The block must not overflow the crab band even at minimum leading.
      if (lines.length === target && CRAB_HEIGHT / (target * size) >= 1.04) {
        const lineHeight = Math.min(1.35, CRAB_HEIGHT / (target * size));
        return { fontSize: size, lineHeight, lines };
      }
    }
  }
  // Degenerate titles (one very short line, or absurdly long words): render at
  // the largest size with clamped leading rather than a tiny headline.
  const fontSize = sizes[0];
  const lines = breakLines(title, fontSize);
  return {
    fontSize,
    lines,
    lineHeight: Math.min(1.35, Math.max(1.04, CRAB_HEIGHT / (lines.length * fontSize))),
  };
}

/** Pre-broken lines as non-wrapping rows; last word in accent orange. */
function titleRows(lines: string[][], fontSize: number): Node[] {
  return lines.map((line, li) =>
    h(
      "div",
      { display: "flex" },
      line.map((word, wi) => {
        const isLastWord = li === lines.length - 1 && wi === line.length - 1;
        return h(
          "span",
          {
            color: isLastWord ? ACCENT : INK,
            marginRight: wi === line.length - 1 ? 0 : fontSize * WORD_GAP,
            letterSpacing: fontSize * TRACKING,
          },
          word,
        );
      }),
    ),
  );
}

function template(event: TimelineEvent): Node {
  const { fontSize, lineHeight, lines } = fitTitle(event.title);

  return h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: CANVAS,
      padding: "52px 56px 40px",
      fontFamily: "Anthropic Sans",
    },
    [
      // Header: wordmark left, disclaimer right
      h(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        },
        [
          h("div", { display: "flex", alignItems: "center", gap: 18 }, [
            { type: "img", props: { src: starburst, width: 46, height: 46, style: {} } },
            h(
              "span",
              {
                fontFamily: "Anthropic Serif",
                fontSize: 44,
                fontWeight: 600,
                color: INK,
                marginTop: -6,
              },
              "Clawd.rip",
            ),
          ]),
          h("div", { display: "flex", alignItems: "center", gap: 16 }, [
            h(
              "span",
              { fontSize: 21, fontWeight: 600, letterSpacing: 3, color: "#9a958c" },
              "NOT AFFILIATED WITH",
            ),
            h(
              "span",
              { fontSize: 23, fontWeight: 700, letterSpacing: 4, color: "#4f4942" },
              "ANTHROP\\C",
            ),
          ]),
        ],
      ),
      // Middle: kicker + title left, crab right
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          width: "100%",
        },
        // Title block and crab are both exactly CRAB_HEIGHT tall and bottom-aligned,
        // so the pair sits dead on the vertical center. The date hangs above,
        // excluded from the centering math via absolute positioning.
        h(
          "div",
          {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
            gap: 36,
          },
          [
            h(
              "div",
              {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                maxWidth: TITLE_MAX_WIDTH,
              },
              [
                h(
                  "span",
                  {
                    position: "absolute",
                    top: -48,
                    left: 0,
                    fontSize: 22,
                    fontWeight: 600,
                    color: MUTED,
                  },
                  event.period,
                ),
                h(
                  "div",
                  {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: CRAB_HEIGHT,
                    fontFamily: "Anthropic Serif",
                    fontSize,
                    fontWeight: 500,
                    lineHeight,
                  },
                  titleRows(lines, fontSize),
                ),
              ],
            ),
            {
              type: "img",
              props: {
                src: crab,
                width: CRAB_WIDTH,
                height: CRAB_HEIGHT,
                style: { flexShrink: 0 },
              },
            },
          ],
        ),
      ),
      // Footer
      h(
        "div",
        { display: "flex", justifyContent: "center", width: "100%" },
        h("span", { fontSize: 26, fontWeight: 600, color: MUTED }, "by @maria_rcks"),
      ),
    ],
  );
}

export const GET: APIRoute = async ({ props }) => {
  const { event } = props as { event: TimelineEvent };

  const svg = await satori(template(event) as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Anthropic Serif", data: serif500, weight: 500, style: "normal" },
      { name: "Anthropic Serif", data: serif600, weight: 600, style: "normal" },
      { name: "Anthropic Sans", data: sans400, weight: 400, style: "normal" },
      { name: "Anthropic Sans", data: sans600, weight: 600, style: "normal" },
      { name: "Anthropic Sans", data: sans700, weight: 700, style: "normal" },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
