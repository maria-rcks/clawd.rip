import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fable-5-last-day-extension",
  deck: "On July 7, 2026, the day Fable 5 was supposed to leave paid Claude plans, Claude extended bundled access through July 12 — while keeping the same 50% weekly cap and giving no confirmed usage reset to the people who had already spent down their allowance.",
  body: [
    'At 10:36 AM PT on July 7, Claude posted that it was <a href="https://x.com/claudeai/status/2074548242386178258">extending access to Claude Fable 5 on all paid plans through July 12</a>. The visible X page showed 6.2 million views during capture, with Firecrawl seeing about 54,000 likes and 5,600 reposts. The timing was the whole story: Anthropic\'s June 30 redeployment post had told users that Fable 5 would be included for Pro, Max, Team, and select Enterprise users <a href="https://www.anthropic.com/news/redeploying-fable-5">only through July 7</a>, after which it would move to usage credits.',
    'The follow-up clause was less festive than the headline. Claude said the promo still worked "as before": up to 50% of a weekly usage limit on Fable 5, then usage credits or another model. The updated <a href="https://support.claude.com/en/articles/15424964-claude-fable-5-promotional-access">Claude Help Center article</a> set the new end time at July 12, 2026 at 11:59:59 PM PT, but also repeated that Fable 5 draws from regular weekly usage, uses it faster than other Claude models, and does not grant a fresh allowance if other usage has already eaten the plan limit.',
    'That made the extension feel like a trapdoor for anyone who had optimized around the old cutoff. Users had spent the morning treating July 7 as the last bundled day; Global Nerdy even published a <a href="https://www.globalnerdy.com/2026/07/07/happy-last-free-day-of-claude-fable-5-everybody/">"last free day" guide</a> before the announcement. By the time Claude extended the window, the highest-signal replies were not "thank you" but "reset the limits." Users with weekly resets after July 12 had an especially grim version of the deal: five more calendar days, zero practical Fable left.',
    "The result was a perfect rate-limit discourse crystallization. The company did give people more time, but it announced that time on the old final day, after the predictable rush had already happened, and without confirming the one thing that would have made the extension materially useful to power users: a fresh usage counter.",
  ],
  receipts: [
    "Prior official window: July 1 through July 7, then usage credits, per Anthropic's June 30 redeployment post.",
    "New official window: July 1 through July 12, 2026 at 11:59:59 PM PT, per the Claude Help Center.",
    "The extension announcement landed July 7 at 10:36 AM PT, roughly thirteen hours before the old cutoff.",
    "The 50% weekly Fable 5 cap remained in force after the extension.",
    "No July 7 official usage reset was confirmed during this research pass.",
    "Captured X page text showed 6.2M views for the official announcement.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@claudeai",
      meta: "Jul 7, 2026 · 6.2M views captured",
      quote: "We're extending access to Claude Fable 5 on all paid plans through July 12.",
      url: "https://x.com/claudeai/status/2074548242386178258",
    },
    {
      platform: "x",
      author: "@Hesamation",
      meta: "Jul 7, 2026 · ~3.2K likes",
      quote: "already OBLITERATED your usage limits.",
      url: "https://x.com/Hesamation/status/2074550846247903705",
    },
    {
      platform: "x",
      author: "@samelldev",
      meta: "Jul 7, 2026 · ~1.8K likes",
      quote: "my plan doesn't reset until July 13",
      url: "https://x.com/samelldev/status/2074551344296587319",
    },
    {
      platform: "x",
      author: "@zygisSS22",
      meta: "Jul 7, 2026 · ~1.2K likes",
      quote: "Now reset the limits so I can actually use it",
      url: "https://x.com/zygisSS22/status/2074548767827632216",
    },
    {
      platform: "x",
      author: "@testingcatalog",
      meta: "Jul 7, 2026 · ~1.2K likes",
      quote: "Can we also get a Fable 5 reset please?",
      url: "https://x.com/testingcatalog/status/2074549386588127242",
    },
    {
      platform: "x",
      author: "@InfiniteReign88",
      meta: "Jul 7, 2026 · ~790 likes",
      quote: "At least reset the limits",
      url: "https://x.com/InfiniteReign88/status/2074554944699466204",
    },
    {
      platform: "x",
      author: "@HarveenChadha",
      meta: "Jul 7, 2026 · ~271 likes",
      quote: "extending access to fable without doing a reset",
      url: "https://x.com/HarveenChadha/status/2074559415626465516",
    },
    {
      platform: "x",
      author: "Simon Willison",
      meta: "Jul 7, 2026 · oEmbed",
      quote: "regretting having carefully blasted through 100% of my Fable allotment",
      url: "https://x.com/simonw/status/2074565236619927935",
    },
    {
      platform: "x",
      author: "Theo - t3.gg",
      meta: "Jul 7, 2026 · oEmbed",
      quote: "I would have played my cards very differently",
      url: "https://x.com/theo/status/2074579491243049356",
    },
  ],
  images: [
    {
      src: "/events/fable-5-last-day-extension/official-x-post.png",
      alt: "Screenshot of Claude's July 7, 2026 X post extending Claude Fable 5 access through July 12",
      caption:
        "The official @claudeai announcement as captured on July 7, 2026. The browser capture of the same page showed 6.2M views.",
      sourceUrl: "https://x.com/claudeai/status/2074548242386178258",
      width: 1210,
      height: 452,
    },
  ],
  aftermath:
    'As of this research pass, the public record supports "announced on the old final day" much more strongly than any hidden-motive claim. The unresolved user-facing question is simpler: whether Anthropic will reset weekly and five-hour limits for subscribers who spent Fable 5 under the July 7 deadline and now cannot benefit from the July 12 extension.',
};
