import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-pro-paywall",
  deck: "Anthropic turned the green checkmark on a $20 product into a red X, called it a 2% test, and gave OpenAI a free billboard for its rival coding tool.",
  body: [
    'On the afternoon of April 21, 2026, <a href="https://simonwillison.net/2026/apr/22/claude-code-confusion/">the checkmark next to Claude Code in the Pro column of Anthropic\'s pricing page turned into a red X</a>, while Max 5x ($100/mo) and Max 20x kept their green checkmarks. The same afternoon, Anthropic <a href="https://www.wheresyoured.at/news-anthropic-removes-pro-cc/">rewrote a support article</a> from "Using Claude Code with your Pro or Max plan" to "Using Claude Code with your Max plan," with no changelog, email, or announcement. AI-industry critic Ed Zitron flagged the change on Bluesky; <a href="https://hn.algolia.com/api/v1/items/47854477">his post became the source for a front-page Hacker News thread that drew 328 points and 206 comments</a>.',
    'Anthropic Head of Growth Amol Avasare then <a href="https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/">said on X that this was a "small test on ~2 percent of new prosumer signups"</a> and that existing subscribers were unaffected. He later <a href="https://www.aol.com/articles/anthropics-claude-code-pricing-pain-193347355.html">conceded the public-facing rollout was "understandably confusing for the 98% of folks not part of the experiment"</a> and reverted both the landing page and docs changes. The pricing page was restored within hours; <a href="https://www.morphllm.com/claude-code-pricing">by April 23 claude.com/pricing again showed the green checkmark for Claude Code on Pro</a>, though Anthropic said the 2% server-side experiment remained active.',
    'Avasare framed the test around shifting demand. <a href="https://www.wheresyoured.at/news-anthropic-removes-pro-cc/">Max launched a year earlier, in April 2025, without Claude Code and was "designed for heavy chat usage," but "the way people actually use a Claude subscription has changed fundamentally" and "our current plans weren\'t built for this."</a> He also <a href="https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/">pledged that future changes affecting existing subscribers would come with notice: "When we do land on something, if it affects existing subscribers you\'ll get plenty of notice before anything changes. Will hear it from us, not a screenshot on X or Reddit."</a> That promise now exists because of how this one was discovered.',
    'The timing was not ideal. <a href="https://www.cnbc.com/2026/04/09/openai-chatgpt-pro-subscription-anthropic-claude-code.html">OpenAI had launched its own $100/month ChatGPT Pro tier in early April 2026</a> to compete with Anthropic\'s Claude Code offerings. <a href="https://www.aol.com/articles/anthropics-claude-code-pricing-pain-193347355.html">OpenAI CEO Sam Altman replied "ok boomer" to Anthropic\'s head of growth on X, then added "tongiht i have had a couple of drinks," and posted "We want you to have a lot of AI!" with a link to OpenAI\'s rival coding tool</a>. <a href="https://simonwillison.net/2026/apr/22/claude-code-confusion/">OpenAI Codex lead Thibault Sottiaux contrasted his product: "Codex will continue to be available both in the FREE and PLUS ($20) plans... Transparency and trust are two principles we will not break."</a>',
    'The incident was <a href="https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/">reported across The Register (by Thomas Claburn), Ars Technica, Business Insider, and Simon Willison\'s blog, all on or around April 22, 2026</a>. <a href="https://www.wheresyoured.at/news-anthropic-removes-pro-cc/">Some Pro users reported their existing Claude Code access still worked during the brief removal</a>, which only strengthened the impression that this was a pricing experiment seen by everyone except the people running it.',
  ],
  receipts: [
    "The pricing page change and support article rewrite happened on the afternoon of April 21, 2026 with no changelog, email, or announcement.",
    "Max 5x ($100/mo) and Max 20x kept the green checkmark; only the $20 Pro column flipped to a red X.",
    "Ed Zitron's Bluesky post sourcing the Hacker News thread drew 328 points and 206 comments.",
    'Amol Avasare called it a ~2% test, then conceded it was "understandably confusing for the 98%."',
    "Both changes were reverted within hours; by April 23 the green checkmark was back on Pro.",
    'Thibault Sottiaux stated Codex would remain in the FREE and PLUS ($20) plans and cited "transparency and trust."',
  ],
  reactions: [
    {
      platform: "x",
      author: "Sam Altman (@sama)",
      meta: 'Reply to Anthropic\'s head of growth; later added "tongiht i have had a couple of drinks"',
      quote: "ok boomer",
      url: "https://www.aol.com/articles/anthropics-claude-code-pricing-pain-193347355.html",
    },
    {
      platform: "x",
      author: "Amol Avasare (@TheAmolAvasare), Anthropic Head of Growth",
      meta: "Anthropic's first public response on X",
      quote:
        "For clarity, we're running a small test on ~2 percent of new prosumer signups. Existing Pro and Max subscribers aren't affected.",
      url: "https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/",
    },
    {
      platform: "other",
      author: "Simon Willison",
      meta: "From his blog post on the confusion",
      quote:
        "A tweet from an employee is not the way to make an announcement like this. I wasted a solid hour of my afternoon trying to figure out what had happened here.",
      url: "https://simonwillison.net/2026/apr/22/claude-code-confusion/",
    },
    {
      platform: "other",
      author: "Simon Willison",
      meta: "Blog post, simonwillison.net",
      quote:
        "A whole lot of people got scared or angry or both that a service they relied on was about to be rug-pulled.",
      url: "https://simonwillison.net/2026/apr/22/claude-code-confusion/",
    },
    {
      platform: "hackernews",
      author: "verdcircuit",
      meta: "HN thread (328 points, 206 comments)",
      quote:
        "This is not so much about capacity, I pay $X and I get a certain amount. This is much more about removing access to a feature I have access to.",
      url: "https://news.ycombinator.com/item?id=47854477",
    },
    {
      platform: "hackernews",
      author: "takihito",
      meta: "Comment on The Register HN submission",
      quote:
        "Are they trying to reduce cloud servers needed for AI because they're running out? I wish they'd be a little more honest in their response.",
      url: "https://news.ycombinator.com/item?id=47857130",
    },
  ],
  images: [
    {
      src: "/events/claude-code-pro-paywall/simonwillison-pricing-redx.jpg",
      alt: "Anthropic pricing table showing Claude Code marked unavailable with a red X under the $20 Pro plan",
      caption:
        "Anthropic's pricing comparison matrix showing Claude Code with a red X (unavailable) on the Pro plan column. Credit: Simon Willison.",
      sourceUrl: "https://simonwillison.net/2026/apr/22/claude-code-confusion/",
      width: 1446,
      height: 948,
    },
    {
      src: "/events/claude-code-pro-paywall/register-composite.jpg",
      alt: "Composite screenshot of Anthropic web pages showing inconsistent Claude Code Pro plan availability",
      caption:
        "The Register's composite of Anthropic web pages showing the conflicting Claude Code subscription information. Credit: The Register.",
      sourceUrl: "https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/",
      width: 960,
      height: 656,
    },
  ],
  aftermath:
    "Anthropic said the underlying 2% experiment stayed live, so the pricing page may still be A/B testing a future you are not allowed to see yet. The company now has a public commitment to warn existing subscribers before changes, a pledge that exists precisely because this one leaked. OpenAI, meanwhile, has a $20 coding tool and a screenshot of Anthropic's head of growth promising you will not learn about pricing changes from social media.",
};
