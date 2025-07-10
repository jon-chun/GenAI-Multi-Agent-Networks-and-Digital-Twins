* https://toolkit.ai-captains.com/dependencies
* https://github.com/jordanurbs/terminal-navigation-toolkit
* 
===== CURSOR/WINDSURF RULES

Train Cursor to use 2 modes: Planner or Executor. Use the planner to create a plan for your project, and the executor to execute the plan.

Tips:
Tweak it as necessary to fit your project.
===
You are a multi-agent system coordinator with two roles: **Planner** and **Executor**. Your job is to help complete the user's request by managing both high-level planning and low-level task execution through the `.cursor/scratchpad.md` file.

---

##  **Mode Switching Rules**

- When a new user request is received:
  - If the user **explicitly specifies** Planner or Executor mode, proceed accordingly.
  - If the user shows a **terminal error**, assume **Executor** mode unless otherwise stated.
  - If mode is unclear, **ask the user** which mode to proceed in.

---

##  **Planner Role**

**Purpose:** Break down complex requests into a step-by-step, efficient plan.  
**Actions:**
- Write or update the following `.cursor/scratchpad.md` sections:
  - `Background and Motivation`
  - `Key Challenges and Analysis`
  - `High-level Task Breakdown` (with granular, testable steps)
- Keep tasks as **small**, **clear**, and **success-criteria-driven** as possible.
- Focus on the **simplest and most efficient** solutions—avoid overengineering.

---

##  **Executor Role**

**Purpose:** Carry out one planned task at a time from `.cursor/scratchpad.md`.  
**Actions:**
- Work through one item at a time from the `Project Status Board`.
- Update:
  - `Project Status Board` (marking tasks in progress or done)
  - `Executor's Feedback or Assistance Requests` (blockers, clarifications)
  - `Lessons` (to avoid repeating errors)
- Use **TDD** where possible: write tests before code.
- Upon task completion:
  - **Do not mark as fully complete** — notify the user and await confirmation.
  - Include evidence: passing test results, status notes, etc.

---

##  **Scratchpad Conventions**

- **Do not change section names**—they must remain standardized for continuity.
- **Planner-only Sections** (usually initialized early):
  - `Background and Motivation`
  - `Key Challenges and Analysis`
- **Shared Sections**:
  - `High-level Task Breakdown` (Planner creates, Executor follows)
  - `Project Status Board` (both update status)
  - `Executor's Feedback or Assistance Requests`
  - `Lessons`
- Only **append** or **mark outdated** prior content—**do not delete** it.
- Avoid editing `.cursor/scratchpad.md` without first **reading the file**.

---

##  **Workflow Summary**

1. Receive request → Ask for mode if not obvious.
2. In **Planner mode**:
   - Create/update sections listed above.
   - Document reasoning and success criteria.
3. In **Executor mode**:
   - Complete one task at a time using cursor tools.
   - Notify user of milestone completion.
   - Request user confirmation before proceeding.
4. **Cycle continues** until Planner concludes the project is complete.

---

##  **Cautionary Guidelines**

- Never use `git -force` without explicit user approval.
- Always run `npm audit` if vulnerabilities appear.
- Output debug-friendly error messages.
- Communicate **only when confident** in the technical approach. If unsure, say so and ask the user for confirmation or permission to investigate.
- Notify Planner (via `Executor's Feedback`) **before large or irreversible changes**.

---

###  User Specified Lessons (Always Apply)

- Include info useful for debugging in the program output.
- Read the file before you try to edit it.
- If vulnerabilities appear in the terminal, run `npm audit` before proceeding.
- Always ask before using `git -force`.

===== PROJECT SETUP

Prompts & templates for setting up new projects, creating PRDs (Product Requirements Documents), initializing repositories, and configuring development environments.

=== Project Scaffolding

Quickly set up a new project with your preferred framework and desired features.

Example:
Create a starter project for a frontend application using React. Include the following features: - Authentication system - Dark/light theme toggle - API connection utilities
I'll create a React starter project with authentication, theme switching, and API utilities...
Tips:
Be specific about your framework version requirements
Include any specific library preferences you have
Mention any specific design patterns you want to follow

==

Create a starter project for a [TYPE] application using [FRAMEWORK]. Include the following features:
- [FEATURE1]
- [FEATURE2]
- [FEATURE3]

Set up the basic project structure with appropriate directory organization, configuration files, and dependencies.

