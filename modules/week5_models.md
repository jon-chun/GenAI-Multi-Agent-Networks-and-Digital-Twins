# Week 5: Models and Fine-Tuning

Starting the course from the outside the black box inward (e.g. Prompt Engineering, Embeddings, etc), we spend this week getting to know a bit more about the details of large language models (LLMs) and large multimodal models (LMMs) from competitive ranking tables to life-cycles to tokenizations. Unlike our course, "AI for the Humanities", we don't go into details of the architecture or other finer points like MLOps. However, we will cover the most important and practical aspects of working with LLMs from a higher level systems architect's perspective.

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

### AI News and Events

* NOTE: After reading the article, spend only 15m or so to peruse the YCombinator Hacker News Commentary to find a diversity of informed opinions
* [The Intelligence Age (23 Sep 2024)](https://ia.samaltman.com/)
* [YCombinator Hacker News Commentary](https://news.ycombinator.com/item?id=41628167)

### Research

* NOTE: Spend only 15-20m to read the ABSTRACT, INTRODUCTION and then use Google [NotebookLM](https://notebooklm.google.com/?pli=1) (or ChatGPT or other AI) to outline or summarize this paper for major concepts in Figure 2. 
* [A Survey on Benchmarks of Multimodal Large Language Models by Li et al. (16 Aug 2024)](https://www.semanticscholar.org/paper/A-Survey-on-Benchmarks-of-Multimodal-Large-Language-Li-Lu/d40631a850c21607a5b1cb63efc7bf4ba1ab1fe0#:~:text=A%20comprehensive%20review%20of%20200%20benchmarks%20and%20evaluations%20for)

### Models

* Overview
  * [What is Large Multimodal Models (LMMs)? LMMs vs LLMs in '24 by Cem Dilmegani (6 Sep 2024)](https://research.aimultiple.com/large-multimodal-models/)
* Tokenizer
  * [tiktoken]()
* Hyperparameters
  * [Optimize Your AI Models (11:42) (28 Sep 2024)](https://www.youtube.com/watch?v=QfFRNF5AhME)
* Size
  * [Calculating GPU Requirements For Open Source LLMs (5:19) (30 Aug 2024)](https://www.youtube.com/watch?v=WyZQ73cKLMU)

### Coding

* [deeplearning.ai: Embedding Models: From Architecture to Implementation (1hr)](https://www.deeplearning.ai/short-courses/embedding-models-from-architecture-to-implementation/)
* [deeplearning.ai: Pretraining LLMs (1hr)](https://www.deeplearning.ai/short-courses/pretraining-llms/)

## In-Class

### Overhead

* Quiz
* AI News
* AI Releases
* AI Research

### Presentations

* Dillon
* Sammy

### New

* [Self-Aware IA](https://x.com/omooretweets/status/1840251853327741138)
* [NVIDIA and LlamaIndex Developer Contest](https://developer.nvidia.com/llamaindex-developer-contest)

### Research

* [OpenReview CoNLL](https://openreview.net/group?id=EMNLP/2024/Workshop/CoNLL#tab-accept-poster)
* [Frontiers in Computer Science](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2024.1444549/abstract)

### Tools

* [summarize-hn](https://github.com/jon-chun/summarize-hnews) to quickly digest hundreds of comments and threads
* [NotebookLM in Hacker News](https://news.ycombinator.com/item?id=41693087)

* [How to Create a History Channel with ChatGPT & AI Video Generator (19:14) (25 Sep 2024)](https://www.youtube.com/watch?v=ez3EaqW1JyI)

### Concepts

* LLM Benchmarks
* LLM Life cycle
* Training Datasets
* Metrics and Benchmarks
* Virtual Environments vs Virtual Machines vs the Cloud

### Review Coding Assignments

* [Embedding Models: From Architecture to Implementation (1hr)](https://www.deeplearning.ai/short-courses/embedding-models-from-architecture-to-implementation/)
* [Pretraining LLMs (1hr)](https://www.deeplearning.ai/short-courses/pretraining-llms/)

## Resources

* Prompt Engineering
  * [Contextual Retrieval with Any LLM: A Step-by-Step Guide (15:36) (30 Sep 2024)](https://www.youtube.com/watch?v=6efwN_US-zk&t=126s)
  * [Github](https://github.com/Coding-Crashkurse/LangGraph-Tutorial)

* Tokenization
  * [WordLlama](https://github.com/dleemiller/WordLlama/blob/main/tutorials/extract_token_embeddings.md)
  * [Tiktoken Colab](https://colab.research.google.com/github/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)

* LLM Benchmarks:
  * [Stanford HELM](https://crfm.stanford.edu/helm/)
  * [Google BigBench Hard](https://github.com/suzgunmirac/BIG-Bench-Hard)

* LLM Leaderboards
  * [Kaggle ARC Challenge 2024](https://www.kaggle.com/competitions/arc-prize-2024/leaderboard)
  * [Huggingface LMsys Leaderboard][LLMsys Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
  * [Huggingface LMSys Chatbot Area](https://lmarena.ai/?leaderboard)

* Fine-Tune
  * [Ollama  + Unsloth + Llama-3 + Alpaca.ipynb](https://colab.research.google.com/drive/1WZDi7APtQ9VsvOrQSSC5DDtxq159j8iZ?usp=sharing)
  * [FLUX + LORA and Kling AI (Consistent Characters & AI Videos with Your Face) (25:55) (8 Sep 2024)](https://www.youtube.com/watch?v=mUR8CUmDbo0)
  * [Unsloth Colab](https://github.com/unslothai/unsloth)