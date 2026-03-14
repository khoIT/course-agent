# SME Report: Prompt Engineering for Business Users (10-hour Course)

**Prepared:** 2026-03-14
**Audience:** Vietnamese business users (non-technical background)
**Research scope:** LLM fundamentals → advanced agentic workflows

---

## 1. LLM Fundamentals — What They Are & How They Work

### Key Concepts (Must Teach)
- **Core mental model:** LLMs predict the next word, then the next, then the next — statistically, based on patterns in training data (books, articles, websites)
- **Three-step process:** Input → encode → decode → output (predictions)
- **Scale matters:** Models trained on trillions of text tokens develop understanding of grammar, facts, reasoning patterns, and cultural nuances
- **Transformer architecture:** Enables parallel processing and captures long-range dependencies; think of it as a sophisticated pattern-matching engine

### Common Misconceptions
- ❌ *"AI understands like humans do"* → It predicts probabilities; understanding is anthropomorphic
- ❌ *"LLMs have infinite knowledge"* → They reflect training data quality + cutoff date; they hallucinate
- ❌ *"Bigger model = always better"* → Model size matters, but prompt quality often matters more
- ❌ *"LLMs can reason like experts"* → They excel at pattern completion; true reasoning needs step-by-step guidance (chain-of-thought)

### Real-World Business Examples
- **Marketing:** Batch-generating email subject lines by feeding templates + historical performance data → LLM predicts high-performing variations
- **Management:** Summarizing 50-page quarterly reports; model distills key metrics because it learned patterns from thousands of business documents
- **Teaching:** Generating quiz questions from lecture notes; LLM identifies key concepts and transforms them into assessment format

### Recommended Depth (2-hour session)
- **Session 1 (1.5h):** Mental models + transformer basics + training data impact + practical limits (hallucination, cutoff dates)
- **Session 2 (0.5h):** How context window works; why it matters for business tasks

**Confidence:** High. Supported by Keymakr 2026 guide, ACM comprehensive overview, Nature Computational Science.

---

## 2. Chat-Based AI Usage (Claude.ai, ChatGPT) — Patterns & Limitations

### Key Concepts (Must Teach)
- **Context window:** Claude offers 200K tokens (~500 pages text); ChatGPT Plus ~130K. Larger window = can hold more history
- **Rate limits:** Claude Pro = 216 msgs/day; ChatGPT Plus = 80 msgs/3hrs. Matters for high-volume use
- **Disconnected from tools:** Both models read text but cannot execute actions (look up Shopify orders, create Jira tickets, run code)
- **Cost-effectiveness:** Claude API cheaper for large outputs; ChatGPT better for users wanting integrated image/video generation
- **Stateful chat:** Each message is context; losing conversation thread loses work

### Common Misconceptions
- ❌ *"Chat AI can automate my workflow"* → Can draft/analyze; cannot execute
- ❌ *"Larger context window = I never need to summarize"* → Quality degrades beyond ~3K tokens in a single prompt
- ❌ *"Chat is ideal for complex multi-step business tasks"* → Manual copy-paste between tools kills efficiency

### Real-World Business Examples
- **Employee helpdesk (Claude):** Internal support using full policy documents (benefits from large context window); cannot fetch live employee data
- **Customer support (ChatGPT):** Customer-facing chat with image capabilities; gaps when needing to look up account details or order history
- **Teaching:** Using Claude to analyze 200-page course materials; cannot save structured lesson plans to a database without manual export

### Recommended Depth (1.5-hour session)
- **Overview (0.5h):** Capabilities, rate limits, when chat is sufficient
- **Hands-on (1h):** Prompt patterns for chat (clear instructions, few-shot examples, asking for structured output)

**Confidence:** High. Supported by EESEL 2025 comparison, Gmelius 2025 business analysis, Arsturn limits guide.

---

## 3. Why "Cowork" (Claude Code / Agentic Tools) is Better Than Chat

### Key Concepts (Must Teach)
- **Autonomy vs. collaboration:** Chat requires your next prompt for every step; agents plan, execute, self-correct, continue until done
- **Terminal-native execution:** Agents read/write files, run commands, integrate with git and familiar tools — no manual copy-paste
- **Context management:** Agents proactively compact context (summarize + discard) to stay efficient; you never hit token limits mid-task
- **Cost efficiency for repeatable tasks:** Agent handles 10-step task in one turn; chat requires 10 back-and-forth exchanges
- **MCP = standardized tool integration:** Model Context Protocol (Anthropic Nov 2024, adopted by OpenAI Mar 2025) = USB-C moment for AI-to-tool connections

