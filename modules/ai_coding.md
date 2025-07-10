# AI Coding - Human-AI Collaboration Workflow

## Setup

* [VSCode + ClaudeDev + Aider + Supermaven : STOP PAYING for CURSOR with this ULTIMATE Alternative (12:32) (2 Oct 2024)](https://www.youtube.com/watch?v=zLQuBSuzu2w&t=605s)
* [Qwen2.5-1M: Deploy your own Qwen with context length up to 1M tokens (28 Jan 2025)](https://news.ycombinator.com/item?id=42831769) HNews setup and strategies

## Vibe Coding

* [Awesome Vibe Coding (filipecalegario)](https://github.com/filipecalegario/awesome-vibe-coding)

## Context Coding

* [Awesome Context Engineering](https://github.com/coleam00/context-engineering-intro)

## Agentic Coding

* [Claude Code: Best practices for agentic coding (18 Apr 2025)](https://www.anthropic.com/engineering/claude-code-best-practices)


## Github + Claude Code CLI: Plan, Create, Test, Deploy

* [Mastering Claude Code in 30 minutes (28:00) (Jun 2025)](https://www.youtube.com/watch?v=6eBSHbLKuN0)

* [Anthropic Build with Claude](https://docs.anthropic.com/en/docs/build-with-claude/)
* [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/)

* [Master Claude Code — Full Beginner's Guide to Every Command (35:47) (21 Jun 2025)](https://www.youtube.com/watch?v=Cxd4b5JYqKE)

* [Claude Code - 47 PRO TIPS in 9 minutes (9:18) (22 May 2025)](https://www.youtube.com/watch?v=TiNpzxoBPz0)
  1. Use CC as a Bash CLI
  2. Pass command line args to CC
  3. `claude -p` for headless mode
  4. Chain CC with other CLIs
  5. Pipe data into CC
  6. Run multiple instances in parallel
  7. Ask CC to run subagents
  8. Drag images into CC
  9. Copy and paste images
  10. Give CC mockups
  11. Use screenshots as feedback
  12. Automate feedback with Puppeteer
  13. Use CC as an MCP **server**
  14. Use CC as an MCP **client**
  15. Connect your DB with MCP
  16. Connect APIs with MCP
  17. Import Docs with MCP
  19. Import misc knowledge with URLs
  20. use CLAUDE.md files (injected before each turn so keep clean/concise)
  21. /init creates CLAUDE.md (after scanning dir and summarizing)
  22. `#` adds to CLAUDE.md
  23. ~/.claude/CLAUDE.md - Global
  24. Use CLAUDE.md in subdirs (e.g. tests)
  25. Refactor CLAUDE.md files often
  26. Use [Anthropic's prompt improver](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-improver)
  27. slash commands > .claude/commands/[issue.md](https://www.anthropic.com/engineering/claude-code-best-practices) 
  28. use args with slash commands
  29. tabs to autocomplete filenames
  30. ESC early and often (if going off track)
  31. ask CC to undo
  32. have CC use version control
  33. have CC commit often (to enable granular rollbacks)
  34. have CC write your commit messages
  35. revert more often
  36. install the github CLI gh
  37. or use Github via MCP
  38. ask CC to file PR
  39. ask CC to do code review of PR
  40. be aware of upcoming auto compact (watch %context filled)
  41. proactively compact at checkpoints
  42. consider /clear vs /compact
  43. plan work using (a) scratch pads 
  44. plan work using (b) GH issues
  45. smaller context > lower costs (use ext memory as much as possible)
  46. use [open telemetry support](https://docs.anthropic.com/en/docs/claude-code/monitoring-usage) see [Martin Amps CC-OpenTele  Datadog Blog](https://ma.rtin.so/posts/monitoring-claude-code-with-datadog/)
  47. Upgrade to Claude Max
* [The Claude Code & GitHub WORKFLOW to Build Complex Apps (18:40) (26 Jun 2025)](https://www.youtube.com/watch?v=FjHtZnjNEBU)
* [My AI Skeptic Friends Are All Nuts](https://fly.io/blog/youre-all-nuts/)
  * [hnews thread (3 Jun 2025)](https://news.ycombinator.com/item?id=44163063)
* [Github Flow](https://docs.github.com/en/get-started/using-github/github-flow)
* [Claude Code: Best practices for agentic coding (18 Apr 2025)](https://www.anthropic.com/engineering/claude-code-best-practices)
* [Install Github gh (pref over Github API or MCP)](https://cli.github.com/)
* [Install Puppeteer for testing UI](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer)
* [Custom Claude Code CMDs in ./.claude/commands]()
* [/init to initialize new claude.md scratch pad memory]()
* [/clear to start afresh]()
* [Setup Testing Framework and CI Pipeline]()
* [Claude Code + Github Actions, Beta+$$$ (June 2025)](https://docs.anthropic.com/en/docs/claude-code/github-actions)
* [Github worktress for isolation/parallel Claude Code/feature checkout]()
* [Deploy using Render sync'ed with Github](https://render.com/)


Please analyze and fix the GitHub issue: $ARGUMENTS.

Follow these steps:

# PLAN
* Use 'gh issue view' to get the issue details
* Understand the problem described in the issue
* Ask clarifying questions if necessary
* Understand the prior art for this issue
* Search the scratchpads for previous thoughts related to the issue
* Search PRs to see if you can find history on this issue
* Search the codebase for relevant files
* Think harder about how to break the issue down into a series of small,
manageable tasks.
* Document your plan in a new scratchpad
* include the issue name in the filename
* include a link to the issue in the scratchpad.

# CREATE
- Create a new branch for the issue
- Solve the issue in small, manageable steps, according to your plan
- Commit your changes after each step

# TEST
- Use puppeteer via MCP to test the changes if you have made changes to the UI
- Write rspec tests to describe the expected behavior of your code
- Run the full test suite to ensure you haven't broken anything
- If the tests are failing, fix them
- Ensure that all tests are passing before moving on to the next step

# DEPLOY
- Open a PR and request a review

Remember to use the Github CLI (`gh`) for all Github-related tasks

## Google Gemini CLI and Gemini Code Assist (Agent)

* [Announcement Blog Post (25 June 2025)](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)

* [Gemini CLI](https://github.com/google-gemini/gemini-cli)
* [Gemini Code Assist (Agent)](https://codeassist.google/)

## Jupyter Colab Notebooks

* [An overview of marimo (6:23) (11 Mar 2024)](https://www.youtube.com/watch?v=3N6lInzq5MI)
* [Google colab.research.google.com](https://colab.research.google.com)
* [Medium Colab: Experiment, Iterate, Collaborate](https://medium.com/google-colab)
  
## Replit

* [Teaching Agents to Code: Bleeding-Edge AI at Replit (55:51) (28 Oct 2024)](https://www.youtube.com/watch?v=vw727qcskUQ)

## Cursor

* [bolt (9:19) (5 Oct 2024)](https://www.youtube.com/watch?v=pw-XCRa-FOI)
* [Cursor AI tutorial for beginners (40:34) (13 Sep 2024)](https://www.youtube.com/watch?v=gqUQbjsYZLQ&t=19s)
  * [V0.dev](https://v0.dev/chat)
  * [Cursor Directory of Prompts](https://www.cursordirectory.com/)

## Bold and Derivatives

* [Bold.div](https://github.com/stackblitz-labs/bolt.diy)

## Repos

* [Continue.Dev](https://hub.continue.dev/explore/assistants)
* [o1-eng](https://github.com/Doriandarko/o1-engineer/blob/main/o1-eng.py)
* []()

## Claude Code

* Cursor with Claude Code [The Case for Claude Code (26:46) (23 Jun 2025)](https://www.youtube.com/watch?v=aHTXccrfXC8)

## Gemini CLI


## Trae-Agent

* [Bytedance Trae-CLI](https://github.com/bytedance/trae-agent)

## Coding Copilots

* [Google Jules](https://jules.google/)
* [Full Stack App Build Claude 3.7 & Cursor AI (25:30) (25 Feb 2025)](https://www.youtube.com/watch?v=k0kBylMwlbA)
* [Goose](https://github.com/block/goose)
* [Potpie](https://github.com/potpie-ai/potpie?ref=dailydev)
* Aider
  * [Aider (Upgraded) : This Coding Agent just got AMAZING with DeepSeek-V2.5 Support, Caching & More! (8:50) (11 Sep 2024)](https://www.youtube.com/watch?v=s0nzjuJeibQ)
  * Free: Google/Remote, Supermaven/Local autocomplete
    * [VSCode + Aider + Supermaven : STOP PAYING for CURSOR with this 100% FREE & Opensource Alternative (10:56) (9 Sep 2024)](https://www.youtube.com/watch?v=XkDSQq0fwfU)
  * SambaNova.ai
    * [Website](https://cloud.sambanova.ai/)
    * [SambaNova + Aider + ClaudeDev + Continue : FREE & FAST AI Coding Setup with Llama-3.1 405B (8:25) (12 Sep 2024](https://www.youtube.com/watch?v=MNuRBOB2r38)

## Coding Agents

* Replit
  * [Homepage](https://docs.replit.com/replitai/agent)
* GPT All Starts Collaborating Coding Agents (JS/React): MVP
  * [Github](https://github.com/kyaukyuai/gpt-all-star)
  * [Video (11:40) (9 Sep 2024)](https://www.youtube.com/watch?v=CD6nhqOd79o)

## Python

* [Advanced NumPy Course - Vectorization, Masking, Broadcasting & More (49:33) (10 Aug 2024)](https://www.youtube.com/watch?v=pQt8yQuPOGo)

## Prompt Engineering

* [https://www.youtube.com/watch?v=XWJGm3y207A&t=360s (24:59) (6 Jan 2025)](https://www.youtube.com/watch?v=XWJGm3y207A&t=360s)

## API

* [ngrok](https://dashboard.ngrok.com/api-keys)
* [SemanticScholar.org](https://www.semanticscholar.org/product/api?utm_campaign=API%20Newsletter&utm_medium=email&_hsenc=p2ANqtz-9a5h4UBgAuUX1V2CpJpbabUdl-tq8EtLy90esNnQM1y5rFYRML7xpnsQWKx57KBtpZFW-UKYRdqEoC3Z_HyZrLyHgIuQ&_hsmi=324220994&utm_source=hs_email)

## VM

* [Build Streamlit Apps with AI and Deploy in Two Clicks on Replit (34:59) (8 Sep 2024)](https://www.youtube.com/watch?v=UFyXVC_nzZE)

## Python

* [ArjanCodes](https://www.youtube.com/@ArjanCodes/videos)
* [NeuralNine](https://www.youtube.com/@NeuralNine/videos)

## Test-Driven Dev (TDD)

* [testtrim: 90% Less Automated Software Testing w/ 100% of the Value (Short Version) (10:52) (16 Oct 2024)](https://www.youtube.com/watch?v=wNPeTxf3xFw)

## Demo Code

## Foundational Papers

* [henrythe9th/AI-Crash-Course](https://github.com/henrythe9th/AI-Crash-Course)

* [LangChain](https://www.youtube.com/@LangChain)
* [LlamaIndex](https://www.youtube.com/@LlamaIndex/videos)
* [Florenz23: AI Agent YT Videos](https://github.com/Florenz23/ai-agent-videos/tree/master/youtube_automation)
* [FarzadR: LLM Agent YT Videos](https://github.com/Farzad-R/LLM-Zero-to-Hundred)
* [samwit: Agents](https://github.com/samwit/agent_tutorials)
* [samwit: LangChain](https://github.com/samwit/langchain-tutorials)
* [allaboutAI](https://github.com/AllAboutAI-YT?tab=repositories)

## Roo-Cline

* [Reddit: s/roocline](https://www.reddit.com/r/roocline/)

## Full-Stack

* [Convex Chef](https://chef.convex.dev/?utm_source=yt-&utm_medium=video&dub_id=7DcIOXKDwMjwgYhE)
  - [Github](https://github.com/get-convex/convex-backend)