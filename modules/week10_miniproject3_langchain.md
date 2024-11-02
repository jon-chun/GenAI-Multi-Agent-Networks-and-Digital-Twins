# Week 10: Agents

We progressed from prompt engineering, relatively low-level RAG applications, and now to higher-level LangChain and LangGraph abstractions. This week, we take a pause from DeepLearning.ai courses (just a repeat of last week) to focus on Miniproject #3 where you'll create de novo or customize an existing LangChain or LangGraph application. The readings and exercises will present 3-4 different approaches to learn LangChain/LangGraph Agents from beginner to intermediate levels.

You can customize and/or expand upon the two baseline OPTIONS A or B with data, prompts, or agents to replicate a workflow you know well from class, work, or interests. Alternatively, expand/customize Other Agent Ideas listed or ones you find on your own. Examples could include automated job search/applications, chatbot simulations, researching (web search, filtering and normalizing disparate data sources), report writing (essay brainstorming, outline, writing, revision, editing, etc), dataset creation (search, collect, filter, combine/normalize, etc into *csv/*xls), etc.

## Two Baseline Options

* OPTION A: LangGraph, Pinecone and RAG ArXiv Research Paper Agent (Colab, need more free APIs)
  * [LangGraph Deep Dive: Build Better Agents (46:12) (7 Aug 2024)](https://www.youtube.com/watch?v=usOmwLZNVuM)
  * [Colab Fixed](langgraph_01_gpt_4o_research_agent_20241102.ipynb)
  * [Colab Original](https://colab.research.google.com/github/pinecone-io/examples/blob/master/learn/generation/langchain/langgraph/01-gpt-4o-research-agent.ipynb)

* OPTION B: LangGraph Web Research Agent (Must have working local Conda and VSCode)
  * [LangGraph Simplified: Master Custom AI Agent Creation (43:51) (8 Jun 2024)](https://www.youtube.com/watch?v=R-o_a6dvzQM&t=3s)
  * [Github](https://github.com/john-adeojo/graph_websearch_agent)

## Other Agent Ideas

* [LangGraph Corrective RAG (CRAG) ](https://github.com/langchain-ai/langgraph/blob/main/examples/rag/langgraph_crag_local.ipynb)
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
* [LangChain and LangGraph videos](https://www.youtube.com/@htmlfivedev/playlists)
* [Vasanthengineer4949 LangChain Projects](https://github.com/Vasanthengineer4949/NLP-Projects-NHV/tree/main/Langchain%20Projects)
* [RabbitMetrics LangChain](https://www.youtube.com/@rabbitmetrics/videos)

## KEY QUESTIONS

1. Understand how agents, tools, state, pipelines and graphs work. 
2. Gain working familarity with LangChain and LangGraph APIs.
3. Learn how to integrate other (free tier) APIs to build tools.

## READINGS

### AI NEWS AND CULTURE

* (Use AI to summarize, refer to original on key points or points of confusion or if you are a fast reader and benefit from long-form narratives)[Machines of Loving Grace1 How AI Could Transform the World for the Better by Dario Amodei (Oct 2024)](https://darioamodei.com/machines-of-loving-grace)

### RESEARCH

* DocETL
  * (Read p1-3, up to but not incl Section 2)[Arxiv paper](https://arxiv.org/pdf/2410.12189v1)
  * (OPTIONAL video)[AI Agents for Smarter Data Input: DocETL (Berkeley) (30:14) (25 Oct 2024)](https://www.youtube.com/watch?v=ImYtIEFWfzg&t=169s)
  
### SOFTWARE ENGINEERING

* [Building and Testing Reliable Agents (22:16) (Jun 2024)](https://www.youtube.com/watch?v=XiySC-d346E)
* (OPTIONAL: Full version of previous video, intro up to 26:00) [Architecting and Testing Controllable Agents: Lance Martin (2:21:53) (12 Oct 2024)](https://www.youtube.com/watch?v=ib-wTAvCZqg)

### CODING

* (Beginner Overview) [LangChain: The BEST Library For Building AI Apps In Python? (11:40) (23 Oct 2024)](https://www.youtube.com/watch?v=R3KgD86VRzc)
  * [Github](https://github.com/pixegami/basic-langchain-examples)
* (Intermediate Sample Project)[LangGraph Simplified: Master Custom AI Agent Creation (43:51) (8 Jun 2024)](https://www.youtube.com/watch?v=R-o_a6dvzQM&t=3s)
  * [Github](https://github.com/john-adeojo/graph_websearch_agent)
* (Review/Repeat from last week)[AI Agents in LangGraph ~1.5hrs](https://learn.deeplearning.ai/courses/ai-agents-in-langgraph/)


## IN-CLASS EXERCISES

### OVERHEAD

* Quiz

### PRESENTATIONS

* Presentation #1
* Presentation #2

### ANNOUNCEMENTS

* Miniproject #3: Expectations, rubric, guidelines, advise, and deadlines

### NEWS: TECH

* [Livekit agents](https://github.com/livekit/agents)
* [OpenAI Swarm](https://www.youtube.com/watch?v=82FSnDcw72k)
  About Educational framework exploring ergonomic, lightweight multi-agent orchestration. Managed by OpenAI Solution team.
* [Palmyra-x-004 Tool Calling](https://writer.com/engineering/actions-with-palmyra-x-004/)

### NEWS: AUTOMATION

* [AI: Dystopia or Utopia? by Vinod Khosla (20 Sep 2024)](https://www.khoslaventures.com/ai-dystopia-or-utopia/)

### FOLLOW-UPS

* [Berkeley Tool Benchmark](https://gorilla.cs.berkeley.edu/leaderboard.html)
* [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://os-world.github.io/)

### RESEARCH

* DocETL
  * [DocETL: Agentic Query Rewriting and Evaluation for Complex Document Processing by Shankar et al. (16 Oct 2024)](https://arxiv.org/pdf/2410.12189v1)
  * [Github](https://github.com/ucbepic/docetl)
  * [DocETL Documentation](https://ucbepic.github.io/docetl/installation/)
* [GNN-RAG: Graph Neural Retrieval for Large Language Modeling Reasoning](https://github.com/cmavro/GNN-RAG)
* [Decoding on Graphs: Faithful and Sound Reasoning on Knowledge Graphs through Generation of Well-Formed Chains by Li et al. (24 Oct 2024)](https://arxiv.org/pdf/2410.18415)

### CONCEPTS

Bulletpoint Outline

### TOOLS

* AgentZ
* AgentQ
* [OpenMacro](https://github.com/Openmacro/openmacro)

### SOFTWARE ENGINEERING

* [LangGraph Studio](https://studio.langchain.com/?ref=blog.langchain.dev)
* (MacOS only)[LangGraph Studio Templates](https://blog.langchain.dev/launching-langgraph-templates/)

### CODE SAMPLE

In Class...

### CODE REVIEW

In Class...

### EXTRAS

* [Coming](oh_noes_404.md)

## RESOURCES

* [Coming](oh_noes_404.md)