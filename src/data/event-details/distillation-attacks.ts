import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "distillation-attacks",
  deck: "Anthropic accused three Chinese AI labs of industrial-scale distillation through 24,000 fake accounts and 16 million Claude exchanges, a disclosure that promptly raised questions about what exactly constitutes 'industrial' scale.",
  body: [
    'On February 23, 2026, Anthropic published a post titled <a href="https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks">"Detecting and preventing distillation attacks,"</a> accusing DeepSeek, Moonshot AI, and MiniMax of systematic extraction of Claude\'s capabilities via approximately 24,000 fraudulent accounts generating over 16 million exchanges. The per-lab breakdown showed DeepSeek at over 150,000 exchanges targeting reasoning and reward modeling, Moonshot at over 3.4 million for agentic reasoning and coding, and MiniMax at over 13 million for agentic coding and tool orchestration, with Anthropic noting it detected MiniMax\'s campaign live and watched the lab pivot targeting within 24 hours of a new Claude model release.',
    'Anthropic framed the activity as a national security risk, arguing distillation strips safety guardrails and could enable offensive cyber operations, disinformation campaigns, and mass surveillance, while also undermining US chip export controls. Dmitri Alperovitch, Silverado Policy Accelerator chairman and former CrowdStrike CTO, backed this framing, stating <a href="https://techcrunch.com/2026/02/23/anthropic-accuses-chinese-ai-labs-of-mining-claude-as-us-debates-ai-chip-exports/">"It\'s been clear for a while now that part of the reason for the rapid progress of Chinese AI models has been theft via distillation of U.S. frontier models."</a> The disclosure landed after the Trump administration approved exports of advanced H200 chips to China, and Anthropic argued restricted chip access limits both direct training and distillation scale.',
    'Critics quickly noted the asymmetry in the accused. DeepSeek\'s alleged share was only about 150,000 exchanges, roughly 1% of the 16 million total, with the bulk attributed to MiniMax and Moonshot. Nathan Lambert of Interconnects argued that <a href="https://www.interconnects.ai/p/how-much-does-distillation-really">"quantity is a pretty crude way to measure impact,"</a> pointing out that frontier models now rely on at-scale reinforcement learning where generation constitutes the majority of compute cost and "can\'t be generations from another model." Lambert also highlighted selective enforcement: API-based distillation has long violated terms of service, yet "no action has been taken against any smaller model builders" until this disclosure, and "kneecapping model distillation will be far harder than restricting...GPUs."',
    'The <a href="https://www.scmp.com/tech/tech-war/article/3344499/anthropics-distilling-charges-against-chinese-firms-expose-ai-training-grey-area">South China Morning Post</a> added historical context, noting Geoffrey Hinton and colleagues published the foundational knowledge-distillation research in 2015, framing the dispute as exposing an "AI training grey area." Distillation, in other words, is a standard, decades-old technique.',
    'Theo Browne of t3.gg offered a traffic benchmark, reacting that 16 million exchanges is "really not much" for an AI app and noting that his own T3 Chat product hits that volume most months. Anthropic said it detected the activity through IP data, account metadata, shared payment methods, synchronized traffic patterns, and API usage patterns, and responded by enhancing detection, sharing intelligence with partners, and tightening API access controls. The company did not specify whether tightening access controls would affect developers whose monthly conversation volumes resemble the alleged attack.',
  ],
  receipts: [
    "24,000 fraudulent accounts generated over 16 million exchanges with Claude",
    "Per-lab share: DeepSeek over 150,000; Moonshot AI over 3.4 million; MiniMax over 13 million",
    "DeepSeek's slice was roughly 1% of the 16 million total",
    "Anthropic said MiniMax pivoted its targeting within 24 hours of a new Claude model release",
    'Nathan Lambert (Interconnects): "quantity is a pretty crude way to measure impact"',
    "Knowledge distillation was published by Geoffrey Hinton and colleagues in 2015",
  ],
  reactions: [
    {
      platform: "x",
      author: "@AnthropicAI",
      meta: "Official Anthropic announcement tweet",
      quote:
        "We've identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax. These labs created over 24,000 fraudulent accounts and generated over 16 million exchanges with Claude, extracting its capabilities to train and improve their own models.",
      url: "https://x.com/AnthropicAI/status/2025997928242811253",
    },
    {
      platform: "hackernews",
      author: "dude250711",
      meta: "HN comment, distillation attacks thread",
      quote:
        "It's absolutely mind boggling to see claims of model distillation being theft, a class of attack, and all sorts of claims all the while Meta is in court for copyright violation, anthropic has had to settle a case with authors. With distillation 'attacks' at least they paid API fees.",
      url: "https://news.ycombinator.com/item?id=48477189",
    },
    {
      platform: "hackernews",
      author: "anon373839",
      meta: "HN comment",
      quote:
        "Distillation is not an 'attack', despite Anthropic themselves coining the self-serving phrase 'distillation attack'. And as others have noted, it is precisely identical to the sort of 'attack' on published works which Anthropic themselves used to train their models.",
      url: "https://news.ycombinator.com/item?id=48485901",
    },
    {
      platform: "hackernews",
      author: "ImprobableTruth",
      meta: "HN, 'Notes on DeepSeek' thread (203 points)",
      quote:
        "Anthropic had to settle with authors because they literally pirated books! Their behavior regarding distillation is genuinely beyond parody.",
      url: "https://news.ycombinator.com/item?id=48476474",
    },
    {
      platform: "hackernews",
      author: "amunozo",
      meta: "HN comment",
      quote:
        "Tell me, where did OpenAI and Anthropic got their training data? From public sources using legitimate means? Don't make me laugh.",
      url: "https://news.ycombinator.com/item?id=48476474",
    },
  ],
  images: [],
  aftermath:
    "Anthropic's disclosure did not prompt visible policy changes from the accused labs, and the company continued to operate API access with tightened controls. The H200 chip exports to China proceeded. Distillation remained both a standard academic technique dating to 2015 and, per Anthropic, a national security threat, with the distinction apparently depending on the scale of the account farm and the jurisdiction of its operator.",
};
