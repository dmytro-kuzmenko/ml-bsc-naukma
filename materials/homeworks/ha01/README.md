# Homework 1 — Regression and generalization

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy.
**Instructor:** Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).
**Module:** Week 2 — Learning a Function (Regression).
**Points:** 5. The six homework assignments are worth five points each and together account for 30 percent of the final grade.

## What this assignment is about

Fit polynomial regression models of steadily increasing complexity, choose the degree on a validation set, hold variance down with ridge regularization, and read the quality of the fit from the residuals.

## What the folder contains

- `ha01.ipynb` — the assignment notebook. Run it from the first cell to the last, write an answer in every cell marked **Your answer**, complete the disclosure of artificial-intelligence use at the top, and submit the notebook with its output preserved.
- `rubric.md` — the grading criteria, 1.25 points for each of the four tasks.

## The four tasks

- **Task 1 — Baseline and the complexity curve.** Fit polynomials of degree 1, 2, 3, 5, 9 and 15 inside a scikit-learn pipeline. Plot training and validation mean squared error against the degree, say with numbers where the model underfits and where it overfits, compute the constant baseline that always predicts the mean of the training targets, and explain what that baseline is for.
- **Task 2 — Choosing a model on validation data.** Choose the degree by validation error, explain what each of the three splits is for, and use the test set exactly once. Then refit the whole curve with 30 training samples and with 200, and interpret the difference between the two curves.
- **Task 3 — Regularization and residuals.** Sweep the ridge penalty over degree-15 features with standardized inputs and justify the penalty you settle on. Read the residual plots of the underfitted, the overfitted and the regularized model, and explain why visible structure in a residual plot means the model has missed part of the signal.
- **Task 4 — Counterfactuals and synthesis.** Predict how a higher noise level would change the result, then verify the prediction numerically. Discuss what would look different if mean absolute error were reported instead of mean squared error. Close with a short synthesis that ties complexity, dataset size, regularization and noise together.

## What you need in order to run it

Python together with `numpy`, `pandas`, `matplotlib` and `scikit-learn`; the course environment already provides all of them. Everything runs on a one-dimensional synthetic dataset that the notebook generates itself, so nothing has to be downloaded. Every random process is seeded, so your results should reproduce closely. The notebook takes one to two minutes on an ordinary laptop processor, and no graphics card is required.

## How to open the notebook

- **On your own machine:** from the root of the repository run `jupyter notebook materials/homeworks/ha01/ha01.ipynb`, or open the same file in JupyterLab or Visual Studio Code.
- **In Google Colab:** open [https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha01/ha01.ipynb](https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha01/ha01.ipynb).

## How it is graded

Five points in total, 1.25 points for each of the four tasks. Every task is judged on the same five steps that structure every experiment in this course: the **experiment** you ran, the **decision** you made, the **evidence** you produced, the **interpretation** you drew from it, and the **counterfactual** you predicted. The full breakdown is in [the rubric](rubric.md).

Each student has five late days for all homework assignments taken together, and one late day covers up to 24 hours. Once those days are used up, the maximum score falls by 25 percent for every further 24 hours.

## A reminder about artificial-intelligence tools

Artificial-intelligence tools are permitted for this assignment. You must complete the disclosure block at the top of the notebook, describing which tools you used, what kind of help they gave you, a few representative prompts, and which parts of the work you verified or rewrote yourself. You remain responsible for every claim in the submission and must be able to explain any part of it in a short oral check. These tools, and any other outside help, are prohibited during the midterm and the final examination.
