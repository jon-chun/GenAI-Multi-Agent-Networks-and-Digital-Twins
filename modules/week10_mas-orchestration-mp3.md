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





## MP #3 – RAG (AI SWE)

---

### 1. Research Tooling for RAG & AI SWE

#### 1.1 Core Research Workflows (Video Summary: *The Ultimate AI Toolkit Every Researcher Should Be Using in 2025*)

From the video *“The Ultimate AI Toolkit Every Researcher Should Be Using in 2025”* (17:12, 6 Oct 2025), tools are grouped by function across the academic workflow.

##### A. Literature Search & Discovery

* **SciSpace** (formerly Typeset.io)
  One-stop research environment: search papers, write reports, create presentations, and integrate with Google Scholar.
* **Elicit**
  Systematic literature reviews, evidence-based answers to research questions, and auto-generated research reports.
* **Semantic Scholar**
  Large-scale, free search engine across scientific fields.
* **Consensus**
  Ask a research question and get **Yes/No/Possibly** answers, aggregating stances from the literature.
* **Cintio**
  “Deep research” Q&A over real research papers (quick or in-depth questions).

##### B. Literature Mapping & Visualization

* **Litmaps**
  Build citation maps from a seed paper to discover related, recent, or highly cited work.
* **Research Rabbit**
  Visual “sandbox” exploration of fields via related work, prior work, and author networks.
* **Connected Papers**
  Focused on finding the **connecting paths** between two papers, including prior and derivative works.

##### C. Academic Writing & Feedback

* **Paperpal**
  Word/Docs integration for plagiarism checks, submission checks, paraphrasing, outlining, and PDF chat.
* **Thesify**
  Upload a paper for structured feedback (e.g., clarity of purpose, robustness of argument).
* **Jenni AI / Yomu AI**
  Auto-writers that continue sentences/paragraphs and cite sources while drafting literature coverage.
* **Writefull**
  “Grammarly for academics” with domain-specific language polishing and paraphrasing.
* **Trinka**
  Grammar, style, consistency checking, and quality reports for academic writing.

##### D. Data Analysis & Interpretation

* **Julius AI**
  Upload data, ask natural-language questions, and get code + visualizations (tables, graphs) for exploratory analysis.

##### E. Utility, Annotation & Specialized Tasks

* **Astera (Semantic Scholar)**
  Scholarly assistant for finding papers, summarizing literature, and (soon) data analysis.
* **Thesis AI**
  Long-form literature review generation (dozens of pages + references) from a single prompt.
* **Explain Paper**
  Upload a paper, highlight a section, and get explanations at various complexity levels (e.g., 5-year-old, middle school).
* **Source**
  Input a claim and retrieve sources that support or refute it.
* **Seamless for Science**
  Grants search + application helper, with essay and literature review support.

#### 1.2 Research Resources & SOTA Tools (by Function)

**Papers (Primary Literature)**

* Google Scholar – `scholar.google.com`
* arXiv – `arxiv.org`
* Semantic Scholar – `semanticscholar.org`
* Hugging Face Daily Papers – `https://huggingface.co/papers?q=RAG`

**Discussions & Community**

* x.ai
* YouTube
* Reddit
* AI blogs
* Hacker News – `news.ycombinator.com`

**Reviews & Peer Commentary**

* OpenReview – `openreview.net`

**General SOTA Assistants**

* ChatGPT – `chat.openai.com`

**Research-Oriented SOTA Tools**

* Perplexity – `perplexity.ai`
* QA Scholar / ScholarQA – `QAscholar (ScholarQA.ai)`
* Consensus – `consensus.app`, `https://get.consensus.app/`
* Elicit – `elicit.com/`
* Paperpal – `paperpal.com/`
* Thesify – `thesify.ai/`
* Thesis AI – `thesisai.io/`
* SciSpace / Typeset – `typeset.io/`, `scispace.com/`
* Jenni AI – `jenni.ai/`
* Julius AI – `julius.ai/`
* AnswerThis – `answerthis.io`
* Unriddle – `unriddle.ai/`

**Deep-Research SOTA**

* Gemini – `gemini.google.com`

**Specialized / Niche Tools**

* Anara – `anara.com/`
* Gatsby AI
* Cite AI
* Scholarly
* Petal
* Logically – `logically.app`
* Paper Guide

*(Many of these overlap with the “Ultimate Toolkit” list but are grouped here by role in RAG / AI SWE workflows.)*

---

