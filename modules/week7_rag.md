# Week 7: RAG and Mini-Project #3: A Real Customer Service Chatbot 

As this class studies the "Frontiers of AI" which is a rapidly moving target, the past week has presented two new related opportunities for us to pivot towards. First, OpenAI Dev Day this week introduced a major new platform for building agentic systems that ties together many best practices from industry including guardrails, security, prompt optimization, and other key features. Secondly, we may have the opportunity through one of our IPHS human-centered AI alumni to apply this framework for a real-world greenfield deployment for customer support in a multi-billion dollar parts distributor.

We will morph Mini-Project #3 from a simple RAG system to a state-of-the-art commercial customer support pipeline that mirrors the real-world concerns of typical retail, warehouse, and distribution logistics concerns. In parallel, we'll continue to carefully explore the benchmark dataset options for Mini-Project #2 with the goal of planning Thanksgiving break for everyone to produce their 300 data samples.

Although increasingly a turnkey solution, it's important that you have familiarity with RAG systems. Retrieval Augmented Generation (RAG) and chatbots are two of the most prominent applications that highlight the unique value LLM models bring to traditional software engineering. A deeper understanding of RAG is not only a practical skill, but it operationalizes and illustrates multiple real-world tradeoffs between (a) performance vs cost, safety, bias, etc., (b) model/tool selection, and (c) various software architectures. RAG systems incorporate and extend last weeks' study of embeddings and vector databases and introduce a few new advanced concepts like hybrid search and reranking.  


# ==========[ ArXiv.org Research Paper 5 min Presentation ]==========

## Schedule

| Date   | Name(s)              |
|--------|----------------------|
| 10/15  | Peter                |
| 10/22  | Tiffanie             |
| 10/29  | Anna                 |
| 11/5   | Kirill               |
| 11/12  | Wisdom, Godwin       |
| 11/19  | Ann-Duncan, Adrian   |


# Quiz: Week 7

# Presentation: Peter

# Mini-Projects:

## Mini-Project #2: Embedding Research 

(Coming... more details upcoming based upon our class discussion Oct 8, 2025)


## Mini-Project #3: A Real Customer Service Chatbot

Stage 1: Prompt Cookbook: Customized, Optimized, and Well-Structured Prompt
Stage 2: Rules-based Customer Service Agent Pipeline
Stage 3: Personalized Customer Service Agentic Pipeline


# ==========[ New Reading Assignments ]==========

## **[ Humanistic Readings ]**

* [Let's Talk about AI Art by Oatmeal](https://theoatmeal.com/comics/ai_art)

## **[AI News/Current Events]**

* [CEOs Think AI ROI Is Coming Faster (6:39) (8 Oct 2025)](https://www.youtube.com/watch?v=ECyHWe7eDLY)
* [Accenture Makes Room for AI With Thousands of Layoffs by Mallett (29 Sep 2025)](https://tech.co/news/accenture-layoffs-ai-pivot)
* [(Use AI) Google DORA 2025 State of AI Assisted Software Development](../docs-reports/2025_state_of_ai_assisted_software_development.pdf)

## **[ New Technical Assignments ]**

### OpenAI Dev Day Videos

* [(Brief) Intro to Agent Builder (5:29) (7 Oct 2025)](https://www.youtube.com/watch?v=44eFf-tRiSg)
* [(Intermediate) I Made OpenAI's Agent Builder 10x More Powerful (Connected 500+ Apps) (21:02) (8 Oct 2025)](https://www.youtube.com/watch?v=0uNot5guN8s&t=3s)
* [(Full) Master the NEW OpenAI Agent Builder In 1 Hour (Complete Course) (1:02:02) (7 Oct 2025)](https://www.youtube.com/watch?v=kLd7nSkDxig)
  - [OpenAI Agent Builder](https://platform.openai.com/agent-builder)
  - [OpenAI Playground](https://chatkit.studio/playground)
  - [OpenAI Widget Builder](https://widgets.chatkit.studio/)

### Chat Guardrails

* [OpenAI Guardrails Python](https://openai.github.io/openai-guardrails-python/)
  - Unintended Behavior
  - Malicious Behavior
  - Mask/Flag PII
  - Detect Jailbreaks (Security)
  - Other Safeguards

### Benchmark Datasets, Prompt Optimization and Observability

* [OpenAI Working with Evals](https://platform.openai.com/docs/guides/evals?api-mode=responses)
  - Datasets
  - Trace Grading
  - Automated Prompt Optimization
  - Third-party Model Support

### Reinforcement Fine-Tuning

* [Reinforcement fine-tuning](https://platform.openai.com/docs/guides/reinforcement-fine-tuning)
  - Custom Tool Calling
  - Custom Graders

## **[ Coding Exercises / Design ]**

* NOTE: These are the core sections in the OpenAI documentation that we may need to implement for Mini-Project #3. Please closely study these linked sections along with studying the provided code.

### OpenAI

* [Introducing AgentKit (6 Oct 2025)](https://openai.com/index/introducing-agentkit/)
  - [Agent Builder](https://platform.openai.com/docs/guides/agents/agent-builder)
  - Connector Registry
  - [OpenAI ChatKit](https://platform.openai.com/docs/guides/chatkit)

* **API Key Sections: Core Concepts**
  - [Structured Model Outputs](https://platform.openai.com/docs/guides)
  - [Function Calling](https://platform.openai.com/docs/guides/function-calling)
  - [Using GPT5](https://platform.openai.com/docs/guides/latest-model)
  - [Migrate to the Responses API](https://platform.openai.com/docs/guides/migrate-to-responses)

* **API Key Sections: Agents**
  - [Agent Builder](https://platform.openai.com/docs/guides/agent-builder)
  - [Node Reference](https://platform.openai.com/docs/guides/node-reference)
  - [Safety in Building Agents](https://platform.openai.com/docs/guides/agent-builder-safety)

* **API Key Sections: Optimize**
  - [Agent Evals](https://platform.openai.com/docs/guides/agent-evals)
  - [Trace Grading](https://platform.openai.com/docs/guides/trace-grading)

* **API Key Sections: Tools**
  - [Using Tools](https://platform.openai.com/docs/guides/tools)
  - [Connectors and MCP](https://platform.openai.com/docs/guides/tools-connectors-mcp)
  - [Web Search](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses)
  - [Code Interpreter](https://platform.openai.com/docs/guides/tools-code-interpreter)
  - [File Search and Retrieval](https://platform.openai.com/docs/guides/tools-code-interpreter)

* **API Key Sections: Run and Scale**
  - [Conversation State](https://platform.openai.com/docs/guides/conversation-state?api-mode=responses)
  - [File Inputs](https://platform.openai.com/docs/guides/pdf-files)
  - [Prompting](https://platform.openai.com/docs/guides/prompting)
  - [Reasoning](https://platform.openai.com/docs/guides/reasoning)

* **API Key Sections: Evaluation**
  - [ALL sections EXCEPT External Models](https://platform.openai.com/docs/guides/evaluation-getting-started?api-mode=responses)