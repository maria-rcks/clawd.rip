import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "authors-shadow-library-lawsuit",
  deck: "The class action Bartz et al. v. Anthropic PBC opened with the line 'Anthropic has built a multibillion-dollar business by stealing hundreds of thousands of copyrighted books,' and by the time the dust settled the company had agreed to pay $1.5 billion for works it allegedly downloaded from pirate libraries.",
  body: [
    "On August 19, 2024, case 3:24-cv-05417 was file-stamped in the Northern District of California with Andrea Bartz, Charles Graeber, and Kirk Wallace Johnson as named plaintiffs, each with a book you may have seen in an airport: <em>We Were Never Here</em>, <em>The Good Nurse</em>, and <em>The Feather Thief</em>. The complaint walked straight to the Bibliotik private tracker, the Books3 dataset of roughly 196,640 books, Library Genesis, Pirate Library Mirror, and EleutherAI's 800GB 'Pile,' and noted that Anthropic's December 2021 research paper had described sourcing material 'most of which we sourced from the Pile' including '32% internet books,' a phrase the complaint called 'a code word in the industry for pirated copies of books.'",
    "The complaint quoted co-founder Dario Amodei calling Anthropic 'a company that's focused on public benefit,' then suggested the company had instead 'attempted to steal the fire of Prometheus' to 'profit from strip-mining the human expression and ingenuity behind each one of those works.' It also noted Anthropic 'cloaked itself in the rhetoric of \"AI safety\" and \"responsibility,\"' and called the pirated troves a 'modern-day Napster.' This framing made every subsequent Anthropic deck on responsible AI share a stage with the allegation of mass book theft.",
    "In June 2025, Judge William Alsup issued a split ruling: training on legally acquired books was 'exceedingly transformative' and fair use, but he denied summary judgment on the piracy claims, writing 'Anthropic had no entitlement to use pirated copies for its central library.' He added that Anthropic's LLMs were 'trained upon works not to race ahead and replicate or supplant them—but to turn a hard corner and create something different,' which addressed the output side but not the input procurement. The following month the court certified a class for the piracy claims only, covering U.S. authors whose works Anthropic allegedly downloaded from LibGen and PiLiMi; filings indicated the company may have downloaded as many as 7 million books from pirate sites in 2021 and 2022.",
    "The settlement terms, described by the Authors Guild as the largest publicly reported copyright recovery in history, covered roughly 500,000 eligible titles out of about 7 million copies downloaded, with an expected minimum of about $3,000 per title before fees. A default 50/50 split between authors and publishers was set for trade and university-press titles, self-published authors would receive the full award, and the money would arrive in four installments through September 2027. The claims deadline was March 30, 2026, with final approval hearing set for May 14, 2026.",
    "At a September 8, 2025 hearing, Judge Alsup suggested the settlement was being shoved 'down the throat of authors,' said he was 'disappointed that counsel have left important questions to be answered in the future,' and remarked 'We'll see if I can hold my nose and approve it' before adjourning. He granted preliminary approval on September 25, 2025. Anthropic's deputy general counsel Aparna Sridhar said the settlement 'will allow us to focus on developing safe AI systems that help people and organizations extend their capabilities, advance scientific discovery, and solve complex problems.' Plaintiffs' attorney Justin Nelson of Susman Godfrey said it 'sends a powerful message to AI companies and creators alike that taking copyrighted works from these pirate websites is wrong.' The three authors issued a joint statement: 'We are grateful for the Court's action today, which brings us one step closer to real accountability for Anthropic and puts all AI companies on notice they can't shortcut the law or override creators' rights.'",
  ],
  receipts: [
    "Complaint filed August 19, 2024, Case No. 3:24-cv-05417, N.D. Cal.",
    "Named plaintiffs: Andrea Bartz, Charles Graeber, Kirk Wallace Johnson",
    "Pirated sources identified: Books3 (~196,640 books), LibGen, PiLiMi, The Pile",
    "Judge Alsup: training on legal copies was fair use, but 'no entitlement to use pirated copies'",
    "Settlement: $1.5 billion, ~500,000 eligible titles out of ~7 million downloaded, min. ~$3,000/title",
    "Judge Alsup on preliminary approval: 'We'll see if I can hold my nose and approve it'",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "deafpolygon",
      meta: "Comment on '$1.5B settlement' thread (989 points, 737 comments)",
      quote: "Honestly, this is a steal for Anthropic.",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "wmf",
      meta: "Comment on the $1.5B settlement thread (989 points, 737 comments)",
      quote: "With the per-item limit for 'willful infringement' being $150,000, it's a bargain.",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "on_meds",
      meta: "Comment on the $1.5B settlement thread (989 points, 737 comments)",
      quote:
        "Maybe, though this lawsuit is different in respect to the piracy issue. Anthropic is paying the settlement because they pirated the books, not because training on copyrighted books isn't fair use which isn't necessarily true with the other cases.",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
    {
      platform: "hackernews",
      author: "aeon_ai",
      meta: "Comment on the $1.5B settlement thread (989 points, 737 comments)",
      quote:
        "I guess they must delete all models since they acquired the source illegally and benefitted from it, right?",
      url: "https://news.ycombinator.com/item?id=45142885",
    },
  ],
  images: [],
  aftermath:
    "The settlement is proceeding through preliminary approval toward a final hearing in May 2026, with installments scheduled through September 2027; Anthropic's public benefit corporation status and AI safety branding remain intact, though any future mention of 'responsible development' now carries a $1.5 billion footnote about the books allegedly downloaded from pirate sites in 2021 and 2022.",
};
