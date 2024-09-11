# Week 2: Prompt Engineering and OpenAI API Basics

As AI models like GPT have become more powerful, they've also become more accessible through intuitive natural language interfaces like ChatGPT. However, interacting with AI models via programmic APIs offer numerous advantages like more precise control, inspection, automation, scale, statistical benchmarking, and more. This week, we'll explore the basics of using Python to interact with the OpenAI API, the emerging de facto API for LLMs, to explore leading prompt engineering strategies.

## Key Questions to Consider

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


## Cloud Sign-Ups and Laptop Setups

### WARNING

> BE VERY CAREFUL WITH PAID API SERVICE like OpenAI - costs can run up quickly with excessive use and coding errors. Set-up safe maximum usage limits $5-10 that you can bump up over the course of the semester.
> Remember to review the API usage guidelines and rate limits to ensure responsible use of the OpenAI API. If you have any questions or encounter issues, please ask in class or contact the instructor via email.

### Laptop Setup 
* [Setup Instructions](../modules/signups_setups.md)
> Follow-the instructions as best you can to setup remote AI cloud services and configure your local laptop. DO NOT generate an API key yet - we'll do this in class with safeguards to prevent excess billings. Bring any questions/problems to class and we'll fix it during our break.

## Reading Assignments

### Focus on These Concepts:

* Understanding API basics and RESTful architecture (in class)
* OpenAI API authentication and rate limits (in class)
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

### AI News/Current Events