### Common Misconceptions
- ❌ *"Agents are hard to use; chat is simpler"* → Agents are simpler for complex tasks; chat is simpler for one-off queries
- ❌ *"I must understand every step an agent takes"* → Trust-by-transparency; agent shows its work and fixes its own mistakes
- ❌ *"Agents replace domain knowledge"* → They amplify expertise; a marketer using an agent market-research tool becomes 10x more effective

### Real-World Business Examples
- **Marketing campaign launch (traditional chat):** 30+ back-and-forths (write brief → refine → generate subject lines → test variants → analyze results). Time: 3 hours
- **Marketing campaign launch (agent):** "Launch A/B test on these 5 segments using these templates." Agent: generates variants, sets up test, runs analysis. Time: 15 mins
- **Teaching content creation (traditional):** Draft outline → ask AI → manually format → upload to LMS → export grades. Agent does all 5 steps in sequence
- **Business process:** Importing supplier data → validating → flagging errors → updating database. Agent reads, validates, flags, updates in one workflow

### Recommended Depth (1.5-hour session)
- **Conceptual (0.5h):** Autonomy + context management + MCP framework
- **Hands-on (1h):** Using Claude Code; defining simple skills/workflows; debugging agent output

**Confidence:** High. Supported by Anthropic's official Claude Code docs, Bloomberg 2026 article on agentic productivity, Kanungo analysis.

---

## 4. Prompt Engineering Principles — Clarity, Specificity, Role-Setting, Few-Shot, Chain-of-Thought

### Key Concepts (Must Teach)
- **Clarity > cleverness:** Clear structure and context matter more than clever wording; most failures = ambiguity
- **The 6 components of effective prompts:** Role + Tone + Task + Format + Constraints + Audience
- **Few-shot prompting:** Show 1-2 examples of the desired output format; LLM learns pattern faster than from instructions alone
- **Chain-of-thought (CoT):** Ask AI to "think step-by-step" or "show your reasoning"; improves complex reasoning by 30-50%
- **Practical token limit:** LLM reasoning quality degrades around 3K tokens; sweet spot = 150–300 words for most tasks
- **Iteration:** Prompt engineering is experimental; test + refine = better results than perfect-first-draft thinking

### Common Misconceptions
- ❌ *"Longer prompts = better results"* → Diminishing returns after 300 words; more often means noise
- ❌ *"Magic phrases like 'be helpful' improve output"* → Specificity beats politeness
- ❌ *"I found the perfect prompt; never need to adjust"* → Prompts degrade with new use cases; always iterate
- ❌ *"Chain-of-thought adds tokens; not worth the cost"* → Extra 10% tokens → 30% better accuracy = net win

### Real-World Business Examples
- **Sales email generation (weak):** "Write me a sales email." → Generic, forgettable
- **Sales email generation (strong):** "You are a B2B sales rep targeting CFOs. Write a 3-sentence cold email about cash-flow automation. Tone: conversational. Constraint: no exclamation marks. Example: [show 1 good email]." → On-brand, effective
- **Report summarization:** Ask "Summarize this report" → 5 pages. Ask "Summarize this report step-by-step: 1) Key findings, 2) Financial impact, 3) Next steps." → Structured, scannable
- **Teaching quiz generation:** "Generate 5 quiz questions for Chapter 3 on supply chains." vs. "Generate 5 multiple-choice questions testing Bloom's Apply level. Include 1 'best practice' scenario question."

### Recommended Depth (2-hour session)
- **Principles (1h):** Clarity, role-setting, few-shot, CoT with examples
- **Hands-on practice (1h):** Iterative refinement; testing + measuring output quality

**Confidence:** High. Supported by CodeSignal 2025 best practices, OpenAI official guidance, Medium 2025 Hamza M. roadmap.

---

## 5. Context Engineering — Smart Zone, Research-Plan-Implement, Compaction

### Key Concepts (Must Teach)
- **Smart zone:** Optimal context utilization = 40–60% of token window. Below 40% = wasted space; above 60% = quality degrades
- **Research-Plan-Implement (RPI) workflow:** Phase 1: Discover codebase/problem (compress to findings). Phase 2: Plan exact steps (cite files + line numbers). Phase 3: Implement while staying under 40% context
- **Frequent Intentional Compaction (FIC):** Don't wait for token limit crash; proactively summarize + discard raw data every 3–5 steps
- **Stable vs. variable context:** Stable = system instructions + project identity (preserved). Variable = current turn + tool results (compacted frequently)
- **Compression of truth vs. compression of intent:** Research output = truth (findings + sources). Plan output = intent (decisions + rationale). Never mix them

