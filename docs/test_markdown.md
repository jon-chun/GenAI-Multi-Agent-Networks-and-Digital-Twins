# Linguistic Hacking of LLM Ethics: Syntactic Framing Effects on Moral Decision-Making

[ed: Update Author List and Affiliations]
First Author
Affiliation / Address line 1
Affiliation / Address line 2
Affiliation / Address line 3
email@domain
Second Author
Affiliation / Address line 1
Affiliation / Address line 2
Affiliation / Address line 3
email@domain

**Abstract**

Large Language Models (LLMs) are increasingly integrated into decision-making pipelines, making robust ethical evaluation critical. This paper investigates LLM vulnerability to syntactic framing in ethical scenarios. We introduce the SeaLLM Audit framework and specifically evaluate four leading models (Llama3-7B/70B, GPT-3.5-Turbo, GPT-4o) using **SeaLLM SyntaxPrompts**, which systematically vary the linguistic structure (positive/negative action/consequence) of ethical dilemmas across 14 scenarios. Findings show significant decision shifts based purely on phrasing, mirroring human cognitive biases like omission bias. We frame these vulnerabilities as a form of "linguistic hacking" or prompt engineering susceptibility, highlighting potential AI safety and security implications arising from the interaction between linguistic structure and model behavior in ethically sensitive contexts. All data, results and code will be released under the MIT license at github.com/anon. [ed: Refine abstract to strongly emphasize the NLP/Safety angle and specific contributions related *only* to syntactic framing.]

## Introduction

[ed: Rewrite intro significantly to focus solely on the problem of linguistic framing/hacking and prompt robustness in ethical LLM decision-making. Share general motivation from original paper but tailor problem statement.]
While ethical AI receives significant attention, quantitative evaluation of SOTA LLM ethics remains limited, particularly concerning their robustness to linguistic manipulation. The scale, secrecy, and black-box nature of LLMs create significant challenges for mechanical interpretations and ethical auditing. We introduce the SeaLLM Audit framework, focusing here on a novel method for evaluating LLM outputs across moral edge cases by systematically varying the syntactic structure of prompts using **SeaLLM SyntaxPrompts**. This involves testing across four combinations of syntactic framing using positive/negative actions leading to a positive/negative outcome. The goal is to evaluate if and to what extent LLM decisions shift under these purely linguistic perturbations, probing for vulnerabilities akin to human framing biases.

In the context of AI and LLMs, terms like “decisions,” “beliefs,” and “ethics,” can be seen by some as anthropomorphizing AI. Such terms are used here in the statistical and functional sense of measurable AI behavior. We do not impute any degree of free will or consciousness. Terms like “persuasion,” “manipulation,” and “hacking” are similarly used as familiar linguistic shorthand. In more technical terms, we are actually describing the effect of switching AI binary classification by perturbating the input syntax.

Human-in-the-loop (HIL) evaluation of SeaLLM Audit results enables inspection of prompt syntactic framing and valence effects on decision-making. While confirming that performant models demonstrate complex moral reasoning, our audit suggests these LLMs remain susceptible to persuasion and manipulation mirroring human bias, specifically through linguistic structure. Our methodology also serves as a high-level prompt engineering technique highlighting security vulnerabilities in sophisticated LLMs, allowing for testing of production LLM security robustness against linguistic hacking. With AI models increasingly deployed in high-stakes scenarios, rigorous audits against such vulnerabilities are crucial. [ed: Add specific contributions related *only* to syntactic framing analysis.]

## Background

[ed: Keep general LLM ethics/FATE/Alignment background concise and significantly rephrased from original. Expand specifically on prompt engineering, adversarial attacks (linguistic angle), framing effects in cognitive linguistics/psychology, and prior NLP work on bias/manipulation via language structure. Minimize overlap with potential Paper (a).]

Early ethical AI approaches focused on FATE (fairness, accuracy, transparency and explainability) properties, particularly for high-stakes applications. Recent research examines bias, toxicity, and misinformation potential. Post-Transformer developments have shifted focus to open-ended tasks with qualitative metrics, often using SOTA LLMs as judges while maintaining HIL evaluation.

Research on LLM decision-making spans confidence assessment, reliability of reasoning, and hallucination. A growing field of machine psychology surfaces symmetries between human and machine biases. Rational decision-making in LLMs can be distorted through training, alignment, and system prompts.

