# Week 4: Embeddings

As AI models like GPT have become more powerful, they've also become more accessible through APIs with a growing number of features we'll use in the coming like function calling, fine-tuning, and caching. This week, we'll explore the basics of using Python to interact with the OpenAI API, enabling us to harness the power of large language models in our own future applications.

# ==========[ Miniproject #1: Build a Chatbot ]==========

**DUE:** Sunday, September 21th at 12 midnight EST

Based upon a domain of expertise you have, create a chatbot with a destinctive persona. Use the complex/well-structured prompt examples you've seen to implement your chatbot using the OpenAI API in Colab Jupyter notebook. You will also use AI to develop a scoring rubric and use it to evalute the 'quality' of your persona prompt. Here are are the project goals:

* Use the 'system' prompt to give your chatbot a descriptive and specialized 'persona' (e.g. a historical famous person, a main or marginal character from fiction, a Jungian Therapist with particular quirks, etc.)
* Save and submit your metaprompt history used to iterate and refine your prompt (use ChatGPT Exporter Browser Plug-In)
* Create a comprehensive and non-trivial chacter prompt including exertise, personality, backstory, etc.
* Use the OpenAI API and accumulate the conversation history
* Explore other Prompt Engineering strategies (e.g. In-Context-Learning, Chain of Thoughts, etc.)
* (Optional) Use gradio for the UI/UX
* (Optional) Extend your chatbot with features like multimodal input (e.g. voice, images)
* In your personal github.com repo, create a folder 'iphs391fall2025-miniproject1-chatbot' and upload your code there as either a Colab notebook or *.py code files for testing, verification and grading. 

NOTE: Beware using older code examples. OpenAI API announced a major change from the previous .chat() endpoint to a more unified .complete() endpoint. If you are using older code snippets, cookbooks, or tutorials, update the OpenAI API calls to use .complete() rather than .chat() endpoints. [Read this](./openai_api_changes2024.md) for details of these API changes.

## MP#1 Resources: Persona Prompts

