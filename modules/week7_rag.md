
# Week 7: RAG

Retrieval Augmented Generation (RAG) and chatbots are two of the most prominent applications that highlight the unique value LLM models bring to traditional software engineering. A deeper understanding of RAG is not only a practical skill, but it operationalizes and illustrates multiple real-world tradeoffs between (a) performance vs cost, safety, bias, etc., (b) model/tool selection, and (c) various software architectures. We incorporate and extend last weeks' study of embeddings and vector databases by introducing RAG and exploring some more advanced concepts like hybrid search and reranking.  

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
* [Python RAG Tutorial (with Local LLMs): AI For Your PDFs (21:32) (May 2024)](https://www.youtube.com/watch?v=2TJxpyO3ei4&list=PLD7HrIBE_yqIXVd1bq-E-7Q49QaZheu9e)
* [RAG ipynb: CRAG, LlamaIndex, Ollama, ReAct Agent (19:19) (Apr 2024)](https://www.youtube.com/watch?v=qPsmRk14BNM&list=PLD7HrIBE_yqIXVd1bq-E-7Q49QaZheu9e&index=5)

### CODE

* [Advanced Retrieval for AI with Chroma (1hr)](https://learn.deeplearning.ai/courses/advanced-retrieval-for-ai/lesson/1/introduction)
* [Building and Evaluating Advanced RAG (1hr)](https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag/lesson/1/introduction)

## IN-CLASS EXERCISES

### OVERHEAD

* [Quiz](../images/error404_agi_not_found.png)

### PRESENTATIONS

* Braeden Singleton
* Parker Gibbons

### ANNOUNCEMENTS

* [NVIDIA RAG Contest](https://developer.nvidia.com/llamaindex-developer-contest?ncid=em-anno-190320&nvweb_e=n2j3n8SXfBKSp_LcvHb5_A5Lwybv_QzDKSDLHwuv5ihIRX1Sgrzu5OzD6pzbiQnq5vC9P0cK72ZIVhIp25LTGQ&mkt_tok=MTU2LU9GTi03NDIAAAGVvpjnETBxk6YNpyjsbZZaN7nxJIDe88MjeTHnMLm_jNWlJsvYuq2V9UCeZoK70_R7Fvy3Zcv5aWzbx47Bv-NJUmQbPwYGXaeqP17tThfHVm48AyCni44)

### NEWS

* [Upcoming](oh_noes_404.md)

### FOLLOW-UPS

* [Claude Projects](https://support.anthropic.com/en/articles/9517075-what-are-projects)
* [Introducing the Realtime API by OpenAI Speech](https://openai.com/index/introducing-the-realtime-api/)
* [Transform Speech into Meaning by Assembly.ai](https://www.assemblyai.com/)

### RESEARCH

* [YT@lev-selector: Lev Selector AI Updates](https://www.youtube.com/@lev-selector)
* [Searching for Best Practices in Retrieval-Augmented Generation by Wang et al. (1 Jul 2024)](https://www.semanticscholar.org/paper/Searching-for-Best-Practices-in-Retrieval-Augmented-Wang-Wang/9a946c503b6e799b3d57375b6edfaf4e24febcea)

### CONCEPTS

* RAG 
  * Injection
  * Retrieval
  * Synthesis
* RAG (Relevance) Triad
  * Query
  * Context
  * Repsonse
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

* Product Selection and Bakeoffs
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