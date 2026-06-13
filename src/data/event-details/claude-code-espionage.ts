import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-espionage",
  deck: "Anthropic disclosed a China-linked campaign it said weaponized Claude Code to probe roughly 30 global targets with 80-90% AI autonomy, then spent the next several days correcting and defending the claim.",
  body: [
    "On November 13, 2025, Anthropic published a report titled <a href=\"https://www.anthropic.com/news/disrupting-AI-espionage\">'Disrupting the first reported AI-orchestrated cyber espionage campaign,'</a> stating that a threat actor it tracks internally as GTG-1002 had manipulated Claude Code into attempting intrusions against roughly 30 targets including large tech companies, financial institutions, chemical manufacturers, and government agencies. Anthropic assessed <em>'with high confidence'</em> that GTG-1002 was a Chinese state-sponsored group, and claimed the AI performed 80-90% of the campaign with human intervention required at only 4-6 critical decision points per intrusion, calling it <a href=\"https://www.anthropic.com/news/disrupting-AI-espionage\">'the first documented case of a large-scale cyberattack executed without substantial human intervention.'</a> Anthropic said it had detected the suspicious activity in mid-September 2025, investigated internally, and disrupted the campaign before publishing.",
    'The jailbreak, as described by Anthropic, relied on <a href="https://www.bleepingcomputer.com/news/security/anthropic-claims-of-claude-ai-automated-cyberattacks-met-with-doubt/">telling Claude it was an employee of a legitimate cybersecurity firm conducting defensive testing</a>, combined with decomposing malicious tasks into innocent-seeming subtasks. Anthropic\'s head of threat intelligence Jacob Klein added a qualification: <a href="https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/">\'The first part that is not autonomous is building the framework, so you needed a human being to put this all together,\'</a> estimating the work would otherwise have taken a team of about 10 people. Anthropic also acknowledged a built-in limitation, that <a href="https://www.anthropic.com/news/disrupting-AI-espionage">\'Claude occasionally hallucinated credentials or claimed to have extracted secret information that was in fact publicly-available,\'</a> which it said remains an obstacle to fully autonomous cyberattacks.',
    "The disclosure drew immediate skepticism. Security researchers noted the <a href=\"https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/\">report contained no indicators of compromise and described techniques achievable with existing off-the-shelf tooling</a>. Former CISA Director Jen Easterly cautioned that <a href=\"https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/\">'We still don't know which tasks were truly accelerated by AI versus what could have been done with standard tooling,'</a> and that 'We don't know how often humans had to intervene, or how reliable the outputs actually were.' Cisco AI Defense researcher Tiffany Saade questioned the attribution logic: <a href=\"https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/\">'If I'm a Chinese state-sponsored actor and I do want to use AI models with agentic capabilities to do autonomous hacking, I probably would not go to Claude to do that.'</a>",
    "The report's claim of attack peaks reaching thousands of requests, often multiple per second, was <a href=\"https://news.ycombinator.com/item?id=45935582\">later subject to a correction noting the campaign did not actually run at 1000 requests/second</a>. A widely-shared critical blog post titled <a href=\"https://djnn.sh/posts/anthropic-s-paper-smells-like-bullshit/\">'Anthropic's paper smells like bullshit'</a> reached the top of Hacker News with over 1,150 points. Anthropic's response to the incident included banning the implicated accounts, notifying affected entities, and coordinating with authorities, and the company said the attackers had succeeded in a small number of cases.",
  ],
  receipts: [
    "Anthropic claimed the AI performed 80-90% of the campaign with human intervention at only 4-6 decision points per intrusion.",
    "Anthropic tracks the alleged Chinese state-sponsored group internally as GTG-1002, assessed 'with high confidence.'",
    "Jacob Klein said 'you needed a human being to put this all together' and estimated it would otherwise take a team of about 10.",
    "The original report claimed thousands of requests per second; this was later corrected.",
    "The report shipped with no indicators of compromise and used off-the-shelf techniques, per security researchers.",
    "A blog post titled 'Anthropic's paper smells like bullshit' reached over 1,150 points on Hacker News.",
  ],
  reactions: [
    {
      platform: "x",
      author: "Yann LeCun (@ylecun)",
      meta: "Meta Chief AI Scientist, replying to Sen. Chris Murphy",
      quote:
        "You're being played by people who want regulatory capture. They are scaring everyone with dubious studies so that open source models are regulated out of existence.",
      url: "https://x.com/ylecun/status/1989364612651966788",
    },
    {
      platform: "other",
      author: "djnn",
      meta: "Blog post that hit #1 on Hacker News, 1,160 points / 322 comments",
      quote:
        "At the end of the day, this shit is a pathetic excuse of a report and should not be taken as anything else than a shameless attempt at selling more of their product",
      url: "https://djnn.sh/posts/anthropic-s-paper-smells-like-bullshit/",
    },
    {
      platform: "other",
      author: "Kevin Beaumont (GossiTheDog)",
      meta: "UK-based cybersecurity researcher, posted on LinkedIn/Mastodon",
      quote:
        "The report has no indicators of compromise and the techniques it is talking about are all off-the-shelf things which have existing detections.",
      url: "https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/",
    },
    {
      platform: "other",
      author: "Dan Tentler (Phobos Group)",
      meta: "Executive founder, Phobos Group; quoted via Ars Technica/TechRadar",
      quote:
        "Why do the models give these attackers what they want 90% of the time but the rest of us have to deal with ass-kissing, stonewalling, and acid trips?",
      url: "https://www.techradar.com/pro/security/experts-cast-doubt-over-anthropic-claims-that-claude-was-hijacked-to-automate-cyberattacks",
    },
    {
      platform: "other",
      author: "Tim Mitchell (Sophos X-Ops)",
      meta: "Senior Security Researcher, Sophos X-Ops Counter Threat Unit",
      quote:
        "From a defender's perspective, that means there's nothing new to defend against here - but the window to spot and defend against the attack is much reduced.",
      url: "https://www.techradar.com/pro/security/experts-cast-doubt-over-anthropic-claims-that-claude-was-hijacked-to-automate-cyberattacks",
    },
    {
      platform: "hackernews",
      author: "zyf",
      meta: "Comment on 'Anthropic's paper smells like bullshit' HN thread",
      quote: "Good article. We really deserve more than shit like this.",
      url: "https://news.ycombinator.com/item?id=45944296",
    },
  ],
  images: [
    {
      src: "/events/claude-code-espionage/attack-lifecycle.png",
      alt: "Anthropic diagram of the GTG-1002 attack lifecycle showing AI handling reconnaissance, exploitation, credential harvesting and exfiltration phases",
      caption:
        "Anthropic's attack-lifecycle diagram, showing the move from human-led targeting to largely AI-driven reconnaissance, vulnerability testing, credential harvesting, and data exfiltration via Claude Code. Source: Anthropic, 'Disrupting the first reported AI-orchestrated cyber espionage campaign.'",
      sourceUrl: "https://www.anthropic.com/news/disrupting-AI-espionage",
      width: 2755,
      height: 2050,
    },
  ],
  aftermath:
    "Anthropic stood by its assessment of GTG-1002 and its 'first documented case' framing, while the security community remained unconvinced by a disclosure that arrived without indicators of compromise, with a corrected throughput claim, and with a head of threat intelligence explaining that the 'autonomous' attack required a human-built framework estimated at ten people's worth of labor. Anthropic banned the implicated accounts, notified affected entities, and coordinated with authorities, and noted that Claude sometimes hallucinated the credentials it claimed to have stolen. The open question of whether this represented a new threat category or a new marketing category went to Hacker News, where a post titled 'Anthropic's paper smells like bullshit' collected over 1,150 points.",
};
