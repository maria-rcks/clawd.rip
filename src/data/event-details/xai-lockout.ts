import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "xai-lockout",
  deck: "Anthropic cut off xAI staff's Claude access inside Cursor in January 2026, making Elon Musk's startup the third competitor blocked in seven months under terms industry observers called the most restrictive among frontier labs.",
  body: [
    'In early January 2026, xAI staff using Claude models inside the Cursor coding tool found themselves locked out when Anthropic enforced commercial terms barring customers from using Claude to build or train competing AI systems. <a href="https://www.storyboard18.com/digital/anthropic-blocks-xai-from-using-claude-deepening-rivalry-in-the-ai-race-87447.htm">The block</a> was first reported by journalist <a href="https://x.com/kyliebytes/status/2009686466746822731">Kylie Robison</a>, who cited an internal Slack message from xAI cofounder Tony (Yuhuai) Wu telling staff: "Hi team, I believe many of you have already discovered that Anthropic models are not responding on Cursor." <a href="https://officechai.com/ai/anthropic-cuts-off-xais-access-to-its-coding-models-xs-product-head-says-time-to-ban-anthropic-from-x/">Wu framed the lockout</a> as "both bad and good," writing that xAI would "get a hit on productivity" but that it "rly pushes us to develop our own coding product / models."',
    'The xAI cutoff was not an isolated enforcement action. <a href="https://aihola.com/article/anthropic-cuts-xai-claude-access-cursor">It followed</a> Anthropic\'s June 2025 termination of Windsurf\'s access, which came after Bloomberg reported OpenAI was acquiring Windsurf for $3 billion and gave Windsurf CEO Varun Mohan less than five days notice. In late July 2025, Anthropic also revoked OpenAI\'s API access after alleging that OpenAI had been using Claude in internal tools to benchmark its own models ahead of the GPT-5 launch. Anthropic chief scientist Jared Kaplan had defended the policy regarding OpenAI, saying <a href="https://aihola.com/article/anthropic-cuts-xai-claude-access-cursor">"I think it would be odd for us to be selling Claude to OpenAI."</a>',
    'The timing carried some additional sting. The xAI block landed roughly one month after Elon Musk had publicly praised Anthropic on X, posting: <a href="https://www.rswebsols.com/news/anthropic-restricts-xais-access-to-its-coding-models-xs-product-chief-advocates-for-a-ban-on-anthropic-from-x/">"I must give @AnthropicAI credit here: Opus4.5 is outstanding."</a> Following the lockout, Nikita Bier, who leads product at X, reacted by posting <a href="https://officechai.com/ai/anthropic-cuts-off-xais-access-to-its-coding-models-xs-product-head-says-time-to-ban-anthropic-from-x/">"Time to ban Anthropic from X."</a> As of the reporting, Anthropic\'s X account remained active.',
    'The xAI incident also coincided with a separate, parallel crackdown. Around January 9, 2026, Anthropic tightened safeguards to stop third-party tools like <code>OpenCode</code> from spoofing the official Claude Code client to access Claude models at subscription pricing rather than API rates, as <a href="https://paddo.dev/blog/anthropic-walled-garden-crackdown/">one developer documented</a>.',
    'Industry observers on Hacker News noted that Anthropic\'s terms were the most restrictive among frontier labs, prohibiting customers from building "any products or services that compete with our Services"—a broader prohibition than OpenAI\'s or Google\'s narrower model-only restrictions. <a href="https://www.therundown.ai/p/anthropic-pulls-plug-on-xais-claude-access">Reports indicated</a> that xAI staff had been using Claude 4.5 inside Cursor to develop Grok, mirroring the August 2025 incident when Anthropic shut down Claude Code access for OpenAI employees.',
  ],
  receipts: [
    'xAI cofounder Tony Wu told staff in Slack: "I believe many of you have already discovered that Anthropic models are not responding on Cursor."',
    "Windsurf CEO Varun Mohan received less than five days notice before Anthropic cut off access in June 2025.",
    'Elon Musk praised Anthropic\'s Opus4.5 as "outstanding" roughly one month before xAI staff were locked out.',
    "Anthropic's terms prohibit building \"any products or services that compete with our Services,\" broader than OpenAI's or Google's restrictions.",
    "The xAI block coincided with Anthropic's January 9, 2026 crackdown on third-party tools spoofing the Claude Code client.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Nikita Bier (@nikitabier), X head of product",
      meta: "Posted on X in response to the xAI lockout",
      quote: "Time to ban Anthropic from X",
      url: "https://officechai.com/ai/anthropic-cuts-off-xais-access-to-its-coding-models-xs-product-head-says-time-to-ban-anthropic-from-x/",
    },
    {
      platform: "x",
      author: "Kylie Robison (@kyliebytes), reporter",
      meta: "Original scoop tweet, Jan 2026",
      quote:
        "Scoop: xAI staff had been using Anthropic's models internally through Cursor—until Anthropic cut off the startup's access this week.",
      url: "https://x.com/kyliebytes/status/2009686466746822731",
    },
    {
      platform: "hackernews",
      author: "whs",
      meta: "HN thread 'Anthropic bans xAI from using Claude in Cursor', 36 points",
      quote:
        "I don't think this is related to third-party use of CC. This is the same blocking as Anthropic blocking OpenAI access to CC ... which I think is fair that they don't want to help competitors.",
      url: "https://news.ycombinator.com/item?id=46583111",
    },
    {
      platform: "hackernews",
      author: "derangedHorse",
      meta: "HN thread 'Anthropic cut off xAI's Claude access in Cursor', 14 points",
      quote:
        "Gemini has already started to put their foot in this market albeit somewhat poorly compared to Claude Code. I'm looking forward to seeing what xAI has in store.",
      url: "https://news.ycombinator.com/item?id=46562949",
    },
    {
      platform: "x",
      author: "AI Leaks and News (@AILeaksAndNews)",
      meta: "X post",
      quote:
        "Anthropic have cut off xAI's access to Claude The staff at Elon Musk's AI company used Claude 4.5 in Cursor to develop Grok A similar event happened in August when Anthropic shut down Claude Code for OpenAI employees What are your thoughts on Anthropic's AI competition policy?",
      url: "https://x.com/AILeaksAndNews/status/2009714766470857049",
    },
  ],
  images: [],
  aftermath:
    "Anthropic's no-competitor clause, enforced against Windsurf, OpenAI, and now xAI inside roughly seven months, looks less like a one-off and more like standard operating procedure, leaving frontier-lab staff to either build their own coding products and models or find an alternative to Claude.",
};
