import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "pentagon-standoff",
  deck: "Anthropic discovered that having principles was more expensive than having customers when the Pentagon offered to let it keep both, provided it dropped the principles.",
  body: [
    'On February 26, 2026, Dario Amodei published a <a href="https://www.anthropic.com/news/statement-department-of-war">statement</a> announcing that Anthropic "cannot in good conscience accede" to the Pentagon\'s request to remove safeguards blocking Claude from mass domestic surveillance and fully autonomous weapons. The two red lines were framed as democratic values and the unreliability of current frontier AI, which is a polite way of saying the company had finally found a customer too demanding even for enterprise SaaS.',
    "The customer had given three days' notice. On February 24, Defense Secretary Pete Hegseth set a deadline of 5:01 p.m. on February 27 for Anthropic to permit \"unrestricted use of the company's AI models for all legal purposes,\" a phrase that apparently included purposes Anthropic had already decided were legal but undesirable. Claude was already integrated into US military intelligence workflows for target identification, so the standoff was less about whether the military could use Claude than about what it would be allowed to use it for.",
    'The Department of War\'s three threatened escalations were: termination of contracts reported at around $200 million, designation as a "supply chain risk" under FASCSA (a framework historically reserved for US adversaries), and potential invocation of the Defense Production Act of 1950. On February 27, President Trump directed all federal agencies to cease using Anthropic\'s technology, and Hegseth made the designation formal <a href="https://x.com/clashreport/status/2027508527942799834">on X</a>, adding that no military contractor, supplier, or partner could conduct any commercial activity with Anthropic. Under Secretary Emil Michael contributed his own analysis: "It\'s a shame that @DarioAmodei is a liar and has a God-complex." Pentagon spokesman Sean Parnell offered a softer counter, stating the Department had "no interest" in mass surveillance of Americans or autonomous weapons without human involvement, which raised the question of why the unrestricted-use clause was non-negotiable.',
    'Anthropic responded the same day with a <a href="https://www.anthropic.com/news/statement-comments-secretary-war">second statement</a> promising to "challenge any supply chain risk designation in court" and noting that "no amount of intimidation or punishment from the Department of War will change our position." More than 430 employees across multiple AI companies signed an open letter supporting the refusal, while over 100 Google AI team members asked their own leadership to "do everything in your power to stop any deal which crosses these basic red lines." The industry had discovered solidarity, or at least the tactical value of appearing to have it.',
    "Anthropic filed suit on March 9, 2026 (<em>Anthropic PBC v. Department of War</em>, N.D. Cal. 3:26-cv-01996). On March 26, Judge Rita F. Lin granted a preliminary injunction, finding the designation likely \"classic illegal First Amendment retaliation\" for Amodei's public statements. On April 8, a D.C. Circuit panel denied Anthropic's stay request, leaving the supply-chain-risk designation in place while citing military conflict interests. The Pentagon meanwhile began cycling through replacements on a GenAI.mil platform: Google Gemini, ChatGPT, then xAI's Grok. OpenAI reportedly rushed a DoD deal without Anthropic's constraints hours before Iran-related operations, proving that someone was always willing to take the contract.",
    "The incident established that Anthropic's safety brand had a price, and that the Pentagon had offered to pay the opposite of it. What remained unclear was whether the red lines were a business strategy or a genuine constraint, and whether the distinction mattered once the government decided to treat them as negotiable.",
  ],
  receipts: [
    "Contracts reported at around $200 million threatened with termination",
    "5:01 p.m. February 27 deadline for “unrestricted use” of Anthropic’s models",
    "430+ employees across AI companies signed an open letter backing the red lines",
    "100+ Google AI team members signed an internal letter of their own",
    "March 26: preliminary injunction granted; April 8: D.C. Circuit denies the stay",
    "Pentagon’s GenAI.mil platform cycled through Gemini, ChatGPT, then Grok",
  ],
  reactions: [
    {
      platform: "x",
      author: "Pete Hegseth (@SecWar)",
      meta: "Secretary of War · top HN story, 1,362 points",
      quote:
        "This week, Anthropic delivered a master class in arrogance and betrayal as well as a textbook case of how not to do business with the United States Government or the Pentagon. Our position has never wavered and will never waver: the Department of War must have full, unrestricted...",
      url: "https://x.com/SecWar/status/2027507717469049070",
    },
    {
      platform: "x",
      author: "Vitalik Buterin",
      meta: "Ethereum co-founder, via Benzinga",
      quote:
        "It will significantly increase my opinion of Anthropic if they do not back down and honorably eat the consequences.",
      url: "https://www.benzinga.com/news/events/26/02/50839998/ethereum-co-founder-vitalik-buterin-wants-anthropic-to-do-the-honorable-thing-and-eat-the-consequences-in-resisting-autonomous-weapons-surveillance",
    },
    {
      platform: "hackernews",
      author: "leapis",
      meta: "Comment on the 1,362-point HN thread",
      quote:
        "Decades of speculative science fiction, thought experiments, and discourse led to this. It's gratifying to see that we've garnered enough concern, a major AI lab risking this to reign in the potential of runaway AI disasters.",
      url: "https://news.ycombinator.com/item?id=47186677",
    },
    {
      platform: "hackernews",
      author: "jacobedawson",
      meta: "Original poster of the HN thread",
      quote:
        "Don't make the mistake of thinking their words have meaning. They see a way to punish the company, they take it. Same thing with declaring a national emergency to impose tariffs.",
      url: "https://news.ycombinator.com/item?id=47186677",
    },
    {
      platform: "hackernews",
      author: "mmooss",
      meta: "On the @SecWar designation tweet",
      quote: "Probably used Claude to write the tweet.",
      url: "https://news.ycombinator.com/item?id=47186677",
    },
  ],
  images: [],
  aftermath:
    "The supply-chain-risk designation remains in place after the April 8 stay denial, and Anthropic's court challenge continues. The Pentagon has operational AI through other vendors, and Anthropic has kept its safeguards at the cost of around $200 million in reported contracts. Whether this constitutes a principled stand or a market segmentation strategy depends on which analyst you ask.",
};
