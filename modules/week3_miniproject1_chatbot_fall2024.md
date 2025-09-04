# Week 3: Miniproject #1 Chatbot

"Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb" - Calvin Coolidge


As AI models like GPT have become more powerful, they've also become more accessible through APIs with a growing number of features we'll use in the coming like function calling, fine-tuning, and caching. This week, we'll explore the basics of using Python to interact with the OpenAI API, enabling us to harness the power of large language models in our own future applications.





## **Humanistic Big Ideas**

### Readings

* [Demis Hassabis On The Future of Work in the Age of AI (20:10) (Jul 2025)](https://www.youtube.com/watch?v=CRraHg4Ks_g)


### Reflection:

Theme 1: Consciousness, Software, and Spirit

Defining Consciousness: Joscha Bach suggests consciousness is akin to software or spirit. What does this metaphor imply about the nature of human consciousness? Do you agree with this framing, and why or why not?
AI and Consciousness: If consciousness is software, as Bach proposes, could AI ever achieve a form of consciousness? Discuss the philosophical and ethical implications of creating AI systems that mimic or possess consciousness.
Human Identity: How does Bach’s perspective challenge traditional notions of human identity and spirituality? In what ways might viewing consciousness as software influence our understanding of free will or moral responsibility?
AI as a Mirror: Bach’s talk might suggest that building AI forces us to reflect on our own minds. How can studying AI’s “software-like” processes deepen our understanding of human cognition, emotions, or creativity?
Ethical Boundaries: If software can be considered “spirit,” what ethical boundaries should guide the development of AI systems that simulate human-like traits? Should there be limits to how “human” AI can become?













## Key Questions to Consider

1. What are 5 levels on the way to AGI and how is each defined?
2. What are the ethical frameworks of LLMs and how can prompts explore surface them?
3. How can we ensure responsible use of AI APIs in application development?
4. How are LLM benchmarks designed and what are some key metrics?
5. How does prompt engineering affect the output of AI models accessed through APIs?
6. How might the widespread use of AI APIs impact job markets and skill requirements in tech?
7. How do benchmark performance translate to real-world performance?
8. What role does data privacy play when using AI APIs, and how can we protect user information?
9. How can we balance the benefits of AI APIs with the need for transparency and explainability?
10. What are the long-term implications of integrating AI APIs into critical systems and decision-making processes?

## Reading Assignments

* SOTA Research (Only spend 15 min on each paper by selectiving focusing on mainpoints in Abstract, Introduction, Tables/Figures of Findings, Conclusions)
  * [Levels of AGI for Operationalizing Progress on the Path to AGI by Meredith Ringel Morris et al. (5 Jun 2024)](https://arxiv.org/pdf/2311.02462)
  * [Informed AI Regulation: Comparing the Ethical Frameworks of Leading LLM Chatbots Using an Ethics-Based Audit to Assess Moral Reasoning and Normative Values by Chun and Elkins (9 Jan 2024)](https://www.semanticscholar.org/paper/Informed-AI-Regulation%3A-Comparing-the-Ethical-of-an-Chun-Elkins/f55294c223752a7159c438951dbf6e6b66cd2e31)

* Chatbots:
  * [Prompt Engineering with Llama 2&3 (DeepLearning.ai) NOTE: Skip over ERRORS due to 70B model no longer available](https://learn.deeplearning.ai/courses/prompt-engineering-with-llama-2/lesson/1/introduction)
  * [Python Chatbot Tutorial | Using OpenAI API to Create a Smart Chatbot (5:36) Jul 2024](https://www.youtube.com/watch?v=w55C8cLWz74)  and [Github repo](https://github.com/debeshm/Python-ChatGPT/blob/main/chatbot.py)

* Benchmarks (Only spend 15 min on each paper by selectiving focusing on mainpoints in Abstract, Introduction, Tables/Figures of Findings, Conclusions)
  * Holistic Evaluation of Text-To-Image Models
    * [Website](https://crfm.stanford.edu/helm/lite/latest/)
    * [Github](https://github.com/stanford-crfm/helm)
    * [Paper (Click on the ArXxiv button)](https://www.semanticscholar.org/paper/Holistic-Evaluation-of-Language-Models-Liang-Bommasani/ce913026f693101e54d3ab9152e107034d81fce1) 
  * [BigBench-Hard](https://arxiv.org/pdf/2206.04615)

* Code Example for Miniproject #1: Voice Chatbot
  * [OpenAI ChatGPT API (NEW GPT 3.5) and Whisper API - Python and Gradio Tutorial (23:08) 2023](https://www.youtube.com/watch?v=Si0vFx_dJ5Y)

## In-Class

* Quiz

* Prompt Engineering
  * [Learning to Reason with LLMs (12 Sep 2024)](https://openai.com/index/learning-to-reason-with-llms/)
  * [OpenAI Reasoning Models](https://platform.openai.com/docs/guides/reasoning/advice-on-prompting?reasoning-prompt-examples=coding-planning)

* Leaderboards
  * Huggingface
    * [Huggingface Open LLM Leaderboard](https://huggingface.co/open-llm-leaderboard)
    * [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
  * [LMSys Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)

* Llama
  * [Llama Recipies](https://github.com/Meta-Llama/llama-recipes)

* Prompts for Chat Personas
  * [awesome-voice-prompts](https://github.com/langgptai/awesome-voice-prompts)

## Miniproject #1: Build a Chatbot (Due Sun midnight, September 22nd)

Build a chatbot using code and examples you've seen in DeepLearning.ai, reading YouTubes, class or RECENT modified code you can find on kaggle.com or github. Tips:

* Use the OpenAI API and accumulate the conversation history
* Use the 'system' prompt to give your chatbot a descriptive and specialized 'persona'
* Use n-shot Incontext Learning (ICL) prompts to provide examples to shape/pattern chatbot responses
* Explore other Prompt Engineering strategies (e.g. Chain of Thoughts)
* (Optional) Use gradio for the UI/UX
* (Optional) Extend your chatbot with features like multimodal input (e.g. voice, images)
* In your personal github.com repo, create a folder 'iphs391-miniproject1-chatbot' and upload your code there as either a Colab notebook or *.py code files for testing, verification and grading. 

NOTE: The OpenAI API announced a major change from the previous .chat() endpoint to a more unified .complete() endpoint. If you are using older code snippets, cookbooks, or tutorials, update the OpenAI API calls to use .complete() rather than .chat() endpoints. [Read this](./openai_api_changes2024.md) for details of these API changes.