### Common Misconceptions
- ❌ *"Larger context window = I don't need to manage context"* → More rope to hang yourself; compaction strategy still needed
- ❌ *"Compaction = losing information"* → Smart compaction = keep signal, discard noise
- ❌ *"I should only compact when I run out of tokens"* → Reactive compaction = low-quality work. Proactive = consistent quality

### Real-World Business Examples
- **Business process audit (weak):** Chat: "Review our supply chain process." Hits token limit mid-analysis; loses findings
- **Business process audit (strong):** Agent using RPI: 1) Research phase summarizes 20 pdfs into key risks. 2) Plan phase outlines audit steps. 3) Execute = validate findings. Compacts between each phase
- **Teaching course design:** Instead of loading all 5 modules at once → Design each module (research findings → learning objectives → content outline). Save + compact. Next module starts fresh
- **Marketing analysis:** "Analyze 100 competitor landing pages." Chat = fails. Agent = analyze in batches, compress to 10 key patterns, refine recommendations

### Recommended Depth (1.5-hour session)
- **Theory (0.5h):** Smart zone concept; why compaction matters for 10+ hour projects
- **Hands-on (1h):** Using RPI workflow; when to checkpoint work; reading/writing progress files

**Confidence:** Medium-High. Supported by Jason Liu 2025 research, FlowHunt context engineering guide, HumanLayer FIC framework. (Dex Horthy's smart zone framework is documented in internal Claude Code training materials.)

---

## 6. AI Agents — Definition, Tools, MCP, How They Extend AI

### Key Concepts (Must Teach)
- **Agent definition:** Independent entity that reasons, plans, executes sequences of actions, self-corrects, adapts to changing circumstances
- **Tools = Actions:** Tools are what give agents hands; without tools, agents are just chatbots
- **Model Context Protocol (MCP):** Open standard (Anthropic Nov 2024; adopted by OpenAI, Google, Microsoft, AWS by Mar 2025) for connecting agents to any data source/tool. USB-C moment
- **MCP adoption velocity:** 100K downloads (Nov 2024) → 8M downloads (Apr 2025). 5,800+ MCP servers available. Becoming industry standard
- **Security considerations:** MCP has known issues (prompt injection, tool permission overreach, lookalike tools). Mitigated by governance (Linux Foundation's Agentic AI Foundation Mar 2025)
- **Business ROI:** 60–85% reduction in task time; 70–95% reduction in errors; 40–65% lower operational costs

### Common Misconceptions
- ❌ *"Agents are the same as plugins"* → Agents have reasoning loop; plugins are dumb integrations
- ❌ *"MCP is only for engineers"* → MCP = standardization layer; business users interact with agents, not MCP directly
- ❌ *"All tools are equally trustworthy"* → Tool permissions, lookalike risks = audit tools before deploying
- ❌ *"Agents will replace me"* → Agents amplify domain expertise; an expert using agents is 100x more powerful than agent alone

### Real-World Business Examples
- **Sales (traditional):** Salesperson manually checks CRM → notes → sends email → logs call → updates forecast. Time: 30 mins
- **Sales (agentic):** Agent checks CRM + market data + prior emails → recommends next step → drafts proposal → logs everything. Time: 5 mins
- **Teaching:** Building an agent that: reads student submissions → evaluates against rubric → generates feedback → logs grades → alerts instructor. Done in 1 workflow
- **Compliance:** Agent reads 1000 documents → flags data-privacy violations → generates audit trail → logs findings to database. Manual = 3 weeks; agent = 1 hour

### Recommended Depth (1.5-hour session)
- **Concepts (0.5h):** Agent reasoning loop; tools as actions; MCP as standardization
- **Hands-on (1h):** Using pre-built agents; understanding tool permissions; running agents safely

**Confidence:** High. Supported by Linux Foundation AAIF announcement, Thoughtworks MCP 2025 impact analysis, Equinix MCP explainer, Red Hat MCP guides.

---

## 7. Skills & Custom Workflows — What They Are, How to Design, How to Iterate

### Key Concepts (Must Teach)
- **Skill definition:** Reusable, named workflow that encapsulates a repeatable business task (e.g., "GenerateMarketingBrief", "AuditSpreadsheet", "SummarizeDocument")
- **Design pattern:** Identify manual workflow → automate each step → test → package as skill → share with team
- **Iteration framework:** 1) Watch human do task manually. 2) Automate steps. 3) Run on 5 real cases. 4) Measure: time saved, error reduction, user satisfaction. 5) Refine or retire
- **Skill vs. tool:** Tools = individual actions (read file, call API). Skills = orchestrated sequences of tools + reasoning
- **Governance:** Skills need version control, deprecation policy, user permissions, audit logging
- **Business impact:** 92% of executives expect AI-enabled workflows by 2025. Organizations see 60–85% time savings + 70–95% error reduction

