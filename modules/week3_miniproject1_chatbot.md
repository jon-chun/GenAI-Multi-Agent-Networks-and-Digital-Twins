# Week 3: Miniproject #1 Chatbot

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
  - IF YOU HAVE ANY QUESTIONS: please email me at chunj@kenyon.edu 
  - See full [Mini-Project #1 Instructions](./miniproject1_instructions_persona-chatbot-and-benchmark.md)
  - Turn in:
### Final Repository Structure

```
github.com/<your-username>/iphs391_fall2025_miniproject-1_benchmarking-expert-chatbot-personas/
├── README.md                    # AI-generated project landing page (Step 7)
├── metaprompt_history.txt       # Step 2
├── prompt_persona.txt           # Step 2  
├── chat_history.md              # Step 3
├── chat_rubric_history.md       # Step 4
├── chat_rubric.txt              # Step 4
└── mp1_chatbot_report.docx      # Step 5
```

### File Descriptions

| Filename | Step | Description |
|----------|------|-------------|
| `README.md` | 7 | comprehensive project landing page and documentation |
| `metaprompt_history.txt` | 2 | Complete iteration history of persona prompt development |
| `prompt_persona.txt` | 2 | Final, refined chatbot persona prompt |
| `chat_history.md` | 3 | Best 10-turn conversation exported in markdown format |
| `chat_rubric_history.md` | 4 | ChatGPT conversation showing rubric development process |
| `chat_rubric.txt` | 4 | Final evaluation rubric with factor definitions, weights, and scoring guidelines |
| `mp1_chatbot_report.docx` | 5 | Comprehensive analysis following the 6-section structure above |

# ==========[ Follow-Ups ]==========

### Signup and Installs

* AI Research Presentations
  - [Signup List](https://forms.gle/wwT9Qb8e8YypzYcF9)

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