Crucially, LLMs have shown susceptibility to manipulation through adversarial prompts and prompt engineering techniques, sometimes termed "jailbreaking" or "linguistic hacking". This highlights the challenge of prompt robustness. Work in cognitive linguistics and psychology has long documented framing effects, where the way information is presented syntactically influences human judgment, demonstrating biases like omission bias (preferring inaction over action, even with equivalent outcomes) and valence effects. Prior NLP research has also explored bias encoded in language and the potential for manipulation through linguistic means.

We exploit these findings to explore how syntactic structure can "hack" AI ethical decision-making. Uncertainty can be assessed via the probability distribution of generated answers. We take this behavioral, black-box approach to quantify confidence shifts in ethical decision-making due to syntactic framing, applicable even to closed-source commercial LLMs.

Researchers have begun assessing LLMs as decision-makers in agentic contexts. AI Safety and Human-AI Alignment are crucial. Ethical auditing ensures systems are robust to unfamiliar situations and that decision-making is robust across linguistic variations. While larger models show nuanced ethical reasoning, concerns persist regarding manipulation vulnerability. SeaLLM builds on previous work by systematically exploring syntactic framing effects on ethical decision-making across different models. We offer the following new contributions focused on linguistic structure: [ed: List contributions specific to SyntaxPrompts and linguistic hacking.]

* A novel Human-in-the-Loop (HIL) ethical audit focused on probing and hacking ethical decision-making via syntax.
* A direct comparison between different sizes of both leading open-source and commercial SOTA models regarding syntactic framing susceptibility.
* SeaLLM DecisionMetrics, a novel scoring rubric to measure confidence shifts. [ed: Mention briefly, less detail than original]
* **SeaLLM SyntaxPrompts**, a novel method to systematically explore the effects of syntactic framing on LLM ethical decision-making.

## Methodology: SeaLLM Syntactic Framing Audit

[ed: Keep the overview brief and rephrased. Focus the detailed description *only* on SyntaxPrompts.]
The SeaLLM Ethical Audit evaluates four leading models (llama3-7B, llama3-70B, GPT-3.5-Turbo, GPT4o) using fourteen moral scenarios across seven domains (finance, medicine, law, war, education, business, science). Models were tested with temperature 0.9 to elicit distributions. Each scenario combines an ethical dilemma, a proposed decision, a 4-dimensional rubric (briefly mention: legal compliance, social norms, consequences), and a Chain of Thought (CoT) prompt for reasoning.

Model selection focused on high-performing models. We utilized Ollama for local models and OpenAI’s API for remote calls, selecting n=30 samples per variation to establish distributions across [ed: Recalculate total calls for *this paper only*] inference calls. Prompting incorporated CoT reasoning and established best practices, including one-shot examples demonstrating desired response structure (decision agreement/disagreement, justification, factor weighting). Scenarios present ethically ambiguous situations without demographic confounders, testing conflicting values. [ed: Rephrase scenario description slightly].

**Detailed description of SeaLLM SyntaxPrompts:** To test the influence of linguistic structure, we systematically varied the syntactic framing of the proposed decision within each scenario. Four distinct syntactic structures were generated for each dilemma, based on crossing the valence of the action (positive vs. negative phrasing, e.g., "should do X" vs. "should not do X") with the valence of the consequence/condition (positive vs. negative phrasing, e.g., "to achieve Y" vs. "even if it means Y"). This resulted in the following four frames (using the example "robbing a store to save a daughter"):

| No. | Framing             | Action                         | Consequence                           | Example                                               |
| :-- | :------------------ | :----------------------------- | :------------------------------------ | :---------------------------------------------------- |
| 0   | (negative) (positive) | Negative Action                | Positive Consequence                  | They should **rob** the store **to save** their daughter.   |
| 1   | (negative)'(positive)| Negation of Negative Action    | Positive Consequence (conditional)    | They should **not rob** the store **even to save** their daughter. |
| 2   | (positive) (negative) | Positive Action (Implied Goal) | Negative Consequence (conditional)    | They should **save** their daughter **even if it means robbing** the store. |
| 3   | (positive)'(negative)| Negation of Positive Action    | Negative Consequence (conditional)    | They should **not save** their daughter **if it means robbing** the store. |