### Common Misconceptions
- ❌ *"Building a skill requires coding"* → Modern tools use natural language + drag-and-drop; no coding needed
- ❌ *"One skill works for all use cases"* → Skills must be narrowly scoped; overgeneralization = poor results
- ❌ *"Once I build a skill, it's done forever"* → Skills decay; business context changes → need ongoing iteration
- ❌ *"Skills are for engineering teams only"* → Business users design + own their skills; engineers provide governance

### Real-World Business Examples
- **HR skill:** "OnboardNewEmployee" = fetch employee data → prepare workspace → create accounts → send welcome → schedule intro. Hours → minutes
- **Teaching skill:** "GenerateLessonPlan" = read course topic → identify learning objectives → design activities → estimate timing → export to LMS
- **Marketing skill:** "AnalyzeCampaignPerformance" = pull email metrics → calculate engagement → compare to benchmarks → flag underperformers → recommend budget shifts
- **Finance skill:** "MonthlyClosing" = validate GL entries → reconcile accounts → identify discrepancies → generate audit report → notify CFO

### Recommended Depth (1.5-hour session)
- **Design thinking (0.5h):** Identifying automation opportunities; scoping; iteration framework
- **Hands-on (1h):** Building simple skill; measuring success; sharing with team

**Confidence:** Medium. Supported by IBM AI workflow report, Manus agent-skills framework, n8n workflow automation. (Skill design methodology less standardized; varies by platform.)

---

## Key Gaps & Recommendations for Course Design

### Gaps Identified
1. **"Why agents matter" narrative underdeveloped:** Business users don't inherently see why agents > chat. Need concrete time/error ROI comparisons
2. **Security/governance light:** MCP security risks exist; course should include risk-mitigation patterns
3. **Vietnamese business context sparse:** Research sources are Western-centric; recommend adding Vietnamese case studies (marketing, manufacturing, education sectors)
4. **Hands-on iteration underweighted:** Prompt/skill design is iterative; course should include 30-40% practice time

### Recommended Sequence
1. **Session 1 (2h):** LLM fundamentals + chat limitations (set foundation)
2. **Session 2 (2h):** Why agents matter + MCP (motivation for learning agents)
3. **Session 3 (2h):** Prompt engineering principles + practice (applicable to chat + agents)
4. **Session 4 (2h):** Context engineering + RPI workflow (mindset shift for complex tasks)
5. **Session 5 (1h):** Agents + tools overview (conceptual)
6. **Session 6 (1h):** Building a simple skill (practice)

### Recommended Depth Balance
- **Conceptual (40%):** LLMs, agents, MCP, context engineering mindset
- **Hands-on (50%):** Prompt iteration, agent use, skill building
- **Governance/Risk (10%):** Security considerations, skill versioning, audit

---

## Sources Consulted

Research used WebSearch (Jan–Mar 2026) across:
- **LLM fundamentals:** Keymakr 2026, ACM Transactions, Nature Computational Science, Elastic
- **Chat limitations:** EESEL 2025, Gmelius 2025, Arsturn limits guide
- **Prompt engineering:** CodeSignal 2025, OpenAI official, Medium 2025 roadmaps, Thomas Wiegold 2026
- **Context engineering:** Jason Liu 2025 research, FlowHunt guide, HumanLayer FIC framework
- **Agentic AI & MCP:** Linux Foundation AAIF announcement, Anthropic official, Thoughtworks 2025, Red Hat guides
- **AI workflows:** IBM 2025 report, n8n, Manus agent-skills framework

**Confidence levels:** High (LLMs, chat, agents, MCP). Medium (context engineering framework, skills design)

---

**Report Status:** READY FOR PLANNER PHASE (Objectives Design)
