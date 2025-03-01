# AI Evaluations


## Dataset Annotation

## LLM as Judge

* [Google](https://www.google.com/search?q=site%3Agithub.com+llm+as+judge&sca_esv=e095c950f9c2c4db&sxsrf=ADLYWILiG_M40r-I_gDfMElbdOz_y_iXXA%3A1734014760807&source=hp&ei=KPdaZ-eBL92A5OMPvpS5yAk&iflsig=AL9hbdgAAAAAZ1sFOGitZ-RYX0pnMZ7PriBoHMaZnFYf&ved=0ahUKEwjnteeuvKKKAxVdAHkGHT5KDpkQ4dUDCBo&uact=5&oq=site%3Agithub.com+llm+as+judge&gs_lp=Egdnd3Mtd2l6IhxzaXRlOmdpdGh1Yi5jb20gbGxtIGFzIGp1ZGdlSOwvUABYgS5wAHgAkAEAmAG2AaAB5xOqAQQyMi42uAEDyAEA-AEBmAIFoALYBsICBBAjGCfCAgsQABiABBiRAhiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgIFEAAYgATCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGMkDwgIOEC4YgAQYsQMY0QMYxwHCAg4QABiABBixAxiDARiKBcICCxAuGIAEGMcBGK8BmAMAkgcDMC41oAeGQw&sclient=gws-wiz)

## Awesome LLMs as Judges

* [Awesome-LLMs-as-Judges](https://github.com/CSHaitao/Awesome-LLMs-as-Judges)
  * [LLMs-as-Judges -- A Comprehensive Survey on LLM-based Evaluation Methods HaitaoLi_TsinghuaU 20241210_arxiv](https://arxiv.org/pdf/2412.05579)
* [Awesome LLM-as-a-Judge](https://github.com/IDEA-FinAI/LLM-as-a-Judge)
  * [A Survey on LLM-as-a-Judge](https://arxiv.org/pdf/2411.15594)

## Research 

* [Can LLM be a Personalized Judge? by Dong et al. (12 Nov 2024)](https://aclanthology.org/2024.findings-emnlp.592.pdf)

## Open-Source LLM Evaluation Libraries

# LLM Evaluation Libraries FAQ

## What are some popular open-source LLM evaluation libraries?

- [lm-eval-harness](https://github.com/EleutherAI/lm-evaluation-harness)
- [PromptBench](https://github.com/microsoft/promptbench)
- [DeepEval](https://github.com/confident-ai/deepeval)
- [MLflow LLM Evaluate](https://mlflow.org/docs/latest/llms/llm-evaluate/index.html)
- [OpenAI Evals](https://github.com/openai/evals)
- [OpenRouter.ai](https://openrouter.ai/rankings)
- [Llama Benchmarks](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md)

## What features does lm-eval-harness offer?

- Over 200 benchmarks
- Easy extensibility
- Used for new LLM evaluation scores
- Powers Hugging Face's Open LLM Leaderboard

[Source](https://www.restack.io/p/ai-model-evaluation-answer-python-libraries-llm-evaluation-cat-ai)

## What capabilities does PromptBench provide?

- Prompt construction and engineering tools
- Dataset and model loading
- Adversarial prompt attack functionality
- Dynamic evaluation protocols
- Analysis tools

[Source](https://www.jmlr.org/papers/v25/24-0023.html)

## What are the key features of DeepEval?

- 14+ evaluation metrics for RAG and fine-tuning
- Metrics include G-Eval, Hallucination, Faithfulness, and more
- pytest integration
- Real-time production evaluations

[Source](https://dev.to/guybuildingai/-top-5-open-source-llm-evaluation-frameworks-in-2024-98m)

## What does MLflow LLM Evaluate offer?

- Modular package for custom evaluation pipelines
- RAG and question-answering evaluation support
- User-friendly developer experience

[Source](https://www.restack.io/p/ai-model-evaluation-answer-python-libraries-llm-evaluation-cat-ai)

## Are there other notable evaluation options?

- [LangChain](https://python.langchain.com/docs/guides/evaluation/)
- [Promptfoo](https://github.com/promptfoo/promptfoo)
- [Arize AI Phoenix](https://github.com/Arize-ai/phoenix)

## What factors should be considered when choosing an evaluation library?

- Specific metrics needed
- Integration ease
- LLM-as-judge evaluation support
- Scalability requirements
- Visualization and reporting capabilities

[Source](https://www.superannotate.com/blog/llm-evaluation-guide)

## Can these libraries be customized?

Most libraries allow for customization to implement specific evaluation methods.

## How current is the field of LLM evaluation?

The field is rapidly evolving. It's recommended to check for the latest updates and community contributions for each tool.

[Source](https://www.evidentlyai.com/blog/open-source-llm-evaluation)

# NOTES:

1. **DeepEval**
DeepEval is a comprehensive evaluation framework for LLMs that offers over 14 evaluation metrics for both retrieval-augmented generation (RAG) and fine-tuning use cases[5]. It includes metrics like:
- G-Eval
- Hallucination
- Faithfulness
- Contextual Relevancy
- Answer Relevancy
- RAGAS
- Bias
- Toxicity

DeepEval allows for real-time evaluations in production and integrates with pytest for easy testing[5].

2. **MLflow LLM Evaluate**
MLflow provides a modular package for running evaluations in custom pipelines. It supports RAG evaluation and question-answering evaluation with an intuitive developer experience[5].

3. **Promptfoo**
Promptfoo is an open-source tool for testing and evaluating LLM outputs across different models and parameter combinations[6].

4. **LangChain**
While primarily known for building LLM applications, LangChain also includes evaluation tools that can be used to assess model performance[3].

5. **lm-eval-harness**
This library contains over 200 benchmarks and is easily extendable. It has been used to generate evaluation scores for new LLMs and powers platforms like Hugging Face's Open LLM Leaderboard[3].

6. **PromptBench**
PromptBench is a unified library for evaluating LLMs, offering components for prompt construction, prompt engineering, dataset and model loading, adversarial prompt attack, dynamic evaluation protocols, and analysis tools[4].

7. **Arize AI Phoenix**
While more limited in scope, Arize AI Phoenix offers evaluation criteria for QA correctness, hallucination, and toxicity[5].

8. **OpenAI Evals**
OpenAI's open-source framework for evaluating LLMs, which can be adapted for various evaluation tasks[5].

## Commercial Options with Open-Source Components

1. **TruLens**
TruLens, while having commercial offerings, also provides open-source components. It focuses on transparency and interpretability in LLM evaluation[7].

2. **Deepchecks**
Deepchecks offers both open-source and commercial versions, focusing on evaluating the LLM itself rather than LLM applications. It provides extensive dashboards and visualization UI for evaluation results[5].

When choosing an evaluation library, consider factors such as:
- The specific metrics you need
- Ease of integration with your existing workflow
- Support for LLM-as-judge evaluations
- Scalability requirements
- Visualization and reporting capabilities

Many of these libraries allow for customization, so you can implement LLM-as-judge evaluations even if they're not provided out-of-the-box. Additionally, the field of LLM evaluation is rapidly evolving, so it's worth checking the latest updates and community contributions for each of these tools.

Citations:
[1] https://www.deepchecks.com/best-llm-evaluation-tools/
[2] https://github.com/Praveengovianalytics/falcon-evaluate
[3] https://www.restack.io/p/ai-model-evaluation-answer-python-libraries-llm-evaluation-cat-ai
[4] https://www.jmlr.org/papers/v25/24-0023.html
[5] https://dev.to/guybuildingai/-top-5-open-source-llm-evaluation-frameworks-in-2024-98m
[6] https://www.reddit.com/r/LocalLLaMA/comments/1cecoja/easy_llm_evaluation_library/
[7] https://www.superannotate.com/blog/llm-evaluation-guide
[8] https://truera.com/llm-evaluation-and-llm-observability-at-enterprise-scale-for-effective-llm-ops/

While Falcon Evaluate is not a widely known open-source library for LLM evaluation, there are several other open-source libraries and frameworks that serve similar purposes for evaluating large language models. Here are some notable options:

## Popular Open-Source LLM Evaluation Libraries

### 1. lm-eval-harness

This is one of the most comprehensive and widely used open-source libraries for LLM evaluation[1]. Key features include:

- Contains over 200 benchmarks
- Easily extendable
- Used to generate evaluation scores for new LLMs
- Powers platforms like Hugging Face's Open LLM Leaderboard

### 2. PromptBench

PromptBench is a unified library specifically designed for evaluating LLMs[2]. It offers:

- Prompt construction and engineering tools
- Dataset and model loading capabilities
- Adversarial prompt attack functionality
- Dynamic evaluation protocols
- Analysis tools

The library aims to facilitate research in creating new benchmarks, deploying downstream applications, and designing new evaluation protocols.

### 3. DeepEval

DeepEval is a comprehensive evaluation framework that provides[4]:

- Over 14 evaluation metrics for both retrieval-augmented generation (RAG) and fine-tuning use cases
- Metrics like G-Eval, Hallucination, Faithfulness, Contextual Relevancy, Answer Relevancy, RAGAS, Bias, and Toxicity
- Integration with pytest for easy testing
- Real-time evaluations in production environments

### 4. MLflow LLM Evaluate

MLflow, while known for experiment tracking, also offers LLM evaluation capabilities[1]:

- Modular package for running evaluations in custom pipelines
- Support for RAG evaluation and question-answering evaluation
- Intuitive developer experience

### 5. OpenAI Evals

OpenAI's open-source framework for evaluating LLMs can be adapted for various evaluation tasks[4].

## Other Notable Options

- **LangChain**: While primarily for building LLM applications, it includes evaluation tools[1].
- **Promptfoo**: An open-source tool for testing and evaluating LLM outputs across different models and parameter combinations[4].
- **Arize AI Phoenix**: Offers evaluation criteria for QA correctness, hallucination, and toxicity, though more limited in scope[4].

When choosing an evaluation library, consider factors such as:
- Specific metrics needed for your use case
- Ease of integration with your existing workflow
- Support for LLM-as-judge evaluations
- Scalability requirements
- Visualization and reporting capabilities

Many of these libraries allow for customization, so you can implement specific evaluation methods even if they're not provided out-of-the-box. The field of LLM evaluation is rapidly evolving, so it's worth checking the latest updates and community contributions for each of these tools.

Citations:
[1] https://www.restack.io/p/ai-model-evaluation-answer-python-libraries-llm-evaluation-cat-ai
[2] https://www.jmlr.org/papers/v25/24-0023.html
[3] https://www.evidentlyai.com/blog/open-source-llm-evaluation
[4] https://dev.to/guybuildingai/-top-5-open-source-llm-evaluation-frameworks-in-2024-98m
[5] https://www.superannotate.com/blog/llm-evaluation-guide