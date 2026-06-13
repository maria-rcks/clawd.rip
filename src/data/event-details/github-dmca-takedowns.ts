import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "github-dmca-takedowns",
  deck: "Anthropic tried to un-leak its own source code with a DMCA notice that disabled roughly 8,100 GitHub repositories, most of which did not contain the leak.",
  body: [
    'On March 31, 2026, Anthropic published version 2.1.88 of the Claude Code npm package with an unminified source map — a roughly 59.8 MB JavaScript file that exposed approximately 512,000 lines of TypeScript source across about 1,900 files — effectively shipping the closed-source tool\'s internals to anyone who ran <code>npm install</code>. Security researcher <a href="https://decrypt.co/362917/anthropic-accidentally-leaked-claude-code-source-internet-keeping-forever">Chaofan Shou</a> noticed and publicized the leak, after which Anthropic characterized the incident as <a href="https://www.techradar.com/ai-platforms-assistants/claude/the-irony-is-rich-anthropic-issues-copyright-takedown-requests-in-attempt-to-stem-claude-code-leak">"a release packaging issue caused by human error, not a security breach"</a> and confirmed that no customer data was exposed, though the same could not be said for its codebase.',
    "The company's response was to file a DMCA takedown notice with GitHub that same day, targeting a repository that was part of a fork network connected to Anthropic's own public Claude Code repo; GitHub processed the notice network-wide, disabling access to <a href=\"https://www.prismnews.com/hobbies/retro-game-emulation/anthropics-overbroad-dmca-takedown-briefly-nuked-8100\">approximately 8,100 repositories</a>. Among the disabled were legitimate forks of Anthropic's publicly released repository that contained no leaked source code whatsoever — only edited skills, examples, or documentation — suggesting the remedy was somewhat broader than the disease.",
    'By one accounting, the campaign generated roughly 8,150 total takedowns, of which only about 150 were valid repositories hosting leaked source while the remaining roughly 8,100 were invalid; though access was <a href="https://www.prismnews.com/hobbies/retro-game-emulation/anthropics-overbroad-dmca-takedown-briefly-nuked-8100">restored within about 24 hours</a>, the action disrupted CI pipelines, broke distribution links, and froze developer access across the network.',
    'On April 1, 2026, Anthropic filed a <a href="https://github.com/github/dmca/blob/master/2026/04/2026-04-01-anthropic-retraction.md">partial retraction</a>, withdrawing the notice as to all repositories except one named repo — <code>github.com/nirholas/claude-code</code> — and 96 fork URLs individually listed in the original filing. Boris Cherny, Anthropic\'s head of Claude Code, <a href="https://piunikaweb.com/2026/04/01/anthropic-dmca-claude-code-leak-github/">acknowledged the overreach was accidental</a>, stating "This was not intentional, we\'ve been working with GitHub to fix it," and explained that "Our deploy process has a few manual steps, and we didn\'t do one of the steps correctly," a description that could apply equally to the leak and to the subsequent legal paperwork.',
    'Tech newsletter author <a href="https://piunikaweb.com/2026/04/01/anthropic-dmca-claude-code-leak-github/">Gergely Orosz called the episode "DMCA abuse,"</a> noting it is "neither OK, nor legal to file a DMCA takedown for something that breaks no copyright." Commentators also observed the timing was awkward: Anthropic was enforcing copyright over its own code roughly a year after <a href="https://www.techradar.com/ai-platforms-assistants/claude/the-irony-is-rich-anthropic-issues-copyright-takedown-requests-in-attempt-to-stem-claude-code-leak">agreeing to pay $1.5 billion to settle claims from authors whose books had been pirated to train Claude</a>, a juxtaposition that cost the company nothing extra but generated significant optical overhead.',
    'The takedown also failed to contain the leak. Developers rapidly produced clean-room rewrites in other languages, including a Python rewrite called <code>claw-code</code> by Korean developer Sigrid Jin that drew tens of thousands of stars within hours; <a href="https://ipkitten.blogspot.com/2026/04/the-claude-code-leak-that-spurred-8100.html">legal observers argued</a> such a project falls outside DMCA reach as a new creative work. The <a href="https://ipkitten.blogspot.com/2026/04/the-claude-code-leak-that-spurred-8100.html">IPKat legal blog</a> noted that 2,661 DMCA notices in 2025 had already impacted 47,288 repositories, and questioned whether copyright law is suited to AI-generated code disputes at all, a question Anthropic appears to have answered in the affirmative only for its own property.',
  ],
  receipts: [
    "The source map was roughly 59.8 MB and exposed approximately 512,000 lines of TypeScript across about 1,900 files.",
    "The takedown disabled approximately 8,100 repositories; only about 150 were valid targets.",
    "Anthropic's partial retraction spared exactly one named repo and 96 individually listed forks.",
    'Gergely Orosz stated it is "neither OK, nor legal to file a DMCA takedown for something that breaks no copyright."',
    "Clean-room rewrites including Sigrid Jin's Python claw-code drew tens of thousands of GitHub stars within hours.",
    "Anthropic had recently agreed to pay $1.5 billion to settle author claims over books pirated to train Claude.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Theo - t3.gg (@theo)",
      meta: "X post; reported as his first-ever GitHub copyright strike",
      quote:
        "Anthropic DMCA'd my Claude code fork. …which did not have the Claude Code source. It was only for a PR where I edited a skill a few weeks ago. Absolutely pathetic.",
      url: "https://x.com/theo/status/2039411851919057339",
    },
    {
      platform: "x",
      author: "Gergely Orosz (@GergelyOrosz)",
      meta: "X post",
      quote:
        "This is either brilliant or scary: Anthropic accidentally leaked the TS source code of Claude Code (which is closed source). Repos sharing the source are taken down with DMCA. BUT this repo rewrote the code using Python, and so it violates no copyright & cannot be taken down!",
      url: "https://x.com/GergelyOrosz/status/2038985760175505491",
    },
    {
      platform: "x",
      author: "Chaofan Shou (@Fried_rice)",
      meta: "Original leak-disclosure post; reportedly ~16M views",
      quote: "Claude code source code has been leaked via a map file in their npm registry!",
      url: "https://twitter.com/Fried_rice/status/2038894956459290963",
    },
    {
      platform: "hackernews",
      author: "cg505",
      meta: "Submitter of the HN thread on the Claude Code fork takedowns, item 47594936",
      quote:
        "I got a DMCA notice for my fork which I have not touched since May. Obviously, it didn't include the leaked source code.",
      url: "https://news.ycombinator.com/item?id=47594936",
    },
    {
      platform: "hackernews",
      author: "sva_",
      meta: "HN comment on item 47594936",
      quote: "Copyright for me but not for thee",
      url: "https://news.ycombinator.com/item?id=47594936",
    },
    {
      platform: "hackernews",
      author: "verdverm",
      meta: "HN comment on item 47594936",
      quote:
        "Too late, people already have it locally, it will show up on other source forges if GitHub bends to their will.",
      url: "https://news.ycombinator.com/item?id=47594936",
    },
  ],
  images: [],
  aftermath:
    'Anthropic later stated that <a href="https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/">GitHub has restored access to the affected forks</a>, but the incident arrived while the company was reportedly preparing for an IPO, raising compliance and shareholder-litigation concerns that manual deploy steps and accidental legal carpet-bombing do not typically allay. The source code, meanwhile, remains available in various forms, including a 59.8 MB JavaScript file that continues to float through the internet.',
};
