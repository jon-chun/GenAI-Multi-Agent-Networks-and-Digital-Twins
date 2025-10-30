# Instructor Overview: CAPB for Mini-Project #3

## Purpose
This mini-CAPB is a lightweight adaptation of the **Composable AI Project Blueprint** for undergraduates completing a one-week AI assignment on **Retrieval-Augmented Generation (RAG)**.

It helps students produce a small, structured report blending **business reasoning**, **technical design**, and **evaluation planning**, grounded in real-world documentation standards.

---

## 1. Document Structure
| Section | Description | Type |
|----------|--------------|------|
| 1. Project Context | Define domain, users, and success metrics | Core |
| 2. Data & Constraints | Specify dataset and limitations | Core |
| 3. RAG Architecture | Present minimal viable architecture | Core |
| 4. Component Bakeoff | Compare tools and justify choices | Annex |
| 5. Evaluation | Describe test design and outcomes | Annex |
| 6. Risks & Future Work | Reflect on lessons and improvements | Annex |
| 7. References | Cite learning resources | Supporting |

---

## 2. How Students Should Use It
1. Pick a **realistic dataset** you can access (e.g., course materials, internal docs).  
2. Research simple **RAG stacks** using LangChain, LlamaIndex, or other open-source repos.  
3. Document your **design choices** using the provided YAML snippets.  
4. Run or simulate small-scale tests (even manual Q&A is fine).  
5. Submit the completed Markdown/PDF file.

Students are evaluated on how well they **analyze and justify** their choices — not whether the RAG system is production-ready.

---

## 3. Research Tips
- Use “Awesome RAG” repositories to discover example architectures and evaluation frameworks.  
- For each component, look up at least one alternative and state why you did *not* choose it.  
- Optional: review academic RAG papers (GraphRAG, LightRAG, Trustworthy RAG).  

---

## 4. Grading Rubric (/100 pts)

| Category | Criteria | Points |
|-----------|-----------|--------|
| **1. Problem & Use Case** | Clear domain, use case, success metrics | 15 |
| **2. Data & Constraints** | Defined corpus, constraints, cost/privacy | 15 |
| **3. Architecture** | Realistic MVP design with rationale | 20 |
| **4. Component Bakeoff** | At least 2 alternatives, justified choice | 15 |
| **5. Evaluation** | Real test plan or credible simulation | 15 |
| **6. Risks & Future Work** | Concrete edge cases and improvements | 10 |
| **7. Presentation** | Organization, valid YAML, clarity | 10 |
| **Total** |  | **100** |

---

## 5. Instructor Notes
- Accept concise Markdown or PDF submissions.  
- Encourage students to reuse content as starter material for future RAG projects.  
- Allow bonus credit (+5) for novel architectures or using automated evaluation tools (e.g., RAGAS).

---

## 6. Industry Alignment
The CAPB mirrors professional documentation practices used in AI engineering:
- **Architecture Decision Records (ADR):** for recording design rationales  
- **RFC Processes:** for collaborative review  
- **Solution Architecture Docs:** for combining technical and business aspects

By completing this, students practice the same reasoning steps used in real-world AI product development.

---

