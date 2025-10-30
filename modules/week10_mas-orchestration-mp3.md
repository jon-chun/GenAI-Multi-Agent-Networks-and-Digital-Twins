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

ASSIGNMENT for next class Nov 5th: Come to class with a pitch for your RAG MP#3 topic including domain, dataset, focus (tech & user) deliverables, paper outline, architecture, and misc details (scalability, robustness, edge cases, security, etc)

* Review this custom tech report skeleton and overview document that you will complete and submit as your final workpiece for this Mini-Project #2 on a real-world RAG analysis, implementation and documentation.
  - [Overview and Rubric](../code/tech-reports/overview_and_rubric.md)
  - [Report Outline](../code/tech-reports/student_report_skeleton.md)
* Pick a sizable reference corpus that you are familiar with and justifies creating a RAG system and a particular use case/deployment as citied in class. 
* Search these Awesome resources for ideas, implemention, testing, security, etc. best practices:
  - [Awesome Retrieval Augmented Generation (RAG) (777) (5 days)](https://github.com/Danielskry/Awesome-RAG)
  - [Awesome RAG Outline (30) (10 months)](https://github.com/noworneverev/Awesome-RAG)
  - [Awesome RAG (356) (1 Month)](https://github.com/frutik/Awesome-RAG)
  - [Awesome GraphRAG (1.7k) (3 days)](https://github.com/DEEP-PolyU/Awesome-GraphRAG)
  - [Awesome RAG Evaluation (179) (6 months)](https://github.com/YHPeter/Awesome-RAG-Evaluation)
  - [Awesome-RAG-Reasoning (337) (3 months)](https://github.com/DavidZWZ/Awesome-RAG-Reaso)
  - [Awesome Trustworthy RAG (85) (3 months)](https://github.com/Arstanley/Awesome-Trustworthy-RAG)
  - [Awesome RAG Paper (1.3k) (8 months)](https://github.com/jxzhangjhu/Awesome-LLM-RAG)
  - [Awesome RAG Papers (324) (8 months)](https://github.com/coree/awesome-rag)
* (OPTIONAL: If you have time/interest) Search the literature at perplexity.ai, semanticscholar.com, or scholar.google.com for new variations/improvements on the traditional RAG architecture to go deeper or look up some of the RAG research papers listed in the above Awesome list.
* Search github.com for repos, library repositories, and other sources of FOSS software implementations. 
* Use AI to research various RAG architectures, refinements, and implementation details (e.g. similarity algorithms, segmentation strategies, vector DB, benchmarking, monitoring, etc).
* Develop (with the help of AI of course), a realistic technical and business case white paper that surveys the options, alternatives, and jutification for your recommendations. 


## ===[ New Reading Assignments ]===

### **[ Humanistic Readings ]**

* [AI Is 96% Cheaper. You Can't Compete. (26:32) (28 Oct 2025)](https://www.youtube.com/watch?v=gPYjWmJz_bA)
  - [(ArXiv) How Do AI Agents Do Human Work? Comparing AI and Human Workflows Across Diverse Occupations by Wang et al. (26 Oct 2025)](https://www.arxiv.org/abs/2510.22780)

### **[AI News/Current Events]**

(Coming)...)

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
* [LangChain Academy: Quickstart: LangGraph Essentials - Python](https://academy.langchain.com/courses/langgraph-essentials-python)

* [How to apply context engineering (23:19) (Aug 2025)](https://www.youtube.com/watch?v=nyKvyRrpbyY)
  - [(Slides) How to Fix your Context](https://docs.google.com/presentation/d/16aaXLu40GugY-kOpqDU4e-S0hD1FmHcNyF0rRRnb1OU/edit?slide=id.p#slide=id.p)
* [LangSmith Docs](https://docs.langchain.com/langsmith/home)
* (REVIEW IN-CLASS) [Deep Agents from Scratch (Colab)](https://github.com/langchain-ai/deep-agents-from-scratch)
  - [How to Fix Your Context](https://github.com/langchain-ai/how_to_fix_your_context)