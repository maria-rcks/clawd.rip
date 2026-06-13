import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "openai-booted-from-claude",
  deck: "Anthropic revoked OpenAI's Claude API access on August 1, 2025, days before GPT-5 launched, for the crime of benchmarking while competitor.",
  body: [
    'On Tuesday, August 1, 2025, <a href="https://winbuzzer.com/2025/08/02/anthropic-revokes-openais-api-access-to-claude-alleging-violation-ahead-of-gpt-5-launch-xcxwbn/">Anthropic pulled OpenAI\'s API access to Claude</a>, alleging that OpenAI\'s technical staff had been using the models to help develop and benchmark GPT-5. The story broke the following day, August 2, 2025, putting it squarely in the pre-launch window for GPT-5, which would release on August 7. Anthropic spokesperson Christopher Nulty told <em>WIRED</em>: <a href="https://www.newsbytesapp.com/news/science/anthropic-revokes-openai-s-access-to-claude-api-over-terms-violation/story">"Claude Code has become the go-to choice for coders everywhere, and so it was no surprise to learn OpenAI\'s own technical staff were also using our coding tools ahead of the launch of the latest version of ChatGPT in GPT-5. Unfortunately, this is a direct violation of our terms of service."</a>',
    'OpenAI was not simply chatting with Claude through the consumer interface. <a href="https://www.notebookcheck.net/Anthropic-cuts-OpenAI-s-Claude-API-access-over-alleged-terms-of-service-breach.1078560.0.html">Via "special developer access," OpenAI had connected Claude to its own internal tools</a>, running comparative tests across coding, creative writing, and safety categories. The testing reportedly included sensitive safety scenarios: self-harm and defamation. Anthropic\'s commercial terms explicitly prohibit using the service to <a href="https://winbuzzer.com/2025/08/02/anthropic-revokes-openais-api-access-to-claude-alleging-violation-ahead-of-gpt-5-launch-xcxwbn/">"build a competing product or service, including to train competing AI models"</a> or to "reverse engineer or duplicate" the services.',
    'OpenAI Chief Communications Officer Hannah Wong begged to differ, <a href="https://americanbazaaronline.com/2025/08/04/anthropic-restricts-openais-access-to-claude-models-465835/">calling the activity "industry standard to evaluate other AI systems to benchmark progress and improve safety."</a> An OpenAI spokesperson added the wounded dinner-party note: <a href="https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/">"While we respect Anthropic\'s decision to cut off our API access, it\'s disappointing considering our API remains available to them."</a> Anthropic, meanwhile, said it would still provide OpenAI continued access <a href="https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/">"for the purposes of benchmarking and safety evaluations as is standard practice across the industry,"</a> per Nulty. Which purposes exactly qualified remained unclear.',
    'The move had precedent. Anthropic co-founder and Chief Science Officer Jared Kaplan had cut Windsurf\'s Claude access in June 2025 amid OpenAI acquisition rumors, explaining: <a href="https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai">"I think it would be odd for us to be selling Claude to OpenAI."</a> The same logic apparently extended to renting it. <a href="https://news.ycombinator.com/item?id=44762856">Observers on Hacker News</a> noted that OpenAI\'s own Services Agreement carries a near-identical clause, barring customers from using output "to develop artificial intelligence models that compete with OpenAI\'s products and services." Standard practice, it seems, is a territorial creature.',
  ],
  receipts: [
    "Revocation date: August 1, 2025; story broke August 2; GPT-5 launched August 7, 2025",
    "OpenAI tested Claude via API across coding, creative writing, and safety categories including self-harm and defamation scenarios",
    'Christopher Nulty (Anthropic): "Unfortunately, this is a direct violation of our terms of service"',
    'Hannah Wong (OpenAI): "industry standard to evaluate other AI systems to benchmark progress and improve safety"',
    'OpenAI spokesperson: "it\'s disappointing considering our API remains available to them"',
    "Hacker News discussion reached 294 points and 124 comments",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "modeless",
      meta: "HN comment on 'Anthropic revokes OpenAI's access to Claude' (294 points, 124 comments)",
      quote:
        'OpenAI Services Agreement: "Customer will not [...] use Output to develop artificial intelligence models that compete with OpenAI\'s products and services" Live by the sword, die by the sword.',
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "chowells",
      meta: "HN comment reacting to the 'build a competing product' TOS clause",
      quote:
        "That's... quite a license term. I'm a big fan of tools that come with no restrictions on their use in their licenses. I think I'll stick with them.",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "v5v3",
      meta: "Hacker News comment",
      quote:
        "This is, ultimately, a great PR move by Anthropic. 'We are so good Open Ai uses us over their own' They know full well OpenAI can just sign up again, but not under an official OpenAi account.",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "bitwize",
      meta: "HN comment providing historical precedent",
      quote:
        "For years it was a license violation to use Microsoft development tools to build a word processor or spreadsheet. It was also a violation of your Oracle license to publish benchmark results comparing Oracle to other databases. If you compete with a vendor... do not expect the vendor to play nice with you, or even keep you on as a customer.",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "beefnugs",
      meta: "Hacker News comment",
      quote:
        "Dumbest thing they could do, why would you cut off insight into what your competitors are doing?",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
  ],
  images: [],
  aftermath:
    "As of the August 2025 coverage, both companies continued operating their own APIs under near-identical competitive-use clauses, each reserving the right to decide what counts as legitimate benchmarking. OpenAI noted that its API remained available to Anthropic, and Anthropic said it would keep providing OpenAI access for benchmarking and safety evaluations, so the bouncer kept the door propped open with one foot.",
};
