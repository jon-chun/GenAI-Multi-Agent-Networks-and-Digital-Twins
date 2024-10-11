# Week 6: Mini-Project Embeddings

This week we combine your Prompt Engineering, OpenAI API, and Embedding knowledge to create a simple AI Gradio App. In addition to Gradio, we also learn a bit more about embeddings and vector databases to give you the basic framework to build an original Miniproject #2. This will be a Gradio AI application based upon embeddings and similarity metrics like search, recommendation, or Q&A. 

This week has a peak in programming (3 units at 1hr each) plus an optional advanced Chroma VectorDB 1hr unit. Many of related core concepts are introduced in IPHS200 Programming Humanity and IPHS300 AI for Humanity except for this week. This is why there is an unusually large amount of new concepts and code, but this will not persist through the rest of the semester.

## Miniproject #2: Gradio AI App

DEADLINE: Email me a copy of your Jupyter notebook by midnight on Sunday, Octboer 13th, 2024.

DESCRIPTION:
  Create an AI application in Colab using the lightweight Gradio UI interface. The applicaction should not just be a copy of the many existing demos. You should combine several elements (e.g. multilingual or mulimodal models, databases, pipelines, etc) from two or more of the many resources I list on this page and at resources like [OpenAI Cookbook](https://cookbook.openai.com/) or [Huggingface.co](https://huggingface.co/learn/cookbook/en/enterprise_cookbook_gradio). Don't forget to incorporate more sophisticated [prompt engineering techniques](./ai_prompt_engineering.md) into your pipelines that structure and guide each task.

  One goal of this project is to introduce you to an easy to use UI interface customized for quickly deploying AI applications. Another goal is for you to become comfortable and begin thinking creatively about remixing AI-related code and multi-stage model pipelines to develop creative new solutions to real-world problems. This includes using your personal experiences, training and interests to converge upon something unique and truely your own. For example, think about some pain points in your own experience, decompose the workflow, and automate as many subtasks as possible with strategic human-in-the-loop (HIL) supervision and quality control.

  For a detailed example (beyond what you have to do for this project but perhaps suitable for a class final project):

    * Automating Audio Lecture to Illustrated Summary Note:
      * input data: *.wav or *.mp3 audio files of lecture
      * audio preprocess: segment audio files into digestable 5min chunks at pauses
      * transcribe to text with a speech-to-text (STT) model like OpenAI's Whisper
      * audio postprocess: compile 5min transcription into a one text and proof with spelling/grammar checks
      * text preprocess: segment unified text into semantic segments (e.g. by topics, speakers, etc)
      * section summarize: use a remote OpenAI API (best) or a local performant Huggingface transformer(summarize) pipeline for abstractive or extractive summarization section by section
      * global summarize: synthesize a meta-summarization across section summaries using a cheaper state-of-the-art (SOTA) OpenAI API model (e.g. gpt4 mini)
      * visual prompts: use specialized fine-tuned text-to-image_prompt models to generate custom genai prompts for each section
      * generate images: feed the image prompts to a text-to-image model (e.g. OpenAI's DALL-E2) to generate 5 images for each section and use human-in-the-loop (HIL) (e.g. you) to select and insert the best image into each section
      * Create *.mp3 audio file using a text-to-speech (TTS) to read your summary aloud while you workout at the KAC
    
    For this project just combine at least 2 or more models/pipeline steps in a Google Colab notebook behind a servicable Gradio UI for now. As you learn more through this semester (or next semester's AI for the Humanities), you should be able to extend, create, and demonstrate a personalized project for your github.com repository to show grad school, future employers, and future life partners. 

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

* Quiz

### PRESENTATIONS

* Rida
* Dennis

### ANNOUNCEMENTS

* [GoTechnica UMd Hackathon](https://gotechnica.org/)
* [AI for Good](https://aiforgood.itu.int/)
* [Encode Justice](https://encodejustice.org/)

### NEWS

* [These new AI Video Generators are Crazy! (26:11) (6 Oct 2024)](https://www.youtube.com/watch?v=MIjuP5ur7oA)
* [MovieGen by Meta](https://ai.meta.com/research/movie-gen/)

### FOLLOW-UPS

* [I made two AIs go on a date and the result was breathtaking (8:25) (28 Sep 2024)](https://www.youtube.com/watch?v=im3jo_Ulmlk)
* [Two AIs debate consciousness (22:24) (6 Oct 2024)](https://www.youtube.com/watch?v=KZhTdbmm01M)
* [ChatGPT Canvas : OpenAI JUST Dropped CANVAS which can CREATE Full-Stack Apps! (Artifacts Feature!) (3:14) (3 Oct 2024)](https://www.youtube.com/watch?v=YbaUscQOyPI)
* [How You Will Lose Your Job To AI (7:25) (Sep 2024)](https://www.youtube.com/watch?v=iNKFOCki42I) 

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

### CODE DOCUMENTATION

* [Gradio](https://www.gradio.app/guides/)
* OpenAI Whisper
  * [Paper](https://arxiv.org/abs/2212.04356)
  * [Github](https://github.com/openai/whisper)

### CODE SAMPLE

* [Gradio Whisper STT Colab](https://colab.research.google.com/github/petewarden/openai-whisper-webapp/blob/main/OpenAI_Whisper_ASR_Demo.ipynb#scrollTo=ZsJUxc0aRsAf)

### CODE REVIEW

* In class walk-thrus

## RESOURCES

### AI Applications

* [Build Streamlit Apps with AI and Deploy in Two Clicks on Replit (34:59) (7 Sep 2024)](https://www.youtube.com/watch?v=UFyXVC_nzZE)
* [StockLlama for Stock and Crypto Price Prediction with AI - Install Locally (8:14) (6 Sep 2024)](https://www.youtube.com/watch?v=zss8d793DDg) with [Repo](https://github.com/LegallyCoder/StockLlama)

### RESEARCH

* [Open LLM Mixture of Experts by Allen.ai](https://allenai.org/blog/olmoe)
  * [OLMoE Github](https://github.com/allenai/OLMoE)
  * [Multimodal Molmo](https://molmo.allenai.org/)
* [SemanticScholar.org Research Dashboard](https://www.semanticscholar.org/me/research)
* [Google Scholar](https://scholar.google.com/citations?user=l-iUHQMAAAAJ&hl=en&oi=ao)
* [ECCV 2024 Papers](https://huggingface.co/spaces/ECCV/ECCV2024-papers)