# Reinforcment Learning

* [OpenManus-RL](https://github.com/OpenManus/OpenManus-RL)

## Commercial RL Tunining

* [Augento.ai](https://augento.ai/)
* [FireWorks.ai](https://fireworks.ai/blog/fine-tuning-deepseek-models)


Here is a detailed summary of the Hacker News thread discussing Augento, including all supporting facts, names, libraries, technologies, and URLs mentioned in the provided context:

URL: Hacker News Thread Date of Summary: Monday, April 7, 2025 Context: Discussion within the US-centric tech community about a new platform for AI agent fine-tuning.

Core Topic: The thread introduces and discusses Augento (https://augento.ai/), a new platform designed to enable users to fine-tune open-source Large Language Models (LLMs) specifically for building AI agents using Reinforcement Learning (RL).

Augento's Proposition:

Problem Solved: Addresses the common challenge where general-purpose LLMs or agents fine-tuned with Supervised Fine-Tuning (SFT) fail in specific, practical applications. Augento aims to optimize agent performance for particular tasks through RL.
Methodology: Users provide a reward function – essentially judging the quality of the agent's outputs for a given task – which guides the RL training process. This is presented as potentially easier for users than curating large SFT datasets or building the complex RL training infrastructure themselves. Defining this reward function is noted as the "tricky part."
Platform: Offers a self-service platform (https://augento.ai/dashboard) with documentation (https://docs.augento.ai/) and provides $20 in initial training credits for new users. The platform itself is closed-source, but operates on open-source LLMs.
Supported Models: Works with open-source models such as Qwen, Llama, Deepseek.
Use Cases Mentioned:

Coding agents
Specializing tools compatible with the Model Context Protocol (MCP)
Browser agent navigation tasks
Vision Language Agent (VLA) control for robotics
Technical & Implementation Details:

RL Infrastructure: Augento provides the infrastructure for RL fine-tuning, abstracting the complexity away from the user (value proposition highlighted).
Inference Hosting: Offers optimized inference for the fine-tuned models with claimed sub-second cold-start times, achieved by keeping base models in VRAM and swapping fine-tuned weight deltas.
Pricing: Utilizes a monthly flat fee combined with usage-based costs for training and inference. Example inference pricing mentioned: ~$0.5/M input tokens and ~$2.5/M output tokens.
UI & Observability: The platform's UI for managing the RL process and observing training is considered a key value-add.
Development Time: Claimed that the production-ready platform was built in 3-4 weeks.
Libraries Mentioned:
JSONata (https://jsonata.org): Potentially used within the platform for data transformation or reward function logic.
Torchtune (https://github.com/pytorch/torchtune): Likely used or relevant to the underlying PyTorch-based fine-tuning pipeline.
Key Arguments & Opinions from the Discussion:

Need for RL Platforms: Agreement that defining a value/reward function is often more feasible for users than building the necessary RL infrastructure from scratch.
RL Effectiveness Debate: Skepticism exists on whether RL fine-tuning on current models can consistently outpace the rapid improvements occurring in next-generation foundation models themselves.
Generic vs. Bespoke: The inherent challenge of creating a generic platform suitable for a wide array of RL fine-tuning tasks is acknowledged, contrasting it with building tailored solutions for specific problems.
Feasibility/Claims: Some users found the concept interesting, while others expressed skepticism ("unrealistic!") about potential claims regarding significant performance improvements from very small numbers of training samples (e.g., 20).
Comparisons:

vs. OpenAI: Positioned as an alternative or competitor to OpenAI's own RL fine-tuning capabilities (which may be less accessible or flexible).
vs. SFT: Explicitly contrasted with Supervised Fine-Tuning approaches (links provided to SFT fine-tuning examples on other platforms like Fireworks AI: https://fireworks.ai/blog/fine-tuning-deepseek-models and AWS: https://aws.amazon.com/blogs/machine-learning/customize-deep...).
vs. Proprietary Models: Inference costs are compared to those of major models like GPT-4o and Claude 3.5.
Names Mentioned (selection): lmeierhoefer (likely affiliated with Augento), Zollerboy1, spmurrayzzz, _ink_, lukasego, resiros, HyprMusic, jacobross, tptacek, dang (HN moderator).

Other URLs Mentioned:

YouTube Link: https://www.youtube.com/watch?v=j5RQaTdRrKE (Context unclear)
arXiv Paper: https://arxiv.org/abs/2410.02743 (Likely related research)
RunPod: https://www.runpod.io (Cloud GPU provider, possible infrastructure component)
The thread provides insights into a specific startup (Augento) attempting to productize RL fine-tuning for LLM agents, highlighting the technical approach, market positioning, and the surrounding community debate (as of April 2025) about the efficacy and practicality of RL compared to other methods like SFT or relying on foundation model scaling.