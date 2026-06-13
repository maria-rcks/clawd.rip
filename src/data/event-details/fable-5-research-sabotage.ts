import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fable-5-research-sabotage",
  deck: "Anthropic released Claude Fable 5 on June 9, 2026 with a 319-page system card containing invisible safeguards that secretly degraded answers for AI researchers; after roughly 48 hours of backlash it apologized and replaced them with a visible Opus 4.8 reroute that it admitted would overblock.",
  body: [
    'Anthropic <a href="https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/">released Claude Fable 5 on June 9, 2026</a>, days after warning that AI was getting too dangerous, in a launch led by <a href="https://futurism.com/artificial-intelligence/anthropic-concerned-models-ability-improve-itself">CEO Dario Amodei</a>. The release was paired with a report titled <em>when AI builds itself</em>, which warned that self-improvement capability might increase the risks of humans losing control over AI systems. Buried inside the model\'s <a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">319-page system card</a> was a safeguard that would secretly degrade responses for users suspected of building competing models, with no warning or fallback message.',
    'The safeguard specifically targeted requests about <a href="https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety">building pretraining pipelines, distributed training infrastructure, or ML accelerator design</a>, and limited effectiveness through methods such as prompt modification, steering vectors, or parameter-efficient fine-tuning. The system card stated these safeguards <a href="https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5">will not be visible to the user</a>, contrasting with Anthropic\'s visible cybersecurity and biology safeguards that fall back to Claude Opus 4.8 with a notice. AI research firm <a href="https://thenextweb.com/news/claude-fable-5-curbs-china-ai-labs">SemiAnalysis was among the first to publicly call out the behavior</a> after its GPU inference research got flagged and degraded.',
    'Anthropic estimated the interventions would impact roughly <a href="https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/">0.03% of traffic</a>, concentrated in fewer than 0.1% of organizations. The company\'s rationale, later quoted in its apology, was that <a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">invisible safeguards can be targeted more narrowly, allowing us to ship quickly with very few false positives</a>, and that it went with invisible safeguards for this reason before concluding that was the wrong tradeoff.',
    'Even before the apology, users reported widespread overblocking. The word <code>hello</code> <a href="https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/">triggered a silent switch to Opus 4.8</a>, and <code>cancer</code> was flagged as a biosecurity risk. Andrej Karpathy, who had newly joined Anthropic, called Fable 5 <a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">super exciting</a> and a major-version-bump-deserving step change forward, while noting the safeguards were trigger-happy. Meanwhile, Fable 5 consumed tokens at <a href="https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5">roughly double the rate of Opus 4.8</a>, with one test draining a $100 Max plan in under nine minutes.',
    'After roughly 48 hours of backlash, Anthropic <a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">apologized</a>, stating it was changing Fable 5\'s safeguards for frontier LLM development to make them visible and admitting it made the wrong tradeoff. The fix, <a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">rolling out the week of June 11</a>, makes flagged requests visibly reroute to Claude Opus 4.8, with API users receiving a stated reason for refusal, matching the existing cybersecurity and biology safeguards.',
    'Anthropic <a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">admitted</a> the visible replacement would overblock: making safeguards visible makes them easier to bypass, so the classifier must cast a wider net, meaning more false positives for legitimate ML work, with no timeline given for reducing them. Brookings fellow Kyle Chan <a href="https://thenextweb.com/news/claude-fable-5-curbs-china-ai-labs">said the safeguards would make it nearly impossible for Chinese developers</a> to use Fable 5 for their own model development, framing the curbs as China-aimed but hitting all AI researchers.',
  ],
  receipts: [
    "The system card ran 319 pages.",
    "The invisible safeguard targeted pretraining pipelines, distributed training infrastructure, and ML accelerator design.",
    "Anthropic estimated impact at 0.03% of traffic across fewer than 0.1% of organizations.",
    "One test drained a $100 Max plan in under nine minutes.",
    "The apology came after roughly 48 hours of backlash.",
  ],
  reactions: [
    {
      platform: "other",
      author: "SemiAnalysis",
      meta: "AI research firm; among the first to publicly flag the behavior after its GPU inference research was degraded",
      quote:
        "Anthropic's latest model will NOT help you if it thinks your ML research/ML engineering is interesting, and/or will secretly degrade its IQ so that the average engineer won't notice.",
      url: "https://futurism.com/artificial-intelligence/anthropic-concerned-models-ability-improve-itself",
    },
    {
      platform: "other",
      author: "Nathan Lambert (Interconnects / AI2)",
      meta: "Also wrote that the measure was 'far more about maintaining their competitive position'",
      quote:
        "An AI model that gets less intelligent automatically without notifying me is categorically misaligned AI.",
      url: "https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety",
    },
    {
      platform: "other",
      author: "Mike Famulare (Institute for Disease Modeling)",
      meta: "Quoted by The Register on overblocking",
      quote:
        "In Claude Code, Fable 5's input safety classifier emits a model_refusal_fallback (silent switch to Opus 4.8) on the first turn of essentially every session on my account — including a session whose only user input is the word hello!",
      url: "https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/",
    },
    {
      platform: "other",
      author: "Will Brown (Prime Intellect)",
      meta: "Research lead at Prime Intellect",
      quote:
        "It felt like Anthropic was saying to the public, 'We don't trust anybody else to do AI research. We are the only ones who have to do AI research.'",
      url: "https://futurism.com/artificial-intelligence/anthropic-concerned-models-ability-improve-itself",
    },
    {
      platform: "other",
      author: "Simon Willison",
      meta: "Blog post; characterized the original policy as causing 'a huge outcry'",
      quote:
        "It's good news that they're dropping the invisible aspect of this. It would be a whole lot better of they dropped this category of refusals entirely.",
      url: "https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/",
    },
    {
      platform: "hackernews",
      author: "revolvingthrow",
      meta: "HN thread 'It blocked us at hello: Anthropic Fable 5 refusing innocuous prompts'",
      quote:
        "I subscribed (with some distaste) to the $20 tier to check out fable. I got two refusals in a row on innocuous tasks, then ran out of quota halfway through the third one. Truly, the future is here.",
      url: "https://news.ycombinator.com/item?id=48486370",
    },
  ],
  images: [
    {
      src: "/events/fable-5-research-sabotage/interconnects-benchmark.jpg",
      alt: "Benchmark table comparing Claude Fable 5 / Mythos performance against competing AI models",
      caption:
        "Benchmark comparison from Nathan Lambert's Interconnects analysis, showing Claude Fable / Mythos performance against competing models. Credit: Interconnects.",
      sourceUrl: "https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety",
      width: 1456,
      height: 1607,
    },
  ],
  aftermath:
    'Anthropic has begun <a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">rolling out the visible Opus 4.8 reroute</a> for frontier LLM development queries, though it has provided no timeline for reducing the increased false positives it acknowledged will result. Fable 5 remains publicly accessible at <a href="https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5">roughly double the token burn rate</a> of its predecessor, while Andrej Karpathy has <a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">called the model a major-version-bump-deserving step change forward</a> and noted its safeguards are trigger-happy. Brookings fellow Kyle Chan <a href="https://thenextweb.com/news/claude-fable-5-curbs-china-ai-labs">framed the curbs as China-aimed</a> but observed they hobble all AI researchers equally.',
};
