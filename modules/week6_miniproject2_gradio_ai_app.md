# Week 6: Mini-Project Embeddings

This week we combine your Prompt Engineering, OpenAI API, and Embedding knowledge to create a simple AI Gradio App. In addition to Gradio, we also learn a bit more about embeddings and vector databases to give you the basic framework to build an original Miniproject #2. This will be a Gradio AI application based upon embeddings and similarity metrics like search, recommendation, or Q&A. 

This week has a peak in programming (3 units at 1hr each) plus an optional advanced Chroma VectorDB 1hr unit. Many of related core concepts are introduced in IPHS200 Programming Humanity and IPHS300 AI for Humanity except for this week. This is why there is an unusually large amount of new concepts and code, but this will not persist through the rest of the semester.

## KEY QUESTIONS

1. What are the potential societal and economic impacts of humanoid robotics, as discussed in ARK's analysis?
2. How does OpenAI's business model compare to other tech companies, and what are the main criticisms of its approach?
3. What are the key features and capabilities of OpenAI's Whisper model, and how does its performance vary across different languages?
4. How can Hugging Face's Transformers library be utilized for various NLP tasks, and what are its main advantages?
5. What are the primary advantages of using Gradio for building AI applications, and how does it simplify the development process?
6. How do vector databases enhance the functionality of AI applications, and what are some common use cases?
7. What are the ethical considerations when fine-tuning large language models, and how can we ensure responsible development?
8. How does the process of fine-tuning differ from pre-training, and what are the key steps involved?
9. What role do embeddings play in modern AI applications, and how can they be effectively utilized in search and recommendation systems?
10. How might the integration of tools like Whisper, Hugging Face, and Gradio change the landscape of AI application development, and what new possibilities do they unlock?

## READINGS

### AI NEWS AND CULTURE

