# Grading rubric — Homework 3: Trees, ensembles and support vector machines (5 points)

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy. **Module:** Weeks 4 and 5 — Trees and Ensembles; Margins, Similarity and Kernels.

The assignment has four tasks and each one is worth 1.25 points. Every task is judged on the same five components, which are the five steps of the reasoning loop used throughout the course.

| Component | What is expected | Points |
|---|---|---|
| Experiment | The setup is correct: the right data, the right model, the right validation scheme, fixed random seeds, and no cell that fails without saying so | 0.35 |
| Decision | One meaningful methodological choice, stated explicitly and justified, rather than simply announced | 0.25 |
| Evidence | A plot, table, metric or comparison that supports the claim directly, with readable labels and captions | 0.25 |
| Interpretation | What the evidence means, connected back to the idea the task is about | 0.25 |
| Counterfactual | A prediction of what would change if a parameter or an assumption changed, either verified experimentally or argued rigorously | 0.15 |

## What each task must show

- **Task 1, the complexity of a single tree.** Fit trees of maximum depth one, two, four, eight and unlimited. Plot training accuracy against five-fold cross-validated accuracy, identify where overfitting begins, then draw the depth-two tree and state one of its decision rules in ordinary language.
- **Task 2, a forest against a single tree.** Compare random forests of ten, fifty and two hundred trees against the best single tree. Explain why averaging many trees reduces variance, and reason through what would happen if the individual trees were made even more random than they already are.
- **Task 3, boosting, forests and a single tree.** Build one comparison table across the training, validation and test splits. State which model you would prefer and why, and say explicitly what further evidence would be needed to settle the question.
- **Task 4, support vector machines and feature scaling.** Compare a linear kernel with a radial basis function kernel, on raw features and on standardized ones. Run a grid over C and gamma, quantify exactly what scaling changes, then choose a final pipeline and justify the choice.

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
