import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "april-postmortem",
  deck: "On April 23, 2026, Anthropic published a postmortem tracing a weeks-long Claude Code quality decline to three product-layer changes — not the model weights — and reset every subscriber's usage limits.",
  body: [
    'On April 23, 2026, Anthropic published an engineering postmortem titled <a href="https://www.anthropic.com/engineering/april-23-postmortem">"An update on recent Claude Code quality reports"</a>, attributing a weeks-long decline in Claude Code quality to three changes in the product layer — not the model weights or inference layer. The three changes affected Claude Code, the Claude Agent SDK, and Claude Cowork, and all fixes were completed by April 20, <a href="https://venturebeat.com/technology/mystery-solved-anthropic-reveals-changes-to-claudes-harnesses-and-operating-instructions-likely-caused-degradation">VentureBeat reported</a>.',
    'The first change, made March 4, lowered the default reasoning, or "thinking," effort from "high" to "medium" for Sonnet 4.6 and Opus 4.6 in order to reduce UI latency; Anthropic later called it <a href="https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/">"the wrong tradeoff"</a> and reverted it on April 7 after users said they would prefer to default to higher intelligence.',
    'A second change, a caching optimization shipped March 26, was intended to clear stale "thinking" once per idle session; <a href="https://www.anthropic.com/engineering/april-23-postmortem">Anthropic\'s postmortem said</a> a bug caused the clearing function to run on every turn instead, making Claude repeatedly lose prior reasoning context and appear "forgetful and erratic," with a fix landing around April 10. A third change, a brevity system prompt added April 16 alongside Opus 4.7, instructed Claude to keep text between tool calls to 25 words or fewer and final responses to 100 words or fewer; this produced about a 3 percent drop in coding quality and was reverted on April 20, <a href="https://dev.to/_46ea277e677b888e0cd13/anthropic-april-23-postmortem-3-confounding-changes-behind-claude-codes-month-long-quality-drop-2pl6">per a developer write-up</a>.',
    'Anthropic denied that the changes were an intentional nerf, writing in the postmortem, <a href="https://www.anthropic.com/engineering/april-23-postmortem">"We never intentionally degrade our models, and we were able to immediately confirm that our API and inference layer were unaffected"</a>; it also acknowledged, <a href="https://www.theregister.com/2026/04/23/anthropic_says_it_has_fixed/">"This isn\'t the experience users should expect from Claude Code"</a> and "We take reports about degradation very seriously." As compensation, the company reset usage limits for all subscribers on April 23, stating, "Today we are resetting usage limits for all subscribers."',
    'The postmortem followed unusually rigorous user documentation. Around April 2, Stella Laurenzo, a Senior Director in AMD\'s AI group, filed a GitHub issue backing the regression with telemetry drawn from 6,852 session files, 17,871 thinking blocks, and 234,760 tool calls, <a href="https://venturebeat.com/technology/mystery-solved-anthropic-reveals-changes-to-claudes-harnesses-and-operating-instructions-likely-caused-degradation">VentureBeat noted</a>; her data showed files read before editing dropped from 6.6 to 2.0, and median thinking length collapsed from roughly 2,200 to roughly 600 characters. Laurenzo calculated that her March usage would have cost about $42,121 per month at Anthropic\'s Bedrock on-demand rates, compared with the roughly $400 per month subscription she paid, <a href="https://www.threads.com/@hanbingjheng/post/DXEUd6UEaJR">about 122 times as much</a>. External benchmarks amplified the picture: TrustedSec measured roughly a 47 percent drop in code quality, and Veracode found Claude introduced vulnerabilities in 52 percent of tasks versus OpenAI\'s 30 percent, <a href="https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/">Fortune reported</a>.',
    'Inside Anthropic, Claude Code lead Boris Cherny described the investigation as <a href="https://www.implicator.ai/anthropic-traces-claude-code-quality-drop-to-three-product-changes-resets-limits/">"probably... the most complex investigation we\'ve had,"</a> adding that "the root causes were not obvious, and there were many confounders." The episode also drew public scrutiny: the Hacker News thread on the postmortem reached 942 points and 732 comments, <a href="https://hn.algolia.com/api/v1/items/47878905">per Algolia data</a>, and The Register headlined its coverage, <a href="https://www.theregister.com/2026/04/23/anthropic_says_it_has_fixed/">"Anthropic admits it dumbed down Claude with upgrades."</a> Multiple users said they felt "gaslit" after weeks in which complaints were often dismissed as user error, or "skill issues," before the bugs were confirmed, <a href="https://medium.com/@brentwpeterson/anthropic-breaks-claude-and-gaslights-us-7616f6678a1a">one account noted</a>.',
  ],
  receipts: [
    "6,852 session files, 17,871 thinking blocks, and 234,760 tool calls in Stella Laurenzo's regression telemetry.",
    "Files read before editing dropped from 6.6 to 2.0; median thinking length collapsed from ~2,200 to ~600 characters.",
    "TrustedSec measured roughly a 47% drop in code quality; Veracode found Claude introduced vulnerabilities in 52% of tasks versus OpenAI's 30%.",
    "Laurenzo's March usage would have cost ~$42,121/month at Bedrock on-demand rates, versus her ~$400 subscription, about 122x.",
    "The Hacker News postmortem thread reached 942 points and 732 comments.",
    "Anthropic reset usage limits for all subscribers on April 23, 2026.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Stella Laurenzo (AMD)",
      meta: "AMD Senior Director; backed the claim with telemetry from 6,852 sessions",
      quote:
        "Claude has regressed to the point it cannot be trusted to perform complex engineering.",
      url: "https://medium.com/@brentwpeterson/anthropic-breaks-claude-and-gaslights-us-7616f6678a1a",
    },
    {
      platform: "x",
      author: "Pieter Levels (@levelsio)",
      meta: 'Quoted in Brent W. Peterson\'s Medium piece "Anthropic Breaks Claude and Gaslights Us"',
      quote:
        "Claude Code with Opus 4.6 was so dumb today I finally had to write my own code again.",
      url: "https://medium.com/@brentwpeterson/anthropic-breaks-claude-and-gaslights-us-7616f6678a1a",
    },
    {
      platform: "hackernews",
      author: "troupo",
      meta: "comment on the postmortem HN thread (942 points, 732 comments)",
      quote:
        "They spent two months literally gaslighting this 'critical audience' that this could not be happening and literally blaming users for using their vibe-coded slop exactly as advertised.",
      url: "https://news.ycombinator.com/item?id=47878905",
    },
    {
      platform: "hackernews",
      author: "fn-mote",
      meta: "on the cache-clearing bug, postmortem HN thread",
      quote:
        "Seems like a very basic software engineering error that would be caught by normal unit testing.",
      url: "https://news.ycombinator.com/item?id=47878905",
    },
    {
      platform: "hackernews",
      author: "ed_elliott_asc",
      meta: "dissenting/positive take in the postmortem HN thread",
      quote:
        "I'm getting far more value from Claude than I am paying, this week I've completed a couple of projects that would have taken a person months and months to do.",
      url: "https://news.ycombinator.com/item?id=47878905",
    },
    {
      platform: "github",
      author: "@up4k73",
      meta: 'GitHub issue #46727: "Opus 4.6 Max 20x: systematic hallucinations... 80% weekly usage wasted"',
      quote:
        "Claude states specific numbers (prices, file sizes, performance metrics, availability) without verifying them. When caught, acknowledges the error but repeats the same pattern minutes later. This is not occasional — it's the default behavior.",
      url: "https://github.com/anthropics/claude-code/issues/46727",
    },
  ],
  images: [],
  aftermath:
    "By April 20 all three product-layer changes had been reverted or fixed; on April 23 Anthropic reset usage limits for every subscriber and maintained that it had never intentionally degraded the models, even as it conceded the experience had fallen short. At the time, Fortune cited the company as valued at roughly $380 billion with about $30 billion in annualized recurring revenue, more than 300,000 enterprise customers, and about 20 million monthly active users.",
};
