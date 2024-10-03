# Week 6: Mini-Project Embeddings

This week we combine your Prompt Engineering, OpenAI API, and Embedding knowledge to create a simple AI Gradio App. In addition to Gradio, we also learn a bit more about embeddings and vector databases to give you the basic framework to build an original Miniproject #2. This will be a Gradio AI application based upon embeddings and similarity metrics like search, recommendation, or Q&A.

## Readings

### News & Culture

* [Terminator 3 Skynet Takes Over (4:21) (Terminator 2)](https://www.youtube.com/watch?v=_Wlsd9mljiU)
* [How ARK Is Thinking About Humanoid Robotics (9m) (10 Sep 2024)](https://www.ark-invest.com/articles/analyst-research/how-ark-is-thinking-about-humanoid-robotics)
* [OpenAI Is A Bad Business (32m) (2 Oct 2024)](https://www.wheresyoured.at/oai-business/) (The writing is so prolix please use AI to summarize and extract arguments with supporting facts ~5mins)

### Programming Documentation

* Huggingface.co
  * [Huggingface Intro](https://huggingface.co/docs/transformers/index)
  * [Huggingface Quick Tour](https://huggingface.co/docs/transformers/quicktour)
* [Gradio Quickstart](https://www.gradio.app/guides/quickstart)
* OpenAI Whisper
  * [Blog](https://openai.com/index/whisper/)
  * [Paper](https://arxiv.org/abs/2212.04356) (Only read Introduction)
  * [Github](https://github.com/openai/whisper) (See Performance Chart across Languages)

### Coding

* [DeepLearning.ai: Building Generative AI Applications with Gradio (1hr)](https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/)
* [DeepLearning.ai: Vector Databases Embeddings Applications (1 hr)](https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/)
* [DeepLearning.ai: Finetuning Large Language Models (1 hr)](https://learn.deeplearning.ai/courses/finetuning-large-language-models/lesson/1/introduction)

## In-Class

### Quiz

* [Week 6 Quiz](oh_noes_404.md)

### Presentations

* Presentation #1
* Presentation #2

### Announcements

* [AI for Good](https://aiforgood.itu.int/)

### Follow-Ups

* [Coming](oh_noes_404.md)

### Research

* [SemanticScholar.org Research Dashboard](https://www.semanticscholar.org/me/research)
* [Google Scholar](https://scholar.google.com/citations?user=l-iUHQMAAAAJ&hl=en&oi=ao)
* [ECCV 2024 Papers](https://huggingface.co/spaces/ECCV/ECCV2024-papers)

### Concepts
 
* Colab
* UI/UX - Gradio, Streamlit, etc.
* Vector Datagbases
* Dataset Creation
* LLMs as Fuzzy Databases
  * pre-training
  * fine-tuning
  * alignment
  * prompt injection (ICL)

### Tools

* [Sample Gradio AI Apps](https://github.com/mgultekin/Building-Generative-AI-Applications-with-Gradio)
* [Midjourney Prompt Generator (broken)](https://colab.research.google.com/github/AnthusAI/openai-midjourney-prompt-generator/blob/main/midjourney-prompt-generator.ipynb)
* [Mini-Project #2 Baseline](https://drive.google.com/file/d/1fAcGTwx40CCObbvUfkyxQUj8I58WgBdQ/view?usp=sharing)
* [OpenAI Cookbook](https://cookbook.openai.com/)

### Datasets

* [How to Prepare Quality Dataset for LLM Training (14 Aug 2024)](https://raga.ai/blogs/llm-training-data-preparation)
* [RedPajama-Data-v2: An open dataset with 30 trillion tokens for training large language models (30 Oct 2023)](https://www.together.ai/blog/redpajama-data-v2)
* [How to Fine-Tune an LLM Part 1: Preparing a Dataset for Instruction Tuning (15 Jan 2024)](https://wandb.ai/capecape/alpaca_ft/reports/How-to-Fine-Tune-an-LLM-Part-1-Preparing-a-Dataset-for-Instruction-Tuning--Vmlldzo1NTcxNzE2)
* [How to Create High Quality Synthetic Data for Fine-Tuning LLMs (12 Jul 2024)](https://gretel.ai/blog/how-to-create-high-quality-synthetic-data-for-fine-tuning-llms)

### Fine-Tuning

* [Fine-tuning large language models (LLMs) in 2024 (23 Jul 2024)](https://www.superannotate.com/blog/llm-fine-tuning)
* [Fine Tune Llama 3.2 (3b) - On Custom Dataset 2X Faster | With Google Colab and 0$ (17:23) (2 Oct 2024)](https://www.youtube.com/watch?v=inT-m5Y9Pdo)

### Programming Documentation in Detail

* [Gradio](https://www.gradio.app/guides/)
* OpenAI Whisper
  * [Paper](https://arxiv.org/abs/2212.04356)
  * [Github](https://github.com/openai/whisper)

### Sample Code

* [Gradio Whisper STT Colab](https://colab.research.google.com/github/petewarden/openai-whisper-webapp/blob/main/OpenAI_Whisper_ASR_Demo.ipynb#scrollTo=ZsJUxc0aRsAf)

## References

### Data

* [LLM Datasets (Sep 2024)](https://github.com/mlabonne/llm-datasets)
* [LLM DataHub (2023)](https://github.com/Zjh-819/LLMDataHub)

### Synthetic Data

* [CREATE Your Own Dataset Like a Pro in 30 mins (18:29) (2 Oct 2024)](https://www.youtube.com/watch?v=MQis5kQ99mw) [Github](https://github.com/e-p-armstrong/augmentoolkit?tab=readme-ov-file#rptoolkit)

### Fine-Tuning in Detail

* Unsloth
  * [Github](https://github.com/unslothai/unsloth)
  * [Colab](https://colab.research.google.com/drive/1Ys44kVvmeZtnICzWz0xgpRnrIOjZAuxp?usp=sharing)
  * [Video (17:35) (29 Sep 2024)](https://www.youtube.com/watch?v=YZW3pkIR-YE)
* Videos
  * [Fine-Tune Llama3 using Synthetic Data (37:02) (6 May 2024)](https://www.youtube.com/watch?v=jAnVvLRPvJo&list=PLD7HrIBE_yqLv07dzDYmgmuRJRIdl0uQg&index=15) [Colab](https://colab.research.google.com/drive/1WzHVa1b6Zg862XloxY7KlvKb1gCBiMVT?usp=sharing)
  * [How to Fine-Tune Qwen-2 for Free | Open-Source LLM Guide (13:19) (30 Sep 2024)](https://www.youtube.com/watch?v=f9Fi9IKa-0M) [Colab](https://colab.research.google.com/drive/1evx24o1tN33HAb5eI-hFsQtez1VivdDo)
* [How-To Fine-Tune Llama 3.2 11B Vision Model on Custom Dataset Locally (17:07) (1 Oct 2024)](https://www.youtube.com/watch?v=zGqQGtmXFQ8) [Colab](https://colab.research.google.com/github/philschmid/deep-learning-pytorch-huggingface/blob/main/training/fine-tune-multimodal-llms-with-trl.ipynb)

### AI Applications

* [Build Streamlit Apps with AI and Deploy in Two Clicks on Replit (34:59) (7 Sep 2024)](https://www.youtube.com/watch?v=UFyXVC_nzZE)
* [StockLlama for Stock and Crypto Price Prediction with AI - Install Locally (8:14) (6 Sep 2024)](https://www.youtube.com/watch?v=zss8d793DDg) with [Repo](https://github.com/LegallyCoder/StockLlama)