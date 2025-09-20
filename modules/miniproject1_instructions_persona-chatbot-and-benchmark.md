# Mini Project #1: Benchmarking Expert Chatbot Personas

## Overview
Develop and evaluate a sophisticated chatbot persona through iterative prompt engineering, focusing on complexity, subtlety, creativity, and effectiveness.

## Contact
**Questions?** Email: chunj@kenyon.edu

---

## Deliverables

### 1. GitHub Repository Setup
- **Repository Name**: `iphs391_fall2025_miniproject-1_benchmarking-expert-chatbot-personas`
- **Visibility**: Public

### 2. Required Files (Steps 2-7)

#### Step 2: Persona Development Materials
- **Meta-prompt iteration history**: Document the iterative refinement process used to develop your persona prompt
- **Final persona prompt**: The refined, final version of your chatbot persona prompt

#### Step 3: Conversation Evidence  
- **Chat history**: Best 10 turns (20 utterances) demonstrating your persona in action
- **Export Method**: Use [ChatGPT Exporter](https://chromewebstore.google.com/detail/chatgpt-exporter-chatgpt/ilmdofdhpnhffldihboadndccenlnfll) Chrome extension
  - Settings: "SELECT" → "All (default)", "EXPORT" → "to MARKDOWN" (.md)

#### Step 4: Evaluation Framework
- **Rubric development history**: ChatGPT conversation showing iterative design of your evaluation metric
- **Final scoring rubric**: Extracted rubric that scores persona quality [0-100] based on chat history alignment

#### Step 5: Analysis Report
- **Comprehensive writeup** (1-2 pages): Goals, strategy, experiments, results, rubric analysis, and conclusions

#### Step 6: Upload All Materials
- Commit and push all files (Steps 2-5) to your public GitHub repository

#### Step 7: AI-Generated README.md
- **Final step**: Use an AI system (ChatGPT, Claude, etc.) to analyze your complete public repository
- **Input**: Provide the AI with your GitHub repository URL
- **Output**: Generate a comprehensive, professional README.md file that serves as the project landing page
- **Commit**: Add the AI-generated README.md to your repository

---

## Detailed Report Structure: `mp1_chatbot_report.docx`

### Section 1: Executive Summary (2-3 paragraphs)
Brief overview of your chosen persona, key findings, and final rubric score with justification.

### Section 2: Persona Design Strategy (3-4 paragraphs)
- **Target persona description**: Who/what are you emulating and why?
- **Prompt engineering approach**: Techniques used (few-shot examples, system prompts, chain-of-thought, etc.)
- **Complexity factors**: What makes your persona sophisticated vs. simple role-playing?

### Section 3: Iterative Development Process (3-4 paragraphs)
- **Initial attempts**: First persona prompts and their limitations
- **Refinement cycles**: What specific changes improved performance?
- **Meta-prompting insights**: How did prompt optimization tools help?

### Section 4: Conversation Analysis (2-3 paragraphs)
- **Persona consistency**: How well did the chatbot maintain character?
- **Subtlety demonstration**: Examples of nuanced behaviors that emerged
- **Failure modes**: When/how did the persona break down?

### Section 5: Evaluation Framework (2-3 paragraphs)
- **Rubric design rationale**: Why these specific metrics?
- **Scoring justification**: Apply your rubric to your own chat history
- **Validation concerns**: Limitations and potential improvements

### Section 6: Conclusions & Future Work (1-2 paragraphs)
Key insights about persona prompt engineering and potential extensions.

---

## Scoring Rubric Development

### Example Rubric Structure
Your rubric should evaluate persona quality as a **weighted linear combination** of independent factors:

**Total Score = w₁×Consistency + w₂×Depth + w₃×Authenticity + w₄×Creativity + w₅×Engagement**

Where weights sum to 1.0 and each factor scores 0-100.

#### Sample Factor Definitions:
- **Consistency (25%)**: Maintains character traits, speech patterns, knowledge boundaries
- **Depth (20%)**: Demonstrates specialized knowledge, nuanced reasoning, complex behaviors  
- **Authenticity (20%)**: Realistic responses that fit the persona's background/expertise
- **Creativity (15%)**: Novel interpretations, unexpected but appropriate responses
- **Engagement (20%)**: Maintains interesting dialogue, asks relevant questions, shows personality

### Seed Prompt for Rubric Development

```
You are an expert in AI evaluation metrics and prompt engineering. Help me create a comprehensive scoring rubric for evaluating chatbot persona quality.

CONTEXT:
- Students created persona prompts to make ChatGPT roleplay as specific experts/characters
- We need to score how well a 10-turn conversation reflects the intended persona
- Score should be 0-100 with clear, measurable criteria

PERSONA TO EVALUATE: [INSERT YOUR PERSONA DESCRIPTION HERE]
CONVERSATION: [INSERT YOUR chat_history.md CONTENT HERE]

REQUIREMENTS:
1. Create 4-6 independent evaluation factors
2. Define each factor with specific behavioral indicators
3. Assign weights that sum to 1.0
4. Provide scoring guidelines (what constitutes 90+ vs 60-70 vs <40)
5. Include examples from the conversation for each factor
6. Calculate final weighted score

Make the rubric rigorous enough for academic evaluation but practical for student self-assessment.
```

---

## AI-Generated README.md Prompt

Once you've completed Steps 2-6, use this prompt with an AI system to generate your final README.md:

```
You are an expert technical writer specializing in GitHub repository documentation. Please analyze the complete contents of this public GitHub repository and create a comprehensive, professional README.md file that serves as the project landing page.

REPOSITORY URL: [INSERT YOUR GITHUB REPO URL HERE]

REQUIREMENTS:
1. Create a compelling project title and description
2. Include clear sections for: Overview, Methodology, Results, Files Description, Usage Instructions
3. Highlight the persona prompt engineering techniques used
4. Summarize key findings from the evaluation rubric
5. Include relevant badges, formatting, and professional GitHub README styling
6. Make it accessible to both technical and non-technical audiences
7. Add appropriate sections like Installation, Contributing, License if relevant

STYLE: Professional, informative, engaging - suitable for academic portfolio or professional showcase.

Please generate a complete README.md file in markdown format.
```

---

## Final Repository Structure

```
github.com/<your-username>/iphs391_fall2025_miniproject-1_benchmarking-expert-chatbot-personas/
├── README.md                    # AI-generated project landing page (Step 7)
├── metaprompt_history.txt       # Step 2
├── prompt_persona.txt           # Step 2  
├── chat_history.md              # Step 3
├── chat_rubric_history.md       # Step 4
├── chat_rubric.txt              # Step 4
└── mp1_chatbot_report.docx      # Step 5
```

## File Descriptions

| Filename | Step | Description |
|----------|------|-------------|
| `README.md` | 7 | comprehensive project landing page and documentation |
| `metaprompt_history.txt` | 2 | Complete iteration history of persona prompt development |
| `prompt_persona.txt` | 2 | Final, refined chatbot persona prompt |
| `chat_history.md` | 3 | Best 10-turn conversation exported in markdown format |
| `chat_rubric_history.md` | 4 | ChatGPT conversation showing rubric development process |
| `chat_rubric.txt` | 4 | Final evaluation rubric with factor definitions, weights, and scoring guidelines |
| `mp1_chatbot_report.docx` | 5 | Comprehensive analysis following the 6-section structure above |

---

## Success Criteria
Your persona prompt will be evaluated on:
- **Complexity**: Sophisticated prompt engineering techniques beyond basic role-playing
- **Subtlety**: Nuanced behavioral specifications that emerge naturally in conversation
- **Creativity**: Novel approach to persona development with unique characteristics
- **Effectiveness**: Demonstrated quality in actual chat interactions as measured by your rubric
- **Documentation**: Professional, comprehensive README.md that effectively communicates your project