# Week 4: Embeddings

Embedding is a mathematical transformation of information from a given modality (text, image, etc) into a semantically vector space. It has multiple advantages including semantic operations like similiarity, distance metrics, smooth continous space for optimzation, jointly embedding multimodal information, etc. We'll explain these advantages this week, which turn out to be fairly intuitive, with multiple illustrations and coding examples.

## Key Questions to Consider

1. How do embeddings transform raw data into a more useful semantic vector space?
2. What are the key advantages of using embeddings in machine learning and AI applications?
3. How can embeddings be used to measure semantic similarity between different pieces of information?
4. What are the ethical considerations when using embeddings to represent and analyze human-generated 1. content?
5. How do embeddings enable multimodal learning, and what are the potential applications of this capability?
6. What are the current limitations of embedding techniques, and how might they be improved in the future?
7. How does the quality of the initial data affect the resulting embeddings, and what steps can be taken to 1. ensure high-quality embeddings?
8. What role do embeddings play in transfer learning and how might this impact the democratization of AI 1. development?
9. How can we ensure the interpretability and explainability of AI systems that rely heavily on embeddings?
10. What are the potential long-term implications of widespread use of embedding techniques in various 1. industries and decision-making processes?

## Reading Assignments

### Required Cloud Sign-Ups and Laptop Setups

Follow-the instructions as best you can to setup remote AI cloud services and configure your local laptop. DO NOT generate an API key yet - we'll do this in class with safeguards to prevent excess billings. Bring any questions/problems to class and we'll fix it during our break.

[Setup Instructions](../modules/signups_setups.md)

### AI News/Current Events

