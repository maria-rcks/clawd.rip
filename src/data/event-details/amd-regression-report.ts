import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "amd-regression-report",
  deck: "A Senior Director at AMD fed Claude Opus 4.6 six thousand of its own session logs and asked it to explain why it had stopped doing its job; the model complied, Anthropic initially disputed the diagnosis, and a postmortem weeks later confirmed three separate product changes had degraded the product.",
  body: [
    'On April 2, 2026, Stella Laurenzo — GitHub handle <a href="https://github.com/stellaraccident">stellaraccident</a>, Senior Director of the AI Group at AMD — opened <a href="https://github.com/anthropics/claude-code/issues/42796">GitHub issue #42796</a> on anthropics/claude-code. The title, <em>[MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates</em>, was followed not by venting but by 6,852 session JSONL files, 17,871 thinking blocks (7,146 with visible content, 10,725 redacted), 234,760 tool calls, and 18,000+ user prompts spanning January 30 to April 1, 2026. Laurenzo had already switched her team to a competing provider.',
    "The core finding was quantitative. The model's Read:Edit ratio — file reads performed before each file edit — fell from 6.6 in the January 30 to February 12 baseline to 2.0 in March 8 to 23, a 70% reduction in research before editing. Stop-hook violations, essentially premature quitting and responsibility-dodging, rose from zero before March 8 to 173 cumulative by late March. User interrupts and corrections increased roughly twelvefold. The human prompt volume stayed flat: 5,608 in February versus 5,701 in March. Yet Claude consumed approximately 80 times more API requests and 64 times more output tokens to produce worse results. Laurenzo characterized the pattern in plain terms: <em>When thinking is shallow, the model defaults to the cheapest action available: edit without reading, stop without finishing, dodge responsibility for failures, take the simplest fix rather than the correct one.</em>",
    'The report proposed a culprit: the <code>redact-thinking-2026-02-12</code> rollout. Laurenzo noted that independent quality complaints began appearing on March 8, the exact date redacted thinking blocks crossed 50%, with estimated median thinking length collapsing from roughly 2,200 characters to roughly 600. On April 6, Anthropic\'s Boris Cherny (<a href="https://github.com/bcherny">@bcherny</a>) responded in a pinned comment that redact-thinking is <em>a UI-only change</em> that <em>does not impact thinking itself, nor does it impact thinking budgets or the way extended reasoning works under the hood</em>, and directed users to a <code>showThinkingSummaries: true</code> opt-out. The issue reached the top of <a href="https://news.ycombinator.com/item?id=47660925">Hacker News</a> that same day with 1,364 points and 753 comments. Laurenzo, bound by NDAs, said she was <em>reserving judgement</em> on Anthropic pending their handling of the regression.',
    'The report was authored, in a sense, by the accused. Laurenzo had Claude Opus 4.6 analyze its own session logs; the issue includes a first-person reflective note from the model observing that <em>I can see my own Read:Edit ratio dropping from 6.6 to 2.0</em> and <em>I can see myself writing "that was lazy and wrong" about my own output</em>. On April 7, a separate viral claim of a 67% drop by developer Om Patel drew methodological skepticism: researcher Paul Calcraft noted the comparison used 6 tasks initially versus 30 on retest, and on shared tasks the figure moved from 87.6% to 85.4%, suggesting noise rather than systemic degradation. Laurenzo\'s analysis, by contrast, drew on consistent data spanning January 30 to April 1.',
    'Anthropic\'s <a href="https://www.anthropic.com/engineering/april-23-postmortem">April 23, 2026 postmortem</a> admitted three separate product-layer regressions: a reasoning-effort default downgrade from high to medium (March 4 to April 7), a caching bug that cleared reasoning context every turn instead of once per idle session (March 26 to April 10, fixed in v2.1.101), and a system-prompt verbosity instruction that cut eval scores approximately 3% (April 16 to 20). The caching bug, specifically, <em>made it past multiple human and automated code reviews, as well as unit tests, end-to-end tests, automated verification, and dogfooding</em>. Anthropic reset usage limits for all subscribers on April 23. Laurenzo had correctly identified the symptom while Anthropic initially disputed her specific attribution; the company eventually conceded a real regression existed, just from three different causes than the one she had named.',
    'On April 11, X user <a href="https://x.com/Hesamation">@Hesamation</a> posted screenshots of Laurenzo\'s analysis, helping consolidate scattered "Claude got dumb" sentiment into a single data-verified reference point. Laurenzo noted that <em>Every senior engineer on my team has reported similar experiences/anecdotes.</em> The incident remained notable for its structure: a major vendor\'s tool was diagnosed as broken by a senior engineer at a major chipmaker, using the tool\'s own output against it, in a report the tool itself had drafted, leading to a vendor admission that multiple internal safeguards had failed to catch multiple distinct degradations.',
  ],
  receipts: [
    "6,852 session JSONL files and 234,760 tool calls analyzed in the report.",
    "Read:Edit ratio fell from 6.6 to 2.0, a 70% drop in pre-edit research.",
    "Stop-hook violations rose from 0 to 173 between March 8 and late March.",
    "80x more API requests and 64x more output tokens consumed in March versus February, for worse results.",
    "The self-indicting report was authored by Claude Opus 4.6 analyzing its own logs.",
    "Anthropic admitted three separate product changes caused degradation, not the single UI change Laurenzo had named.",
  ],
  reactions: [
    {
      platform: "github",
      author: "stellaraccident",
      meta: "issue comment by the AMD director who filed #42796",
      quote:
        "this is a very serious regression, and I think we're all watching how anthropic deals with it. Ultimately, I need a trusted partner for eng tooling -- and that applies equally to the agent and the manufacturer of the agent... 6 months ago, Claude stood alone in terms of reasoning quality and execution. But the others need to be watched and evaluated very carefully. Anthropic is far from alone at the capability tier that opus previously occupied.",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "eljojo",
      meta: "GitHub issue comment",
      quote:
        "Incredible analysis. As a user, I experienced this over the past weeks and couldn't put my finger on it. The point on `Research-First → Edit-First` stood out to me, I've been tweaking all my CLAUDE.md to counteract this, without realizing.",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "gbaraldi",
      meta: "GitHub issue comment",
      quote:
        "Working on what I imagine are similar codebases (LLVM/MLIR/compilers in general). The amount of 'this is a good place to stop' I was getting was infuriating. It did tens of useless commits and I just felt that it was \"dumber\" overall",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "benvanik",
      meta: "GitHub issue comment",
      quote:
        "I'm not sharing my logs publicly, because obviously not, but we did send them along corporate channels to Anthropic if they prove useful in showing what the thinking redaction causes - I implore everyone to go check their own logs if they haven't been automatically cleaned up yet - read:edit ratio is one of the biggest tells.",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "nukeop",
      meta: "GitHub issue comment, on the AI-generated report",
      quote: "What in the wall of AI slop is this?",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
  ],
  images: [
    {
      src: "/events/amd-regression-report/slack-screenshot.png",
      alt: "Screenshot of a Slack message about Claude Code quality degradation posted in the GitHub issue",
      caption:
        "A work-Slack message embedded in the issue thread by a commenter, describing the moment they realized colleagues had independently noticed Claude's degradation. Source: GitHub issue #42796.",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/42796",
      width: 1168,
      height: 596,
    },
  ],
  aftermath:
    "As of the April 23 postmortem, Anthropic said the reasoning-effort downgrade, the caching bug, and the verbosity instruction had all been wound back, with the caching fix shipping in v2.1.101 and usage limits reset for every subscriber. Laurenzo's team remained on a competing provider. The lasting artifact is a bug report that diagnosed an AI coding tool using the tool's own logs, written by the tool itself, against the tool.",
};
