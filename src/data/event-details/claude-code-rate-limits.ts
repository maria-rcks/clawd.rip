import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-rate-limits",
  deck: "Anthropic announced weekly rate limits for Claude Code on July 28, 2025, less than two months after the tool launched on June 4, citing always-on background loops and account sharing as the cause of infrastructure strain that had already produced at least seven outages in one month.",
  body: [
    'On July 28, 2025, Anthropic <a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">announced</a> new weekly rate limits for Claude Pro and Max subscribers, set to take effect August 28, 2025. The limits apply to the $20-per-month Pro plan, the $100-per-month Max plan, and the $200-per-month Max plan. The announcement arrived less than two months after <a href="https://tech.yahoo.com/ai/articles/anthropic-were-glad-claude-code-164658123.html">Claude Code launched on June 4, 2025</a>, meaning the tool went from general release to weekly rations in roughly eight weeks.',
    'The new restrictions added two weekly limits that reset every seven days—one for overall usage and one specific to Claude Opus 4—layered on top of existing five-hour reset windows, <a href="https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits">according to Slashdot</a>. Estimated weekly allowances break down as follows: Pro users receive 40 to 80 hours of Sonnet 4; $100 Max users receive 140 to 280 hours of Sonnet 4 plus 15 to 35 hours of Opus 4; $200 Max users receive 240 to 480 hours of Sonnet 4 plus 24 to 40 hours of Opus 4, <a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">TechCrunch reported</a>. Max subscribers who exhaust these allotments may purchase additional usage at standard API rates, which means the $200 plan includes a hard cap that can be lifted with a credit card.',
    'Anthropic spokesperson Amie Rotherham <a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">stated</a>, <em>"Claude Code has experienced unprecedented demand since launch. Most users won\'t notice a difference."</em> The company estimated the new limits would apply to <a href="https://x.com/AnthropicAI/status/1949898502688903593">fewer than 5% of subscribers</a> based on current usage patterns. The other 95% were presumably not running the agent continuously in the background 24/7.',
    'The behaviors targeted were explicitly named as users keeping Claude Code running nonstop around the clock and the sharing or reselling of account credentials, <a href="https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits">Slashdot noted</a>. Anthropic said that <em>"extreme usage by a small number of customers impacts capacity for our broader community,"</em> <a href="https://tech.yahoo.com/ai/articles/anthropic-were-glad-claude-code-164658123.html">citing abuse patterns</a> that included credential reselling and "multi-clauding"—the practice of running about five simultaneous instances. It turns out one Claude per customer was not a suggestion but a capacity plan.',
    'The rationing followed a month of visible strain. <a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">TechCrunch reported</a> that Claude Code had suffered at least seven partial or major outages in the month preceding the announcement. The July 28 changes also arrived after <a href="https://tech.yahoo.com/ai/articles/anthropic-were-glad-claude-code-164658123.html">earlier limit adjustments in July 2025</a> that had already drawn user backlash, with subscribers hitting caps faster than expected. On Hacker News, the thread titled "Claude Code weekly rate limits" <a href="https://news.ycombinator.com/item?id=44713757">accumulated 609 points and 705 comments</a>, suggesting that at least 705 people noticed a difference.',
    'Anthropic told subscribers it was <a href="https://itdaily.com/news/software/anthropic-rate-limits-claude-pro-max/">looking at "supporting long-running use cases through other options in the future."</a> The options were unspecified, though the implication was that always-on coding loops would need to learn to take weekends off.',
  ],
  receipts: [
    "Claude Code launched June 4, 2025; weekly limits announced July 28, 2025.",
    "Pro users: 40-80 hours Sonnet 4. $100 Max: 140-280 hours Sonnet 4 plus 15-35 hours Opus 4. $200 Max: 240-480 hours Sonnet 4 plus 24-40 hours Opus 4.",
    "Anthropic estimated fewer than 5% of subscribers would be affected.",
    "Claude Code experienced at least seven partial or major outages in the month before the announcement.",
    "The Hacker News discussion reached 609 points and 705 comments.",
    'Abuse patterns included credential reselling and "multi-clauding" (about five simultaneous instances).',
  ],
  reactions: [
    {
      platform: "x",
      author: "@AnthropicAI",
      meta: "Official Anthropic announcement tweet, July 28, 2025",
      quote:
        "We're rolling out new weekly rate limits for Claude Pro and Max in late August. We estimate they'll apply to less than 5% of subscribers based on current usage.",
      url: "https://x.com/AnthropicAI/status/1949898502688903593",
    },
    {
      platform: "hackernews",
      author: "koolba",
      meta: "Top comment on the 609-point HN thread",
      quote:
        "There's no lobster rolls stuffed into a backpack here. It's using the service as it was pitched, an all-you-can-eat buffer of API calls. Anything that limits what that means is scaling back access to that buffet... What's worse with this model is that a runaway process could chew through your weekly API allotment on a wild goose chase. Whereas before the 5-hour quantization was both a limiter and guard rails.",
      url: "https://news.ycombinator.com/item?id=44713757",
    },
    {
      platform: "hackernews",
      author: "jedberg",
      meta: "HN thread comment",
      quote:
        "The tragedy of the commons is the concept that, if many people enjoy unfettered access to a finite, valuable resource, such as a GPU farm, they will tend to overuse it and may end up destroying its value altogether. That is exactly what happened here. The price was fine if everyone upheld their moral obligation not to abuse it.",
      url: "https://news.ycombinator.com/item?id=44713757",
    },
    {
      platform: "hackernews",
      author: "steveklabnik",
      meta: "HN comment; steveklabnik works at Anthropic",
      quote:
        "I don't think it's that simple. We'll see though, I am very curious if I'm in that 5% or not.",
      url: "https://news.ycombinator.com/item?id=44713757",
    },
    {
      platform: "other",
      author: "Anonymous Coward (Slashdot)",
      meta: 'Slashdot comment, moderated "Funny"',
      quote: "It has already reached the enshittification stage!",
      url: "https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits",
    },
    {
      platform: "other",
      author: "commodore73 (Slashdot)",
      meta: 'Slashdot comment, moderated "Insightful"',
      quote:
        "If you're willing to pay $200 per month for coding assistance, I suspect you're a shit developer.",
      url: "https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits",
    },
  ],
  images: [],
  aftermath:
    "The new weekly limits are scheduled to take effect August 28, 2025, giving subscribers one month to scale back continuous usage or purchase additional capacity at standard API rates. Anthropic has said it is exploring other options for long-running use cases, though for now the flat-rate model operates on a seven-day cycle.",
};
