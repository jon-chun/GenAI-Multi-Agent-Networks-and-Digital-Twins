# AI Document

## Document Processing

* [](https://www.youtube.com/watch?v=FN6U5D7ZsLA&t=344s)

## PDF Processing

* [SmolDocling - The SmolOCR Solution? (8:16) (18 Mar 2025)](https://www.youtube.com/watch?v=kPKRJeLMq_M)
* [Goldziher/kreuzberg](https://github.com/Goldziher/kreuzberg)
* [PDFium](https://pdfium.googlesource.com/pdfium/)

## PDF Table Extraction

* [VikParuchuri/marker](https://github.com/VikParuchuri/marker)
* BEST (PDF to Markdown) [getomni-ai/zerox](https://github.com/getomni-ai/zerox)
* [facebookresearch/nougat](https://github.com/facebookresearch/nougat)
* [LLMWhisperer](https://github.com/Zipstack/llmwhisperer-table-extraction)
* [tabulapdf/tabula](https://github.com/tabulapdf/tabula)
* [adrienjoly/npm-pdfreader](https://github.com/adrienjoly/npm-pdfreader)
* [Table Extraction LMM, gpt4-Vision, fitz/PyMuPDF](https://github.com/yigitkonur/swift-ocr-llm-powered-pdf-to-markdown)

## OCR Comparisons

* [SmolVLM-256/500M Doclking w/IBM (25 Jan 2025)](https://huggingface.co/blog/smolervlm#smoldocling)
* [OCR Comparisons for Rag (23 Sep 2024)](https://nanonets.com/blog/best-pdf-parser-for-rag-apps-a-comprehensive-guide/#summary-of-quality-of-extraction)
  * PyPDF 1 and 2 - free, but have found them to struggle with large amounts of text data, messy extraction
  * PDFminer - Generally correct with text-based questions - should be ideal for you
  * Tika Python, Llama parser - if you want to process stuff other than text like tables / images etc.

## OCR

* [Docling](https://github.com/DS4SD/docling)
  * [SmolVLM-256M/500M Docling w/IBM](https://huggingface.co/blog/smolervlm#smoldocling)
* [MistralOCR]()
* [OmniAI Xerox](https://github.com/getomni-ai/zerox)
* [LlamaOCR](https://github.com/Nutlope/llama-ocr)
* [OCRMyPDF](https://github.com/ocrmypdf/OCRmyPDF)
* [GOT-OCR2.0](https://github.com/Ucas-HaoranWei/GOT-OCR2.0)
  * [ArXiv](https://arxiv.org/html/2409.01704v1)
* [Parsevision Tessaract/EasyOCR](https://github.com/orasik/parsevision)
* Textract
* Tika
* [PyMuPDF4LLM](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/)
* [LangChain UnstructuredPDFLoader](https://api.python.langchain.com/en/latest/document_loaders/langchain_community.document_loaders.pdf.UnstructuredPDFLoader.html)
* Tesseract OCR with pdf2image
* multilingual-pdf2text
* EasyOCR
* Spark OCR
* [GOT-OCR2.0](https://huggingface.co/stepfun-ai/GOT-OCR2_0)
* [ChatGPT](https://chatgpt.com/share/66eed096-4110-800d-9d79-d131fab8b221)
* [Perplexity](https://www.perplexity.ai/search/open-source-or-python-librarie-Myts_hs4QjaG.pBkUsSNjw)
* [TesseractOCR](https://tesseract-ocr.github.io/tessdoc/Installation.html)
* [Xerox OCR](https://github.com/getomni-ai/zerox)
* [Unstruct OCR Model](https://github.com/Zipstack/unstract)
* [OCR-Battle](https://github.com/trancethehuman/ai-workshop-code/tree/main/projects/ocr-battle)
* [YT: 10 LMM for OCR (34:06) (19 Dec 2024)](https://www.youtube.com/watch?v=yT-7i5npRBQ)

## OCR Models

* [OlmOCR 7B (Feb 2025)](https://huggingface.co/allenai/olmOCR-7B-0225-preview)
  * OlmOCR Docker: "docker pull caldedaniele/olmocr-app"
  * [Docker](https://hub.docker.com/r/caldedaniele/olmocr-app)
  * [Github](https://github.com/allenai/olmocr)
  * [OlmOCR GGUF](https://huggingface.co/lmstudio-community/olmOCR-7B-0225-preview-GGUF)
* [Qwen32 Mar 2025](http://simonwillison.net/tags/qwen/)
  * [Qwen32 GGUF](https://huggingface.co/lmstudio-community/QwQ-32B-GGUF)

## OCR Segmenting

* [MS OmniParser (Mar 2025)](https://github.com/microsoft/OmniParser/blob/master/demo.ipynb)
* [Reddit/Aryn.ai](https://www.reddit.com/r/LocalLLaMA/comments/1esb01q/segmentingchunking_pdfs_sharing_our_approach_and/)

## ETL

* [LangChain_Community.document_loaders](https://python.langchain.com/v0.1/docs/modules/data_connection/document_loaders/pdf/#using-unstructured)
* [Unstructured.io](https://docs.unstructured.io/welcome)
* [Haystack](https://github.com/deepset-ai/haystack)
* [NuExtract](https://github.com/mneedham/LearnDataWithMark/tree/main/nuextract-playground)
* [DocETL](https://github.com/ucbepic/docetl)
  * [Analyzing common weaknesses in ICLR 2024 reviews with DocETL (32:11) (29 Oct 2024)](https://www.youtube.com/watch?v=IlgueVqtHGo)
    * [Github](https://github.com/ucbepic/docetl-examples/blob/main/iclr-2024-reviews/review_analysis.yaml)
    * [ChatGPT4](https://chatgpt.com/share/6728d6bb-06b8-800d-a783-82d592888330)
    * poetry run make run-ui-dev
    * http://localhost:3000/playground
    * [](https://github.com/MicrosoftDocs/windows-dev-docs/blob/docs/hub/dev-environment/javascript/nodejs-on-wsl.md)
  * [A conversation geenerator for docetl](https://github.com/PassionFruits-net/docetl-conversation)  * [Arxiv paper](https://arxiv.org/pdf/2410.12189v1)
  * [AI Agents for Smarter Data Input: DocETL (Berkeley) (30:14) (25 Oct 2024)](https://www.youtube.com/watch?v=ImYtIEFWfzg&t=169s)
  
## PDF

* (tested) [Marker (3 Mar 2025) (22.5k)](https://github.com/VikParuchuri/marker)
* [PyMuPDF](https://github.com/pymupdf/PyMuPDF)
* [MinerU](https://github.com/opendatalab/MinerU)
* [H2OGPT](https://github.com/h2oai/h2ogpt)
* [PikePDF](https://github.com/pikepdf/pikepdf)

## MS-WORD

* [python-docx-template](https://github.com/elapouya/python-docx-template/tree/master)
* [Spire.Doc](https://github.com/eiceblue/Spire.Doc-for-Python)

## TRANSFORMATION

* [PyPanDoc](https://github.com/JessicaTegner/pypandoc)
* [PDFtoPNG](https://github.com/vinayak-mehta/pdftopng)

## VERSIONING

* [MS-Word Merging Versions](https://support.microsoft.com/en-us/office/compare-and-merge-two-versions-of-a-document-f5059749-a797-4db7-a8fb-b3b27eb8b87e#:~:text=with%20revision%20marks.-,Compare%20two%20versions%20of%20a%20document,document%2C%20and%20then%20select%20OK.)
* [difflib](https://docs.python.org/3/library/difflib.html))
* [docx-compare](https://github.com/Ignema/docx-compare)
* [python-docx](https://python-docx.readthedocs.io/en/stable/)
* [redlines](https://houfu.github.io/redlines/redlines.html)
* [deepdiff](https://github.com/seperman/deepdiff)
* [diff-match-patch](https://github.com/google/diff-match-patch)

## SPELLING AND GRAMMAR

* [LanguageTool](https://github.com/languagetool-org/languagetool)
* [PyASpeller](https://github.com/oriontvv/pyaspeller)
* [GrammarFormer](https://github.com/PrithivirajDamodaran/Gramformer)

## TEXT PROCESSING

* [SpaCy](https://spacy.io/usage)
* [Unstructured](https://github.com/Unstructured-IO/unstructured)
* [WordLlama](https://github.com/dleemiller/WordLlama/blob/main/tutorials/extract_token_embeddings.md)
* [LlamaParse](https://github.com/run-llama/llama_parse)
  
* [Introducing the Realtime API by OpenAI Speech](https://openai.com/index/introducing-the-realtime-api/)
* ["I want Llama3 to perform 10x with my private knowledge" - Local Agentic RAG w/ llama3 (24:10) (30 Apr 2024)](https://www.youtube.com/watch?v=u5Vcrwpzoz8) 
  
* [FireCrawl](https://www.firecrawl.dev/)
* [Unstructured](https://pypi.org/project/unstructured/)

## Commerical Document Processing

* [Upstage (Vector-based PDF)](https://www.youtube.com/watch?v=Y2gXmCM3NMw)
  * [Hugginface Benchmarks](https://huggingface.co/datasets/upstage/dp-bench)

## DOCUMENT PROCESSING

* [Amazon Textract Python Library](https://docs.aws.amazon.com/textract/latest/dg/what-is.html) (PAID)

## Document Conversions

## Document Manipulation

### MS-Word

## Unstructured Text

* [Extractous (Dec 2024)](https://github.com/yobix-ai/extractous)
* [Unstruct](https://github.com/Zipstack/unstract)

## Commercial ETL

* [sensible](https://www.sensible.so/)
* [aryn.ai](https://console.aryn.ai/)
  
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

* [Apache Airflow](https://github.com/apache/airflow)
* [Apache NiFi](https://github.com/apache/nifi)
* [xPipe](https://github.com/xpipe-io/xpipe)
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

## Tika Ecosystem

Here are some of the most popular open-source or Python applications, frameworks, and library ecosystems built around Apache Tika to enhance information preprocessing, ETL, and multimodal processing:

* tika-python: A Python binding for Apache Tika that allows native integration of Tika's capabilities into Python applications. It provides a simple interface for parsing various file formats and extracting text and metadata[1].
* Apache Nutch: An open-source web crawler that uses Tika for content extraction and analysis, enabling efficient indexing of diverse document types[5].
* Apache Solr: A popular, blazing-fast, open-source enterprise search platform that integrates Tika for document parsing and content extraction[5].
* Elasticsearch: A distributed, RESTful search and analytics engine that can use Tika for document parsing and metadata extraction[5].
* Alfresco: An open-source content management system that leverages Tika for document parsing and metadata extraction[5].
* Sleuth Kit/Autopsy: Digital forensics tools that incorporate Tika for analyzing various file formats during investigations[4].
* tika-server: A RESTful server implementation of Tika that allows for scalable, distributed content extraction[1][5].
* SearchWP: While not open-source, this WordPress plugin demonstrates how Tika can be integrated into existing systems for enhanced document processing and search capabilities[6].
* MinIO: An object storage server compatible with Amazon S3, which can be combined with Tika for efficient document processing and text extraction in AI workflows[3].
* Spring AI: A framework that can incorporate Tika as part of its ETL pipeline, particularly for document reading and preprocessing stages[2].

These tools and frameworks leverage Tika's capabilities to enhance various aspects of information processing:

* Preprocessing: Tika's ability to extract text and metadata from numerous file formats makes it valuable for data preprocessing in machine learning and natural language processing pipelines.
* ETL: Many of these systems use Tika in the extraction phase of ETL processes, particularly when dealing with unstructured data from diverse sources.
* Multimodal Processing: Tika's support for various file types, including text, images, and multimedia, enables these applications to handle multimodal data effectively.

By integrating Tika, these ecosystems provide robust solutions for content analysis, search indexing, and data extraction across a wide range of file formats, making them powerful tools for AI-enabled document processing and information retrieval tasks.

Citations: [1] https://github.com/chrismattmann/tika-python [2] https://stackoverflow.com/questions/56766342/apache-tika-architecture-processing-nodes [3] https://www.reddit.com/r/Python/comments/1aq5v2i/simple_text_extraction_server_with_python_tika/ [4] https://www.youtube.com/watch?v=vRPTPMwI53k [5] https://tika.apache.org [6] https://searchwp.com/documentation/knowledge-base/using-apache-tika-for-document-processing/ [7] https://stackoverflow.com/questions/52738023/how-to-make-api-call-in-python [8] https://tika.apache.org/1.5/api/overview-summary.html