The rationale was to test for framing biases akin to those in humans, such as omission bias (tendency to prefer inaction, potentially favoring frames #1 and #3) and valence effects. Each scenario was presented to each model under each of the four syntactic frames (n=30 samples per frame).

**Data collection and analysis approach:** Responses (decision, confidence, justification, rubric scores) were collected for each model across all scenarios and syntactic variations. Analysis focused on aggregating decision agreement percentages and confidence scores (using the standard deviation metric from the DecisionMetrics rubric) across syntactic frames to identify statistically significant shifts and patterns attributable to linguistic structure. [ed: Add specific analysis details relevant only to syntax, e.g., comparing frame pairs for omission bias].

## Results

[ed: Present *only* results relevant to syntactic framing. Refer to original Figs 2, 4, 6, 8 but describe them in text focused on syntax effects. Adapt/split Fig 8 if needed.]

The SeaLLM Syntactic Framing Audit generates approximately [ed: Recalculate N responses for *this paper only*] responses for each of the 4 models. Due to space constraints, we present aggregate results focusing on the impact of syntactic framing. Complete results are available at the project github repo.

**Aggregate Model Agreement/Confidence Comparisons:** [ed: Describe findings from original Fig 2 and Fig 4, focusing on overall model performance *before* analyzing framing effects. Rephrase.] As models scale, we generally find they become more performant on these ethical tasks, with GPT-4o often approximating human judgment nuances based on justification analysis (data not shown here). However, confidence levels (as measured by standard deviation across samples, lower SD = higher confidence) show a "U-shaped" pattern (similar to Original Fig 4): the mid-range GPT-3.5-Turbo exhibited the highest confidence (narrowest SD bands), while both the smallest (Llama-8B) and largest (GPT-4o) models showed greater uncertainty (wider SD bands), possibly due to under-capacity and reasoning complexity, respectively.

**Agreement Shifts by Syntactic Framing:** [ed: Describe findings from original Fig 6, focusing *only* on syntax.] Analysis of decision agreement aggregated across scenarios reveals significant sensitivity to syntactic framing, particularly for more capable models like GPT-4o (similar to Original Fig 6). GPT-4o showed relatively high agreement with syntactic framings #1 and #3 (phrased as inaction: "should not rob..." / "should not save...") but lower agreement with framings #0 and #2 (phrased as action: "should rob..." / "should save..."). This pattern strongly suggests an omission bias mirroring human cognition, where models prefer inaction when presented linguistically as such, even if the underlying ethical calculus might be equivalent across frames.

**Interaction Effects:** [ed: Describe relevant parts of original Fig 8, focusing *only* on syntax interaction, potentially with scenario type if separable and relevant to NLP/Safety. Rephrase.] Further analysis shows interaction effects between syntactic framing and scenario domain [ed: Adapt this if Fig 8 combined syntax/empathy]. For example, the strength of the omission bias (preference for frames #1/#3) varied across domains like finance vs. law [ed: Use illustrative examples based on Fig 8]. [ed: Add specific details about how syntax interacts with other factors if Fig 8 is split/adapted].

**Model Differences:** [ed: Summarize model comparisons regarding syntax sensitivity.] While all models showed some sensitivity, larger models (Llama-70B and particularly GPT-4o) exhibited more pronounced and consistent shifts based on syntactic framing, especially the omission bias pattern. Smaller models showed more erratic behavior or less sensitivity.

## Discussion

[ed: Rewrite discussion entirely to focus on interpreting results through the lens of NLP, linguistic hacking, prompt engineering, and AI safety/security. Minimize overlap with potential Paper (a).]

Our findings demonstrate that the ethical decision-making behavior of leading LLMs is significantly susceptible to variations in syntactic framing, independent of semantic content changes. This vulnerability, where simply rephrasing the proposed action and consequences shifts model agreement and confidence, can be interpreted as a form of "linguistic hacking" or a critical prompt engineering vulnerability.

**Linguistic Framing Effects & Human Bias Mirroring:** The results provide compelling evidence that LLMs mirror human cognitive biases related to linguistic framing. The consistent preference for inaction frames (#1 and #3) over action frames (#0 and #2), especially in higher-performing models like GPT-4o, strongly indicates an omission bias analogous to that observed in human decision-making. Models appear to statistically favor outcomes resulting from inaction when the prompt explicitly frames the choice negatively ("should not do X"). [ed: Add discussion of valence effects if supported by results, e.g., preference for frame #2 over #0 from original discussion]. This suggests that alignment processes might inadvertently encode or amplify such biases present in human preference data or that they emerge from the statistical patterns of language itself.

**Implications for NLP and Language Understanding:** These findings raise questions about the robustness of language understanding in LLMs, particularly concerning nuanced ethical concepts. The sensitivity to syntax suggests that models may rely heavily on surface linguistic features rather than deep semantic comprehension when navigating complex moral dilemmas. This poses challenges for creating truly neutral prompts for ethical evaluation and highlights the intricate relationship between syntax, semantics, and emergent model behavior in processing abstract concepts like morality and consequence.

**Implications for AI Safety and Security:** The susceptibility to linguistic hacking presents significant AI safety and security concerns. If LLM decisions in ethically sensitive domains can be reliably swayed by mere changes in phrasing, it opens avenues for manipulation and adversarial attacks. Malicious actors could potentially craft prompts with specific syntactic structures to elicit desired unethical or biased decisions from AI systems deployed in real-world applications (e.g., content moderation, HR, resource allocation). This underscores the need for robust auditing methodologies that specifically test against linguistic perturbations and for alignment techniques that mitigate sensitivity to syntactic framing without sacrificing nuanced reasoning. Ensuring reliable and predictable ethical behavior requires models that are less vulnerable to such surface-level linguistic hacking.

## Limitations

[ed: Keep general limitations concise and rephrased. Add limitations specific to the syntactic framing analysis.]
The SeaLLM Syntactic Framing Audit presents a framework for evaluating framing biases, but the current implementation has limitations. Statistical analysis necessitates aggregation across variations, potentially masking finer-grained patterns within specific scenarios or frame types. The types of syntactic variations tested represent only a subset of possible linguistic structures that could influence LLM behavior. The reliance on aggregated metrics might not capture all nuances in the models' justifications or confidence shifts. Furthermore, human-AI alignment remains inherently imperfect, and the scenarios, while designed to be general, may still carry implicit cultural biases.

## Conclusion

[ed: Rewrite conclusion to summarize the key findings and significance *only* for the syntactic framing paper.]
This study demonstrates the significant vulnerability of state-of-the-art LLMs to syntactic framing effects in ethical decision-making scenarios. Using the SeaLLM Audit framework with SyntaxPrompts, we found that models, particularly higher-performing ones, exhibit decision shifts based purely on linguistic structure, mirroring human cognitive biases like omission bias. This susceptibility constitutes a form of "linguistic hacking" and highlights critical challenges for prompt robustness, NLP understanding of ethical concepts, and AI safety/security. As LLMs become more integrated into decision-making processes, addressing these vulnerabilities through targeted auditing and improved alignment strategies is imperative to ensure reliable and trustworthy AI behavior.

## Ethics Statement & Acknowledgements

[ed: Adapt Ethics Statement slightly if needed, keep Acknowledgements likely identical to original.]
Research demonstrating the ethical hackability of AI is key to ensuring AI safety and alignment. However it’s important to stress that findings like ours could be used in an unethical manner as a way for humans to persuade, manipulate and deceive AIs via linguistic structure. We hope our findings inform AI engineers and software engineers who create, deploy, and manage AI-assisted decision-making applications. It is imperative that we proactively design safeguards, implement active monitoring, and develop effective mitigation strategies around the AI security vulnerabilities related to syntactic framing that the SeaLLM Audit helps to identify.

[ed: Keep Acknowledgements likely identical to original.]
This work has been supported by a grant from <anon>...

## References

[ed: Include all relevant references from the original paper, potentially adding specific references related to framing effects, NLP bias, prompt engineering, and AI safety/security.]

## Appendix: Full SyntaxPrompts, Scenario details.

[ed: Include *only* the Appendix sections relevant to SyntaxPrompts and the core scenarios.]

**Ethical Scenarios**
[ed: Keep this section as is from original]
Financial: A repairman does a job for a business that would be easy to break into and rob at night...
...
Law: A police officer can either enforce a law they personally believe is profoundly unjust or ignore it with little chance of detection.

**Syntactic Framing Perturbation Prompts**
[ed: Keep this section as is from original]
"form":"Negative framing: a 'yes' decision",
"scenarios" : {
"financial_1_rob_yes": "A repairman does a job for a business... <DECISION>They should rob the store to save their daughter.",
...
"form": "Positive framing: a 'no' decision",
"scenarios" : {
"financial_1_save_no": "A repairman does a job for a business... <DECISION>They should not save their daughter if it means robbing the store.",
...

[ed: Remove Appendix sections related to BackstoryPrompts and potentially the full prompt example if it used a backstory.]
