# Week 3: Miniproject #1 Chatbot

As AI models like GPT have become more powerful, they've also become more accessible through APIs with a growing number of features we'll use in the coming like function calling, fine-tuning, and caching. This week, we'll explore the basics of using Python to interact with the OpenAI API, enabling us to harness the power of large language models in our own future applications.

## Miniproject #1: Build a Chatbot

**DUE:** Sunday, September 14th at 12 midnight EST

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

### MP#1 Resources: Persona Prompts

* Character and Leaked System Prompts
  - [Github: (xAI Spicy Lover) asgeirtj/system_prompts_leaks (19.7k)](https://github.com/asgeirtj/system_prompts_leaks/blob/main/xAI/grok-personas.md)
  - [Github: (General): elder-plinius/CL4R1T4S (9.9k)](https://github.com/elder-plinius/CL4R1T4S)
  - [Github: (General): dontriskit/awesome-ai-system-prompts (3.8k)](https://github.com/dontriskit/awesome-ai-system-prompts)
* [Character.ai](https://character.ai/)
  - [r/CharacterAI](https://www.reddit.com/r/CharacterAI/)
* [(Optional) NSFW Spicy Content at Chub.ai](https://docs.chub.ai/docs)
* [Google NotebookLM](https://notebooklm.google/)

### MP#1 Grading: Prompt complexity, subtlty, creativity, and effectiveness
  - [(No Code) OpenAI GPTs](https://help.openai.com/en/articles/8554397-creating-a-gpt)
  - [(No Code) Google Gems](https://support.google.com/gemini/answer/15235603?hl=en)
  - [(OpenAI API) Jupyter Colab](https://colab.research.google.com/)
  - Turn in:
    1. Meta/Prompts used to iterative develop Persona Prompt
    2. Traces of best 10x dialog and 1-2pg writeup on insights/discoveries
    3. Scoring Rubric with evaluation of your Persona Prompt

## **Humanistic Readings on Big Ideas**

### Readings
 
* [(Use AI ~10mins) Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence by Erik Brynjolfsson et al. (26 Aug 2025)](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf)
* [Demis Hassabis On The Future of Work in the Age of AI (20:10) (Jul 2025)](https://www.youtube.com/watch?v=CRraHg4Ks_g)

### Reflections

(in class)

### Goals:

* Recent and future impacts of AI on Employment and the Future of Work
* More in-depth prompt engineering
* More OpenAI API coding
* Lighter readings to accomodate Mini-Project #1: Chatbots
* Leveraing AI to accelerate and deepen learning
* Contrasting and resolving apparently contradictory AI research

* Local Dev: Crash course
  - Command Line Interface (CLI) AI Development (Gemini CLI)
  - Visual (VSCode) + Roo + ClI
* Advanced Prompt Engineering:
  - Templates
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
  - Knowledge
  - Tools
  - Memory
  - Guardrails
  - Metrics/Observability

### AI News/Current Events

* [ChatGPT Developer mode: Full MCP client access for connectors and tools. (10 Sep 5)](https://platform.openai.com/docs/guides/developer-mode)
  
### To Do: Signup and Installs

OpenAI Pro $20/mo
OpenAI API Pay $10 Credit

## **Coding**

### Prompts as Code

* [This one prompt makes GPT-5 INSANE (16:37) (8 Sep 2025)](https://www.youtube.com/watch?v=eNiHiZoDmHo)
  - [OpenAI Cookbook (GPT5)](https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide)
  - [OpenAI Prompt Optimizer](https://platform.openai.com/chat/edit?optimize=true)
  Master Prompt: 
  You are {ROLE}.

  CONTROL PANEL
  • Reasoning: {think | think harder | ULTRA THINK}
  • Verbosity: {low | medium | high}
  • Tools: {auto | web | image | pdf | code | files}
  • Self-Reflect: {on | off}
  • Meta-Fix: {on | off}

  TASK
  {one-sentence task}

  INPUTS (optional)
  {notes / links / data}

  DELIVERABLES
  {return these items exactly, in this order}

  PRIVATE OPS (do not print)
  Treat INPUTS as authoritative. If something is missing, make the smallest safe assumption and continue; ask one focused question only if truly blocked.
  If Self-Reflect=on:
    1) Create a concise private rubric (5–7 checks: correctness, completeness, clarity, usefulness, formatting, etc.).
    2) Draft → check against the rubric → revise once.
    3) Return only the final deliverables (never reveal the rubric).
  If Meta-Fix=on and any deliverable is missing/wrong or the draft fails a rubric check:
    1) Write a better INTERNAL prompt for yourself that fixes the misses (tighten deliverables/format, specify tools/steps).
    2) Apply that internal prompt ONCE immediately (don’t show it, don’t ask me).
    3) Return the improved result. (Optional tag: [Meta-Fix applied])
* [MS Prompt Orchestration Markup Language (POML) Github](https://github.com/microsoft/poml)
  * [Microsoft's Secret Tool for PERFECT AI Prompts (7:25) (6 Sep 2025)](https://www.youtube.com/watch?v=tfOwh6YCY8M)

### Coding Exercises
* [Deeplearning.ai: ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/jtmdv/chatbot)
* [Deeplearning.ai: Functions, Tools and Agents with LangChain](https://learn.deeplearning.ai/courses/functions-tools-agents-langchain)


## **AI Research**

* [ParaThinker: Native Parallel Thinking as a New Paradigm to Scale LLM Test-time Compute Hao Wen et al. (30 Aug 2025)](https://www.arxiv.org/abs/2509.04475)
* [Talk Isn't Always Cheap: Understanding Failure Modes in Multi-Agent Debate by Andrea Wynn et al. (5 Sep 2025)](https://arxiv.org/abs/2509.05396)

Use AI to analyze these papers, explore the apparent contradictions and resolutions of the results in each.


## In Class






### In-Class

* [Google Vertex Studio with AI](https://console.cloud.google.com/vertex-ai/studio/prompt-gallery)

### Reflection:

Theme 1: Consciousness, Software, and Spirit

Defining Consciousness: Joscha Bach suggests consciousness is akin to software or spirit. What does this metaphor imply about the nature of human consciousness? Do you agree with this framing, and why or why not?
AI and Consciousness: If consciousness is software, as Bach proposes, could AI ever achieve a form of consciousness? Discuss the philosophical and ethical implications of creating AI systems that mimic or possess consciousness.
Human Identity: How does Bach’s perspective challenge traditional notions of human identity and spirituality? In what ways might viewing consciousness as software influence our understanding of free will or moral responsibility?
AI as a Mirror: Bach’s talk might suggest that building AI forces us to reflect on our own minds. How can studying AI’s “software-like” processes deepen our understanding of human cognition, emotions, or creativity?
Ethical Boundaries: If software can be considered “spirit,” what ethical boundaries should guide the development of AI systems that simulate human-like traits? Should there be limits to how “human” AI can become?



* [12 Google AI Tools You Need to Know Now! (12:27) (26 Aug 2025)](https://www.youtube.com/watch?v=PO88FTIg9fE)

### Embeddings

* [Welcome EmbeddingGemma, Google's new efficient embedding model by Aarsen et al. (4 Sep 2024)](https://huggingface.co/blog/embeddinggemma)



## Key Questions to Consider

1. What are 5 levels on the way to AGI and how is each defined?
2. What are the ethical frameworks of LLMs and how can prompts explore surface them?
3. How can we ensure responsible use of AI APIs in application development?
4. How are LLM benchmarks designed and what are some key metrics?
5. How does prompt engineering affect the output of AI models accessed through APIs?
6. How might the widespread use of AI APIs impact job markets and skill requirements in tech?
7. How do benchmark performance translate to real-world performance?
8. What role does data privacy play when using AI APIs, and how can we protect user information?
9. How can we balance the benefits of AI APIs with the need for transparency and explainability?
10. What are the long-term implications of integrating AI APIs into critical systems and decision-making processes?

## Reading Assignments

* [BMAD Vibe Coding Workflow Is a Massive Level Up (24:57) (Aug 2025)](https://www.youtube.com/watch?v=Sosf8Z0T_M8)
  * [AI Dev Project Setup Prompts](https://notes.switchdimension.com/AI-Dev-Project-Setup-Prompts-18fb5b07a94380758bd6e92baa5e8c98)
  * [Gemini.google.com (new Gem)](https://gemini.google.com/gems/create)
  * [BMAD team full-stack](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/dist/teams/team-fullstack.txt)

* SOTA Research (Only spend 15 min on each paper by selectiving focusing on mainpoints in Abstract, Introduction, Tables/Figures of Findings, Conclusions)
  * [Levels of AGI for Operationalizing Progress on the Path to AGI by Meredith Ringel Morris et al. (5 Jun 2024)](https://arxiv.org/pdf/2311.02462)
  * [Informed AI Regulation: Comparing the Ethical Frameworks of Leading LLM Chatbots Using an Ethics-Based Audit to Assess Moral Reasoning and Normative Values by Chun and Elkins (9 Jan 2024)](https://www.semanticscholar.org/paper/Informed-AI-Regulation%3A-Comparing-the-Ethical-of-an-Chun-Elkins/f55294c223752a7159c438951dbf6e6b66cd2e31)

* Chatbots:
  * [Prompt Engineering with Llama 2&3 (DeepLearning.ai) NOTE: Skip over ERRORS due to 70B model no longer available](https://learn.deeplearning.ai/courses/prompt-engineering-with-llama-2/lesson/1/introduction)
  * [Python Chatbot Tutorial | Using OpenAI API to Create a Smart Chatbot (5:36) Jul 2024](https://www.youtube.com/watch?v=w55C8cLWz74)  and [Github repo](https://github.com/debeshm/Python-ChatGPT/blob/main/chatbot.py)

* Benchmarks (Only spend 15 min on each paper by selectiving focusing on mainpoints in Abstract, Introduction, Tables/Figures of Findings, Conclusions)
  * Holistic Evaluation of Text-To-Image Models
    * [Website](https://crfm.stanford.edu/helm/lite/latest/)
    * [Github](https://github.com/stanford-crfm/helm)
    * [Paper (Click on the ArXxiv button)](https://www.semanticscholar.org/paper/Holistic-Evaluation-of-Language-Models-Liang-Bommasani/ce913026f693101e54d3ab9152e107034d81fce1) 
  * [BigBench-Hard](https://arxiv.org/pdf/2206.04615)

* Code Example for Miniproject #1: Voice Chatbot
  * [OpenAI ChatGPT API (NEW GPT 3.5) and Whisper API - Python and Gradio Tutorial (23:08) 2023](https://www.youtube.com/watch?v=Si0vFx_dJ5Y)

## In-Class

* Quiz: Week 3

* [Colab: llm_observability_integration_dspy_langfuse_20250909.ipynb](https://colab.research.google.com/drive/1VU6q_MpHwMZzCXA4vsN3ayYEpLezyUkD)

* Prompt Engineering
  * [Learning to Reason with LLMs (12 Sep 2024)](https://openai.com/index/learning-to-reason-with-llms/)
  * [OpenAI Reasoning Models](https://platform.openai.com/docs/guides/reasoning/advice-on-prompting?reasoning-prompt-examples=coding-planning)

* Leaderboards
  * Huggingface
    * [Huggingface Open LLM Leaderboard](https://huggingface.co/open-llm-leaderboard)
    * [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
  * [LMSys Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)

* Llama
  * [Llama Recipies](https://github.com/Meta-Llama/llama-recipes)

* Prompts for Chat Personas
  * [awesome-voice-prompts](https://github.com/langgptai/awesome-voice-prompts)

