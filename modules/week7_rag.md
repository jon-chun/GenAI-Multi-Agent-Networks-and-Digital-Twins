
# Week 7: RAG

Retrieval Augmented Generation (RAG) and chatbots are two of the most prominent applications that highlight the unique value LLM models bring to traditional software engineering. A deeper understanding of RAG is not only a practical skill, but it operationalizes and illustrates multiple real-world tradeoffs between (a) performance vs cost, safety, bias, etc., (b) model/tool selection, and (c) various software architectures. We incorporate and extend last weeks' study of embeddings and vector databases by introducing RAG and exploring some more advanced concepts like hybrid search and reranking.  

## KEY QUESTIONS



## READINGS

### AI NEWS AND CULTURE

* [I'd like to change the world | Peter Weyland TED 2023 (6:52) (2012 movie Prometheus)](https://www.youtube.com/watch?v=6EtegGrPcp4)
* [(0:50 to 14:40) "GLAD Sam Altman Was FIRED" Geoffrey Hinton | Nobel Prize in Physics Sparks Controversy (28:02) (10 Oct 2024)](https://www.youtube.com/watch?v=MTK3wpzAPwY)
* [(0:00 to 12:01) LLMs are not superintelligent | Yann LeCun and Lex Fridman (26:20) (Apr 2024)](https://www.youtube.com/watch?v=NVxcsekcbhs)

### RESEARCH

* (~5 min)[Independent analysis of AI models and API providers (evergreen)](https://artificialanalysis.ai/)
* (~5 min)[Massive Text Embedding Benchmark (MTEB) Leaderboard Leaderboard at Huggingface.co](https://huggingface.co/spaces/mteb/leaderboard)
* (~15 min)[MTEB: Massive Text Embedding Benchmark by Muennighoff et al. (19 Mar 2023)](https://arxiv.org/pdf/2210.07316)

### SOFTWARE ENGINEERING

* [RagFlow: Ultimate RAG Engine - Semantic Search, Embeddings, Vector Search, & More! (12:19) (Apr 2024)](https://www.youtube.com/watch?v=awTJmsSj2tA)
  RAGFlow is an open-source RAG (Retrieval-Augmented Generation) engine based on deep document understanding. It offers a streamlined RAG workflow for businesses of any scale, combining LLM (Large Language Models) to provide truthful question-answering capabilities, backed by well-founded citations from various complex formatted data.
* [Python RAG Tutorial (with Local LLMs): AI For Your PDFs (21:32) (May 2024)](https://www.youtube.com/watch?v=2TJxpyO3ei4&list=PLD7HrIBE_yqIXVd1bq-E-7Q49QaZheu9e)
* [RAG ipynb: CRAG, LlamaIndex, Ollama, ReAct Agent (19:19) (Apr 2024)](https://www.youtube.com/watch?v=qPsmRk14BNM&list=PLD7HrIBE_yqIXVd1bq-E-7Q49QaZheu9e&index=5)

### CODING

* [Advanced Retrieval for AI with Chroma (1hr)](https://learn.deeplearning.ai/courses/advanced-retrieval-for-ai/lesson/1/introduction)
* [Building and Evaluating Advanced RAG (1hr)](https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag/lesson/1/introduction)

## IN-CLASS EXERCISES

### OVERHEAD

* [Quiz](https://docs.google.com/forms/d/e/1FAIpQLScBiBwYf2h6hvpVjCAsf1J6EF7PU1IgSswJSJ1D4DoNteGciQ/viewform?usp=sf_link)

### PRESENTATIONS

* Beshoy
* Parker

### ANNOUNCEMENTS

* [Welcome, Gradio 5 (9 Oct 2024)](https://huggingface.co/blog/gradio-5)
* [Gradio 5 - Building a Quick Chabot UI for LangChain (8:22) (10 Oct 2024)](https://www.youtube.com/watch?v=u_Xm3vgBQ9Y)

### NEWS: AUTOMATION

* (0:50-12:50) [How Domain-Specific AI Agents Will Shape the Industrial World in the Next 10 Years (32:28) (10 Oct 2024)](https://youtu.be/aWEaEgV1pHQ?t=58)

### NEWS: TECH

* LightRAG:
  * [LightRAG: A More Efficient Solution than GraphRAG for RAG Systems? (19:48) (15 Oct 2024)](https://www.youtube.com/watch?v=oageL-1I0GE)
  * [Github Webpage](https://lightrag.github.io/)
* MS GraphRAG
  * [Github Webpage](https://microsoft.github.io/graphrag/)
* [Goodbye Text-Based RAG, Hello Vision AI: Introducing LocalGPT Vision! (17:57) (8 Oct 2024)](https://www.youtube.com/watch?v=YPs4eGDpIY4)
* [localGPT-Vision](https://github.com/PromtEngineer/localGPT-Vision)
  Chat with your documents using Vision Language Models. This repo implements an End to End RAG pipeline with both local and proprietary VLMs
* [New technique makes RAG systems much better at retrieving the right documents (9 Oct 2024)](https://venturebeat.com/ai/new-technique-makes-rag-systems-much-better-at-retrieving-the-right-documents/)

### FOLLOW-UPS

* (voice+text-to-voice)[A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching](https://swivid.github.io/F5-TTS/) 
  * [Colab Gradio App](https://colab.research.google.com/github/NeuralFalconYT/F5-TTS-Demo/blob/main/Official_F5_TTS_Demo.ipynb#scrollTo=RUNBiTLLYN49)
  * [Voice Samples](https://drive.google.com/drive/folders/18k-IMiwdkjbOLoruDk0xLvXm52m6pegI?usp=sharing)
  * [Legally Blonde Admissions Transcript](https://www.youtube.com/watch?v=ZbZndWCq6Gs&t=37s)
  My name is Elle Woods, and for my admissions essay, I’m gonna tell all of you at Harvard why I’m gonna make an amazing lawyer.
  As president of my sorority, I’m skilled at commanding the attention of a room, and discussing very important issues.
  It has come to my attention that the maintenance staff is switching our toilet paper from Charmin to generic.
  All those opposed to chafing, say “aye Aye'
  I'm able to recall hundreds of important details at the drop of a hat.
  Hey, Elle, do you know what happened on Days of Our Lives yesterday?
  Why yes, Margot, I do.
  Once again, we joined Hope in the search for her identity.
  She's been brainwashed by the evil Stefano.
  Three... Get set, and go!
  I feel comfortable using legal jargon in everyday life.
  * [Movie Trailer Voiceover](https://youtu.be/ZB_hAVZLKE8?t=18)
  * [Redd Pepper](https://www.youtube.com/watch?v=5K-6vL0LqMw)
  * [Voiceover Examples Loop](https://www.youtube.com/watch?v=qGBdwOsvl3E)
* [Transform Speech into Meaning by Assembly.ai](https://www.assemblyai.com/)
* LlamaFactory
  * [How to Get your LLMs to OBEY | Easiest Fine-tuning Interface for Total Control over your LLMs (7:03) (13 Oct 2024)](https://www.youtube.com/watch?v=nMFzUeOUzyo)
  * [Colab](https://colab.research.google.com/drive/1eRTPn37ltBbYsISy9Aw2NuI2Aq5CQrD9?usp=sharing#scrollTo=wFyKaGC1dcEx)

### RESEARCH

* [YT@lev-selector: Lev Selector AI Updates](https://www.youtube.com/@lev-selector)
* [Searching for Best Practices in Retrieval-Augmented Generation by Wang et al. (1 Jul 2024)](https://www.semanticscholar.org/paper/Searching-for-Best-Practices-in-Retrieval-Augmented-Wang-Wang/9a946c503b6e799b3d57375b6edfaf4e24febcea)
* [Development and Testing of Retrieval Augmented Generation in Large Language Models - A Case Study Report by Ke et al. (29 Jan 2024)](https://www.semanticscholar.org/paper/Development-and-Testing-of-Retrieval-Augmented-in-A-Ke-Jin/7423e5c903fb2befaf471cae64e2530f7c1d0404)

### CONCEPTS

* RAG 
  * Injection
  * Retrieval
  * Synthesis
* RAG (Relevance) Triad
  * Query
  * Context
  * Response
* RAG
  * Sentence Window Retrieval
  * Auto-merging Retrieval
* RAG Advanced
  * Embedding-based Retrieval
  * Pitfalls
  * Query Expansion
  * Cross-encoding re-ranking
  * Other Techniques

### TOOLS

* [RAGFlow Repo](https://github.com/infiniflow/ragflow)
* [Molmo MML](https://molmo.allenai.org/)
* [Independent analysis of AI models and API providers (evergreen)](https://artificialanalysis.ai/)
* [Massive Text Embedding Benchmark (MTEB) Leaderboard Leaderboard at Huggingface.co](https://huggingface.co/spaces/mteb/leaderboard)
* [MTEB: Massive Text Embedding Benchmark by Muennighoff et al. (19 Mar 2023)](https://arxiv.org/pdf/2210.07316)

### SOFTWARE ENGINEERING

* Product Selection and Bake-offs
  * [Reddit: Vector database : pgvector vs milvus vs weaviate (Jun 2024)](https://www.reddit.com/r/LocalLLaMA/comments/1e63m16/vector_database_pgvector_vs_milvus_vs_weaviate/)
  * [Reddit: Choosing a vector db for 100 million pages of text. Leaning towards Milvus, Qdrant or Weaviate. Am I missing anything, what would you choose? (May 2024)](https://www.reddit.com/r/vectordatabase/comments/1dcvyrm/choosing_a_vector_db_for_100_million_pages_of/)
  * [HNews: Choosing a Vector Database (4 Oct 2023)](https://news.ycombinator.com/item?id=37764489)
  * [Picking a vector database: a comparison and guide for 2023](https://benchmark.vectorview.ai/vectordbs.html)
  * [Quadrant VectDB Performance Table](https://qdrant.tech/benchmarks/)

### CODE SAMPLE

* Advanced RAG
  * RAG
    * [Ollama Rag Colab](https://colab.research.google.com/drive/1cqLm7bxVAvh5HA5X38KG-gmofdGrEAwN?usp=sharing)
    * [MemoRAG Colab](https://github.com/qhjqhj00/MemoRAG)
  * Multimodal RAG Pipeline
    * [Sparrow](https://github.com/katanaml/sparrow)
  * Memory Rag
    * [MemoRAG: Moving Towards Next-Gen RAG Via Memory-Inspired Knowledge Discovery (18 Sep 2024)](https://github.com/qhjqhj00/MemoRAG)

### CODE REVIEW

* Walk-thru in class

### EXTRA CODE

* [Multimodal RAG Chat with Video (1hr)](https://www.deeplearning.ai/short-courses/multimodal-rag-chat-with-videos/)