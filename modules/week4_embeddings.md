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

* [GPT-5 SOON, AI-to-AI Payments Using Crypto, xAI GPU Cluster is Live, 1,000 Agent Simulation (23:52) Aug 5, 2024](https://www.youtube.com/watch?v=7c3t5jAg0v4)


### Prompts and API

* Hyperparamters
* Function Calling
* Security: Jailbreaking and Pentesting



### Coding: Embeddings and Training Datasets

* [Deeplearning.ai: Understanding and Applying Text Embeddings](https://learn.deeplearning.ai/courses/google-cloud-vertex-ai/lesson/1/introduction)
* [Deeplearning.ai: Preprocessing Unstructured Data for LLM Applications](https://learn.deeplearning.ai/courses/preprocessing-unstructured-data-for-llm-applications/lesson/1/introduction)



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

* Motivation
    * [Xiaomi EV Factory](https://www.youtube.com/watch?v=yezR-mH12xs)
    * [STORM: FREE AI TOOL by STANFORD can convert TOPICS to LONG ARTICLES (Perplexity Pages Alternative)](https://www.youtube.com/watch?v=rg4Xcul2Kh0&t=190s)
    * [The State of Generative AI in the Enterprise
Moving from potential to performance](https://www2.deloitte.com/us/en/pages/consulting/articles/state-of-generative-ai-in-enterprise.html)

* Bookeeeping
    * Sign-ups:
        * OpenAI
        * Google Colab
        * Daily.dev
    * Quizes and Grading
    * Moodle and Course Management
    * Miniproject #1 Project Demo

* Concepts
    * API and RESTful Services
    * [OpenAI Developer Platform, API and Models](https://platform.openai.com/docs/models)
    * LLM Life cycle
    * Training Datasets
    * Metrics and Benchmarks
    * Virtual Environments vs Virtual Machines vs the Cloud

* Hands-On
    * AI Analyst
      * [Gardner AI Hype Cycle 2024](https://www.gartner.com/doc/reprints?id=1-2HV4V5W2&ct=240617&st=sb)
      * [Process Trends](https://www.researchgate.net/publication/270218416_Business_Process_Trends/figures?lo=1)
      * [Years to AGI](https://www.reddit.com/r/OpenAI/comments/191qk1d/ark_invest_predicts_agi_will_be_achieved_until/)
    * Transformer Architecture
        * [Transformer Explainer](https://poloclub.github.io/transformer-explainer/)
    * Prompt Engineering
        * [OpenAI Playground](https://platform.openai.com/playground/chat)
        * [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
        * [Claude System Prompt](https://docs.anthropic.com/en/release-notes/system-prompts#july-12th-2024)
        * [Google Gemini](https://ai.google.dev/gemini-api/prompts)
        * [Google Prompts](https://aistudio.google.com/app/prompts/new_chat)
        * [Google GEMs](https://gemini.google.com/u/0/gems/view)
    * Laptop Setup
        * Python
        * Github
        * VSCode
        * VSCode Extensions (AI code assistants)
    * Colab
        * Setup and Test with [Ollama with Llama 3.1](https://colab.research.google.com/drive/1WCsHuRedSztAFDa-3bRpnPuSX9KiLdto?usp=sharing)
    * Prompt Engineering
        * [DAIR.ai Prompt Engineering Guide](https://www.promptingguide.ai/)
        * [Jailbreaks](https://jailbreaks.org/)
    * LLM Benchmarks:
        * [Stanford HELM](https://crfm.stanford.edu/helm/)
        * [Google BigBench Hard](https://github.com/suzgunmirac/BIG-Bench-Hard)
    * LLM Leaderboards
        * [Kaggle ARC Challenge 2024](https://www.kaggle.com/competitions/arc-prize-2024/leaderboard)
        * [Huggingface LMsys Leaderboard][LLMsys Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
        * [Huggingface LMSys Chatbot Area](https://lmarena.ai/?leaderboard)

## In-Class Programming Task:
Create a Python script that uses the OpenAI API to generate a short story based on user input. The script should:

1. Prompt the user for a genre, setting, and main character
2. Use these inputs to craft an appropriate prompt for the OpenAI API
3. Make an API call to generate a short story
4. Display the generated story to the user
5. Implement error handling for API failures or rate limit issues

Submit your code and a brief report discussing your experience, challenges faced, and potential ethical considerations of your application.