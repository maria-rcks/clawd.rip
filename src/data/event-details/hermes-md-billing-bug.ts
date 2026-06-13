import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "hermes-md-billing-bug",
  deck: "Claude Code interpreted the exact-case string HERMES.md in a repository's git history as evidence of a forbidden competing harness and silently rerouted a Max 20x customer's requests to extra usage billing, burning $200.98 while roughly 86 percent of his weekly quota remained untouched.",
  body: [
    'On April 25, 2026, user sasha-id opened <a href="https://github.com/anthropics/claude-code/issues/53262">GitHub issue #53262</a>, reporting that Claude Code had begun billing him for extra usage instead of drawing from his included plan quota. The culprit was the case-sensitive string <code>HERMES.md</code> appearing in the repository\'s recent git commit history, not a file sitting on disk; because Claude Code includes recent commits in its system prompt, the mere record that someone had once typed <code>HERMES.md</code> was enough to change how Anthropic priced the session. <code>HERMES.md</code> is a legitimate context-file convention used by Hermes, an open-source self-improving agent from Nous Research.',
    "The reporter was on a Max 20x plan that costs $200 per month, yet he burned through $200.98 in extra usage credits while roughly 86 percent of his weekly plan capacity remained untouched, having consumed only 13 percent. Once the extra usage pool ran dry, his projects simply stopped working, even though the bulk of his included quota was still sitting there. He isolated the cause by binary-searching git history, cloning repos, testing orphan branches, and isolating individual commit message strings until he found the magic word.",
    'The failure was surgical: commit messages containing <code>HERMES.md</code> or <code>test HERMES.md test</code> triggered the reroute, while <code>hermes.md</code> in lowercase, <code>HERMES</code> without an extension, <code>HERMES.txt</code>, <code>AGENTS.md</code>, and <code>README.md</code> all passed without incident. An orphan branch with no history, or a real file named <code>HERMES.md</code> accompanied by a clean commit message, also worked fine. The behavior reproduced on Claude Code v2.1.119 running on macOS Apple Silicon against models <code>claude-opus-4-6[1m]</code> and <code>claude-opus-4-7</code>. A parallel report, issue #53171 filed the same day by DUMPDUMPY on a Claude Max 5x OAuth plan under Linux, produced an API Error 400 reading, <em>"You\'re out of extra usage. Add more at claude.ai/settings/usage and keep going,"</em> from the exact same byte sequence hiding in git log.',
    'Anthropic support initially denied a refund, stating: <em>"we are unable to issue compensation for degraded service or technical errors that result in incorrect billing routing,"</em> while thanking the user that <em>"Your detailed reproduction steps will be valuable for our engineering team."</em> Claude Code collaborator Boris Cherny later commented, <em>"Thanks for the report! This was an overactive anti-abuse system. Fixed."</em> The reporter replied, <em>"You are welcome! Can I get my refund now."</em> The root cause was an anti-abuse and third-party-harness detection routine that pulled git status into Claude Code\'s system prompt, pattern-matched for strings tied to competing agents, and silently rerouted flat-rate-plan users to metered API billing without ever verifying that an external harness was actually attached.',
    'The same detection logic also fired on the string <code>OpenClaw</code>. Theo Brown demonstrated that an empty repository with a recent commit mentioning <code>OpenClaw</code> inside a JSON blob was enough to make Claude Code refuse requests or bill extra; his thread crossed roughly one million views before Anthropic responded publicly. The original Reddit PSA in r/ClaudeAI reportedly reached around 1.4 million views. When the issue hit the Hacker News front page on April 29, 2026, posted by user homebrewer, <a href="https://news.ycombinator.com/item?id=47952722">the submission</a> accumulated 1,251 points and 531 comments.',
  ],
  receipts: [
    "GitHub issue #53262 opened April 25, 2026 by sasha-id; labeled area:cost, bug, has repro, and platform:macos.",
    "A Max 20x user burned $200.98 in extra usage while roughly 86% of his weekly plan quota remained available.",
    "Trigger was case- and extension-specific: only commit messages containing the exact string HERMES.md failed, while hermes.md, HERMES.txt, AGENTS.md, and README.md passed.",
    "Anthropic support initially refused a refund, stating they were unable to compensate for technical errors that result in incorrect billing routing.",
    "Claude Code collaborator Boris Cherny acknowledged the issue as an overactive anti-abuse system and marked it fixed.",
    "The Hacker News post of issue #53262 reached 1,251 points and 531 comments on April 29, 2026.",
  ],
  reactions: [
    {
      platform: "github",
      author: "builder555",
      meta: "comment on issue #53262",
      quote:
        "So anthropic has a bug in their code that causes $200 extra charges, admits it, then refuses to refund or even give credit for that amount?? Anthropic decided to publicly ruin their reputation when competition is ramping up? Good luck with your IPO, I guess.",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "ggPeti",
      meta: "comment on issue #53262",
      quote:
        'You\'re not "unable". You\'re "unwilling". Stop lying, as the zeroeth step to decency.',
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "sircompo",
      meta: "comment on issue #53262",
      quote:
        'A skeptical observer might believe that the overactive anti-abuse bug was triggered by more than just the reported "HERMES.md" string, and has collectively cost Anthropics customers millions. The refusal to refund might be based on them not wanting to set an expensive precedent.',
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "coopzr",
      meta: "comment on issue #53262",
      quote: "Refunding him would be the easiest PR win in the world. Just sayin",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "computerex",
      meta: "comment on issue #53262",
      quote: "Anthropic speed running how to destroy goodwill with developers.",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "x",
      author: "Theo - t3.gg (@theo)",
      meta: "post on X, ~1M views per secondary reporting",
      quote:
        "Fun fact - if you have a recent commit that mentions OpenClaw in a json blob, Claude Code will either refuse your request or bill you extra money. This is an empty repo, I'm just calling Claude Code directly. Insanity.",
      url: "https://x.com/theo/status/2049645973350363168",
    },
  ],
  images: [
    {
      src: "/events/hermes-md-billing-bug/issue-53262-card.png",
      alt: "GitHub issue #53262 card: HERMES.md in git commit messages causes requests to route to extra usage billing",
      caption:
        'GitHub Open Graph card for issue #53262, opened by sasha-id on April 25, 2026, titled "HERMES.md in git commit messages causes requests to rou..." with 92 comments. Credit GitHub.',
      sourceUrl: "https://github.com/anthropics/claude-code/issues/53262",
      width: 1200,
      height: 600,
    },
  ],
  aftermath:
    "After the story reached Hacker News, Anthropic collaborator ThariqS posted that the company was reaching out to affected users to offer refunds plus another month of credits, which in the reporter's case meant another $200, and that users should expect an email soon if they had been affected. The issue eventually accumulated 92 comments before it was closed.",
};
