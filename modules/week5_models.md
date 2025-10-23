# Week 5: LangChain and Models

This week we build upon last weeks introduction to embeddings. We extend and embed our embedding knowledge by contextualizing them within both the practical industry domain of benchmarks as well as the theoretical domain of AI research. Along the way, we further develop our understanding of agentic frameworks using LangChain in our coding exercises.

# ==========[ Mini-Project #1 Custom Chatbot (Due This Sunday, Aug 28, 2025 @midnight) ]==========

Email me a link to your github or GDrive folder with all your project materials. If you have a private repo/folder, share it with jon-chun (github) and/or jonchun2000@gmail.com (Google).

# ==========[ ArXiv.org Research Paper 5 min Presentation ]==========

## Schedule

| Date   | Name(s)              |
|--------|----------------------|
| 10/1   | Abhigya              |
| 10/8   | Gwen                 |
| 10/15  | Peter                |
| 10/22  | Tiffanie             |
| 10/29  | Anna                 |
| 11/5   | Kirill               |
| 11/12  | Wisdom, Godwin       |
| 11/19  | Ann-Duncan, Adrian   |


# Quiz: Week 5

# Mini-Projects:

## Mini-Project #1: Chatbot (Due this Sunday, Sep 28th at midnight)

* [MP#1 Chatbot Instructions](https://github.com/jon-chun/GenAI-Multi-Agent-Networks-and-Digital-Twins/blob/main/modules/miniproject1_instructions_persona-chatbot-and-benchmark.md)

## Mini-Project #2: Embedding Research (Upcoming)

Miniproject #2 will have you create a 3 novel dataset of 100 test sets each (2-3 sentences for similarity classification/ranking along with accompanying explanatory reasoning) across diverse domains. Do not proceed beyond the brainstorming and identification of the top 5 possible domains you could serve as a domain expert as defined below. In our next class on Oct 1st, we will coordinate among everyone's lists to optimize the final individual and collective assignments. For now, just read the following descriptions and brainstorm (with AI) at least 5 domain-specific areas where you can contribute special expertise/insights.

1) Pick 5 candidate domains now; we’ll choose your best 3
---------------------------------------------------------

Bring **five** domain ideas to class; we will select **three** for you to actually build.  
**Functional definition of domain expertise (flexible, human-centric):** you can reliably spot **edge cases** and **rank similarity** of domain texts **better than most people** because of your background (major, language/culture, work, clubs, lived experience, community ties, etc.). You don’t need formal credentials.

**Examples to spark ideas (non-exhaustive)**

*   Academic genres (methods sections, critique notes, problem-set solutions)
*   Bureaucratic language (visa instructions, campus policy, financial-aid emails)
*   Niche hobbies/subcultures (climbing trip reports, K-pop fan posts, tabletop RPG rules clarifications)
*   Technical writing (lab safety notes, API docs snippets, commit messages)
*   Creative forms (poetry lines, workshop feedback, indie music reviews)
*   Health/fitness (training logs, diet tips, PT exercise instructions)
*   Multilingual/dialectal (code-switching chat, regional idioms, transliterated content)
*   Journalism/register shifts (wire headlines vs. feature ledes)
*   Civic/legal plain-language explanations (de-identified)

We’ll coordinate across the class to avoid redundancy and to maximize coverage.


2) What “similar” vs. “different” means (use these axes creatively)
-------------------------------------------------------------------

You’ll **label pairs** and **label triplet sentences relative to an anchor**. Drop the fuzzy _neutral_ category.

Think in **dimensions**; use them to invent **edge cases**:

*   **Semantic**: same meaning despite wording changes (true paraphrase) vs. opposite/irrelevant meanings.
    *   _Trick:_ negation (“must” vs. “must not”), quantifiers (“some” vs. “all”).
*   **Topical**: same subject but different **claim** or **stance** is often **different** semantically (topic ≠ meaning).
*   **Lexical**: shared keywords but divergent meaning (false friends, polysemy) vs. low overlap but same meaning (deep paraphrase).
*   **Stylistic/Register**: formal vs. informal; academic vs. chatty; sarcasm/irony. Style can mask or mimic semantics.
*   **Pragmatic/Contextual**: implied intents, politeness strategies, presuppositions.
*   **World knowledge**: allusions, culture-specific references, inside jokes.
*   **Temporal/Numerical/Logical**: tense shifts, date/price/unit changes; conditionals versus factual statements.