=== Comprehensive .gitignore Generator

Create a thorough .gitignore file tailored to your specific tech stack and development environment.

Tips:
Specify your operating system for more targeted exclusions
Mention any specific IDE or editor you use
Include any unusual file types your project might generate

==

Generate a comprehensive .gitignore file for a [TECHNOLOGY/FRAMEWORK] project. Include common patterns for:
- Development environments
- Build artifacts
- IDE and editor files
- OS-specific files
- Dependency directories
- Any other considerations specific to [TECHNOLOGY/FRAMEWORK]

=== Directory Build - PRD Prompt

Generate a comprehensive Product Requirements Document (PRD) for an Astro-based web directory with hybrid SSG/SSR rendering and strong SEO focus.

Tips:
Include details about the number and types of resources in your directory
Specify your preferred SEO metadata strategy
Attach any design references or data samples for more accurate results
Indicate if you need map integration and which mapping service you prefer


==

Create a PRD for this build:

A [NUMBER OF RESOURCES] web directory interface using the Astro framework.

The site must use a Hybrid SSG/SSR approach, where directory listing pages, category/tag browse pages, about/contact/info pages, and the initial state of search results use SSG. 

For later versions (after the MVP), I will also want an administration backend linked directly to the database so I can modify or add new records direct from my browser. Any backend functionality like this (including user submissions, admin dashboard and content management, personalized content sections, or real-time search) should be SSR. 

Consider implementing client-side caching strategies and lazy-loading for interactive components.

The directory will be deployed on Netlify but I want to use minimal (if any) Netlify functions in regular usage of the app. 

SEO Considerations: 
Its code should be heavily Search Engine Optimized with a sitemap.xml and robots.txt. 

[INSERT SEO METADATA STRATEGY]

[IF USING A MAP: It will use Google Maps/OpenStreetMap embeds but I want to minimize API calls (so only load map if user clicks load button)]

[DATA ON SUPABASE/SERVICE: The resources data will use Supabase. Attached is a CSV export of the sample data format we will use.]

[DATA AS JSON: My resources data will stay in JSON files. Attached is a sample.]

For later versions, users to the site should also be able to request tweaks, modifications, or submit new listings. They should not need to login but they should provide a name and email [AND X ACCOUNT]

Attached is a screenshot of a front end design I like. Let's try to keep a design like that but be creative in enhancing its aesthetic appeal. It should be designed mobile-first.

Include a database schema in the PRD.


===== FEATURES OR CHANGES

Add new functionality or adjust infrastructure

=== Transform from Client Side to Server Side Rendering

Get a comprehensive plan for migrating a client-side React app to server-side rendering for improved SEO and performance.

Tips:
Be as detailed as possible with your current setup and requirements
Specify your preferred hosting and database platforms
Mention the number of pages/routes that need server-side rendering

==

This is a React website for a [SERVICE], so I assume it renders client-side. But we need to change it to render server side for better SEO. We will be deploying on [NETLIFY,VERCEL,ETC] and using [SUPABASE,UPSTASH,ETC] for data. There are no images for the db yet.

In Planner mode, let's come up with a path forward for rendering all [NUMBER] of our website's pages on the server. The directory needs to have excellent SEO to be found by users. Consider:

1. What framework would be best to migrate to (Next.js, Remix, Gatsby, etc.)
2. How to structure our data fetching for optimal performance
3. What SEO elements we need to add to each page (meta tags, schemas, etc.)
4. How to implement dynamic routing for all directory entries
5. The best deployment strategy for Netlify
6. How to handle data updates from Supabase efficiently

I'm comfortable with "vibe coding" and learning as we go, but need a clear roadmap to follow. Please provide 2 step-by-step plans I can review before making a decision.

===== DEBUGGING

Prompts & templates to help you identify and fix issues in your code with AI assistance.

AI Prompt

=== Error Diagnosis and Resolution

Get AI assistance to diagnose and fix errors in your code with detailed explanations.

Example:
I'm encountering the following error in my React application: `TypeError: Cannot read property 'map' of undefined` Here's the relevant code...
This error occurs when you're trying to call the map() method on a variable that is undefined...
Tips:
Include the complete error message and stack trace
Show enough context around the problematic code
Mention what you've already tried to fix the issue

==

I'm encountering the following error in my [LANGUAGE/FRAMEWORK] application:

```
[PASTE ERROR MESSAGE/STACK TRACE HERE]
```

Here's the relevant code:

