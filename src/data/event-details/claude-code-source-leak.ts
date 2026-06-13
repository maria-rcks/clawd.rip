import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-source-leak",
  deck: "Anthropic shipped a 59.8 MB source map that decompiled Claude Code into roughly half a million lines of TypeScript, then insisted no customer data was exposed, which is not the same as no damage done.",
  body: [
    'On March 30–31, 2026, Anthropic published <code>@anthropic-ai/claude-code</code> version 2.1.88 to the public npm registry with a 59.8 MB JavaScript source map bundled inside. The <code>.map</code> file mapped the minified production code back to roughly 512,000–513,000 lines of unobfuscated TypeScript across approximately 1,906 files, effectively shipping a readable blueprint of the application alongside the application itself. <a href="https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak">Zscaler</a> noted the scale of the exposure.',
    'Security researcher Chaofan Shou, posting as <a href="https://x.com/Fried_rice/status/2038894956459290963">@Fried_rice</a>, publicly disclosed the leak on X on March 31, 2026, writing that Claude code source had been leaked via a map file in their npm registry. The post amassed more than 28 million views. Within hours, the leaked codebase had been mirrored on GitHub in reconstructed repositories that surpassed 84,000 stars and 82,000 forks; <a href="https://cybernews.com/tech/claude-code-leak-spawns-fastest-github-repo/">Cybernews</a> described one as the fastest-growing repository in GitHub\'s history.',
    'Analysts picking through the roughly 512,000 lines found approximately 44 feature flags for unreleased functionality. These included KAIROS, a persistent autonomous background agent; BUDDY, a Tamagotchi-style terminal pet offered in 18 species variants; and ULTRAPLAN, a remote Opus 4.6 planning session lasting up to 30 minutes, alongside Voice Mode, Bridge Mode, and Multi-Agent Coordinator Mode. <a href="https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak">Analysts</a> also found an anti-distillation mode designed to inject fake tools to poison competitor model training and client attestation via cryptographic billing headers.',
    "Also present was a sentiment and frustration detector that relied on regex patterns matching strings such as <code>wtf|ffs|shit</code>, suggesting the coding assistant was prepared to gauge user irritation with lexical exactitude if not psychological nuance.",
    'The root cause was a multi-factor packaging error. <a href="https://github.com/oven-sh/bun/issues/28001">Bun issue #28001</a> tracks the bundler\'s behavior of generating source maps even when <code>development: false</code> is explicitly set. Anthropic compounded this by failing to exclude <code>*.map</code> in either <code>.npmignore</code> or the <code>files</code> field of <code>package.json</code>, and by running no CI check or manual review to catch a 59.8 MB cartographic artifact before publication. An AI coding tool built to manage repositories failed to audit its own.',
    'Anthropic’s official statement <a href="https://officechai.com/ai/claude-code-leak-was-human-error-no-one-was-fired-claude-code-creator-boris-cherny/">framed the incident</a> as "a release packaging issue caused by human error, not a security breach," adding that "no sensitive customer data or credentials were involved or exposed." The company then began issuing copyright takedown requests to suppress the mirrors, <a href="https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/">accidentally affecting roughly 8,100 repositories</a> before <a href="https://www.techradar.com/ai-platforms-assistants/claude/the-irony-is-rich-anthropic-issues-copyright-takedown-requests-in-attempt-to-stem-claude-code-leak">retracting the scope to one repository and 96 forks</a>. A firm that argues training AI on copyrighted material is fair use found its own intellectual property less eager to be freely distributed.',
  ],
  receipts: [
    "The leaked .map file weighed 59.8 MB and mapped back to roughly 512,000–513,000 lines of TypeScript across ~1,906 files.",
    "Disclosure post by @Fried_rice on March 31, 2026, amassed more than 28 million views.",
    "Reconstructed GitHub repositories surpassed 84,000 stars and 82,000 forks.",
    "The codebase exposed ~44 feature flags, including a Tamagotchi-style terminal pet with 18 species variants.",
    "An anti-distillation mode and a sentiment detector matching strings like <code>wtf|ffs|shit</code> were present in the leaked code.",
    "Bun issue #28001 documents the bundler generating source maps despite <code>development: false</code>.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Chaofan Shou (@Fried_rice)",
      meta: "Original disclosure post; 28M+ views",
      quote: "Claude code source code has been leaked via a map file in their npm registry!",
      url: "https://x.com/Fried_rice/status/2038894956459290963",
    },
    {
      platform: "x",
      author: "Alex Volkov (@altryne)",
      meta: "Reaction praising Boris Cherny's handling",
      quote:
        "Claude Code creator Boris Cherny does exactly what a company should be doing, calm, open replies about today's leak. Confirming that this wasn't an issue with @bunjavascript and was a ... developer error. Not AI agent, developer.",
      url: "https://x.com/altryne/status/2039169550122692608",
    },
    {
      platform: "hackernews",
      author: "treexs",
      meta: "Top comment on the main leak thread (2,095 points)",
      quote:
        "The big loss for Anthropic here is how it reveals their product roadmap via feature flags. A big one is their unreleased 'assistant mode' with code name kairos.",
      url: "https://news.ycombinator.com/item?id=47584540",
    },
    {
      platform: "hackernews",
      author: "mdavid626",
      meta: "Comment on the 'Claude Code Unpacked' thread (1,128 points)",
      quote: "How the hell is it 500k lines?",
      url: "https://news.ycombinator.com/item?id=47597085",
    },
    {
      platform: "hackernews",
      author: "jruohonen",
      meta: "Comment on the 'Claude Code Unpacked' visual guide thread",
      quote:
        "Thanks, I'll use this for teaching next week (on what not to do). BashTool.ts :D But, in general, I guess it just shows yet again that the emperor has no clothes.",
      url: "https://news.ycombinator.com/item?id=47597085",
    },
    {
      platform: "hackernews",
      author: "AnimalMuppet",
      meta: "In the 'undercover mode' / fake tools thread (1,376 points), on the feature that hides AI authorship",
      quote: "I don't do business with people who lie to me.",
      url: "https://news.ycombinator.com/item?id=47586778",
    },
  ],
  images: [],
  aftermath:
    "As of early April 2026, Anthropic maintains that no sensitive customer data or credentials were exposed, which addresses the narrowest version of the question. The mirrors, however, had already accumulated 84,000 stars and 82,000 forks, and the company's subsequent copyright takedown campaign—however brief—suggested that its commitment to freely available code lasts only until the code is its own. The bundler behavior that helped generate the leak is still documented in Bun issue #28001 for any publisher who wishes not to repeat the mistake.",
};
