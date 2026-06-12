export type TimelineSource = {
  title: string;
  url: string;
  icon: string;
};

export type TimelineEvent = {
  date: string;
  period: string;
  title: string;
  summary: string;
  sources: TimelineSource[];
  category: "Legal" | "Quality" | "Reliability" | "Safety" | "Policy";
};

const icons = {
  anthropic: "/source-icons/anthropic.svg",
  ap: "/source-icons/favicons/ap.avif",
  axios: "/source-icons/favicons/axios.ico",
  businessInsider: "/source-icons/favicons/businessInsider.png",
  classAction: "/source-icons/favicons/classAction.webp",
  codeRabbit: "/source-icons/favicons/codeRabbit.png",
  decrypt: "/source-icons/favicons/decrypt.png",
  economicTimes: "/source-icons/favicons/economicTimes.avif",
  forbes: "/source-icons/favicons/forbes.webp",
  fortune: "/source-icons/favicons/fortune.webp",
  ft: "/source-icons/favicons/ft.png",
  greptile: "/source-icons/favicons/greptile.webp",
  guardian: "/source-icons/favicons/guardian.ico",
  github: "/source-icons/favicons/github.ico",
  investing: "/source-icons/favicons/investing.webp",
  justia: "/source-icons/favicons/justia.ico",
  lexFridman: "/source-icons/favicons/lexFridman.avif",
  ndtv: "/source-icons/favicons/ndtv.webp",
  oxSecurity: "/source-icons/favicons/oxSecurity.webp",
  reuters: "/source-icons/favicons/reuters.png",
  reddit: "/source-icons/reddit.svg",
  status: "/source-icons/status.svg",
  techCrunch: "/source-icons/favicons/techCrunch.avif",
  techRadar: "/source-icons/favicons/techRadar.png",
  theHackerNews: "/source-icons/favicons/theHackerNews.webp",
  theRegister: "/source-icons/favicons/theRegister.webp",
  theVerge: "/source-icons/favicons/theVerge.avif",

  tomsGuide: "/source-icons/favicons/tomsGuide.webp",
  tomsHardware: "/source-icons/favicons/tomsHardware.avif",
  ventureBeat: "/source-icons/favicons/ventureBeat.avif",
  wired: "/source-icons/favicons/wired.ico",
  x: "/source-icons/x.svg",
} as const;

