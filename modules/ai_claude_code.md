## Claude Code

# [Deeplearning.ai: Claude Code: A Highly Agentic Coding Assistant](https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/)

## Course Notes:

This note includes the instructions on how to **install Claude Code**, and the **links to the coding examples and prompts** used in the lessons.

**Note**:
- To mark this reading item as complete, make sure to scroll down to the end and click on **"Mark as Complete"**.
- There's a second reading item at the end of this course. To get **100% course completion**, make sure to also mark it as complete.

### Claude Code Installation

To follow along with the lessons, here's how you can install Claude Code.

1. Install [Node.js](https://nodejs.org/en/download), then run:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
   For more installation guides, you can find them [here](https://docs.anthropic.com/en/docs/claude-code/setup). If you're using Windows, make sure to check the Windows Setup [here](https://docs.anthropic.com/en/docs/claude-code/setup#windows-setup).

2. Once you have Claude Code installed, you can:
   - launch it from your terminal: navigate to your project folder & then type `claude`
   - launch it from the terminal integrated within VS Code by typing `claude`, the extension will auto-install.
     - If you run into issues, ensure that `code` command is available. If not installed, use Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux) and search for "Shell Command: Install 'code' command in PATH"

For more info, check [Claude Code IDE Integrations](https://docs.anthropic.com/en/docs/claude-code/ide-integrations).

### Links to Course Codebase Examples

Here are the links to the coding examples covered in the lessons:

1. **Codebase for the RAG chatbot (Lessons 2-6)**
   - Here's [the repo](https://github.com/https-deeplearning-ai/starting-ragchatbot-codebase) of the starting codebase used in lesson 2.
   - Lessons 3-6 add features to the starting codebase.
   - Here's [the state](https://github.com/https-deeplearning-ai/ragchatbot-codebase) of the codebase after lesson 5.

   Feel free to fork the starting codebase and follow the lessons' activities.

2. **E-commerce data analysis (Lesson 7)**
   - Here are [the lesson's files](https://github.com/https-deeplearning-ai/sc-claude-code-files/tree/main/lesson7_files).
   - It includes the data, the starting and refactored notebooks, and the dashboard file.

   Feel free to fork this repo, and try lesson 7 tasks using the starting notebook and the data folder.

3. **Figma design mockup (Lesson 8)**
   - Here's [the link](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/additional_files/key-indicators.fig) to the Figma mockup design (which you can open with [Figma Desktop App](https://help.figma.com/hc/en-us/articles/5601429983767-Guide-to-the-Figma-desktop-app).
   - In lesson 8, you will build a Next.js app based on this mockup.
   - Here's [the link](https://github.com/https-deeplearning-ai/FRED-dashboard) to the repo of the app we got during filming.

### Prompts and Summaries of Lessons

You can find the prompts used in each lesson and a summary of Claude Code features in the optional reading item at the end of the course (Prompts & Summaries of Lessons). You can also find them in this [repo](https://github.com/https-deeplearning-ai/sc-claude-code-files/tree/main/reading_notes).

### Claude Code Cost

If you'd like to install Claude Code to try the lessons:
- you can use the Pro or Max [subscription](https://www.anthropic.com/claude-code#:~:text=Pro,Sign%20up). The pro subscription is enough for the lessons' activities.
- Or, you can be billed based on API usage. For a given session, you can see the cost using the `/cost` command.

## Prompts & Summaries of Lessons

This note includes the links to the prompts used in the lessons, additional resources and a summary of Claude Code features.

**Note**: To mark this reading item as complete, make sure to scroll down to the end and click on "Mark as Complete".

### Prompts

Here are the links to the lessons' notes and prompts:

- [Prompts of Lesson 2: Setup & Codebase Understanding](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L2_notes.md)
- [Prompts of Lesson 3: Adding Features](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L3_notes.md)
- [Prompts of Lesson 4: Testing, Error Debugging and Code Refactoring](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L4_notes.md)
- [Prompts of Lesson 5: Adding Multiple Features Simultaneously - Using Git Worktrees](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L5_notes.md)
- [Notes for Lesson 6: References to GitHub Integration & Hooks](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L6_notes.md)
- [Prompts of Lesson 7: Refactoring a Jupyter Notebook & Creating a Dashboard](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L7_notes.md)
- [Prompts of Lesson 8: Creating Web App based on a Figma Mockup](https://github.com/https-deeplearning-ai/sc-claude-code-files/blob/main/reading_notes/L8_notes.md)

### Additional Resources

To learn more about these features as well as other features, you can check:

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Code Common Workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Claude Code Use Cases](https://www.anthropic.com/news/how-anthropic-teams-use-claude-code)

There's also a great course on Anthropic Academy that you can check out to see more examples with Claude Code:

- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)

### Summary of Claude Code Features

#### Managing Project Memory

- **/init**: Claude Code scans your codebase and creates CLAUDE.md file inside your project directory.
  - CLAUDE.md guides Claude through your codebase, pointing out important commands, architecture and coding style. It's automatically included in the context each time you launch Claude Code.
  - Here's an [example](https://github.com/https-deeplearning-ai/ragchatbot-codebase/blob/main/CLAUDE.md) of a CLAUDE.md file generated by init for the RAG chatbot example.

- **#**: Use # to quickly add a memory. Useful when you see Claude Code repeats an error.

- **Example 1**: since the project is a uv project, we added these to CLAUDE.md file using #:
  ```
  #use uv to run python files or add any dependencies
  ```

- **Example 2**: you can inform Claude Code about the database schema, in this case since you have a vector database, you can inform Claude Code about the collections stored in the vector database:
  ```
  #The vector database has two collections:
    - course_catalog:
      stores course titles for name resolution
      metadata for each course: title, instructor, course_link, lesson_count, lessons_json (list of lessons: lesson_number, lesson_title, lesson_link)
    - course_content:
      stores text chunks for semantic search
      metadata for each chunk: course_title, lesson_number, chunk_index
  ```

### Summary of Claude Code Commands

| Command | Description |
|---------|-------------|
| `/clear` | clears current conversation history |
| `/compact` | summarizes current conversation history |
| `ESC` | interrupt Claude to redirect or correct it |
| `ESC ESC` | rewind the conversation to an earlier point in time |
| `@` | Mention files with @ to include its content in your request |
| `/mcp` | Manage MCP connection & check available MCP servers with their provided tools (MCP with Claude Code) |

You can use regular bash command within Claude Code, but you need to start the command with `!` (for example: `!pwd`). You can type `exit` to quit Claude Code.

| Shortcuts | Description |
|-----------|-------------|
| `shift+tab` | switch between planning and auto-accept mode |
| take a screenshot | `cmd+ shift+ ctrl + 4` (Mac) or `Win + Shift + S` (Windows) |
| paste a screenshot | `Ctrl + V` (might not work on Windows) |

### Additional Claude Features

#### Extended Thinking Mode

For complex tasks (e.g., complex architectural changes, debugging complicated issues), you can use the word "think" to trigger [extended thinking mode](https://docs.anthropic.com/en/docs/claude-code/common-workflows#use-extended-thinking). There are several levels of thinking: "think" < "think hard" < "think harder" < "ultrathink." Each level allocates more thinking budget for Claude.

#### Use of subagents

You've learned that one of the out-of-the-box tools for Claude Code is Task, which Claude Code can use to launch subagents for complex multi-step tasks. You can explicitly ask Claude Code to use subagents to brainstorm ideas or to investigate multiple aspects of a question or a problem you want to solve. These built-in agents are of general purpose.

You can also create your customized specialized subagents. Each subagent has its own context window, and you can define a custom system prompt and specific tools for each subagent. This part is not covered in this course, but you can check the details in the documentation [here](https://docs.anthropic.com/en/docs/claude-code/sub-agents).