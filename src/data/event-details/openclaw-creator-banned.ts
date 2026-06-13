import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "openclaw-creator-banned",
  deck: "Days after announcing that Claude subscriptions would no longer cover third-party harnesses including OpenClaw, Anthropic banned creator Peter Steinberger from accessing Claude anyway, reinstated him within hours after public outcry, and never explained either move.",
  body: [
    'On April 4, 2026, Anthropic told customers that Claude subscriptions would no longer cover <a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">"third-party harnesses including OpenClaw,"</a> forcing the tool onto separate consumption-based API billing. The company cited <a href="https://www.panewslab.com/en/articles/019d575f-927f-74a3-a42a-289c7694119b">more than 135,000 OpenClaw instances</a> running on Claude at the time as a "massive infrastructure burden" driving the policy change. The announcement generated a Hacker News thread that reached <a href="https://news.ycombinator.com/item?id=47633396">1,099 points and 827 comments</a>.',
    'On April 10, 2026, TechCrunch reported that Anthropic had temporarily banned Peter Steinberger from accessing Claude. The suspension notice he received read: <a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">"An internal investigation of suspicious signals associated with your account indicates a violation of our Usage Policy. As a result, we have revoked your access to Claude."</a> Steinberger maintained he had done exactly what was asked, posting that he <a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">"was following the new rule and using my API but was banned anyway."</a> After public outcry, an Anthropic engineer intervened on X to tell him <a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">"Anthropic has never banned anyone for using OpenClaw and I\'d love to help,"</a> and his account was reinstated within hours.',
    'Steinberger suggested the suspension was triggered by his work on a <a href="https://www.newsbytesapp.com/news/science/anthropic-temporarily-bans-openclaw-founder-peter-steinberger/story">"claude-p fallback feature,"</a> and said a classifier bug was confirmed by someone named Boris. He also framed the timing as suspicious, <a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">telling TechCrunch</a>: "Funny how timings match up, first they copy some popular features into their closed harness, then they lock out open source," a reference to Anthropic\'s competing first-party agent products.',
    'The episode unfolded while Steinberger was employed at OpenAI, a situation he contextualized by distinguishing his roles: <a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">"You need to separate two things. My work at the OpenClaw Foundation where we wanna make OpenClaw work great for *any* model provider, and my job at OpenAI to help them with future product strategy."</a> He summarized the difference in treatment by noting, <a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">"One welcomed me, one sent legal threats."</a>',
    'On April 21, 2026, roughly 11 days after the ban, Anthropic reversed course again and told users that <a href="https://news.ycombinator.com/item?id=47844269">OpenClaw-style Claude CLI usage was allowed</a>; the reversal thread reached <a href="https://news.ycombinator.com/item?id=47844269">511 points and 293 comments</a>. Even so, users reported that Anthropic appeared to <a href="https://news.ycombinator.com/item?id=47656695">blacklist the word "OpenClaw"</a> itself, with accounts pushed to API rates if the word merely appeared in the system prompt, even when using native Claude Code. Anthropic <a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">offered no public explanation</a> for either the suspension of Steinberger\'s account or its reinstatement.',
  ],
  receipts: [
    "Steinberger's suspension notice cited 'suspicious signals' violating Anthropic's Usage Policy",
    "More than 135,000 OpenClaw instances were running on Claude at the time of the block",
    "Steinberger's account was reinstated within hours after an engineer publicly intervened on X",
    "April 4 policy-change Hacker News thread: 1,099 points and 827 comments",
    "April 21 reversal Hacker News thread: 511 points and 293 comments",
    "Anthropic never publicly explained the ban or the reinstatement",
  ],
  reactions: [
    {
      platform: "x",
      author: "@steipete (Peter Steinberger)",
      meta: "Posted April 10, 2026; quoted in NewsBytes coverage",
      quote:
        "Yeah folks, it's gonna be harder in the future to ensure OpenClaw still works with Anthropic models",
      url: "https://www.newsbytesapp.com/news/science/anthropic-temporarily-bans-openclaw-founder-peter-steinberger/story",
    },
    {
      platform: "hackernews",
      author: "throwup238",
      meta: "On 'Anthropic says OpenClaw-style Claude CLI usage is allowed again' (511 pts, 293 comments)",
      quote:
        "I don't think I've seen a more confused and shambolic product strategy since Google's absurd line of GChat rebrandings.",
      url: "https://news.ycombinator.com/item?id=47844269",
    },
    {
      platform: "hackernews",
      author: "jollymonATX",
      meta: "On the April 21 reinstatement thread (511 pts)",
      quote: "How can they be this bad at this? What was all that about then?",
      url: "https://news.ycombinator.com/item?id=47844269",
    },
    {
      platform: "hackernews",
      author: "rvz",
      meta: "On the original policy-change thread (1,099 pts, 827 comments)",
      quote: "AKA when you fully use the capacity you paid for, that's too much!",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "hackernews",
      author: "SpicyLemonZest",
      meta: "On the original policy-change thread (1,099 pts)",
      quote:
        "I think that just as with ISPs people become irate when they feel there's been a bait-and-switch...changing things every time people find creative ways to use the stream of X they believe themselves to have purchased from you.",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "hackernews",
      author: "avaer",
      meta: "On the 'blacklist on the word OpenClaw' thread",
      quote:
        "They also force you to use api rates for a chat if you just mention OpenClaw at in the system prompt even if you're using native claude code which is what is shown in the image.",
      url: "https://news.ycombinator.com/item?id=47656695",
    },
  ],
  images: [],
  aftermath:
    "On April 21, Anthropic told users that OpenClaw-style Claude CLI usage was allowed again, roughly eleven days after Peter Steinberger received a suspension notice citing 'suspicious signals' despite his claim that he was following the new rule and using his API. The company never offered a public explanation for the suspension, the reinstatement, or reports that the word 'OpenClaw' itself appeared to trigger rate penalties in system prompts.",
};
