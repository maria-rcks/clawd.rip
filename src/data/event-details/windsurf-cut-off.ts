import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "windsurf-cut-off",
  deck: "On June 3, 2025, Windsurf said Anthropic had cut off nearly all direct access to Claude 3.x models with less than five days' notice, a move Anthropic later tied in part to reports that OpenAI was preparing to acquire Windsurf for roughly $3 billion.",
  body: [
    'On June 3, 2025, Windsurf <a href="https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/">publicly stated</a> that Anthropic had cut off nearly all of its first-party capacity to Claude 3.x models, including Claude 3.5 Sonnet, 3.7 Sonnet, and 3.7 Sonnet Thinking. Windsurf CEO Varun Mohan said Anthropic had provided less than five days of notice before the cutoff. Mohan stated: <em>"We have been very clear to Anthropic that this is not our desire — we wanted to pay them for the full capacity,"</em> and added, <em>"We are disappointed by this decision and short notice."</em>',
    'Anthropic spokesperson Steve Mnich responded that the company was <em>"prioritizing capacity for sustainable partnerships that allow us to effectively serve the broader developer community."</em> The cutoff came amid reports from Bloomberg that OpenAI had agreed to acquire Windsurf for about $3 billion. Windsurf had reportedly reached $100 million in annual recurring revenue in April 2025.',
    'At the time of the cutoff, Windsurf had not received direct access to Claude 4 at its May 22, 2025 launch and still lacked it, while rival coding tools including Cursor, Devin, and GitHub Copilot did have direct access. Anthropic had also been pushing its own agentic coding products, having launched <code>Claude Code</code> in February 2025 and held its "Code with Claude" developer conference in May 2025, positioning itself as a competitor to tools like Windsurf.',
    'On June 5, 2025, Anthropic co-founder and Chief Science Officer Jared Kaplan <a href="https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/">said</a> the move was driven by the OpenAI acquisition rumors, stating: <em>"I think it would be odd for us to be selling Claude to OpenAI."</em> Kaplan also framed the decision around customer loyalty, saying: <em>"We really are just trying to enable our customers who are going to sustainably be working with us in the future."</em> He added that Anthropic was computing-constrained and noted the company was unlocking capacity on a new Amazon computing cluster.',
    'Windsurf pushed users toward a "bring-your-own-key" workaround using personal Anthropic API keys, which it described as more expensive and complicated, and scrambled to ramp up capacity on other third-party inference providers. It also responded by launching a promotional rate for Google\'s Gemini 2.5 Pro, positioning it as <em>"a strong alternative."</em> Mohan defended Windsurf\'s value beyond any single model, saying: <em>"The magic of Windsurf has never been limited to the model... The magic is in the deep contextual understanding of existing knowledge."</em>',
  ],
  receipts: [
    "Anthropic gave Windsurf less than five days' notice before cutting off first-party access to Claude 3.5 Sonnet, 3.7 Sonnet, and 3.7 Sonnet Thinking.",
    "OpenAI had reportedly agreed to acquire Windsurf for about $3 billion.",
    "Windsurf reportedly hit $100 million in annual recurring revenue in April 2025.",
    "Windsurf still lacked direct Claude 4 access that rival tools including Cursor, Devin, and GitHub Copilot already had.",
    "Anthropic cited compute constraints and noted it was unlocking capacity on a new Amazon computing cluster.",
    'Windsurf launched a promotional rate for Google\'s Gemini 2.5 Pro as "a strong alternative."',
  ],
  reactions: [
    {
      platform: "x",
      author: "@_mohansolo (Varun Mohan, Windsurf CEO)",
      meta: "Posted on X, June 3, 2025",
      quote:
        "With less than five days of notice, Anthropic decided to cut off nearly all of our first-party capacity to all Claude 3.x models. Given the short notice, we may see some short-term Claude 3.x model availability issues as we have very quickly ramped up capacity on other inference...",
      url: "https://x.com/_mohansolo/status/1930034960385356174",
    },
    {
      platform: "hackernews",
      author: "princealiiiii",
      meta: "114 points, top comment on the June 5 TechCrunch thread",
      quote:
        "Any app built on top of these model providers could become a competitor to these providers. Since the model providers are currently in the lowest-margin part of the business, it is likely they will try to expand in to the app layer.",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
    {
      platform: "hackernews",
      author: "icelancer",
      meta: "Hacker News comment",
      quote:
        "This seems pretty reasonable to me. I don't really understand why Windsurf, owned by OpenAI (allegedly), should expect to have API access to their main competitor's API.",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
    {
      platform: "hackernews",
      author: "hiddencost",
      meta: "Hacker News comment replying to icelancer",
      quote:
        "IDK, I pay someone money for a service, I would like the terms of our contract to protect me from getting cut off capriciously.",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
    {
      platform: "hackernews",
      author: "mountainriver",
      meta: "Hacker News comment",
      quote:
        "This should be a clear signal to the community that anthropic can't be trusted. OpenAI can't either, TBD on google",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
  ],
  images: [],
  aftermath:
    "By June 5, 2025, Windsurf had routed users toward more expensive bring-your-own-key setups and third-party inference providers while offering promotional pricing for Google's Gemini 2.5 Pro, and Anthropic had publicly confirmed that reports of an OpenAI buyout made selling Claude capacity to Windsurf feel, in Jared Kaplan's words, odd.",
};
