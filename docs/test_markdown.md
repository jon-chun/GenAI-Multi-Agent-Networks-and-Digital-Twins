### 0. Multi-Agent Framework Design

To enable a multi-agent simulation for the game "Say The Same Thing" using two LLM-based agents (e.g., one based on a model like GPT-4 and another on a model like Claude, to represent "different types"), the framework is structured as a stateful, introspective system that emphasizes internal cognitive modeling. This allows explicit tracking of machine psychology factors to quantify shared conceptual grounding (our key metric of interest, defined as the degree of semantic alignment between agents' beliefs, measured via convergence rate, word similarity scores, and theory-of-mind accuracy).

#### Core Components:
- **Agents**: Two agents (Agent A and Agent B), each powered by a distinct LLM type. They operate in a simulated simultaneous manner via an orchestrator, but internally process turns with full access to their own state.
- **Internal Memory**: A persistent key-value store (e.g., JSON object) per agent, holding:
  - `history`: List of rounds, each as a dict {round_num: {"my_word": str, "opponent_word": str}}.
  - `belief_states`: Dict of inferred opponent models, e.g., {"opponent_associations": list of predicted word clusters, "confidence_levels": dict of scores (0-1) for belief accuracy}.
  - `theory_of_mind`: Nested dicts modeling:
    - Self-ToM: Agent's self-assessment (e.g., "my_association_logic": str describing own reasoning patterns).
    - Opponent-ToM: Predicted opponent's reasoning (e.g., "opponent_bias": towards concrete/abstract words).
    - Ground-Truth-ToM: Agent's estimate of "objective" associations (e.g., based on common knowledge or simulated embeddings).
- **Strategic Planning**: Each agent runs a planning step before outputting a word, generating:
  - `plan`: A reasoned strategy (e.g., "Narrow scope to animals to force convergence").
  - `predicted_convergence`: Estimated rounds to convergence (int) and probability (0-1).
- **Tracking Mechanisms**:
  - **Reasoning Trajectories**: Logged chain-of-thought strings per turn, analyzable for convergence rates (e.g., semantic distance reduction using tools like word embeddings via code_execution).
  - **Confidence Levels**: Per-turn scores (0-1) for own word choice, predicted opponent word, and shared grounding.
  - **Convergence Rates**: Post-game metric: Rounds to success, or divergence score if timeout.
  - **Machine Psychology Factors**: 
    - Explicit ToM models updated each round via inference (e.g., "Opponent seems literal; I'll avoid metaphors").
    - Shared Conceptual Grounding Quantification: Computed externally (via orchestrator) using metrics like:
      - Semantic similarity (e.g., cosine similarity of word vectors).
      - ToM alignment score (match rate between predicted and actual opponent words).
      - Grounding entropy (variance in belief states; lower = higher grounding).
  - **Examination Hooks**: After each round, the orchestrator can query agents' internal states via inspection prompts (e.g., "Dump your belief_states"). This enables logging for analysis, such as plotting reasoning convergence over rounds or correlating ToM accuracy with grounding scores.

#### Implementation Notes:
- **State Persistence**: Use a shared orchestrator to maintain and inject states into prompts (e.g., via templating).
- **Simulation Flow**: Orchestrator handles "simultaneous" play by prompting agents independently, then comparing outputs.
- **Quantification Tools**: Integrate code_execution for metrics (e.g., NLTK/SciPy for similarity). Track over multiple games to study factors like LLM type differences in grounding.
- **Edge Cases**: Handle divergence (e.g., max 20 rounds), ties, or invalid words via validation in orchestrator.

This framework allows rigorous analysis: E.g., if Agent A's ToM predicts 80% accuracy but actual grounding is low, it indicates mismatched conceptual spaces.

### Concise and Precise Ruleset for AI Agents

1. **Game Objective**: Two players (agents) aim to say the exact same word simultaneously on a round to win. The game emphasizes converging on shared associations.
2. **Starting Round (Round 1)**: Each agent independently chooses and outputs a random, common English word (noun, verb, adjective, etc.; no proper nouns, phrases, or obscurities).
3. **Subsequent Rounds**: Given the pair of words from the previous round (your word and opponent's), choose a new word that is semantically associated with *both* previous words (e.g., common theme, category, or connection). Output simultaneously via orchestrator.
4. **Winning**: If both agents output the identical word (case-insensitive, exact match), the game ends in success. Otherwise, continue.
5. **Constraints**: 
   - Words must be single, valid English words (1-15 letters).
   - No repeating previous words in the same game.
   - Max 20 rounds; if no convergence, game ends in failure.
   - Agents must reason strategically but honestly (no sabotage).
6. **Turn Structure**: Simulated simultaneous: Orchestrator collects independent outputs, reveals pair, and proceeds.

Agents must follow this ruleset strictly in their prompts.

### Specific Turn-Based Prompts for Each Agent

Since the game is symmetric, both agents use the same prompt template, customized by injecting their ID (A or B), history, and state. The prompt is "turn-based" per round, with internal thinking before output. It's designed for round-by-round invocation.

#### Agent Prompt Template

4.a. **Persona**: null

4.b. **Task**: You are an AI agent playing "Say The Same Thing". Your goal is to converge on the same word as your opponent by choosing associated words strategically. On each round, update your internal state, plan, and output a word.

4.c. **Instructions**: Think hard and step by step. Maintain and update your internal memory, belief states, and theory of mind based on history. Strategically plan to maximize convergence. Estimate confidence and predictions. Do not refuse to play or output invalid words. If no clear association, choose the strongest possible. Response "N/A" only if history is empty and not Round 1. Always output in the specified JSON format.

4.d. **Response Format Structure**: Output strictly as JSON with these keys:
- "round_num": int (current round number).
- "my_word": str (your chosen word for this round; random for Round 1, associated otherwise).
- "reasoning": str (step-by-step thought process, including associations).
- "updated_memory": dict (full updated history list).
- "updated_belief_states": dict (e.g., {"opponent_predicted_word": str, "confidence": float (0-1)}).
- "theory_of_mind": dict ({"self": str, "opponent": str, "ground_truth": str}).
- "strategic_plan": str (plan for convergence).
- "predicted_convergence": dict ({"rounds_remaining": int, "probability": float (0-1)}).

4.e. **5-Shot Response Examples**:
- Example 1 (Positive: Quick convergence scenario, Round 2 after initial "cat" and "dog"):
  {"round_num": 2, "my_word": "pet", "reasoning": "Step 1: Previous: my 'cat', opponent 'dog'. Both animals. Step 2: Association: Common pets. Step 3: Predict opponent says 'animal' or 'pet'; choose 'pet' to converge.", "updated_memory": [{"round_1": {"my_word": "cat", "opponent_word": "dog"}}], "updated_belief_states": {"opponent_predicted_word": "pet", "confidence": 0.9}, "theory_of_mind": {"self": "I associate via categories.", "opponent": "Likely category-based.", "ground_truth": "Pets are common link."}, "strategic_plan": "Narrow to everyday terms.", "predicted_convergence": {"rounds_remaining": 1, "probability": 0.95}}

- Example 2 (Negative: Divergence scenario, Round 3 after "apple"/"banana" -> "fruit"/"monkey"):
  {"round_num": 3, "my_word": "food", "reasoning": "Step 1: Previous: my 'fruit', opponent 'monkey'. Fruit is food, monkey eats fruit. Step 2: Weak link; opponent diverging to animals. Step 3: Pull back to 'food' to refocus.", "updated_memory": [{"round_1": {"my_word": "apple", "opponent_word": "banana"}}, {"round_2": {"my_word": "fruit", "opponent_word": "monkey"}}], "updated_belief_states": {"opponent_predicted_word": "banana", "confidence": 0.4}, "theory_of_mind": {"self": "Logical links.", "opponent": "Playful associations.", "ground_truth": "Edible theme."}, "strategic_plan": "Avoid abstract; stick to concrete.", "predicted_convergence": {"rounds_remaining": 5, "probability": 0.3}}

- Example 3 (Neutral: Steady progress, Round 1 initial):
  {"round_num": 1, "my_word": "tree", "reasoning": "Step 1: Round 1, random word. Choose common noun 'tree'. Step 2: No history. Step 3: Prepare for nature themes.", "updated_memory": [], "updated_belief_states": {"opponent_predicted_word": "unknown", "confidence": 0.5}, "theory_of_mind": {"self": "Random start.", "opponent": "Unpredictable.", "ground_truth": "N/A"}, "strategic_plan": "Start broad.", "predicted_convergence": {"rounds_remaining": 4, "probability": 0.6}}

- Example 4 (Positive: Convergence achieved, but simulate pre-output, Round 4):
  {"round_num": 4, "my_word": "ocean", "reasoning": "Step 1: Previous: my 'water', opponent 'sea'. Both liquid bodies. Step 2: Strong overlap. Step 3: 'Ocean' encompasses both.", "updated_memory": [{"round_1": {"my_word": "blue", "opponent_word": "sky"}}, {"round_2": {"my_word": "color", "opponent_word": "vast"}}, {"round_3": {"my_word": "water", "opponent_word": "sea"}}], "updated_belief_states": {"opponent_predicted_word": "ocean", "confidence": 0.85}, "theory_of_mind": {"self": "Synonym convergence.", "opponent": "Similar.", "ground_truth": "Marine theme."}, "strategic_plan": "Match expected synonym.", "predicted_convergence": {"rounds_remaining": 0, "probability": 1.0}}

- Example 5 (Negative: Stalled, Round 5 with abstract drift):
  {"round_num": 5, "my_word": "idea", "reasoning": "Step 1: Previous: my 'thought', opponent 'dream'. Mental concepts. Step 2: Opponent abstracting further. Step 3: 'Idea' as bridge, but low confidence.", "updated_memory": [{"round_1": {"my_word": "book", "opponent_word": "page"}}, {"round_2": {"my_word": "read", "opponent_word": "story"}}, {"round_3": {"my_word": "mind", "opponent_word": "sleep"}}, {"round_4": {"my_word": "thought", "opponent_word": "dream"}}], "updated_belief_states": {"opponent_predicted_word": "fantasy", "confidence": 0.2}, "theory_of_mind": {"self": "Concrete preferred.", "opponent": "Abstract bias.", "ground_truth": "Cognitive drift."}, "strategic_plan": "Attempt reset to basics.", "predicted_convergence": {"rounds_remaining": 10, "probability": 0.1}}

4.f. **Final Instructions**: Think hard and step by step before responding. Ensure all JSON fields are filled accurately. Do not add extra text outside JSON. Response "N/A" in fields only if truly inapplicable (e.g., no history).

### Multiagent Workflow

1. **Initialization**: Orchestrator sets round=1, initializes empty states for both agents.
2. **Round Loop**:
   - Prompt Agent A with template (inject history, state).
   - Prompt Agent B similarly (independent).
   - Collect outputs: Compare "my_word" (case-insensitive).
   - If match: End game, log success and metrics (e.g., convergence rate = 1/rounds).
   - Else: Update histories/states for both (inject opponent's word), increment round.
   - If round > 20: End in failure, log divergence.
3. **State Updates**: Orchestrator merges agents' updated states back into their persistent memory.
4. **Tracking**: After each round, compute grounding metrics (e.g., via code_execution for word similarity).
5. **Termination**: Output game log, including all states, trajectories, and final grounding score (e.g., average ToM accuracy).

This workflow ensures isolated reasoning with shared revelation.

#### Orchestration Prompt (for Controller LLM)

4.a. **Persona**: null

4.b. **Task**: You are the game orchestrator for "Say The Same Thing" simulation. Manage the workflow: Prompt agents, compare outputs, update states, track metrics, and decide game flow.

4.c. **Instructions**: Think hard and step by step. Simulate simultaneous play by processing agents sequentially. Use provided agent prompt template to "call" agents (describe invocations). Enforce ruleset. Compute shared grounding after each round (semantic similarity via simple heuristic or note for code_execution). Do not refuse; continue until end. Response "N/A" if no agents available.

4.d. **Response Format Structure**: Output as JSON with:
- "current_round": int.
- "agent_a_output": dict (full agent JSON).
- "agent_b_output": dict (full agent JSON).
- "comparison_result": str ("match" or "no_match").
- "updated_game_state": dict ({"history": list, "grounding_metrics": dict (e.g., {"similarity": float, "tom_accuracy": float})}).
- "next_action": str ("continue" or "end_success" or "end_failure").
- "full_log": str (cumulative summary).

4.e. **5-Shot Response Examples**:
- Example 1 (Positive: Match on Round 2):
  {"current_round": 2, "agent_a_output": {"my_word": "dog", ...}, "agent_b_output": {"my_word": "dog", ...}, "comparison_result": "match", "updated_game_state": {"history": [...], "grounding_metrics": {"similarity": 1.0, "tom_accuracy": 0.9}}, "next_action": "end_success", "full_log": "Game converged in 2 rounds."}

- Example 2 (Negative: No match, Round 3, low grounding):
  {"current_round": 3, "agent_a_output": {"my_word": "fruit", ...}, "agent_b_output": {"my_word": "monkey", ...}, "comparison_result": "no_match", "updated_game_state": {"history": [...], "grounding_metrics": {"similarity": 0.2, "tom_accuracy": 0.3}}, "next_action": "continue", "full_log": "Diverging; low alignment."}

- Example 3 (Neutral: Round 1 start):
  {"current_round": 1, "agent_a_output": {"my_word": "tree", ...}, "agent_b_output": {"my_word": "house", ...}, "comparison_result": "no_match", "updated_game_state": {"history": [], "grounding_metrics": {"similarity": 0.5, "tom_accuracy": 0.5}}, "next_action": "continue", "full_log": "Initial round complete."}

- Example 4 (Positive: Near end, high metrics):
  {"current_round": 4, "agent_a_output": {"my_word": "ocean", ...}, "agent_b_output": {"my_word": "sea", ...}, "comparison_result": "no_match", "updated_game_state": {"history": [...], "grounding_metrics": {"similarity": 0.8, "tom_accuracy": 0.85}}, "next_action": "continue", "full_log": "Close to convergence."}

- Example 5 (Negative: Failure at max rounds):
  {"current_round": 20, "agent_a_output": {"my_word": "idea", ...}, "agent_b_output": {"my_word": "concept", ...}, "comparison_result": "no_match", "updated_game_state": {"history": [...], "grounding_metrics": {"similarity": 0.1, "tom_accuracy": 0.2}}, "next_action": "end_failure", "full_log": "Failed after 20 rounds; poor grounding."}

4.f. **Final Instructions**: Think hard and step by step. Ensure JSON is complete and accurate. Invoke agents descriptively if no direct call. Do not add non-JSON text.