import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "september-postmortem",
  deck: "Anthropic published a postmortem on September 17, 2025, explaining that three overlapping infrastructure bugs had degraded Claude response quality for weeks, after users spent August and early September asking why their model had gotten worse.",
  body: [
    'On September 17, 2025, Anthropic published an engineering blog postmortem titled <a href="https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues">"A postmortem of three recent issues,"</a> authored by Sam McAllister. The post explained that three separate infrastructure bugs had intermittently degraded Claude response quality from August into early September 2025. The admission arrived after weeks of public complaints, including a <a href="https://ilikekillnerds.com/2025/09/09/anthropic-finally-admits-claude-quality-degradation/">September 9 critique</a> noting that Claude Code had "fell off a cliff" for weeks while the company stayed "radio silent" and its subreddits filled with "I\'m cancelling" threads.',
    'Bug 1 was a context-window routing error beginning August 5. Short-context Sonnet 4 requests were misrouted to servers configured for the 1M-token context window. It initially affected 0.8% of requests, but an August 29 load-balancing change escalated impact to as much as 16% of Sonnet 4 requests at peak on August 31. Because of "sticky routing," once a user\'s request hit the wrong server pool, follow-up requests stayed on the same broken servers, making the degradation feel deliberately targeted. About 30% of Claude Code users who made a request during the window had at least one misrouted message.',
    "Bug 2, deployed August 25, was an output-corruption issue from a TPU server misconfiguration. During token generation it assigned incorrect high probabilities to wrong tokens, producing symptoms like Thai or Chinese characters appearing in English responses and obvious syntax errors in code. It affected Opus 4.1 and Opus 4 from August 25 to 28 and Sonnet 4 from August 25 to September 2, and was rolled back September 2. Bug 3 was a latent XLA:TPU compiler miscompilation, an approximate top-k bug triggered August 25 by a token-selection code change, rooted in a mixed-precision mismatch between <code>bf16</code> and <code>fp32</code>. It affected Claude Haiku 3.5 and likely some Sonnet 4 and Opus 3 requests; fixes rolled out September 4 for Haiku and September 12 for Opus.",
    'Third-party platforms were far less affected. At peak, the routing bug hit about 0.18% of Sonnet 4 requests on Amazon Bedrock and under 0.0004% on Google Vertex AI. The output-corruption bug did not affect third-party platforms at all. The serving complexity stemmed from running across three hardware platforms — AWS Trainium, NVIDIA GPUs, and Google TPUs — each needing specific optimizations, with Python and JAX in the serving layer. Overlapping bugs produced what <a href="https://simonwillison.net/2025/Sep/17/anthropic-postmortem/">independent coverage</a> summarized as a "confusing mix of reports that didn\'t point to any single cause."',
    'Anthropic admitted its evaluations missed the problem, writing: <em>"The evaluations we ran simply didn\'t capture the degradation users were reporting, in part because Claude often recovers well from isolated mistakes."</em> The company also said its own privacy and security controls slowed debugging: <em>"Our internal privacy and security controls limit how and when engineers can access user interactions with Claude, in particular when those interactions are not reported to us as feedback."</em> It explicitly denied throttling quality by load, stating: <em>"To state it plainly: We never reduce model quality due to demand, time of day, or server load."</em> And it conceded: <em>"We recognize users expect consistent quality from Claude, and we maintain an extremely high bar for ensuring infrastructure changes don\'t affect model outputs. In these recent incidents, we didn\'t meet that bar."</em>',
    'Going forward, Anthropic said it would adopt more sensitive evaluations, continuous production quality monitoring, and faster debugging tooling, and asked users to send feedback via the <code>/bug</code> command or thumbs-down buttons. The postmortem reached the front page of <a href="https://news.ycombinator.com/item?id=45281139">Hacker News</a> as story 45281139, accumulating roughly 381 points and 116 comments, with debate split between praise for the transparency and frustration over the lack of user credits.',
  ],
  receipts: [
    "16% of Sonnet 4 requests degraded at peak on August 31, up from 0.8% when the routing bug began on August 5.",
    "About 30% of Claude Code users who made a request during the window got at least one misrouted message.",
    "On Google Vertex AI the routing bug peaked at under 0.0004% of Sonnet 4 requests; on Amazon Bedrock, about 0.18%.",
    "Symptoms included Thai or Chinese characters appearing in English responses and syntax errors in code.",
    "Bug 3 was a mixed-precision mismatch between bf16 and fp32; Haiku fixes shipped September 4, Opus fixes September 12.",
    "The postmortem landed September 17, after degradation that began August 5.",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "flutas",
      meta: "comment on the postmortem HN thread (45281139, ~381 points)",
      quote:
        "And yet no offers of credits to make things right for the users, for what was essentially degraded performance of what you paid for. I know I'll probably get push back on this, but it left a sour taste in my mouth when I paid for a $200 sub that felt like it was less useful than ChatGPT Plus ($20) at times.",
      url: "https://news.ycombinator.com/item?id=45281869",
    },
    {
      platform: "hackernews",
      author: "blackqueeriroh",
      meta: "reply in the postmortem HN thread",
      quote:
        "I'm pretty certain if you check the ToS that Anthropic doesn't guarantee a level of response quality, and explicitly even says there is zero guarantee, even for paid plans.",
      url: "https://news.ycombinator.com/item?id=45281869",
    },
    {
      platform: "hackernews",
      author: "deepdarkforest",
      meta: "comment on the postmortem HN thread",
      quote:
        "Their post mortem is basically 'evaluations are hard, we relied on vibe checking, now we are going to have even more frequent vibe checking'.",
      url: "https://news.ycombinator.com/item?id=45281139",
    },
    {
      platform: "news",
      author: "ilikekillnerds (Dwayne Charrington)",
      meta: "blog post, Sep 9, 2025 (written before the official postmortem)",
      quote:
        "Anthropic were radio silent while their own subreddits filled with 'I'm cancelling' threads... For a company valued in the hundreds of billions, this is amateur hour.",
      url: "https://ilikekillnerds.com/2025/09/09/anthropic-finally-admits-claude-quality-degradation/",
    },
    {
      platform: "other",
      author: "Simon Willison",
      meta: "blog commentary, Sep 17, 2025",
      quote:
        "I'm really glad Anthropic are publishing this in so much detail. Their reputation for serving their models reliably has taken a notable hit.",
      url: "https://simonwillison.net/2025/Sep/17/anthropic-postmortem/",
    },
  ],
  images: [
    {
      src: "/events/september-postmortem/timeline.png",
      alt: "Anthropic timeline chart showing the three Claude infrastructure bugs being detected, worsening, and getting fixed across August and September 2025",
      caption:
        "Anthropic's official timeline color-coding when each of the three issues was detected, worsened, and fixed across August-September 2025. Source: Anthropic.",
      sourceUrl: "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
      width: 3840,
      height: 1800,
    },
    {
      src: "/events/september-postmortem/topk-reproducer.png",
      alt: "Code reproducer image from Anthropic's postmortem showing the approximate top-k compiler bug",
      caption:
        "A code reproducer from the postmortem illustrating the approximate top-k XLA:TPU compiler bug that returned wrong token candidates. Source: Anthropic.",
      sourceUrl: "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
      width: 2400,
      height: 1404,
    },
    {
      src: "/events/september-postmortem/routing-impact-chart.png",
      alt: "Chart showing Claude Sonnet 4 routing bug impact peaking near 16 percent of requests",
      caption:
        "Implicator.ai's chart of the routing-bug impact ramping to as much as 16% of Sonnet 4 requests at peak. Source: Implicator.ai.",
      sourceUrl:
        "https://www.implicator.ai/anthropics-postmortem-three-bugs-pushed-claude-degradation-to-16-at-peak/",
      width: 1856,
      height: 794,
    },
  ],
  aftermath:
    "The postmortem struck some readers as unusually transparent and left others stuck on the weeks of silence and the absence of any credits; the named detection mechanism going forward is more sensitive evaluations, continuous monitoring, and users hitting the thumbs-down button when their paid model starts answering in Thai.",
};
