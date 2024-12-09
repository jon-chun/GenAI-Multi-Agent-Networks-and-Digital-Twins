# Week 13: AI Now

This week we introduce our fourth and final Agentic Framework in Microsoft's AutoGen related to the taste of recently released Magentic-One reasoning-focused framework by MS. Unlike previous weeks, we will focus on the fundamentals and well as future direction rather than coding Agents. The one coding exercise for AutoGen version 0.2 should feel intuitive at this point.

Although MS AutoGen and Magentic-One are both in early release with AutoGen between stable release version 0.2 and a entire rewritten version 0.4, it's important to understand Microsoft's approach to agentic software engineering. Microsoft has been astounding agile around AI for it's size so we also study their views on automated knowledge workflow given MS's dominance and unique strategy in unifying AI across operating systems, applications, and developer resources (e.g. compilers, VSCode IDE, Github).

## Ideas for Final Projects

Cut down versions of AI products/startups with customized: (a) workflows, (b) datasources, (c) prompts, (d) models, (e) internal logic/processing, (f) un/structured output, (g) visualizations, (h) tools/outputs (e.g. focused search, fact checking, summarization, analysis, emails, etc):

### Specific AI Ideas to Customize MVP

* [NotebookLM API](https://www.youtube.com/watch?v=mO-tVmtakMQ) (programmatically generate podcasts)
* [FREE LogoCreator Flux Pro 1.1 Open Source AI Image Generator!🤖 Together.AI Self Hosted (NEW)](https://www.youtube.com/watch?v=4CdXujGPO3U) (logo creator)
* [Berman EdCrew](https://github.com/mberman84/edu-crew/tree/main/src)
* [Sharbo.io ](https://www.sharbo.io/) (competitive analysis)
* [ParaFactAI.com](https://parafactai.com/?ref=manuagi) (fact checking)
* [Spokk.io](https://www.spokk.io) (customer feedback, customize for non-profits or others)
  
### Many more ideas at

* [ProductHunt.com](https://www.producthunt.com/)
* [Futurepedia.io](https://www.futurepedia.io/)
* [OpenTools.ai](https://opentools.ai/)
* [AIxploria.com](https://www.aixploria.com/en/)
* [MetaList of AI Tools](https://github.com/best-of-ai/ai-directories)

### Tutorial on Agentic Workflow

* [FinanceRAG - Building a High-Performance, Finance-Specific RAG System (6:05) (7 Dec 2024)](https://www.youtube.com/watch?v=o4k-T9NeJOw)
  * [Github Repo](https://github.com/cv-lee/FinanceRAG)
  * [ArXiv Paper](https://arxiv.org/pdf/2411.16732)
* [Building Multi-Agent AI Systems From Scratch: OpenAI vs. Ollama (17 Nov 2024)](https://pub.towardsai.net/building-multi-agent-ai-systems-from-scratch-openai-vs-ollama-8ec0dae98639)
  * [Github ver from AIAnyTime](https://github.com/isurulkh?tab=repositories)
* [AI Anytime Github](https://github.com/AIAnytime)
* [Build your Personal Assistant with Agents and Tools (22 Nov 2024)](https://towardsdatascience.com/build-your-personal-assistant-with-agents-and-tools-048637ac308e)
* [Evaluating and Monitoring LLM Agents: Tools, Metrics, and Best Practices (17 Nov 2024)](https://pub.towardsai.net/evaluating-and-monitoring-llm-agents-tools-metrics-and-best-practices-a61f508cccb0)


## KEY QUESTIONS

1. What are the major design principles for AutoGen versions 0.2 vs 0.4? 
2. What improvements does AutoGen 0.4 bring to necessitate an entire rewrite of version 0.2?
3. What is an AI-enabled enterprise and how does Microsoft position AI models and agents within this context (esp wrt X-Copilots)?
4. What are the 'New Scaling Laws' presented by Microsoft CEO Nadella this past week?
5. What new features/capabilities were demo'ed in the video 'The Most Advanced AI Agent Yet'?
6. What major trends/observations are visualized in the LangChain 'State of AI Agents' report?
7. What are the 'Top 5 AI Trends' in IDC's 2024 AI report?
8. What are fundamentals of the actor model used for event-driven design in AutoGen Core?
9. What are the top reasons developers are abandoning LangChain in the Hacker News Discussion (or summary provided)?

## READINGS

### AI NEWS AND CULTURE

* (only 0-5:00 and 24:40-32:40)[Satya Nadella "THE NEW SCALING LAWS" and the Agentic Future [Microsoft Ignite 2024 SUPERCUT] (34:07) (20 Nov 2024)](https://www.youtube.com/watch?v=jpvbYukNZGM)
* [Microsoft Launches 10 NEW AI Agents (13:01) (24 Nov 2024)](https://www.youtube.com/watch?v=pcWKJ_yvf1M&t=8s)
* [Multi-Agent AI EXPLAINED: How Magentic-One Works (16:38) (Nov 2024)](https://www.youtube.com/watch?v=RUDZZLtB08w)
* [These new computers are getting creepy… Copilot+ PC first look (4:31) (Jun 2024)](https://www.youtube.com/watch?v=hlwcZpEx2IY)

### RESEARCH

* [LangChain State of AI Agents](https://www.langchain.com/stateofaiagents)
* [IDC’s 2024 AI opportunity study: Top five AI trends to watch (12 Nov 2024)](https://blogs.microsoft.com/blog/2024/11/12/idcs-2024-ai-opportunity-study-top-five-ai-trends-to-watch/)

### SOFTWARE ENGINEERING

* [Getting Started with New AutoGen Core API: A Step-by-Step Guide for Developers (11 Nov 2024)](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/getting-started-with-new-autogen-core-api-a-step-by-step-guide-for-developers/4290691)
* [Actor Model (4:32) (2018)](https://www.youtube.com/watch?v=ELwEdb_pD0k)
* [Why we no longer use LangChain for building our AI agents (Jun 2024)](https://www.octomind.dev/blog/why-we-no-longer-use-langchain-for-building-our-ai-agents)
  Hacker News Discussion on Abandoning LangChain/LangGraph (Identify the top reasons)
  * [Meta-Summary](https://chatgpt.com/share/673f55de-fdfc-800d-9e50-21d4e22475e9)
  * [Summary](./readings/ycombinatornews_40739982.txt) (Generated by [Summarize-HNews](https://github.com/jon-chun/summarize-hnews))
  * [HNews Original Discussion](https://news.ycombinator.com/item?id=40739982)

### CODING

* [AI Agentic Design Patterns with AutoGen 0.2 (~1hr)](https://learn.deeplearning.ai/courses/ai-agentic-design-patterns-with-autogen/)
* [AutoGen 0.2 Doc](https://microsoft.github.io/autogen/0.2/docs/Getting-Started)
* [AutoGen 0.4 Doc](https://microsoft.github.io/autogen/dev/user-guide/agentchat-user-guide/quickstart.html)

## IN-CLASS EXERCISES

### ADMINISTRATIVE

* [Week 13 Quiz: MS AutoGen](https://docs.google.com/forms/d/e/1FAIpQLSdcsMR0kG-Ppn6RJZRtlsUX3CVrICRrsJa0qHdmQcZSHIUu1Q/viewform?usp=sharing)

### PRESENTATIONS

* Presentation #1
* Presentation #2

### ANNOUNCEMENTS

* [Coming](oh_noes_404.md)
  
### NEWS: AUTOMATION

* [Gartner Conference](https://www.gartner.com/en/conferences/na/infrastructure-operations-cloud-us?ef_id=:G:s&utm_source=bing&utm_medium=cpc&utm_campaign=EVT_NA_2024_LSC43_CPC_SEM1_NONBRANDBING&utm_adgroup=1152289919389198&utm_term=it%20automation&ad=&matchtype=p&msclkid=46948bdb95841f1ef5fbec949ef4637b)

* [TERMINAL OF TRUTH - AI Agent Creates Religion and $280,000,000 Market Cap Coin (29:28) (Oct 2024 )](https://www.youtube.com/watch?v=TpzG_aAUTsg)
* [How to Create NEW Copilot AI Agents in Microsoft Teams in Seconds! (10:24) (19 Nov 2024)](https://www.youtube.com/watch?v=lBroyFLn9s8)
* [Microsoft And OpenAI Just Demoed The Most Advanced AI Agent Yet (8:17) (20 Nov 2024)](https://www.youtube.com/watch?v=iBfjx9R3FP8) (The coming of real-world hyper personalized AI application interaction)

* [Boost.space](https://boost.space/) - Centralized Data/Single-Source of Truth
* [Composio.dev](https://composio.dev/) - LLM Frameworks + Agents
* [Foundry.ai Ycombinator](https://www.ycombinator.com/companies/foundry)
* [ActivePieces](https://github.com/activepieces/activepieces)
* [Apache Airflow](https://airflow.apache.org/)
* [Kestra](https://github.com/kestra-io/kestra)
* [Building AI Applications with Haystack ~1.5hrs](https://www.deeplearning.ai/short-courses/building-ai-applications-with-haystack/) [Github](https://github.com/deepset-ai/haystack)
* [n8n](https://n8n.io/)
* [SparkBase.ai](https://sparkbase.ai/) - Sales automation

### NEWS: TECH

* [Have you heard these exciting AI news? - November 22, 2024 AI Updates Weekly (22:48) (22 Nov 2024)](https://www.youtube.com/watch?v=MM_eOh6zqnc)
* [Microsoft quietly assembles the largest AI agent ecosystem—and no one else is close (19 Nov 2024)](https://venturebeat.com/ai/microsoft-quietly-assembles-the-largest-ai-agent-ecosystem-and-no-one-else-is-close/)
* [What's Happening with AutoGen and AG2? (4:44) (20 Nov 2024)](https://www.youtube.com/watch?v=PjQj2_QFxx0)
* [16 Ignite 2024 Announcements You Need to Know Now! (13:47) (21 Nov 2024)](https://www.youtube.com/watch?v=5rMglAtGUa8)

### FOLLOW-UPS

* [This Open Source AI Generates Videos with UNREAL Realism (Tencent HunyuanVideo) (8:43) (3 Dec 2024)](https://www.youtube.com/watch?v=mzzxTOnZM2U)
* [Anthropic's New Agent Protocol! MPC (15:34) (29 Nov 2024)](https://www.youtube.com/watch?v=8mU2OeOCIrE)
* [Podcastify](https://github.com/souzatharsis/podcastfy)
* [Deepseek R1 Lite Preview](https://www.deepseek.com/)

### RESEARCH

* [LLM Reasoners](https://github.com/maitrix-org/llm-reasoners)
* [LLM Research Summaries](https://github.com/cognitivetech/llm-research-summaries?tab=readme-ov-file#ai-psychology)
* [Hoodwinked: Deception and Cooperation in a Text-Based Game for Language Models by O'Gara et al. (4 Aug 2023)](https://arxiv.org/pdf/2308.01404)
* [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents by Ma et al. (24 Jan 2024)](https://arxiv.org/pdf/2401.13178) 

### CONCEPTS

* [Colby College Davis AI Institute](https://davisinstituteai.colby.edu/)
* [Smith College: AI and Human Creatitivty at the Kahn Institute](https://www.smith.edu/academics/applied-learning-research/kahn-liberal-arts-institute/ai-human-creativity)
* [Carleton College: AI at Carleton](https://www.carleton.edu/ai/)

### TOOLS

* [Autogen Tools](https://github.com/topics/autogen)

### SOFTWARE ENGINEERING

* [With Bolt.new you can code anything… just watch (13:20) (20 Nov 2024)](https://www.youtube.com/watch?v=ht22YzW-Swc)
* [Microsoft's New Autonomous AI Agents With 1800 Models SHOCKED The World (8:24) (21 Nov 2024)](https://www.youtube.com/watch?v=aGMv-O9JG8w)

### CODE SAMPLE

* [Create a Multi Agent Software Team with LangGraph and OpenAI LLM Tutorial (Streamlit Chatbot UI) (41:00) (19 Nov 2024)](https://www.youtube.com/watch?v=YCNFyzQ2Z0g)

### CODE REVIEW

* [Microsoft Magentic AI Agents with Ollama in 5 Minutes! (100% Local) (3:49) (20 Nov 2024)](https://www.youtube.com/watch?v=JT5basX6JSY&t=12s)
  * [Magentic One Ollama](https://mer.vin/2024/11/magentic-one-ollama/)
* [Microsoft Copilot Studio Docs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
* [Microsoft Copilot Studio](https://copilotstudio.microsoft.com/)

### EXTRAS

* [AI-Generated Religions: The Rise of LLMtheism](https://www.innobu.com/ai-generated-religions-the-rise-of-llmtheism/)
* [When AIs Play God(se): The Emergent Heresies of LLMtheism (20 Apr 2024)](https://pdfupload.io/docs/aae14f87)
* [We are Building Gods: AI as the Anthropomorphised Authority of the Past by Ohman (25 Apr 2024)](https://www.semanticscholar.org/paper/We-are-Building-Gods%3A-AI-as-the-Anthropomorphised-%C3%96hman/088d305e6426b67cd6351cd3f86855b8c03b9cf8)

## RESOURCES

* [Coming](oh_noes_404.md)