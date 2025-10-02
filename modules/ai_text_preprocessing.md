# Text Preprocessing


## Unstructured Text

* [LangExtract (Jul 2025)](https://github.com/google/langextract)
  - [LangExtract - Google's New Library for NLP Tasks (21:01) (4 Aug 2025)](https://www.youtube.com/watch?v=t-53fouKqWI)
* [Guidance (Jul 2025)](https://github.com/guidance-ai/guidance)
* [Extractous (Dec 2024)](https://github.com/yobix-ai/extractous)
* [Pydantic]()
* [Unstruct](https://github.com/Zipstack/unstract)
* [DocETL (Jul 2025)](https://github.com/ucbepic/docetl)
* [JohannesKaufmann/html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown)
* [Goldziher/html-to-markdown](https://github.com/Goldziher/html-to-markdown)
* [turndown](https://github.com/mixmark-io/turndown)

## Commercial ETL

* [sensible](https://www.sensible.so/)
  
## Structured Text

Several open-source Python libraries exist for decomposing and transforming full documents into semantically meaningful hierarchical structures. Here are some notable options:

## Pydoxtools

Pydoxtools is a recently developed open-source Python library specifically designed for document analysis and hierarchical structuring[1]. It offers the following key features:

- Processing pipeline management with AI integration
- Support for various document formats
- Document analysis and question answering capabilities
- PDF table extraction without deep neural networks
- Embedding generation for indexing information

Pydoxtools can handle various document types, including PDFs, Word documents, and EPUB books. It allows for natural language querying to extract data and can generate sophisticated embeddings for use with AI models like ChatGPT[1].

## Hierarchy Builder

Hierarchy Builder is a Python package focused on organizing and visualizing large collections of related textual strings in a hierarchical Directed Acyclic Graph (DAG) structure[2]. While it's primarily designed for biomedical data, it can be adapted for other domains. Key features include:

- Generation of DAG structures from input sentences and spans
- Customizable number of top-level entries
- Option to ignore specific words
- Integration with UMLS (Unified Medical Language System) for biomedical applications

The output is a JSON file representing the hierarchical structure, with each node representing a concept in the DAG[2].

## Hierarchical Document Transformer (HDT)

Although not a library per se, the Hierarchical Document Transformer (HDT) is a novel sparse Transformer architecture designed for processing hierarchically structured documents[3]. Its key features include:

- Introduction of auxiliary anchor tokens for structural elements (sentences, sections, documents)
- Multi-level hierarchical attention pattern
- Efficient processing of long documents
- Hierarchical positional encoding to model different hierarchy levels

While HDT is more of an architectural approach than a ready-to-use library, its concepts could be implemented or adapted using existing deep learning frameworks[3].

## HDMF (Hierarchical Data Modeling Framework)

HDMF is a Python package for working with hierarchical data[4]. While not specifically designed for document processing, it provides tools that could be adapted for this purpose:

- APIs for specifying data models
- Reading and writing data to different storage backends
- Representing data with Python objects

HDMF is particularly useful for scientific data standards and could potentially be adapted for document structuring tasks[4].

When choosing a library for decomposing documents into hierarchical structures, consider factors such as the specific requirements of your project, the types of documents you'll be working with, and the level of customization you need. Pydoxtools and Hierarchy Builder offer more direct solutions for document analysis, while HDMF provides a flexible framework for hierarchical data modeling that could be adapted to document structuring tasks.

Citations:
[1] https://www.reddit.com/r/Python/comments/135e14f/say_hello_to_my_new_open_source_library_for/
[2] https://pypi.org/project/hierarchybuilder/
[3] https://arxiv.org/html/2407.08330v1
[4] https://github.com/hdmf-dev/hdmf


## ETL Pipelines / Complex Document Processing

* [ToWhee](https://github.com/towhee-io/towhee)
* DocETL
  * [Github](https://github.com/ucbepic/docetl)
  * [DocETL Documentation](https://ucbepic.github.io/docetl/installation/)
  * [Analyzing common weaknesses in ICLR 2024 reviews with DocETL (31:11) (29 Oct 2024)](https://www.youtube.com/watch?v=IlgueVqtHGo)
  * [ChatGPT Setup](https://chatgpt.com/share/672b25a2-2314-800d-8caf-a6b958aefa93)

* [New RAG for Multi-Modal DocVQA: M3DOCRAG (ColPali Qwen2-VL) (9:51) (9 Nov 2024)](https://www.youtube.com/watch?v=E3ELon1uh4A)
  * [Github](https://github.com/merveenoyan/smol-vision/blob/main/ColPali_%2B_Qwen2_VL.ipynb)
  * [Colab](https://colab.research.google.com/github/merveenoyan/smol-vision/blob/main/ColPali_%2B_Qwen2_VL.ipynb)
  * [Paper](https://arxiv.org/pdf/2411.04952)