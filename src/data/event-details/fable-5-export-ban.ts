import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fable-5-export-ban",
  deck: "On June 12, 2026 — three days after Fable 5 launched — the US government hit Anthropic with an export-control directive over a jailbreak Amazon researchers reported, forcing both Fable 5 and Mythos 5 offline worldwide. After years of Anthropic marketing its frontier models as almost too dangerous to exist, the government finally took the pitch literally.",
  body: [
    'At 5:21 PM ET on June 12, 2026, the US government issued an <a href="https://www.anthropic.com/news/fable-mythos-access">export-control directive citing national security authorities</a>, requiring Anthropic to suspend all access to Fable 5 and Mythos 5 by any foreign national — including Anthropic\'s own employees. Since Anthropic could not verify user nationality in real time, the company <a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html">disabled both models for every customer on Earth</a>, three days after the June 9 launch.',
    'The trigger was almost comically small. Per <a href="https://www.forbes.com/sites/anishasircar/2026/06/16/anthropic-disabled-fable-5-and-mythos-5-after-a-us-export-control-order-heres-what-happened/">Wall Street Journal and Semafor reporting</a>, Amazon CEO Andy Jassy alerted Treasury Secretary Scott Bessent that Amazon researchers had used Fable 5 to obtain "information that could be used in cyberattacks" — a jailbreak Anthropic described as <a href="https://www.anthropic.com/news/fable-mythos-access">"essentially consisting of asking the model to read a specific codebase and fix any software flaws."</a> The vulnerabilities it surfaced were "a small number of previously known, minor vulnerabilities" that, per Anthropic, "other publicly-available models are able to discover as well." Commerce Secretary Howard Lutnick issued the order anyway, and White House adviser David Sacks claimed Anthropic had <a href="https://www.forbes.com/sites/anishasircar/2026/06/16/anthropic-disabled-fable-5-and-mythos-5-after-a-us-export-control-order-heres-what-happened/">refused to fix the jailbreak</a>.',
    'Anthropic protested that <a href="https://www.anthropic.com/news/fable-mythos-access">"we disagree that a narrow potential jailbreak should cause recalling a model deployed to hundreds of millions"</a> — but the company had spent months writing the government\'s script for it. <a href="https://www.anthropic.com/glasswing">Project Glasswing launched in April</a> warning that Mythos-class models could surpass almost all humans at finding and exploiting vulnerabilities and could make cyberattacks cheaper, more frequent, and more destructive; the <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5">June 9 launch post</a> crowned Mythos 5 with "the strongest cybersecurity capabilities of any model in the world" and warned of "significant risks." Anthropic deemed it <a href="https://www.forbes.com/sites/anishasircar/2026/06/16/anthropic-disabled-fable-5-and-mythos-5-after-a-us-export-control-order-heres-what-happened/">"too powerful in the cybersecurity domain to release publicly,"</a> touting stats like <a href="https://the-decoder.com/from-gpt-2-to-claude-mythos-the-return-of-ai-models-deemed-too-dangerous-to-release/">181 working exploits versus 2 for Opus 4.6</a> and a 27-year-old OpenBSD bug. Days before launch, Dario Amodei had reportedly gone to Washington describing what he\'d built in cyber-weapon terms. When the recall came, the fearmongering had simply been marked to market.',
    'It was a well-worn playbook. Dario Amodei was OpenAI\'s research director in February 2019, when the lab <a href="https://the-decoder.com/from-gpt-2-to-claude-mythos-the-return-of-ai-models-deemed-too-dangerous-to-release/">withheld the full GPT-2 model as too dangerous to release</a> — a 1.5-billion-parameter text generator whose feared harms never materialized and which shipped in full nine months later. Simon Willison put the tension plainly: <a href="https://the-decoder.com/from-gpt-2-to-claude-mythos-the-return-of-ai-models-deemed-too-dangerous-to-release/">"Saying \'our model is too dangerous to release\' is a great way to build buzz."</a> Seven years on, the buzz finally attracted a regulator with a kill switch — and it was a competitor and part-owner, Amazon, that pulled the alarm.',
    'The security community sided against the ban, not the model. A <a href="https://www.cybersecuritydive.com/news/anthropic-us-government-export-ban-mythos-fable/822909/">cybersecurity-expert open letter</a> argued the order "has taken the best models away from defenders" without meaningful risk reduction, Katie Moussouris flatly said the alleged exploit <a href="https://thenextweb.com/news/fable-5-ban-cybersecurity-defenders-open-letter">"is not a jailbreak,"</a> and Chinese lab Zhipu gleefully cited the blackout as proof that <a href="https://thenextweb.com/news/fable-5-ban-cybersecurity-defenders-open-letter">US AI services were unreliable</a>.',
    'The suspension itself was chaos: paying subscribers lost the model they had upgraded for overnight, with Anthropic\'s <a href="https://x.com/AnthropicAI/status/2065597531644743999">"we believe this is a misunderstanding"</a> statement racking up 92 million views while replies filled with refund demands, GPT-2 comparisons, and screenshots of $200 Max plans bought days earlier.',
  ],
  receipts: [
    "The directive landed at 5:21 PM ET on June 12 — three days after Fable 5's June 9 launch.",
    'The "jailbreak": asking the model to read a codebase and fix its software flaws.',
    "The vulnerabilities were previously known, minor, and findable by other public models — Anthropic said so on day one.",
    "Amazon — an investor with tens of billions in Anthropic — reported the jailbreak; CEO Andy Jassy alerted the Treasury Secretary directly.",
    "Mythos 5 was already Glasswing-only because Anthropic called it too powerful in cybersecurity to release publicly — 'the strongest cybersecurity capabilities of any model in the world.'",
    'Dario Amodei was OpenAI\'s research director during the 2019 GPT-2 "too dangerous to release" staged rollout.',
    "Anthropic's suspension announcement on X drew ~92 million views.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@AnthropicAI",
      meta: "Jun 13, 2026 · ~88K likes · 92M views",
      quote:
        "The US government... has issued an export control directive to suspend all access to Fable 5 and Mythos 5 by any foreign national... The net effect... is that we must abruptly disable Fable 5 and Mythos 5 for all our customers... We believe this is a misunderstanding.",
      url: "https://x.com/AnthropicAI/status/2065597531644743999",
    },
    {
      platform: "x",
      author: "@markvalorian",
      meta: "Jun 13, 2026 · ~5.1K likes · reply to Anthropic's announcement",
      quote:
        "You people torpedoed your own initiative with this fear mongering nonsense. Just supply the models to willing buyers.",
      url: "https://x.com/AnthropicAI/status/2065597531644743999",
    },
    {
      platform: "x",
      author: "@apples_jimmy (Jimmy Apples)",
      meta: "Jun 13, 2026 · ~4.5K likes",
      quote: "I mean it's what Dario's been asking for",
      url: "https://x.com/apples_jimmy/status/2065599714746352056",
    },
    {
      platform: "x",
      author: "@IntCyberDigest",
      meta: "Jun 13, 2026 · ~7.2K likes · 2.7M views",
      quote:
        "Amazon researchers snitched to the US government about jailbreaking Fable 5 and Mythos 5, forcing Anthropic to immediately shut down worldwide access.",
      url: "https://x.com/IntCyberDigest/status/2065702754434064851",
    },
    {
      platform: "x",
      author: "@ai_for_success",
      meta: "Jun 13, 2026",
      quote:
        "Result of Dario fear mongering.. Imagine how wild it is for non US Anthropic employees.",
      url: "https://x.com/ai_for_success/status/2065611205839094096",
    },
    {
      platform: "x",
      author: "@Tradermayne",
      meta: "Jun 13, 2026 · ~6.3K likes",
      quote: "I was almost done vibe coding GTA 7",
      url: "https://x.com/Tradermayne/status/2065617742854504659",
    },
    {
      platform: "news",
      author: "Katie Moussouris (Luta Security)",
      meta: "Quoted in coverage of the cybersecurity community's open letter against the ban",
      quote: "The alleged exploit is not a jailbreak.",
      url: "https://thenextweb.com/news/fable-5-ban-cybersecurity-defenders-open-letter",
    },
    {
      platform: "news",
      author: "Cybersecurity-expert open letter",
      meta: "Signed by security practitioners; via Cybersecurity Dive, Jun 15, 2026",
      quote:
        "The ban has taken the best models away from defenders — without meaningful risk reduction.",
      url: "https://www.cybersecuritydive.com/news/anthropic-us-government-export-ban-mythos-fable/822909/",
    },
    {
      platform: "x",
      author: "@ns123abc",
      meta: "Jun 19, 2026 · ~8.2K likes · 2.4M views",
      quote:
        "June 9: Amazon researchers report a jailbreak... June 12: US government shuts down... it was a competitor, and a part-owner, that turned Anthropic in. Amazon.",
      url: "https://x.com/ns123abc/status/2068051762708099449",
    },
  ],
  aftermath:
    'The rationale disintegrated on contact with testing: <a href="https://the-decoder.com/anthropics-fable-5-is-back-worldwide-after-a-two-week-government-ban-over-a-jailbreak/">Claude Opus 4.8, GPT-5.5, and Kimi K2.7 all reproduced the identical exploitation demonstration</a> Amazon had flagged — none of them under export controls. Mythos 5 access was <a href="https://www.cybersecuritydive.com/news/anthropic-ai-mythos-fable-reenable/824214/">restored for vetted US organizations on June 26</a>, and on June 30 the Commerce Department notified Anthropic that the export controls were lifted, with <a href="https://easternherald.com/2026/07/02/anthropic-fable-5-restored-export-controls-lifted/">no explanation of why a capability present in three competing models justified restricting only one of them for three weeks</a>. What subscribers got back on July 1 was another story entirely.',
};
