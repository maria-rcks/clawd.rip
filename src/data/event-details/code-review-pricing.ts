import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "code-review-pricing",
  deck: "Anthropic launched Claude Code Review on March 9, 2026, priced at roughly $15 to $25 per pull request in tokens, and immediately faced comparisons to subscription competitors charging flat monthly rates.",
  body: [
    'Anthropic <a href="https://claude.com/blog/code-review">rolled out Code Review for Claude Code</a> on March 9, 2026, as a research preview limited to Team and Enterprise plans. The feature is billed on token usage, with reviews averaging <a href="https://claude.com/blog/code-review">$15 to $25 per review</a>, scaling upward with pull request size and complexity. Anthropic explicitly framed the cost by saying Code Review <a href="https://claude.com/blog/code-review">"optimizes for depth and is more expensive than lighter-weight solutions"</a> like its existing open-source GitHub Action.',
    'The tool <a href="https://claude.com/blog/code-review">"dispatches a team of agents on every PR to catch the bugs that skims miss,"</a> modeled on Anthropic\'s internal review process, and a single review takes roughly 20 minutes. Boris Cherny, head of Claude Code, said the tool was built internally first because <a href="https://x.com/bcherny/status/2031089411820228645">"Code output per Anthropic engineer is up 200% this year and reviews were the bottleneck."</a> The company reported that on large PRs of 1,000 or more lines, <a href="https://claude.com/blog/code-review">84% received findings averaging 7.5 issues</a>, while on small PRs under 50 lines, 31% received findings averaging 0.5 issues, with fewer than 1% of findings marked incorrect by engineers.',
    'The official Claude account defended the pricing by stating that <a href="https://x.com/claudeai/status/2031088175456903667">"Code Review optimizes for depth and may be more expensive than other solutions... Reviews generally average $15-25, billed on token usage, and they scale based on PR complexity."</a> Anthropic engineer Thariq Shihipar added that the feature <a href="https://www.aol.com/articles/anthropic-launched-ai-code-reviewer-060929137.html">"uses a lot more compute and tends to catch more difficult bugs."</a> Critics calculated that a 100-developer team submitting one pull request per workday could spend roughly <a href="https://www.aol.com/articles/anthropic-launched-ai-code-reviewer-060929137.html">$40,000 per month, or about $480,000 per year</a>, though this was a community and press calculation, not an Anthropic figure.',
    'Competitors charge flat rates. <a href="https://www.coderabbit.ai/pricing">CodeRabbit charges $24 per month per user billed annually</a> for its Pro plan, which includes a free tier and a 14-day free trial. <a href="https://www.greptile.com/pricing">Greptile charges $30 per seat per month</a>, including 50 code reviews per seat, with additional reviews costing $1 each. Developer Daniel Avila tested the tool and <a href="https://x.com/dani_avila7/status/2031151975732002930">reported seeing "absolutely NO additional functionality or improvement"</a> over setting up a <code>claude.yml</code> GitHub Action.',
    'Cost controls exist, including <a href="https://claude.com/blog/code-review">monthly organization caps, repository-level controls, and an analytics dashboard</a>. On Hacker News, however, developer raflueder reported running <a href="https://news.ycombinator.com/item?id=47313787">200-plus pull requests with two rounds each over February using Opus 4.6 for a total of $19.50</a>, an average of about $0.04 per review. TechRadar and AOL coverage <a href="https://www.techradar.com/pro/anthropic-launches-a-new-code-review-tool-to-check-ai-generated-content-but-it-might-cost-you-more-than-youd-hope">dated the public reporting to March 10, 2026</a>, one day after the blog\'s stated March 9 launch.',
  ],
  receipts: [
    "Anthropic launched Code Review on March 9, 2026, as a research preview for Team and Enterprise plans.",
    "Reviews average $15 to $25 per pull request, billed by token usage, scaling with PR size and complexity.",
    "Competitor CodeRabbit Pro is $24/month per user; Greptile is $30/seat/month for 50 reviews plus $1 each.",
    "Community/press calculation: a 100-developer team doing one PR per workday could cost roughly $40,000/month, about $480,000/year.",
    "Developer raflueder ran 200+ PRs with two rounds each on Opus 4.6 in February for $19.50 total, about $0.04 per review.",
    "On large PRs (1,000+ lines) 84% received findings averaging 7.5 issues; fewer than 1% of findings were marked incorrect.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@initjean (Jean P.D. Meijer)",
      meta: "X post",
      quote:
        "how is Claude Code Review is $15 to $25 per PR?! one review is basically the price of an unlimited sub to most code review apps did they forget to subsidize the tokens?",
      url: "https://x.com/initjean/status/2031143406336970755",
    },
    {
      platform: "x",
      author: "@JorgeCastilloPr (Jorge Castillo)",
      meta: "X post",
      quote:
        "Holy moly. The new Claude Code Review tool costs $25 per PR. At least they were honest about the pricing 😅",
      url: "https://x.com/JorgeCastilloPr/status/2031125264172732794",
    },
    {
      platform: "x",
      author: "@nnennahacks (Nnenna)",
      meta: "X post, screenshot of cost breakdown",
      quote:
        "I tested out claude code review. These are the real costs for 3 different repos. At the bottom, the avg cost is $20.75 for 2 PRs. Only 150 lines of code changed.",
      url: "https://x.com/nnennahacks/status/2031386841371353104",
    },
    {
      platform: "hackernews",
      author: "cbovis",
      meta: "HN: 'Code Review for Claude Code', 83 points, 48 comments",
      quote:
        "This cost seems wild. For comparison GitHub Copilot Code Review is four cents per review once you're outside of the credits.",
      url: "https://news.ycombinator.com/item?id=47313787",
    },
    {
      platform: "hackernews",
      author: "8cvor6j844qw_d6",
      meta: "HN comment",
      quote:
        "Greptile charges $30 per month for 50 reviews, with $1 per additional review. At average of $15~25 per review, this is way more expensive.",
      url: "https://news.ycombinator.com/item?id=47313787",
    },
    {
      platform: "hackernews",
      author: "SkyPuncher",
      meta: "HN comment, defending the price",
      quote:
        "Senior+ engineers easily make $100+ an hour. This is equivalent to 15 minutes of their time max... $20 becomes an incredibly easy sell.",
      url: "https://news.ycombinator.com/item?id=47313787",
    },
  ],
  images: [],
  aftermath:
    "Claude Code Review remains available as a research preview to Team and Enterprise customers at roughly $15 to $25 per review, alongside monthly caps and repository controls. The gap between its per-token pricing and competitors' flat-rate models, plus developer reports of running comparable reviews for cents on a GitHub Action, remains the central point of comparison.",
};
