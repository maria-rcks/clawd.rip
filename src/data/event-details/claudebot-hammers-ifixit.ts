import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claudebot-hammers-ifixit",
  deck: "Anthropic's ClaudeBot requested iFixit's pages nearly one million times in a single July day, then explained that robots.txt is the preferred channel for complaints.",
  body: [
    "On July 24, 2024, iFixit CEO Kyle Wiens publicized on X that Anthropic's ClaudeBot had hit iFixit's website nearly one million times in a single 24-hour period, with thousands of requests per minute during a several-hour window, as <a href=\"https://www.theverge.com/2024/7/25/24205943/anthropic-ai-web-crawler-claudebot-ifixit-scraping-training-data\">The Verge</a> reported. Wiens tweeted: \"Hey @AnthropicAI: I get you're hungry for data. Claude is really smart! But do you really need to hit our servers a million times in 24 hours? You're not only taking our content without paying, you're tying up our devops resources. Not cool.\" iFixit's Terms of Service explicitly prohibit using its content to train a machine learning or AI model without the express prior written permission of iFixit. Anthropic's position was that terms of service alone provide no technical protection; it said it \"aims for minimal disruption by being thoughtful about how quickly we crawl\" and recommended website owners modify their robots.txt to block ClaudeBot.",
    'The strain was not limited to iFixit. In April 2024, a site outage on the Linux Mint web forum was attributed to strain caused by ClaudeBot\'s scraping activity. Freelancer.com CEO Matt Barrie said ClaudeBot visited his site nearly 3.5 million times in four hours, calling it "the most aggressive scraper by far" and "egregious scraping [which] makes the site slower for everyone." Separately, Read the Docs co-founder Eric Holscher documented one AI crawler downloading 73 TB of zipped HTML files in May 2024, with almost 10 TB in a single day, costing over $5,000 in bandwidth charges; Read the Docs said the abuse stemmed from "a bug in their crawler that was causing it to download the same files over and over again," with no bandwidth limiting and no support for Etags or Last-Modified headers.',
    'Anthropic stated it "respects robots.txt" and that its crawler "respected that signal when iFixit implemented it." The company also told The Register that ClaudeBot respects existing robots.txt rules only for the deprecated user agents "ANTHROPIC-AI" and "CLAUDE-WEB," a nuance that meant some sites\' older block rules did not actually stop the active crawler. Data Provenance Initiative researcher Shayne Longpre summarized the core tension: "terms of service are specific and nuanced, but not machine readable and robots.txt is machine readable, but incredibly coarse." After iFixit added ClaudeBot to its robots.txt, the crawling stopped, but Wiens told The Register: "The crawling stopped after we added them to our robots.txt. Now, they hit that file every thirty minutes."',
    'Wiens noted that Anthropic\'s chatbot, when tested, acknowledged iFixit\'s content was off-limits, and that Claude produced incorrect repair instructions; on a Pixel 6a example, it stated: "It opens from the front, so this would not work and would cause damage." Dark Visitors founder Gavin King characterized the broader trend as "a Cambrian explosion in the ecosystem of artificial agents crawling the internet." Read the Docs reported that after blocking AI crawlers, bandwidth for its downloaded files decreased by roughly 75%, from about 800GB/day to 200GB/day, and warned: "AI crawlers are acting in a way that is not respectful to the sites they are crawling, and that is going to cause a backlash against AI crawlers in general."',
  ],
  receipts: [
    "ClaudeBot hit iFixit nearly 1 million times in 24 hours.",
    "Freelancer.com: nearly 3.5 million requests in four hours.",
    "Read the Docs: 73 TB of zipped HTML downloaded in May 2024, costing over $5,000.",
    "After blocking, ClaudeBot polled iFixit's robots.txt every 30 minutes.",
    "Linux Mint forum outage in April 2024 attributed to ClaudeBot.",
    "Read the Docs bandwidth fell roughly 75% after blocking AI crawlers.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Kyle Wiens (@kwiens, iFixit CEO)",
      meta: "original tweet, July 24, 2024",
      quote:
        "Hey @AnthropicAI: I get you're hungry for data. Claude is really smart! But do you really need to hit our servers a million times in 24 hours? You're not only taking our content without paying, you're tying up our devops resources. Not cool.",
      url: "https://twitter.com/kwiens/status/1816128302542905620",
    },
    {
      platform: "hackernews",
      author: "chintan",
      meta: "comment on 'iFixit CEO Kyle Wiens calls out Anthropic for disruptive crawling' (79 points)",
      quote:
        "This is real. We got severely hit by their bots causing our service to go unresponsive.",
      url: "https://news.ycombinator.com/item?id=41060559",
    },
    {
      platform: "hackernews",
      author: "bobsomers",
      meta: "comment, HN thread (former iFixit engineer)",
      quote:
        "When I worked at iFixit ~12-13 years ago most of the site was already aggressively cached whenever possible, and I'm sure it's only gotten better since. They are no strangers to bursty traffic. We would get insane bursts of traffic many, many times greater than typical wherever a teardown of a new iDevice was published shortly after release. If Kyle and the devops folks there are noticing it, it's definitely disruptive behavior.",
      url: "https://news.ycombinator.com/item?id=41060559",
    },
    {
      platform: "hackernews",
      author: "tstrimple",
      meta: "comment, HN thread",
      quote:
        'Are "HTTP/1.1 304 Not Modified" header responses too difficult to implement or honor? Seems like failures on both sides are what leads to these situations.',
      url: "https://news.ycombinator.com/item?id=41060559",
    },
    {
      platform: "hackernews",
      author: "Woshiwuja",
      meta: "comment on PC Gamer story submission (51 points)",
      quote:
        "embarassing. i bet they are using an llm to tell the other llm where to find data and it just got in a loop",
      url: "https://news.ycombinator.com/item?id=41076459",
    },
  ],
  images: [
    {
      src: "/events/claudebot-hammers-ifixit/readthedocs-bandwidth-may-2024.png",
      alt: "Read the Docs bandwidth graph spiking during the May 2024 AI crawler abuse incident",
      caption:
        "Read the Docs bandwidth usage during the May 2024 AI crawler spike, when one crawler downloaded ~73 TB (nearly 10 TB in a single day) and ran up over $5,000 in bandwidth charges. Source: Read the Docs.",
      sourceUrl: "https://about.readthedocs.com/blog/2024/07/ai-crawlers-abuse/",
      width: 1522,
      height: 1174,
    },
    {
      src: "/events/claudebot-hammers-ifixit/readthedocs-bandwidth-june-2024.png",
      alt: "Read the Docs bandwidth graph showing June 2024 crawler traffic spike",
      caption:
        "A second Read the Docs bandwidth spike in June 2024, illustrating repeated AI-crawler bandwidth abuse. Source: Read the Docs.",
      sourceUrl: "https://about.readthedocs.com/blog/2024/07/ai-crawlers-abuse/",
      width: 1404,
      height: 1164,
    },
  ],
  aftermath:
    "Anthropic said it aims for minimal disruption and was investigating the matter, while maintaining that ClaudeBot respects robots.txt signals. Website operators remain responsible for ensuring their block rules target the current user agent, and for monitoring whether their servers have already been visited a million times.",
};
