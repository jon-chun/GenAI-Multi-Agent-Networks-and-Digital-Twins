# Week 5: Miniproject #2, Claude Code and Microsoft AI Toolkit

This week we explore Anthropic's new releases of model Sonnet 4.5 and Claude Code 2.0 as well as dig into the details of Microsofts VSCode extension AI Toolkit. Both of these are complimentary and will help us execute on Mini-Project #2: Embeddings Benchmark. Now that you've built a critical mass of knowledge, we'll start using these tools (and possibly more) to live code the main aspects of our class research project.

# ==========[ ArXiv.org Research Paper 5 min Presentation ]==========

## Schedule

| Date   | Name(s)              |
|--------|----------------------|
| 10/8   | Gwen                 |
| 10/15  | Peter                |
| 10/22  | Tiffanie             |
| 10/29  | Anna                 |
| 11/5   | Kirill               |
| 11/12  | Wisdom, Godwin       |
| 11/19  | Ann-Duncan, Adrian   |
| 12/3   | Murathan, Eli        |


# Quiz: Week 6

# Class Social Media Ranking Hack and Free Sub Hack

# Mini-Projects:

## Mini-Project #2: Embedding Research (Upcoming)

(New updates and details coming this week...)

Miniproject #2 will have you create a 3 novel dataset of 100 test sets each (2-3 sentences for similarity classification/ranking along with accompanying explanatory reasoning) across diverse domains. Do not proceed beyond the brainstorming and identification of the top 5 possible domains you could serve as a domain expert as defined below. 

In our next class on Oct 1st, we will coordinate among everyone's lists to optimize the final individual and collective assignments. For now, just read the following descriptions and brainstorm (with AI) at least 5 domain-specific areas where you can contribute special expertise/insights.

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

* [Anthropic’s CEO Predicted AI Would Write 90% of Code by Today. Here’s What Actually Happened (9:55) (28 Aug 2025)](https://www.youtube.com/watch?v=QU4uplCseRQ)
* [Filmmaker Justine Bateman on the A.I. "Actress" Controversy and the Future of Hollywood (8:57) (1 Oct 2025)](https://www.youtube.com/watch?v=iNiBtKHbKKg&list=RDNSiNiBtKHbKKg&start_radio=1)

## AI News/Current Events

* [Introducing Claude Sonnet 4.5 (29 Sep 2025)](https://www.anthropic.com/news/claude-sonnet-4-5)
* [Accenture Makes Room for AI With Thousands of Layoffs by Mallett (29 Sep 2025)](https://tech.co/news/accenture-layoffs-ai-pivot)

## **[ New Technical Assignments ]**

### Vector

* [The Best Embedding Models for Information Retrieval in 2025 by Datastax (20 Aug 2025)](https://www.datastax.com/blog/best-embedding-models-information-retrieval-2025)
* [What is vector embedding? by Bergmann et al./IBM](https://www.ibm.com/think/topics/vector-embedding) (Focus on the sentence embedding SB)

### AI Coding Environments

* [Claude Code vs Windsurf vs OpenAI Codex vs Warp Code vs Cursor vs Trae (15:34) (1 Oct 2025)](https://www.youtube.com/watch?v=NGXXosA9CRo&t=59s)

### Model Context Protocol (MCP)

* [Claude's Model Context Protocol is here... Let's test it (8:07) (Mar 2025)](https://www.youtube.com/watch?v=HyzlYwjoXOQ&t=91s)
* [What is the Model Context Protocol (MCP)?](https://modelcontextprotocol.io/docs/getting-started/intro)

### VSCode Extension: AI Toolkit

* [Microsoft's FREE AI Toolkit Changes Coding Forever (7:06) (19 Sep 2025)](https://www.youtube.com/watch?v=G4ZsoLx5bEU)
* [AI Toolkit for Visual Studio Code](https://code.visualstudio.com/docs/intelligentapps/overview)

### Claude Updates

* [...there's more to Sonnet 4.5 (15:09) (30 Sep 2025)](https://www.youtube.com/watch?v=4-c9bArife4)
* [Introducing Claude Sonnet 4.5 (29 Sep 2025)](https://www.anthropic.com/news/claude-sonnet-4-5)
* [Rebuilding Devin for Claude Sonnet 4.5: Lessons and Challenges (29 Sep 2025)](https://cognition.ai/blog/devin-sonnet-4-5-lessons-and-challenges)
* [Claude Sonnet 4.5 Leaked Prompt](https://github.com/elder-plinius/CL4R1T4S/blob/main/ANTHROPIC/Claude_Sonnet-4.5_Sep-29-2025.txt)

## **[ Coding Exercises / Design ]**

### Agent Design

* [Claude Code 2.0 | On The Edge #3 (7:05) (2 Oct 2025)](https://www.youtube.com/watch?v=NV4uUknDt5g)
* [Claude Code: Best practices for agentic coding (18 Apr 2025)](https://www.anthropic.com/engineering/claude-code-best-practices)

### SDD

* [Claude Code Prompt](https://github.com/elder-plinius/CL4R1T4S/blob/main/ANTHROPIC/Claude_Sonnet-4.5_Sep-29-2025.txt)

    ###INSTRUCTIONS:
    carefully analyze this ###PROMPT and pick out the top 10 interesting, surprising, or otherwise noteworthy aspects of this new leaked system prompt for Claude Sonnet 4.5

* [Chain of Vibes by Hodgson (14 Apr 2025)](https://blog.thepete.net/blog/2025/04/14/chain-of-vibes/?ref=dailydev)

* [Agentic Engineering: Lessons Learned Vol. 1 by Dustin (30 Sep 2025)](https://dev.to/duske/agentic-engineering-lessons-learned-vol-1-jbj)


### DeepLearning.ai

* [DeepLearning.ai: Embedding Models: from Architecture to Implementation](https://learn.deeplearning.ai/courses/embedding-models-from-architecture-to-implementation/lesson/n0bcw/introduction-to-embedding-models)

* (Moved to Week 7)[DeepLearning.ai: Advanced Retrieval for AI with Chroma](https://learn.deeplearning.ai/courses/advanced-retrieval-for-ai/lesson/kb5oj/introduction)

* (Moved to Week 7)[DeepLearning.ai: Claude Code: A Highly Agentic Coding Assistant](https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/lesson/66b35/introduction)

# ==========[ In-Class ]==========

## Follow-ups

### CORRECTIONS:

* Claude Sonnet 4.5: 30hr of continous coding for 11k line 

Email me a link to your github with all your project materials. If you have a private repo/folder, share it with jon-chun (github) and/or jonchun2000@gmail.com (Google).