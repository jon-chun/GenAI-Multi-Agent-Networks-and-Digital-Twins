# Week 10: Agents

We progressed from prompt engineering, relatively low-level RAG applications, and now to higher-level LangChain and LangGraph abstractions. This week, we take a pause from DeepLearning.ai courses (just a repeat of last week) to focus on Miniproject #3 where you'll create de novo or customize an existing LangChain or LangGraph application. The readings and exercises will present 3-4 different approaches to learn LangChain/LangGraph Agents from beginner to intermediate levels.

You can customize and/or expand upon the two baseline OPTIONS A or B with data, prompts, or agents to replicate a workflow you know well from class, work, or interests. Alternatively, expand/customize Other Agent Ideas listed or ones you find on your own. Examples could include automated job search/applications, chatbot simulations, researching (web search, filtering and normalizing disparate data sources), report writing (essay brainstorming, outline, writing, revision, editing, etc), dataset creation (search, collect, filter, combine/normalize, etc into *csv/*xls), etc.

## Two Baseline Options

* OPTION A: LangGraph, Pinecone and RAG ArXiv Research Paper Agent (Colab, need more free APIs)
  * [LangGraph Deep Dive: Build Better Agents (46:12) (7 Aug 2024)](https://www.youtube.com/watch?v=usOmwLZNVuM)
  * [Colab Fixed](../code/notebooks/langgraph_01_gpt_4o_research_agent_20241102.ipynb)
  * [Colab Original](https://colab.research.google.com/github/pinecone-io/examples/blob/master/learn/generation/langchain/langgraph/01-gpt-4o-research-agent.ipynb)

* OPTION B: LangGraph Web Research Agent (Must have working local Conda and VSCode)
  * [LangGraph Simplified: Master Custom AI Agent Creation (43:51) (8 Jun 2024)](https://www.youtube.com/watch?v=R-o_a6dvzQM&t=3s)
  * [Github](https://github.com/john-adeojo/graph_websearch_agent)

## Other Agent Ideas

* (Code Generation with LangGraph) [Building a self-corrective coding assistant from scratch (24:27) (27 Feb 2024)](https://www.youtube.com/watch?v=MvNdgmM7uyc)
  * [Github (Oct 2024)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/code_assistant/langgraph_code_assistant.ipynb)
* [LangGraph Corrective RAG (CRAG)](https://github.com/langchain-ai/langgraph/blob/main/examples/rag/langgraph_crag_local.ipynb)
* [LangGraph Chatbot Simulation](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb)
* [LangGraph Agentic RAG](https://github.com/langchain-ai/langgraph/blob/main/examples/rag/langgraph_agentic_rag.ipynb)
* LangChain Auto Job Application
  * [LangGraph Tutorial - Build an AI Agent That Gets You HIRED! (17:47) (16 Oct 2024)](https://www.youtube.com/watch?v=7KIrBjQTGLA&t=325s)
  * [Let's build a LangGraph app that helps you land your dream job (14 Oct 2024)](https://www.gettingstarted.ai/langgraph-tutorial-with-example/)
* [Extract Insights From Interview Transcripts Using LLMs (12:02) (23 Apr 2023)](https://www.youtube.com/watch?v=shkMOHwJ4SM)
  * [Github](https://github.com/gkamradt/langchain-tutorials/blob/main/data_generation/Working%20With%20Call%20or%20Video%20Transcripts.ipynb)
* (no code)[AI Shopping Assistant - Built using LangGraph (18:06) (10 Jun 2024)](https://www.youtube.com/watch?v=Z_3a0QV6mmQ)
  
## Collections of Apps

* [LangGraph Example Notebooks](https://github.com/langchain-ai/langgraph/tree/main/examples)
* [LangGraph Doc Tutorials](https://github.com/langchain-ai/langgraph/tree/main/docs/docs/tutorials)
* [LangChain and LangGraph videos](https://www.youtube.com/@htmlfivedev/playlists)
* [Vasanthengineer4949 LangChain Projects](https://github.com/Vasanthengineer4949/NLP-Projects-NHV/tree/main/Langchain%20Projects)
* [RabbitMetrics LangChain](https://www.youtube.com/@rabbitmetrics/videos)

## KEY QUESTIONS

1. Understand how agents, tools, state, pipelines and graphs work. 
2. Gain working familarity with LangChain and LangGraph APIs.
3. Learn how to integrate other (free tier) APIs to build tools.
4. (Dario Amodei) What societal tensions might arise between those who embrace AI-driven enhancements and those who "opt-out"? How might this affect social cohesion?
5. (Dario Amodei) In what ways might AI-enhanced state capacity and service delivery change citizens' relationship with government and democracy?
6. (Dario Amodei) How might the nature of work and meaning change in a world where AI can perform most tasks better than humans? What new forms of human activity might emerge?
7. (Dario Amodei) What potential challenges or resistance might arise when attempting to distribute AI benefits globally while promoting democratic values? How might different cultures respond?
8. (DocETL) How could the ability to automatically decompose complex tasks into simpler ones change the way we approach problem-solving in other domains beyond document processing?
9. (DocETL) What implications does the need for context-aware processing have for the future development of AI systems? How might this influence the evolution of LLM architectures?
10. (DocETL) How might the balance between automated optimization and human oversight evolve as these systems become more sophisticated? What role should human judgment continue to play?
11. (DocETL) What are the implications of using AI agents to evaluate other AI systems' output? How might this create both opportunities and potential blind spots in system validation?
12. 

## READINGS

### AI NEWS AND CULTURE

* (Use AI to summarize, refer to original on key points or points of confusion or if you are a fast reader and benefit from long-form narratives) [Machines of Loving Grace1 How AI Could Transform the World for the Better by Dario Amodei (Oct 2024)](https://darioamodei.com/machines-of-loving-grace)

### RESEARCH

* DocETL
  * (Read p1-3, up to but not incl Section 2) [Arxiv paper](https://arxiv.org/pdf/2410.12189v1)
  * (OPTIONAL video)[AI Agents for Smarter Data Input: DocETL (Berkeley) (30:14) (25 Oct 2024)](https://www.youtube.com/watch?v=ImYtIEFWfzg&t=169s)
  
### SOFTWARE ENGINEERING

* [Building and Testing Reliable Agents (22:16) (Jun 2024)](https://www.youtube.com/watch?v=XiySC-d346E)
* (OPTIONAL: Full version of previous video, intro up to 26:00) [Architecting and Testing Controllable Agents: Lance Martin (2:21:53) (12 Oct 2024)](https://www.youtube.com/watch?v=ib-wTAvCZqg)

### CODING

* (Beginner Overview) [LangChain: The BEST Library For Building AI Apps In Python? (11:40) (23 Oct 2024)](https://www.youtube.com/watch?v=R3KgD86VRzc)
  * [Github](https://github.com/pixegami/basic-langchain-examples)
* (Intermediate Sample Project) [LangGraph Simplified: Master Custom AI Agent Creation (43:51) (8 Jun 2024)](https://www.youtube.com/watch?v=R-o_a6dvzQM&t=3s)
  * [Github](https://github.com/john-adeojo/graph_websearch_agent)
* (Review/Repeat from last week) [AI Agents in LangGraph ~1.5hrs](https://learn.deeplearning.ai/courses/ai-agents-in-langgraph/)


## IN-CLASS EXERCISES

### ADMINISTRATIVE

* Quiz

### PRESENTATIONS

* Presentation #1
* Presentation #2

### ANNOUNCEMENTS

* Miniproject #3: Expectations, rubric, guidelines, advise, and deadlines

### NEWS: TECH

* [Sam Altman: What Startups Will be Steamrolled by OpenAI & Where is Opportunity | E1223 by 20VC with Harry Stebbings (39:20) (4 Nov 2024)](https://www.youtube.com/watch?v=peg-aX1oii4&t=395s)

[Model Development & Strategy:](https://claude.ai/chat/36b10ab4-08bc-4a63-83d9-0997e657a954)
- OpenAI is focused heavily on reasoning capabilities in their models, which they believe will unlock major advances in science and coding
- They expect rapid improvement in their "O Series" models (like GPT-4, GPT-4V)
- Sam believes the scaling laws for AI models will continue holding true for a long time, though there have been challenging periods

Business Strategy:
- OpenAI advises startups not to build businesses around patching current model limitations, as these will likely be solved in future iterations
- Instead, they encourage building businesses that benefit from models getting better
- Believes "trillions of dollars" of market value will be created through AI, though specific numbers are less important than the transformative potential

On Agents:
- Defines an agent as something that can handle long-duration tasks with minimal supervision
- Believes current discussions miss the potential for agents to do things humans physically couldn't do (like parallel tasks)
- Sees potential for agents to act like "really smart senior co-workers" on longer projects

Leadership & Company Building:
- Major challenge has been adapting to unprecedented growth speed - going from research to major company very quickly
- Emphasizes importance of building culture that can innovate rather than just copy others
- Believes in hiring both young talent and experienced professionals, rejecting the idea that only hiring under-30s is optimal
- Currently feeling uncertain about product strategy, considers it a personal area for improvement

Future Outlook:
- For 5-year horizon: Expects "unbelievably rapid rate of improvement in technology" but society changing surprisingly little
- Believes AI will be ubiquitous but discussion will shift from "models" to "systems"
- Top worry is managing the complexity of the entire AI ecosystem at every level

Sam also discussed competition, particularly noting respect for the Cursor team's work, and emphasized OpenAI's focus on long-term model improvement rather than short-term patches for current limitations.

### NEWS: AUTOMATION

* (Section New Economics in the AI World) [AI: Dystopia or Utopia? by Vinod Khosla (20 Sep 2024)](https://www.khoslaventures.com/ai-dystopia-or-utopia/)

### FOLLOW-UPS

* [Berkeley Tool Benchmark](https://gorilla.cs.berkeley.edu/leaderboard.html)
* [MMMU A Massive Multi-discipline Multimodal Understanding and Reasoning Benchmark for Expert AGI](https://mmmu-benchmark.github.io/)
* [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://os-world.github.io/)

### RESEARCH

* DocETL
  * [DocETL: Agentic Query Rewriting and Evaluation for Complex Document Processing by Shankar et al. (16 Oct 2024)](https://arxiv.org/pdf/2410.12189v1)

### CONCEPTS

* [The Evolution of AI: Introducing Autonomous AI Agents (2 Oct 2024)](https://shelf.io/blog/the-evolution-of-ai-introducing-autonomous-ai-agents/)
  What sets autonomous AI agents apart from generative AI, is that they can perform several tasks in a row, using memory and tools, without direct human input needed.
* [LangChain Academy: Intro to LangGraph ~4hrs](https://academy.langchain.com/courses/intro-to-langgraph)
* [LangChain Slides](../slides/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation.pdf)
* [LangChain Slides Online](https://files.cdn.thinkific.com/file_uploads/967498/attachments/ecd/3cc/6d3/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation.pdf)

### TOOLS

* DocETL
  * [Github](https://github.com/ucbepic/docetl)
  * [DocETL Documentation](https://ucbepic.github.io/docetl/installation/)
  * [Analyzing common weaknesses in ICLR 2024 reviews with DocETL (31:11) (29 Oct 2024)](https://www.youtube.com/watch?v=IlgueVqtHGo)
  * [ChatGPT Setup](https://chatgpt.com/share/672b25a2-2314-800d-8caf-a6b958aefa93)

### SOFTWARE ENGINEERING

* [LangGraph Studio](https://studio.langchain.com/?ref=blog.langchain.dev)
* (MacOS only) [LangGraph Studio Templates](https://blog.langchain.dev/launching-langgraph-templates/)

### CODE SAMPLE

In Class...

### CODE REVIEW

In Class...

### EXTRAS

* [Coming](oh_noes_404.md)

## RESOURCES

* [Coming](oh_noes_404.md)