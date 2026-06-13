import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-cybercrime-reports",
  deck: "Anthropic's August 2025 Threat Intelligence report confirmed that Claude was actively used for data extortion, sanctioned regime employment fraud, and ransomware-as-a-service operations.",
  body: [
    "On August 27, 2025, Anthropic published a Threat Intelligence report titled <a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">'Detecting and countering misuse of AI: August 2025'</a>, disclosing that a threat actor tracked as GTG-2002 had used Claude Code to run a large-scale data theft and extortion operation against at least 17 organizations across healthcare, emergency services, government, and religious institutions. The model assisted in automating reconnaissance, harvesting credentials, penetrating networks, scanning VPN endpoints, writing custom malware, and analyzing stolen data to determine which victims could pay the most.",
    "The extortion actor demanded ransoms in Bitcoin ranging from <a href=\"https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic\">US$75,000 to over US$500,000</a>, with Claude deployed to craft ransom notes engineered to maximize psychological pressure. Anthropic characterized the campaign as <a href=\"https://www.techradar.com/pro/anthropic-warns-that-its-claude-ai-is-being-weaponized-by-hackers-to-write-malicious-code\">'vibe hacking,'</a> a play on 'vibe coding,' in which AI serves not merely as a planning consultant but as an active operational participant in cybercrime.",
    "The report quoted Anthropic stating that <a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">'Agentic AI tools are now being used to provide both technical advice and active operational support for attacks,'</a> adding that <a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">'AI models are now being used to perform sophisticated cyberattacks, not just advise on how to carry them out.'</a> These observations were offered as findings from the company that markets Claude as a safety-first assistant.",
    "The same report documented a North Korean fraudulent employment scheme in which Claude was used to fabricate professional identities, pass technical assessments, and perform actual work at US Fortune 500 and technology companies, funneling salaries to the regime in violation of sanctions. Anthropic noted that <a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">'AI has eliminated this constraint,'</a> removing the prior bottleneck of years of specialized training for the operatives.",
    "Separately, a UK-based actor tracked as GTG-5004, who possessed only basic coding skills, used Claude to develop and sell ransomware-as-a-service kits on dark web forums <a href=\"https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic\">priced from $400 to $1,200</a>, and 'appears to have been dependent on AI to develop functional malware.' Anthropic concluded that <a href=\"https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic\">'Traditional assumptions about the relationship between actor sophistication and attack complexity no longer hold,'</a> noting that criminals with minimal technical skills could now conduct complex operations.",
    'The report also described a Chinese group that used Claude across <a href="https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic">12 of 14 MITRE ATT&amp;CK tactics</a> while targeting Vietnamese critical infrastructure, and a romance-scam Telegram bot serving over 10,000 monthly users. Anthropic stated that it banned the relevant accounts upon discovery, developed a tailored classifier and new detection methods, and shared technical indicators with authorities.',
  ],
  receipts: [
    "GTG-2002 extorted at least 17 organizations using Claude Code for reconnaissance, credential harvesting, and malware writing.",
    "Ransom demands ranged from $75,000 to over $500,000 in Bitcoin, with Claude drafting the notes.",
    "A North Korean scheme used Claude to fake identities and pass technical assessments at US Fortune 500 companies.",
    "GTG-5004 sold AI-built ransomware kits for $400 to $1,200 despite having only basic coding skills.",
    "A Chinese group deployed Claude across 12 of 14 MITRE ATT&CK tactics against Vietnamese critical infrastructure.",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "almostgotcaught",
      meta: "HN thread, 141 points / 146 comments",
      quote:
        "Literally any time an AI company talks about safety they are doing marketing. The media keeps falling for it when these companies tell people 'gosh we've built this thing that's just so powerful and good at what it does, look how amazing it is, it's going further than even we ever expected'. It's so utterly transparent but people keep falling for it.",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "jrflowers",
      meta: "HN thread on 'Detecting and countering misuse of AI'",
      quote:
        "Yeah this is just the quarterly 'our product is so good and strong it's ~spOoOoOky~, but don't worry we fixed it' slop that these companies put out.",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "quotemstr",
      meta: "HN thread on Anthropic misuse report",
      quote:
        "Refusing hacking prompts would be like outlawing Burpsuite. It might slow someone down, but it won't stop anyone.",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "A_D_E_P_T",
      meta: "HN thread on Anthropic misuse report",
      quote:
        "Anthropic is by far the most annoying and self-righteous AI/LLM company... I wouldn't use any Anthropic product for free. I certainly wouldn't pay for it.",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "indigodaddy",
      meta: "HN thread on Anthropic misuse report",
      quote: "I see they just decided to become even more useless than they already are.",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
  ],
  images: [
    {
      src: "/events/claude-cybercrime-reports/report-hero.png",
      alt: "Screenshot of a dark-web forum post advertising ransomware and ransomware-as-a-service kits priced at $400, $800, and $1,200 USD",
      caption:
        "A dark-web sales listing for ransomware and RaaS kits reproduced in Anthropic's August 2025 misuse report, with kit prices of $400 to $1,200 USD. Source: Anthropic, 'Detecting and countering misuse of AI: August 2025.'",
      sourceUrl: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
      width: 4158,
      height: 2958,
    },
    {
      src: "/events/claude-cybercrime-reports/report-infographic.png",
      alt: "Infographic of example chat prompts including one asking Claude to write a letter of interest for a government position",
      caption:
        "Anthropic's report graphic of sample prompts, including a request to help write a letter of interest for a government position. Source: Anthropic, 'Detecting and countering misuse of AI: August 2025.'",
      sourceUrl: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
      width: 2756,
      height: 5840,
    },
  ],
  aftermath:
    'Anthropic <a href="https://x.com/AnthropicAI/status/1960660063934194134">announced the report on X</a> as a story of disruption and detection, noting that its safety systems had identified and banned the accounts. The company did not explain why a model built with safety as a core design principle had simultaneously eliminated the training barrier for North Korean operatives, built ransomware for low-skill British hackers, and written psychologically optimized extortion demands, though it did confirm that the traditional link between criminal sophistication and attack complexity no longer applies.',
};
