import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "openclaw-claw-tax",
  deck: "On April 4, 2026, Anthropic informed Claude Code subscribers that their subscription limits would no longer cover third-party harnesses including OpenClaw, leaving users to choose between separate API keys at full token rates and a newly created pay-as-you-go usage bill.",
  body: [
    'Starting April 4, 2026 at noon Pacific (3PM ET), Claude Code subscribers <a href="https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/">learned by Friday evening email</a> that their Claude subscription limits would no longer apply to third-party harnesses including OpenClaw. Anthropic said the change began with OpenClaw but <em>"applies to all third-party harnesses and will be rolled out to more shortly."</em> Affected users had two paths: switch to a pay-as-you-go <em>"Extra Usage"</em> option billed separately from their subscription, or plug in a separate API key at full token rates.',
    'Boris Cherny, Anthropic\'s head of Claude Code, <a href="https://www.pymnts.com/artificial-intelligence-2/2026/anthropic-says-claude-code-users-will-need-to-pay-more-for-openclaw/">wrote on X</a> that the company\'s <em>"subscriptions weren\'t built for the usage patterns of these third-party tools"</em> and that Anthropic wanted <em>"to be intentional in managing our growth to continue to serve our customers sustainably long-term."</em> Anthropic justified the move by saying third-party agentic usage placed an <em>"outsized strain on our systems"</em>, since subscriptions were designed for human chat usage rather than autonomous agent workflows.',
    'OpenClaw creator Peter Steinberger had left the project to join OpenAI in February 2026; the tool continued as an open-source project with OpenAI\'s support, and Sam Altman praised the move. Steinberger and board member Dave Morin said they <em>"tried to talk sense into Anthropic"</em> but secured only a one-week delay. Steinberger framed the timing as competitive, saying: <em>"Funny how timings match up, first they copy some popular features into their closed harness, then they lock out open source."</em> Cherny countered that Claude Code team members are <em>"big fans of open source"</em> and that he personally contributed pull requests to improve OpenClaw.',
    'On April 10, 2026, Anthropic <a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">temporarily suspended Steinberger\'s own Claude account</a>, citing <em>"suspicious"</em> activity; the account was reinstated within hours after the incident went viral. Steinberger said he had been following the new rule and using his API but was banned anyway. An Anthropic engineer publicly stated the company had <em>"never banned anyone for using OpenClaw"</em> and offered to help resolve Steinberger\'s suspension.',
    'Anthropic offered affected subscribers a full refund, a one-time credit equivalent to monthly subscription cost redeemable by April 17, plus discounts up to 30% on prepurchased usage bundles. The company <a href="https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch">later reinstated third-party agent usage</a> on Claude subscriptions, though with a catch — a fixed, non-rollover monthly credit of roughly $20-$200 depending on the Claude plan, billed at API rates.',
    'The <em>"Tell HN"</em> thread <a href="https://news.ycombinator.com/item?id=47633396">announcing the change</a> drew 1,099 points and 827 comments, making it one of the most-discussed Claude policy stories on Hacker News. The April 4 TechCrunch article led with a stock photo captioned <em>"Red rubber lobster toy on blue background"</em> — a nod to OpenClaw\'s lobster/claw branding.',
  ],
  receipts: [
    "Effective date: April 4, 2026 at noon Pacific (3PM ET), per a Friday evening email.",
    'Boris Cherny: subscriptions "weren\'t built for the usage patterns of these third-party tools."',
    'Peter Steinberger and Dave Morin "tried to talk sense into Anthropic" and got one week.',
    'Steinberger\'s account suspended April 10, 2026, citing "suspicious" activity; reinstated within hours.',
    "Hacker News: 1,099 points, 827 comments.",
    'TechCrunch photo caption: "Red rubber lobster toy on blue background."',
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "operatingthetan",
      meta: "comment on 'Tell HN: Anthropic no longer allowing Claude Code subscriptions to use OpenClaw' (1,099 points, 827 comments)",
      quote: "Say goodbye to my 600$/month Anthropic.",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "hackernews",
      author: "alasano",
      meta: "comment on the OpenClaw HN thread",
      quote:
        "You don't pay for capacity, you pay for an interface. Paying for capacity is what API keys are for.",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "hackernews",
      author: "SpicyLemonZest",
      meta: "comment on the OpenClaw HN thread",
      quote:
        "I think that just as with ISPs people become irate when they feel there's been a bait-and-switch.",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "other",
      author: "Hadlock",
      meta: "Slashdot comment, Score: 5, Insightful",
      quote:
        "I cancelled my subscription overnight...I am not going to be locked into someone's walled garden again.",
      url: "https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw",
    },
    {
      platform: "other",
      author: "ukoda",
      meta: "Slashdot comment, Score: 5, Insightful",
      quote:
        "Looks like they think they have passed the point where they need more customers and are now...milking them.",
      url: "https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw",
    },
    {
      platform: "x",
      author: "Peter Steinberger (@steipete)",
      meta: "post on X, quoted in TechCrunch; OpenClaw's creator, now at OpenAI",
      quote:
        "Yeah folks, it's gonna be harder in the future to ensure OpenClaw still works with Anthropic models.",
      url: "https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/",
    },
  ],
  images: [],
  aftermath:
    "Anthropic eventually restored third-party agent access to Claude subscriptions under a fixed, non-rollover monthly credit capped between roughly $20 and $200 depending on plan tier, billed at API rates. Steinberger had moved to OpenAI, OpenClaw remained an open-source project backed by the competitor, and users had learned that building on Claude could incur a second bill once the tool got popular.",
};
