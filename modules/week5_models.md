# Week 5: Models and Fine-Tuning

We started the course with prompt engineering and embeddings to hit the ground running and be able to immediately complete two miniprojects. With this functional understanding we now step back to explore some of the more fundamental questions around models, datasets, fine-tuning, and benchmarks.

## Key Questions to Consider

1. How do the architectures of LLMs and LMMs differ, and what implications do these differences have for their respective capabilities?
2. What are the key considerations when selecting datasets for pre-training and fine-tuning LLMs and LMMs?
3. How does fine-tuning LLMs and LMMs differ from their initial pre-training, and what are the advantages and limitations of each approach?
4. What ethical considerations should be taken into account when fine-tuning LLMs and LMMs on 1. domain-specific or potentially sensitive datasets?
5. How do benchmarks specifically designed for LLMs and LMMs contribute to their advancement, and what are 1. the limitations of these benchmarks in assessing real-world performance?
6. What strategies can be employed to prevent catastrophic forgetting during the fine-tuning process of LLMs 1. and LMMs?
7. How does the choice of fine-tuning technique (e.g., full fine-tuning vs. parameter-efficient methods like 1. LoRA or prefix tuning) impact the performance and efficiency of LLMs and LMMs?
8. What are the challenges and potential solutions for fine-tuning LLMs on low-resource languages or LMMs on 1. specialized visual domains?
9. How can we ensure the reproducibility and interpretability of fine-tuned LLMs and LMMs, particularly in 1. scientific and critical applications?
10. What are the long-term implications of widespread fine-tuning of pre-trained LLMs and LMMs, both for AI development and for the broader socioeconomic landscape?

## Reading Assignments

