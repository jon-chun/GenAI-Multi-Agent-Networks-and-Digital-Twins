# Week 8: Advanced RAG and Mini-Project #3

The "Frontiers of AI" are rapidly advancing which makes this class both challenging and interesting as the field of AI changes week to week. In recent months traditional RAG systems have become turn-key while a plethora of new tricks, techniques, and enhancement continue to be push the envelope. This week you'll reserach some of the less common RAG techniques including those that incorporate multimodal data, graph databases, and hierarhical abstractions.

While our group research around Mini-Project #2 Embeddings Benchmark continues to cook, this week we'll also introduce Mini-Project #3 based upon both traditional and graph RAGs. 


# ==========[ ArXiv.org Research Paper 5 min Presentation ]==========

## Schedule

| Date   | Name(s)              |
|--------|----------------------|
| 10/22  | Tiffanie             |
| 10/29  | Anna                 |
| 11/5   | Kirill               |
| 11/12  | Wisdom, Godwin       |
| 11/19  | Ann-Duncan, Adrian   |
| 12/3   | Murathan, Eli        |


# Quiz: Week 8

# Presentation: Tiffanie


## Mini-Project #4: RAG vs GraphRAGs

* **GraphRAG Benchmarks**
  - [(ArXiv) When to use Graphs in RAG: A Comprehensive Benchmark and Analysis for Graph Retrieval-Augmented Generation by Xiang et al. (7 Oct 2025)](https://arxiv.org/abs/2506.05690)
-  [(Github) When to use Graphs in RAG](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark)
  
Skim this GraphRAG Benchmark paper and associated Github repo. Then, according to the the papers, brainstorm 3-5 potential data topics/source that this research paper suggests would most strongly favor GraphRAG vs traditional RAG systems. Be creative and try to identify datasets on topics you could be considered an expert on over which you can do complex or non-obvious reasoning within the confines of this domain.


# ==========[ New Reading Assignments ]==========

## **[ Humanistic Readings ]**

* [What Does AI Think of Star Trek’s Data (& SciFi AI)? (13:09) (5 Oct 2025)](https://www.youtube.com/watch?v=e2P_CLpUXFs)
  
* [Novel Lawsuits Allege AI Chatbots Encouraged Minors’ Suicides, Mental Health Trauma: Considerations for Stakeholders by Epstein, Becker, Green (7 Oct 2025)](https://www.healthlawadvisor.com/novel-lawsuits-allege-ai-chatbots-encouraged-minors-suicides-mental-health-trauma-considerations-for-stakeholders)

## **[AI News/Current Events]**

* [Open Conference of AI Agents for Science 2025: The 1st open conference where AI serves as both primary authors and reviewers of research papers](https://agents4science.stanford.edu/)

## **[ New Technical Assignments ]**

## Spec-Driven Development

### **Greenfield**

* [(Github) Github Spec-Kit (33.7k)](https://github.com/github/spec-kit)
  * [(Blog) Spec-driven development with AI: Get started with a new open source toolkit (2 Sep 2025)](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)

### **Brownfield**

* [GitIngest](https://gitingest.com/)
* [How OpenSpec Compares vs spec-kit, kiro.dev, no-specs](https://github.com/Fission-AI/OpenSpec?tab=readme-ov-file#how-openspec-compares)
* [I Found the Simplest AI Dev Tool Ever (5:19) (8 Oct 2025)](https://www.youtube.com/watch?v=cQv3ocbsKHY)
  - [(Github) Fission-AI/OpenSpec (703)](https://github.com/Fission-AI/OpenSpec)
  - [(Web) OpenSpec.dev](https://openspec.dev/)
  - [(Discord) OpenSpec](https://discord.gg/YctCnvvshC)

### Basic RAG

* [Perplexity Chat (20251014)](https://www.perplexity.ai/search/as-of-oct-2025-search-for-the-34Qcq5UrRSS3EtZ1T7hBmw#0)

### Graph RAG

* NOTE: Practice selective attention and technical skimming of these 3 popular and/or recent graph-related approaches to enhancing RAG. Use AI to analyze and probe these papers to quickly comprehend the contributions of these papers, their performance advantages, limitations, etc.

* **Microsoft Graph RAG**
  - [(Blog) GraphRAG: Unlocking LLM discovery on narrative private data by Larson and Truitt (13 Feb 2024)](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/)
  - [(Github) GraphRag](https://github.com/microsoft/graphrag)

* **Light RAG**
  - [(Github) LightRAG](https://github.com/HKUDS/LightRAG)
  - [(ArXiv) LightRAG: Simple and Fast Retrieval-Augmented Generation by Guo et al. (28 Apr 2025)](https://arxiv.org/abs/2410.05779)
  - 
* **RAG Anything**
  - [(Github) RAG Anything](https://github.com/HKUDS/RAG-Anything)
  - [(ArXiv) RAG-Anything: All-in-One RAG Frameworkby Guo et al. (14 Oct 2025)](https://arxiv.org/abs/2510.12323)

### Advanced RAG

* **HiRAG**
  - [(Github) HiRAG (419)](https://github.com/hhy-huang/HiRAG)
  - [(ArXiv) Retrieval-Augmented Generation with Hierarchical Knowledge by Huang et al. (26 Sep 2025)](https://arxiv.org/abs/2503.10150)


## **[ Coding ]**

### Production Ready RAG

* [Deeplearning.ai: Agentic Knowledge Graph Construction](https://learn.deeplearning.ai/courses/agentic-knowledge-graph-construction/lesson/hhqjv/introduction)

* [Deeplearning.ai: Building and Evaluating Advanced RAG](https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag/lesson/nwy74/introduction)


### Setup and Configuration: Debug Github Spec-Kit installation

* **Debug Installation of Github Spec-Kit w/VSCode + Roo/Kilo**
    To debug this issue, let's break it down based on what Roo Code and Kilo Code are (both are open-source AI-powered coding agent extensions for VS Code that integrate LLMs for tasks like code generation and automation), and how GitHub's Spec Kit works with them. Spec Kit is an open-source CLI toolkit from GitHub for spec-driven development—it helps steer AI agents like Roo or Kilo to build code from detailed specs rather than ad-hoc prompts. The /specify (or /speckit.specify) command is a slash prompt you type into the extension's chat interface to kick off workflows like creating specs.

    The command "not appearing" likely means it's not showing up as an auto-suggested or predefined option in the chat/command list of Roo or Kilo. This is common because, unlike GitHub Copilot (which has built-in slash commands), Roo and Kilo don't always auto-suggest custom ones—they rely on you typing them manually, and the AI model processes them based on context. If it's not working at all, it could be due to incomplete setup, model choice, project init issues, or bugs in the integration (Spec Kit support for Roo/Kilo was added recently and can be finicky with certain models).

    ### Quick Checks Before Fixing
    - Confirm extensions are active: In VS Code, go to the Extensions view (Ctrl+Shift+X), search for "Roo Code" and "Kilo Code", and ensure they're enabled/reloaded. You can't use both simultaneously for Spec Kit—pick one as the active agent.
    - API keys/models: Both extensions require configured LLM providers (e.g., OpenAI, Anthropic, Groq). In Roo/Kilo settings, verify a strong model is selected (e.g., Claude 4.5, GPT-5, or Qwen3-Next-80B—avoid weaker ones like Grok-Coder-Fast-1, as they often fail Spec Kit commands).
    - VS Code restart: Close and reopen VS Code, or reload the window (Ctrl+R).
    - Run `specify check`: In your project terminal, run this to verify tools (git, VS Code, your AI agent). If `specify` isn't recognized, the CLI isn't installed—see below.

    ### Step-by-Step Fix
    1. **Install the Spec Kit CLI (if not done)**:  
      Spec Kit isn't just a GitHub repo clone—it's a CLI tool. If you only cloned github.com/github/spec-kit, that's not enough; install it globally via uv (a fast Python tool manager).  
      - Install uv if needed: Download from https://docs.astral.sh/uv/getting-started/installation (e.g., via curl on macOS/Linux: `curl -LsSf https://astral.sh/uv/install.sh | sh`).  
      - Install Spec Kit:  
        ```
        uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
        ```  
        (This adds `specify` to your PATH. If uv complains about Python, ensure Python 3.12+ is installed.)  
      - Verify: Run `specify --help`. If it works, proceed.

    2. **Initialize Your Project with Spec Kit**:  
      Navigate to your project folder in the terminal (cd /path/to/your/project). Spec Kit needs to bootstrap files like .specify/ (with templates, scripts, and memory). Choose one agent—Roo or Kilo—for init (you can switch later by re-initing).  
      - For Roo Code:  
        ```
        specify init . --ai roo --force --script sh  # Use --script ps on Windows for PowerShell
        ```  
      - For Kilo Code:  
        ```
        specify init . --ai kilocode --force --script sh
        ```  
        - `--force`: Overwrites if needed (safe if you're in an existing project).  
        - `--here` or `.`: Inits in current dir without creating a subfolder.  
        - `--debug`: Add this for verbose output if it fails.  
        - If git issues: Add `--no-git`. If agent tool check fails: Add `--ignore-agent-tools`.  
      - This creates a .specify/ folder with specs, scripts, etc., and sets up for your chosen agent. Run `specify check` again to confirm.

    3. **Use the Command in the Chat**:  
      Open your project in VS Code. Activate the extension's chat:  
      - For Roo Code: Open the Roo sidebar/chat (usually via Cmd+Shift+R or the icon), or use its command palette entry.  
      - For Kilo Code: Open the Kilo chat (Cmd+Shift+K or sidebar icon).  
      Type the command manually (it may not auto-suggest—that's normal):  
      - Try `/speckit.specify <your description>`, e.g., `/speckit.specify Build a simple todo app with user auth.`  
        (This creates a spec.md file and branch.)  
      - Some docs shorthand it as `/specify <description>`, but for Roo/Kilo, use the full `/speckit.specify` to match their integration.  
      - If it processes (AI responds and generates files), great! Follow up with `/speckit.clarify` (refine spec), `/speckit.plan` (tech plan), `/speckit.tasks` (breakdown), `/speckit.implement` (code gen).  
      - Monitor token usage—commands like this can burn 100k+ tokens on complex models; start simple.

    4. **If It Still Doesn't Work**:  
      - **Model issues**: Switch to a recommended strong model in extension settings (e.g., Claude 4.5 or GPT-5). Weaker ones often ignore/misparse Spec Kit prompts or modify wrong files (e.g., templates instead of constitution.md).  
      - **Context loss**: AI agents can "forget" after restarts. Re-prompt with "@workspace /speckit.specify ..." or reload the extension.  
      - **Branch check**: Spec Kit requires a feature branch (e.g., git checkout -b 001-my-feature). Commands fail on main/master.  
      - **Re-init**: Run `specify init . --force --ai <your-agent> --debug` again.  
      - **Logs/errors**: Check VS Code output (View > Output > select Roo/Kilo from dropdown) for errors. Paste any into the chat for the AI to debug.  
      - **Known bugs**: Roo/Kilo integration is newish—commands can fail with high token use or wrong file edits (e.g., templates changed accidentally). If so, manually revert via git and try a different model. Open an issue at github.com/github/spec-kit if persistent.  
      - **Fallback**: If slash commands flake out, manually prompt the AI with Spec Kit context, e.g., "Using Spec Kit workflow: Create a constitution based on [paste principles]."

    If this doesn't resolve it, provide more details like error messages, your OS, exact model used, or `specify check` output for further troubleshooting. Once set up, Spec Kit with Roo/Kilo can streamline your workflow significantly!




