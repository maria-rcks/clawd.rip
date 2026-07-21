import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fable-5-plan-paywall",
  deck: "Anthropic ended the Fable 5 promotion with a permanent class system: no bundled access on Pro, only half-limit access on Max and premium seats, and a one-time $100 credit that heavy Claude Code users report can disappear in fewer than two prompts.",
  body: [
    'On July 18, Claude announced the rules that would take effect July 20: <a href="https://x.com/claudeai/status/2078302415804379218">Fable 5 would become a standard benefit only on Max and Team Premium plans, at 50% of limits</a>. The final <a href="https://support.claude.com/en/articles/15424964-claude-fable-5-on-your-plan">Help Center matrix</a> also includes premium seats on legacy seat-based Enterprise plans. Pro, Team Standard, and standard legacy Enterprise seats get no Fable allowance inside their subscription at all; the model starts on pay-as-you-go credits. Free users get no access.',
    'The "50%" is not a bonus bucket. Anthropic explicitly says Fable draws from the same weekly limit as every other model, and that using another model can leave less Fable available. The separate Claude Code bonus period also ended July 20, shrinking the underlying weekly allowance by a third before the Fable cap was applied. As <a href="https://the-decoder.com/anthropic-slashes-claude-fable-5-limits-in-max-and-team-premium-and-pushes-pro-users-toward-api-pricing/">The Decoder summarized it</a>, Max and premium-seat customers are left with Fable at half of an already-reduced limit. A $100-to-$200 monthly Max subscription therefore buys neither an extra 50% nor full use of Anthropic\'s flagship model.',
    'For Pro and Team Standard, Anthropic replaced recurring bundled access with a <a href="https://support.claude.com/en/articles/15862783-claude-fable-5-one-time-free-credits-promotion">one-time $100 usage-credit promotion</a>. It is narrower than the headline: users had to hold an eligible plan by July 19, must claim by August 2, and the balance expires September 17 whether claimed early or late. Claiming also turns on usage credits and requires a payment method if one is not already attached. Max users, premium seats, and every Enterprise seat are excluded from this credit offer.',
    'At Anthropic\'s published <a href="https://www.anthropic.com/pricing#api">$10 per million input tokens and $50 per million output tokens</a>, $100 is meaningful for short chats but fragile for the long-running agent work Fable is marketed to do. A Claude Code "prompt" is not one API exchange: it can trigger a long loop of repository reads, tool calls, repeated context, reasoning, and generated code. One <a href="https://www.reddit.com/r/ClaudeAI/comments/1uzjcop/fable_staying_on_max/">user put the Pro five-hour Fable allowance at roughly $50 and said the whole amount could be one prompt</a>; another <a href="https://www.reddit.com/r/ClaudeCode/comments/1uxzjry/hit_my_limit_yesterday_caved_and_bought_50_credit/">reported buying $50 in credits and watching a single Fable prompt consume more than that</a>. Those are user reports, not a universal per-prompt price, but they make the practical point: for heavy Claude Code runs, the celebrated $100 bridge may not cover even two prompts.',
    'Anthropic said demand had been hard to predict and that it had added capacity in stages. The outcome is still a clean upsell funnel: the $20 plan loses bundled access, the $100 and $200 plans retain a rationed version, and everyone who crosses the line becomes an API-priced customer. After three deadline extensions, the promised "certainty" turned out to be a permanent meter.',
  ],
  receipts: [
    "Effective July 20: bundled Fable 5 only on Max, Team Premium, and premium legacy Enterprise seats.",
    "Max and premium seats: Fable is capped at 50% of the regular weekly limit; it is not an extra 50% allowance.",
    "Pro and Team Standard: Fable uses pay-as-you-go credits from the first token.",
    "One-time credit: $100 for eligible Pro accounts and $100 per purchased Team Standard seat, pooled and capped at $2,500 per organization.",
    "Claim deadline: August 2, 2026 at 11:59 PM PT. Expiration: September 17, 2026 at 11:59 PM PT.",
    "Published Fable 5 rate: $10/M input tokens, $50/M output tokens—twice Opus 4.8's $5/$25 rates.",
    "User reports put a single heavy Claude Code prompt at roughly $50 or more; that is workload evidence, not a fixed prompt price.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@claudeai",
      meta: "Jul 18, 2026 · ~53.6K likes captured",
      quote:
        "Beginning July 20, Claude Fable 5 will be included in all Max and Team Premium plans, at 50% of limits.",
      url: "https://x.com/claudeai/status/2078302415804379218",
    },
    {
      platform: "reddit",
      author: "r/ClaudeAI user",
      meta: "r/ClaudeAI · Jul 2026",
      quote: "$50 for the pro 5h limit with fable, so yeah...$100 can be one prompt.",
      url: "https://www.reddit.com/r/ClaudeAI/comments/1uzjcop/fable_staying_on_max/",
    },
    {
      platform: "reddit",
      author: "r/ClaudeCode user",
      meta: "r/ClaudeCode · Jul 2026",
      quote:
        "If Fable is going to move toward credits, and it eats up >$50 per prompt, that's obviously not going to work.",
      url: "https://www.reddit.com/r/ClaudeCode/comments/1uxzjry/hit_my_limit_yesterday_caved_and_bought_50_credit/",
    },
    {
      platform: "x",
      author: "@st3v3li",
      meta: "Reply · ~12.3K likes captured",
      quote: "It’s ok to admit you are afraid of Codex and Kimi bro",
      url: "https://x.com/st3v3li/status/2078321966642307154",
    },
  ],
  aftermath:
    "The split is now live. Max and premium-seat users can spend at most half their shared weekly limit on Fable 5, while Pro and standard-seat users need a credit balance from the start. The promotional $100 is temporary and non-recurring; once it expires or runs out, continued Fable use is billed at standard API rates.",
};
