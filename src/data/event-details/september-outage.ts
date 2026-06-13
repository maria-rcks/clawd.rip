import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "september-outage",
  deck: "On September 10, 2025, an outage knocked out Claude.ai, Console, and the API, giving Anthropic's year of rate-limit complaints another full-platform screenshot.",
  body: [
    'Shortly before 9:30 a.m. PT on September 10, 2025, Anthropic reported an outage that simultaneously took down its API, the developer Console, and <a href="https://techcrunch.com/2025/09/10/anthropic-reports-outages-claude-and-console-impacted/">claude.ai</a>. Users first reported issues around 12:20 p.m. ET, and Anthropic posted a status update roughly eight minutes later acknowledging that APIs, Console, and Claude AI were down.',
    '<a href="https://www.techbuzz.ai/articles/claude-ai-goes-dark-anthropic-reports-major-service-outage">Multiple outlets</a> described the disruption as a roughly 30-minute complete outage during US business hours, leaving developers unable to access Claude.ai, the API, <code>Claude Code</code>, or the management console. The company\'s <a href="https://status.claude.com/incidents/k6gkm2b8cjk9">status page</a> titled the incident "API, Claude.ai, and Console services impacted" and confirmed that claude.ai, platform.claude.com, and api.anthropic.com were all affected.',
    'The status page marked the incident "Identified" at 16:28 UTC with a note that services would be restored as soon as possible, moved to "Monitoring" at 16:37 UTC after implementing a fix, and resolved it at 17:36 UTC. The full window came to roughly 68 minutes.',
    'An Anthropic spokesperson told <a href="https://techcrunch.com/2025/09/10/anthropic-reports-outages-claude-and-console-impacted/">TechCrunch</a> senior reporter Dominic-Madori Davis: <em>"We\'re aware of a very brief outage of our API today shortly before 9:30 a.m. PT. Service was quickly restored."</em> The status page suggests the restoration took closer to an hour, which means "very brief" may be measured differently inside Anthropic.',
    'Coverage framed the outage as <a href="https://www.webpronews.com/anthropic-outage-disrupts-claude-ai-and-apis-on-september-10-2025/">another entry</a> in a year of Anthropic reliability problems, citing documented API errors in July and intermittent Console access issues in August 2025 tied to surging demand for Claude\'s models. The incident also became a top story on Hacker News, where the thread <a href="https://hn.algolia.com/api/v1/items/45200118">drew 161 points and 79 comments</a>.',
  ],
  receipts: [
    "Anthropic's status page tracked a roughly 68-minute window from identification at 16:28 UTC to resolution at 17:36 UTC.",
    "Users began reporting issues at 12:20 p.m. ET, and Anthropic acknowledged the outage roughly eight minutes later.",
    'A company spokesperson characterized the event as a "very brief outage" in a statement to TechCrunch senior reporter Dominic-Madori Davis.',
    "The Hacker News thread item 45200118 accumulated 161 points and 79 comments.",
    "The incident followed documented API errors in July and intermittent Console access issues in August 2025.",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "gzer0",
      meta: "HN thread 'API, Claude.ai, and Console services impacted [resolved]' — 161 points, 79 comments",
      quote:
        "Nooooo I'm going to have to use my brain again and write 100% of my code like a caveman from December 2024. Comment last time that had me chuckling.",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "hackernews",
      author: "bdcravens",
      meta: "HN comment, Sep 10 2025 outage thread",
      quote:
        "Everyone will just have to learn how to do it like we did in the old days, and blindly copy and paste from Stack Overflow.",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "hackernews",
      author: "cube2222",
      meta: "HN comment, Sep 10 2025 outage thread",
      quote:
        "Funny observation - it feels like being in the EU I get a much better AI SaaS experience than folks over in the US. It's like every other day, the moment US working hours start, AI (in my case I mostly use Anthropic, others may be better) starts dying or at least getting intermittent errors. In EU working hours there's rarely any outages.",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "hackernews",
      author: "searls",
      meta: "HN comment, Sep 10 2025 outage thread",
      quote:
        "Man, Anthropic's service quality has just been a dumpster fire since July. Embarrassed I ever recommended people pony up for a 20x Max plan. The fact they've admitted that Claude Code got dumber for an entire month and didn't offer refunds is really bad form IMO",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "other",
      author: "poptix",
      meta: "Slashdot comment, Score 5 Insightful",
      quote: "productivity actually went up.",
      url: "https://developers.slashdot.org/story/25/09/10/2039218/developers-joke-about-coding-like-cavemen-as-ai-service-suffers-major-outage",
    },
    {
      platform: "other",
      author: "eneville",
      meta: "Slashdot comment, Score 5 Funny",
      quote: "So 'coding' then?",
      url: "https://developers.slashdot.org/story/25/09/10/2039218/developers-joke-about-coding-like-cavemen-as-ai-service-suffers-major-outage",
    },
  ],
  images: [],
  aftermath:
    "The outage was resolved and all services restored. Anthropic's status page recorded a roughly 68-minute elapsed window, while a company spokesperson described the disruption as a \"very brief outage\" to TechCrunch. The incident added another entry to a year of documented reliability problems, including API errors in July and Console access issues in August 2025 tied to surging demand for Claude's models. The status page currently lists the incident as resolved.",
};