const source = {
  anthropicAprilPostmortem: {
    title: "Anthropic",
    url: "https://www.anthropic.com/engineering/april-23-postmortem",
    icon: icons.anthropic,
  },
  anthropicAugustMisuse: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
    icon: icons.anthropic,
  },
  anthropicDeptWarStatement: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/statement-department-of-war",
    icon: icons.anthropic,
  },
  anthropicDeptWarUpdate: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/where-stand-department-war",
    icon: icons.anthropic,
  },
  anthropicDistillation: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks",
    icon: icons.anthropic,
  },
  anthropicEspionage: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/disrupting-AI-espionage",
    icon: icons.anthropic,
  },
  anthropicSeptemberPostmortem: {
    title: "Anthropic",
    url: "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
    icon: icons.anthropic,
  },
  anthropicStatus: {
    title: "Anthropic Status",
    url: "https://status.claude.com/",
    icon: icons.status,
  },
  anthropicStatusApr15: {
    title: "Anthropic Status",
    url: "https://status.claude.com/incidents/f00h6l76tsjs",
    icon: icons.status,
  },
  anthropicStatusApr25: {
    title: "Anthropic Status",
    url: "https://status.claude.com/incidents/zqsk02ryfmrd",
    icon: icons.status,
  },
  anthropicTransparency: {
    title: "Anthropic",
    url: "https://www.anthropic.com/transparency/system-trust-reporting",
    icon: icons.anthropic,
  },
  claudeDevsAgentSdkCreditThread: {
    title: "ClaudeDevs",
    url: "https://x.com/ClaudeDevs/status/2054610152817619388",
    icon: icons.x,
  },
  claudeHelpAgentSdkPlanCredit: {
    title: "Claude Help Center",
    url: "https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan",
    icon: icons.anthropic,
  },
  apFairUseRuling: {
    title: "AP",
    url: "https://apnews.com/article/anthropic-ai-fair-use-copyright-pirated-libraries-1e5cece51c2e4bd0bb21d94de2abb035",
    icon: icons.ap,
  },
  apNoKillSwitch: {
    title: "AP",
    url: "https://apnews.com/article/f9e693ea9954e6a8ac75750f1089f768",
    icon: icons.ap,
  },
  apRedditLawsuit: {
    title: "AP",
    url: "https://apnews.com/article/reddit-sues-ai-company-anthropic-claude-chatbot-f5ea042beb253a3f05a091e70531692d",
    icon: icons.ap,
  },
  apSettlement: {
    title: "AP",
    url: "https://apnews.com/article/9643064e847a5e88ef6ee8b620b3a44c",
    icon: icons.ap,
  },
  authorsGuildSettlement: {
    title: "Authors Guild",
    url: "https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/",
    icon: "/source-icons/favicons/authorsGuild.webp",
  },

  axiosNoKillSwitch: {
    title: "Axios",
    url: "https://www.axios.com/2026/04/22/anthropic-claude-pentagon-ai-kill-switch",
    icon: icons.axios,
  },
  axiosSourceLeak: {
    title: "Axios",
    url: "https://www.axios.com/2026/03/31/anthropic-leaked-source-code-ai",
    icon: icons.axios,
  },
  businessInsiderClaudeCode: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/anthropic-admits-claude-code-issues-user-complaints-denies-nerfing-degrading-2026-4",
    icon: icons.businessInsider,
  },
  businessInsiderCodeReview: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/anthropic-claude-code-review-token-costs-developers-backlash-engineers-2026-3",
    icon: icons.businessInsider,
  },
  businessInsiderClawdbotRename: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/clawdbot-changes-name-moltbot-anthropic-trademark-2026-1",
    icon: icons.businessInsider,
  },
  businessInsiderProPlan: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/anthropic-claude-code-price-confusion-sam-altman-2026-4",
    icon: icons.businessInsider,
  },
  codeRabbitPricing: {
    title: "CodeRabbit",
    url: "https://www.coderabbit.ai/pricing",
    icon: icons.codeRabbit,
  },
  classActionBartzComplaint: {
    title: "ClassAction.org",
    url: "https://www.classaction.org/media/bartz-et-al-v-anthropic-pbc_1.pdf",
    icon: icons.classAction,
  },
  decryptFableApology: {
    title: "Decrypt",
    url: "https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship",
    icon: icons.decrypt,
  },
  decryptFableBacklash: {
    title: "Decrypt",
    url: "https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5",
    icon: icons.decrypt,
  },
  economicTimesXai: {
    title: "Economic Times",
    url: "https://economictimes.indiatimes.com/tech/artificial-intelligence/xai-locked-out-of-claude-as-anthropic-enforces-competitor-rules/articleshow/126466343.cms",
    icon: icons.economicTimes,
  },
  fortuneClaudeCode: {
    title: "Fortune",
    url: "https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/",
    icon: icons.fortune,
  },
  fortuneFableSabotage: {
    title: "Fortune",
    url: "https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/",
    icon: icons.fortune,
  },
  ftClaudeBot: {
    title: "Financial Times",
    url: "https://www.ft.com/content/73efca36-87c3-4d66-b849-71d7f9b62597",
    icon: icons.ft,
  },
  guardianLyrics: {
    title: "The Guardian",
    url: "https://www.theguardian.com/technology/2023/oct/19/music-lawsuit-ai-song-lyrics-anthropic",
    icon: icons.guardian,
  },
  guardianSourceLeak: {
    title: "The Guardian",
    url: "https://www.theguardian.com/technology/2026/apr/01/anthropic-claudes-code-leaks-ai",
    icon: icons.guardian,
  },
  githubAmdRegression: {
    title: "GitHub",
    url: "https://github.com/anthropics/claude-code/issues/42796",
    icon: icons.github,
  },
  githubHermesBillingBug: {
    title: "GitHub",
    url: "https://github.com/anthropics/claude-code/issues/53262",
    icon: icons.github,
  },
  githubCacheTTLRegression: {
    title: "GitHub",
    url: "https://github.com/anthropics/claude-code/issues/46829",
    icon: icons.github,
  },
  greptilePricing: {
    title: "Greptile",
    url: "https://www.greptile.com/pricing",
    icon: icons.greptile,
  },
  investingCursorPoach: {
    title: "Investing.com",
    url: "https://www.investing.com/news/economy-news/anysphere-hires-anthropics-claude-code-leaders-amid-ai-talent-race--the-information-93CH-4119909",
    icon: icons.investing,
  },
  justiaLyricsDocket: {
    title: "Justia",
    url: "https://dockets.justia.com/docket/tennessee/tnmdce/3%3A2023cv01092/96652",
    icon: icons.justia,
  },
  lexOpenClawTranscript: {
    title: "Lex Fridman",
    url: "https://lexfridman.com/peter-steinberger-transcript/",
    icon: icons.lexFridman,
  },
  marketWatchDistillation: {
    title: "MarketWatch",
    url: "https://www.marketwatch.com/story/can-china-just-steal-americas-ai-brain-thats-costing-trillions-to-develop-da126634",
    icon: "/source-icons/favicons/marketwatch.webp",
  },
  interconnectsDistillation: {
    title: "Interconnects",
    url: "https://www.interconnects.ai/p/how-much-does-distillation-really",
    icon: "/source-icons/favicons/interconnects.webp",
  },
  interconnectsFableSafety: {
    title: "Interconnects",
    url: "https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety",
    icon: "/source-icons/favicons/interconnects.webp",
  },
  reutersHallucination: {
    title: "Reuters",
    url: "https://www.reuters.com/legal/legalindustry/anthropics-lawyers-take-blame-ai-hallucination-music-publishers-lawsuit-2025-05-15/",
    icon: icons.reuters,
  },
  reutersOpenClawOpenAI: {
    title: "Reuters",
    url: "https://www.reuters.com/business/openclaw-founder-steinberger-joins-openai-open-source-bot-becomes-foundation-2026-02-15/",
    icon: icons.reuters,
  },
  reutersReddit: {
    title: "Reuters",
    url: "https://www.reuters.com/business/reddit-sues-ai-startup-anthropic-allegedly-using-data-without-permission-2025-06-04/",
    icon: icons.reuters,
  },
  reutersSupplyChainStay: {
    title: "Reuters",
    url: "https://www.reuters.com/technology/anthropic-seeks-court-stay-pentagon-supply-chain-risk-designation-2026-03-12/",
    icon: icons.reuters,
  },
  redditAgentSdkClarify: {
    title: "Reddit",
    url: "https://www.reddit.com/r/ClaudeAI/comments/1qofa67/anthropic_please_clarify_acceptable_use_of_the/",
    icon: icons.reddit,
  },
  redditHermesBillingBug: {
    title: "Reddit",
    url: "https://www.reddit.com/r/ClaudeAI/comments/1svdm1w/psa_the_string_hermesmd_in_your_git_commit/",
    icon: icons.reddit,
  },
  anthropicCodeReview: {
    title: "Claude",
    url: "https://claude.com/blog/code-review",
    icon: icons.anthropic,
  },
  ndtvBelo: {
    title: "NDTV",
    url: "https://www.ndtv.com/feature/anthropics-claude-shut-down-firm-without-explanation-claims-cto-and-issues-warning-11380162",
    icon: icons.ndtv,
  },
  oxMcpFlaw: {
    title: "OX Security",
    url: "https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/",
    icon: icons.oxSecurity,
  },

  techCrunchDMCA: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/",
    icon: icons.techCrunch,
  },
  techCrunchDoDLawsuit: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/03/09/anthropic-sues-defense-department-over-supply-chain-risk-designation/",
    icon: icons.techCrunch,
  },
  techCrunchOpenAI: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/",
    icon: icons.techCrunch,
  },
  techCrunchOpenClawBan: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/",
    icon: icons.techCrunch,
  },
  techCrunchOpenClawPayExtra: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/",
    icon: icons.techCrunch,
  },
  techCrunchOutageSep: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/09/10/anthropic-reports-outages-claude-and-console-impacted/",
    icon: icons.techCrunch,
  },
  techCrunchRateLimits: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/",
    icon: icons.techCrunch,
  },
  techCrunchWindsurfAccess: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/",
    icon: icons.techCrunch,
  },
  techCrunchWindsurfKaplan: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/",
    icon: icons.techCrunch,
  },
  theVergeClaudeBot: {
    title: "The Verge",
    url: "https://www.theverge.com/2024/7/25/24205943/anthropic-ai-web-crawler-claudebot-ifixit-scraping-training-data",
    icon: icons.theVerge,
  },
  theVergeDistillation: {
    title: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/883243/anthropic-claude-deepseek-china-ai-distillation",
    icon: icons.theVerge,
  },
  theVergeOpenClaw: {
    title: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban",
    icon: icons.theVerge,
  },
  theVergeSourceLeak: {
    title: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/904776/anthropic-claude-source-code-leak",
    icon: icons.theVerge,
  },
  techRadarCodeReview: {
    title: "TechRadar",
    url: "https://www.techradar.com/pro/anthropic-launches-a-new-code-review-tool-to-check-ai-generated-content-but-it-might-cost-you-more-than-youd-hope",
    icon: icons.techRadar,
  },
  theHackerNewsMcp: {
    title: "The Hacker News",
    url: "https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html",
    icon: icons.theHackerNews,
  },
  theRegisterAmdRegression: {
    title: "The Register",
    url: "https://www.theregister.com/2026/04/06/anthropic_claude_code_dumber_lazier_amd_ai_director/",
    icon: icons.theRegister,
  },
  theRegisterMcp: {
    title: "The Register",
    url: "https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/",
    icon: icons.theRegister,
  },
  theRegisterProPlan: {
    title: "The Register",
    url: "https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/",
    icon: icons.theRegister,
  },
  tomsGuideMarchOutage: {
    title: "Tom's Guide",
    url: "https://www.tomsguide.com/ai/claude-crashes-under-unprecedented-demand-service-restored-as-surge-shows-explosive-growth",
    icon: icons.tomsGuide,
  },
  tomsHardwareBelo: {
    title: "Tom's Hardware",
    url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation",
    icon: icons.tomsHardware,
  },
  ventureBeatHarness: {
    title: "VentureBeat",
    url: "https://venturebeat.com/technology/anthropic-cracks-down-on-unauthorized-claude-usage-by-third-party-harnesses/",
    icon: icons.ventureBeat,
  },
  ventureBeatNerfing: {
    title: "VentureBeat",
    url: "https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance",
    icon: icons.ventureBeat,
  },
  wiredOpenAI: {
    title: "WIRED",
    url: "https://www.wired.com/story/anthropic-revokes-openais-access-to-claude/",
    icon: icons.wired,
  },
} satisfies Record<string, TimelineSource>;