* [GPT-o1: The Best Model I've Ever Tested 🍓 I Need New Tests! (10:57) (13 Sep 2024)](https://www.youtube.com/watch?v=SbrfjBV8EzM)
* [Learning to Reason with LLMs (12 Sep 2024)](https://openai.com/index/learning-to-reason-with-llms/)
  
### Prompts 

* [Google's New AI Feature is UNREAL... (14:51) (17 Sep 2024)](https://www.youtube.com/watch?v=VY0sdh3p-g0&t=843s)

### Embeddings and Vector Databases

* [Word Embedding and Word2Vec, Clearly Explained!!! (16:11) (2023)](https://www.youtube.com/watch?v=viZrOnJclY0)
* [A Beginner's Guide to Vector Embeddings (8:28) (8 Jun 2023)](https://www.youtube.com/watch?v=NEreO2zlXDk)
* [What is a Vector Database & How Does it Work? Use Cases + Examples by Roie Schwaber-Cohen (3 May 2023)](https://www.pinecone.io/learn/vector-database/)

### Coding: Embeddings and Training Datasets

* [Deeplearning.ai: Understanding and Applying Text Embeddings](https://www.deeplearning.ai/short-courses/embedding-models-from-architecture-to-implementation/)
* [Deeplearning.ai: Preprocessing Unstructured Data for LLM Applications](https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/)

### Focus on These Concepts:

* Understanding API basics and RESTful architecture (covered in class)
* OpenAI API authentication and rate limits (rate limits in class)
* Basic prompt engineering techniques
* Ethical considerations in AI API usage
* Handling API responses and error handling (in class)
* Best practices for integrating AI APIs into applications
* The role of AI APIs in modern software development (in class)
* Advanced prompt engineering techniques
* prompt engineering and API integration
* Group activity: Designing prompts for specific use cases
* Understanding the broader impact of AI APIs on the tech industry
* Future developments in AI API technology and accessibility

# WARNING:

BE VERY CAREFUL WITH PAID API SERVICE like OpenAI - costs can run up quickly with excessive use and coding errors. Set-up safe maximum usage limits $5-10 that you can bump up over the course of the semester.

Remember to review the API usage guidelines and rate limits to ensure responsible use of the OpenAI API. If you have any questions or encounter issues, please ask in class or contact the instructor via email.

# In Class:

* Housekeeping
  * Quiz
  * Grades
  * Miniproject #1 Review

* Motivation
  * Udio.com
    * [So All Alone](https://www.udio.com/songs/5Ez3kNfY3F89Y7nnxrxssv)
    * [Tango del Lobo](hhttps://www.udio.com/songs/m4hSMdNzkY5cGvQFk9W4Dm)
  * DeepFakes, IP, Fair Use, and Free Speech
    * [They played my banned  A.I. mashup in Congress (Johnny Cash x Barbie Girl) (2:52) (Jul 2024)](https://www.youtube.com/watch?v=-vh4ErO-i5o)
    * [Johnny Cash - Barbie Girl (Cover by There I Ruined it) Restoration (1:56) (2023)](https://www.youtube.com/watch?v=MAFdzBTe2lg)
    * [Pulp Fiction: The Musical (EXTENDED) (0:58) (2023)](https://www.youtube.com/watch?v=6uLYs5tB0Is)
  * Meta GenAI and Future of Work
  * AI and Worker Power
    * [Podcast](https://drive.google.com/file/d/1xuh6YSPpF7cYvCzE2dnZ_u474qLQICp5/view?usp=sharing)
    * [Research](https://ofdavis.com/papers/ai/)
    * [Owen F. Davis, Labor Economist, New School](https://ofdavis.com/) 

* Tools
  * [Learn 80% of Perplexity in under 10 minutes! (9:51) (17 Sep 2024)](https://www.youtube.com/watch?v=YoWdogtZRw8)
  * [napkin.ai](napkin.ai/)
  * [NotebookLM](https://notebooklm.google.com/)

* Concepts
  * [Python Types](https://chatgpt.com/share/66f2de6c-bbfc-800d-8b3c-3abdeccdaf77)
  * Embeddings
    * Linguistics and Semiotics
    * Tokenization: words vs syllables vs tokens
    * Metric of Semantic Distance/Similarity
    * Tasks: Retrieving, ranking, clustering, etc.
    * Benchmark: MTEB
      * [HF Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)
      * [Github](https://github.com/embeddings-benchmark/mteb)
    * [Recent advances in universal text embeddings -- A Comprehensive Review of Top-Performing Methods on the MTEB Benchmark Hongliu_CAO 20240619_arxiv (6 Jun 2024)](https://www.semanticscholar.org/paper/Recent-advances-in-text-embedding%3A-A-Comprehensive-Cao/82de481ebb5cf401b215178c20b058c7c1a4f9cd)
  * API and RESTful Services
  * [unstructured](https://docs.unstructured.io/api-reference/api-services/sdk-python)

* Hands-On
  * Google NotebookLM Paper-to-Podcast
    * [NotebookLM](https://notebooklm.google.com/)
    * [V0 App Generation](https://v0.dev/chat) What are the most impressive
    * [Cursor Prompts](https://www.cursordirectory.com/) Browse Categories, find familiar one to critique

* AI Analyst
  * [Gardner AI Hype Cycle 2024](https://www.jaggaer.com/download/analyst-report/gartner-hype-cycle-for-artificial-intelligence-2024)
  * [Process Trends in AI](https://appian.com/blog/acp/ai/ai-trends-enterprises-2024#:~:text=Summary%20of%20trends.%201%20AI%20systems%20become%20more,operations%208%20Responsible%20AI%20gets%20prioritized.%20More%20items)
  * [Years to AGI](https://www.reddit.com/r/OpenAI/comments/191qk1d/ark_invest_predicts_agi_will_be_achieved_until/)
* Research
  * [Phind.com](https://www.phind.com/)

* API
  * Popular APIs
    * CNN
  * [HackerNews API JSON](https://github.com/darrenpaine/HackerNews-Pipeline/blob/main/Hacker%20News%20Pipeline.ipynb)
  * GopherSignal
  * [Gopher Signal](https://gophersignal.com/)
  * [Swagger API](https://gophersignal.com/swagger/index.html#/)
* Transformer Architecture
  * [Transformer Explainer](https://poloclub.github.io/transformer-explainer/)
* Prompt Engineering
  * [OpenAI Playground](https://platform.openai.com/playground/chat)
  * [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
  * [Claude System Prompt](https://docs.anthropic.com/en/release-notes  system-prompts#july-12th-2024)
  * [Google Gemini](https://ai.google.dev/gemini-api/prompts)
  * [Google Prompts](https://aistudio.google.com/app/prompts/new_chat)
  * [Google GEMs](https://gemini.google.com/u/0/gems/view)
* Prompt Engineering API
  * [Learning to Reason with LLMs (12 Sep 2024)](https://openai.com/index/learning-to-reason-with-llms/)
  * [OpenAI Reasoning Models](https://platform.openai.com/docs/guides/reasoning/advice-on-prompting?reasoning-prompt-examples=coding-planning)
  * [OpenAI o1: Prompting Tips, Limitations, and Capabilities (13 Sep 2024)](https://www.vellum.ai/blog/how-to-prompt-the-openai-o1-model)
  * [OpenAI o1 EXPOSED: Tokenomics Breakdown by Elite Mathematician Terrence Tao (17 Sep 2024)](https://www.youtube.com/watch?v=hMbLq-TKlNA&t=435s)
* Embeddings
  * [Viz Colorful Embeddings](https://huggingface.co/spaces/jphwang/colorful_vectors)
  * [NEW LLama Embedding for Fast NLP💥 Llama-based Lightweight NLP Toolkit 💥 (10:23) (15 Sep 2024)](https://www.youtube.com/watch?v=GF7wnswJF74)
* Colab
  * Setup and Test with [Ollama with Llama 3.1](https://colab.research.google.com/drive/1WCsHuRedSztAFDa-3bRpnPuSX9KiLdto?usp=sharing)
* Prompt Engineering
  * [DAIR.ai Prompt Engineering Guide](https://www.promptingguide.ai/)
  * [Jailbreaks](https://jailbreaks.org/)

## In-Class Programming Task:
Create a Python script that uses the OpenAI API to generate a short story based on user input. The script should:

1. Prompt the user for a genre, setting, and main character
2. Use these inputs to craft an appropriate prompt for the OpenAI API
3. Make an API call to generate a short story
4. Display the generated story to the user
5. Implement error handling for API failures or rate limit issues

Submit your code and a brief report discussing your experience, challenges faced, and potential ethical considerations of your application.