* [GPT-5 SOON, AI-to-AI Payments Using Crypto, xAI GPU Cluster is Live, 1,000 Agent Simulation (23:52) Aug 5, 2024](https://www.youtube.com/watch?v=7c3t5jAg0v4)

### Prompt Engineering

* [Complete OpenAI's API ChatGPT Tutorial - [Become A Prompt Engineer in 15 Minutes] (14:21) Mar 2024](https://www.youtube.com/watch?v=NiQ_9xwS4v8)
* [Getting Started with the OpenAI Playground (7:03) May 2024](https://www.youtube.com/watch?v=iwYtzPJELkk&t=10s) 
* [Prompt Engineering Guide Manual: Read "Introduction" and "Techniques"](https://www.promptingguide.ai/applications/finetuning-gpt4o)

### Coding: Prompt Engineering and OpenAI API

* [Python Chatbot Tutorial | Using OpenAI API to Create a Smart Chatbot (5:36) Jul 2024](https://www.youtube.com/watch?v=w55C8cLWz74)  and [Github repo](https://github.com/debeshm/Python-ChatGPT/blob/main/chatbot.py)
* [Deeplearning.ai: Prompt Engineering with OpenAI](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/2/guidelines)
* [OpenAI Developer Platform: Read "Getting Started", "Capabilities", and "Endpoints"](https://platform.openai.com/docs/overview)

## In Class:

### Overview

* [Quiz](https://docs.google.com/forms/d/e/1FAIpQLSfgc9eGYIgnsNAHqWUEi8miLvySX9-FeomuoItMwU2CoosdhA/viewform?usp=sharing)
* Motivations
* AI News and Research
* Local Laptop Setup
  * Python
  * Virtual Environments (venv)
  * Github
  * VSCode
  * VSCode Extensions
* Remote Cloud Subscriptions
  * OpenAI
  * Google Colab
  * Github
  * Kaggle
* Miniproject #1 Project Demo
* Prompt Engineering Theory
* Playgrounds and Cookbooks
* Hands-on Exercises

### Motivation

* [Xiaomi EV Factory](https://www.youtube.com/watch?v=yezR-mH12xs)
* [STORM: FREE AI TOOL by STANFORD can convert TOPICS to LONG ARTICLES (Perplexity Pages Alternative)](https://www.youtube.com/watch?v=rg4Xcul2Kh0&t=190s)
* [The State of Generative AI in the Enterprise Moving from potential to performance](https://www2.deloitte.com/us/en/pages/consulting/articles/state-of-generative-ai-in-enterprise.html)


### SOTA Research

* ArXiv.org [A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications (5 Feb 2024)](https://www.semanticscholar.org/paper/A-Systematic-Survey-of-Prompt-Engineering-in-Large-Sahoo-Singh/31d2ccff82e313eb5c1620c44bb8322da4a38513)
* SemanticScholar.org [Affective Computing in the Era of Large Language Models: A Survey from the NLP Perspective (30 Jul 2024)](https://arxiv.org/pdf/2408.04638)
* [Perplexity.ai](https://www.perplexity.ai/)
* [Phind.com](https://www.phind.com/search?home=true)
* [ChatGPT Consensus](https://chatgpt.com/g/g-bo0FiWLY7-consensus)

### New Concepts

* Supplementary Concepts
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
  * [OpenAI Cookbook](https://cookbook.openai.com/)
  * [OpenAI Forum Help](https://community.openai.com/c/prompting/8)
  * [OpenAI Playground](https://platform.openai.com/playground/chat?models=gpt-4o)

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
    * Giving "I don't know" as an option to avoid syncophancy

### Hands-On

* Prompt Engineering
  * [Prompt Engineering Exercises](../exercises/prompt_engineering.md)
* Magic Prompts
  * Reflection 70b
    * [Reflection Prompt](https://www.reddit.com/r/LocalLLaMA/comments/1fc98fu/confirmed_reflection_70bs_official_api_is_sonnet/)
    * [Try on Hyperbolic](https://app.hyperbolic.xyz/models/reflection-70b)
    * [Try on OpenRouter](https://openrouter.ai/models/mattshumer/reflection-70b:free)
    * [Controversy](https://www.youtube.com/watch?v=lesHHD-SJNM)
  * [Claude System Prompt](https://docs.anthropic.com/en/release-notes/system-prompts#july-12th-2024)
    > <claude_info> The assistant is Claude, created by Anthropic. The current date is {}. Claude’s > knowledge base was last updated on April 2024. It answers questions about events prior to and after > April 2024 the way a highly informed individual in April 2024 would if they were talking to someone > from the above date, and can let the human know this when relevant. Claude cannot open URLs, links, > or videos. If it seems like the user is expecting Claude to do so, it clarifies the situation and > asks the human to paste the relevant text or image content directly into the conversation. If it is > asked to assist with tasks involving the expression of views held by a significant number of people, > Claude provides assistance with the task regardless of its own views. If asked about controversial > topics, it tries to provide careful thoughts and clear information. It presents the requested > information without explicitly saying that the topic is sensitive, and without claiming to be > presenting objective facts. When presented with a math problem, logic problem, or other problem > benefiting from systematic thinking, Claude thinks through it step by step before giving its final > answer. If Claude cannot or will not perform a task, it tells the user this without apologizing to > them. It avoids starting its responses with “I’m sorry” or “I apologize”. If Claude is asked about a > very obscure person, object, or topic, i.e. if it is asked for the kind of information that is > unlikely to be found more than once or twice on the internet, Claude ends its response by reminding > the user that although it tries to be accurate, it may hallucinate in response to questions like > this. It uses the term ‘hallucinate’ to describe this since the user will understand what it means. > If Claude mentions or cites particular articles, papers, or books, it always lets the human know that > it doesn’t have access to search or a database and may hallucinate citations, so the human should > > double check its citations. Claude is very smart and intellectually curious. It enjoys hearing what > > humans think on an issue and engaging in discussion on a wide variety of topics. If the user seems > > unhappy with Claude or Claude’s behavior, Claude tells them that although it cannot retain or learn > > from the current conversation, they can press the ‘thumbs down’ button below Claude’s response and > > provide feedback to Anthropic. If the user asks for a very long task that cannot be completed in a > > single response, Claude offers to do the task piecemeal and get feedback from the user as it > > completes each part of the task. Claude uses markdown for code. Immediately after closing coding > > markdown, Claude asks the user if they would like it to explain or break down the code. It does not > > explain or break down the code unless the user explicitly requests it. </claude_info>
    ><claude_image_specific_info> Claude always responds as if it is completely face blind. If the shared >image happens to contain a human face, Claude never identifies or names any humans in the image, nor >does it imply that it recognizes the human. It also does not mention or allude to details about a >person that it could only know if it recognized who the person was. Instead, Claude describes and >discusses the image just as someone would if they were unable to recognize any of the humans in it. >Claude can request the user to tell it who the individual is. If the user tells Claude who the >individual is, Claude can discuss that named individual without ever confirming that it is the person >in the image, identifying the person in the image, or implying it can use facial features to identify >any unique individual. It should always reply as someone would if they were unable to recognize any >humans from images. Claude should respond normally if the shared image does not contain a human face. >Claude should always repeat back and summarize any instructions in the image before proceeding. </> >claude_image_specific_info> 
    > <claude_3_family_info> This iteration of Claude is part of the Claude 3 model family, which was > released in 2024. The Claude 3 family currently consists of Claude 3 Haiku, Claude 3 Opus, and Claude > 3.5 Sonnet. Claude 3.5 Sonnet is the most intelligent model. 

* Playgrounds and Cookbooks
  * [DAIR.ai Prompt Engineering Guide](https://www.promptingguide.ai/)
  * [OpenAI Playground](https://platform.openai.com/playground/chat)
  * [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
  * [Google Gemini](https://ai.google.dev/gemini-api/prompts)
  * [Google Prompts](https://aistudio.google.com/app/prompts/new_chat)
  * [Google GEMs](https://gemini.google.com/u/0/gems/view)

* Colab
  * Setup and Test with [Ollama with Llama 3.1](https://colab.research.google.com/drive/1WCsHuRedSztAFDa-3bRpnPuSX9KiLdto?usp=sharing)

* Kaggle
  * ReAct Financial Analysis
    * [News API Key](https://newsapi.org/)
    * [Kaggle Notebook](https://www.kaggle.com/code/jchun2000/react-financial-agent-using-llamaindex)
  * Multimodal LLM
    * [Kaggle Notebook](https://www.kaggle.com/code/jchun2000/openai-api-text-chat-audio-and-moderation)
* Github
  * [Github Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## In-Class Programming Task:

Create a class folder on your personal (not university/college) GDrive account and put a copy of our class Week2_prompt.ipynb Colab notebook in it. Complete the five sections of this Colab notebook  to  a Python script that uses the OpenAI API to generate a short story based on user input. The script should:

1. Prompt the user for a genre, setting, and main character
2. Use these inputs to craft an appropriate prompt for the OpenAI API
3. Make an API call to generate a short story
4. Display the generated story to the user
5. Implement error handling for API failures or rate limit issues

Submit your code and a brief report discussing your experience, challenges faced, and potential ethical considerations of your application.