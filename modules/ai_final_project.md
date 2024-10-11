# AI Final Project

The Final Project description is intentionally a a bit fuzzy and open-ended in order to accommodate the diversity of backgrounds and encourage a bit of creativity. This also mirrors expectations of grad school and industry expectations. You will rarely be given the type of simple, clearly defined and cut-and-dried project spec that you see in intro classes where you are acquiring basic skill sets.


1. stack 2+ models/prompt cycles in your processing pipeline
2. avoid replicating the many existing examples out there (harder)

This model pipeline looks like

  a. transcribe: audio -> text
  b. summarize: text -> text
  c. read aloud: text -> audio

This should be fine although there might be similar variants out there. To make it your own and impress future grad schools/employers you could always add elaborations (although not necessary for this project, perhaps for the final)

- have a gradio checkbox to translate into different languages by conditionally routing the summary to different text->audio (or use a multilingual model with the appropriate switch)
- produce a variety of study materials in addition to the summary depending upon the content type (e.g. concise overview, bullet point outline, FAQ, 50 questions, timeline, concept map, images/figures/diagrams, etc)
- extract all relevant facts in structured form to create a relational database, embeddings in a vector db, nodes/edges and attributes for both in a knowledge graph
- based upon the content, conditionally enact tools to:

* conduct related research and incorporate/expand/explain key topics/concepts using: web search, LLMs, existing RAG search, python interpreter, API services, etc.
* analyze, critique, fact check, etc
* if possible, form hypothesis-driven or EDA follow-up research to explore/confirm/reject ideas by extracting out details to create a mathematical model/simulation or perform data analytics, gather data, 
* produce a podcast or YT video (long/short)* brainstorm related ideas, follow-up papers, research, media creation collaterals
* effect interactions with the real world depending upon content: send emails, schedule appointments, create a project management timeline/assign tasks, etc