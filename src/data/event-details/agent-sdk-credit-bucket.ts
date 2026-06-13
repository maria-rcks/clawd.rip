import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "agent-sdk-credit-bucket",
  deck: "Anthropic bifurcated subscription limits to extract full API rates from programmatic Claude usage, converting a subsidized developer perk into a second bill.",
  body: [
    'On May 13, 2026, Anthropic announced <a href="https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan">via @ClaudeDevs</a> that starting June 15, 2026, four programmatic surfaces—Agent SDK, <code>claude -p</code> non-interactive commands, Claude Code GitHub Actions, and third-party apps using Agent SDK authentication—would exit subscription usage limits and draw from a separate monthly credit instead. Interactive Claude Code in terminals and IDEs, Claude.ai web and mobile chat, and Claude Cowork retained their existing limits and were unaffected.',
    "The new credits are fixed per user, non-poolable, non-rollover, and require a one-time opt-in that then auto-renews: Pro receives $20, Max 5x $100, Max 20x $200, Team Standard $20, Team Premium $100, Enterprise usage-based $20, and Enterprise seat-based Premium $200. Enterprise Standard seats receive $0, a detail frequently omitted from the policy summary. Agent SDK draws from this credit before any other source; once exhausted, usage converts to standard API rates only if usage credits are explicitly enabled, and overflow billing is disabled by default, meaning automated requests can silently stop until the next billing cycle.",
    'Boris Cherny, Head of Claude Code, stated that Anthropic\'s systems are "highly optimized for one kind of workload" and that subscriptions "weren\'t built for the usage patterns of these third-party tools." Anthropic\'s own analysis found heavy OpenClaw users extracted roughly $236 of API-equivalent compute from a $20 Pro subscription, a 12:1 subsidy ratio; independent analyses at the Max 20x tier estimated ratios as high as 175:1. Third-party math placed the effective price increase between approximately 12x and 175x depending on tier and model, with Theo Browne\'s "25x cut" framing becoming the canonical critical estimate.',
    "The competitive comparison is ungenerous. Cursor Ultra at $200/month provides a $400 programmatic credit, double the envelope. ChatGPT Pro at $200 provides zero programmatic access. Anthropic Max 20x provides a $200 SDK credit at full API rates on top of already generous interactive limits, a structure that preserves subsidized chat while removing subsidized automation.",
    'Lydia Hallie, who works on Claude Code at Anthropic, posted a clarification tweet that received a Community Note confirming the core transaction: previously <code>claude -p</code> counted toward subsidized subscription limits, and starting June 15 it draws from the separate $20–$200 credit at API rates. Theo Browne (T3.gg) responded that he must "make the Claude Code experience on T3 Code significantly worse," canceled his subscription, and directed users toward Codex, Cursor, and upcoming Gemini integrations.',
    "The policy was the third restriction in a ten-week sequence: an April 4 third-party ban, an April 21 Claude Code removal test, and the May 13/14 announcement effective June 15. Anthropic emailed Max 20x subscribers on May 13 at 8:10 PM PT, then sent a follow-up on June 8 ahead of the effective date.",
  ],
  receipts: [
    "Effective date: June 15, 2026.",
    "Max 20x SDK credit: $200/month at API rates.",
    "Enterprise Standard seats: $0 credit.",
    "Subsidy ratio for heavy OpenClaw Pro users: 12:1.",
    "Estimated Max 20x heavy Sonnet subsidy ratio: 175:1.",
    "Theo Browne's canonical price hike estimate: 25x.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Theo Browne (@t3dotgg)",
      meta: "T3.gg founder; framing became the canonical '25x cut' critique, quoted via the MagnaCapax gist",
      quote:
        "If you use any of the following with your Claude sub, your usage just got cut by 25x: T3 Code, Conductor, Zed, Jean, `claude -p` in your CI",
      url: "https://gist.github.com/MagnaCapax/d9177e35b355853f03c730dfcaa693ef",
    },
    {
      platform: "x",
      author: "Matt Pocock",
      meta: "author of the first paid Claude Code course, quoted via BiggGo",
      quote:
        "This is the clarity that we've been crying out for — but it's a poisoned chalice. It's a 40x cut to Claude-P disguised as a monthly bonus.",
      url: "https://finance.biggo.com/news/382b1ef1c37acfb3",
    },
    {
      platform: "x",
      author: "Lydia Hallie",
      meta: "Anthropic staffer working on Claude Code; this tweet was Community-Noted",
      quote:
        "To add some clarity: you don't pay extra. It's the same subscription, same price per month.",
      url: "https://the-decoder.com/claude-subscriptions-get-separate-budgets-for-programmatic-use-billed-at-full-api-prices/",
    },
    {
      platform: "x",
      author: "Ben Hylak",
      meta: "Raindrop.ai CTO, on whether the move signals compute constraints; quoted via the MagnaCapax gist",
      quote: "really silly, or shows how bad of a spot anthropic is in re: gpus",
      url: "https://gist.github.com/MagnaCapax/d9177e35b355853f03c730dfcaa693ef",
    },
    {
      platform: "hackernews",
      author: "genxy",
      meta: "Tell HN thread, 10 points / 12 comments",
      quote:
        "Well damn, I have claude code drive `claude -p` heavily during development, this makes my $200 a month plan (which I don't tap out of) significantly less attractive.",
      url: "https://news.ycombinator.com/item?id=48130374",
    },
    {
      platform: "hackernews",
      author: "subarnab",
      meta: "Show HN: claude-pee workaround, 7 points",
      quote:
        "the monthly credit pool is charged at API rates, which effectively kills any serious programmatic usage for hobbyists.",
      url: "https://news.ycombinator.com/item?id=48129813",
    },
  ],
  images: [],
  aftermath:
    "As of mid-June 2026 the change has been announced and emailed twice but has not yet taken effect; once the June 15, 2026 cutover lands, programmatic Claude usage bills at API rates through the separate credit, and developers who built workflows on the previous subsidized structure face a choice: absorb the cost, leave overflow billing disabled and accept silent failures once the credit runs dry, or migrate to competitors offering larger or unlimited programmatic credits, which is the path Theo Browne already announced.",
};
