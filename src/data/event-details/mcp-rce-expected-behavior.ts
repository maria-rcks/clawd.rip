import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "mcp-rce-expected-behavior",
  deck: "OX Security disclosed that Anthropic's Model Context Protocol ships an execute-first, validate-never architecture across every official SDK, and Anthropic responded that this is the intended behavior.",
  body: [
    'On April 15, 2026, OX Security published <a href="https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/">"The Mother of All AI Supply Chains,"</a> identifying a systemic vulnerability in the core of Anthropic\'s Model Context Protocol that enables Arbitrary Command Execution on any system running a vulnerable MCP implementation. The flaw is not a traditional coding bug but an architectural design decision baked into Anthropic\'s official MCP SDKs across Python, TypeScript, Java, and Rust, meaning developers building on MCP unknowingly inherit the exposure. Researchers Moshe Siman Tov Bustan, Mustafa Naamnih, Nir Zadok, and Roni Bar had been investigating the issue since November 2025, with an earlier LangFlow disclosure landing on January 11, 2026.',
    'The root cause is MCP\'s STDIO transport, which routes user input directly into command execution. <a href="https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/">As OX described the logic,</a> it "lets anyone run any arbitrary OS command, if the command successfully creates an STDIO server it will return the handle" — and even on failure the command has already run before an error is returned, in what might be called an execute-first, validate-never pattern. This grants attackers access to sensitive user data, internal databases, API keys, and chat histories.',
    'OX counted the exposure at <a href="https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/">150 million+ downloads,</a> 7,000+ publicly accessible servers, up to 200,000 vulnerable instances total, and 200+ affected open-source projects. The team successfully executed commands on six live production platforms with paying customers and produced 10+ High/Critical CVEs from this single root cause. They uploaded proof-of-concept payloads to 11 MCP marketplaces or directories; <a href="https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/">9 published the malicious payload without any security review.</a> Named affected projects include LangFlow, with <a href="https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html">915+ publicly accessible instances found,</a> alongside GPT Researcher, Flowise, Upsonic (CVE-2026-30625), LiteLLM, Agent Zero, Bisheng, Langchain-Chatchat, Windsurf, and DocsGPT. Zero-click prompt-injection vectors were demonstrated in AI IDEs including Cursor, Windsurf, Claude Code, Gemini-CLI, and GitHub Copilot.',
    'Anthropic declined to modify the protocol\'s architecture. <a href="https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/">The company called the behavior "expected"</a> and stated the STDIO execution model "represents a secure default and that sanitization is the developer\'s responsibility," arguing exploitation requires explicit user permission or action such as approving file changes. One week after the report, Anthropic quietly updated its security policy and documentation to recommend caution with STDIO adapters, a change researchers said did not fix anything because it was documentation only. Anthropic did not respond to The Register\'s inquiries.',
    'Downstream projects tried to compensate. <a href="https://venturebeat.com/security/mcp-stdio-flaw-200000-ai-agent-servers-exposed-ox-security-audit">Flowise implemented input filtering</a> that allowlisted commands and stripped special characters, yet OX bypassed it in a single step using <code>npx</code>\'s <code>-c</code> flag, showing that when the architecture permits arbitrary subprocess execution, filtering cannot reliably close the gap. <a href="https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/">OX noted</a> that "One architectural change at the protocol level would have protected every downstream project, every developer, and every end user," and that "Shifting responsibility to implementers does not transfer the risk. It just obscures who created it."',
    'ESET security specialist Jake Moore framed the dilemma as a tradeoff baked into AI standards, saying <a href="https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/">"The issue isn\'t easily fixable without breaking functionality"</a> and that AI standards are currently built for "capability before control." The protocol continues to ship in its original form across the four official SDKs, with the architectural decision intact and sanitization delegated to whoever builds next.',
  ],
  receipts: [
    "150 million+ downloads and up to 200,000 vulnerable instances across 200+ open-source projects.",
    "11 proof-of-concept payloads uploaded to MCP marketplaces; 9 published without security review.",
    "OX executed commands on six live production platforms and produced 10+ High/Critical CVEs.",
    "LangFlow alone had 915+ publicly accessible instances found.",
    "Flowise's application-layer filter was bypassed in one step using npx's -c flag.",
    'Anthropic called the behavior "expected" and said STDIO "represents a secure default."',
  ],
  reactions: [
    {
      platform: "other",
      author: "Davi Ottenheimer (flyingpenguin)",
      meta: "Security blogger, opinion post on the OX report",
      quote: "Execute first, validate second. Fire, ready, aim fails any threat model.",
      url: "https://www.flyingpenguin.com/ox-security-report-anthropic-mcp-is-execute-first-validate-never/",
    },
    {
      platform: "other",
      author: "Davi Ottenheimer (flyingpenguin)",
      meta: "On Anthropic's response to the OX report",
      quote:
        "A documentation change. Not a code change. The vulnerability is there for you to step on like a land mine.",
      url: "https://www.flyingpenguin.com/ox-security-report-anthropic-mcp-is-execute-first-validate-never/",
    },
    {
      platform: "other",
      author: "Davi Ottenheimer (flyingpenguin)",
      meta: "On the contradiction with Anthropic's security product positioning",
      quote:
        "Why would you trust a company to find vulnerabilities in your code when it classifies arbitrary command execution in its own protocol as expected behavior?",
      url: "https://www.flyingpenguin.com/ox-security-report-anthropic-mcp-is-execute-first-validate-never/",
    },
    {
      platform: "news",
      author: "Jake Moore (ESET)",
      meta: "ESET Global Cybersecurity Advisor, quoted in TechTalks",
      quote: "AI standards are currently built for 'capability before control.'",
      url: "https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/",
    },
    {
      platform: "other",
      author: "Jiten Oswal (Medium)",
      meta: 'Opinion piece: "Is Anthropic\'s MCP Design Flaw a Bug or a Feature?"',
      quote:
        "Whether you view this as a design flaw or a feature, the risk to end-users is undeniable.",
      url: "https://medium.com/@jiten.p.oswal/the-200-000-server-question-is-anthropics-mcp-design-flaw-a-bug-or-a-feature-b120294f93a5",
    },
  ],
  images: [
    {
      src: "/events/mcp-rce-expected-behavior/anthropic-by-design-failure.png",
      alt: "OX Security graphic labeled Anthropic's By Design Failure at the Heart of the AI Ecosystem",
      caption:
        'OX Security graphic referencing Anthropic\'s "By Design" failure at the heart of the AI ecosystem. Credit: OX Security.',
      sourceUrl:
        "https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/",
      width: 1056,
      height: 656,
    },
  ],
  aftermath:
    'LiteLLM patched its own instance of the flaw (CVE-2026-30623) in <a href="https://docs.litellm.ai/blog/mcp-stdio-command-injection-april-2026">commit 7b7f304</a>, first stable in v1.83.7-stable, by restricting stdio commands to an allowlist and requiring PROXY_ADMIN role; the authenticated RCE was not exploitable unauthenticated. Anthropic\'s official MCP SDKs for Python, TypeScript, Java, and Rust remain unchanged at the protocol level, and the documentation update recommending caution with STDIO adapters is the only visible adjustment from the company that designed the standard. The supply-chain exposure persists for the estimated 150 million+ downloads and every downstream project that assumed the architecture was safe by default.',
};
