import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "pirated-books-settlement",
  deck: "On September 25, 2025, U.S. District Judge William Alsup granted preliminary approval to a $1.5 billion settlement over 482,460 pirated books that Anthropic downloaded from shadow libraries.",
  body: [
    'On September 25, 2025, U.S. District Judge William Alsup in the Northern District of California granted preliminary approval to a <a href="https://www.cnbc.com/2025/09/25/judge-anthropic-case-preliminary-ok-to-1point5b-settlement-with-authors.html">$1.5 billion settlement</a> in the authors\' copyright class action against Anthropic, <em>Bartz v. Anthropic</em>. It is the largest known copyright recovery in U.S. history and the first major copyright settlement of the AI era, a distinction plaintiffs\' counsel noted makes it a <a href="https://www.susmangodfrey.com/wins/susman-godfrey-secures-1-5-billion-settlement-in-landmark-ai-piracy-case/">"landmark settlement [that] far surpasses any other known copyright recovery."</a> The official certified Works List was finalized at <a href="https://www.cbsnews.com/news/judge-approves-1-5-billion-dollar-settlement-anthropic-pirated-books/">482,460 works</a>, which pencils out to roughly $3,000 per book, plus interest.',
    'The covered works are books Anthropic <a href="https://www.susmangodfrey.com/wins/susman-godfrey-secures-1-5-billion-settlement-in-landmark-ai-piracy-case/">downloaded from the pirate "shadow libraries" Library Genesis in June 2021 and the Pirate Library Mirror in July 2022</a>. In a June 2025 ruling, Judge Alsup found that training AI on books was fair use if the books were acquired legally, but <a href="https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/">denied Anthropic summary judgment on the piracy claims</a>. The settlement allowed Anthropic to avoid a trial specifically on its pirate-library sourcing.',
    'The settlement requires Anthropic to <a href="https://www.susmangodfrey.com/wins/susman-godfrey-secures-1-5-billion-settlement-in-landmark-ai-piracy-case/">destroy the original and copied pirated files</a>. It does not grant Anthropic a license for future AI training and does not release claims based on AI model outputs. The settlement is <a href="https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/">funded in four installments from October 2025 through September 2027</a>, with payouts defaulting to a 50/50 split between authors and publishers while self-published authors receive 100%. A searchable database and claims portal launched in October 2025 at anthropiccopyrightsettlement.com, with a <a href="https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/">January 29, 2026 opt-out deadline and a March 30, 2026 claims deadline</a>.',
    'Before approving, Alsup had on September 8, 2025 <a href="https://news.bloomberglaw.com/ip-law/anthropic-judge-blasts-copyright-pact-as-nowhere-close-to-done">postponed approval and blasted the deal as "nowhere close to complete,"</a> said he felt "misled," and warned that class lawyers risked forcing a deal "down the throat of authors." Granting preliminary approval on September 25, he <a href="https://www.cbsnews.com/news/judge-approves-1-5-billion-dollar-settlement-anthropic-pirated-books/">called the deal "fair"</a> but said the claims process would be complicated, telling the lawyers, "We have some of the best lawyers in America in this courtroom and if anyone can do it, you can."',
    'By the claims deadline, <a href="https://authorsguild.org/news/anthropic-settlement-update-91-percent-of-books-claimed/">440,490 of the 482,460 eligible works had been claimed</a>, a 91.3 percent claim rate. The <a href="https://www.susmangodfrey.com/wins/susman-godfrey-secures-1-5-billion-settlement-in-landmark-ai-piracy-case/">lead plaintiffs were authors Andrea Bartz, Charles Graeber, and Kirk Wallace Johnson</a>, represented by Justin Nelson of Susman Godfrey and Rachel Geman of Lieff Cabraser Heimann &amp; Bernstein.',
  ],
  receipts: [
    "The certified Works List was finalized at 482,460 works.",
    "Anthropic downloaded the books from Library Genesis in June 2021 and the Pirate Library Mirror in July 2022.",
    "The settlement is funded in four installments from October 2025 through September 2027.",
    "Self-published authors receive 100% of payouts; the default split is 50/50 between authors and publishers.",
    "440,490 of the 482,460 eligible works had been claimed as of the deadline, a 91.3 percent claim rate.",
    'On September 8, 2025, Judge Alsup called the deal "nowhere close to complete" and said he felt "misled."',
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "deafpolygon",
      meta: "HN thread on the settlement, item 45142885 (989 points, 737 comments)",
      quote: "Honestly, this is a steal for Anthropic.",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "atleastoptimal",
      meta: "HN comment on item 45142885",
      quote: "Avoiding being slowed down by even a few days is worth a billion dollar payout",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "swiftcoder",
      meta: "HN comment on item 45142885",
      quote:
        "They pay out (relative) chump change as a penalty for explicitly pirating a bunch of ebooks",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "OhMeadhbh",
      meta: "HN comment on item 45142885",
      quote:
        "Median income was $3100 which is greater than the $3000 average award from the Anthropic settlement.",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "acomjean",
      meta: "HN comment on item 45142885",
      quote:
        "It will be interesting to see how this impacts the lawsuits against OpenAI, Meta, and Microsoft. Will they quickly try to settle for billions as well?",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
  ],
  images: [],
  aftermath:
    'At the final-approval hearing on May 14, 2026, a judge <a href="https://kfgo.com/2026/05/14/us-judge-considers-anthropics-1-5-billion-settlement-of-authors-lawsuit/">declined final approval</a> and asked for more detail on lawyers\' fees, as counsel sought 25 percent of the fund, and on lead-plaintiff payments, amid objections that the amount was too small. More than 25 writers who opted out, including Dave Eggers and Vendela Vida, filed a new complaint against Anthropic.',
};