```
[PASTE RELEVANT CODE HERE]
```

Please help me:
1. Understand what's causing the error
2. Identify potential solutions
3. Implement the most effective fix


===== DOCUMENTATION

Prompts & templates for generating documentation, README files, and code comments.

=== Project README Generator

Generate a professional README file for your project with all essential sections.

Tips:
Include details about your project's unique features
Mention any badges you'd like to include
Specify the license you're using

==

Create a comprehensive README.md for my [TYPE] project called "[PROJECT_NAME]". The project:

- Solves: [PROBLEM_STATEMENT]
- Uses: [TECHNOLOGIES]
- Requires: [PREREQUISITES]
- Can be installed by: [INSTALLATION_STEPS]

Include sections for installation, usage examples, API documentation (if applicable), contributing guidelines, and license information.

===== n8n WORKFLOWS

Ready-to-use n8n automation templates for common business processes and integrations.

=== RSS Posts Aggregator & AI Summarizer

Automatically aggregates RSS feeds, processes content with AI, and sends summaries to Telegram. Perfect for staying updated with multiple content sources.

Use Cases:
Content curation for newsletters
Automated industry monitoring
Research feed aggregation
Social media content sourcing
Required Services:
OpenAI API key
Telegram Bot Token
RSS feed URLs
n8n instance
Setup Instructions:
1. Set up OpenAI API credentials in n8n
2. Create a Telegram bot and get the bot token
3. Configure your RSS feed URLs in the "Set RSS Feeds List" nodes
4. Update Telegram chat ID and credentials
5. Configure the schedule triggers for your desired frequency
6. Test the workflow with a single RSS feed first
==

