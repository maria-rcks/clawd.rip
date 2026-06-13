import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fair-use-ruling",
  deck: 'On June 23–24, 2025, Judge William Alsup ruled that training Claude on lawfully acquired books was "exceedingly transformative" fair use, while holding that pirating over seven million volumes to build a central library was "inherently, irredeemably infringing."',
  body: [
    'On June 23–24, 2025, U.S. District Judge William Alsup in the Northern District of California issued a summary judgment in <em>Bartz v. Anthropic</em> that split the difference between theory and practice. He held that using lawfully acquired books to train Claude and its precursors was fair use, while claims that Anthropic built a "central library" from pirated copies would proceed to trial. The named plaintiffs were Andrea Bartz, Charles Graeber, and Kirk Wallace Johnson. <a href="https://www.npr.org/2025/06/25/nx-s1-5445242/federal-rules-in-ai-companys-favor-in-landmark-copyright-infringement-lawsuit-authors-bartz-graeber-wallace-johnson-anthropic">NPR</a> and <a href="https://dc.fortune.com/2025/06/24/ai-training-is-fair-use-federal-judge-rules-anthropic-copyright-case">Fortune</a> reported the decision.',
    'Alsup described AI training as "among the most transformative many of us will see in our lifetimes," calling the use of the books "quintessentially transformative," "exceedingly transformative," and "spectacularly so." He wrote that <em>"Like any reader aspiring to be a writer, Anthropic\'s LLMs trained upon works not to race ahead and replicate or supplant them — but to turn a hard corner and create something different."</em> The <a href="https://simonwillison.net/2025/Jun/24/anthropic-training/">Simon Willison</a> writeup captured the enthusiasm.',
    'The praise stopped at the paywall. Before buying books, Anthropic downloaded over seven million pirated copies from shadow libraries such as LibGen and PiLiMi, paying nothing. Alsup wrote that <em>"pirating copies to build a research library without paying for it, and to retain copies should they prove useful for one thing or another, was its own use — and not a transformative one,"</em> finding piracy "inherently, irredeemably infringing." He added: <em>"That Anthropic later bought a copy of a book it earlier stole off the internet will not absolve it of liability for theft but it may affect the extent of statutory damages,"</em> and scheduled a trial on piracy liability and damages for December 1, 2025. <a href="https://www.boyarmiller.com/bartz-v-anthropic-a-split-decision-that-reshapes-ai-copyright-law/">BoyarMiller</a> analyzed the split.',
    'Anthropic also argued that destructively scanning lawfully purchased physical books — effectively format conversion — was permissible, and the judge agreed, reasoning that requiring payment for each reading of a book "would be unthinkable." The fair-use endorsement marked the first U.S. judicial approval of the doctrine for AI training on books, though <a href="https://www.whitecase.com/insight-alert/two-california-district-judges-rule-using-books-train-ai-fair-use">White &amp; Case</a> noted that days later a separate California judge, Vince Chhabria, issued a parallel fair-use ruling in <em>Kadrey v. Meta</em>.',
    'The Authors Guild called the ruling a mixed decision, stating <em>"It feels as though the court rushed to issue a decision without fully understanding the copyright law and legal issues or the potential harm,"</em> and predicted the fair-use findings <em>"will ultimately be reversed."</em> Their assessment appeared in the <a href="https://authorsguild.org/news/mixed-decision-in-anthropic-ai-case/">Authors Guild</a> reaction post.',
    'The parties settled before the December trial. The case closed for $1.5 billion — among the largest copyright settlements ever — covering approximately 500,000 titles drawn from the roughly seven million copies downloaded from LibGen and PiLiMi, with a minimum award of about $3,000 per title before fees. The settlement followed mediation and was preliminarily approved by Judge Alsup on September 25, 2025; the default split was 50/50 between authors and publishers, with self-published and rights-reverted authors receiving 100%. The <a href="https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/">Authors Guild</a> published an explainer on the payout structure.',
  ],
  receipts: [
    'Judge Alsup described AI training as "among the most transformative many of us will see in our lifetimes."',
    "Anthropic downloaded over seven million pirated copies from LibGen and PiLiMi before purchasing any books.",
    "The trial on piracy liability was scheduled for December 1, 2025; the parties settled before it began.",
    "The settlement was $1.5 billion for roughly 500,000 titles, yielding a minimum of about $3,000 per title before fees.",
    "Preliminary approval came on September 25, 2025, with a default 50/50 split between authors and publishers.",
    "Days later, Judge Vince Chhabria issued a parallel fair-use ruling in Kadrey v. Meta.",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "pseufaux",
      meta: "HN thread on the Anthropic ruling, item 44381639",
      quote:
        "I personally think the illegal status of current models should be pretty clear simply based of the pirated nature of their input material. To my understanding, fair use has never before applied to works that were obtained illegally.",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
    {
      platform: "hackernews",
      author: "hn_throwaway_99",
      meta: "HN comment on item 44381639",
      quote:
        "the speed and scale with which LLMs function completely breaks the use cases for which fair use was originally envisioned",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
    {
      platform: "hackernews",
      author: "mystified5016",
      meta: "HN comment on item 44381639",
      quote:
        "DDOSes are illegal attacks due to the speed and scale of the automation. If a website gets organically DOSed by Slashdot, that is not an illegal attack. LLMs 'reading' a book is not the same as a human reading a book in the exact same way that following a very popular link is not participating in a DDOS",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
    {
      platform: "hackernews",
      author: "pseufaux",
      meta: "HN comment on item 44381639",
      quote:
        "Not a lawyer, but how would you think the law react when I sell computer for authors with pdf of pirated books come pre-installed as part of the 'reference' for aspiring authors to look at, without permission from publishers? The issue is the recall LLMs have over copyrighted contents.",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
  ],
  aftermath:
    "The ruling gave Anthropic a foundational fair-use precedent for training on purchased books while leaving the company with a $1.5 billion settlement for the pirated provenance of the same collection. The payout structure sent 100% of proceeds to self-published and rights-reverted authors, which is one way to convert a central library of stolen copies into a partially repaired revenue stream.",
};
