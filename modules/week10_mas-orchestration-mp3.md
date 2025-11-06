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



### MP #3 RAG (AI SWE):

#### RESEARCH TOOLS
* [The Ultimate AI Toolkit Every Researcher Should Be Using in 2025 (17:12) (6 Oct 2025)](https://www.youtube.com/watch?v=pDOPL53tcwQ)

This video, titled *"The Ultimate AI Toolkit Every Researcher Should Be Using in 2025,"* provides a rapid-fire overview of various AI tools designed to streamline the academic research workflow, from literature discovery and writing assistance to data analysis and grant searching.

The tools are grouped by their primary function:

### **Summary of the Video: The Ultimate AI Toolkit**

**1. Literature Search & Discovery**

* **SciSpace (formerly Typeset.io):** Aims to be a one-stop shop for research, allowing users to search papers, write reports, create presentations, and interact with Google Scholar [[00:09](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=9)].
* **Elicit:** A tool for systematic literature reviews, finding papers, and creating research reports, known as one of the "OGs" for answering research questions with evidence from studies [[00:26](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=26)].
* **Semantic Scholar:** A free and simple platform for finding research papers across millions of publications in all fields of science [[04:17](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=257)].
* **Consensus:** Allows users to type in a research question and receive a **Yes/No/Possibly** answer based on the existing literature, quantifying the research field's stance on a claim [[05:51](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=351)].
* **Cintio:** A tool for deep research, allowing users to ask quick or deep questions and receive answers sourced from real research papers [[06:33](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=393)].

**2. Literature Mapping & Visualization**

* **Litmaps:** Generates a research map from a "seed paper," allowing researchers to visualize connections between papers and find more recent or highly cited work [[04:36](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=276)].
* **Research Rabbit:** Offers an "open sandbox" approach for exploring a research field, enabling users to find similar work, earlier work, and linked content by authors [[05:07](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=307)].
* **Connected Papers:** A literature mapping tool that specializes in finding the **connecting path** between two specific papers, including "prior works" and "derivative works" (more recent papers) [[12:34](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=754)].

**3. Academic Writing & Feedback**

* **Paperpal:** A writing powerhouse that integrates with Word or Google Docs, offering features like plagiarism checks, submission checks, paraphrasing, outlining, and the ability to chat with PDFs [[00:53](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=53)].
* **Thesify:** Provides a **feedback summary** on uploaded research papers, giving targeted advice on how to make the writing more robust and academic, along with suggestions for improving elements like the purpose [[01:42](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=102)].
* **Jenni AI & Yomu AI:** Auto-writer tools that can generate the next part of a sentence or paragraph and cite sources as they write, helping users to quickly cover important aspects of a research field in a draft [[02:42](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=162), [03:38](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=218)].
* **Writefull:** Described as Grammarly "on steroids" for academics, offering spell-checking, paraphrasing, and academic-specific language polishing [[10:50](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=650)].
* **Trinka:** A writing tool focused on checking grammar, paraphrasing, consistency, and generating reports to ensure the academic writing is professional [[11:35](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=695)].

**4. Data Analysis & Interpretation**

* **Julius AI:** A data analysis tool where users can upload data and ask questions. It generates code and visualizations (like graphs and tables) to interrogate the data and find interesting trends, such as PhD attrition rates [[15:47](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=947)].

**5. Utility, Annotation, & Specialized Tasks**

* **Astera (from Semantic Scholar):** A scholarly research assistant for finding papers, summarizing literature, and soon, analyzing data [[01:24](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=84)].
* **Thesis AI:** Focuses on generating lengthy literature reviews from a single prompt, capable of producing dozens of pages and references to create a snapshot of a research field [[02:16](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=136)].
* **Explain Paper:** Allows users to upload a paper and highlight any section, then ask the AI to explain it at a chosen complexity level (e.g., to a middle schooler or a 5-year-old) [[10:09](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=609)].
* **Source:** A tool where users can input a claim (a sentence or paragraph) and ask the AI to find sources that either support or reject that claim [[13:41](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=821)].
* **Seamless for Science:** A tool with a granular focus on finding and applying for grants, along with an essay helper and literature review functionality [[14:47](http://www.youtube.com/watch?v=pDOPL53tcwQ&t=887)].

### **Resources Mentioned (Base URLs)**

* SciSpace
* Elicit
* Paperpal
* Semantic Scholar
* Thesify
* Thesis AI
* Jenni AI
* Yomu AI
* Litmaps
* Research Rabbit
* Consensus
* Cintio
* Anara.com
* Gatsby AI
* Cite AI
* Explain Paper
* Writefull
* Scholarly
* Trinka
* Connected Papers
* Petal
* Source
* Logically.app
* Seamless for Science
* Paper Guide
* Julius AI

http://googleusercontent.com/youtube_content/5


* Papers
  - scholar.google.com
  - arxiv.org
  - semanticscholar.org
  - [huggingface daily papers](https://huggingface.co/papers?q=RAG)
* Discussions
  - x.ai
  - YT
  - Reddit
  - AI blogs
  - news.ycombinator.com
* Reviews
  - OpenReview.net
* General SOTA
  - chat.openai.com
* Research SOTA
  - perplexity.ai
  - QAscholar (ScholarQA.ai)
  - consensus.app
  - elicit.com/
  - https://get.consensus.app/
  - paperpal.com/
  - thesify.ai/
  - thesisai.io/
  - typeset.io/
  - jenni.ai/
  - julius.ai/
  - answerthis.io
  - unriddle.ai/
* DeepResearch SOTA:
  - gemini.google.com
* Specialized
  - scispace.com/
  - anara.com/


#### (GROUP #1) RAG Strategy: Strategy Overview (ex: (#1) Re-Reanking,(#2) Agentic Rage, (#7) Context-Aware Chunking)

* (DEMO) [Every RAG Strategy Explained in 13 Minutes (No Fluff) (12:50) (3 Nov 2025)](https://www.youtube.com/watch?v=tLMViADvSNE)
  [Github](https://github.com/coleam00/ottomator-agents/tree/main/all-rag-strategies)

| # | Strategy | Status | Use Case | Pros | Cons |
|---|----------|--------|----------|------|------|
| 1 | [Re-ranking](#1-re-ranking) | ✅ Code Example | Precision-critical | Highly accurate results | Slower, more compute |
| 2 | [Agentic RAG](#2-agentic-rag) | ✅ Code Example | Flexible retrieval needs | Autonomous tool selection | More complex logic |
| 3 | [Knowledge Graphs](#3-knowledge-graphs) | 📝 Pseudocode Only | Relationship-heavy | Captures connections | Infrastructure overhead |
| 4 | [Contextual Retrieval](#4-contextual-retrieval) | ✅ Code Example | Critical documents | 35-49% better accuracy | High ingestion cost |
| 5 | [Query Expansion](#5-query-expansion) | ✅ Code Example | Ambiguous queries | Better recall, multiple perspectives | Extra LLM call, higher cost |
| 6 | [Multi-Query RAG](#6-multi-query-rag) | ✅ Code Example | Broad searches | Comprehensive coverage | Multiple API calls |
| 7 | [Context-Aware Chunking](#7-context-aware-chunking) | ✅ Code Example | All documents | Semantic coherence | Slightly slower ingestion |
| 8 | [Late Chunking](#8-late-chunking) | 📝 Pseudocode Only | Context preservation | Full document context | Requires long-context models |
| 9 | [Hierarchical RAG](#9-hierarchical-rag) | 📝 Pseudocode Only | Complex documents | Precision + context | Complex setup |
| 10 | [Self-Reflective RAG](#10-self-reflective-rag) | ✅ Code Example | Research queries | Self-correcting | Highest latency |
| 11 | [Fine-tuned Embeddings](#11-fine-tuned-embeddings) | 📝 Pseudocode Only | Domain-specific | Best accuracy | Training required |

### Legend
- ✅ **Code Example**: Full code in `implementation/` (educational, not production-ready)
- 📝 **Pseudocode Only**: Conceptual examples in `examples/`

#### (GROUP #2) RAG and Graphs:

* Compare GraphRAG, LightRAG (Reasoning over Graphs), Graphetti (Temporal Dynamics)
* Recent research on Graph RAGs

#### (GROUP #3) RAG, Memory, and Long-Running Agents

* [Supermemory](https://supermemory.ai/)
* LangChain:
* - [LangChain and LangGraph Agent Frameworks Reach v1.0 Milestones (22 Oct 2025)](https://blog.langchain.com/langchain-langgraph-1dot0/)
* - [(Blog) Introducing DeepAgents CLI (30 Oct 2025)](https://blog.langchain.com/introducing-deepagents-cli/)
  - [(Github) DeepAgents](https://github.com/langchain-ai/deepagents?ref=blog.langchain.com)
  - [(Docs) DeepAgents Overview](https://docs.langchain.com/oss/python/deepagents/overview)
  - [(Code) LangChain Research Agent](https://github.com/langchain-ai/deepagents/blob/master/examples/research/research_agent.py  )
* Research
  - [AgentFold: Long-Horizon Web Agents with Proactive Context Management by Yi et al. (28 Oct 2025)](https://arxiv.org/abs/2510.24699)
  - [(Github) CoRT: Code-integrated Reasoning within Thinking by Li et al. (64)](https://github.com/ChengpengLi1003/CoRT)

#### (GROUP #4) Evaluations

* [Awesome RAG Evaluations](https://github.com/YHPeter/Awesome-RAG-Evaluation)

#### (GROUP #5) RAG and Security:

* [Awesome Trustworthy RAGs](https://github.com/Arstanley/Awesome-Trustworthy-RAG)

#### (GROUP #4) AI Agents and Reasoning

* [Awesome RAG Reasoning](https://github.com/DavidZWZ/Awesome-RAG-Reasoning)
* [Teaching Language Models to Reason with Tools ()](https://github.com/ChengpengLi1003/CoRT)
  - [(ArXiV) ]()
  - [(SemanticScholar.org)](https://www.semanticscholar.org/paper/CoRT%3A-Code-integrated-Reasoning-within-Thinking-Li-Tang/eff086f0a6d66b6514322c6832f2469d057f33e3  )
  - [(Discuss) themoonlight.io ](https://www.themoonlight.io/en/review/cort-code-integrated-reasoning-within-thinking)


* [First LIVE Agent Build - Fullstack RAG Agent for YouTube Content (3:05:05) (26 Oct 2025)](https://www.youtube.com/watch?v=ZHcXavLTA5s)
  - [Github](https://github.com/coleam00/dynamous-ai-coach)
  - STT
    - [AquaVoice](https://aquavoice.com/)
    - [(FOSS) https://epicenter.so/whispering/](epicenter.so/whispering)
  - [Excalidraw]()
  - [Obsidian]()
  - [(Scrape YT Transcripts) Supadata](https://supadata.ai/)

![YT-RAG Personal AI Coach: Pipeline](../images/swe/fig_yt-rag-personal-ai-coach_pipeline_upscaled_20251105.png) 

![YT-RAG Personal AI Coach: AI Development Process](../images/swe/fig_yt-rag-personal-ai-coach_four-steps-ai-dev_upscaled_20251105.png)

### RAG Benchmarks

| Name | Stars | Last Update | GraphRAG Support | Key Use Case | License |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BERGEN | 222 | Oct 2024 | No | General RAG QA benchmarking | CC BY-NC-SA |
| GraphRAG-Bench | 236 | Aug 2025 | Yes | GraphRAG pipeline benchmarking | MIT |
| RAGAS | 8.7k | Apr 2025 | Partial | Evaluation toolkit for RAG feedback | Open source (unspecified) |
| RQABench | - | Jul 2023 | No | Flexible, traceable benchmarking | Open source |
| Greval | - | May 2025 | Yes | GraphRAG evaluation tool | Open source |
| Open RAG Eval | - | Oct 2025 | Partial | End-to-end retrieval + hallucination check | Research open source |
| TruLens | 2.8k+ | Jun 2025 | Yes | RAG and multimodal agent eval with observability | Open source |        