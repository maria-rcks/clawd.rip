import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "belo-lockout",
  deck: "On April 17, 2026, Anthropic suspended more than 60 Belo employee accounts without warning, directed all appeals to a generic Google Form, and restored access roughly 15 hours later as an unannounced false positive.",
  body: [
    'On Friday, April 17, 2026, Anthropic abruptly suspended more than 60 Claude accounts belonging to Belo, an Argentina-based fintech firm, stopping employees mid-workflow. The mass suspension severed access to integrations, skills, workflows, and past conversation histories, disrupting business operations across the company. <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation">Tom\'s Hardware</a> reported that the cut-off was sudden and total.',
    "Employees received a notification stating only that automated systems had detected signals linked to a possible violation of usage policies. The message did not identify the specific policy, the conversation, or the user responsible. The only avenue to appeal was a generic Google Form; no direct support contact was provided.",
    'Patricio Molina, identified by most outlets as Belo\'s CTO—though some initially described him as CEO—publicized the incident on X. Several reports credit his posts with prompting the fast resolution. Molina described the immediate damage directly: <a href="https://www.storyboard18.com/amp/trending/very-bad-ux-and-customer-service-cto-says-anthropic-shut-down-firms-claude-access-with-no-warning-95630.htm">"Integrations, skills, conversation histories: everything lost or, in the best-case scenario, on indefinite hold."</a>',
    'Access returned after roughly 15 hours, with the suspension attributed to a false positive likely triggered by an automated detection system. The <a href="https://oecd.ai/en/incidents/2026-04-18-be9c">OECD.AI incident database</a> logged the event as incident 2026-04-18-be9c, noting that Anthropic\'s automated safeguards had mistakenly suspended the accounts and that "the later restoration of access confirms the suspension was a malfunction (false positive)." No official statement from Anthropic was quoted in coverage, and the false-positive determination came only after access was restored.',
    'Around the same period, a separate <a href="https://news.ycombinator.com/item?id=47853021">Hacker News post</a> described a parallel incident in which an agricultural technology company reported approximately 110 organization users—originally cited as 70—similarly suspended without warning. Those users were also offered only a Google Form to appeal, and the post indicated there had been no response, suggesting a recurring pattern rather than a one-off.',
    'In the aftermath, Molina warned other startups against over-reliance on a single AI provider, <a href="https://www.businesstoday.in/technology/story/never-put-all-your-eggs-in-one-basket-fintech-cto-warns-after-anthropic-suspends-60-accounts-526442-2026-04-20">summarizing the lesson</a> as "Never put all your eggs in one basket."',
  ],
  receipts: [
    "Anthropic suspended more than 60 Belo employee accounts on Friday, April 17, 2026.",
    "The only appeal channel offered was a generic Google Form, with no direct support contact provided.",
    "Access was restored after roughly 15 hours; the OECD.AI incident database (2026-04-18-be9c) classed the suspension as a malfunction (false positive).",
    "Belo CTO Patricio Molina publicized the incident on X and was credited by several reports with prompting the fast resolution.",
    "A separate Hacker News post described a parallel suspension of approximately 110 users at an agricultural technology company, also offered only a Google Form, with no response.",
    'Molina summarized the takeaway for other startups as: "Never put all your eggs in one basket."',
  ],
  reactions: [
    {
      platform: "x",
      author: "Pato Molina (@patomolina, Belo CTO)",
      meta: "Original X post, quoted across coverage",
      quote:
        "@claudeai you took down our entire organization with 60+ accounts belonging to a legitimate company for no apparent reason, without any explanations. The only way to appeal the decision is by filling out a Google Form? Very bad UX and customer service.",
      url: "https://www.storyboard18.com/amp/trending/very-bad-ux-and-customer-service-cto-says-anthropic-shut-down-firms-claude-access-with-no-warning-95630.htm",
    },
    {
      platform: "x",
      author: "Pato Molina (Belo CTO)",
      meta: 'Follow-up X post (Spanish): "They restored our access. Apparently it was a false positive. And as always: Twitter is customer service."',
      quote:
        "Nos restauraron el acceso. Aparentemente fue un falso positivo. Y como siempre: Tuiter es servicio.",
      url: "https://www.storyboard18.com/amp/trending/very-bad-ux-and-customer-service-cto-says-anthropic-shut-down-firms-claude-access-with-no-warning-95630.htm",
    },
    {
      platform: "hackernews",
      author: "inquisitive-me",
      meta: "HN thread on a parallel org-wide Anthropic ban (not Belo)",
      quote:
        "New attack vector just start asking chat bots questions that violate TOS and get the whole company banned.",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
    {
      platform: "hackernews",
      author: "NikolaosC",
      meta: "HN thread on a parallel org-wide Anthropic ban (not Belo)",
      quote: "The silence is the worst part you can't fix what nobody will explain.",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
    {
      platform: "hackernews",
      author: "muzani",
      meta: "HN thread on a parallel org-wide Anthropic ban (not Belo)",
      quote: "It takes 3 weeks to get past the AI customer service bot, assuming you ever do.",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
  ],
  images: [],
  aftermath:
    "Anthropic has not issued any official statement quoted in press coverage regarding the Belo suspension. The documented customer-facing recourse remains a generic Google Form, the false-positive determination only surfaced after the 15-hour lockout ended, and the parallel agricultural technology report—also routed through the same form—was met with silence, leaving the mechanics of the automated detection system unexplained in any official company channel.",
};