* Models
  * Model Zoos
  * Transformers
  * Multimodal
  * Hyperparamteres
    * [Optimize Your AI Models (11:42) (28 Sep 2024)](https://www.youtube.com/watch?v=QfFRNF5AhME)
  * Tokens
  * Size
    * [Calculating GPU Requirements For Open Source LLMs (5:19) (30 Aug 2024)](https://www.youtube.com/watch?v=WyZQ73cKLMU)

* Benchmarks
  * [A Survey on Benchmarks of Multimodal Large Language Models by Li et al. (16 Aug 2024)](https://www.semanticscholar.org/paper/A-Survey-on-Benchmarks-of-Multimodal-Large-Language-Li-Lu/d40631a850c21607a5b1cb63efc7bf4ba1ab1fe0#:~:text=A%20comprehensive%20review%20of%20200%20benchmarks%20and%20evaluations%20for)
  * [awesome-LLM-benchmarks (Jan 2024)](https://github.com/wgwang/awesome-LLM-benchmarks)
  * Metrics
  * Leaderboards
  * Controversy

* Training Datasets
  * Scraping
  * Cleaning Pipelines
  * Synthesizing

* Fine-Tuning
  * Pipeline
  * Monitoring and Evaluation
  * Phi-3
    * [Fine Tune Phi 3.5 with Your Data (7:40) (28 Aug 2024)](https://www.youtube.com/watch?v=g3zhGnUSfio)
    * [Github](https://github.com/microsoft/Phi-3CookBook/blob/main/code/04.Finetuning/Phi-3-finetune-qlora-python.ipynb)
  * Llama
    * [Llama Recipies](https://github.com/Meta-Llama/llama-recipes)
  * Image:
    * [FLUX + LORA Full Course (Uncensored Super Photorealistic Images With Your Own Face) (19:41) (20 Aug 2024)](https://www.youtube.com/watch?v=1m7ZVCy3728)

* LMM
  * [What is Large Multimodal Models (LMMs)? LMMs vs LLMs in '24 by Cem Dilmegani (6 Sep 2024)](https://research.aimultiple.com/large-multimodal-models/)
  * [Awesome-Multimodal-Large-Language-Models (5 Sep 2024)](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models)

## In-Class

* Prompt Engineering
  * [A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications by Sahoo et al. (5 Feb 2024)](https://www.semanticscholar.org/paper/A-Systematic-Survey-of-Prompt-Engineering-in-Large-Sahoo-Singh/31d2ccff82e313eb5c1620c44bb8322da4a38513)

* Benchmarks
  * [Perplexity.ai search](https://www.perplexity.ai/search/recent-survey-of-benchmarks-RNQOwDocRMKydokO9XGg7w)
  * [Holistic Evaluation of Text-to-Image Models by Lee et al. (7 Nov 2023)](https://arxiv.org/pdf/2311.04287)
  * [BeHonest: Benchmarking Honesty in Large Language Models by Chern et al. (19 Jun 2024)](https://www.semanticscholar.org/paper/BeHonest%3A-Benchmarking-Honesty-in-Large-Language-Chern-Hu/5c1e031b21bb8ea1bd652c5a4a1b2cf32149e521)

* Transformers
  * [Transformer Explainer](https://poloclub.github.io/transformer-explainer/)

**<END>**


### Required Cloud Sign-Ups and Laptop Setups

Follow-the instructions as best you can to setup remote AI cloud services and configure your local laptop. DO NOT generate an API key yet - we'll do this in class with safeguards to prevent excess billings. Bring any questions/problems to class and we'll fix it during our break.

[Setup Instructions](../modules/signups_setups.md)

### AI News/Current Events

* [GPT-5 SOON, AI-to-AI Payments Using Crypto, xAI GPU Cluster is Live, 1,000 Agent Simulation (23:52) Aug 5, 2024](https://www.youtube.com/watch?v=7c3t5jAg0v4)

### Coding: Fine-tune and Evaluate LLMs

* [Deeplearning.ai: Finetuning Large Language Models](https://learn.deeplearning.ai/courses/finetuning-large-language-models/lesson/1/introduction)
* [ASIEST Way to Fine-Tune a LLM and Use It With Ollama (5:17) (12 Sep 2024)](https://www.youtube.com/watch?v=pxhkDaKzBaY)
* [Evaluating and Debugging Generative AI (W&B)](https://learn.deeplearning.ai/courses/evaluating-debugging-generative-ai/lesson/1/introduction)

### Multimodal LLMs

* [Python Chatbot Tutorial | Using OpenAI API to Create a Smart Chatbot (5:36) Jul 2024](https://www.youtube.com/watch?v=w55C8cLWz74)  and [Github repo](https://github.com/debeshm/Python-ChatGPT/blob/main/chatbot.py)
* [Deeplearning.ai: Prompt Engineering with OpenAI](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/2/guidelines)
* [OpenAI Developer Platform: Read "Getting Started", "Capabilities", and "Endpoints"](https://platform.openai.com/docs/overview)

## Focus on These Concepts

# WARNING

BE VERY CAREFUL WITH PAID API SERVICE like OpenAI - costs can run up quickly with excessive use and coding errors. Set-up safe maximum usage limits $5-10 that you can bump up over the course of the semester.

Remember to review the API usage guidelines and rate limits to ensure responsible use of the OpenAI API. If you have any questions or encounter issues, please ask in class or contact the instructor via email.

# In Class

* Fine-Tuning
  * [Unsloth Colab](https://github.com/unslothai/unsloth)

## Motivation

## Bookeeeping

## Concepts

## Hands-On

## In-Class Programming Task

* Fine-Tune
  * [Ollama  + Unsloth + Llama-3 + Alpaca.ipynb](https://colab.research.google.com/drive/1WZDi7APtQ9VsvOrQSSC5DDtxq159j8iZ?usp=sharing)
  * [FLUX + LORA and Kling AI (Consistent Characters & AI Videos with Your Face) (25:55) (8 Sep 2024)](https://www.youtube.com/watch?v=mUR8CUmDbo0)

## References

* [Local Models: llama.cpp, SD, whisper](https://www.qt.io/blog/examples-of-local-llm-usage?ref=dailydev)