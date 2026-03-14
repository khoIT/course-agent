# Pedagogy Research Report — Prompt Engineering for Business Users

**Researcher:** Pedagogy Researcher | **Date:** 2026-03-14 | **Confidence:** High

---

## 1. Pedagogical Frameworks for AI Training

### 1a. RTF Framework (Role-Task-Format)
Structured prompt construction: specify who the AI should act as, what it should do, and how to format output. Works well for non-technical users because it mirrors how they already delegate work to colleagues. Widely adopted in corporate AI training.
— Source: [Prompt Bestie](https://promptbestie.com/en/teaching-prompt-engineering-non-technical-users-practical-guide-2025/), [Everworker](https://everworker.ai/blog/prompt-engineering-exercises-that-sharpen-ai-skills)

### 1b. Bad-to-Good Comparative Method
University of Victoria's tested approach: learners first submit a vague/weak prompt, then refine it with structure and context, then compare outputs side-by-side. This before/after contrast makes abstract "prompt quality" tangible and memorable.
— Source: [UVic Libraries Prompt Engineering Course](https://libguides.uvic.ca/Prompt_Engineering_Beginners_Course/Hands-on_activities)

### 1c. Scaffolded Complexity Progression
Exercises progress: Specificity Rewrite (beginner) -> Role-Based Context (beginner) -> Chain-of-Thought (intermediate) -> Business Context Embedding (intermediate) -> Multi-Turn Agent Prompts (intermediate) -> Error Induction/Failure Analysis (advanced). Each level builds on prior skills.
— Source: [Everworker Exercises](https://everworker.ai/blog/prompt-engineering-exercises-that-sharpen-ai-skills)

### 1d. Retrieval Practice + Spacing (Cognitive Science)
Dr. Pooja Agarwal's research: pulling information OUT of memory (not re-reading) produces durable learning. Four pillars: **Retrieval Practice** (recall before review), **Spacing** (distribute practice over time), **Interleaving** (mix problem types), **Metacognition** (monitor own thinking). "Easy learning leads to easy forgetting" — productive struggle is essential.
— Source: [RetrievalPractice.org](https://www.retrievalpractice.org/), [Evidence Based Education](https://evidencebased.education/resource/retrieval-practice-and-technology-five-key-principles/)

### 1e. Five-Step AI Training Framework (Naitive)
1. Evaluate AI Readiness (map skills across technical understanding, practical application, process integration)
2. Simplify Concepts (analogies, visual aids, case studies)
3. Create Hands-On Materials (scenario setup -> step-by-step guidance -> clear success criteria)
4. Deliver via mixed formats (online modules + virtual labs + in-person workshops)
5. Track & Improve (knowledge retention metrics, quarterly content updates)
— Source: [Naitive Blog](https://blog.naitive.cloud/5-steps-to-build-ai-training-for-non-tech-teams/)

---

## 2. Activity Design Patterns

### What Works

| Pattern | Description | Why It Works |
|---------|-------------|--------------|
| **Prompt Makeover** | Rewrite vague prompt into progressively specific versions (3+ iterations) | Makes improvement visible; builds muscle memory for specificity |
| **Role Assignment** | Give AI a professional persona ("You are a CFO...") and compare outputs with/without role | Demonstrates power of context; activates domain vocabulary |
| **Error Induction** | Deliberately craft bad prompts, predict failure modes, analyze actual failures | Builds diagnostic skills; separates advanced from beginner understanding |
| **Real-Task Application** | Learners bring their own work tasks (emails, reports, data analysis) and prompt-engineer solutions | Immediate transfer to workplace; highest engagement reported |
| **Template Building** | Create reusable prompt templates with parametric slots (role, audience, output type) | Standardization for teams; democratizes quality |
| **Chain-of-Thought Walkthrough** | Instruct model to show reasoning steps; compare with direct-answer prompts | Builds understanding of when/why structured reasoning matters |

### What Doesn't Work

- **Lecture-only format**: Passive consumption of prompt tips without practice — retention drops to <10% within a week
- **Generic exercises disconnected from learners' actual work**: "Write a poem" exercises don't transfer to business contexts
- **Overwhelming with techniques**: Teaching 15 techniques in one session leads to cognitive overload; 3-4 per session maximum
- **No iteration cycle**: Single-attempt exercises miss the core skill (iterative refinement)

---

## 3. Online/Virtual Delivery Best Practices

### Zoom-Specific Techniques

**Breakout Rooms** — Small groups (3-4 people) work on prompt challenges together. Share screens to compare outputs. Rotate roles: one person prompts, others observe and critique. Regroup to share best results.
— Source: [Zoom Blog](https://blog.zoom.us/how-to-transform-in-person-training-into-engaging-virtual-training-with-zoom/)

**Polls & Quick Checks** — Use polls every 10-15 minutes. "Which prompt would produce better results: A or B?" forces retrieval practice. Tools: Mentimeter, Zoom polls, chat waterfall.
— Source: [Knowledge Anywhere](https://www.knowledgeanywhere.com/resources/article-detail/oh-no-not-another-zoom-meeting-how-to-add-engagement-to-your-virtual-traini)

**Chat Waterfall** — All participants type answer but don't send until facilitator says "Go." Creates simultaneous reveal, prevents anchoring bias, generates energy.

**Screen Share Show-and-Tell** — Participants share their prompt + output. Facilitator asks class to suggest one improvement. Democratic, low-stakes feedback.

**Two-Way Dialogue** — Read participant responses aloud. Creates interactive loop. Keep questions answerable in a few words or one sentence.
— Source: [CypherLearning](https://www.cypherlearning.com/blog/business/5-tips-for-making-zoom-training-more-engaging)

### Energy Management

- **90-minute maximum per session** without break; 10-min break every 45-50 min
- **Vary modality every 15 minutes**: lecture -> demo -> individual practice -> pair share -> class discussion
- **Movement prompts**: "Stand up and stretch while AI generates your output"
- **Mix video and live presenters** to prevent fatigue from single-face syndrome

---

## 4. Handling Mixed Skill Levels

### Tiered Activity Design
Design each activity with 3 tiers:
- **Foundation**: Follow the template exactly (structured scaffold)
- **Extension**: Modify template for own use case (guided application)
- **Challenge**: Create from scratch, try advanced techniques (independent practice)

All tiers use same activity context; only complexity differs. Nobody feels left behind or bored.

### Peer Champions Model
Identify early adopters/power users within the group. Pair them with less experienced learners during breakout activities. Champions reinforce their own learning by teaching; beginners get personalized support. Scale: 1 champion per 3-4 learners.
— Source: [Correlation One](https://www.correlation-one.com/generative-ai-training-for-employees), [TechClass](https://www.techclass.com/resources/learning-and-development-articles/how-to-develop-ai-skills-in-your-organization)

### Pre-Assessment & Adaptive Paths
Brief pre-workshop survey (5 questions) to gauge: AI tool usage frequency, comfort level, specific use cases. Use results to form heterogeneous breakout groups and suggest optional pre-reading for beginners.

### "Same Task, Different Depth" Principle
Everyone works on the same business scenario (e.g., "draft a customer response email"). Beginners use the provided template. Intermediates add role + tone constraints. Advanced learners chain multiple prompts for a full workflow. All feel successful; all learn something new.

---

## 5. Assessment & Retention Strategies

### During Training
- **Prompt Comparison Quiz**: Show two prompts, ask which produces better output and why (retrieval practice)
- **Before/After Portfolio**: Learners save their first-attempt prompt and final-refined prompt for each exercise. Visual progress evidence.
- **Peer Review Rubric**: Simple 3-criterion rubric (Specificity, Context, Output Format) for peer evaluation of prompts

### Post-Training Retention
- **Spaced Practice**: Follow-up "Prompt of the Week" challenge via email/Slack at Day 3, Day 7, Day 14, Day 30. Each challenge applies a technique from training to a new scenario. Based on spacing effect research.
- **Prompt Library**: Shared team repository of successful prompts. Contributors get recognition. Reinforces retrieval and elaboration.
- **Buddy System**: Pair learners for 2-week post-training period. Weekly 15-min check-in: "What prompt did you use this week? What worked?"
- **Quick Recall Quizzes**: Low-stakes, technology-assisted retrieval practice. 3-5 questions at start of each follow-up session. Not graded — purely for memory consolidation.
— Source: [RetrievalPractice.org](https://www.retrievalpractice.org/), [PMC/NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC10368606/)

### Kirkpatrick-Adjacent Metrics
1. **Reaction**: Post-session satisfaction + NPS
2. **Learning**: Pre/post prompt quality comparison (rubric-scored)
3. **Behavior**: 30-day follow-up survey — "How often do you use structured prompts at work?"
4. **Results**: Team productivity metrics where measurable (e.g., time saved on report drafting)

---

## 6. Key Recommendations for This Course

1. **Lead with familiar analogies**: "Prompting = delegating to a very literal new colleague." Non-technical users connect immediately.
2. **Use RTF framework as backbone**: Role-Task-Format is simple enough to remember, powerful enough to be useful. Introduce in Session 1, reinforce in every subsequent session.
3. **Every session: 60%+ hands-on time.** Lecture maximum 15 min per block. Then practice.
4. **Use real work tasks, not toy examples.** Have learners bring actual tasks they do weekly. This is the #1 engagement driver across all sources.
5. **Build in iteration loops.** No single-attempt exercises. Every activity should have: attempt -> compare -> refine -> compare again.
6. **Plan for mixed levels** with tiered activities (Foundation/Extension/Challenge). Same scenario, different depth.
7. **Apply retrieval practice**: Start each session with "What do you remember from last session?" before any review. Use prompt comparison quizzes throughout.
8. **Design for post-training transfer**: Prompt Library + Spaced Practice challenges + Buddy System. Training that ends at the classroom door fails.

---

## 7. Sources

| # | Source | URL | Used For |
|---|--------|-----|----------|
| 1 | UVic Libraries — Prompt Engineering Beginners Course | https://libguides.uvic.ca/Prompt_Engineering_Beginners_Course/Hands-on_activities | Bad-to-good comparative method, activity structure |
| 2 | Everworker — Prompt Engineering Exercises | https://everworker.ai/blog/prompt-engineering-exercises-that-sharpen-ai-skills | 10 exercise types with scaffolded progression |
| 3 | Naitive — 5 Steps AI Training for Non-Tech Teams | https://blog.naitive.cloud/5-steps-to-build-ai-training-for-non-tech-teams/ | Five-step framework, hands-on material design |
| 4 | RetrievalPractice.org (Dr. Pooja Agarwal) | https://www.retrievalpractice.org/ | Retrieval practice, spacing, interleaving evidence |
| 5 | Evidence Based Education — Retrieval Practice & Technology | https://evidencebased.education/resource/retrieval-practice-and-technology-five-key-principles/ | Technology-assisted retrieval strategies |
| 6 | Zoom Blog — Virtual Training Transformation | https://blog.zoom.us/how-to-transform-in-person-training-into-engaging-virtual-training-with-zoom/ | Breakout rooms, virtual engagement |
| 7 | Knowledge Anywhere — Virtual Training Engagement | https://www.knowledgeanywhere.com/resources/article-detail/oh-no-not-another-zoom-meeting-how-to-add-engagement-to-your-virtual-traini | Polls, gamification, two-way dialogue |
| 8 | CypherLearning — Zoom Training Tips | https://www.cypherlearning.com/blog/business/5-tips-for-making-zoom-training-more-engaging | Energy management, modality mixing |
| 9 | Correlation One — AI Training for Employees | https://www.correlation-one.com/generative-ai-training-for-employees | Mixed skill levels, customized paths |
| 10 | PMC/NIH — Evidence-Based Learning Strategies | https://pmc.ncbi.nlm.nih.gov/articles/PMC10368606/ | Retrieval practice in technology contexts |
| 11 | IFAB Foundation — Prompt Design Lab | https://www.ifabfoundation.org/corporate-training/prompt-design-lab/ | Corporate prompt engineering workshop model |
| 12 | Prompt Bestie — Teaching PE to Non-Technical Users | https://promptbestie.com/en/teaching-prompt-engineering-non-technical-users-practical-guide-2025/ | RTF framework, demystification strategies |
