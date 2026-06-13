import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "transparency-report-bans",
  deck: "Anthropic's transparency report disclosed 1.45 million banned accounts, 52,000 appeals, and 1,700 reversals. The numbers are now public; the process is still a Google Form.",
  body: [
    "On January 29, 2026, Anthropic updated its <a href='https://www.anthropic.com/transparency/system-trust-reporting'>System Trust and Reporting</a> page with figures for July through December 2025: <a href='https://www.anthropic.com/transparency/system-trust-reporting'>1.45 million accounts banned</a>, <a href='https://www.anthropic.com/transparency/system-trust-reporting'>52,000 appeals filed</a>, and <a href='https://finance.biggo.com/news/_Lvugp0Bh5an-7GhQ-rp'>1,700 bans overturned</a>. That is a 3.3% appeal success rate, or 0.12% of all banned accounts restored. The page is part of the <a href='https://www.anthropic.com/news/introducing-anthropic-transparency-hub'>Transparency Hub</a>, which Anthropic <a href='https://www.anthropic.com/news/introducing-anthropic-transparency-hub'>launched on February 27, 2025</a> to report banned accounts, appeals, NCMEC reports, and government request data.",
    "The <a href='https://www.anthropic.com/transparency/system-trust-reporting'>Safeguards Team</a> enforces the Usage Policy, Consumer Terms of Service, Commercial Terms of Service, and Supported Region Policy through warnings, suspensions, or account terminations. Per the official language, <a href='https://www.anthropic.com/transparency/system-trust-reporting'>banned users may file appeals to request a review of our decision to ban their account</a>. The machinery is now visible. From the outside it still looks like filling out a form and waiting.",
    "The numbers arrived amid documented cases of sudden, unexplained organizational lockouts. <a href='https://x.com/om_patel5/status/2048594208345227497'>A roughly 110-person agricultural technology company</a> lost all staff access to Claude overnight with no warning. An <a href='https://news.ycombinator.com/item?id=47853021'>April 2026 Hacker News thread</a> titled \"Anthropic bans orgs without warning\" (48 points) described suspensions affecting 110-plus users with no warning, explanation, or meaningful appeal process.",
    "<a href='https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation'>Belo, a separate company, had Claude access cut for 60 employees on a Friday</a> over what it described as a vague message about breaking the service's usage policy. Support via Google Form was the only recourse. Access was restored about 15 hours later. <a href='https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation'>Belo CEO Patricio Molina</a> publicly summarized the lesson as <a href='https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation'>'Never put your eggs in one basket'</a>.",
    "Anthropic later attributed some enforcement waves to technical issues rather than policy violations. Anthropic employee Thariq Shihipar described at least one wave of bans as an <a href='https://finance.biggo.com/news/_Lvugp0Bh5an-7GhQ-rp'>'overly sensitive abuse detection classifier misfire'</a>. T3 founder <a href='https://x.com/theo/status/2045618854932734260'>Theo publicly noted that some T3 Code users were banned without warning</a>, stating his Anthropic contacts believed the bans were <a href='https://x.com/theo/status/2045618854932734260'>'likely in error'</a> and that he could not replicate them despite heavy Claude Code use.",
    "The Transparency Hub now quantifies the system: 1.45 million accounts, 52,000 appeals, 1,700 reversals. What it does not quantify is how many of the remaining 50,300 rejected appeals were themselves errors, how many of the 1.45 million were classifier misfires, or how many companies discovered their entire workflow had evaporated on a Friday evening with a Google Form as their only lifeline.",
  ],
  receipts: [
    "1.45 million accounts banned July-December 2025 per <a href='https://www.anthropic.com/transparency/system-trust-reporting'>Anthropic's System Trust and Reporting page</a>",
    "52,000 appeals filed, 1,700 overturned: ~3.3% success rate, ~0.12% of all bans reversed via <a href='https://finance.biggo.com/news/_Lvugp0Bh5an-7GhQ-rp'>BigGo Finance</a>",
    "110-person agtech company locked out overnight: <a href='https://x.com/om_patel5/status/2048594208345227497'>@om_patel5 on X</a>",
    "Belo's 60 employees cut off Friday, restored ~15 hours later via Google Form support: <a href='https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation'>Tom's Hardware</a>",
    "'Overly sensitive abuse detection classifier misfire' -- Anthropic employee Thariq Shihipar via <a href='https://finance.biggo.com/news/_Lvugp0Bh5an-7GhQ-rp'>BigGo Finance</a>",
    "Theo on T3 Code bans: Anthropic contacts said 'likely in error' via <a href='https://x.com/theo/status/2045618854932734260'>@theo on X</a>",
  ],
  reactions: [
    {
      platform: "x",
      author: "@minchoi",
      meta: "X post",
      quote:
        "Anthropic shut down an entire company's Claude access overnight 60+ employees. No explanation. Just an email. Want to appeal? Fill out a Google Form. Integrations gone. Histories gone. Everything built on Claude... gone. Never let one vendor own your workflow.",
      url: "https://x.com/minchoi/status/2045542832241262602",
    },
    {
      platform: "x",
      author: "@om_patel5",
      meta: "X post",
      quote:
        "ANTHROPIC JUST BANNED A 110 PERSON COMPANY OVERNIGHT WITHOUT WARNING monday morning at an agricultural tech company, every single employee wakes up to an email saying their claude account has been suspended 110 people locked out at the same time with zero warning",
      url: "https://x.com/om_patel5/status/2048594208345227497",
    },
    {
      platform: "x",
      author: "@theo",
      meta: "X post",
      quote:
        "We've seen a small number of reports of Anthropic banning T3 Code users without warning. My contacts at Anthropic believe this is likely in error. We are actively investigating. We have not been able to replicate the bans on our end despite using Claude Code heavily in T3 Code.",
      url: "https://x.com/theo/status/2045618854932734260",
    },
    {
      platform: "hackernews",
      author: "taklimakan",
      meta: "comment on 'Anthropic bans orgs without warning' (48 points)",
      quote:
        "Fresh company account, banned right away. Two weeks later we get an automated email stating that our appeal was reviewed but they could do nothing about that.",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
    {
      platform: "hackernews",
      author: "muzani",
      meta: "comment on 'Anthropic bans orgs without warning'",
      quote:
        "It takes 3 weeks to get past the AI customer service bot, assuming you ever do. Good luck.",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
    {
      platform: "hackernews",
      author: "codingdave",
      meta: "comment on 'Anthropic bans orgs without warning'",
      quote:
        "No LLM platform ever will be [trustworthy]. One cannot set up a business where another company becomes critical to your operations.",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
  ],
  images: [],
  aftermath:
    "Anthropic continues publishing System Trust and Reporting updates. The appeals process remains a Google Form. The joke, if there is one, is that the transparency report quantified the machine without changing its outputs: 1.45 million in, 1,700 out, and a form to fill out in between.",
};
