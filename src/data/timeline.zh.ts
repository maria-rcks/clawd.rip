import { timelineEvents } from "@/data/timeline";

const zhTimelineContent = [
  {
    period: "2023 年 10 月 18 日",
    title: "音乐出版商把 Claude 告上法庭",
    summary:
      "Universal、Concord 和 ABKCO 起诉 Anthropic，称 Claude 使用受版权保护的歌词训练，并能复现数百首歌曲的歌词。主打“宪法式 AI”的公司，第一次结结实实挨了音乐行业一拳。",
  },
  {
    period: "2024 年 7 月",
    title: "ClaudeBot 狂刷 iFixit 和 Freelancer",
    summary:
      "报道称 ClaudeBot 在 24 小时内访问 iFixit 约一百万次，其他网站也抱怨爬取过于激进。Anthropic 说它遵守 robots.txt，但站长们发现，等你注意到带宽被吃掉时再说这些已经有点晚了。",
  },
  {
    period: "2024 年 8 月 20 日",
    title: "作家起诉 Anthropic 的“影子图书馆”食谱",
    summary:
      "Andrea Bartz、Charles Graeber 和 Kirk Wallace Johnson 指控 Anthropic 从盗版书库复制图书，并据此建立永久训练库。从此每一句“负责任 AI”的声明旁边，都得摆着这份起诉书。",
  },
  {
    period: "2025 年 5 月 15 日",
    title: "Claude 在 Anthropic 自己的官司里幻觉",
    summary:
      "在音乐出版商诉讼中，Anthropic 律师承认专家报告里有一条引用是 Claude 编造的。模型缺陷直接变成了关于模型本身的庭审现场剧。",
  },
  {
    period: "2025 年 6 月 3-5 日",
    title: "Windsurf 半路被断供",
    summary:
      "Windsurf 称 Anthropic 几乎没有提前通知就大幅削减其 Claude 直连访问，当时 OpenAI 收购传闻正热。Jared Kaplan 后来解释说，把 Claude 卖给 OpenAI 会很奇怪，也提到算力限制，但这并没有让断供显得不那么策略化。",
  },
  {
    period: "2025 年 6 月 4 日",
    title: "Reddit 起诉：说好的停止抓取呢？",
    summary:
      "Reddit 起诉 Anthropic，称对方机器人在承诺停止后仍继续访问 Reddit，并用用户内容训练 Claude。不同于图书案，Reddit 把战场放在平台规则、隐私承诺和合同上。",
  },
  {
    period: "2025 年 6 月 24-25 日",
    title: "合理使用赢了，盗版书库的尾巴还在",
    summary:
      "William Alsup 法官认为，用合法取得的书训练模型可以构成合理使用，但盗版书库相关主张继续存在。Anthropic 赢下训练理论，却没甩掉影子图书馆问题。",
  },
  {
    period: "2025 年 2-7 月",
    title: "Boris 和 Cat 出走后，Anthropic 忽然上心了",
    summary:
      "Claude Code 最初只是 Boris Cherny 的终端实验，发布时也只是有限研究预览；Cat Wu 当时还说专门订阅仍在“研究”。随后 Cursor 母公司 Anysphere 挖走 Cherny 和 Wu，Anthropic 又在两周内把他们招回。很快，Claude Code 成了正式订阅产品。",
  },
  {
    period: "2025 年 7 月 28 日",
    title: "Claude Code 进入配给时代",
    summary:
      "Anthropic 宣布对 Pro 和 Max 订阅用户设置每周限制，理由是常驻 Claude Code 循环和账号共享滥用。理论上受影响用户少于 5%，但信号很清楚：固定月费的智能体工作撞上了算力账单。",
  },
  {
    period: "2025 年 8 月 1-2 日",
    title: "OpenAI 被 Claude 踢出门",
    summary:
      "Anthropic 撤销 OpenAI 的 Claude API 访问，称 OpenAI 用 Claude Code 和内部工具评测 GPT-5，违反了禁止竞品开发的条款。OpenAI 说评测是标准安全工作；Anthropic 选择当门口保安。",
  },
  {
    period: "2025 年 8 月 27 日",
    title: "Claude Code 出现在网络犯罪报告里",
    summary:
      "Anthropic 披露了 Claude 被滥用的案例，包括数据勒索、朝鲜远程工作者欺诈和 AI 生成勒索软件。清理工作有价值；讽刺点在于，安全优先的产品已经同样能帮上攻击者。",
  },
  {
    period: "2025 年 9 月 10 日",
    title: "Claude 和 Console 在需求高峰宕机",
    summary:
      "Anthropic 报告 API、Console 和 Claude 同时受影响的故障。在已经充满算力与限额争议的一年里，可靠性叙事又多了一张好截的图。",
  },
  {
    period: "2025 年 9 月 17 日",
    title: "“它真的变差了”的复盘来了",
    summary:
      "在用户抱怨数周后，Anthropic 承认 8 月到 9 月初有三个基础设施问题间歇性降低 Claude 回答质量，并解释评测为什么没发现。承认是有用的，但时机让用户感觉自己像免费 QA。",
  },
  {
    period: "2025 年 9 月 25 日",
    title: "盗版书案变成 15 亿美元账单",
    summary:
      "法官初步批准 15 亿美元和解，覆盖近 46.5 万本书，约每本 3000 美元。Anthropic 避开了围绕盗版来源的审判，但这个数字成了最显眼的收据。",
  },
  {
    period: "2025 年 11 月 13 日",
    title: "Claude Code 被用于间谍活动",
    summary:
      "Anthropic 称，一个与中国有关联的行为体诱导 Claude Code 尝试入侵约 30 个目标，其中大部分流程由 AI 完成。智能体编程助手的卖点，撞上了智能体网络攻击。",
  },
  {
    period: "2026 年 1 月",
    title: "xAI 也吃到了竞品封锁",
    summary:
      "报道称 xAI 员工通过 Cursor 使用 Claude 时失去访问权限，原因是 Anthropic 执行竞品使用规则。继 Windsurf 和 OpenAI 后，“不卖给对手”越来越像产品策略，而不是例外。",
  },
  {
    period: "2026 年 1 月 27 日-2 月 15 日",
    title: "Anthropic 派律师，OpenAI 收下 ClawdBot",
    summary:
      "Anthropic 反对 Clawdbot 的 Claude/Clawd 品牌，迫使 Steinberger 匆忙改名为 Moltbot；他后来称差点删掉项目。最终他改成 OpenClaw，还打电话给 Sam Altman 确认名字，几周后加入 OpenAI 做个人智能体。",
  },
  {
    period: "2026 年 1 月 29 日",
    title: "透明度报告：145 万个账号被封",
    summary:
      "Anthropic 披露 2025 年 7-12 月封禁 145 万个账号，另有 5.2 万次申诉和 1700 次解封。数字让执法机器露出轮廓；从外面看，体验仍像“请相信表单”。",
  },
  {
    period: "2026 年 2 月 23 日",
    title: "Anthropic 拉响“蒸馏攻击”警报",
    summary:
      "Anthropic 指控 DeepSeek、Moonshot 和 MiniMax 进行“工业规模”蒸馏，称 2.4 万个假账号生成了 1600 万次 Claude 对话。它把问题和出口管制、国家安全绑定；批评者则指出 DeepSeek 所占比例并不大，1600 万次对 AI 应用来说也未必夸张。",
  },
  {
    period: "2026 年 2 月 26-27 日",
    title: "五角大楼护栏变成公开对峙",
    summary:
      "Dario Amodei 表示，Anthropic 不会移除针对大规模国内监控或全自动武器的安全护栏，即便国防部门威胁移除、供应链风险标签和《国防生产法》。AI 安全品牌终于撞上采购现实。",
  },
  {
    period: "2026 年 3 月 2-3 日",
    title: "空前需求把 Claude 压垮",
    summary:
      "3 月初的使用高峰引发 Claude 大规模中断，之后又出现一连串状态页事件。Anthropic 自己的状态页后来显示，claude.ai 的 90 天游ptime 低于 99%，多个核心服务也只在 99% 左右。",
  },
  {
    period: "2026 年 3 月 4-12 日",
    title: "五角大楼把 Anthropic 标成供应链风险",
    summary:
      "Anthropic 称自己收到一封 3 月 4 日信函，被指定为供应链风险，随后起诉并请求紧急救济。模型政策之争突然变成国防合同生存战。",
  },
  {
    period: "2026 年 3 月 9 日",
    title: "Claude 读一个 PR 要 25 美元",
    summary:
      "Anthropic 发布 Claude Code Review，并称每次评审通常平均 15-25 美元，按 token 另行计费。公司说这是“深度”的成本，但开发者立刻拿它和 CodeRabbit、Greptile 等包月工具比较。",
  },
  {
    period: "2026 年 3 月 31 日-4 月 1 日",
    title: "Claude Code 把自己泄露了",
    summary:
      "打包的 source map 暴露了约 50 万行 Claude Code 内部代码，包括架构和未发布功能。Anthropic 称没有客户数据或凭证泄露，但这和“没事”并不是同一句话。",
  },
  {
    period: "2026 年 4 月 1 日",
    title: "Anthropic 向 GitHub 到处发 DMCA",
    summary:
      "为了控制 Claude Code 泄露，Anthropic 的下架行动据称影响了数千个 GitHub 仓库，甚至包括只是 fork 官方 Claude 仓库的账号。公司后来称过度下架是意外并撤回许多请求，但误伤普通用户仓库仍然危险。",
  },
  {
    period: "2026 年 4 月 2-14 日",
    title: "AMD AI 负责人把 Claude Code 当 bug 提了",
    summary:
      "一位 AMD AI 负责人在 GitHub 提 issue，称 Claude Code 已退化到不能信任其处理复杂工程，并用数千次会话和工具调用作证。这把“Claude 变笨了”的闲聊推成了有数据支撑的开发者反弹。",
  },
  {
    period: "2026 年 4 月 4 日",
    title: "OpenClaw 用户遇到“爪税”",
    summary:
      "Anthropic 告诉订阅用户，他们的 Claude 限额将不再覆盖 OpenClaw 等第三方 harness；用户需要 API key 或单独计费。平台与工具的冲突变得明明白白：基于 Claude 构建，火了之后再付一次。",
  },
  {
    period: "2026 年 4 月 10 日",
    title: "OpenClaw 作者还是被封了",
    summary:
      "TechCrunch 报道称，即便 Anthropic 已给出新的 API 付费路径，OpenClaw 作者 Peter Steinberger 仍被临时封禁 Claude。公司后来恢复访问，但观感就是围墙花园式混乱。",
  },
  {
    period: "2026 年 4 月 15 日",
    title: "Claude.ai 和 Claude Code 登录坏了",
    summary:
      "Anthropic 状态页称 Claude.ai 和 Platform 宕机，Claude Code 登录不可用，API、Console 和 Code 都受影响后才恢复。对用户来说，又是一个“是我坏了还是 Claude 挂了”的日子。",
  },
  {
    period: "2026 年 4 月 15-16 日",
    title: "Anthropic 称 RCE 是“预期行为”",
    summary:
      "OX Security 报告称，Anthropic 的 MCP STDIO 设计可能让下游 AI 应用暴露在命令执行风险中，影响大量用户和服务器。研究人员称 Anthropic 拒绝协议级修复，把清洗责任推给开发者。",
  },
  {
    period: "2026 年 4 月 17-18 日",
    title: "Claude 用一个 Google 表单锁住 60 名员工",
    summary:
      "Anthropic 因模糊的政策违规突然暂停金融科技公司 Belo 的 60 多个 Claude 账号，切断员工工作流、集成、技能和聊天历史。约 15 小时后恢复，报道称是误报，但申诉通道只有普通 Google 表单。",
  },
  {
    period: "2026 年 4 月 21-22 日",
    title: "Anthropic 测试 100 美元 Claude Code 门槛",
    summary:
      "开发者发现 Anthropic 定价页上的 20 美元 Pro 计划不再包含 Claude Code，像是要跳到 100 美元 Max 档。Anthropic 后来称这只是面向 2% 新用户的实验并回滚文档，但混乱让 Claude Code 定价显得很不稳定。",
  },
  {
    period: "2026 年 4 月 22 日",
    title: "“没有关闭开关”的法庭文件",
    summary:
      "在五角大楼争议中，Anthropic 表示一旦 Claude 部署到机密网络内，它就无法监控、修改或关闭模型。这戳破了“神奇安全开关”的安慰性想象，也让问责问题更难看。",
  },
  {
    period: "2026 年 4 月 23-24 日",
    title: "Anthropic 承认 Claude Code 真的变差了",
    summary:
      "第二份质量复盘把 Claude Code 退化归因于三项产品层变更：默认推理力度降低、让 Claude 健忘的缓存 bug、以及伤害编码能力的简短回答提示。Anthropic 否认有意削弱，并重置了订阅限额。",
  },
  {
    period: "2026 年 3 月 6 日-4 月 12 日",
    title: "Claude Code 的缓存五分钟就忘光",
    summary:
      "Claude Code 曾连续 33 天每次调用使用 1 小时提示缓存，约 3 月 6 日在无公告下变成 5 分钟。缓存会话中途过期并按 12.5 倍读取价重建，三个月可能让 Sonnet 用户多花约 949 美元、Opus 用户多花约 1582 美元。有人用 12 万次 API 调用证明后，Anthropic 才称这是 bug。",
  },
  {
    period: "2026 年 4 月 25-26 日",
    title: "Anthropic 不喜欢你时就多收费",
    summary:
      "Claude Code 反滥用系统把 git 提交信息里的区分大小写字符串 HERMES.md 当成可疑信号，把 Max 计划请求导向额外计费而非包含额度。一名 Max 20x 用户称在仍剩 86% 周额度时烧掉 200.98 美元，还得自己二分 git 历史找出这个魔法词。",
  },
  {
    period: "2026 年 4 月 25 日",
    title: "Claude Code 更新后一恢复会话就崩",
    summary:
      "Anthropic 状态页称 Claude Code v2.1.120 在使用 --resume 或 --continue 恢复会话时崩溃，被迫自动回滚到 v2.1.119。刚做完复盘，产品又送上一个小型可靠性笑点。",
  },
  {
    period: "2026 年 5 月 13 日",
    title: "Claude 的“免费额度”附带 25 倍涨价",
    summary:
      "Anthropic 将 Agent SDK、`claude -p`、Claude Code GitHub Actions 和第三方 Agent SDK 应用迁入单独的月度信用额度。订阅限制名义上没变，但程序化 Claude 使用被推向 API 计价的额度池，很快用完或变成另一张账单。",
  },
] satisfies Array<{
  period: string;
  title: string;
  summary: string;
}>;

if (zhTimelineContent.length !== timelineEvents.length) {
  throw new Error("Chinese timeline content must match timelineEvents length.");
}

export const zhTimelineEvents = timelineEvents.map((event, index) => ({
  ...event,
  ...zhTimelineContent[index],
}));
