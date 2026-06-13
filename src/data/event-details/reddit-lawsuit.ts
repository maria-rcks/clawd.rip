import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "reddit-lawsuit",
  deck: 'Reddit sued Anthropic for breach of contract and trespass to chattels after alleging ClaudeBot kept hitting its servers more than 100,000 times following promises to stop, while Anthropic marketed itself as the AI industry\'s respectful "white knight."',
  body: [
    'Reddit filed suit against Anthropic on June 4, 2025, in California Superior Court in San Francisco, where both companies are based, under case number <a href="https://www.cbsnews.com/news/reddit-ai-training-lawsuit-anthropic-scraping-chatbot-claude/">CGC-25-625892</a>. The complaint brought five California state-law causes of action: breach of contract, unjust enrichment, trespass to chattels, tortious interference with contract, and unfair competition under California Business & Professions Code Section 17200&mdash;<a href="https://www.crowell.com/en/insights/client-alerts/northern-district-of-california-court-holds-state-tort-and-contract-claims-not-preempted-by-federal-copyright-act-remands-reddit-v-anthropic-to-state-court">notably omitting copyright infringement</a>, distinguishing it from the book cases.',
    "Reddit alleged Anthropic's bots accessed its servers more than 100,000 times since July 2024, <a href=\"https://www.aol.com/reddit-accuses-anthropic-scraping-comments-133000041.html\">after Anthropic had publicly said around mid-2024 that it had blocked or stopped its crawlers</a>. An Anthropic spokesperson claimed crawling had stopped since mid-May, while Reddit's own server logs showed more than 100,000 subsequent automated accesses by ClaudeBot and other agents. Reddit further alleged Anthropic ignored Reddit's technical safeguards, including its <a href=\"https://dig.watch/updates/reddit-accuses-anthropic-of-misusing-user-content\">robots.txt file and the platform's user agreement</a>, to extract user-generated content.",
    'The lawsuit cited a 2021 Anthropic research paper co-authored by CEO Dario Amodei that identified high-quality subreddits for AI training&mdash;gardening, history, relationship advice, and shower thoughts&mdash;naming r/explainlikeimfive, r/WritingPrompts, r/AskHistorians, and r/changemyview, with Reddit posts allegedly used among the "good samples" to fine-tune Claude. <a href="https://completeaitraining.com/news/reddit-sues-anthropic-for-1b-alleging-claude-was-trained-on/">Reddit alleged Anthropic trained on Reddit data starting around December 2021 through October 2024</a>, scraping content without a license.',
    'The complaint accused Anthropic of being the AI industry\'s self-styled <a href="https://www.aol.com/reddit-sues-anthropic-235422268.html">"white knight," saying its claims of respecting content owners and personal data were "empty marketing gimmicks"</a>. It stated Anthropic <a href="https://rooney.law/blog/reddit-v-anthropic-a-flashpoint-in-the-fight-over-ai-training-data/">"suffers from corporate cognitive dissonance&mdash;its actions do not mirror its claimed values," describing "the two faces of Anthropic: the public face that attempts to ingratiate itself into the consumer\'s consciousness with claims of righteousness... and the private face that ignores any rules that interfere with its attempts to further line its pockets"</a>. Reddit framed this against its paid licensing deals with competitors: <a href="https://technologymagazine.com/articles/why-reddit-sues-anthropic-the-dangers-of-ai-data-privacy">a roughly $60 million deal with Google and an OpenAI deal estimated around $70 million</a>, which included user protections like content-deletion rights and privacy safeguards that Anthropic allegedly bypassed by refusing to enter an agreement.',
    'Reddit Chief Legal Officer Ben Lee said, "AI companies should not be allowed to scrape information and content from people without clear limitations on how they can use that data." Anthropic responded with a statement: "We disagree with Reddit\'s claims and will defend ourselves vigorously." The company <a href="https://www.courtlistener.com/docket/70704683/reddit-inc-v-anthropic-pbc/">removed the suit to federal court</a> in the Northern District of California, case 3:25-cv-05643, arguing the claims were copyright claims subject to federal exclusive jurisdiction and Copyright Act preemption. On March 30, 2026, U.S. District Judge Trina L. Thompson <a href="https://www.crowell.com/en/insights/client-alerts/northern-district-of-california-court-holds-state-tort-and-contract-claims-not-preempted-by-federal-copyright-act-remands-reddit-v-anthropic-to-state-court">remanded the case back to California state court</a>, holding that none of Reddit\'s causes of action asserted rights equivalent to those protected by the Copyright Act and were therefore not preempted.',
    'Several outlets reported a <a href="https://completeaitraining.com/news/reddit-sues-anthropic-for-1b-alleging-claude-was-trained-on/">"$1 billion" damages framing</a>, but the complaint itself sought an injunction plus damages, profits, and restitution rather than a single fixed pleaded sum, making the amount reported rather than precisely pleaded.',
  ],
  receipts: [
    "Filed June 4, 2025, in San Francisco Superior Court as case CGC-25-625892.",
    "Five state-law claims pleaded; copyright infringement intentionally absent.",
    ">100,000 bot accesses logged after Anthropic said crawling had stopped.",
    "2021 paper co-authored by Dario Amodei named r/AskHistorians and r/changemyview as training targets.",
    "Reddit had a ~$60M Google deal and a ~$70M OpenAI deal, both with user protections.",
    "Federal removal failed; remanded to state court March 30, 2026.",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "minimaxir",
      meta: "HN thread on the WSJ story",
      quote:
        "Extremely relevant context: Reddit has struck lucrative licensing deals with AI platforms including OpenAI and Google.",
      url: "https://news.ycombinator.com/item?id=44183483",
    },
    {
      platform: "hackernews",
      author: "linotype",
      meta: "HN thread comment",
      quote:
        "I no longer use Reddit, but I definitely didn't expect my content (comments/posts) to be sold as training data when I signed up over a decade ago.",
      url: "https://news.ycombinator.com/item?id=44183483",
    },
    {
      platform: "hackernews",
      author: "xhkkffbf",
      meta: "HN comment on the hypocrisy angle",
      quote: 'What\'s that line from "Animal House"? "Only we can do that to our pledges."',
      url: "https://news.ycombinator.com/item?id=44183483",
    },
    {
      platform: "hackernews",
      author: "absurdo",
      meta: "HN thread comment",
      quote:
        "As satisfying as it may be to pile on Reddit for this, I'll wait for an IP lawyer's take. I'd like to know if Reddit actually has solid ground or if it's just puffery and Google et al have already done this via crawling/indexing algorithms.",
      url: "https://news.ycombinator.com/item?id=44183483",
    },
  ],
  images: [],
  aftermath:
    "As of mid-2026, the dispute remains active in California state court after U.S. District Judge Trina L. Thompson rejected Anthropic's preemption defense and remanded the case, leaving the five state-law claims&mdash;including breach of contract and trespass to chattels&mdash;to proceed without federal copyright cover.",
};