* [Terminator 3 Skynet Takes Over (4:21) (Terminator 2)](https://www.youtube.com/watch?v=_Wlsd9mljiU)
* [How ARK Is Thinking About Humanoid Robotics (9m) (10 Sep 2024)](https://www.ark-invest.com/articles/analyst-research/how-ark-is-thinking-about-humanoid-robotics)
* [OpenAI Is A Bad Business (32m) (2 Oct 2024)](https://www.wheresyoured.at/oai-business/) (The writing is so prolix please use AI to summarize and extract arguments with supporting facts ~5mins like [this o1-preview summary](https://chatgpt.com/share/66fea450-d0a8-800d-8887-caab6723231d) or [this Claude Sonnet 3.5 summary](https://claude.site/artifacts/ac4b129a-643c-42a5-b0f3-043bcdc96110)
* [‘Bullying works’ and other lessons from a tactical urbanist](https://bikeportland.org/2023/10/20/bullying-works-and-other-lessons-from-tactical-urbanist-adam-egelman-380678)

### RESEARCH

* OpenAI Whisper (allocate ~15mins)
  * [Blog](https://openai.com/index/whisper/)
  * [Paper](https://arxiv.org/abs/2212.04356) (Only read Introduction)
  * [Github](https://github.com/openai/whisper) (See Performance Chart across Languages)

### DOCUMENTATION

* Huggingface.co
  * [Huggingface Intro](https://huggingface.co/docs/transformers/index)
  * [Huggingface Quick Tour](https://huggingface.co/docs/transformers/quicktour)
* [Gradio Quickstart](https://www.gradio.app/guides/quickstart)

### CODING

* [DeepLearning.ai: Building Generative AI Applications with Gradio (1hr)](https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/)
  * NOTE: I've created these modified notebooks that run local LLMs in Colab rather than call remote Huggingface API endpoints (which don't seem to work in Deeplearning.ai). I've left the last 1.5 Notebooks for you to modify as an exercise.
  * [Notebook #1](../code/deeplearningai/deeplearningai_gradio_L1_NLP_tasks_with_a_simple_interface.ipynb)
  * [Notebook #2](../code/deeplearningai/deeplearningai_gradio_L2_Image_captioning_app.ipynb)
  * [Notebook #3](../code/deeplearningai/deeplearningai_gradio_L3_Image_generation_app.ipynb)
  * [Notebook #4 (partial)](../code/deeplearningai/deeplearningai_gradio_L4_Describe_and_generate_game.ipynb)
  * [Notebook #5 (unchanged)](../code/deeplearningai/deeplearningai_gradio_L5_Chat_with_any_LLM.ipynb)
* [DeepLearning.ai: Vector Databases Embeddings Applications (1 hr)](https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/)
* [DeepLearning.ai: Finetuning Large Language Models (1 hr)](https://learn.deeplearning.ai/courses/finetuning-large-language-models/lesson/1/introduction)-

## IN-CLASS EXERCISES

### OVERHEAD

* [Quiz](oh_noes_404.md)

### PRESENTATIONS

* Presentation #1
* Presentation #2

### ANNOUNCEMENTS

* ARC AGI $1M Challenge
  * [@arcprize on X.com](https://x.com/arcprize)
  * [HNews (May 2024)](https://news.ycombinator.com/item?id=40648960)
  * [the ARC Prize 2024 University Tour (1pm Tues, 24 Oct 2024)](https://arcprize.org/blog/2024-university-tour)
* [GoTechnica UMd Hackathon](https://gotechnica.org/)
* [AI for Good](https://aiforgood.itu.int/)
* [Encode Justice](https://encodejustice.org/)

### NEWS

* [These new AI Video Generators are Crazy! (26:11) (6 Oct 2024)](https://www.youtube.com/watch?v=MIjuP5ur7oA)
* [MovieGen by Meta](https://ai.meta.com/research/movie-gen/)
* [Introducing the Realtime API by OpenAI Speech](https://openai.com/index/introducing-the-realtime-api/)
* [Transform Speech into Meaning by Assembly.ai](https://www.assemblyai.com/)

### FOLLOW-UPS

* [I made two AIs go on a date and the result was breathtaking (8:25) (28 Sep 2024)](https://www.youtube.com/watch?v=im3jo_Ulmlk)
* [ChatGPT Canvas : OpenAI JUST Dropped CANVAS which can CREATE Full-Stack Apps! (Artifacts Feature!) (3:14) (3 Oct 2024)](https://www.youtube.com/watch?v=YbaUscQOyPI)
* [How You Will Lose Your Job To AI (7:25) (Sep 2024)](https://www.youtube.com/watch?v=iNKFOCki42I) 

### RESEARCH

* [Open LLM Mixture of Experts by Allen.ai](https://allenai.org/blog/olmoe)
  * [OLMoE Github](https://github.com/allenai/OLMoE)
  * [Multimodal Molmo](https://molmo.allenai.org/)
* [SemanticScholar.org Research Dashboard](https://www.semanticscholar.org/me/research)
* [Google Scholar](https://scholar.google.com/citations?user=l-iUHQMAAAAJ&hl=en&oi=ao)
* [ECCV 2024 Papers](https://huggingface.co/spaces/ECCV/ECCV2024-papers)

### CONCEPTS

* Colab
* UI/UX - Gradio, Streamlit, etc.
* Vector Databases
  * Vectorizations (TF/IDF/BoW/BM25, Dense/Sparse, Syntatic/Semantic, etc)
  * Embedding Models
  * Multilingual Embeddings
  * Multimodal Embeddings (e.g. word vs image with VAEs)
  * Distance Metrics (BM25, FAISS, etc)
  * Approximate algorithms (HNSW)
  * Hybrid Search
  * Adv Vectors for RAG (filtering, reranking, knowlege injection, hallucinations, citations, etc.)
* Dataset Creation
* LLMs as Fuzzy Databases
  * pre-training
  * fine-tuning
  * alignment
  * prompt injection (ICL)

### TOOLS

* [MS Edge Copilot](https://www.microsoft.com/en-us/edge/download?form=MA13FJ)
* [Sample Gradio AI Apps](https://github.com/mgultekin/Building-Generative-AI-Applications-with-Gradio)
* [Midjourney Prompt Generator (broken)](https://colab.research.google.com/github/AnthusAI/openai-midjourney-prompt-generator/blob/main/midjourney-prompt-generator.ipynb)
* [Mini-Project #2 Baseline](https://drive.google.com/file/d/1fAcGTwx40CCObbvUfkyxQUj8I58WgBdQ/view?usp=sharing)
* [OpenAI Cookbook](https://cookbook.openai.com/)

### Product Bakeoffs

* [Reddit: Vector database : pgvector vs milvus vs weaviate (Jun 2024)](https://www.reddit.com/r/LocalLLaMA/comments/1e63m16/vector_database_pgvector_vs_milvus_vs_weaviate/)
* [Reddit: Choosing a vector db for 100 million pages of text. Leaning towards Milvus, Qdrant or Weaviate. Am I missing anything, what would you choose? (May 2024)](https://www.reddit.com/r/vectordatabase/comments/1dcvyrm/choosing_a_vector_db_for_100_million_pages_of/)
* [HNews: Choosing a Vector Database (4 Oct 2023)](https://news.ycombinator.com/item?id=37764489)
* [Picking a vector database: a comparison and guide for 2023](https://benchmark.vectorview.ai/vectordbs.html)
* [Quadrant VectDB Performance Table](https://qdrant.tech/benchmarks/)

### CODE DOCUMENTATION

* [Gradio](https://www.gradio.app/guides/)
* OpenAI Whisper
  * [Paper](https://arxiv.org/abs/2212.04356)
  * [Github](https://github.com/openai/whisper)

### CODE SAMPLE

* [Gradio Whisper STT Colab](https://colab.research.google.com/github/petewarden/openai-whisper-webapp/blob/main/OpenAI_Whisper_ASR_Demo.ipynb#scrollTo=ZsJUxc0aRsAf)

### CODE REVIEW

* [Coming](oh_noes_404.md)

### DATASETS

* [How to Prepare Quality Dataset for LLM Training (14 Aug 2024)](https://raga.ai/blogs/llm-training-data-preparation)
* [RedPajama-Data-v2: An open dataset with 30 trillion tokens for training large language models (30 Oct 2023)](https://www.together.ai/blog/redpajama-data-v2)
* [How to Fine-Tune an LLM Part 1: Preparing a Dataset for Instruction Tuning (15 Jan 2024)](https://wandb.ai/capecape/alpaca_ft/reports/How-to-Fine-Tune-an-LLM-Part-1-Preparing-a-Dataset-for-Instruction-Tuning--Vmlldzo1NTcxNzE2)
* [How to Create High Quality Synthetic Data for Fine-Tuning LLMs (12 Jul 2024)](https://gretel.ai/blog/how-to-create-high-quality-synthetic-data-for-fine-tuning-llms)

### FINE-TUNING

* [Fine-tuning large language models (LLMs) in 2024 (23 Jul 2024)](https://www.superannotate.com/blog/llm-fine-tuning)
* [Fine Tune Llama 3.2 (3b) - On Custom Dataset 2X Faster | With Google Colab and 0$ (17:23) (2 Oct 2024)](https://www.youtube.com/watch?v=inT-m5Y9Pdo)


## RESOURCES

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