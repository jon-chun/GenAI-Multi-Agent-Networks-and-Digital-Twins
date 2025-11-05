# Week 10: MAS, Orchestration, and Technical Writing of IT Project Proposal

This week we'll read more indepth on LangChain, LangGraph and LangSmith. We'll also explore various ways to create multi-agent systems (MAS) and orchestrate multiple agents for coding in particular or any task in general. We'll weight the pros/cons of custom MAS vs full-featured off-the-shelf MAS like those from LangChain, CrewAI, and other leading frameworks. Finally, we'll sketch out the Mini-Project #3 in writing a formal IT Project Proposal.


## ===[ ArXiv.org Research Paper 5 min Presentation ]===

| Date   | Name(s)              |
|--------|----------------------|
| 11/5   | Kirill               |
| 11/12  | Wisdom, Godwin       |
| 11/19  | Ann-Duncan, Adrian   |
| 12/3   | Murathan, Eli        |


## Quiz: Week 8

## Presentation: Kirill

## Mini-Project #3: RAG in A Real-World Implementation

FIRST WATCH: 
* [LightRAG: A More Efficient Solution than GraphRAG for RAG Systems? (19:48) (2024)](https://www.youtube.com/watch?v=oageL-1I0GE)

ASSIGNMENT for next class Nov 5th: 
* Come to class with a pitch for your RAG MP#3 topic including domain, dataset, focus (tech & user) deliverables, paper outline, architecture, and misc details (scalability, robustness, edge cases, security, etc). 

TIP: There are a LOT OF READINGS that you should selectively and deftly use AI to analyze, summarize and do personalized interactive Q&A to QUICKLY grok the big picture at your own comfort level. After an initial quick high-level review, look ahead at that  a level where you can discuss in class. 

* Review RAG and GraphRAG Readings from Previous Weeks and/or especially:

  - (RAG SURVEY) [15 Best Open-Source RAG Frameworks in 2025 by Bex Tuychiev (8 Apr 2025)](https://www.firecrawl.dev/blog/best-open-source-rag-frameworks#decision-table-for-choosing-the-right-rag-framework)
  - (WHY GRAPHS)[GraphRAG: New tool for complex data discovery now on GitHub by Edge et al. (2 Jul 2025)](https://www.microsoft.com/en-us/research/blog/graphrag-new-tool-for-complex-data-discovery-now-on-github/)
  - (GRAPH RAG) [LightRAG](https://github.com/HKUDS/LightRAG)
    - [(Kaggle) LightRAG Implementation With HuggingFace Models (9mos)](https://www.kaggle.com/code/ksmooi/lightrag-implementation-with-huggingface-models)
  - (GRAPH RAG SURVEY) [The AI-Native GraphDB + GraphRAG + Graph Memory Landscape & Market Catalog by Konur (26 Oct 2025)](https://dev.to/yigit-konur/the-ai-native-graphdb-graphrag-graph-memory-landscape-market-catalog-2198)
  - (GRAPH RAG RESOURCES) [Awesome-GraphRAG (GraphRAG Survey) (1.7k) (27 Oct 2025)](https://github.com/DEEP-PolyU/Awesome-GraphRAG)
  - (BENCHMARK) [GraphRAG (LightRAG) Benchmark (29 Oct 2025)](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark)
    - [(ArXiv) When to use Graphs in RAG: A Comprehensive Analysis for Graph Retrieval-Augmented Generation by Xiang et al. (7 Oct 2025)](https://arxiv.org/abs/2506.05690)
  
* Review this custom tech report skeleton and overview document I designed to complete and submit as your final workpiece for this Mini-Project #2 on a real-world RAG analysis, implementation and documentation.
  - [Overview and Rubric](../code/tech-reports/overview_and_rubric.md)
  - [CAPB Report Outline](../code/tech-reports/student_report_skeleton.md) <-- COMPLETE and SUBMIT for MP#3
  
# MP#3 Workflow
  - Review/Read these RAG/GraphRAG related resources and what we covered in class 
  - Pick a corpus that you are familiar with and justifies creating a RAG system 
  - Identify specific use case/deployments as explained in class
  - Complete the "CAPB Report" for your dataset/use-cases per the outline given above
  
* [OPTIONAL] Peruse/Search these Awesome resources for specific ideas, implemention, testing, security, etc. best practices:
  TIP: Again, use our RAG-related class readings, discussions, and demos to leverage AI in an informed and efficient way:
  - [Awesome Retrieval Augmented Generation (RAG) (777) (5 days)](https://github.com/Danielskry/Awesome-RAG)
  - [Awesome RAG Outline (30) (10 months)](https://github.com/noworneverev/Awesome-RAG)
  - [Awesome RAG (356) (1 Month)](https://github.com/frutik/Awesome-RAG)
  - [Awesome GraphRAG (1.7k) (3 days)](https://github.com/DEEP-PolyU/Awesome-GraphRAG)
  - [Awesome RAG Evaluation (179) (6 months)](https://github.com/YHPeter/Awesome-RAG-Evaluation)
  - [Awesome-RAG-Reasoning (337) (3 months)](https://github.com/DavidZWZ/Awesome-RAG-Reasoning)
  - [Awesome Trustworthy RAG (85) (3 months)](https://github.com/Arstanley/Awesome-Trustworthy-RAG)
  - [Awesome RAG Paper (1.3k) (8 months)](https://github.com/jxzhangjhu/Awesome-LLM-RAG)
  - [Awesome RAG Papers (324) (8 months)](https://github.com/coree/awesome-rag)
* [OPTIONAL] If you have time/interest:
  - Search the literature at perplexity.ai, semanticscholar.com, or scholar.google.com for new variations/improvements on the traditional RAG architecture to go deeper or look up some of the RAG research papers listed in the above Awesome list.
  - Search github.com for repos, library repositories, and other sources of FOSS software implementations. 
  - Use AI to research various RAG architectures, refinements, and implementation details (e.g. similarity algorithms, segmentation strategies, vector DB, benchmarking, monitoring, etc).

## ===[ New Reading Assignments ]===

### **[ Humanistic Readings ]**

* [AI Is 96% Cheaper. You Can't Compete. (26:32) (28 Oct 2025)](https://www.youtube.com/watch?v=gPYjWmJz_bA)
  - [(ArXiv) How Do AI Agents Do Human Work? Comparing AI and Human Workflows Across Diverse Occupations by Wang et al. (26 Oct 2025)](https://www.arxiv.org/abs/2510.22780)

### **[AI News/Current Events]**

* [Federal Judges Caught Using ChatGPT (22:38) (28 Oct 2025)](https://www.youtube.com/watch?v=cDzEP0yB-Kw)

### **[ New Technical Assignments ]**

#### LangSmith

* [LangSmith: Create an API Key](https://docs.langchain.com/langsmith/create-account-api-key?_gl=1*sqj3dn*_gcl_au*MTM3MDk3NzI2Ni4xNzU4MjkwMDMz*_ga*NjMyNzg3MTY0LjE3NjE1NzMxODc.*_ga_47WX3HKKY2*czE3NjE1NzMxODckbzEkZzEkdDE3NjE1NzYwNDAkajYwJGwwJGgw)
  
#### LangChain 1.0

* [Building LangGraph: Designing an Agent Runtime from first principles (4 Sep 2025)](https://blog.langchain.com/building-langgraph/)
* [How to turn Claude Code into a domain specific coding agent (11 Sep 2025)](https://blog.langchain.com/how-to-turn-claude-code-into-a-domain-specific-coding-agent/)
* [LangChain and LangGraph Agent Frameworks Reach v1.0 Milestones (22 Oct 2025)](https://blog.langchain.com/langchain-langgraph-1dot0/)
* [Agent Frameworks, Runtimes, and Harnesses- oh my! (25 Oct 2025)](https://blog.langchain.com/agent-frameworks-runtimes-and-harnesses-oh-my/)
* [(Updated Ver 1.0) LangChain Docs](https://docs.langchain.com/oss/python/releases/langchain-v1)

#### MAS Orchestration

* [(Github) Human Layer](https://github.com/humanlayer/humanlayer?ref=dailydev)
  - CodeLayer is an open source IDE that lets you orchestrate AI coding agents.
  - It comes with battle-tested workflows that enable AI to solve hard problems in large, complex codebases.
  - Built on Claude Code. Open source. Scale from your laptop to your entire team


## ===[ Coding ]===

### LangChain & LangGraph

* [LangChain Academy: Quickstart: LangChain Essentials - Python](https://academy.langchain.com/courses/langchain-essentials-python)

* [How to apply context engineering (23:19) (Aug 2025)](https://www.youtube.com/watch?v=nyKvyRrpbyY)
  - [(Slides) How to Fix your Context](https://docs.google.com/presentation/d/16aaXLu40GugY-kOpqDU4e-S0hD1FmHcNyF0rRRnb1OU/edit?slide=id.p#slide=id.p)
* [LangSmith Docs](https://docs.langchain.com/langsmith/home)
* (REVIEW IN-CLASS) [Deep Agents from Scratch (Colab)](https://github.com/langchain-ai/deep-agents-from-scratch)
  - [How to Fix Your Context](https://github.com/langchain-ai/how_to_fix_your_context)