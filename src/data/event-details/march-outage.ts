import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "march-outage",
  deck: "A Pentagon-adjacent competitor exodus sent Claude to #1 on the App Store, and then sent it offline twice in 24 hours.",
  body: [
    'On March 2, 2026, Claude went down globally. The disruption began around 11:49 UTC, taking out claude.ai, the mobile apps, and <code>Claude Code</code> and affecting authentication and frontend flows worldwide, while the core developer API stayed largely functional, according to <a href="https://tbreak.com/claude-ai-outage-march-2026-global/">Tbreak</a>. Anthropic acknowledged the problem on its status page roughly 17 minutes later, with the first "Investigating" notice identifying frontend and login system failures, per <a href="https://cybernews.com/news/claude-down-major-outage-worldwide/">Cybernews</a>. The incident hit Claude Opus 4.6, Claude Haiku 4.5, Claude Console, and Claude Code, producing failed requests, timeouts, and inconsistent responses across web, mobile, and some API methods, as <a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-a-worldwide-outage/">BleepingComputer</a> reported. At its peak, more than 2,000 users had flagged problems on Downdetector, with hundreds more reports continuing through the day.',
    'The surge was not a supply-chain issue. Anthropic cited "unprecedented demand" and said in a statement, <em>"Claude is back up and running across claude.ai and our apps. We\'re grateful to our users while the team works to match the incredible demand we\'ve seen for Claude in recent days,"</em> according to <a href="https://www.storyboard18.com/digital/claude-back-online-after-outage-as-anthropic-cites-unprecedented-demand-91162.htm">Storyboard18</a>. The demand came from the "#QuitGPT" movement: backlash over OpenAI\'s reported deal to deploy its models within US defense and Pentagon networks, a contract Anthropic reportedly refused, prompted a mass migration, and US ChatGPT uninstalls jumped roughly 295% day-over-day, the same report noted. A company that had just declined the military contract was rewarded with the traffic anyway.',
    'The migration had charts to match. Claude reached #1 on the US Apple App Store for the first time on March 1, 2026, briefly surpassing ChatGPT, with US downloads rising 37% on February 28 and 51% on March 1, per <a href="https://lumichats.com/blog/quitgpt-chatgpt-boycott-pentagon-deal-complete-story-2026">LumiChats</a>. Anthropic also reported a roughly 60% increase in free active users and daily signups quadrupling. The celebration did not last: a second outage hit within 24 hours of the first, with <a href="https://x.com/ETtech/status/2028696457340223961">ETtech</a> reporting more than 4,000 users in the US and around 300 in India reporting problems, mostly with Claude chat, after the March 2 disruption already took Claude down across several regions.',
    'This was not a regional blip. The outage spanned North America, Europe, Asia, and Africa, and <a href="https://tbreak.com/claude-ai-outage-march-2026-global/">Tbreak</a> noted Claude\'s reported uptime had been 99.36% over the previous 90 days before the incident. Anthropic\'s fixes on March 2 were not one-shot, either: status updates logged recurring issues at 18:07, 18:18, and 18:54 UTC before the disruption was contained, <a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-a-worldwide-outage/">BleepingComputer</a> reported. <a href="https://www.bloomberg.com/news/articles/2026-03-02/anthropic-s-claude-chatbot-goes-down-for-thousands-of-users">Bloomberg</a> confirmed that same day that Claude was down for thousands of users amid the "unprecedented demand."',
    'By June 2026, Anthropic\'s own status page showed a 90-day uptime of 98.85% for claude.ai, below 99%, with core surfaces hovering just above it: Claude API 99.2%, Claude Code 99.05%, Claude Console 99.33%, and Claude Cowork 99.49%, per <a href="https://status.claude.com/">status.claude.com</a>. The reliability issues kept coming through March 2026, with logged outages on March 19, 21, 22, and 23, and two separate disruptions on March 25: a 3 hour 35 minute Opus 4.6 elevated-errors event and a 4 hour 12 minute API/Cowork outage, according to <a href="https://statusgator.com/services/claude/outage-history">StatusGator</a>. A product famous for refusing the Pentagon contract spent the rest of the month proving it could not quite handle the civilians, either.',
  ],
  receipts: [
    'Disruption began around 11:49 UTC on March 2, 2026; Anthropic posted its first "Investigating" notice roughly 17 minutes later.',
    "More than 2,000 users reported problems on Downdetector at the peak.",
    'Anthropic cited "unprecedented demand" after traffic driven by the "#QuitGPT" backlash; US ChatGPT uninstalls rose roughly 295% day-over-day.',
    "Claude hit #1 on the US Apple App Store on March 1, 2026, with daily signups quadrupling.",
    "A second outage within 24 hours produced over 4,000 US reports and around 300 in India.",
    "By June 2026, status.claude.com showed claude.ai at 98.85% 90-day uptime, below 99%.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@ETtech",
      meta: "Economic Times tech account",
      quote:
        "Claude down: Second outage in 24 hours, affects users across regions. Over 4,000 US users and around 300 in India reported problems, mostly with Claude chat. During the first outage on March 2, the chatbot went down across several regions from around 5-8 pm.",
      url: "https://x.com/ETtech/status/2028696457340223961",
    },
    {
      platform: "x",
      author: "@pressenterprise",
      meta: "The Press-Enterprise",
      quote: "Anthropic's chatbot Claude goes down amid 'unprecedented demand'",
      url: "https://x.com/pressenterprise/status/2028551806725312723",
    },
    {
      platform: "other",
      author: "Jim Manzon (Medium)",
      meta: "Medium writeup paraphrasing an affected user",
      quote:
        "Claude's instability had stalled their work multiple times, forcing them to rethink dependency on a single AI provider.",
      url: "https://medium.com/@manzonjj/why-claude-keeps-crashing-unprecedented-demand-fragile-infrastructure-and-a-second-outage-in-24-50a64469e869",
    },
  ],
  images: [],
  aftermath:
    "As of June 2026, Anthropic's status page still lists claude.ai at 98.85% ninety-day uptime, below the 99% threshold it had previously cleared, while the string of March incidents suggests the demand spike left the service underprovisioned well beyond the initial weekend.",
};