* Character and Leaked System Prompts
  - [Github: (xAI Spicy Lover) asgeirtj/system_prompts_leaks (19.7k)](https://github.com/asgeirtj/system_prompts_leaks/blob/main/xAI/grok-personas.md)
  - [Github: (General): elder-plinius/CL4R1T4S (9.9k)](https://github.com/elder-plinius/CL4R1T4S)
  - [Github: (General): dontriskit/awesome-ai-system-prompts (3.8k)](https://github.com/dontriskit/awesome-ai-system-prompts)
* [Character.ai](https://character.ai/)
  - [r/CharacterAI](https://www.reddit.com/r/CharacterAI/)
* [(Optional) NSFW Spicy Content at Chub.ai](https://docs.chub.ai/docs)
* [Google NotebookLM](https://notebooklm.google/)

## MP#1 Grading: Prompt complexity, subtlty, creativity, and effectiveness
  - [(No Code) OpenAI GPTs](https://help.openai.com/en/articles/8554397-creating-a-gpt)
  - [(No Code) Google Gems](https://support.google.com/gemini/answer/15235603?hl=en)
  - [(OpenAI API) Jupyter Colab](https://colab.research.google.com/)
  - Turn in:
    1. Meta/Prompts used to iterative develop Persona Prompt
    2. Traces of best 10x dialog and 1-2pg writeup on insights/discoveries
    3. Scoring Rubric with evaluation of your Persona Prompt

# ==========[ Follow-Ups ]==========

### Signup and Installs

* AI Research Presentations
  - [Signup List]()

* OpenAI
  - [(Signup) OpenAI Pro Subscription: $20/mo](https://auth.openai.com/log-in-or-create-account)
  - [(logon first) OpenAI API: Pay $10 in API Credits](https://platform.openai.com/settings/organization/billing/overview)

* New Development Setup
  - Create new code repo at Github., then click green [ <> Code ] button and copy <HTTPS link>
  - Open iTerm2 then 'cd ./code'
  - Copy Remote Github.com repo to local laptop with 'git clone <HTTPS link>'
  - 'cd <repo subdir>'
  - Setup virtual environment with 'uv venv --python=3.11'
  - Activate virtual enviornment with 'source .venv/bin/source'
  - Open VSCode 'code .'

# ==========[ New Reading Assignments ]==========

## **[ Humanistic Readings ]**
 
* [(Use AI ~10mins) Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence by Erik Brynjolfsson et al. (26 Aug 2025)](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf)
* [(Watch in full) Demis Hassabis On The Future of Work in the Age of AI (20:10) (Jul 2025)](https://www.youtube.com/watch?v=CRraHg4Ks_g)

### Reflections

(in class)

### AI News/Current Events

* [(AI ~10m) The Hater's Guide To The AI Bubble by Zitron (21 Jul 2025)](https://www.wheresyoured.at/the-haters-gui/)
* [AI Skepticism is CANCELLED (10:47) (12 Sep 2025)](https://www.youtube.com/watch?v=nG2ry5eUX14)

## **[ New Technical Assignments ]**

### Prompts as Code

* [(GPT5 Structured Prompts): This one prompt makes GPT-5 INSANE (16:37) (8 Sep 2025)](https://www.youtube.com/watch?v=eNiHiZoDmHo)
  - [OpenAI Cookbook (GPT5)](https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide)
  - [OpenAI Prompt Optimizer](https://platform.openai.com/chat/edit?optimize=true)

* [POML: A 5-Minute Guide (4:49) (Jun 2025)](https://www.youtube.com/watch?v=b9WDcFsKixo)
  * [(MS Structured Prompts): Microsoft's Secret Tool for PERFECT AI Prompts (7:25) (6 Sep 2025)](https://www.youtube.com/watch?v=tfOwh6YCY8M)
  - [MS Prompt Orchestration Markup Language (POML) Github](https://github.com/microsoft/poml)

### Coding Exercises

* [Deeplearning.ai: ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/jtmdv/chatbot)

* [Deeplearning.ai: Functions, Tools and Agents with LangChain](https://learn.deeplearning.ai/courses/functions-tools-agents-langchain)

# ==========[ In Class ]==========

## Goals:

* Recent and future impacts of AI on Employment and the Future of Work
* More in-depth prompt engineering
* More OpenAI API coding
* Lighter readings to accomodate Mini-Project #1: Chatbots
* Leveraing AI to accelerate and deepen learning
* Contrasting and resolving apparently contradictory AI research

* Local IDE Setup: Crash course
  - Visual (VSCode) + Roo + ClI
  - Command Line Interface (CLI) 
  - AI Development (Gemini CLI)
* OpenAI API Review
* Colab Ollama API
* Advanced Prompt Engineering:
  - Templates
  - OpenAI GPT5
  - Structured Markup Langauge: POML
  - Optimization: DSPy
* AI Pair Programming
  - Autocomplete
  - Agents (copilot)
  - Frameworks (Roo Code)
  - CLI (Gemini or Claude Code)
* Mini-Project #1: Chat
  - System Prompt/Personas
  - Reverse engineer Character.ai

## News

* [(AI ~10m) The Hater's Guide To The AI Bubble by Zitron (21 Jul 2025)](https://www.wheresyoured.at/the-haters-gui/)
  - [ynews](https://news.ycombinator.com/item?id=44645391)

## **AI Research**

Use AI to analyze these papers, explore the apparent contradictions and resolutions of the results in each. Come to class ready to engage the deep concepts and impact of these 2 papers (~20mins with AI):
* [ParaThinker: Native Parallel Thinking as a New Paradigm to Scale LLM Test-time Compute Hao Wen et al. (30 Aug 2025)](https://www.arxiv.org/abs/2509.04475)
* [Talk Isn't Always Cheap: Understanding Failure Modes in Multi-Agent Debate by Andrea Wynn et al. (5 Sep 2025)](https://arxiv.org/abs/2509.05396)

## AI Model Access

* Web Chat Interfaces (human-machine)
* Playgrounds and Sandboxes
  - [OpenAI Playground](https://platform.openai.com/playground/)
  - [AIStudio](https://aistudio.google.com/prompts/new_chat)
* Application Programming Interfaces (Remote and Local APIs) (machine-machine)
  - [OpenAI API](https://platform.openai.com/docs/api-reference/introduction)
  - [Google Gemini API](https://ai.google.dev/gemini-api/docs)
  - [Anthropic API](https://docs.anthropic.com/en/home)

## Structured Prompt Engineering

* **GPT5 Structured Prompts**
  * [Download](https://chatgpt.com/c/68c31dcf-256c-832f-bf97-67e059ae13fd)
  * [Unzip](https://chatgpt.com/c/68c31dcf-256c-832f-bf97-67e059ae13fd)

* **POML**
  - [jon-chun/poml-examples](https://github.com/jon-chun/poml-examples)

## Local Ollama API

* [Local Ollama API + LangExtract](https://colab.research.google.com/drive/1gP92JYg7ZKxH76Fo_yi4eAWFndT8tITA?usp=sharing)

## Spec Driven Development: Join Optimization of Resume+Job 

* [Perplexity Lit Search](https://www.perplexity.ai/search/any-foss-ai-models-libraries-f-4TWRrdq6TPqpudLEaxmbvw)
  - [Github: Reactive-Resume (32.9k)](https://github.com/AmruthPillai/Reactive-Resume)
    - [Google AI Search: Reactive Resume](https://www.google.com/search?q=format+for+a+reactive+resume+in+json&oq=format+for+a+reactive+resume+in+json&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDg1MzlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8)
  - [Github: Resume-Matcher (23.1k)](https://github.com/srbhr/Resume-Matcher)
  - [Github: Resume-LM (135)](https://github.com/olyaiy/resume-lm)
  - [Github: ResumeAI (93)](https://github.com/Mahmud0808/ResumeAI)
  - [Arxiv: ResumeFlow: An LLM-facilitated Pipeline for Personalized Resume Generation and Refinemen by Zinjad et al. (8 May 2024)](https://arxiv.org/pdf/2402.06221)
* [AIStudio Gemini 2.5 Pro](https://aistudio.google.com/prompts/1GHoQXbDo9TP-JUNkV0yqMJh1HGkczphM?save=true)
  - [PDF](https://drive.google.com/file/d/1fjH4TJSeiA-6QNrTJKYiv6A20QSqRHjF/view?usp=sharing)
* [GPT5 Decomposition/Context Engineering](https://chatgpt.com/share/68c1b334-600c-800c-ad2a-43306504d178)

## (Old Code) Analyzing Existing Codebase

* [Distill: GitIngest for Prompt-Friendly extract of Git Repo](https://github.com/coderamp-labs/gitingest)
  * "https://github.com/bmad-code-org/BMAD-METHOD/" -> "https://gitingest.com/bmad-code-org/BMAD-METHOD/"

## (New Code) AI Project Setup: Rulebooks and Prompts

* [Cross Model Consistency: botingw/rulebook-ai (328)](https://github.com/botingw/rulebook-ai)
* [Project Setup: AI Dev Project Setup Prompts](https://notes.switchdimension.com/AI-Dev-Project-Setup-Prompts-18fb5b07a94380758bd6e92baa5e8c98)
* [MAD: Claude Code + Codex CLI + Gemini CLI = ?? (15:30) (8 Sep 2025)](https://www.youtube.com/watch?v=JVwkyYtZNzQ)
  - [Github: General and Focused Tools](https://github.com/just-every)
  - [Github: Browser integration, multi-agents, theming, and reasoning control. Orchestrate agents from OpenAI, Claude, Gemini or any provider (1.1k)](https://github.com/just-every/code)

## Best Implementation: BMAD (as of Aug 2025)

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








## Research Paper

  * ["Position: Levels of AGI for Operationalizing Progress on the Path to AGI." by Morris et al. (5 Jun 2024)](https://arxiv.org/pdf/2311.02462)


## Readings

* Hyperparamters
* Function Calling
* Context Caching
* Security: Jailbreaking and Pentesting
* 
* Advanced Prompts
  * Context Caching
    * [CONTEXT CACHING for Faster and Cheaper Inference (35:25) (3 Sep 2024)](https://www.youtube.com/watch?v=YeAAUghx_Xs)
  * DSPy
    * [Automated Prompt Engineering with DSPy (45:51) (10 Sep 2024)](https://www.youtube.com/watch?v=0gYMqFYRtDI&t=403s)
  * ECHO
    * [Video](https://www.youtube.com/watch?v=uVnYle95T0c)
    * [Github](https://github.com/Xalp/ECHO)
    * [ArXiv](https://arxiv.org/pdf/2409.04057)
  * LongWriter
    * [Github](https://github.com/THUDM/LongWriter)
  * LongCite
    * [Github](https://github.com/THUDM/LongCite/blob/main/README.md)
    * [ArXiv Paper](https://arxiv.org/abs/2409.02897)

* Functions
  * Structured Output
    [Reliable ways to get structured output from llms 2023](https://www.reddit.com/r/LocalLLaMA/comments/17a4zlf/reliable_ways_to_get_structured_output_from_llms/)
    * Instructor
      * [Instructor, Generating Structured Outputs with LLMs](https://python.useinstructor.com/)
      * [Instructor is All You Need: My Review of the Instructor LLM Library by Jason Liu](https://www.felixvemmer.com/en/blog/instructor-llm-framework-reviewed)
    * Outlines
      * [Github](https://github.com/dottxt-ai/outlines)
  * [How-to: Return structured output from LLMs | Langchain | Strategies & Code Implementation (22:43) (17 Aug 2024)](https://www.youtube.com/watch?v=eLL5Akg-UL8) (We'll run/critique the Colab in class)

# In-Class

* Models and Benchmarks
  * Deepseek 2.5
    * [Demo Website](https://chat.deepseek.com/)
    * [DeepSeek v2.5 (Full Test): Can This Open-Source LLM Beat GPT-4 in Coding? (15:54) (11 Sep 2024)](https://www.youtube.com/watch?v=dT8thuqHN2g)

* Structured Output
  * [Colab to Reading above](../code/week4_llm_functions_How_to_return_structured_data_from_LLMs_20240912.ipynb)

* Embeddings
  * [Embeddings in Depth - Part of the Ollama Course (10:26) (4 Sep 2024)](https://www.youtube.com/watch?v=aGwb1KLmtog&t=8s)
  * [Github Repo](https://github.com/technovangelist/videoprojects/tree/main/2024-02-22%20embeddings)
  * [A Beginner's Guide to Vector Embeddings (8:28) (8 Jun 2024)](https://www.youtube.com/watch?v=NEreO2zlXDk)



  
  
  ## Reading Assignments
  
  ### Required Cloud Sign-Ups and Laptop Setups
  
  Follow-the instructions as best you can to setup remote AI cloud services and configure your local laptop. DO NOT generate an API key yet - we'll do this in class with safeguards to prevent excess billings. Bring any questions/problems to class and we'll fix it during our break.
  
  [Setup Instructions](../modules/signups_setups.md)
  
  ### AI News/Current Events
  
  * [5 Signs the AI Bubble is Bursting (6:40) (16 Sep 2025)](https://www.youtube.com/watch?v=_L1JbzDnEMk)
  * [ () ()]()
  
  * [Does AI Actually Boost Developer Productivity? (100k Devs Study) - Yegor Denisov-Blanch, Stanford (18:11) (Aug 2025)](https://www.youtube.com/watch?v=tbDDYKRFjhk)
  * [Learning to Reason with LLMs (12 Sep 2024)](https://openai.com/index/learning-to-reason-with-llms/)
    
  ### Prompts 
  
  * [Google's New AI Feature is UNREAL... (14:51) (17 Sep 2024)](https://www.youtube.com/watch?v=VY0sdh3p-g0&t=843s)
  
  ### Embeddings and Vector Databases
  
  * [Word Embedding and Word2Vec, Clearly Explained!!! (16:11) (2023)](https://www.youtube.com/watch?v=viZrOnJclY0)
  * [A Beginner's Guide to Vector Embeddings (8:28) (8 Jun 2023)](https://www.youtube.com/watch?v=NEreO2zlXDk)
  * [What is a Vector Database & How Does it Work? Use Cases + Examples by Roie Schwaber-Cohen (3 May 2023)](https://www.pinecone.io/learn/vector-database/)
  
  ### Coding: Embeddings and Training Datasets
  
  * [Deeplearning.ai: Understanding and Applying Text Embeddings](https://www.deeplearning.ai/short-courses/embedding-models-from-architecture-to-implementation/)
  
  * [Deeplearning.ai: Preprocessing Unstructured Data for LLM Applications](https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/)
  
  ### Focus on These Concepts:
  
  * Understanding API basics and RESTful architecture (covered in class)
  * OpenAI API authentication and rate limits (rate limits in class)
  * Basic prompt engineering techniques
  * Ethical considerations in AI API usage
  * Handling API responses and error handling (in class)
  * Best practices for integrating AI APIs into applications
  * The role of AI APIs in modern software development (in class)
  * Advanced prompt engineering techniques
  * prompt engineering and API integration
  * Group activity: Designing prompts for specific use cases
  * Understanding the broader impact of AI APIs on the tech industry
  * Future developments in AI API technology and accessibility
  
  # WARNING:
  
  BE VERY CAREFUL WITH PAID API SERVICE like OpenAI - costs can run up quickly with excessive use and coding errors. Set-up safe maximum usage limits $5-10 that you can bump up over the course of the semester.
  
  Remember to review the API usage guidelines and rate limits to ensure responsible use of the OpenAI API. If you have any questions or encounter issues, please ask in class or contact the instructor via email.
  
  # In Class:
  
  * Housekeeping
    * Quiz
    * Grades
    * Miniproject #1 Review
  
  * Motivation
    * Udio.com
      * [So All Alone](https://www.udio.com/songs/5Ez3kNfY3F89Y7nnxrxssv)
      * [Tango del Lobo](hhttps://www.udio.com/songs/m4hSMdNzkY5cGvQFk9W4Dm)
    * DeepFakes, IP, Fair Use, and Free Speech
      * [They played my banned  A.I. mashup in Congress (Johnny Cash x Barbie Girl) (2:52) (Jul 2024)](https://www.youtube.com/watch?v=-vh4ErO-i5o)
      * [Johnny Cash - Barbie Girl (Cover by There I Ruined it) Restoration (1:56) (2023)](https://www.youtube.com/watch?v=MAFdzBTe2lg)
      * [Pulp Fiction: The Musical (EXTENDED) (0:58) (2023)](https://www.youtube.com/watch?v=6uLYs5tB0Is)
    * Meta GenAI and Future of Work
    * AI and Worker Power
      * [Podcast](https://drive.google.com/file/d/1xuh6YSPpF7cYvCzE2dnZ_u474qLQICp5/view?usp=sharing)
      * [Research](https://ofdavis.com/papers/ai/)
      * [Owen F. Davis, Labor Economist, New School](https://ofdavis.com/) 
  
  * Tools
    * [Learn 80% of Perplexity in under 10 minutes! (9:51) (17 Sep 2024)](https://www.youtube.com/watch?v=YoWdogtZRw8)
    * [napkin.ai](napkin.ai/)
    * [NotebookLM](https://notebooklm.google.com/)
  
  * Concepts
    * [Python Types](https://chatgpt.com/share/66f2de6c-bbfc-800d-8b3c-3abdeccdaf77)
    * Embeddings
      * Linguistics and Semiotics
      * Tokenization: words vs syllables vs tokens
      * Metric of Semantic Distance/Similarity
      * Tasks: Retrieving, ranking, clustering, etc.
      * Benchmark: MTEB
        * [HF Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)
        * [Github](https://github.com/embeddings-benchmark/mteb)
      * [Recent advances in universal text embeddings -- A Comprehensive Review of Top-Performing Methods on the MTEB Benchmark Hongliu_CAO 20240619_arxiv (6 Jun 2024)](https://www.semanticscholar.org/paper/Recent-advances-in-text-embedding%3A-A-Comprehensive-Cao/82de481ebb5cf401b215178c20b058c7c1a4f9cd)
    * API and RESTful Services
    * [unstructured](https://docs.unstructured.io/api-reference/api-services/sdk-python)
  
  * Hands-On
    * Google NotebookLM Paper-to-Podcast
      * [NotebookLM](https://notebooklm.google.com/)
      * [V0 App Generation](https://v0.dev/chat) What are the most impressive
      * [Cursor Prompts](https://www.cursordirectory.com/) Browse Categories, find familiar one to critique
  
  * AI Analyst
    * [Gardner AI Hype Cycle 2024](https://www.jaggaer.com/download/analyst-report/gartner-hype-cycle-for-artificial-intelligence-2024)
    * [Process Trends in AI](https://appian.com/blog/acp/ai/ai-trends-enterprises-2024#:~:text=Summary%20of%20trends.%201%20AI%20systems%20become%20more,operations%208%20Responsible%20AI%20gets%20prioritized.%20More%20items)
    * [Years to AGI](https://www.reddit.com/r/OpenAI/comments/191qk1d/ark_invest_predicts_agi_will_be_achieved_until/)
  * Research
    * [Phind.com](https://www.phind.com/)
  
  * API
    * Popular APIs
      * CNN
    * [HackerNews API JSON](https://github.com/darrenpaine/HackerNews-Pipeline/blob/main/Hacker%20News%20Pipeline.ipynb)
    * GopherSignal
    * [Gopher Signal](https://gophersignal.com/)
    * [Swagger API](https://gophersignal.com/swagger/index.html#/)
  * Transformer Architecture
    * [Transformer Explainer](https://poloclub.github.io/transformer-explainer/)
  * Prompt Engineering
    * [OpenAI Playground](https://platform.openai.com/playground/chat)
    * [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
    * [Claude System Prompt](https://docs.anthropic.com/en/release-notes  system-prompts#july-12th-2024)
    * [Google Gemini](https://ai.google.dev/gemini-api/prompts)
    * [Google Prompts](https://aistudio.google.com/app/prompts/new_chat)
    * [Google GEMs](https://gemini.google.com/u/0/gems/view)
  * Prompt Engineering API
    * [Learning to Reason with LLMs (12 Sep 2024)](https://openai.com/index/learning-to-reason-with-llms/)
    * [OpenAI Reasoning Models](https://platform.openai.com/docs/guides/reasoning/advice-on-prompting?reasoning-prompt-examples=coding-planning)
    * [OpenAI o1: Prompting Tips, Limitations, and Capabilities (13 Sep 2024)](https://www.vellum.ai/blog/how-to-prompt-the-openai-o1-model)
    * [OpenAI o1 EXPOSED: Tokenomics Breakdown by Elite Mathematician Terrence Tao (17 Sep 2024)](https://www.youtube.com/watch?v=hMbLq-TKlNA&t=435s)
  * Embeddings
    * [Viz Colorful Embeddings](https://huggingface.co/spaces/jphwang/colorful_vectors)
    * [NEW LLama Embedding for Fast NLP💥 Llama-based Lightweight NLP Toolkit 💥 (10:23) (15 Sep 2024)](https://www.youtube.com/watch?v=GF7wnswJF74)
  * Colab
    * Setup and Test with [Ollama with Llama 3.1](https://colab.research.google.com/drive/1WCsHuRedSztAFDa-3bRpnPuSX9KiLdto?usp=sharing)
  * Prompt Engineering
    * [DAIR.ai Prompt Engineering Guide](https://www.promptingguide.ai/)
    * [Jailbreaks](https://jailbreaks.org/)
  
  ## In-Class Programming Task:
  Create a Python script that uses the OpenAI API to generate a short story based on user input. The script should:
  
  1. Prompt the user for a genre, setting, and main character
  2. Use these inputs to craft an appropriate prompt for the OpenAI API
  3. Make an API call to generate a short story
  4. Display the generated story to the user
  5. Implement error handling for API failures or rate limit issues
  
  Submit your code and a brief report discussing your experience, challenges faced, and potential ethical considerations of your application.