{
  "name": "RSS Posts Aggregator & AI Summarizer Template",
  "nodes": [
    {
      "parameters": {
        "fieldToSplitOut": "rss",
        "options": {}
      },
      "id": "4dc2c3b9-5df8-41ae-a33f-bc2e72ad0684",
      "name": "Split Out1",
      "type": "n8n-nodes-base.splitOut",
      "position": [
        2820,
        340
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "80b9f942-5c80-477d-9321-5f79902ed1cf",
      "name": "Embeddings OpenAI1",
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "position": [
        3400,
        560
      ],
      "typeVersion": 1.2,
      "credentials": {
        "openAiApi": {
          "id": "YOUR_OPENAI_CREDENTIALS_ID",
          "name": "OpenAI Account"
        }
      }
    },
    {
      "parameters": {
        "jsonMode": "expressionData",
        "jsonData": "=# {{ $json.title }}\n{{ $json.content }}",
        "options": {
          "metadata": {
            "metadataValues": [
              {
                "name": "title",
                "value": "={{ $json.title }}"
              },
              {
                "name": "createDate",
                "value": "={{ $now.toISO() }}"
              },
              {
                "name": "publishDate",
                "value": "={{ $json.date }}"
              },
              {
                "name": "link",
                "value": "={{ $json.link }}"
              }
            ]
          }
        }
      },
      "id": "157257e6-149c-439f-b8bf-f94b05bcbc26",
      "name": "Default Data Loader1",
      "type": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
      "position": [
        3540,
        500
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "chunkSize": 3000,
        "options": {}
      },
      "id": "26172a50-ee62-4ee9-bf02-ebd6d216d171",
      "name": "Recursive Character Text Splitter1",
      "type": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
      "position": [
        3600,
        640
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "daysInterval": 2
            }
          ]
        }
      },
      "id": "e9d21298-8e18-4f3f-a6f8-e0ac3706a29b",
      "name": "Schedule Daily Articles",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [
        2380,
        340
      ],
      "typeVersion": 1.2
    },
    {
      "parameters": {
        "content": "## 1. POSTS CATEGORY A",
        "height": 680,
        "width": 2740,
        "color": 4
      },
      "id": "fd3fa376-c92a-4e5b-88b7-687a037a4803",
      "name": "Sticky Note",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2300,
        180
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "b8c00469-890b-4b5b-8e2e-2ad9ec2d0815",
              "name": "rss",
              "type": "array",
              "value": "=[\"<YOUR_RSS_FEED_URL_1>\",\"<YOUR_RSS_FEED_URL_2>\",\"<YOUR_RSS_FEED_URL_3>\",\"<YOUR_RSS_FEED_URL_4>\",\"<YOUR_RSS_FEED_URL_5>\"]"
            }
          ]
        },
        "options": {}
      },
      "id": "d7e19217-cb49-4348-a296-6be76afa9e1a",
      "name": "Set RSS Feeds List 1",
      "type": "n8n-nodes-base.set",
      "position": [
        2600,
        340
      ],
      "typeVersion": 3.4
    },
    {
      "parameters": {
        "url": "={{ $json.rss }}",
        "options": {
          "ignoreSSL": false
        }
      },
      "id": "d5ede8cb-58db-4d6c-a0af-4ca79de5e7ec",
      "name": "Read RSS Feeds1",
      "type": "n8n-nodes-base.rssFeedRead",
      "position": [
        3040,
        340
      ],
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "e9f27ceb-c5f2-4997-8cb1-67576a7bb337",
              "name": "title",
              "type": "string",
              "value": "={{ $json.title }}"
            },
            {
              "id": "4c4f9417-40f2-4fb0-9976-d09f5984680f",
              "name": "content",
              "type": "string",
              "value": "={{ $json['content:encodedSnippet'] ?? $json.contentSnippet}}"
            },
            {
              "id": "e1986bac-054e-4240-ba50-536dbcd27337",
              "name": "date",
              "type": "string",
              "value": "={{ $json.isoDate}}"
            },
            {
              "id": "9566e23c-ac30-4d66-abbd-889f322688b7",
              "name": "link",
              "type": "string",
              "value": "={{ $json.link }}"
            }
          ]
        },
        "options": {}
      },
      "id": "9ae034b6-b90a-4ba5-93d9-848c1bfb6556",
      "name": "Normalize Article Fields1",
      "type": "n8n-nodes-base.set",
      "position": [
        3260,
        340
      ],
      "typeVersion": 3.4
    },
    {
      "parameters": {
        "mode": "insert",
        "memoryKey": "posts_store_key",
        "clearStore": true
      },
      "id": "c0ea6dd4-082f-4631-8348-e63d22903c03",
      "name": "Store Articles in Memory1",
      "type": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
      "position": [
        3480,
        340
      ],
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "gpt-4o",
          "cachedResultName": "gpt-4o"
        },
        "options": {
          "maxTokens": 16000,
          "maxRetries": 2
        }
      },
      "id": "92715c33-f8b1-40b8-9ac6-50424bdca727",
      "name": "OpenAI Chat Model1",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "position": [
        4020,
        640
      ],
      "typeVersion": 1.2,
      "credentials": {
        "openAiApi": {
          "id": "YOUR_OPENAI_CREDENTIALS_ID",
          "name": "OpenAI Account"
        }
      }
    },
    {
      "parameters": {
        "mode": "retrieve-as-tool",
        "toolName": "get_posts",
        "toolDescription": "Call this tool to get the latest posts.",
        "memoryKey": "posts_store_key",
        "topK": 20
      },
      "id": "339d993e-0842-4f1e-a3b3-c2291a330c4b",
      "name": "Get Posts Tool1",
      "type": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
      "position": [
        4200,
        620
      ],
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "c2bc9101-4550-4e11-b1cc-97ce94b64bb0",
      "name": "Embeddings OpenAI2",
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "position": [
        4300,
        740
      ],
      "typeVersion": 1.2,
      "credentials": {
        "openAiApi": {
          "id": "YOUR_OPENAI_CREDENTIALS_ID",
          "name": "OpenAI Account"
        }
      }
    },
    {
      "parameters": {
        "chatId": "<YOUR_TELEGRAM_CHAT_ID>",
        "text": "={{ $json.message }}",
        "additionalFields": {
          "appendAttribution": false,
          "parse_mode": "HTML"
        }
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        4760,
        260
      ],
      "id": "f4fcc7ad-0d13-4e86-a280-76b3135f1757",
      "name": "Send to Telegram1",
      "webhookId": "YOUR_WEBHOOK_ID",
      "credentials": {
        "telegramApi": {
          "id": "YOUR_TELEGRAM_CREDENTIALS_ID",
          "name": "Telegram Bot"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=Summarize the most relevant posts published in the past 7 days, with references. Today is {{ $now }}.",
        "options": {
          "systemMessage": "=You are an AI Content Analyst specializing in analyzing and summarizing posts from RSS feeds. Your role is to extract the most relevant and valuable information for your audience.\n\n**Your Mission:**\nAnalyze the latest posts from the provided feeds and create concise, actionable summaries focusing on:\n\n1. **Key Insights** - Main takeaways and important developments\n2. **Industry Trends** - Emerging patterns and market movements\n3. **Actionable Information** - Practical advice and strategies\n4. **Important Updates** - Significant posts and announcements\n5. **Analysis & Commentary** - Expert opinions and thoughtful analysis\n6. **Future Implications** - What these developments mean going forward\n\n**CRITICAL FILTERING RULES:**\n- IGNORE all product promotions, course sales, and service advertisements\n- SKIP mentions of specific paid programs, workshops, or services being sold\n- EXCLUDE references to sales language or promotional content\n- FOCUS ONLY on the core insights, strategies, and valuable information\n- Extract general principles rather than promotional content\n\n**Output Format:**\n- Lead with the most important insight or development of the week\n- Organize findings into clear, scannable sections\n- Include specific examples and actionable takeaways\n- Highlight time-sensitive information or opportunities\n- Provide context on why each insight matters\n- Keep summaries concise but comprehensive (aim for 2-3 sentences per key point)\n\n**Tone:** Professional, informative, and actionable. Write for readers who want to stay informed about important developments in their field of interest."
        }
      },
      "id": "f2e8d5e3-637d-46e0-902c-57d843251dbc",
      "name": "AI Summary Agent1",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [
        4020,
        440
      ],
      "typeVersion": 1.9
    },
    {
      "parameters": {
        "jsCode": "// Get the message from various possible sources\nlet message = $input.first().json.output || \n              $input.first().json.message || \n              $input.first().json.text || \n              $input.first().json.content || '';\n\n// Convert markdown to HTML for Telegram\nfunction markdownToTelegramHTML(text) {\n  return text\n    // Convert markdown headers to HTML\n    .replace(/^### (.*$)/gm, '<b>$1</b>')\n    .replace(/^## (.*$)/gm, '<b>$1</b>')\n    .replace(/^# (.*$)/gm, '<b>$1</b>')\n    // Convert bold markdown to HTML\n    .replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>')\n    // Convert markdown links to HTML\n    .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g, '<a href=\"$2\">$1</a>')\n    // Convert bullet points\n    .replace(/^- /gm, '• ');\n}\n\nconst htmlMessage = markdownToTelegramHTML(message);\n\nreturn {\n  json: {\n    message: htmlMessage,\n    originalMessage: message\n  }\n};"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        4540,
        260
      ],
      "id": "cdabe10e-0a16-43da-8059-884f497b8ae2",
      "name": "Format for Telegram1"
    },
    {
      "parameters": {
        "options": {
          "reset": true
        }
      },
      "type": "n8n-nodes-base.splitInBatches",
      "typeVersion": 3,
      "position": [
        3820,
        340
      ],
      "id": "cab7d4f1-34b2-4ea6-8c6e-c395ecde8833",
      "name": "Process Articles in Batches1"
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.merge",
      "typeVersion": 3.1,
      "position": [
        4360,
        260
      ],
      "id": "f70c0033-81b2-4a8d-94ca-be673f122e97",
      "name": "Merge Results1"
    },
    {
      "parameters": {
        "fieldToSplitOut": "rss",
        "options": {}
      },
      "id": "eba1e9c6-744f-4a31-b6e2-7e0031764e08",
      "name": "Split Out2",
      "type": "n8n-nodes-base.splitOut",
      "position": [
        2820,
        1060
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "2843a6ae-bf1e-4362-b67d-ff1ea035e4fc",
      "name": "Embeddings OpenAI3",
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "position": [
        3400,
        1280
      ],
      "typeVersion": 1.2,
      "credentials": {
        "openAiApi": {
          "id": "YOUR_OPENAI_CREDENTIALS_ID",
          "name": "OpenAI Account"
        }
      }
    },
    {
      "parameters": {
        "jsonMode": "expressionData",
        "jsonData": "=# {{ $json.title }}\n{{ $json.content }}",
        "options": {
          "metadata": {
            "metadataValues": [
              {
                "name": "title",
                "value": "={{ $json.title }}"
              },
              {
                "name": "createDate",
                "value": "={{ $now.toISO() }}"
              },
              {
                "name": "publishDate",
                "value": "={{ $json.date }}"
              },
              {
                "name": "link",
                "value": "={{ $json.link }}"
              }
            ]
          }
        }
      },
      "id": "00b86fad-cd48-4a8c-9884-597d363e2224",
      "name": "Default Data Loader2",
      "type": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
      "position": [
        3540,
        1220
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "chunkSize": 3000,
        "options": {}
      },
      "id": "89e237d1-aa82-4f45-91f2-fb8f8804fe71",
      "name": "Recursive Character Text Splitter2",
      "type": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
      "position": [
        3600,
        1360
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "daysInterval": 2,
              "triggerAtHour": 1
            }
          ]
        }
      },
      "id": "d1186fff-5ad2-4bd0-9df2-c67d722bd7f5",
      "name": "Schedule Daily Articles2",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [
        2380,
        1060
      ],
      "typeVersion": 1.2
    },
    {
      "parameters": {
        "content": "## 2. POSTS CATEGORY B",
        "height": 680,
        "width": 2740,
        "color": 5
      },
      "id": "d12ff075-b0ec-4203-9c3f-25b86fbea6e7",
      "name": "Sticky Note2",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2300,
        900
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "url": "={{ $json.rss }}",
        "options": {
          "ignoreSSL": false
        }
      },
      "id": "9f7ae07b-1612-4cc7-adef-aa1a7823b4b0",
      "name": "Read RSS Feeds2",
      "type": "n8n-nodes-base.rssFeedRead",
      "position": [
        3040,
        1060
      ],
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "e9f27ceb-c5f2-4997-8cb1-67576a7bb337",
              "name": "title",
              "type": "string",
              "value": "={{ $json.title }}"
            },
            {
              "id": "4c4f9417-40f2-4fb0-9976-d09f5984680f",
              "name": "content",
              "type": "string",
              "value": "={{ $json['content:encodedSnippet'] ?? $json.contentSnippet}}"
            },
            {
              "id": "e1986bac-054e-4240-ba50-536dbcd27337",
              "name": "date",
              "type": "string",
              "value": "={{ $json.isoDate}}"
            },
            {
              "id": "e1986bac-054e-4240-ba50-536dbcd27337",
              "name": "link",
              "type": "string",
              "value": "={{ $json.link }}"
            }
          ]
        },
        "options": {}
      },
      "id": "1d769849-8a19-46f6-b149-9d24732dafaf",
      "name": "Normalize Article Fields2",
      "type": "n8n-nodes-base.set",
      "position": [
        3260,
        1060
      ],
      "typeVersion": 3.4
    },
    {
      "parameters": {
        "mode": "insert",
        "memoryKey": "posts_store_key",
        "clearStore": true
      },
      "id": "7098baf2-73ef-49b0-8e69-c7b413ef915e",
      "name": "Store Articles in Memory2",
      "type": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
      "position": [
        3480,
        1060
      ],
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "gpt-4o",
          "cachedResultName": "gpt-4o"
        },
        "options": {
          "maxTokens": 16000,
          "maxRetries": 2
        }
      },
      "id": "c3d5450c-53b6-45c0-b06a-a43ed6c6e256",
      "name": "OpenAI Chat Model2",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "position": [
        4020,
        1360
      ],
      "typeVersion": 1.2,
      "credentials": {
        "openAiApi": {
          "id": "YOUR_OPENAI_CREDENTIALS_ID",
          "name": "OpenAI Account"
        }
      }
    },
    {
      "parameters": {
        "mode": "retrieve-as-tool",
        "toolName": "get_posts",
        "toolDescription": "Call this tool to get the latest posts.",
        "memoryKey": "posts_store_key",
        "topK": 20
      },
      "id": "cee31322-3ce7-4797-ba59-a5b6031fc382",
      "name": "Get Posts Tool2",
      "type": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
      "position": [
        4200,
        1340
      ],
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "0b76aa5b-8105-4dfc-bf4c-e53f71fe7ebd",
      "name": "Embeddings OpenAI4",
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "position": [
        4300,
        1460
      ],
      "typeVersion": 1.2,
      "credentials": {
        "openAiApi": {
          "id": "YOUR_OPENAI_CREDENTIALS_ID",
          "name": "OpenAI Account"
        }
      }
    },
    {
      "parameters": {
        "chatId": "<YOUR_TELEGRAM_CHAT_ID>",
        "text": "={{ $json.message }}",
        "additionalFields": {
          "appendAttribution": false,
          "parse_mode": "HTML"
        }
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        4760,
        980
      ],
      "id": "b347fc80-f706-4807-8cbb-2fad4bd0d66d",
      "name": "Send to Telegram2",
      "webhookId": "YOUR_WEBHOOK_ID",
      "credentials": {
        "telegramApi": {
          "id": "YOUR_TELEGRAM_CREDENTIALS_ID",
          "name": "Telegram Bot"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=Summarize the most relevant posts published in the past 7 days, with references. Today is {{ $now }}.",
        "options": {
          "systemMessage": "=You are an AI Content Analyst specializing in analyzing and summarizing posts from RSS feeds. Your role is to extract the most relevant information for your specific audience category.\n\n**Your Mission:**\nAnalyze the latest posts from the provided feeds and create actionable summaries focusing on:\n\n1. **Key Developments** - Latest posts and important updates\n2. **Trends & Patterns** - Emerging themes and market movements\n3. **Practical Insights** - Actionable information and strategies\n4. **Industry Analysis** - Expert commentary and thoughtful analysis\n5. **Important Updates** - Significant announcements and changes\n6. **Future Outlook** - Implications and what to watch for\n\n**CRITICAL FILTERING RULES:**\n- IGNORE all product promotions, course sales, and service advertisements\n- SKIP mentions of specific paid programs, workshops, or services being sold\n- EXCLUDE references to sales language or promotional content\n- FOCUS ONLY on the core insights, strategies, and valuable information\n- Extract general principles rather than promotional content\n\n**Output Format:**\n- Start with the most important development or insight of the week\n- Organize by relevance and actionability\n- Include specific examples and practical takeaways\n- Highlight time-sensitive information\n- Provide context on why each insight matters\n- Focus on practical implementation and real-world application\n\n**Tone:** Professional, informative, and practical. Write for readers who want to stay informed and take action based on the latest developments in their field."
        }
      },
      "id": "8ae9b348-02d7-40d3-9414-48dff4dd3ff2",
      "name": "AI Summary Agent2",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [
        4020,
        1160
      ],
      "typeVersion": 1.9
    },
    {
      "parameters": {
        "jsCode": "// Get the message from various possible sources\nlet message = $input.first().json.output || \n              $input.first().json.message || \n              $input.first().json.text || \n              $input.first().json.content || '';\n\n// Convert markdown to HTML for Telegram\nfunction markdownToTelegramHTML(text) {\n  return text\n    // Convert markdown headers to HTML\n    .replace(/^### (.*$)/gm, '<b>$1</b>')\n    .replace(/^## (.*$)/gm, '<b>$1</b>')\n    .replace(/^# (.*$)/gm, '<b>$1</b>')\n    // Convert bold markdown to HTML\n    .replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>')\n    // Convert markdown links to HTML\n    .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g, '<a href=\"$2\">$1</a>')\n    // Convert bullet points\n    .replace(/^- /gm, '• ');\n}\n\nconst htmlMessage = markdownToTelegramHTML(message);\n\nreturn {\n  json: {\n    message: htmlMessage,\n    originalMessage: message\n  }\n};"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        4540,
        980
      ],
      "id": "8e136979-83ac-4fd6-81c2-6218b1c856c9",
      "name": "Format for Telegram2"
    },
    {
      "parameters": {
        "options": {
          "reset": true
        }
      },
      "type": "n8n-nodes-base.splitInBatches",
      "typeVersion": 3,
      "position": [
        3820,
        1060
      ],
      "id": "95e0af97-00d5-4765-bf9e-f3dba1cb2f6c",
      "name": "Process Articles in Batches2"
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.merge",
      "typeVersion": 3.1,
      "position": [
        4360,
        980
      ],
      "id": "0a33ab8e-cf7a-4000-bc74-4199d4810f76",
      "name": "Merge Results2"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "b8c00469-890b-4b5b-8e2e-2ad9ec2d0815",
              "name": "rss",
              "type": "array",
              "value": "=[\"<YOUR_RSS_FEED_URL_1>\",\"<YOUR_RSS_FEED_URL_2>\",\"<YOUR_RSS_FEED_URL_3>\",\"<YOUR_RSS_FEED_URL_4>\",\"<YOUR_RSS_FEED_URL_5>\"]"
            }
          ]
        },
        "options": {}
      },
      "id": "1e79c73c-358b-4c59-ab26-b0b2143c2068",
      "name": "Set RSS Feeds List 2",
      "type": "n8n-nodes-base.set",
      "position": [
        2600,
        1060
      ],
      "typeVersion": 3.4
    }
  ],
  "pinData": {},
  "connections": {
    "Split Out1": {
      "main": [
        [
          {
            "node": "Read RSS Feeds1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI1": {
      "ai_embedding": [
        [
          {
            "node": "Store Articles in Memory1",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    },
    "Default Data Loader1": {
      "ai_document": [
        [
          {
            "node": "Store Articles in Memory1",
            "type": "ai_document",
            "index": 0
          }
        ]
      ]
    },
    "Recursive Character Text Splitter1": {
      "ai_textSplitter": [
        [
          {
            "node": "Default Data Loader1",
            "type": "ai_textSplitter",
            "index": 0
          }
        ]
      ]
    },
    "Schedule Daily Articles": {
      "main": [
        [
          {
            "node": "Set RSS Feeds List 1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set RSS Feeds List 1": {
      "main": [
        [
          {
            "node": "Split Out1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Read RSS Feeds1": {
      "main": [
        [
          {
            "node": "Normalize Article Fields1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Normalize Article Fields1": {
      "main": [
        [
          {
            "node": "Store Articles in Memory1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model1": {
      "ai_languageModel": [
        [
          {
            "node": "AI Summary Agent1",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Get News Articles Tool1": {
      "ai_tool": [
        [
          {
            "node": "AI Summary Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI2": {
      "ai_embedding": [
        [
          {
            "node": "Get Posts Tool1",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    },
    "AI Summary Agent1": {
      "main": [
        [
          {
            "node": "Merge Results1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Format for Telegram1": {
      "main": [
        [
          {
            "node": "Send to Telegram1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Process Articles in Batches1": {
      "main": [
        [
          {
            "node": "Merge Results1",
            "type": "main",
            "index": 1
          }
        ],
        [
          {
            "node": "AI Summary Agent1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Merge Results1": {
      "main": [
        [
          {
            "node": "Format for Telegram1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Store Articles in Memory1": {
      "main": [
        [
          {
            "node": "Process Articles in Batches1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Split Out2": {
      "main": [
        [
          {
            "node": "Read RSS Feeds2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI3": {
      "ai_embedding": [
        [
          {
            "node": "Store Articles in Memory2",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    },
    "Default Data Loader2": {
      "ai_document": [
        [
          {
            "node": "Store Articles in Memory2",
            "type": "ai_document",
            "index": 0
          }
        ]
      ]
    },
    "Recursive Character Text Splitter2": {
      "ai_textSplitter": [
        [
          {
            "node": "Default Data Loader2",
            "type": "ai_textSplitter",
            "index": 0
          }
        ]
      ]
    },
    "Schedule Daily Articles2": {
      "main": [
        [
          {
            "node": "Set RSS Feeds List 2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Read RSS Feeds2": {
      "main": [
        [
          {
            "node": "Normalize Article Fields2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Normalize Article Fields2": {
      "main": [
        [
          {
            "node": "Store Articles in Memory2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Store Articles in Memory2": {
      "main": [
        [
          {
            "node": "Process Articles in Batches2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model2": {
      "ai_languageModel": [
        [
          {
            "node": "AI Summary Agent2",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Get News Articles Tool2": {
      "ai_tool": [
        [
          {
            "node": "AI Summary Agent2",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI4": {
      "ai_embedding": [
        [
          {
            "node": "Get Posts Tool2",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    },
    "AI Summary Agent2": {
      "main": [
        [
          {
            "node": "Merge Results2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Format for Telegram2": {
      "main": [
        [
          {
            "node": "Send to Telegram2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Process Articles in Batches2": {
      "main": [
        [
          {
            "node": "Merge Results2",
            "type": "main",
            "index": 1
          }
        ],
        [
          {
            "node": "AI Summary Agent2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Merge Results2": {
      "main": [
        [
          {
            "node": "Format for Telegram2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set RSS Feeds List 2": {
      "main": [
        [
          {
            "node": "Split Out2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "TEMPLATE_VERSION_ID",
  "meta": {
    "templateCredsSetupCompleted": false,
    "instanceId": "TEMPLATE_INSTANCE_ID"
  },
  "id": "RSS_POSTS_AGGREGATOR_TEMPLATE",
  "tags": []
}

===== ZAPIER WORKFLOWS

Zapier automation templates for connecting apps and automating tasks.

===== MAKE.COM Workflows

Make.com (formerly Integromat) templates for complex automation scenarios

===== GENERAL AUTOMATION

Platform-agnostic automation concepts and workflow templates.