### 2. RAG Strategy Design (Group #1)

From: *Every RAG Strategy Explained in 13 Minutes (No Fluff)* (12:50, 3 Nov 2025)

* Video: [https://www.youtube.com/watch?v=tLMViADvSNE](https://www.youtube.com/watch?v=tLMViADvSNE)
* Code: [https://github.com/coleam00/ottomator-agents/tree/main/all-rag-strategies](https://github.com/coleam00/ottomator-agents/tree/main/all-rag-strategies)

#### 2.1 Strategy Overview

| #  | Strategy               | Status         | Primary Use Case        | Pros                             | Cons                        |
| -- | ---------------------- | -------------- | ----------------------- | -------------------------------- | --------------------------- |
| 1  | Re-ranking             | ✅ Code Example | Precision-critical QA   | Highly accurate results          | Slower, more compute        |
| 2  | Agentic RAG            | ✅ Code Example | Flexible retrieval      | Autonomous tool selection        | More complex logic          |
| 3  | Knowledge Graphs       | 📝 Pseudocode  | Relationship-heavy data | Captures rich connections        | Infra / graph overhead      |
| 4  | Contextual Retrieval   | ✅ Code Example | Critical documents      | 35–49% better accuracy           | High ingestion cost         |
| 5  | Query Expansion        | ✅ Code Example | Ambiguous queries       | Better recall, more perspectives | Extra LLM call, higher cost |
| 6  | Multi-Query RAG        | ✅ Code Example | Broad searches          | Comprehensive coverage           | Multiple API calls          |
| 7  | Context-Aware Chunking | ✅ Code Example | General documents       | Semantically coherent chunks     | Slightly slower ingestion   |
| 8  | Late Chunking          | 📝 Pseudocode  | Long-context models     | Preserves full document context  | Requires long-context LLMs  |
| 9  | Hierarchical RAG       | 📝 Pseudocode  | Complex docs / corpora  | Precision + global context       | Complex multi-level setup   |
| 10 | Self-Reflective RAG    | ✅ Code Example | Research-style queries  | Self-correction / refinement     | Highest latency & cost      |
| 11 | Fine-tuned Embeddings  | 📝 Pseudocode  | Domain-specific RAG     | Best retrieval accuracy          | Needs training & eval       |

**Legend**

* ✅ **Code Example** – Full code in `implementation/` (educational, not production-ready)
* 📝 **Pseudocode Only** – Conceptual examples in `examples/`

---

### 3. RAG & Graphs (Group #2)

Focus: graph-structured knowledge + RAG.

* Compare:

  * **GraphRAG** – Graph-native retrieval + reasoning.
  * **LightRAG** – Reasoning over graphs with lighter infrastructure.
  * **Graphetti** – Emphasis on temporal graph dynamics.
* Track **recent research on GraphRAG** (methods, evals, and libraries) for:

  * Graph construction (KGs, heterogeneous graphs).
  * Graph-aware retrieval and reasoning.
  * Temporal and dynamic graphs for changing knowledge.

---

### 4. RAG, Memory & Long-Running Agents (Group #3)

#### 4.1 Long-Term Memory Tools

* **Supermemory** – Long-term, structured memory store for agents.

#### 4.2 LangChain & LangGraph

* **LangChain / LangGraph v1.0**

  * Blog: *LangChain and LangGraph Agent Frameworks Reach v1.0 Milestones* (22 Oct 2025).
* **DeepAgents**

  * Blog: *Introducing DeepAgents CLI* (30 Oct 2025).
  * GitHub: [https://github.com/langchain-ai/deepagents](https://github.com/langchain-ai/deepagents)
  * Docs: [https://docs.langchain.com/oss/python/deepagents/overview](https://docs.langchain.com/oss/python/deepagents/overview)
  * Example: `research_agent.py` – baseline research agent implementation.

#### 4.3 Research on Long-Horizon Agents

* **AgentFold: Long-Horizon Web Agents with Proactive Context Management** – Yi et al., 28 Oct 2025

  * arXiv: [https://arxiv.org/abs/2510.24699](https://arxiv.org/abs/2510.24699)
* **CoRT: Code-integrated Reasoning within Thinking** – Li et al.

  * GitHub: [https://github.com/ChengpengLi1003/CoRT](https://github.com/ChengpengLi1003/CoRT)

These connect to RAG via:

* Persistent memory stores.
* Proactive context management.
* Code-integrated reasoning for complex tasks.

---

### 5. RAG Evaluations (Group #4)

* **Awesome RAG Evaluations**

  * GitHub: [https://github.com/YHPeter/Awesome-RAG-Evaluation](https://github.com/YHPeter/Awesome-RAG-Evaluation)

Use for:

* Datasets and metrics for retrieval quality.
* Question answering correctness.
* Hallucination analysis and attribution.

---

### 6. RAG & Security / Trustworthiness (Group #5)

* **Awesome Trustworthy RAGs**

  * GitHub: [https://github.com/Arstanley/Awesome-Trustworthy-RAG](https://github.com/Arstanley/Awesome-Trustworthy-RAG)

Covers:

* Data security.
* Adversarial prompts & jailbreaks.
* Robustness, reliability, and provenance.

---

### 7. AI Agents & Reasoning (Group #6)

#### 7.1 Reasoning-Focused RAG & Agents

* **Awesome RAG Reasoning**

  * GitHub: [https://github.com/DavidZWZ/Awesome-RAG-Reasoning](https://github.com/DavidZWZ/Awesome-RAG-Reasoning)

* **CoRT: Teaching Language Models to Reason with Tools (Code-integrated Reasoning within Thinking)**

  * GitHub: [https://github.com/ChengpengLi1003/CoRT](https://github.com/ChengpengLi1003/CoRT)
  * Semantic Scholar: [https://www.semanticscholar.org/paper/CoRT%3A-Code-integrated-Reasoning-within-Thinking-Li-Tang/eff086f0a6d66b6514322c6832f2469d057f33e3](https://www.semanticscholar.org/paper/CoRT%3A-Code-integrated-Reasoning-within-Thinking-Li-Tang/eff086f0a6d66b6514322c6832f2469d057f33e3)
  * Discussion: [https://www.themoonlight.io/en/review/cort-code-integrated-reasoning-within-thinking](https://www.themoonlight.io/en/review/cort-code-integrated-reasoning-within-thinking)

Focus areas:

* Tool-augmented reasoning.
* Multi-step planning and verification.
* Integrating code execution into chain-of-thought.

#### 7.2 Example: Full-Stack RAG Agent for YouTube Content

* **First LIVE Agent Build – Fullstack RAG Agent for YouTube Content**

  * Video (3:05:05, 26 Oct 2025): [https://www.youtube.com/watch?v=ZHcXavLTA5s](https://www.youtube.com/watch?v=ZHcXavLTA5s)
  * GitHub: [https://github.com/coleam00/dynamous-ai-coach](https://github.com/coleam00/dynamous-ai-coach)

**Components**

* **Speech-to-Text (STT)**

  * AquaVoice – `https://aquavoice.com/`
  * FOSS: `https://epicenter.so/whispering`

* **Knowledge Capture & Visual Tools**

  * Excalidraw
  * Obsidian

* **Data Ingestion (YouTube Transcripts)**

  * Supadata – `https://supadata.ai/`

**Reference Diagrams**

* `![YT-RAG Personal AI Coach: Pipeline](../images/swe/fig_yt-rag-personal-ai-coach_pipeline_upscaled_20251105.png)`
* `![YT-RAG Personal AI Coach: AI Development Process](../images/swe/fig_yt-rag-personal-ai-coach_four-steps-ai-dev_upscaled_20251105.png)`

---

### 8. RAG Benchmarks & Evaluation Tooling

| Name               | Stars | Last Update | GraphRAG Support | Key Use Case                                | License               |
| :----------------- | :---: | :---------: | :--------------: | :------------------------------------------ | :-------------------- |
| **BERGEN**         |  222  |   Oct 2024  |        No        | General RAG QA benchmarking                 | CC BY-NC-SA           |
| **GraphRAG-Bench** |  236  |   Aug 2025  |        Yes       | GraphRAG pipeline benchmarking              | MIT                   |
| **RAGAS**          |  8.7k |   Apr 2025  |      Partial     | RAG feedback & eval toolkit                 | Open source (unspec)  |
| **RQABench**       |   –   |   Jul 2023  |        No        | Flexible, traceable QA benchmarking         | Open source           |
| **Greval**         |   –   |   May 2025  |        Yes       | GraphRAG evaluation tool                    | Open source           |
| **Open RAG Eval**  |   –   |   Oct 2025  |      Partial     | End-to-end retrieval + hallucination eval   | Research, open source |
| **TruLens**        | 2.8k+ |   Jun 2025  |        Yes       | RAG / multimodal agent eval + observability | Open source           |
