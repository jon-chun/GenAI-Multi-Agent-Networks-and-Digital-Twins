# Mini-Project #3: Real-World RAG Implementation
**Course:** AI Mini-Project Series  
**Due Date:** Nov 5  
**Deliverable:** Completed CAPB Report

---

## 1. Project Context & Use Case
**Goal:** Identify a realistic RAG use case and clearly describe its purpose.

### 1.1 Problem / Context
- What domain or dataset did you select?  
- What problem or information gap does your RAG system address?

### 1.2 Primary Use Case
Select one:
- [ ] Q&A over policies/manuals  
- [ ] Troubleshooting / runbook lookup  
- [ ] Research assistant / document summarization  
- [ ] Other: ___________

### 1.3 Users / Audience
Who benefits from your RAG system (students, staff, customers, etc.)?

### 1.4 Success Criteria
List measurable goals (e.g., accuracy ≥ 80%, latency < 5s, citation quality).

```yaml
context:
  domain: "example domain"
  use_case: "example use case"
  users: ["target users"]
  success:
    - "≥80% correct answers"
    - "≤5s latency"
    - "must include source citations"
```

---

## 2. Data & Constraints
**Goal:** Define the dataset, data format, and project limitations.

### 2.1 Corpus Details
- Sources: links or repositories  
- Size: number of docs/pages  
- Formats: PDF, HTML, TXT, MD, etc.

### 2.2 Constraints
- [ ] local-only processing  
- [ ] limited budget  
- [ ] must support non-technical users  
- [ ] must protect private data  

```yaml
data_constraints:
  sources: ["source1", "source2"]
  formats: ["pdf"]
  size: "50-100 docs"
  local_only: true
  cost_limit: "free/OSS"
  latency_target: 5
  security: "basic login"
```

---

## 3. RAG Architecture (MVP)
**Goal:** Outline your RAG pipeline and design decisions.

### 3.1 Pipeline
Ingestion → Chunking → Embedding → Vector DB → Retrieval → LLM → Answer

### 3.2 Core Design Choices
- Chunking: fixed-size / semantic / heading-based  
- Embeddings: OpenAI / Local / Other  
- Vector DB: FAISS / Chroma / Weaviate / Other  
- Retrieval: vector-only / hybrid  
- LLM: hosted / local / fine-tuned  
- Citations: required?

```yaml
architecture_mvp:
  steps: ["ingest", "chunk", "embed", "retrieve", "generate"]
  chunking: "fixed"
  embeddings: "local"
  vector_db: "chroma"
  retrieval: "vector-only"
  llm: "local"
  citations: true
  rationale: "simple and efficient for small datasets"
```

---

## 4. Component Alternatives (Mini-Bakeoff)
**Goal:** Compare two or more tools per component and justify your choice.

| Component | Option A | Option B | Criteria | Selected | Why |
|------------|-----------|-----------|-----------|----------|-----|
| Vector DB | FAISS | Chroma | local, easy setup | Chroma | easier Python API |
| Reranker | None | Cohere | quality vs. cost | None | time limits |

```yaml
component_selection:
  vector_db:
    options: ["FAISS", "Chroma"]
    selected: "Chroma"
    reason: "easy setup"
  reranker:
    selected: "None"
    reason: "project time constraints"
```

---

## 5. Evaluation Plan & Results
**Goal:** Design and report simple test outcomes.

### 5.1 Test Set
10–20 questions derived from your domain.

### 5.2 Metrics
- % Correct Answers  
- % Cited Answers  
- Average Latency

```yaml
evaluation:
  questions: 15
  baseline:
    approach: "vector-only"
    correct: 11
    with_citations: 10
    avg_latency: 3.1
  notes: "works well except long documents"
```

---

## 6. Risks, Edge Cases & Future Work
**Goal:** Reflect on real-world concerns.

- Edge Cases: large PDFs, duplicates, acronyms  
- Risks: hallucinations, outdated data  
- Future Work: hybrid search, reranking, better monitoring

```yaml
improvements:
  - "add hybrid retrieval"
  - "add reranker"
  - "enable incremental reindexing"
```

---

## 7. References
List 3–5 resources you used (GitHub repos, papers, blogs).

---