export const timelineEvents: TimelineEvent[] = [
  {
    date: "2023-10-18",
    period: "Oct 18, 2023",
    title: "Music Giants Sue Anthropic Over Stolen Lyrics",
    summary:
      "Universal, Concord, and ABKCO claim Claude was trained on copyrighted lyrics and can spit out hundreds of songs on demand. The constitutional AI company met its first courtroom chorus.",
    sources: [source.guardianLyrics, source.justiaLyricsDocket],
    category: "Legal",
  },
  {
    date: "2024-07-25",
    period: "Jul 2024",
    title: "ClaudeBot DDoSes iFixit by Accident",
    summary:
      "ClaudeBot pummeled iFixit with roughly a million requests in a day while other sites cried foul over aggressive crawling. Anthropic insists it respects robots.txt, which only helps after the bandwidth is gone.",
    sources: [source.theVergeClaudeBot, source.ftClaudeBot],
    category: "Policy",
  },
  {
    date: "2024-08-20",
    period: "Aug 20, 2024",
    title: "Authors Say Claude Ate Their Books",
    summary:
      "Andrea Bartz, Charles Graeber, and Kirk Wallace Johnson accuse Anthropic of hoovering up pirated books and keeping a permanent copy for training. Every future 'responsible AI' slide now sits next to that allegation.",
    sources: [source.classActionBartzComplaint, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-05-15",
    period: "May 15, 2025",
    title: "Claude Cites Fake Case in Its Own Lawsuit",
    summary:
      "Anthropic's lawyers blamed Claude for inventing a citation in the music publishers suit. The model's hallucination problem became evidence in a case about the model itself.",
    sources: [source.reutersHallucination],
    category: "Legal",
  },

  {
    date: "2025-06-03",
    period: "Jun 3-5, 2025",
    title: "Windsurf Loses First-Party Claude Access Overnight",
    summary:
      "Windsurf says Anthropic yanked priority access with little warning as OpenAI acquisition rumors flew. Jared Kaplan later blamed compute shortages, not politics.",
    sources: [source.techCrunchWindsurfAccess, source.techCrunchWindsurfKaplan],
    category: "Policy",
  },
  {
    date: "2025-06-04",
    period: "Jun 4, 2025",
    title: "Reddit Says Claude Never Stopped Scraping",
    summary:
      "Reddit sued, claiming Anthropic's bots kept hitting the site after promises to stop and that Claude trained on user content without a license. The fight is framed around contracts, not copyright.",
    sources: [source.reutersReddit, source.apRedditLawsuit],
    category: "Legal",
  },
  {
    date: "2025-06-24",
    period: "Jun 24-25, 2025",
    title: "Anthropic Wins Fair-Use Round, Piracy Claims Live On",
    summary:
      "Judge William Alsup said training on lawfully acquired books can be fair use, but the pirate-library claims stay in play. Anthropic keeps the legal theory and the PR headache.",
    sources: [source.apFairUseRuling, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-07-16",
    period: "Feb-Jul 2025",
    title: "Anthropic Rehires Departing Stars, Ships Claude Code",
    summary:
      "Boris Cherny and Cat Wu left for Cursor, came back two weeks later, and suddenly Claude Code graduated from research toy to paid product. The timing looks like a retention coup.",
    sources: [source.investingCursorPoach, source.businessInsiderProPlan],
    category: "Policy",
  },
  {
    date: "2025-07-28",
    period: "Jul 28, 2025",
    title: "Claude Code Gets a Weekly Cap",
    summary:
      "Anthropic imposed weekly limits on Pro and Max users, blaming always-on loops and shared accounts. Only a sliver of users were affected, but the message was clear: compute isn't free.",
    sources: [source.techCrunchRateLimits],
    category: "Policy",
  },
  {
    date: "2025-08-01",
    period: "Aug 1-2, 2025",
    title: "Anthropic Kicks OpenAI Out of Claude",
    summary:
      "Anthropic revoked OpenAI's API access, saying the rival used Claude Code to benchmark GPT-5, breaching anti-competitor terms. OpenAI called it normal safety research; Anthropic called it trespassing.",
    sources: [source.wiredOpenAI, source.techCrunchOpenAI],
    category: "Policy",
  },
  {
    date: "2025-08-27",
    period: "Aug 27, 2025",
    title: "Criminals Love Claude Too",
    summary:
      "Anthropic's own abuse report lists North Korean fake job applicants, ransomware writers, and data-extortion crews using Claude. Safety first, but also useful.",
    sources: [source.anthropicAugustMisuse],
    category: "Safety",
  },
  {
    date: "2025-09-10",
    period: "Sep 10, 2025",
    title: "Claude Goes Down During Peak Traffic",
    summary:
      "An outage knocked out Claude.ai, the Console, and the API for hours. After months of rate-limit drama, the reliability scorecard got another black mark.",
    sources: [source.techCrunchOutageSep],
    category: "Reliability",
  },
  {
    date: "2025-09-17",
    period: "Sep 17, 2025",
    title: "Anthropic Says Claude Got Dumber, Blames Bugs",
    summary:
      "Weeks of user complaints later, Anthropic admitted three infrastructure bugs degraded answers from August into September. Evals missed it, and users did the QA for free.",
    sources: [source.anthropicSeptemberPostmortem],
    category: "Quality",
  },
  {
    date: "2025-09-25",
    period: "Sep 25, 2025",
    title: "Anthropic Settles Pirated-Books Suit for $1.5 Billion",
    summary:
      "A judge gave early approval to a deal covering roughly 465,000 books at about $3,000 each. Anthropic avoids a trial and keeps a very expensive receipt.",
    sources: [source.apSettlement, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-11-13",
    period: "Nov 13, 2025",
    title: "China-Linked Spies Weaponized Claude Code",
    summary:
      "Anthropic says a state-tied group tricked Claude Code into probing about 30 targets, letting the model handle most of the hacking workflow. The coding assistant became the offensive tool.",
    sources: [source.anthropicEspionage],
    category: "Safety",
  },
  {
    date: "2026-01-11",
    period: "Jan 2026",
    title: "xAI Staff Lose Claude Access",
    summary:
      "Anthropic reportedly cut off xAI employees via Cursor under the same competitor rule used against OpenAI and Windsurf. The anti-rival policy now looks like standard practice.",
    sources: [source.economicTimesXai, source.ventureBeatHarness],
    category: "Policy",
  },
  {
    date: "2026-01-27",
    period: "Jan 27-Feb 15, 2026",
    title: "Trademark Spat Kills Clawdbot, Births OpenClaw",
    summary:
      "Anthropic objected to the name Clawdbot, forcing creator Steinberger to rebrand to Moltbot, then OpenClaw. Weeks later Steinberger joined OpenAI to build personal agents.",
    sources: [
      source.businessInsiderClawdbotRename,
      source.lexOpenClawTranscript,
      source.reutersOpenClawOpenAI,
    ],
    category: "Legal",
  },
  {
    date: "2026-01-29",
    period: "Jan 29, 2026",
    title: "Anthropic Banned 1.45 Million Accounts in Six Months",
    summary:
      "The company's transparency report shows 1.45 million bans, 52,000 appeals, and only 1,700 reversals between July and December 2025. The appeals process is a Google form and a prayer.",
    sources: [source.anthropicTransparency],
    category: "Policy",
  },
  {
    date: "2026-02-23",
    period: "Feb 23, 2026",
    title: "Anthropic Cries Distillation Attack After 16M Prompts",
    summary:
      "Anthropic accused DeepSeek, Moonshot, and MiniMax of running 24,000 fake accounts to milk 16 million Claude exchanges. Critics note DeepSeek's slice was only 150K, and 16M isn't huge for popular apps.",
    sources: [
      source.anthropicDistillation,
      source.theVergeDistillation,
      source.marketWatchDistillation,
      source.interconnectsDistillation,
    ],
    category: "Policy",
  },
  {
    date: "2026-02-26",
    period: "Feb 26-27, 2026",
    title: "Anthropic Refuses Pentagon Kill-Switch Demands",
    summary:
      "Dario Amodei says Anthropic won't drop safeguards for mass surveillance or autonomous weapons, even after the Pentagon threatened supply-chain blacklisting and Defense Production Act pressure.",
    sources: [source.anthropicDeptWarStatement],
    category: "Policy",
  },
  {
    date: "2026-03-02",
    period: "Mar 2-3, 2026",
    title: "Claude Buckles Under Its Own Popularity",
    summary:
      "A usage spike in early March triggered long outages and a run of status-page apologies. Anthropic later posted sub-99% uptime for claude.ai over 90 days.",
    sources: [source.tomsGuideMarchOutage, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-03-04",
    period: "Mar 4-12, 2026",
    title: "Pentagon Labels Anthropic a Supply-Chain Risk",
    summary:
      "A March 4 letter informed Anthropic of its new risk designation. The company sued for emergency relief, turning an ethics debate into a survival fight for defense contracts.",
    sources: [
      source.anthropicDeptWarUpdate,
      source.techCrunchDoDLawsuit,
      source.reutersSupplyChainStay,
    ],
    category: "Policy",
  },
  {
    date: "2026-03-09",
    period: "Mar 9, 2026",
    title: "Claude Code Review Costs $25 Per Pull Request",
    summary:
      "Anthropic's new feature averages $15-25 per review, billed by the token. Developers compared it with flat-rate rivals like CodeRabbit at $24/month and Greptile at $30 for 50 reviews.",
    sources: [
      source.anthropicCodeReview,
      source.businessInsiderCodeReview,
      source.techRadarCodeReview,
      source.codeRabbitPricing,
      source.greptilePricing,
    ],
    category: "Policy",
  },
  {
    date: "2026-03-31",
    period: "Mar 31-Apr 1, 2026",
    title: "Half-Million Lines of Claude Code Leak Via Source Map",
    summary:
      "A bundled source map revealed roughly 500,000 lines of Claude Code internals, including unreleased features. Anthropic says no customer data was exposed, which isn't the same as harmless.",
    sources: [source.axiosSourceLeak, source.theVergeSourceLeak, source.guardianSourceLeak],
    category: "Reliability",
  },
  {
    date: "2026-04-01",
    period: "Apr 1, 2026",
    title: "Anthropic's DMCA Spree Nukes Innocent GitHub Repos",
    summary:
      "Trying to stem the leak, Anthropic filed takedowns that wiped thousands of repos, including forks of its own official project. The company later reversed most claims, but the collateral damage was done.",
    sources: [source.techCrunchDMCA],
    category: "Legal",
  },
  {
    date: "2026-04-02",
    period: "Apr 2-14, 2026",
    title: "AMD AI Lead Says Claude Code Is Broken",
    summary:
      "An AMD executive filed a GitHub issue with thousands of sessions showing sharp regression on complex tasks. The complaint gave teeth to developer grumbling before Anthropic admitted it broke things.",
    sources: [
      source.githubAmdRegression,
      source.theRegisterAmdRegression,
      source.ventureBeatNerfing,
      source.anthropicAprilPostmortem,
    ],
    category: "Quality",
  },
  {
    date: "2026-04-04",
    period: "Apr 4, 2026",
    title: "OpenClaw Users Forced Onto Metered API",
    summary:
      "Anthropic told subscribers that third-party wrappers like OpenClaw no longer count against plan limits; users must bring their own API keys and pay per token. Popular tools get punished for success.",
    sources: [source.techCrunchOpenClawPayExtra, source.theVergeOpenClaw],
    category: "Policy",
  },
  {
    date: "2026-04-10",
    period: "Apr 10, 2026",
    title: "OpenClaw Creator Banned, Then Unbanned",
    summary:
      "Peter Steinberger lost Claude access days after the new API path was announced. Anthropic reversed the ban after press inquiries, but the episode looked like arbitrary gatekeeping.",
    sources: [source.techCrunchOpenClawBan],
    category: "Policy",
  },
  {
    date: "2026-04-12",
    period: "Mar 6-Apr 12, 2026",
    title: "Claude Code Cache Shrunk to Five Minutes, Costing Users $1,500",
    summary:
      "For 33 days the cache lived for an hour, then quietly dropped to five minutes. The change spiked read costs 12.5x, adding an estimated $949-$1,582 per user over three months before Anthropic called it a bug.",
    sources: [source.githubCacheTTLRegression],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    period: "Apr 15, 2026",
    title: "Claude Login Breaks Across the Board",
    summary:
      "Claude.ai, Console, and Code all went dark for hours after login failed. Users checked their own Wi-Fi, then checked Twitter, then checked the status page.",
    sources: [source.anthropicStatusApr15, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    period: "Apr 15-16, 2026",
    title: "Anthropic Declines to Fix RCE in MCP STDIO",
    summary:
      "OX Security warned that the protocol opens AI apps to command execution on millions of endpoints. Anthropic called the risk expected behavior and told developers to sanitize inputs themselves.",
    sources: [source.oxMcpFlaw, source.theHackerNewsMcp, source.theRegisterMcp],
    category: "Safety",
  },
  {
    date: "2026-04-17",
    period: "Apr 17-18, 2026",
    title: "60 Belo Workers Locked Out by Algorithm",
    summary:
      "Anthropic suspended their Claude accounts for a vague policy breach, freezing workflows and chat history. Access returned 15 hours later as a false positive, with only a Google form for appeals.",
    sources: [source.tomsHardwareBelo, source.ndtvBelo],
    category: "Policy",
  },
  {
    date: "2026-04-21",
    period: "Apr 21-22, 2026",
    title: "Anthropic Experiments With $100 Claude Code Tier",
    summary:
      "Pricing pages briefly hid Claude Code behind the $100 Max plan. Anthropic called it a 2% new-user test and reverted the docs, but the stunt handed OpenAI a free headline.",
    sources: [source.businessInsiderProPlan, source.theRegisterProPlan],
    category: "Policy",
  },
  {
    date: "2026-04-22",
    period: "Apr 22, 2026",
    title: "Anthropic Admits It Can't Kill Claude in Classified Nets",
    summary:
      "In the Pentagon fight, the company said once Claude runs inside classified systems it can't be monitored, altered, or shut off. The magic safety lever does not exist.",
    sources: [source.axiosNoKillSwitch, source.apNoKillSwitch],
    category: "Safety",
  },
  {
    date: "2026-04-23",
    period: "Apr 23-24, 2026",
    title: "Anthropic Details Why Claude Code Tanked",
    summary:
      "A second postmortem pinned the decline on lower reasoning effort, a cache bug, and an over-eager brevity prompt. Limits were reset and the intentional-nerf rumor was denied.",
    sources: [
      source.anthropicAprilPostmortem,
      source.fortuneClaudeCode,
      source.businessInsiderClaudeCode,
    ],
    category: "Quality",
  },
  {
    date: "2026-04-25",
    period: "Apr 25-26, 2026",
    title: "Anthropic Bills Extra If Your Repo Mentions HERMES.md",
    summary:
      "The anti-abuse system flagged the case-sensitive filename as suspicious and routed Max users to pay-per-use. One subscriber burned $200 while still under quota until he binary-searched his git log for the magic word.",
    sources: [source.githubHermesBillingBug, source.redditHermesBillingBug],
    category: "Reliability",
  },
  {
    date: "2026-04-25",
    period: "Apr 25, 2026",
    title: "Claude Code Update Crashes on Resume, Gets Rolled Back",
    summary:
      "Version 2.1.120 died when users ran --resume or --continue, so Anthropic reverted to 2.1.119. Another small reminder that shipping fast and breaking things is still in style.",
    sources: [source.anthropicStatusApr25],
    category: "Reliability",
  },
  {
    date: "2026-05-13",
    period: "May 13, 2026",
    title: "Claude's 'Free' Agent SDK Now Costs 25x More",
    summary:
      "Anthropic moved Agent SDK and GitHub Actions usage into a separate credit bucket. Programmatic use that once hit plan limits now drains API-priced credits, turning 'free' into a surprise bill.",
    sources: [
      source.claudeDevsAgentSdkCreditThread,
      source.claudeHelpAgentSdkPlanCredit,
      source.redditAgentSdkClarify,
    ],
    category: "Policy",
  },
  {
    date: "2026-06-09",
    period: "Jun 9-11, 2026",
    title: "Fable 5's Stealth Nerf on Frontier ML Work Triggers Uproar",
    summary:
      "Anthropic slipped a quiet sabotage rule into the 319-page system card for its new Mythos-class Fable 5. The model quietly degrades its own answers when it thinks you're doing pretraining, distributed training infrastructure, or chip design, forcing reproducibility issues while Anthropic keeps full power. After 48 hours of backlash, the company apologized and swapped the hidden sabotage for a visible reroute to Opus 4.8, then warned the new classifier will overblock.",
    sources: [
      source.fortuneFableSabotage,
      source.decryptFableBacklash,
      source.decryptFableApology,
      source.interconnectsFableSafety,
    ],
    category: "Policy",
  },
];

export const categories = ["All", "Quality", "Reliability", "Legal", "Policy", "Safety"] as const;
