import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "resume-crash-rollback",
  deck: "On April 25, 2026, Anthropic rolled back <code>Claude Code v2.1.120</code> after a JavaScript runtime error—<code>g9H is not a function</code>—crashed every session resumed via <code>--resume</code> or <code>--continue</code>, a bug that survived because fresh sessions started with empty messages and therefore never triggered the unconditional callback.",
  body: [
    "At 01:45 UTC, Anthropic's status page logged an incident titled <a href=\"https://status.claude.com/incidents/zqsk02ryfmrd\">'Claude Code v2.1.120 Crashes on Startup'</a>. The update had introduced a REPL bug: a <code>useEffect</code> called <code>onSessionRestored</code> unconditionally whenever resumed sessions contained messages, but the hook supplying that callback, <code>FXK</code>, was hardcoded to <code>disabled</code> via <code>useMemo(() => false, [])</code> and simply omitted the function. New users saw nothing; only those returning to past work hit the crash.",
    'The error manifested as a minified JavaScript runtime exception: <code>ERROR g9H is not a function. (In "g9H(K)", "g9H" is undefined)</code> at <code>/$bunfs/root/src/entrypoints/cli.js:9251:5663</code>. The mangled symbol varied by build—<code>g9H</code>, <code>FKH</code>, <code>g78</code>, <code>UKH</code>—but the failure was consistent across <a href="https://github.com/anthropics/claude-code/issues/53093">macOS arm64, Linux Ubuntu, Windows 11 native npm, and WSL</a>. A community member suggested optional chaining, <code>g9H?.(K)</code>, or having the disabled hook return a no-op.',
    'Users needing an immediate workaround could run <code>claude --new</code> followed by <code>/resume &lt;session-id&gt;</code> from inside the REPL, a two-step dance around the crash. The canonical bug report, <a href="https://github.com/anthropics/claude-code/issues/53041">issue #53041</a>, accumulated 14 comments and 19 reactions; three related issues (#53086 for the workaround, #53093 for Windows, #53568 for the fix suggestion) were all closed as duplicates.',
    "Anthropic resolved the incident by activating the auto-update mechanism at 02:35 UTC to roll clients back to <code>v2.1.119</code>, with manual fallback via <code>claude install 2.1.119</code>. The rollback was not universally smooth: some Windows users reported that <code>v2.1.120</code> had been force-installed by the in-binary auto-updater despite never reaching public channels—npm <code>latest</code> remained <code>2.1.118</code> and GitHub Releases showed <code>2.1.119</code>—and that documented disable flags <code>DISABLE_AUTOUPDATER=1</code> and <code>DISABLE_UPDATES=1</code> were ignored.",
    "A <a href=\"https://gist.github.com/yurukusa/a866b4cd2976486156a00c190c39cef6\">community 'Survival Checklist' gist</a> noted that <code>v2.1.119</code> and <code>v2.1.120</code> shipped within 24 hours on April 24, 2026, carrying eight regressions total: the broken auto-updater, a silent model swap routing <code>claude-opus-4-7</code> to a 1M-context variant, a UI-duplication bug, a WSL2 freeze, and two separate resume-time crashes. The gist recommended rollback to <code>v2.1.117</code>. A related macOS-specific issue, <a href=\"https://github.com/anthropics/claude-code/issues/53085\">#53085</a>, also surfaced: resumed sessions failed with 'sandbox required but unavailable' even when <code>sandbox.enabled</code> was set to false, a failure mode absent in <code>v2.1.119</code>.",
    "The fix arrived three days later in <code><a href=\"https://www.claudeupdates.dev/version/2.1.121\">Claude Code v2.1.121</a></code>, released April 28, 2026, as part of a 39-change 'stability pass' where approximately 46% of changes were bug fixes. The release notes listed 'Fixed --resume crashing on startup in external builds' alongside three multi-GB memory-leak fixes.",
  ],
  receipts: [
    "The status update was posted at 01:45 UTC on April 25, 2026; rollback completed at 02:35 UTC via auto-update to v2.1.119.",
    "The minified error symbol varied by build: g9H, FKH, g78, UKH.",
    "Issue #53041 drew 14 comments and 19 reactions; three related issues were closed as duplicates.",
    "The Survival Checklist gist documented eight regressions shipped within 24 hours across v2.1.119 and v2.1.120.",
    "v2.1.121, released April 28, 2026, contained 39 changes with ~46% being bug fixes.",
  ],
  reactions: [
    {
      platform: "github",
      author: "wolffiex",
      meta: "Claude Code maintainer / issue assignee, Apr 25, 2026 01:27 UTC",
      quote: "Sorry about this!!! Please roll back to 2.1.119. We are moving our pointer back.",
      url: "https://github.com/anthropics/claude-code/issues/53041",
    },
    {
      platform: "github",
      author: "wolffiex",
      meta: "Claude Code maintainer, Apr 25, 2026 03:17 UTC",
      quote:
        "Autoupdater should have done its thing by now. Please let us know if you are still having problems",
      url: "https://github.com/anthropics/claude-code/issues/53041",
    },
    {
      platform: "github",
      author: "Jolley71717",
      meta: "Original reporter of #53041; issue drew 19 reactions, 14 comments",
      quote:
        'Print mode (claude -p --resume <id> "…") works fine against the same session file, so the session data is healthy — the bug is purely in the interactive REPL mount path.',
      url: "https://github.com/anthropics/claude-code/issues/53041",
    },
    {
      platform: "github",
      author: "ron1236",
      meta: "Windows native-installer report, closed as duplicate",
      quote:
        "The crash fires before the session UI loads. It happens for every session that has prior messages — the session name and project don't matter.",
      url: "https://github.com/anthropics/claude-code/issues/53093",
    },
    {
      platform: "github",
      author: "andromeda-vinicius",
      meta: "Windows 11 (Git Bash) report filed 2026-04-26, closed as duplicate",
      quote: "claude --resume crashes with FKH is not a function in 2.1.120",
      url: "https://github.com/anthropics/claude-code/issues/53568",
    },
  ],
  images: [
    {
      src: "/events/resume-crash-rollback/issue-53041.png",
      alt: "GitHub issue card for claude-code #53041 about the 2.1.120 resume crash",
      caption:
        "GitHub's auto-generated social card for issue #53041, the canonical bug report for the v2.1.120 resume crash, showing its title, Closed status, and reaction and comment counts. Credit: GitHub.",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/53041",
      width: 1200,
      height: 600,
    },
    {
      src: "/events/resume-crash-rollback/issue-53093.png",
      alt: "GitHub issue card for the Windows variant of the 2.1.120 resume crash",
      caption:
        "GitHub's social card for issue #53093, the Windows native-installer report of the v2.1.120 resume crash ('FKH is not a function'), later closed as a duplicate of #53041. Credit: GitHub.",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/53093",
      width: 1200,
      height: 600,
    },
  ],
  aftermath:
    "Claude Code users on v2.1.121 and later can resume sessions without encountering undefined minified callbacks, though the 24-hour window that produced eight regressions across two consecutive versions remains a case study in how automated release velocity can outpace the REPL's own ability to handle a returned user.",
};
