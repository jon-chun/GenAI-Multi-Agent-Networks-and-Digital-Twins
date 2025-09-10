# Week 2: Prompt Engineering, Vibe Coding, Context Engineering, and Spec Driven Development

"Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb" - Calvin Coolidge

## **Humanistic Big Ideas**

### Readings

* [Demis Hassabis On The Future of Work in the Age of AI (20:10) (Jul 2025)](https://www.youtube.com/watch?v=CRraHg4Ks_g)

### Reflection:

Theme 1: The Future of Work in the Age of AI

Impact on Human Roles: Based on Demis Hassabis’s insights, how might AI reshape traditional job roles, and what new opportunities or challenges could emerge for workers in fields like education, healthcare, or the arts? How should society prepare for these shifts?
Human-AI Collaboration: Hassabis likely discusses AI as a tool for augmenting human work. What are the ethical implications of humans and AI systems collaborating closely in professional settings? How can we ensure that human agency and creativity remain central?
Economic Inequality: How might AI-driven automation exacerbate or mitigate economic inequality? Discuss potential strategies to ensure equitable access to AI-driven opportunities, especially in rural or underserved communities like those near Kenyon College.
Education and Skill Development: What changes should educational institutions, like Kenyon College, make to prepare students for an AI-driven workforce? Should liberal arts education adapt to emphasize skills that complement AI, such as critical thinking or emotional intelligence?
Work-Life Balance: How might AI’s influence on productivity and efficiency, as discussed by Hassabis, affect work-life balance? Could AI lead to shorter workweeks or, conversely, increased pressure to be “always on”?

## **Coding**

### Goals:

* Drink from the AI Firehose (news, research, product launches, etc)
* Deterministic Traditional Programming vs Stochastic AI Programming
* Web vs API Access
* No-Code
  - OpenAI GPTs
  - Google Gems
* Configure thin-client laptops for AI Development
* Signup for Dev and AI Cloud Services
* AI models, modalities, and money/rate limits (AIStudio)
* Cloud Dev: Jupyter Notebook
  - unning local LLM (ollama.ai)
  - making API calls to LLMs
    - rate limits
    - error handing
    - token/cost accounting
    - multimodal content
  - ExtractLang to extract structured text from unstructured text
* Local Dev: Crash course
  - Visual (VSCode) (API Calls to Gemini)
  - Command Line Interface (CLI) AI Development (Gemini CLI or Claude Code)
* Understand Software Engineering, from waterfalls to agile
  - Aspects:
    - PRD
    - Decomposition
    - TDD
    - Benchmarks
    - Observability
    - MLOps
  - Prompt Engineering
  - Content Engineering
  - Spec Driven Development
* Advanced Prompt Engineering:
  - Templates
  - Structured Markup Langauge: POML
  - Optimization: DSPy
* AI Pair Programming
  - Autocomplete
  - Agents (copilot)
  - Frameworks (Roo Code)
  - CLI (Gemini or Claude Code)
* BMAD: Agentic Agile SWE
* Mini-Project #1: Chat
  - System Prompt/Personas
  - Reverse engineer Character.ai
  - Knowledge
  - Tools
  - Memory
  - Guardrails
  - Metrics/Observability

### AI News/Current Events

* [Workers Don't Trust Their Companies on AI (14:10) (31 Aug 2025)](https://www.youtube.com/watch?v=lxLz5xqVR9A)
  
### To Do: Signup and Installs

* **Sign Up**

  * AI Cloud Providers
      - (DO NOT SIGN-UP EARLY) Perplexity
        - We will use a simple algorithm to optimize free months using their referral system in class (more free months if you can get friends/family outside class to join trail)
      - (Required) FREE [Google Pro for Students](https://gemini.google/students/)
      - (Required) OpenAI ChatGPT
        - IF not blocked by @kenyon.edu domain
          - 2mo free? (may be blocked by Kenyon) [OpenAI ChatGPT Pro](https://gemini.google/students/)
        - ELSE
          - $20/mo [OpenAI ChatGPT Pro](https://chatgpt.com/pricing)
      - OPTIONAL [Anthropic/Claude Code]()
        - Latency, Costs, and Rug Pulls (degraded for profit margins/scale)
  * DevOps
    - [(FREE) Github.com](https://github.com/)

* **Install on Your Laptops**
  - [(latest) Google Chrome Browser]()
    - Sider (vs built-in Gemini with Google Pro Sub)
    - Chat GPT Exporter (Similar extensions for Claude, Gemini, Grok, Deepseek)
    - GoFullPage
    - Enhancer for YouTube (2-3x speed)
    - Zotero
  - [(latest) Microsoft Edge Browser]()
    - Sider (vs built-in Copilot free)
    - Chat GPT Exporter (Similar extensions for Claude, Gemini, Grok, Deepseek)
    - GoFullPage
    - Enhancer for YouTube (2-3x speed)
    - Zotero
  - [VSCode](https://code.visualstudio.com/download)
  - [Zotero App and Connector](https://www.zotero.org/download/)
  
### Prompt Engineering

* [OpenAI GPTs](https://help.openai.com/en/articles/8554397-creating-a-gpt)
  - [OpenAI GPT Directory](https://www.lingoblocks.com/gpt-store)
* [Google GEMs](https://gemini.google/overview/gems/)
* [Complete OpenAI's API ChatGPT Tutorial - [Become A Prompt Engineer in 15 Minutes] (14:21) Mar 2024](https://www.youtube.com/watch?v=NiQ_9xwS4v8)
* [Prompt Engineering Guide Manual: Read "Introduction" and "Techniques" (up to/including Meta Prompting)](https://www.promptingguide.ai/applications/finetuning-gpt4o)
* [How to use the new OpenAI GPT5 Prompt Optimizer: Step by step tutorial (3:42) (10 Aug 2025)](https://www.youtube.com/watch?v=FvTPcfSKsVs)

### Coding: Prompt Engineering and OpenAI API

* [Deeplearning.ai: Prompt Engineering with OpenAI](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/2/guidelines)
* [OpenAI Developer Platform: Read "Getting Started" and "Core Concepts/Text Generation"](https://platform.openai.com/docs/overview)

### Coding: Vibe Coding and Context Engineering

* [The New Code — Sean Grove, OpenAI (21:35) (Aug 2025)](https://www.youtube.com/watch?v=8rABwKRsec4)
* [Augment Code: Specs Driven Development For AI Coding Agents (9:25) (Aug 2025)](https://www.youtube.com/watch?v=1jIo7bvIpIo)
* The BMAD Method (Read ONE, preferably IMPROVED added late)
  * IMPROVED: [BMAD Vibe Coding Workflow Is a Massive Level Up (24:57) (25 Jul 2025)](https://www.youtube.com/watch?v=Sosf8Z0T_M8)
  * ORIGINAL: [The BMAD Method: The Ultimate AI Coding System (13:08) (Aug 2025)](https://www.youtube.com/watch?v=fD8NLPU0WYU)

### AI Research

This will be an exercise in skimming and using AI to analyze and quickly grasp the fundamentals of an AI research paper. Do not worry if many terms or concepts appear alien to you now. In fact, this is unfamiliarity is key to demonstrating how to leverage AI to personalize and accelerate your learning. Over the next 14 weeks you will master the core concepts in this paper, but for now this opacity is a precondition to demonstrate the efficacy of AI-assisted learning. 

- Read "Abstract" on page 1
- Read from section 1 (middle page 4) to section 3.1 (bottom page 7)
- Read from section 4 (bottom page 12) to 4.1 with Fig 3 (top of page 13), but stop before 4.1.1
- Read from section 4.3 (bottom page 23 to middle page 24), but stop before 4.3.2
- Read section 8 Conclusion on page 58.
   
From these 8 pages as reference points, I'll dissect this paper for you in class. More importantly, we'll learn a methodology to use AI to query, explain, and enter into dialog with contents and concepts of this paper. This is an invaluable skill that generalizes far beyond this particular AI research paper.  

* [A Survey of Context Engineering for Large Language Models by Mei et al. (21 Jul 2025)](https://arxiv.org/pdf/2507.13334)

## In Class

### WebUI vs API

* [AIStudio](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-pro)
* [OpenAI API QuickStart](https://platform.openai.com/docs/quickstart)
* [OpenAI GPT vs Gemini Gems]
  - [ChatGPT Use Cases](https://chatgpt.com/use-cases/students)

### Sign Ups

* LLMs and Cloud Providers
  - OPTIONAL (cost)
    - [Qwen3 Code](https://qwenlm.github.io/blog/qwen3-coder/)
    - [GLM](https://open.bigmodel.cn/dev/api/normal-model/glm-4)
  - OPTIONAL (speed/scale)
    - [groq.com](https://groq.com/)
    - [cerebras.ai](https://www.cerebras.ai/)
  - OPTIONAL (flex)
    - [OpenRouter](https://openrouter.ai/)
    - [Requesty](https://www.requesty.ai/)

### Install

* [Perplexity: Min MacOS/Win11(WSL2) Setup Instr](https://www.perplexity.ai/search/instructions-to-setup-thin-cli-BY57yvh6T.OjAEH24AFd.w)
* [Unified Setup Config](../docs-config/gpt5_20250910_Unified Ai Dev Setup (mac Os + Wsl2) — Vs Code+roo, Gemini Code, Claude Code, Open Code (sept 2025).pdf)
* MacOS
  - Brew Package Manager
  - iTerm2
* Windows11 (From Win11 Microsoft Store)
  - WSL2 & sudo apt update/upgrade
  - Windows Terminal
* Common
  - git and SSH tokens
  - Python
    - uv
    - python 3.10, 3.11, 3.12
  - JavaScript
    - nvm
    - node

### AI Resources

* News
  * [daily.dev](https://daily.dev/)
* FOSS Repos
  * [Github Explore](https://github.com/explore)
  * [Trendshift](https://trendshift.io/)
* Leaderboards
  * [Aider](https://aider.chat/docs/leaderboards/)
* Deep Research
  * Prompt
    * [Vertex Prompt Gallery](https://console.cloud.google.com/vertex-ai/studio/prompt-gallery?project=gen-lang-client-0588482685)
  * Preliminary Research
    * [Perplexity.ai](https://www.perplexity.ai/)
  * Metaprompt
    * [AIStudio](https://aistudio.google.com/prompts/10BFaVPfHheyXH6g-dr5cy9nFJ_BwAmqq)
  * Deep Research
    * [AIStudio](https://aistudio.google.com/prompts/10BFaVPfHheyXH6g-dr5cy9nFJ_BwAmqq)
    * [GPT5](https://chatgpt.com/c/68bac78a-47d8-8322-89db-e69d590dcb3f)
    * [Claude4.1](https://claude.ai/chat/85a6913d-d0bf-4249-88cc-0bee03a1bb55)
    * [Gemini 2.5 Pro](https://gemini.google.com/app/ef4ddc22e8b277cd)
    * [Grok 3/4](https://grok.com/c/d6fb8037-a042-4530-b07c-f6288921d427)
    * [Perplexity](https://www.perplexity.ai/search/role-persona-you-are-alex-chen-MQgM.TNMRSaIijtB0WABDA)
    * [Deepseek.ai](https://chat.deepseek.com/a/chat/s/b328a5f7-c5c7-4ac0-a878-69788786c799)
    * [chat.Qwen.ai](https://chat.qwen.ai/c/73ae8124-20ad-4ca1-a4ca-3fba441509a8)
    * [Kimi.com](https://www.kimi.com/chat/d2tci22mvdm7u9bsav50)
    * [ScholarQA.ai](https://asta.allen.ai/chat)
    * [Consensus](https://consensus.app/)
    * [GetLiner.com](https://getliner.com/)
  * Synthesis
    * [NotebookLM](https://notebooklm.google.com/notebook/a04b6736-9546-4fa5-9ee1-32bb912a575c)
  * Human-in-the-Loop (HIL) Supervision
  * Iterate
* Brainstorm
  * [BMAD 1) Prompt 2) *brainstorm ](https://claude.ai/chat/51aec5db-3dc0-4fc9-9f69-d771bdfb3f24)

<iframe 
  src="https://chatgpt.com/canvas/shared/68bccfb2b4f08191b96729e907b28c04" 
  width="100%" 
  height="800" 
  style="border: none;">
</iframe>


### Sign ups and Checklist

* [(FREE) Google Pro Gemini for Students (Oct 2025)]()
* [(PAID) OpenAI]()
* [Perplexity.ai Referral Program](https://www.perplexity.ai/help-center/en/articles/10964633-student-referrals)
* [Optimized Perplexity.ai Referrals for Free Month](https://chatgpt.com/share/68b90e66-abb0-800d-a0ba-1e7a1f94b761)
* [(FREE) LangFuse](https://github.com/langfuse/langfuse)

### Setup Checklist
* WSL2 (Win) and Brew (MacOS)
* Terminal Apps
* Git and SSH Auth
* Python
* JavaScript
* VSCode + Extensions

### From Prompts to Chatbots

* [OpenAI Playground]()
* [AIStudio]()
* [Character.ai like Chatbot Colab]()
* [Google’s NotebookLM Launched 5 NEW Features That Are CRAZY (11:37) (3 Sept 2025)](https://www.youtube.com/watch?v=hT40_UXCy3Y)

### A Brief Tech Executive Education Related to AI

* [Universal Skill/Fluency Applicable to Medicine, Law, Academic Research, etc]()
* [Economics of Software]()
* [Software: Punchcards, GOFAI, ML and AI]()
* [Entrepreneurship/Business Plans/Venture Capital]()
* [SLDC]()
  * [Methodologies: OOP, TDD, CI/CD, Observability, Telemetry, etc.]()
  * [Management: Waterfall, Kanban, Agile, etc.]()
* [BMAD]()

### Vibe Coding, PRD/SDD/TDD, Context Engineering, and Spec Engineering

* autocomplete, agents, task directed development
* [Perplexity: (9 Sep 2025)](https://www.perplexity.ai/search/what-are-the-best-foss-resourc-FheGBGbeQPKjejyNu60FeQ)

#### Differentiale Terms
* [(Claude) Context Engineering Template (9.7k)](https://github.com/coleam00/context-engineering-intro)
* [The "Spec Engineering" Hype is Here. BMAD Users Are Already Winning (10:21) (Aug 2025)](https://www.youtube.com/watch?v=jVGsm9kW97U)

#### Background Setup/Research

* [botingw/rulebook-ai](https://github.com/botingw/rulebook-ai)
* [AI Dev Project Setup Prompts](https://notes.switchdimension.com/AI-Dev-Project-Setup-Prompts-18fb5b07a94380758bd6e92baa5e8c98)
* [GitIngest for Prompt-Friendly extract of Git Repo](https://github.com/coderamp-labs/gitingest)
  * "https://github.com/bmad-code-org/BMAD-METHOD/" -> "https://gitingest.com/bmad-code-org/BMAD-METHOD/"
  * Copy and paste into Claude.ai, Openai.com, Gemini, etc and ask questions to understand code base

#### PRD
* [coleam00/context-engineering-intro](https://github.com/coleam00/context-engineering-intro)
* [TechNomadCode/AI-Product-Development-Toolkit](https://github.com/TechNomadCode/AI-Product-Development-Toolkit/tree/main)
* [rohitg00/CreateMVP](https://github.com/rohitg00/CreateMVP)

#### Best Implementation: BMAD (as of Aug 2025)

**SIMPLIER**

* [How Vibe Coding Goes PRO (24:55) (Jul 2025)](https://www.youtube.com/watch?v=cniTWVMGD08)
  * [eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master)
    - [Task-master](https://www.task-master.dev/)
    - PRD -> Tasks -> Subtasks -> Build (-> QA/Test -> Iteration Loop)
  * [snarktank/ai-dev-tasks (light)](https://github.com/snarktank/ai-dev-tasks)

**COMPLEX**

* [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
* [BMAD User Guide](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/user-guide.md)
  * "npx create-next-app@latest ."
  * create ./docs (copy )
  * "lets proceed to the PM step with our product brief to create the PRD"

* OPTION 0: Create a GPT or Gemini Gem
  * Prompt: "Follow the web agent bundle instructions and assume the role of the BMAD Orchestrator - do not break character"
  * Upload: [team-fullstack.txt](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/dist/teams/team-fullstack.txt)
* OPTION 1: Using Web Chat
  * [team-fullstack.txt](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/dist/teams/team-fullstack.txt)
  * PROMPT #1: "Your critical operating instructions are attached, do not break this assigned character"
  * PROMPT #2: "*brainstorm"
  * PROMPT ...: Iterate Q/A until output "(project-name)_brainstorm.md"
  * PROMPT #4: "*pm" (product manager)
  * PROMPT #5: "*create-doc" product requirement doc output "(project-name)_prd.md"
  * PROMPT ...: Iterate over 5 stages of prd
  * PROMPT #7: "*architect" \n *create-doc-architect" architect mode output "(project-name)_architecture.md"
  * Install BMAD
  * create ./docs/architecture/ and add "(project-name)_architecture.md"
  * create ./docs/prd/ and add "(project-name)_prd.md"
  * Agent #1: Product Owner "@po.mdc"
    * give the *shard-doc docs/prd.md docs/prd
    * give the *shard-doc docs/architecture.md docs/architecture
  * Agent #2: Scrum Master "@sm.mdc \n *draft"
  * create epics (e.g. 4 epics with 4 stories/epic = 16 total)
  * validate each story and change ##Status\n "Draft" -> "Approved" (Story status)
  * Agent #3: Developer Agent "dev.mdc"
    * tell which story to implement (each story is broken down into tasks/substasks)
    * once story is complete, Story status "Approved" -> "Ready for Review"
  * Agent #4: Quality Assurance Agent "qa.mdc \n *review"
    * once QA is good, Story status "Ready for Review" -> "Done"
* OPTION 2: Using Claude Code, Cursor, VSCode, etc.
  * Install by running "npx bmad-method install" for each project
    * Give project full path
    * "Install BMad Agile Core System (v4.29.0) .bmad-core" (sets up ./.bmad-core/)
    * (Y) Shard PRD into multiple docs
    * (Y) Shard architecture docs into multiple docs
    * (select multiple) IDEs (Roo Code, Gemini CLI, Claude Code, Cursor, etc)
    * (N) Include prebuilt web bundles 
    * All rule files should appear under the corresponding subdir (e.g. ./.claude, ./.cursor, etc)


* [MS Prompt Orchestration Markup Language (POML) Github](https://github.com/microsoft/poml)
  * [Microsoft's Secret Tool for PERFECT AI Prompts (7:25) (6 Sep 2025)](https://www.youtube.com/watch?v=tfOwh6YCY8M)

* [Deeplearning.ai: DSPy: Build and Optimize Agentic Apps](https://learn.deeplearning.ai/courses/dspy-build-optimize-agentic-apps/lesson/wwje4/debug-your-dspy-agent-with-mlflow-tracing)
  * [DSPy Docs](https://dspy.ai/)

