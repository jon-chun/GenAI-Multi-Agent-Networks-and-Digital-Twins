# Week 3: ChatBots

As AI models like GPT have become more powerful, they've also become more accessible through APIs. This week, we'll explore the basics of using Python to interact with the OpenAI API, enabling us to harness the power of large language models in our own applications.

## Key Questions to Consider:

1. How does API access to AI models democratize AI development?
2. What are the ethical considerations when using AI models through APIs?
3. How can we ensure responsible use of AI APIs in application development?
4. What are the limitations of current AI APIs, and how might they evolve in the future?
5. How does prompt engineering affect the output of AI models accessed through APIs?
6. What are the potential risks of relying too heavily on AI-generated content in applications?
7. How might the widespread use of AI APIs impact job markets and skill requirements in tech?
8. What role does data privacy play when using AI APIs, and how can we protect user information?
9. How can we balance the benefits of AI APIs with the need for transparency and explainability?
10. What are the long-term implications of integrating AI APIs into critical systems and decision-making processes?

## Reading Assignments:

### Required Cloud Sign-Ups and Laptop Setups

Follow-the instructions as best you can to setup remote AI cloud services and configure your local laptop. DO NOT generate an API key yet - we'll do this in class with safeguards to prevent excess billings. Bring any questions/problems to class and we'll fix it during our break.

[Setup Instructions](../modules/signups_setups.md)

### AI News/Current Events

* [GPT-5 SOON, AI-to-AI Payments Using Crypto, xAI GPU Cluster is Live, 1,000 Agent Simulation (23:52) Aug 5, 2024](https://www.youtube.com/watch?v=7c3t5jAg0v4)

### Embeddings

* [Complete OpenAI's API ChatGPT Tutorial - [Become A Prompt Engineer in 15 Minutes] (14:21) Mar 2024](https://www.youtube.com/watch?v=NiQ_9xwS4v8)
* [Getting Started with the OpenAI Playground (7:03) May 2024](https://www.youtube.com/watch?v=iwYtzPJELkk&t=10s) 
* [Prompt Engineering Guide Manual: Read "Introduction" and "Techniques"](https://www.promptingguide.ai/applications/finetuning-gpt4o)

### API

* [Python Chatbot Tutorial | Using OpenAI API to Create a Smart Chatbot (5:36) Jul 2024](https://www.youtube.com/watch?v=w55C8cLWz74)  and [Github repo](https://github.com/debeshm/Python-ChatGPT/blob/main/chatbot.py)




### Focus on These Concepts:

* Understanding API basics and RESTful architecture (covered in class)
* OpenAI API authentication and rate limits (rate limits in class)
* Basic prompt engineering techniques
* Ethical considerations in AI API usage
* Handling API responses and error handling (in class)
* Best practices for integrating AI APIs into applications
* The role of AI APIs in modern software development (in class)
* Advanced prompt engineering techniques
* prompt engineering and API integrationq
* Group activity: Designing prompts for specific use cases
* Understanding the broader impact of AI APIs on the tech industry
* Future developments in AI API technology and accessibility


# WARNING:

BE VERY CAREFUL WITH PAID API SERVICE like OpenAI - costs can run up quickly with excessive use and coding errors. Set-up safe maximum usage limits $5-10 that you can bump up over the course of the semester.

Remember to review the API usage guidelines and rate limits to ensure responsible use of the OpenAI API. If you have any questions or encounter issues, please ask in class or contact the instructor via email.

# In Class:

## Motivation

    * [Xiaomi EV Factory](https://www.youtube.com/watch?v=yezR-mH12xs)
    * [STORM: FREE AI TOOL by STANFORD can convert TOPICS to LONG ARTICLES (Perplexity Pages Alternative)](https://www.youtube.com/watch?v=rg4Xcul2Kh0&t=190s)
    * [The State of Generative AI in the Enterprise Moving from potential to performance](https://www2.deloitte.com/us/en/pages/consulting/articles/state-of-generative-ai-in-enterprise.html)

## Bookeeeping

    * Sign-ups:
        * OpenAI
        * Google Colab
        * Daily.dev
    * Quizes and Grading
    * Moodle and Course Management
    * Miniproject #1 Project Demo

## Concepts

    * Background Concepts:
      * Virtual Environments vs Virtual Machines vs the Cloud
      * Google Colab Jupyter notebooks
      * ChatGPT vs OpenAI API
      * Delimiters: ###, """,```,---,<tag></tag>, etc.
      * Formats: JSON, JSONL, XML/HTML, CSV, etc.
      * API and RESTful Services: Authentication
      * Python f-strings, \quote, \EOL continuation, etc.
      * Prompt Injections, Jailbreaking, Security
      * Structured Output
      * Synchophancy: Provide Null/SC
      * OpenAI "response" object: methods and attributes
    * OpenAI
      * [OpenAI Developer Platform, API and Models](https://platform.openai.com/docs/models)
      * [OpenAI Forum Help](https://community.openai.com/c/prompting/8)
      * [OpenAI Playground]()

    
    * Prompt Engineering
      * Problems with LLMs:
        * Hallucination
        * Factual inaccuracies
        * Sycophancy/excessive agreeableness
        * Bias and unfairness
        * Lack of causal reasoning
        * Inconsistency across responses
        * Struggle with complex logical reasoning
        * Limited context window
        * Overconfidence in incorrect answers
        * Difficulty with mathematical calculations
      * Prompt techniques that can aggrevate these issues:
        * Vague or ambiguous prompts
        * Prompts that encourage speculation
        * Leading questions that introduce bias
        * Requests for definitive answers on uncertain topics
        * Prompts that anthropomorphize the AI
        * Encouraging the model to go beyond its training
        * Asking for responses in areas where the model lacks expertise
      * Prompt techniques that can mitigate these issues:
        * Specific, clear prompts
        * Requesting sources or reasoning
        * Asking the model to consider multiple perspectives
        * Prompting for uncertainty when appropriate
        * Breaking complex tasks into smaller steps
        * Requesting the model to "think step-by-step"
        * Fact-checking important claims
        * Using few-shot prompting with accurate examples
        * Explicitly asking the model to avoid speculation
        * Reminding the model of its limitations

## Hands-On

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


## In-Class Programming Task:
Create a Python script that uses the OpenAI API to generate a short story based on user input. The script should:

1. Prompt the user for a genre, setting, and main character
2. Use these inputs to craft an appropriate prompt for the OpenAI API
3. Make an API call to generate a short story
4. Display the generated story to the user
5. Implement error handling for API failures or rate limit issues

Submit your code and a brief report discussing your experience, challenges faced, and potential ethical considerations of your application.


# API

# Cloud

* [Model Hardware Requirements]()


# Tokenization and Costs

* [Tiktoken]()
* [Unstract LLM Token Counter](https://unstract.com/tools/llm-token-counter/)
* [Cost Estimator]()
* [OpenAI Images]()

# Structured Output

* [OpenAI Structured Output](https://openai.com/index/introducing-structured-outputs-in-the-api/)
* [Instructor](https://python.useinstructor.com/)
* [Instructor Github](https://github.com/instructor-ai/instructor)
* [Outlines-dev](https://github.com/outlines-dev/outlines)

# Functions



# In-Class


# Concepts

## LLM Overview

    * LLM Life cycle: Pre-Training, SFT, Alignment (RLHF, DPO, etc.)
    * Training Datasets
    * Metrics and Benchmarks
## LLM - Models

    * ChatGPT vs GPT4-o API
    * Model Selection
    * Tokenizations and Pricing
    * Performance