**Goal:** at least half of your hard items should hinge on **subtle distinctions** that confuse non-experts and today’s AIs.


# ==========[ New Reading Assignments ]==========

## **[ Humanistic Readings ]**


## AI News/Current Events

* [How AI WIPES Out Capitalism Emad Mostaque (21:12) (21 Sep 2025)](https://www.youtube.com/watch?v=vfhszRuMA8Y)
* [5000 Agent Teams at Citi (9:15) (25 Sep 2025)](https://www.youtube.com/watch?v=1yu2n426Iig)

## **[ New Technical Assignments ]**

### AI Research Papers

* [Writing a (Computer Science) Paper by Bardman (2007)](https://www.bardram.net/wp-content/uploads/2017/12/Writing.Paper_.pdf)
* [Writing AI Conference Papers: A Handbook for Beginners](https://github.com/hzwer/WritingAIPaper)

### Embedding Benchmarks and Leaderboards

* [(Use AI ~15min) MTEB: Massive Text Embedding Benchmark by Muennighoff et al. (13 Oct 2022)](https://arxiv.org/pdf/2210.07316)
* [(Use AI ~10min) MMTEB: Massive Multilingual Text Embedding Benchmark by Enevoldsen et al. (19 Feb 2025)](https://arxiv.org/pdf/2502.13595)

### Models

* [Qwen3-Omni3-30B-A3B-Instruct](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct)

### AI Code Prompts

* [GPT-5-Codex Prompting Guide by Leo](https://cookbook.openai.com/examples/gpt-5-codex_prompting_guide)
* [The Ultimate Vibe Coding Guide by PhraseProfessional54 (Apr 2025)](https://www.reddit.com/r/ClaudeAI/comments/1kivv0w/the_ultimate_vibe_coding_guide/)

### Coding: Claude Code
 
* [Full Tutorial: 20 Tips to Master Claude Code in 35 Minutes (Build a Real App) (35:03) (24 Sep 2025)](https://www.youtube.com/watch?v=jWlAvdR8HG0)
  - [Blog](https://creatoreconomy.so/p/20-tips-to-master-claude-code-in-35-min-build-an-app)
  - [Repo chunj](https://github.com/jon-chun/ai-conferences-and-events)

        Goal: Build a family activity finder while covering 20 tips to master Claude Code and tool

        **Planning and project setup**
        1. Use plan motte before coding
        2. Ask Claude to explore solutions with you
        3. Follow the spec → to do → code process
        4. Use output styles to learn while building
        5. Use Claude.md to bootstrap project understanding
        6. Use Claude.md to add your personal preferences

        **Core coding workflows**
        7. Use voice to give Claude context fast
        8. Get your app running as soon as possible
        9. Press Escape if Claude to safely stop and redirect Claude
        10. Add version control with Github integration
        11. Set up permissions to let Claude work more autonomously
        12. Follow spec → to do → code with each milestone
        13. Clear context strategically with /clear and /compact

        **Debugging issues**
        14. Ask Claude to "think ultra hard" or "why do you think this happened" to debug gnarly bugs
        15. Give specific feedback, attach images, and browser console logs to help Claude debug issues

        **Slash commands, sub-agents, and hooks**
        16. Create custom slash commands for repeated workflows
        17. Build specialized subagents for focused work
        18. Set up hooks to trigger specific behavior

        **MCP servers and parallel Claude agents**
        19. Install MCP servers for specialized capabilities
        20. Run multiple Claude sessions in parallel for faster development

### Coding Exercises

* [Deeplearning.ai: LangChain for LLM Application Development](https://learn.deeplearning.ai/courses/langchain/lesson/u9olq/introduction)

* [Deeplearning.ai: LangChain Chat with Your Data](https://learn.deeplearning.ai/courses/langchain-chat-with-your-data/lesson/snupv/introduction)
