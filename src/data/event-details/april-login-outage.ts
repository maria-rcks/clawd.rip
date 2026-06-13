import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "april-login-outage",
  deck: "On April 15, 2026, Anthropic's status page recorded another roughly three-hour Claude outage involving elevated errors across Claude.ai, the API, and Claude Code login.",
  body: [
    'Anthropic\'s status page posted an incident titled <a href="https://status.claude.com/incidents/f00h6l76tsjs">"Elevated errors on Claude.ai, API, Claude Code"</a> at 14:53 UTC, or 10:53 AM ET, stating, <em>"We are seeing increased errors on Claude.ai, API, and Claude Code."</em> The entry covered Claude.ai, the API at <code>api.anthropic.com</code>, the Claude Console at <code>platform.claude.com</code>, and Claude Code. It was marked Resolved roughly three hours later, slotting alongside earlier Claude.ai and Claude Code login failures on March 2 and March 11/17, 2026.',
    "Downdetector's official X account reported that <a href=\"https://x.com/downdetector/status/2044429489136894121\">user reports indicated problems starting at 10:55 AM EDT</a>, two minutes after Anthropic's first post. Report volume climbed from more than 7,000 at 8:02 AM PT to more than 15,000 by 8:25 AM PT, then past 20,000 by 8:39 AM PT, 22,000 by 8:57 AM PT, and finally more than 30,000 by 9:45 AM PT. Users reported login failures, incomplete responses, stream timeouts, and unexpected messages claiming they had hit usage limits despite recent inactivity.",
    'The API recovered first. Anthropic marked the issue Identified with a fix in progress around 15:03 to 15:20 UTC, and the Claude API was restored at <a href="https://status.claude.com/incidents/f00h6l76tsjs">16:01 UTC</a>, which was about 8:01 AM PT. Even after that restoration, the status page showed that <a href="https://www.ibtimes.com.au/claude-down-now-claude-ai-outage-hits-users-hard-anthropics-chatbot-down-again-april-15-2026-1866682">Claude.ai and Platform were down around 15:40 UTC</a>, and Claude Code login remained broken. Users already logged into Claude Code could continue working, but new logins, which authenticate through Claude.ai, were blocked.',
    'The incident was marked fully resolved at <a href="https://status.claude.com/incidents/f00h6l76tsjs">17:42 UTC</a>, or 1:42 PM ET, making the total outage roughly three hours from 10:53 AM ET to 1:42 PM ET. Anthropic did not publicly disclose a root cause, describing the event only as elevated errors and a login/authentication failure. The status page offered no further technical detail.',
    'By the time service returned, the April 15 event had become part of a recognizable rhythm. Anthropic\'s status history already showed comparable Claude.ai and Claude Code login failures on <a href="https://www.techradar.com/news/live/claude-anthropic-down-outage-march-11-2026">March 2 and March 11/17, 2026</a>, suggesting that spring 2026 was not a season of uninterrupted access.',
  ],
  receipts: [
    "Anthropic first posted it was investigating at 14:53 UTC (10:53 AM ET) on April 15, 2026.",
    "Downdetector reports exceeded 30,000 by 9:45 AM PT.",
    "The API recovered at 16:01 UTC, but Claude.ai and Platform remained down past 15:40 UTC.",
    "Claude Code users already logged in could keep working; new logins were blocked.",
    "The incident lasted roughly three hours, resolving at 17:42 UTC (1:42 PM ET) with no root cause disclosed.",
    "Similar outages hit on March 2 and March 11/17, 2026.",
  ],
  reactions: [
    {
      platform: "x",
      author: "@downdetector",
      meta: "Downdetector official outage-tracking account, posted during the outage",
      quote:
        "User reports indicate problems with Claude AI since 10:55 AM EDT. How is it affecting you? #ClaudeAiDown",
      url: "https://x.com/downdetector/status/2044429489136894121",
    },
    {
      platform: "x",
      author: "@mustafaergisi",
      meta: "Individual user, posted in the April 15, 2026 outage window",
      quote: "is Claude down ?",
      url: "https://x.com/mustafaergisi/status/2044429180322898407",
    },
    {
      platform: "x",
      author: "@Gemini",
      meta: "News/aggregator account, same April 15, 2026 timeframe",
      quote: "JUST IN: Claude AI experiencing widespread issues right now and down for some users",
      url: "https://x.com/Gemini/status/2044435189045076332",
    },
    {
      platform: "x",
      author: "@isdownapp",
      meta: "IsDown.app status-monitoring account",
      quote:
        "Is Claude down for you? 🚨 Users are reporting problems with Claude #claude-aidown. Repost if you are having issues.",
      url: "https://x.com/isdownapp/status/2048106943873486948",
    },
  ],
  images: [],
  aftermath:
    "Anthropic has not provided a root cause for the April 15, 2026 outage, leaving the status page description at elevated errors and authentication failure. The incident sits alongside the March 2 and March 11/17 disruptions in Anthropic's 2026 reliability history, and the status page shows no additional post-mortem.",
};
