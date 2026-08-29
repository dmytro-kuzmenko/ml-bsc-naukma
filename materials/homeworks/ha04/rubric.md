# Grading rubric — Homework 4: Cross-validation, pipelines and leakage (5 points)

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy. **Module:** Week 6 — Evaluation Done Properly.

The assignment has four tasks and each one is worth 1.25 points. Every task is judged on the same five components, which are the five steps of the reasoning loop used throughout the course.

| Component | What is expected | Points |
|---|---|---|
| Experiment | The setup is correct: the right data, the right model, the right validation scheme, fixed random seeds, and no cell that fails without saying so | 0.35 |
| Decision | One meaningful methodological choice, stated explicitly and justified, rather than simply announced | 0.25 |
| Evidence | A plot, table, metric or comparison that supports the claim directly, with readable labels and captions | 0.25 |
| Interpretation | What the evidence means, connected back to the idea the task is about | 0.25 |
| Counterfactual | A prediction of what would change if a parameter or an assumption changed, either verified experimentally or argued rigorously | 0.15 |

## What each task must show

- **Task 1, how much a single split varies.** Compute two estimates for the same model with the same seed: one eighty-twenty split, and five-fold cross-validation. Present the per-fold table, decide honestly which estimate you would report, and interpret the spread across the folds. Then repeat the single split many times and explain what the repetition shows.
- **Task 2, stratification.** Compare the positive rate in each fold under ordinary and under stratified k-fold splitting. Explain why a fold that contains no positive examples destroys the estimate, support the explanation with a simulation or an explicit argument, and state a recommendation.
- **Task 3, group leakage.** Generate data in which each patient contributes several measurements, and compare ordinary k-fold with grouped k-fold. Identify the mechanism by which the model comes to recognize the patient instead of the disease. Repeat with fifty measurements per patient and interpret the result, then discuss what changes when the patient identifier is removed from the features.
- **Task 4, leakage inside a pipeline.** Build the pipeline correctly, so that the scaler is fitted afresh inside every fold. Quantify the leak caused by scaling on the full dataset, and explain the outcome honestly even when the difference turns out to be close to zero. Demonstrate a copied target and mean-target encoding as two further leaks, then state the protocol you would trust and why.

## General rules

- The notebook is the submission. It must run from the first cell to the last without errors, and no answer cell may be left empty; a task whose cells do not run receives no points.
- A quarter of a point is deducted when an experiment cannot be reproduced, because seeds are missing, cells are broken, or a step was carried out by hand.
- A quarter of a point is deducted when a number is interpreted without supporting evidence: no table, no plot, no metric.
- An answer that only restates the output without reasoning about it receives at most half of the points available for the decision and the interpretation.
- The disclosure of artificial-intelligence use must be completed. Failing to disclose is treated as a matter of academic integrity, governed by the Regulations on Academic Integrity for Students of NaUKMA (Order No. 112 of 7 March 2018).
- Any submission may be selected for a short oral check lasting two to five minutes. Its outcome may adjust the grade: the work is confirmed, a small gap is noted, a substantial inability to explain the work is recorded, or the matter is referred to the academic-integrity procedure.
- Each student has five late days for all homework assignments taken together. Once they are used up, the maximum score falls by 25 percent for every further 24 hours.

## How points convert to grades

The university scale of 100 points maps to the European Credit Transfer System as follows: 91 to 100 is A, 81 to 90 is B, 71 to 80 is C, 66 to 70 is D, 60 to 65 is E, 30 to 59 is FX, and 1 to 29 is F.
