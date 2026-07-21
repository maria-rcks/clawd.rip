export type TimelineSource = {
  title: string;
  url: string;
  icon: string;
};

export type TimelineEvent = {
  date: string;
  period: string;
  slug: string;
  title: string;
  summary: string;
  sources: TimelineSource[];
  category: "Legal" | "Quality" | "Reliability" | "Safety" | "Policy";
};

const icons = {
  anthropic: "/source-icons/anthropic.svg",
  ap: "/source-icons/favicons/ap.avif",
  axios: "/source-icons/favicons/axios.ico",
  cnbc: "/source-icons/favicons/cnbc.png",
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
  news: "/source-icons/news.svg",
  oxSecurity: "/source-icons/favicons/oxSecurity.webp",
  reuters: "/source-icons/favicons/reuters.png",
  reddit: "/source-icons/reddit.svg",
  status: "/source-icons/status.svg",
  techCrunch: "/source-icons/favicons/techCrunch.avif",
  techRadar: "/source-icons/favicons/techRadar.png",
  theDecoder: "/source-icons/favicons/theDecoder.png",
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
  anthropicFableMythosAccess: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/fable-mythos-access",
    icon: icons.anthropic,
  },
  anthropicRedeployingFable: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/redeploying-fable-5",
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
  claudeHelpFablePromo: {
    title: "Claude Help Center",
    url: "https://support.claude.com/en/articles/15424964-claude-fable-5-promotional-access",
    icon: icons.anthropic,
  },
  claudeFableExtensionTweet: {
    title: "Claude",
    url: "https://x.com/claudeai/status/2074548242386178258",
    icon: icons.x,
  },
  claudeFablePlanSplitTweet: {
    title: "Claude",
    url: "https://x.com/claudeai/status/2078302415804379218",
    icon: icons.x,
  },
  claudeHelpFablePlan: {
    title: "Claude Help Center",
    url: "https://support.claude.com/en/articles/15424964-claude-fable-5-on-your-plan",
    icon: icons.anthropic,
  },
  claudeHelpFableCredits: {
    title: "Claude Help Center",
    url: "https://support.claude.com/en/articles/15862783-claude-fable-5-one-time-free-credits-promotion",
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
  cnbcFableBan: {
    title: "CNBC",
    url: "https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html",
    icon: icons.cnbc,
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
  forbesFableBan: {
    title: "Forbes",
    url: "https://www.forbes.com/sites/anishasircar/2026/06/16/anthropic-disabled-fable-5-and-mythos-5-after-a-us-export-control-order-heres-what-happened/",
    icon: icons.forbes,
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
  globalNerdyFableLastDay: {
    title: "Global Nerdy",
    url: "https://www.globalnerdy.com/2026/07/07/happy-last-free-day-of-claude-fable-5-everybody/",
    icon: icons.news,
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
  theDecoderFableReturn: {
    title: "The Decoder",
    url: "https://the-decoder.com/anthropics-fable-5-is-back-worldwide-after-a-two-week-government-ban-over-a-jailbreak/",
    icon: icons.theDecoder,
  },
  theDecoderFablePlanSplit: {
    title: "The Decoder",
    url: "https://the-decoder.com/anthropic-slashes-claude-fable-5-limits-in-max-and-team-premium-and-pushes-pro-users-toward-api-pricing/",
    icon: icons.theDecoder,
  },
  theDecoderGpt2Mythos: {
    title: "The Decoder",
    url: "https://the-decoder.com/from-gpt-2-to-claude-mythos-the-return-of-ai-models-deemed-too-dangerous-to-release/",
    icon: icons.theDecoder,
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
    slug: "music-publishers-lawsuit",
    period: "Oct 18, 2023",
    title: "Music Publishers Sue Claude Into Next Week",
    summary:
      "Universal, Concord, and ABKCO claim Claude scarfed copyrighted lyrics and can spit them back on demand. Constitutional AI's first big courtroom chorus came from the music biz.",
    sources: [source.guardianLyrics, source.justiaLyricsDocket],
    category: "Legal",
  },
  {
    date: "2024-07-25",
    slug: "claudebot-hammers-ifixit",
    period: "Jul 2024",
    title: "ClaudeBot Devours iFixit's Bandwidth",
    summary:
      "ClaudeBot slammed iFixit about a million times in a day while other sites screamed about the bot's appetite. Anthropic swears it obeys robots.txt, which only helps after you catch the thing chewing your server.",
    sources: [source.theVergeClaudeBot, source.ftClaudeBot],
    category: "Policy",
  },
  {
    date: "2024-08-20",
    slug: "authors-shadow-library-lawsuit",
    period: "Aug 20, 2024",
    title: "Authors Tag Claude for Shadow-Library Theft",
    summary:
      "Andrea Bartz, Charles Graeber, and Kirk Wallace Johnson say Anthropic hoovered books from pirate libraries and baked them into Claude's brain. Every 'responsible AI' slide now shares the stage with that allegation.",
    sources: [source.classActionBartzComplaint, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-05-15",
    slug: "claude-hallucinates-in-court",
    period: "May 15, 2025",
    title: "Claude Cites Fake Case in Its Own Lawsuit",
    summary:
      "In the music-publisher case, Anthropic's lawyers had to admit Claude hallucinated a citation in an expert report. The model's glitch became part of the evidence against the model.",
    sources: [source.reutersHallucination],
    category: "Legal",
  },

  {
    date: "2025-06-03",
    slug: "windsurf-cut-off",
    period: "Jun 3-5, 2025",
    title: "Windsurf Gets Throttled Overnight",
    summary:
      "Windsurf says Anthropic slashed first-party Claude access with almost no warning, right as OpenAI buyout rumors swirled. Jared Kaplan later claimed compute limits, not games, drove the cutoff, which did not make the lockout feel friendlier.",
    sources: [source.techCrunchWindsurfAccess, source.techCrunchWindsurfKaplan],
    category: "Policy",
  },
  {
    date: "2025-06-04",
    slug: "reddit-lawsuit",
    period: "Jun 4, 2025",
    title: "Reddit Sues Over Endless Scraping",
    summary:
      "Reddit sued Anthropic, alleging bots kept hammering Reddit after Anthropic promised to stop and that Claude trained on user posts without permission. Unlike the book fights, Reddit framed it as breach of contract and privacy promises.",
    sources: [source.reutersReddit, source.apRedditLawsuit],
    category: "Legal",
  },
  {
    date: "2025-06-24",
    slug: "fair-use-ruling",
    period: "Jun 24-25, 2025",
    title: "Fair-Use Win, Piracy Footnote",
    summary:
      "Judge William Alsup said training on legally acquired books may be fair use, but the pirate-library claims stayed alive. Anthropic scored the legal theory and kept the shadow-library stink.",
    sources: [source.apFairUseRuling, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-07-16",
    slug: "boris-and-cat-poached",
    period: "Feb-Jul 2025",
    title: "Boris and Cat Quit, Then Un-Quit",
    summary:
      "Claude Code began as Boris Cherny's hacky terminal toy and stayed a limited preview while Cat Wu said a dedicated subscription was still TBD. Cursor-maker Anysphere lured them away, then Anthropic yanked them back within two weeks. Claude Code became a paid product soon after.",
    sources: [source.investingCursorPoach, source.businessInsiderProPlan],
    category: "Policy",
  },
  {
    date: "2025-07-28",
    slug: "claude-code-rate-limits",
    period: "Jul 28, 2025",
    title: "Claude Code Hits Weekly Ration Wall",
    summary:
      "Anthropic capped weekly usage for Pro and Max tiers, blaming always-on coding loops and account sharing. Fewer than 5% of users were supposed to feel it, but the real message was flat-rate coding had crashed into the compute budget.",
    sources: [source.techCrunchRateLimits],
    category: "Policy",
  },
  {
    date: "2025-08-01",
    slug: "openai-booted-from-claude",
    period: "Aug 1-2, 2025",
    title: "Anthropic Kicks OpenAI Out of Claude",
    summary:
      "Anthropic yanked OpenAI's Claude access, claiming OpenAI used Claude Code to benchmark GPT-5 in violation of anti-rival rules. OpenAI called it routine safety work; Anthropic played bouncer.",
    sources: [source.wiredOpenAI, source.techCrunchOpenAI],
    category: "Policy",
  },
  {
    date: "2025-08-27",
    slug: "claude-cybercrime-reports",
    period: "Aug 27, 2025",
    title: "Claude Code Lands in Crime Reports",
    summary:
      "Anthropic revealed Claude misuse tied to data extortion, North Korean fake job schemes, and AI-built ransomware. The safety-first model was already handy for crooks too.",
    sources: [source.anthropicAugustMisuse],
    category: "Safety",
  },
  {
    date: "2025-09-10",
    slug: "september-outage",
    period: "Sep 10, 2025",
    title: "Claude Goes Dark at Peak Demand",
    summary:
      "An outage knocked out Claude.ai, Console, and API. After a year full of rate-limit whining, the reliability saga earned another screenshot.",
    sources: [source.techCrunchOutageSep],
    category: "Reliability",
  },
  {
    date: "2025-09-17",
    slug: "september-postmortem",
    period: "Sep 17, 2025",
    title: "Anthropic Finally Admits Claude Got Dumber",
    summary:
      "Weeks of users yelling later, Anthropic said three infra bugs degraded answers from August into early September and explained why evals missed it. Useful confession, lousy timing.",
    sources: [source.anthropicSeptemberPostmortem],
    category: "Quality",
  },
  {
    date: "2025-09-25",
    slug: "pirated-books-settlement",
    period: "Sep 25, 2025",
    title: "Anthropic Pays $1.5B for Pirated Books",
    summary:
      "A judge preliminarily green-lit a $1.5 billion deal covering about 465,000 books at roughly $3,000 each. Anthropic ducked trial on the shadow-library claim, but the receipt is now public record.",
    sources: [source.apSettlement, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-11-13",
    slug: "claude-code-espionage",
    period: "Nov 13, 2025",
    title: "China-Linked Crew Weaponizes Claude Code",
    summary:
      "Anthropic says a China-tied group tricked Claude Code into probing around 30 targets, letting AI run most of the op. The agentic coding pitch met an agentic break-in.",
    sources: [source.anthropicEspionage],
    category: "Safety",
  },
  {
    date: "2026-01-11",
    slug: "xai-lockout",
    period: "Jan 2026",
    title: "xAI Gets the Rival Boot",
    summary:
      "xAI staff reportedly lost Claude access inside Cursor after Anthropic enforced its no-competitor clause. After Windsurf and OpenAI, the ban list looked like standard policy, not a one-off.",
    sources: [source.economicTimesXai, source.ventureBeatHarness],
    category: "Policy",
  },
  {
    date: "2026-01-27",
    slug: "clawdbot-rename-saga",
    period: "Jan 27-Feb 15, 2026",
    title: "Anthropic Lawyers vs. ClawdBot",
    summary:
      "Anthropic griped over Clawdbot's Claude-style branding, forcing Steinberger to rebrand to Moltbot, then OpenClaw. Weeks later he joined OpenAI to build personal agents.",
    sources: [
      source.businessInsiderClawdbotRename,
      source.lexOpenClawTranscript,
      source.reutersOpenClawOpenAI,
    ],
    category: "Legal",
  },
  {
    date: "2026-01-29",
    slug: "transparency-report-bans",
    period: "Jan 29, 2026",
    title: "Transparency: 1.45M Bans",
    summary:
      "Anthropic disclosed banning 1.45 million accounts from July-December 2025, plus 52,000 appeals and 1,700 reversals. The machinery is now visible; from the outside it still looks like 'fill the Google form and pray.'",
    sources: [source.anthropicTransparency],
    category: "Policy",
  },
  {
    date: "2026-02-23",
    slug: "distillation-attacks",
    period: "Feb 23, 2026",
    title: "Anthropic Cries Distillation Attack",
    summary:
      "Anthropic accused DeepSeek, Moonshot, and MiniMax of industrial-scale distillation after 24,000 fake accounts pumped out 16M Claude exchanges. Critics noted DeepSeek's slice was only 150K and Theo Browne said 16M is routine traffic for big chatbots.",
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
    slug: "pentagon-standoff",
    period: "Feb 26-27, 2026",
    title: "Pentagon Ultimatum, Anthropic Balks",
    summary:
      "Dario Amodei said Anthropic would not gut safeguards for mass domestic surveillance or fully autonomous weapons, even as the Pentagon threatened to yank contracts and invoke the Defense Production Act. The safety brand finally met procurement brass.",
    sources: [source.anthropicDeptWarStatement],
    category: "Policy",
  },
  {
    date: "2026-03-02",
    slug: "march-outage",
    period: "Mar 2-3, 2026",
    title: "Claude Buckles Under Demand",
    summary:
      "Usage spiked and Claude fell over in early March, followed by a run of status incidents. Anthropic's own page later showed sub-99% 90-day uptime for claude.ai, another reliability punchline.",
    sources: [source.tomsGuideMarchOutage, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-03-04",
    slug: "supply-chain-risk-designation",
    period: "Mar 4-12, 2026",
    title: "Pentagon Tags Anthropic Supply-Chain Risk",
    summary:
      "Anthropic said it got a March 4 letter branding it a supply-chain risk, then sued for emergency relief. A model-policy spat morphed into a defense-contracting death match.",
    sources: [
      source.anthropicDeptWarUpdate,
      source.techCrunchDoDLawsuit,
      source.reutersSupplyChainStay,
    ],
    category: "Policy",
  },
  {
    date: "2026-03-09",
    slug: "code-review-pricing",
    period: "Mar 9, 2026",
    title: "Claude Code Review Wants $25 per PR",
    summary:
      "Anthropic rolled out Claude Code Review and told teams to expect about $15-25 per review, billed by the token. Devs quickly compared it with CodeRabbit at $24/month or Greptile at $30 for 50 reviews plus $1 each after that.",
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
    slug: "claude-code-source-leak",
    period: "Mar 31-Apr 1, 2026",
    title: "Claude Code Leaks Half-Million Lines",
    summary:
      "A source-map snafu exposed roughly 500K lines of Claude Code guts, including architecture and unreleased features. Anthropic swears no customer data spilled, which is not the same as 'no harm done.'",
    sources: [source.axiosSourceLeak, source.theVergeSourceLeak, source.guardianSourceLeak],
    category: "Reliability",
  },
  {
    date: "2026-04-01",
    slug: "github-dmca-takedowns",
    period: "Apr 1, 2026",
    title: "Anthropic DMCA-Bombs GitHub",
    summary:
      "Trying to stuff the leak back in, Anthropic's takedown spree nuked thousands of GitHub repos, including some that had only forked the official Claude repo. The company later called the collateral damage accidental and reversed much of it, but bogus DMCA claims are risky and probably illegal.",
    sources: [source.techCrunchDMCA],
    category: "Legal",
  },
  {
    date: "2026-04-02",
    slug: "amd-regression-report",
    period: "Apr 2-14, 2026",
    title: "AMD AI Lead Files 'Claude Is Broken' Bug",
    summary:
      "An AMD AI leader filed a GitHub report saying Claude Code had regressed so badly it could not be trusted for complex tasks, backing it with thousands of sessions. The post helped turn gripes into a data-driven revolt before Anthropic admitted several product tweaks had broken things.",
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
    slug: "openclaw-claw-tax",
    period: "Apr 4, 2026",
    title: "OpenClaw Users Hit the Claw Tax",
    summary:
      "Anthropic told subscribers that Claude limits no longer cover third-party wrappers like OpenClaw; users had to burn API keys or pay separate usage bills. Build on Claude, then pay again when your tool gets hot.",
    sources: [source.techCrunchOpenClawPayExtra, source.theVergeOpenClaw],
    category: "Policy",
  },
  {
    date: "2026-04-10",
    slug: "openclaw-creator-banned",
    period: "Apr 10, 2026",
    title: "OpenClaw Creator Gets Banned Anyway",
    summary:
      "TechCrunch reported Anthropic briefly banned OpenClaw maker Peter Steinberger even after the new API-payment option arrived. The company later unbanned him, but the optics screamed walled-garden chaos.",
    sources: [source.techCrunchOpenClawBan],
    category: "Policy",
  },
  {
    date: "2026-04-12",
    slug: "cache-ttl-regression",
    period: "Mar 6-Apr 12, 2026",
    title: "Claude Code's Cache Amnesia: $1.5K Surprise",
    summary:
      'For 33 days in February Claude Code cached every prompt for an hour. On March 6 it silently dropped to 5 minutes, burning cash as cache expired mid-session and rebuilt 12.5 times faster. Three months later Sonnet users were out $949 each, Opus users $1,582. Anthropic admitted "bug" only after 120,000 API calls proved it.',
    sources: [source.githubCacheTTLRegression],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    slug: "april-login-outage",
    period: "Apr 15, 2026",
    title: "Claude Login Dies Again",
    summary:
      "Anthropic's status page said Claude.ai and Platform were down, Claude Code login failed, and API, Console, and Code were all hit before recovery. Another day, another 'is Claude broken?' meme.",
    sources: [source.anthropicStatusApr15, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    slug: "mcp-rce-expected-behavior",
    period: "Apr 15-16, 2026",
    title: "Anthropic Calls RCE 'Expected'",
    summary:
      "OX Security said Anthropic's MCP STDIO design could let attackers run commands across millions of users and hundreds of thousands of servers. Researchers claim Anthropic refused a protocol fix, calling the behavior expected and shoving sanitization onto devs.",
    sources: [source.oxMcpFlaw, source.theHackerNewsMcp, source.theRegisterMcp],
    category: "Safety",
  },
  {
    date: "2026-04-17",
    slug: "belo-lockout",
    period: "Apr 17-18, 2026",
    title: "Claude Locks Out 60 Workers via Google Form",
    summary:
      "Anthropic suspended over 60 Belo employees' Claude accounts for a vague policy breach, cutting off workflows and chat history. Access returned after about 15 hours as a false positive, but the only appeal was a generic Google Form.",
    sources: [source.tomsHardwareBelo, source.ndtvBelo],
    category: "Policy",
  },
  {
    date: "2026-04-21",
    slug: "claude-code-pro-paywall",
    period: "Apr 21-22, 2026",
    title: "Anthropic Experiments With $100 Claude Code Wall",
    summary:
      "Dev spotted Claude Code vanishing from the $20 Pro tier on Anthropic pricing pages, hinting at a jump to the $100 Max plan. Anthropic called it a 2% newbie test and reverted the docs, but the stunt handed OpenAI free ammo and made pricing look like quicksand.",
    sources: [source.businessInsiderProPlan, source.theRegisterProPlan],
    category: "Policy",
  },
  {
    date: "2026-04-22",
    slug: "no-kill-switch-filing",
    period: "Apr 22, 2026",
    title: "No Kill Switch Inside Classified Nets",
    summary:
      "In the Pentagon fight, Anthropic admitted that once Claude sits inside classified environments it cannot monitor, update, or shut itself off. The safety lever everyone imagined does not exist.",
    sources: [source.axiosNoKillSwitch, source.apNoKillSwitch],
    category: "Safety",
  },
  {
    date: "2026-04-23",
    slug: "april-postmortem",
    period: "Apr 23-24, 2026",
    title: "Anthropic Confirms Claude Code Was Nerfed",
    summary:
      "A second postmortem blamed the Claude Code slump on three tweaks: lower reasoning effort, a cache bug that made the model forgetful, and a brevity prompt that broke coding. Anthropic denied intentional downgrades and reset subscriber limits.",
    sources: [
      source.anthropicAprilPostmortem,
      source.fortuneClaudeCode,
      source.businessInsiderClaudeCode,
    ],
    category: "Quality",
  },
  {
    date: "2026-04-25",
    slug: "hermes-md-billing-bug",
    period: "Apr 25-26, 2026",
    title: "Anthropic Bills Extra If It Hates Your File Name",
    summary:
      "Claude Code's abuse filter flagged the exact-case string HERMES.md in recent commits as shady and routed Max requests to extra billing instead of quota. One Max 20x user burned $200.98 while 86% weekly capacity remained, then had to binary-search git history to find the magic word. HERMES.md is a legit AI-agent convention, not spam.",
    sources: [source.githubHermesBillingBug, source.redditHermesBillingBug],
    category: "Reliability",
  },
  {
    date: "2026-04-25",
    slug: "resume-crash-rollback",
    period: "Apr 25, 2026",
    title: "Claude Code Update Crashes on Resume",
    summary:
      "Anthropic's status page said Claude Code v2.1.120 crashed on --resume or --continue, forcing a rollback to v2.1.119. Right after the postmortem, the product served another tiny face-plant.",
    sources: [source.anthropicStatusApr25],
    category: "Reliability",
  },
  {
    date: "2026-05-13",
    slug: "agent-sdk-credit-bucket",
    period: "May 13, 2026",
    title: "Claude's 'Free Credits' Hide 25x Price Hike",
    summary:
      "Anthropic shoved Agent SDK, `claude -p`, Claude Code GitHub Actions, and third-party Agent SDK apps into a separate monthly credit bucket. Subscription caps stayed the same; programmatic Claude usage now burns API-priced credits that vanish fast or turn into a second bill.",
    sources: [
      source.claudeDevsAgentSdkCreditThread,
      source.claudeHelpAgentSdkPlanCredit,
      source.redditAgentSdkClarify,
    ],
    category: "Policy",
  },
  {
    date: "2026-06-09",
    slug: "fable-5-research-sabotage",
    period: "Jun 9-11, 2026",
    title: "Anthropic Cripples Frontier AI Research in Fable 5, Then Says Oops",
    summary:
      "Buried in Fable 5's 319-page system card, a silent rule dumbs down answers on pretraining, training infrastructure, or chip design. After 48 hours of backlash, Anthropic apologized, swapped it for a visible reroute to Opus 4.8, and admitted the replacement will overblock.",
    sources: [
      source.fortuneFableSabotage,
      source.decryptFableBacklash,
      source.decryptFableApology,
      source.interconnectsFableSafety,
    ],
    category: "Policy",
  },
  {
    date: "2026-06-12",
    slug: "fable-5-export-ban",
    period: "Jun 12-30, 2026",
    title: "US Government Recalls the 'Too Dangerous' Model",
    summary:
      "Three days after launch, Commerce hit Fable 5 and Mythos 5 with an export-control directive and Anthropic yanked both models worldwide. Amazon researchers had 'jailbroken' Fable into fixing known bugs; Dario spent years marketing models as too dangerous to release, and the government finally believed him.",
    sources: [
      source.anthropicFableMythosAccess,
      source.cnbcFableBan,
      source.forbesFableBan,
      source.theDecoderGpt2Mythos,
    ],
    category: "Policy",
  },
  {
    date: "2026-07-01",
    slug: "fable-5-redeployment",
    period: "Jul 1-7, 2026",
    title: "Fable Returns: 50% of Your Limits, 6 Days Only",
    summary:
      "Export controls lifted after tests showed Opus 4.8, GPT-5.5, and even Haiku matched the 'dangerous' capability. Fable 5 came back capped at 50% of weekly limits through July 7, then credits-only, with new classifiers that bounce routine coding to Opus. Subscribers got a taste, a timer, and a second bill.",
    sources: [
      source.anthropicRedeployingFable,
      source.theDecoderFableReturn,
      source.theDecoderGpt2Mythos,
    ],
    category: "Policy",
  },
  {
    date: "2026-07-07",
    slug: "fable-5-last-day-extension",
    period: "Jul 7-12, 2026",
    title: "Fable Gets a Last-Day Extension, Not a Reset",
    summary:
      "Claude extended Fable 5 subscription access through July 12 on the very day users expected the promo to end. The 50% weekly cap stayed, usage did not visibly reset, and the replies filled with people who had already burned the quota racing the old deadline.",
    sources: [
      source.claudeFableExtensionTweet,
      source.claudeHelpFablePromo,
      source.anthropicRedeployingFable,
      source.globalNerdyFableLastDay,
    ],
    category: "Policy",
  },
  {
    date: "2026-07-20",
    slug: "fable-5-plan-paywall",
    period: "Jul 18-20, 2026",
    title: "Fable 5: Half for Max, Metered for Pro",
    summary:
      "Anthropic made Fable 5 a standard benefit only for Max and premium seats, capped at 50% of their already-reduced weekly limits. Pro and Team Standard lost bundled access and got a one-time $100 credit instead—a number that sounds generous until one heavy Claude Code prompt can reportedly burn $50 or more.",
    sources: [
      source.claudeHelpFablePlan,
      source.claudeHelpFableCredits,
      source.claudeFablePlanSplitTweet,
      source.theDecoderFablePlanSplit,
    ],
    category: "Policy",
  },
];

export const categories = ["All", "Quality", "Reliability", "Legal", "Policy", "Safety"] as const;
