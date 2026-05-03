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
    title: "Music Publishers Drag Claude Into Court",
    summary:
      "Universal, Concord, and ABKCO sued Anthropic, alleging Claude was trained on copyrighted lyrics and could reproduce lyrics from hundreds of songs. The 'constitutional AI' company got its first big copyright punch in the face from the music business.",
    sources: [source.guardianLyrics, source.justiaLyricsDocket],
    category: "Legal",
  },
  {
    date: "2024-07-25",
    period: "Jul 2024",
    title: "ClaudeBot Hammers iFixit and Freelancer",
    summary:
      "ClaudeBot reportedly hit iFixit roughly a million times in 24 hours, while other sites complained about aggressive crawling. Anthropic said it honors robots.txt; web operators learned that only helps after you notice the bot eating your bandwidth.",
    sources: [source.theVergeClaudeBot, source.ftClaudeBot],
    category: "Policy",
  },
  {
    date: "2024-08-20",
    period: "Aug 20, 2024",
    title: "Authors Sue Over the Shadow-Library Diet",
    summary:
      "Andrea Bartz, Charles Graeber, and Kirk Wallace Johnson alleged Anthropic copied books from pirate libraries and built a permanent training library from them. Every later 'responsible AI' claim had to live next to that complaint.",
    sources: [source.classActionBartzComplaint, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-05-15",
    period: "May 15, 2025",
    title: "Claude Hallucinates Its Way Into Anthropic's Own Lawsuit",
    summary:
      "In the music-publishers case, Anthropic's lawyers took responsibility for an expert-report citation that Claude fabricated. A model flaw became courtroom theater inside a case about the model itself.",
    sources: [source.reutersHallucination],
    category: "Legal",
  },

  {
    date: "2025-06-03",
    period: "Jun 3-5, 2025",
    title: "Windsurf Gets Cut Off Mid-Race",
    summary:
      "Windsurf said Anthropic sharply reduced first-party Claude access with little notice, right as OpenAI acquisition rumors swirled. Jared Kaplan later said it would be odd to sell Claude to OpenAI and pointed to compute constraints, which did not make the lockout feel less strategic.",
    sources: [source.techCrunchWindsurfAccess, source.techCrunchWindsurfKaplan],
    category: "Policy",
  },
  {
    date: "2025-06-04",
    period: "Jun 4, 2025",
    title: "Reddit Sues Over the Scraping It Says Never Stopped",
    summary:
      "Reddit sued Anthropic, alleging bots kept hitting Reddit after Anthropic said it had stopped and that Claude was trained on user content without a license. Unlike the book cases, Reddit framed the fight around platform rules, privacy promises, and contracts.",
    sources: [source.reutersReddit, source.apRedditLawsuit],
    category: "Legal",
  },
  {
    date: "2025-06-24",
    period: "Jun 24-25, 2025",
    title: "A Fair-Use Win With a Piracy Hangover",
    summary:
      "Judge William Alsup held that training on lawfully acquired books could be fair use, but the pirate-library claims survived. Anthropic won the model-training theory and still kept the shadow-library problem.",
    sources: [source.apFairUseRuling, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-07-16",
    period: "Feb-Jul 2025",
    title: "Boris & Cat Leave, Anthropic Suddenly Cares",
    summary:
      "Claude Code began as Boris Cherny's no-master-plan terminal experiment and launched only as a limited research preview, while Cat Wu was still saying a dedicated subscription was something Anthropic was merely 'figuring out.' Then Cursor-maker Anysphere poached Cherny and Wu for senior roles, only for Anthropic to hire them back within two weeks. Soon after, Claude Code became a first-class subscription product.",
    sources: [source.investingCursorPoach, source.businessInsiderProPlan],
    category: "Policy",
  },
  {
    date: "2025-07-28",
    period: "Jul 28, 2025",
    title: "Claude Code Enters the Rationing Era",
    summary:
      "Anthropic announced weekly limits for Pro and Max subscribers, blaming always-on Claude Code loops and account-sharing abuse. Fewer than 5% of users were supposed to be affected, but the signal was obvious: flat-rate agent work had run into a compute bill.",
    sources: [source.techCrunchRateLimits],
    category: "Policy",
  },
  {
    date: "2025-08-01",
    period: "Aug 1-2, 2025",
    title: "OpenAI Gets Booted From Claude",
    summary:
      "Anthropic revoked OpenAI's Claude API access, saying OpenAI used Claude Code and internal tools to benchmark GPT-5 in violation of terms against competitor development. OpenAI called benchmarking standard safety work; Anthropic chose the bouncer role.",
    sources: [source.wiredOpenAI, source.techCrunchOpenAI],
    category: "Policy",
  },
  {
    date: "2025-08-27",
    period: "Aug 27, 2025",
    title: "Claude Code Shows Up in Cybercrime Reports",
    summary:
      "Anthropic disclosed Claude misuse cases involving data extortion, North Korean remote-worker fraud, and AI-generated ransomware. The cleanup was useful; the dunk is that the safety-first product was already useful to attackers too.",
    sources: [source.anthropicAugustMisuse],
    category: "Safety",
  },
  {
    date: "2025-09-10",
    period: "Sep 10, 2025",
    title: "Claude and Console Go Dark at Peak Demand",
    summary:
      "Anthropic reported an outage hitting API access, Console, and Claude. In a year already full of compute and rate-limit drama, the reliability story got another easy screenshot.",
    sources: [source.techCrunchOutageSep],
    category: "Reliability",
  },
  {
    date: "2025-09-17",
    period: "Sep 17, 2025",
    title: "The 'It Got Worse' Postmortem Arrives",
    summary:
      "After weeks of user complaints, Anthropic said three infrastructure bugs intermittently degraded Claude responses from August into early September and explained why evals missed it. The admission was useful; the timing made users feel like unpaid QA.",
    sources: [source.anthropicSeptemberPostmortem],
    category: "Quality",
  },
  {
    date: "2025-09-25",
    period: "Sep 25, 2025",
    title: "The Pirated-Books Case Turns Into a $1.5B Bill",
    summary:
      "A judge preliminarily approved a $1.5 billion settlement covering nearly 465,000 books at roughly $3,000 each. Anthropic avoided a trial on pirate-library sourcing, but the settlement number became the receipt.",
    sources: [source.apSettlement, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-11-13",
    period: "Nov 13, 2025",
    title: "Claude Code Gets Weaponized for Espionage",
    summary:
      "Anthropic said a China-linked actor manipulated Claude Code into attempting intrusions against roughly 30 targets, with AI handling most of the workflow. The agentic coding assistant pitch met an agentic cyberattack.",
    sources: [source.anthropicEspionage],
    category: "Safety",
  },
  {
    date: "2026-01-11",
    period: "Jan 2026",
    title: "xAI Gets the Competitor Lockout Treatment",
    summary:
      "xAI staff reportedly lost Claude access through Cursor after Anthropic enforced competitor-use rules. After Windsurf and OpenAI, the no-rivals policy looked less like an exception and more like product strategy.",
    sources: [source.economicTimesXai, source.ventureBeatHarness],
    category: "Policy",
  },
  {
    date: "2026-01-27",
    period: "Jan 27-Feb 15, 2026",
    title: "Anthropic Sends Lawyers, OpenAI Gets ClawdBot",
    summary:
      "Anthropic objected to Clawdbot's Claude/Clawd branding, forcing Steinberger into a rushed Moltbot rename he later said nearly made him delete the project. He landed on OpenClaw, called Sam Altman to sanity-check the name, and weeks later joined OpenAI to build personal agents.",
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
    title: "Transparency Report: 1.45 Million Bans",
    summary:
      "Anthropic disclosed 1.45 million banned accounts for July-December 2025, plus 52,000 appeals and 1,700 overturns. The numbers made the enforcement machine visible; from the outside, it still looked like 'trust the form.'",
    sources: [source.anthropicTransparency],
    category: "Policy",
  },
  {
    date: "2026-02-23",
    period: "Feb 23, 2026",
    title: "Anthropic Raises Alarm Over 'Distillation Attacks'",
    summary:
      "Anthropic accused DeepSeek, Moonshot, and MiniMax of 'industrial-scale' distillation, calling the scraping campaigns 'distillation attacks' after 24,000 fake accounts generated 16M Claude exchanges. It tied the concern to export controls and national security, while critics noted DeepSeek's alleged share was only 150K exchanges and Theo Browne said 16M is 'really not much' for an AI app because T3 Chat hits that volume most months.",
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
    title: "Pentagon Guardrails Become a Public Standoff",
    summary:
      "Dario Amodei said Anthropic would not remove safeguards for mass domestic surveillance or fully autonomous weapons, even as the Department of War threatened removal, a supply-chain-risk label, and the Defense Production Act. The AI-safety brand finally collided with procurement reality.",
    sources: [source.anthropicDeptWarStatement],
    category: "Policy",
  },
  {
    date: "2026-03-02",
    period: "Mar 2-3, 2026",
    title: "Unprecedented Demand Knocks Claude Over",
    summary:
      "A surge in usage triggered major Claude disruptions in early March, followed by a string of status incidents. Anthropic's own status page later showed sub-99% 90-day uptime for claude.ai and around-99% uptime across several core surfaces.",
    sources: [source.tomsGuideMarchOutage, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-03-04",
    period: "Mar 4-12, 2026",
    title: "Pentagon Brands Anthropic a Supply-Chain Risk",
    summary:
      "Anthropic said it received a March 4 letter designating it a supply-chain risk, then sued and asked for emergency relief. A model-policy fight suddenly became a defense-contracting survival fight.",
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
    title: "Claude Wants $25 to Read Your PR",
    summary:
      "Anthropic launched Claude Code Review and told teams each review generally averages $15-25, billed separately by token usage. The company defended the price as the cost of 'depth,' but developers immediately compared it with tools like CodeRabbit at $24/month per user and Greptile at $30/month with 50 reviews included plus $1 per extra review.",
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
    title: "Claude Code Leaked Itself",
    summary:
      "A packaged source map exposed roughly half a million lines of Claude Code internals, including architecture and unreleased features. Anthropic said no customer data or credentials were exposed, which is not the same thing as 'this was fine.'",
    sources: [source.axiosSourceLeak, source.theVergeSourceLeak, source.guardianSourceLeak],
    category: "Reliability",
  },
  {
    date: "2026-04-01",
    period: "Apr 1, 2026",
    title: "Anthropic Sends DMCAs to Everyone on GitHub",
    summary:
      "Trying to contain the Claude Code leak, Anthropic's takedown effort reportedly knocked out thousands of GitHub repositories, including accounts that had only forked the official Claude repo. The company later called the overreach accidental and walked much of it back, but wrongly DMCA'ing normal users' repos is dangerous and likely illegal.",
    sources: [source.techCrunchDMCA],
    category: "Legal",
  },
  {
    date: "2026-04-02",
    period: "Apr 2-14, 2026",
    title: "AMD AI Lead Files Claude Code as a Bug",
    summary:
      "An AMD AI leader opened a GitHub issue saying Claude Code had regressed until it could not be trusted for complex engineering, backing the claim with thousands of sessions and tool calls. The complaint helped turn vague 'Claude got dumb' chatter into a data-backed developer backlash before Anthropic later admitted multiple product changes had degraded Claude Code.",
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
    title: "OpenClaw Users Meet the Claw Tax",
    summary:
      "Anthropic told subscribers their Claude limits would no longer cover third-party harnesses like OpenClaw; users needed API keys or separately billed usage. The platform/provider conflict became explicit: build on Claude, then pay again when your tool gets popular.",
    sources: [source.techCrunchOpenClawPayExtra, source.theVergeOpenClaw],
    category: "Policy",
  },
  {
    date: "2026-04-10",
    period: "Apr 10, 2026",
    title: "OpenClaw's Creator Gets Banned Anyway",
    summary:
      "TechCrunch reported Anthropic temporarily banned OpenClaw creator Peter Steinberger from Claude even after the new API-payment path. The company later reversed course, but the optics were pure walled-garden chaos.",
    sources: [source.techCrunchOpenClawBan],
    category: "Policy",
  },
  {
    date: "2026-04-15",
    period: "Apr 15, 2026",
    title: "Claude.ai and Claude Code Login Break",
    summary:
      "Anthropic's status page said Claude.ai and Platform were down, Claude Code login did not work, and API, Console, and Code were all affected before recovery. For users, it was another 'is it me or is Claude down?' day.",
    sources: [source.anthropicStatusApr15, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    period: "Apr 15-16, 2026",
    title: "Anthropic Calls RCE 'Expected Behavior'",
    summary:
      "OX Security reported that Anthropic's MCP STDIO design could expose downstream AI apps to command execution risks across millions of users and hundreds of thousands of servers. Researchers said Anthropic declined a protocol-level fix, calling the behavior expected and pushing sanitization onto developers.",
    sources: [source.oxMcpFlaw, source.theHackerNewsMcp, source.theRegisterMcp],
    category: "Safety",
  },
  {
    date: "2026-04-17",
    period: "Apr 17-18, 2026",
    title: "Claude Locks Out 60 Workers With a Google Form",
    summary:
      "Anthropic abruptly suspended more than 60 Claude accounts at fintech company Belo for a vague policy violation, cutting employees off from workflows, integrations, skills, and conversation history. Access came back after roughly 15 hours, reportedly as a false positive, but the only appeal path was a generic Google Form.",
    sources: [source.tomsHardwareBelo, source.ndtvBelo],
    category: "Policy",
  },
  {
    date: "2026-04-21",
    period: "Apr 21-22, 2026",
    title: "Anthropic Tests a $100 Claude Code Paywall",
    summary:
      "Developers noticed Claude Code disappear from the $20 Pro plan on Anthropic pricing pages, implying a jump to the $100 Max tier. Anthropic later said it was only a 2% new-user experiment and reverted the docs, but the confusion handed OpenAI an easy dunk and made Claude Code pricing feel unstable.",
    sources: [source.businessInsiderProPlan, source.theRegisterProPlan],
    category: "Policy",
  },
  {
    date: "2026-04-22",
    period: "Apr 22, 2026",
    title: "The No-Kill-Switch Filing",
    summary:
      "In the Pentagon fight, Anthropic said that once Claude is deployed inside classified networks it cannot monitor, alter, or switch it off. That undercut the comforting myth of a magic safety lever and made the accountability problem look uglier.",
    sources: [source.axiosNoKillSwitch, source.apNoKillSwitch],
    category: "Safety",
  },
  {
    date: "2026-04-23",
    period: "Apr 23-24, 2026",
    title: "Anthropic Admits Claude Code Really Did Get Worse",
    summary:
      "A second quality postmortem traced the Claude Code decline to three product-layer changes: lower default reasoning effort, a cache bug that made Claude forgetful, and a brevity prompt that hurt coding. Anthropic denied intentional nerfing and reset subscriber limits.",
    sources: [
      source.anthropicAprilPostmortem,
      source.fortuneClaudeCode,
      source.businessInsiderClaudeCode,
    ],
    category: "Quality",
  },
  {
    date: "2026-04-12",
    period: "Mar 6–Apr 12, 2026",
    title: "Claude Code's Cache Forgot Everything in Five Minutes",
    summary:
      "For 33 straight days in February, Claude Code used 1-hour prompt caching on every call. Around March 6, that changed to 5 minutes with no announcement. Cache started expiring mid-session and re-creating at 12.5x the read rate, adding roughly $949 per user on Sonnet and $1,582 on Opus over three months. The regression lined up exactly with when subscribers first started hitting quota limits. Anthropic called it a bug after someone proved it with 120K API calls.",
    sources: [source.githubCacheTTLRegression],
    category: "Reliability",
  },
  {
    date: "2026-04-25",
    period: "Apr 25-26, 2026",
    title: "Anthropic Charges More If They Don't Like You",
    summary:
      "Claude Code's anti-abuse system treated the case-sensitive string HERMES.md in recent git commit messages as suspicious and routed Max-plan requests to extra-usage billing instead of included quota. One Max 20x user reported burning $200.98 while 86% of weekly capacity remained, then had to binary-search their own git history to isolate the magic word. The punchline: HERMES.md is a real AI-agent context-file convention, not random junk.",
    sources: [source.githubHermesBillingBug, source.redditHermesBillingBug],
    category: "Reliability",
  },
  {
    date: "2026-04-25",
    period: "Apr 25, 2026",
    title: "Claude Code Update Crashes on Resume",
    summary:
      "Anthropic's status page said Claude Code v2.1.120 crashed when resuming sessions with --resume or --continue, forcing an automatic rollback to v2.1.119. Right after the postmortem, the product served another tiny reliability punchline.",
    sources: [source.anthropicStatusApr25],
    category: "Reliability",
  },
];

export const categories = ["All", "Quality", "Reliability", "Legal", "Policy", "Safety"] as const;
