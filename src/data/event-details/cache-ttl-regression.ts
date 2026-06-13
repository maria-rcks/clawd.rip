import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "cache-ttl-regression",
  deck: "For 33 consecutive days in February and early March 2026, Claude Code maintained a one-hour prompt cache, then silently regressed to five minutes, and a dataset of 119,866 API calls later showed combined overpayments totaling $949.08 on claude-sonnet-4-6 and $1,581.80 on claude-opus-4-6 before Anthropic responded on GitHub.",
  body: [
    'Between February 1 and March 5, 2026, Claude Code maintained a one-hour prompt cache TTL for 33 consecutive days, after which the window silently collapsed to five minutes. GitHub user @seanGSISG documented the regression across 119,866 API calls drawn from a Linux workstation and a Windows laptop in issue <a href="https://github.com/anthropics/claude-code/issues/46829">#46829</a>, identifying four distinct phases: an initial January period with only five-minute caching, the February stability window, a brief March 6 transition, and a final stretch through April 11 in which five-minute tokens accounted for 83 percent of cache creation by March 8.',
    "The billing impact was direct. Approximately 220 million tokens were written to the five-minute tier over three months, generating 5.7 billion cache reads; because cache writes cost 12.5 times more than reads for Sonnet, any pause longer than five minutes forced an expensive recreation rather than a cheap retrieval. The combined dataset showed overpayments of <strong>$949.08</strong> on claude-sonnet-4-6 and <strong>$1,581.80</strong> on claude-opus-4-6, reflecting a 17.1 percent waste rate in both cases, with Sonnet monthly waste spiking from 1.1 percent in February to 25.9 percent in March and 14.8 percent in April.",
    'Users had no way to detect the shift from their own code. The request body itself was unchanged: <code>cache_control</code> type <code>ephemeral</code> had previously yielded one hour and now yielded five minutes, while restoring the original TTL required explicitly adding <code>ttl 3600</code> or setting <code>ENABLE_PROMPT_CACHING_1H=1</code> on API keys. <a href="https://dev.to/recca0120/verify-whether-your-claude-code-uses-5m-or-1h-cache-ttl-with-60-lines-of-python-4548">One analysis</a> noted that although Claude subscriptions request the one-hour window automatically, the system drops to five minutes once a subscriber exceeds plan limits and begins drawing on usage credits, a timing that lined up with when affected users first reported hitting quotas.',
    'Anthropic did not comment on GitHub until <a href="https://www.xda-developers.com/anthropic-quietly-nerfed-claude-code-hour-cache-token-budget/">April 12</a>, roughly ten days after the change began rolling out to users on April 2 and 3. By then one Reddit user documented daily Claude Code costs climbing from $6.28 to $15.54, a trajectory that would add $277.80 per month, while daily cache busts rose from 39 to 199, an increase of roughly fivefold.',
    "The issue was labeled <code>bug</code> and <code>has repro</code> but was ultimately <a href=\"https://github.com/anthropics/claude-code/issues/46829\">Closed as not planned</a>. A second audit by recca0120 then scanned 95 days of native session logs and found a separate regression beginning April 9, in which sub-agents were locked to 100 percent five-minute TTL for five consecutive days across 4,840 API calls while main agents stayed at one hour. Anthropic engineer Jarred Sumner defended that configuration, stating that <em>'sub-agent 5m is cheaper for one-shot calls'</em> and that <em>'a meaningful share of Claude Code's requests are one-shot calls where the cached context is used once.'</em> Claude Code creator Boris Cherny, meanwhile, posted a pinned reply in a related issue confirming a one-hour window for the main agent but avoided clarifying whether that guarantee applied to all subscribers.",
    'A separate project, <a href="https://github.com/cnighswonger/claude-code-cache-fix">claude-code-cache-fix</a>, reported sessions burning $5 to $10 per hour on resume instead of the expected $0.50, and measured a 95.5 percent cache hit rate on the first warm turn versus 82.3 percent direct. Without such interventions, a sample 10,000-token system prompt at 100 calls per hour was estimated to cost roughly $15 per month under the one-hour TTL but about $1,500 per month under the five-minute TTL, a 100-fold increase that arrived without a changelog.',
  ],
  receipts: [
    "$949.08 in documented overpayments on claude-sonnet-4-6 and $1,581.80 on claude-opus-4-6.",
    "119,866 API calls across two independent machines were used to prove the regression.",
    "25.9 percent Sonnet waste in March 2026, up from 1.1 percent in February.",
    "Jarred Sumner defended the five-minute sub-agent TTL as cheaper for one-shot calls.",
    "Daily cache busts for one user jumped from 39 to 199, roughly a 5x increase.",
    "Issue #46829 was Closed as not planned after labels including bug, has repro, and area:cost.",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "sscaryterry",
      meta: "HN thread 'Anthropic downgraded cache TTL on March 6th' (552 points, 420 comments)",
      quote:
        "Anthropic is leaving so much evidence around… proving damages and a pattern is becoming trivial",
      url: "https://news.ycombinator.com/item?id=47736476",
    },
    {
      platform: "hackernews",
      author: "cassianoleal",
      meta: "HN thread re: the issue title's 5M/5m notation",
      quote:
        "The SI symbol for minutes is 'min', not 'M'. A compromise would be to use the OP notation 'm'.",
      url: "https://news.ycombinator.com/item?id=47736476",
    },
    {
      platform: "github",
      author: "EGreg",
      meta: "Comment in the related Pro/Max quota-exhaustion issue #45756",
      quote: "Boris, is the KV cache TTL now reduced to 5 minutes from 1 hour?",
      url: "https://github.com/anthropics/claude-code/issues/45756",
    },
    {
      platform: "github",
      author: "Jarred Sumner (Anthropic)",
      meta: "Anthropic engineer's defense of the sub-agent five-minute TTL",
      quote: "sub-agent 5m is cheaper for one-shot calls",
      url: "https://github.com/anthropics/claude-code/issues/46829",
    },
  ],
  images: [],
  aftermath:
    'The repository left <a href="https://github.com/anthropics/claude-code/issues/46829">issue #46829</a> Closed as not planned, Anthropic engineer Jarred Sumner\'s defense of the five-minute sub-agent TTL remains the nearest thing to an official explanation, and no public commitment was made to notify users when quota exhaustion triggers the downgraded cache lifetime.',
};
