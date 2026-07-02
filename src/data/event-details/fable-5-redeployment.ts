import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fable-5-redeployment",
  deck: "The export controls died on July 1, 2026 after government testing confirmed rival models matched the 'dangerous' capability — but the Fable 5 that came back was capped at 50% of weekly usage limits, included in subscriptions for only six days, wrapped in trigger-happy classifiers that bounce coding work to Opus 4.8, and credits-only after July 7.",
  body: [
    'On June 30, Anthropic announced the Commerce Department had <a href="https://x.com/AnthropicAI/status/2072106151890809341">lifted the export controls</a>, and on July 1 it published <a href="https://www.anthropic.com/news/redeploying-fable-5">"Redeploying Fable 5."</a> The justification for the three-week ban had quietly collapsed: testing showed that <a href="https://the-decoder.com/anthropics-fable-5-is-back-worldwide-after-a-two-week-government-ban-over-a-jailbreak/">Claude Opus 4.8, GPT-5.5, and Moonshot\'s Kimi K2.7 could all identify the same vulnerabilities</a> Amazon researchers had flagged — and for the specific exploit demonstration, every tested model, <em>including Claude Haiku 4.5</em>, produced identical results. Anthropic called the whole thing an "edge case" involving <a href="https://www.anthropic.com/news/redeploying-fable-5">"routine defensive cybersecurity work"</a> and conceded it is "probably impossible to make any AI model fully robust... to jailbreaks."',
    'The redeployment terms were less generous than the apology. Pro, Max, Team, and select Enterprise plans get Fable 5 included <a href="https://www.anthropic.com/news/redeploying-fable-5">for up to 50% of weekly usage limits — and only through July 7</a>; standard Enterprise seats get no included allowance at all unless usage credits are enabled. After July 7, six days post-return, Fable 5 drops out of subscriptions entirely and runs on <a href="https://x.com/claudeai/status/2072402636813607381">usage credits</a> at API pricing of $10/$50 per million tokens, roughly double Opus 4.8. And as <a href="https://www.axios.com/2026/07/01/anthropic-fable-5-back-online-trump-export-controls-lifted">Axios noted</a>, Fable burns through limits faster than other models, so the 50% cap is smaller than it sounds. Subscribers who bought plans on June 10 to use Fable got two days of the real model, a nineteen-day ban, and six days of a rationed comeback before the meter started.',
    'The comeback model also arrived pre-lobotomized. Anthropic shipped <a href="https://x.com/AnthropicAI/status/2072163884430229756">"a new set of classifiers"</a> under which "some routine tasks like coding and debugging will fall back to Opus 4.8" — for a model whose flagship use case was coding. The Commerce Department\'s Center for AI Standards and Innovation confirmed the new classifier blocks the Amazon bypass in <a href="https://easternherald.com/2026/07/02/anthropic-fable-5-restored-export-controls-lifted/">more than 99 percent of cases</a>, which Anthropic admitted comes at the cost of more false positives on legitimate work — the same overblocking trade it had apologized for during the launch-week invisible-safeguards fiasco.',
    'The price of getting un-banned was a deeper embrace of the government that banned it: <a href="https://easternherald.com/2026/07/02/anthropic-fable-5-restored-export-controls-lifted/">pre-release government access to unreleased models, rapid jailbreak information-sharing, dedicated joint research teams, and co-developed industry standards</a>, built on a consensus framework with Amazon, Microsoft, Google, and other Project Glasswing partners. Mythos 5 remains locked to <a href="https://easternherald.com/2026/07/02/anthropic-fable-5-restored-export-controls-lifted/">roughly 100 vetted US organizations</a>. Even competitors balked at the precedent — Sam Altman said safety testing was reasonable but objected to <a href="https://www.theguardian.com/technology/2026/jul/01/anthropic-fable-mythos-ai-models-us-export-controls-lifted">"the government picking the customers,"</a> while OpenAI warned that <a href="https://www.businessinsider.com/anthropic-mythos-5-us-restrictions-fable-5-openai-gpt-2026-6">government access limits should not become the default</a>. The company that spent years warning its own products were nearly too dangerous to ship now co-writes the safety rules with the regulator that took its word for it.',
    'Users did the math immediately. The <a href="https://x.com/claudeai/status/2072402636813607381">"Fable 5 is back"</a> post pulled 62K likes and 4.8 million views, but the replies were a wall of complaints about the 50% cap, the six-day window, the coding fallback, and the credits cliff — with more than one person recalling that <a href="https://x.com/Jesseeckel/status/2072385590943990148">Dario also thought GPT-2 was too dangerous for the general public</a>.',
  ],
  receipts: [
    "Included allocation: up to 50% of weekly usage limits — through July 7 only, six days after the July 1 return.",
    "After July 7: usage credits only, at $10/$50 per million tokens — roughly double Opus 4.8.",
    "Standard Enterprise seats get no included Fable 5 allowance at all unless usage credits are enabled.",
    "Even Claude Haiku 4.5 reproduced the exploit demonstration that triggered the ban.",
    "New classifiers bounce 'routine tasks like coding and debugging' to Opus 4.8 — on a model sold for coding.",
    "The new safety classifier blocks the Amazon bypass in >99% of cases, at the admitted cost of more false positives.",
    "Nobody explained why a capability present in three competing models justified restricting only one of them for three weeks.",
    "Mythos 5 stays locked to ~100 vetted US organizations under Project Glasswing.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@claudeai",
      meta: "Jul 1, 2026 · ~62K likes · 4.8M views",
      quote:
        "Fable 5 is back. All paid plans... can access Fable 5 through July 7. You can use Fable 5 up to 50% of your weekly usage limit, after which you can switch... or continue using Fable via usage credits.",
      url: "https://x.com/claudeai/status/2072402636813607381",
    },
    {
      platform: "x",
      author: "@FixlationAI",
      meta: "Jul 1, 2026 · ~1.3K likes · reply to the redeployment announcement",
      quote:
        "Fable 5 will only be included for up to 50% of your weekly usage limits 😶 And it's only available on plans for 6 days before being removed on July 7, then it becomes credits-only..",
      url: "https://x.com/AnthropicAI/status/2072163884430229756",
    },
    {
      platform: "x",
      author: "@erawrlyne",
      meta: "Jul 1, 2026 · ~1.1K likes",
      quote:
        "So we basically have Fable on our sub for less time than originally planned, for less usage allowed of the sub than originally allowed, and it also can't be used for coding tasks during the time we CAN use it? Why would anyone even stay subbed.",
      url: "https://x.com/AnthropicAI/status/2072163884430229756",
    },
    {
      platform: "x",
      author: "@TimSweeneyEpic (Tim Sweeney)",
      meta: "Jul 1, 2026 · ~1K likes",
      quote: '"Routine tasks like coding and debugging" lol wat?',
      url: "https://x.com/TimSweeneyEpic/status/2072177912217006314",
    },
    {
      platform: "x",
      author: "@kimseong",
      meta: "Jul 1, 2026",
      quote:
        "Fable 5 coming back with coding restrictions is like buying a sports car and being told you can only drive it in first gear.",
      url: "https://x.com/kimseong/status/2072168598706266490",
    },
    {
      platform: "x",
      author: "@Jesseeckel",
      meta: "Jul 1, 2026",
      quote:
        "Within 6 months open source models will be Fable level without the over the top guardrails. All of this pausing has been pointless. Remember Dario also thought GPT 2 was too dangerous for the general public.",
      url: "https://x.com/Jesseeckel/status/2072385590943990148",
    },
    {
      platform: "news",
      author: "Sam Altman",
      meta: "Via The Guardian, Jul 1, 2026",
      quote: "Safety testing is reasonable, but I object to the government picking the customers.",
      url: "https://www.theguardian.com/technology/2026/jul/01/anthropic-fable-mythos-ai-models-us-export-controls-lifted",
    },
    {
      platform: "x",
      author: "@crush100x",
      meta: "Jul 1, 2026",
      quote:
        ">subscribe June 10th >Fable (real) removed June 12th >Fable v69 Cucked Edition™ returns July 1st >Credits only from July 7th",
      url: "https://x.com/crush100x/status/2072178209752506440",
    },
  ],
  aftermath:
    'Fable 5 is live again on the Claude Platform, Claude.ai, Claude Code, and Claude Cowork, with cloud-provider access on AWS, Google Cloud, and Microsoft Foundry <a href="https://www.anthropic.com/news/redeploying-fable-5">restored on a rolling basis</a>. The clock runs out July 7, when the model becomes a metered add-on for everyone — a "taste and lock" rollout, as users put it, arriving on top of a year of rate-limit walls, credit buckets, and pricing whiplash. Anthropic\'s deeper coordination with the US government — pre-release access, joint research teams, shared standards — is now permanent policy, meaning the next "too dangerous" claim will have a fast lane straight to the people with the off switch.',
};
