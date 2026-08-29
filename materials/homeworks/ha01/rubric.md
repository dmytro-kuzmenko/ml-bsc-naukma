# Grading rubric — Homework 1: Regression and generalization (5 points)

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy. **Module:** Week 2 — Learning a Function (Regression).

The assignment has four tasks and each one is worth 1.25 points. Every task is judged on the same five components, which are the five steps of the reasoning loop used throughout the course.

| Component | What is expected | Points |
|---|---|---|
| Experiment | The setup is correct: the right data, the right model, the right validation scheme, fixed random seeds, and no cell that fails without saying so | 0.35 |
| Decision | One meaningful methodological choice, stated explicitly and justified, rather than simply announced | 0.25 |
| Evidence | A plot, table, metric or comparison that supports the claim directly, with readable labels and captions | 0.25 |
| Interpretation | What the evidence means, connected back to the idea the task is about | 0.25 |
| Counterfactual | A prediction of what would change if a parameter or an assumption changed, either verified experimentally or argued rigorously | 0.15 |

## What each task must show

- **Task 1, baseline and the complexity curve.** Fit polynomials of degree 1, 2, 3, 5, 9 and 15 inside a scikit-learn pipeline. Plot training and validation mean squared error against the degree, say with numbers where the model underfits and where it overfits, compute the constant baseline that always predicts the mean of the training targets, and explain what that baseline is for.
- **Task 2, choosing a model on validation data.** Choose the degree by validation error, explain what each of the three splits is for, and use the test set exactly once. Then refit the whole curve with 30 training samples and with 200, and interpret the difference between the two curves.
- **Task 3, regularization and residuals.** Sweep the ridge penalty over degree-15 features with standardized inputs and justify the penalty you settle on. Read the residual plots of the underfitted, the overfitted and the regularized model, and explain why visible structure in a residual plot means the model has missed part of the signal.
- **Task 4, counterfactuals and synthesis.** Predict how a higher noise level would change the result, then verify the prediction numerically. Discuss what would look different if mean absolute error were reported instead of mean squared error. Close with a short synthesis that ties complexity, dataset size, regularization and noise together.

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
