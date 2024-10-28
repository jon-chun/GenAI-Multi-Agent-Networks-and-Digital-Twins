# AI Cloud Infrastructure

## OVERALL

* [Best GPUs for LLM (19 Aug 2024)](https://medium.com/@kumbhardishant/best-gpus-for-llm-deployment-6a2e8187bfe0)
* [Ollama LLM benchmarks on different GPUs on runpod.io (Sep 2024)](https://www.reddit.com/r/LocalLLaMA/comments/1fe8g8z/ollama_llm_benchmarks_on_different_gpus_on/)
* [Benchmarking LLMs: A Deep Dive into Local Deployment and Performance Optimization (4 Jul 2024)](https://blog.runpod.io/benchmarking-llms-a-deep-dive-into-local-deployment-and-performance-optimization/)
* 

## RUNPOD

* [Runpod.io Console](https://www.runpod.io/console/user/billing)
* [Runpod.io Benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1fe8g8z/ollama_llm_benchmarks_on_different_gpus_on/)
* [Runpod.io Ollama Speedtest](https://github.com/MarkoPekas/runpod-ollama-speedtest-guide)

## LAMBDA

## MASSED COMPUTE

* [Massed Compute Settings](https://vm.massedcompute.com/settings/ssh-key)
  
## GROQ

* [Groq Pricing](https://groq.com/pricing/)
* [Groq Console](https://console.groq.com/settings/billing)
* [Groq Discord](https://discord.com/channels/1207099205563457597/1207719622040879154)
* [Groq Inference Tokenomics: Speed, But At What Cost? (21 Feb 2024)](https://www.semianalysis.com/p/groq-inference-tokenomics-speed-but)

## NVIDIA NIM

* [NVIDIA llama-3.1 70b Instruct](https://build.nvidia.com/meta/llama-3_1-70b-instruct)

## 

## OLLAMA

METHODOLOGY

Two novel aspects of AIStoryScope are the grounding in narrative theory and the quantification of creativity in leading under-parameterized OSS LLMs between 3-7B in size. Incorporating narrative theory as the basis for a multitask benchmark required the following elements discussed below: a novel ground truth dataset on film, an ensemble of leading OSS LLM models, a curated set of complex prompts, and a scalable and automated evaluator based upon current SOTA commercial models.

Runpod.io https://github.com/MarkoPekas/runpod-ollama-speedtest-guide Setup ssh login: https://blog.runpod.io/accessing-a-runpod-pod-via-ssh-username-password/ https://docs.runpod.io/pods/connect-to-a-pod Setup Runpod: A6000 Setup github ssl key (or use http public) Install ollama Where are ollama models stored macOS: ~/.ollama/models. Linux: /usr/share/ollama/.ollama/models. Windows: C:\Users\%username%.ollama\models. systemctl edit ollama.service or vi /etc/systemd/system/ollama.service [Service] Environment="OLLAMA_HOST=0.0.0.0" Environment=”OLLAMA_MODELS=/workspace” Restart and reload config sudo systemctl daemon-reload sudo systemctl restart ollama.service Restart w/o systemctl Pgrep -f ollama Pkill -f ollama Restart Ollama Manually (systemctl often not used in containers) export OLLAMA_HOME=/workspace/.ollama echo 'export OLLAMA_HOME=/workspace/.ollama' >> ~/.bashrc source ~/.bashrc Delete Ollama: https://collabnix.com/how-to-uninstall-ollama/#:~:text=How%20to%20uninstall%20Ollama%201%20Stop%20the%20Ollama,5%20Remove%20Downloaded%20Models%20and%20Ollama%20User%20 ollama ps apt-get remove ollama ollama systemctl stop ollama pkill -f ollama rm -rf ~/.ollama systemctl disable ollama ollama ps rm /etc/systemd/system/ollama.service which ollama rm $(which ollama) ls /usr/share/ollama rm -r /usr/share/ollama ls ~/.ollama userdel ollama sudo groupdel ollama userdel ollama users groupdel -f ollama Setup ollama on another partition https://bbs.archlinux.org/viewtopic.php?id=292487 Ollama serve & Ollama pull (models) (utility3_pull_ollama_models.py) Git clone AIStoryScope Cd AIStoryScope Python -m venv venv Source venv/bin/activate Pip install -r requirements.txt Python utility1_pull_ollama_models.py

Step 1: Generation of Narrative Elements Step1_generate_narrativeslangchain.py: Input:\data\wikifilmsum{small|large}_filtered\ (or all \data\wikifimsum)
Output: \data\step1out_generate_narrative_elements\ TODO Manually filter/copy selected (1980s and 2010s top/bottom 100 films) Input: \data/step1out_generate_narrative_elements\ Output: \data\step1out_generate_filtered\

Step 2: step2_score_openai_api_gpt4o.py into Input: data\step1out_generate_narrative_elements TODO \data\step1out_generate_filtered\ Output: \data\step2out_judge_narrative_elements\ filter/copy selected: