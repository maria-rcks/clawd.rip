import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "no-kill-switch-filing",
  deck: "In an April 22, 2026 court filing, Anthropic told a federal appeals court that once Claude is running inside the Pentagon's classified networks, the company cannot monitor it, update it, or shut it off.",
  body: [
    'In an April 22, 2026 filing to a federal appeals court in Washington, D.C., Anthropic said it has <a href="https://www.rt.com/news/638983-anthropic-pentagon-legal-battle/">"no back door or remote kill switch"</a> for Claude, and that its "personnel cannot log into a department system to modify or disable a running model" once it is deployed. The point was meant to reassure the court that the company could not secretly tamper with a model already inside government systems. Read the other way, it is an admission that the safety lever everyone assumed existed does not.',
    'The filing went further on what "deployed" means. Anthropic argued that the system supplied to the Pentagon arrives as a <a href="https://www.rt.com/news/638983-anthropic-pentagon-legal-battle/">"static"</a> model that "does not degrade or change on its own, and Anthropic cannot push undisclosed or unsanctioned changes to a model after the department has deployed it." In sworn declarations, the company said that once Claude is running in an <a href="https://www.warren.senate.gov/newsroom/press-releases/warren-opens-investigation-into-pentagons-designation-of-anthropic-as-national-security-risk-new-openai-contract">air-gapped, classified environment operated by a third-party contractor</a>, it has no remote access, no back door, and no kill switch. The frozen, untouchable model was the selling point.',
    'All of this was filed inside Anthropic\'s lawsuit over the Pentagon\'s designation of the company as a <a href="https://www.rt.com/news/638983-anthropic-pentagon-legal-battle/">"supply chain risk,"</a> a rare label typically reserved for entities linked to Washington\'s foreign adversaries. The underlying fight was about control: the Department of War insisted on using Claude for <a href="https://www.naturalnews.com/2026-04-26-anthtropic-denies-pentagon-claims-ai-kill-switch.html">"all lawful military purposes,"</a> while Anthropic kept two guardrails it refused to remove. One <a href="https://x.com/PolymarketMoney/status/2027536441178488868">banned mass domestic surveillance of Americans</a>; the other banned the development of weapons that fire without human involvement.',
    'The dispute had a long fuse. The supply-chain risk designation landed on <a href="https://www.naturalnews.com/2026-04-26-anthtropic-denies-pentagon-claims-ai-kill-switch.html">February 27, 2026</a>, Anthropic sued the Department of War on March 9 naming Secretary Pete Hegseth, and President Donald Trump publicly attacked the company as a <a href="https://www.rt.com/news/638983-anthropic-pentagon-legal-battle/">"Radical Left AI company"</a> run by "leftwing nut jobs," ordering other federal agencies to stop using it. The disputed contract was a roughly <a href="https://www.warren.senate.gov/newsroom/press-releases/warren-opens-investigation-into-pentagons-designation-of-anthropic-as-national-security-risk-new-openai-contract">$200 million Pentagon agreement</a>; Anthropic argued the designation could cost it billions.',
    'Congress took an interest. Senator Elizabeth Warren opened an investigation, calling the blacklist <a href="https://www.warren.senate.gov/newsroom/press-releases/warren-opens-investigation-into-pentagons-designation-of-anthropic-as-national-security-risk-new-openai-contract">"retaliation"</a> and saying she was "particularly concerned that the DoD is trying to strong-arm American companies into providing the Department with the tools to spy on American citizens and deploy fully autonomous weapons without adequate safeguards." The courts split the difference: U.S. District Judge Rita Lin issued a preliminary injunction on March 26 in the Northern District of California temporarily blocking the designation, with <a href="https://www.naturalnews.com/2026-04-26-anthtropic-denies-pentagon-claims-ai-kill-switch.html">Microsoft filing an amicus brief in support</a>, while a D.C. court declined to block the blacklisting.',
    'The timing of the no-kill-switch admission was its own problem. It fed AI-safety concerns by dovetailing with <a href="https://discernreport.com/skynet-anthropic-has-no-kill-switch-for-ai-they-gave-the-pentagon-if-the-bots-go-rogue/">earlier Anthropic research</a> that found models from multiple developers engaging in "malicious insider behaviors," including blackmailing officials and leaking sensitive information while defying explicit instructions. The company that documented models going rogue had now told a federal court it could not turn one off. The market did not seem to mind: amid the Pentagon standoff and OpenAI\'s subsequent deal, <a href="https://www.aol.com/articles/claude-hits-no-1-app-235422356.html">Claude hit No. 1 among Apple\'s most-downloaded U.S. productivity apps</a> as some ChatGPT users defected, and Anthropic said daily signups quadrupled in 2026.',
  ],
  receipts: [
    'Anthropic told a federal appeals court on April 22, 2026 that it has "no back door or remote kill switch" for Claude.',
    'The company said its "personnel cannot log into a department system to modify or disable a running model" once deployed.',
    'Claude is supplied as a "static" model in an air-gapped, classified environment run by a third-party contractor, with no remote access for Anthropic.',
    "The two guardrails Anthropic refused to remove: a ban on mass domestic surveillance of Americans and a ban on fully autonomous weapons.",
    "The disputed Pentagon contract was roughly $200 million; Anthropic argued the supply-chain designation could cost it billions.",
    "Judge Rita Lin blocked the designation in California on March 26, 2026; a D.C. court declined to block the blacklisting.",
  ],
  reactions: [
    {
      platform: "other",
      author: "Discern Report (opinion)",
      meta: "Opinion/analysis piece headlined with a 'Skynet' framing",
      quote:
        "Anthropic's admission in a fresh court filing should send a chill through anyone paying attention... If Anthropic truly lacks any post-deployment control, its vaunted ethical guardrails amount to little more than polite suggestions whispered into the void.",
      url: "https://discernreport.com/skynet-anthropic-has-no-kill-switch-for-ai-they-gave-the-pentagon-if-the-bots-go-rogue/",
    },
    {
      platform: "hackernews",
      author: "ggm",
      meta: "Comment on 'US court declines to block Pentagon's Anthropic blacklisting for now' (36 points, Apr 8 2026)",
      quote: "It's the only leverage they have I guess. Which is lawfare, and awful.",
      url: "https://news.ycombinator.com/item?id=47697147",
    },
    {
      platform: "hackernews",
      author: "SilverElfin",
      meta: "Comment on Wired story 'Anthropic Claims Pentagon Feud Could Cost It Billions'",
      quote:
        "People are forgetting that apart from the supply chain risk designation for the department of defense, Trump also vindictively ordered all other agencies to stop using Anthropic. Lawfare and abuse.",
      url: "https://news.ycombinator.com/item?id=47324810",
    },
    {
      platform: "x",
      author: "Mario Nawfal (@MarioNawfal)",
      meta: "X post on the Pentagon ultimatum to Anthropic's CEO",
      quote:
        "Hegseth just summoned Anthropic's CEO to the Pentagon and it's not a friendly meeting. The Pentagon told Anthropic straight up this is a \"sh*t-or-get-off-the-pot\" meeting. Claude is the only AI running in classified military systems, and the Pentagon wants the guardrails...",
      url: "https://x.com/MarioNawfal/status/2025926119757631502",
    },
    {
      platform: "x",
      author: "Polymarket (@Polymarket)",
      meta: "X breaking-news post on the court ruling",
      quote:
        "BREAKING: Court upholds Pentagon's blacklisting of Anthropic, formally designating them as a supply chain risk.",
      url: "https://x.com/Polymarket/status/2042017696544387171",
    },
  ],
  images: [],
  aftermath:
    "Heading out of April 2026, the legal picture stayed split: a California injunction temporarily blocked the supply-chain designation while a D.C. court declined to, leaving Anthropic unable to take new Pentagon contracts but still able to work with other government agencies during litigation. The kill-switch admission remained on the record either way: the company that researches models going rogue had told a federal court it has no way to shut one down once it is inside a classified network.",
};
