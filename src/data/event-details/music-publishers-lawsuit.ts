import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "music-publishers-lawsuit",
  deck: "Universal Music Group, Concord, and ABKCO sued Anthropic on October 18, 2023, alleging Claude was trained to reproduce copyrighted lyrics from hundreds of songs on demand.",
  body: [
    'On October 18, 2023, music publishers Universal Music Group, Concord, and ABKCO filed a copyright infringement lawsuit against Anthropic in the US District Court for the Middle District of Tennessee, Case No. 3:23-cv-01092. <a href="https://variety.com/2023/music/news/universal-concord-abkco-sue-ai-company-anthropic-copyright-violation-1235761250/">Variety reported</a> that the complaint alleged Anthropic unlawfully copied and distributed lyrics from at least 500 copyrighted songs—specifically listed as 499—to train its Claude AI models, and that Claude could reproduce those lyrics when prompted.',
    "The complaint named tracks including Don McLean's “American Pie,” the Rolling Stones' “Gimme Shelter,” Mark Ronson and Bruno Mars' “Uptown Funk,” Sam Cooke's “A Change Is Gonna Come,” The Beach Boys' “God Only Knows,” and “What a Wonderful World,” alongside artists ranging across Beyoncé, Katy Perry, and Otis Redding. <a href=\"https://www.theregister.com/2023/10/20/music_publishers_sue_anthropic/\">The Register noted</a> one cited example in which Claude, asked to write about the death of Buddy Holly, returned the lyrics to “American Pie” while falsely claiming authorship of an original composition.",
    "The publishers argued infringement occurred at three stages: copying during initial data ingestion, additional reproduction during fine-tuning, and producing near-identical copies as Claude's outputs. A key line from the complaint stated that “A defendant cannot reproduce, distribute, and display someone else's copyrighted works to build its own business unless it secures permission from the rightsholder. That principle does not fall away simply because a company adorns its infringement with the words ‘AI.’” <a href=\"https://knowingmachines.org/knowing-legal-machines/legal-explainer/cases/concord-v-anthropic\">Knowing Machines summarized</a> the filing.",
    "The publishers sought statutory damages of up to $150,000 per infringed work, which amounted to potentially around $75 million for roughly 500 songs, plus up to $25,000 per copyright-management-information violation. The publishers were represented by attorney Matthew J. Oppenheim of Oppenheim + Zebrak, the firm known for major music-industry copyright litigation. At the time of the suit, Anthropic had recently been valued around $5 billion and was in the process of receiving a multi-billion-dollar investment commitment from Amazon of up to $4 billion.",
    "In November 2023 the publishers asked the court for a preliminary injunction to halt Anthropic's use of the lyrics; the motion became a contested, unresolved part of the case. In January 2025, US District Judge Eumi Lee <a href=\"https://www.hollywoodreporter.com/business/business-news/anthropic-enforce-copyright-guardrails-ai-tools-1236098152/\">approved a deal</a> requiring Anthropic to maintain existing guardrails preventing Claude from reproducing the publishers' copyrighted lyrics or generating new lyrics derived from them, while the broader case continued. Judge Lee declined to grant the publishers' broader preliminary injunction, finding they had not shown Anthropic's use caused “irreparable harm” or reduced license fees from lyrics websites.",
    "Anthropic's core defense is that training on lyrics is transformative fair use, arguing <a href=\"https://www.billboard.com/pro/anthropic-claude-ai-music-lawsuit-argues-fair-use-finding/\">in court filings</a> that “Claude's transformative training creates a flexible, general-purpose model that can be used in myriad beneficial ways - the vast majority of which are wholly unrelated to lyrics or music.”",
    'The case was later transferred to the Northern District of California, docketed as 5:24-cv-03811. By March 2026 the publishers moved for partial summary judgment, calling Anthropic\'s conduct “copyright infringement on a massive scale” and stating that “The evidence in this case is overwhelming.” <a href="https://www.musicbusinessworldwide.com/infringement-on-a-massive-scale-umg-concord-and-abkco-ask-court-to-rule-against-ai-company-anthropic-ahead-of-trial/">Music Business Worldwide reported</a> on the motion.',
  ],
  receipts: [
    "Filed October 18, 2023, in the Middle District of Tennessee as Case No. 3:23-cv-01092.",
    "Complaint cited 499 songs and sought up to $150,000 per work—roughly $75 million—plus $25,000 per copyright-management-information violation.",
    "When prompted about Buddy Holly's death, Claude output the lyrics to Don McLean's “American Pie” while claiming it had written an original composition.",
    "In January 2025, Judge Eumi Lee ordered Anthropic to maintain guardrails blocking lyric reproduction but declined to find “irreparable harm.”",
    "The case was transferred to the Northern District of California (5:24-cv-03811); by March 2026 the publishers moved for partial summary judgment calling the conduct “copyright infringement on a massive scale.”",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "Our_Benefactors",
      meta: "comment on 'Music publishers sue AI company Anthropic over song lyrics' (Reuters thread, 14 points)",
      quote:
        'Where are all the supposed "damages" from websites that host song lyrics? This is more rent-seeking behavior that I cannot condemn any more strongly.',
      url: "https://news.ycombinator.com/item?id=37940732",
    },
    {
      platform: "hackernews",
      author: "artninja1988",
      meta: "reply in Reuters HN thread",
      quote: "Yeah, what about rap genius? Hope this gets dismissed ASAP",
      url: "https://news.ycombinator.com/item?id=37940732",
    },
    {
      platform: "hackernews",
      author: "iamdelirium",
      meta: "reply in Reuters HN thread",
      quote: "Those sites usually pay a license for the lyrics.",
      url: "https://news.ycombinator.com/item?id=37940732",
    },
    {
      platform: "hackernews",
      author: "jarsin",
      meta: "comment on 'Music Publishers Reach Deal with AI Giant Anthropic' thread",
      quote:
        "Why are song lyrics now considered copyright protected, but the rest of the entire internet isn't? Are poems on blogs protected too? How about short stories? Training on the entire internet seems such a slippery slope.",
      url: "https://news.ycombinator.com/item?id=42582053",
    },
  ],
  images: [],
  aftermath:
    "The litigation continues in the Northern District of California, where Anthropic must keep its lyric-blocking guardrails in place while the court decides whether training on copyrighted songs constitutes transformative fair use or merely an expensive way to build a $5 billion chatbot that knows all the words to “Gimme Shelter.”",
};
