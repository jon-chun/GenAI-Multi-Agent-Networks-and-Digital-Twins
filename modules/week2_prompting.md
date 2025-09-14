# Week 2: Prompt Engineering, Vibe Coding, Context Engineering, and Spec Driven Development

"Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb" - Calvin Coolidge

## **Humanistic Big Ideas**

### Readings

* [Demis Hassabis On The Future of Work in the Age of AI (20:10) (Jul 2025)](https://www.youtube.com/watch?v=CRraHg4Ks_g)

### Reflection:

The Future of Work in the Age of AI

* Impact on Human Roles: Based on Demis Hassabis’s insights, how might AI reshape traditional job roles, and what new opportunities or challenges could emerge for workers in fields like education, healthcare, or the arts? How should society prepare for these shifts?
* Human-AI Collaboration: Hassabis likely discusses AI as a tool for augmenting human work. What are the ethical implications of humans and AI systems collaborating closely in professional settings? How can we ensure that human agency and creativity remain central?
* Economic Inequality: How might AI-driven automation exacerbate or mitigate economic inequality? Discuss potential strategies to ensure equitable access to AI-driven opportunities, especially in rural or underserved communities like those near Kenyon College.
* Education and Skill Development: What changes should educational institutions, like Kenyon College, make to prepare students for an AI-driven workforce? Should liberal arts education adapt to emphasize skills that complement AI, such as critical thinking or emotional intelligence?
* Work-Life Balance: How might AI’s influence on productivity and efficiency, as discussed by Hassabis, affect work-life balance? Could AI lead to shorter workweeks or, conversely, increased pressure to be “always on”?

## **Coding**

### Goals:

* Drink from the AI Firehose (news, research, product launches, etc)
* Deterministic Traditional Programming vs Stochastic AI Programming
* Web vs API Access
* Mini-Project #1: Chatbot Review (see week 3)
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
* BMAD: Agentic Agile SWE

### AI News/Current Events

* [Workers Don't Trust Their Companies on AI (14:10) (31 Aug 2025)](https://www.youtube.com/watch?v=lxLz5xqVR9A)
  
### To Do: Signup and Installs

* **Sign Up**

  * AI Cloud Providers
      - (DO NOT SIGN-UP EARLY) Perplexity
        - We will use a simple algorithm to optimize free months using their referral system in class (more free months if you can get friends/family outside class to join trail)
      - (Required: FREE) [Huggingface.co](https://huggingface.co/)
      - (Required: FREE) [Google Pro for Students](https://gemini.google/students/)
      - (Required: $20/mo) OpenAI ChatGPT
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
* [GPT5 Summary](https://chatgpt.com/share/68c1deb7-8cc0-800c-8f92-2140368bea94)
  - 13% – Decline in employment among early-career workers in AI-exposed fields.
  - 5.3% vs. 4% – Unemployment rate for new grads compared to overall labor force.
  - 12% – Salary growth for entry-level AI specialists in a single year.
  - 41% – Gen Z employees sabotaging their company’s AI strategy.
  - 42% – Consulting workers not trained in AI despite being in a high-risk industry.
* Questions:
  * What does “trust” in the workplace actually mean? Is it about transparency, fairness, security, or something else?
  * How should responsibility for technological change be shared between employers, employees, and policymakers?
  * Can AI truly “create” new jobs, or does it only shift human labor into new forms?
  * If workers feel they are training their replacements, what ethical obligations do employers have to prevent that dynamic?
  * How do we distinguish between fears that are rational (job loss, reduced creativity) and fears that might be exaggerated?
  * What makes certain industries (like healthcare) more trusted by workers when it comes to AI adoption, compared to others (like real estate)?
  * Does a lack of training in AI reflect negligence by employers, or is it simply a lag in adapting to rapid change?
  * How might generational differences (Gen Z vs. older workers) shape attitudes toward AI at work?
  * If AI could solve global problems like water scarcity or disease, should societies accept short-term disruptions to jobs? Why or why not?
  * What role should democratic participation play in decisions about AI adoption—should workers have a voice equal to executives in shaping policies?
  * Why do young workers feel more threatened by AI compared to experienced employees? (Enter E1 to ask)
  * How could companies build trust and involve workers in AI integration? (Enter E2 to ask)
  * What are the long-term risks if mistrust between workers and leadership continues? (Enter E3 to ask)

## In Class

### Quiz: Week 2

### WebUI vs API

* [AIStudio](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-pro)
* [OpenAI API QuickStart](https://platform.openai.com/docs/quickstart)

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
* [GPT5 Unified Install Instructions](../docs-config/gpt5_20250910_unified_ai_dev_setup_mac_os_wsl_2_vs_code_roo_gemini_code_claude_code_open_code_sept_2025.pdf)
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
  * [BMAD (1) Prompt (2) *brainstorm ](https://claude.ai/chat/51aec5db-3dc0-4fc9-9f69-d771bdfb3f24)

* "https://chatgpt.com/canvas/shared/68bccfb2b4f08191b96729e907b28c04" 

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
* CLI IDE:
  * [Claude Code](https://www.anthropic.com/claude-code)
  * [Gemini Code](https://codeassist.google/)
    * [Github and Docs](https://github.com/google-gemini/gemini-cli)
  * [Warp](https://www.warp.dev/)
  * [Opencode](https://github.com/sst/opencode)
    * Install Bun and Golang first
* VSCode + Extensions

### From Persona Prompts for Chatbots

#### No-Code Examples

* [OpenAI GPTs](https://help.openai.com/en/articles/8554397-creating-a-gpt)
  - [OpenAI GPT Directory](https://www.lingoblocks.com/gpt-store)
  Make a chatbot with the persona of a psychologically passive agressive group conselor who makes intellectual digs and jabs while exploring peoples' psyche to exploit weakness and vunerabilities
* [Google GEMs](https://gemini.google/overview/gems/)

* [(Weak Prompts) ChatGPT Use Cases](https://chatgpt.com/use-cases/students)

### A Brief Tech Executive Education Related to AI

* Universal Skill/Fluency Applicable to Medicine, Law, Academic Research, etc
* Economics of Software
* Software: Punchcards, GOFAI, ML and AI
* Entrepreneurship/Business Plans/Venture Capital
* SLDC
  * Methodologies: OOP, TDD, CI/CD, Observability, Telemetry, etc.
  * Management: Waterfall, Kanban, Agile, etc.
* [BMAD](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/user-guide.md)

### Vibe Coding, PRD/SDD/TDD, Context Engineering, and Spec Engineering

* Autocomplete to Agents
* [Snake Game: VSCode + Roo Code](https://github.com/jon-chun/test-opencode-snake)
* [Resume Opt: Opencode Chat History](https://opencode.ai/s/JmS3uFHa)

#### PRD or Spec Driven Development

* [Perplexity: Best FOSS PRD Resources (9 Sep 2025)](https://www.perplexity.ai/search/what-are-the-best-foss-resourc-FheGBGbeQPKjejyNu60FeQ)
* [(Claude) Context Engineering Template (9.7k)](https://github.com/coleam00/context-engineering-intro)
* [The "Spec Engineering" Hype is Here. BMAD Users Are Already Winning (10:21) (Aug 2025)](https://www.youtube.com/watch?v=jVGsm9kW97U)

##### PRD Resources

* [coleam00/context-engineering-intro (9.7k)](https://github.com/coleam00/context-engineering-intro)
* [TechNomadCode/AI-Product-Development-Toolkit (554)](https://github.com/TechNomadCode/AI-Product-Development-Toolkit/tree/main)
* [rohitg00/CreateMVP (601)](https://github.com/rohitg00/CreateMVP)

##### KISS

* [AIStudio: Chat-Based Alternative](https://aistudio.google.com/prompts/1lp0diyor8ubutwP6XrBofdERjuRjt_S3?save=true)
  - [PDF](https://drive.google.com/file/d/1rnL8bGZJvmqJ_73BUmbUguj0mZrAOBtS/view?usp=sharing)

