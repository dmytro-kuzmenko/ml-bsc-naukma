# Homework 2 — Classification and evaluation metrics

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy.
**Instructor:** Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).
**Module:** Week 3 — Learning a Boundary (Classification).
**Points:** 5. The six homework assignments are worth five points each and together account for 30 percent of the final grade.

## What this assignment is about

Train a logistic regression model and a nearest-neighbor classifier on an imbalanced two-class problem, choose an operating threshold under asymmetric costs, read a receiver operating characteristic curve and a precision-recall curve, and choose the number of neighbors on properly scaled features.

## What the folder contains

- `ha02.ipynb` — the assignment notebook. Run it from the first cell to the last, write an answer in every cell marked **Your answer**, complete the disclosure of artificial-intelligence use at the top, and submit the notebook with its output preserved.
- `rubric.md` — the grading criteria, 1.25 points for each of the four tasks.

## The four tasks

- **Task 1 — Baseline and metrics.** Train logistic regression and a nearest-neighbor classifier with five neighbors. Show both confusion matrices and report accuracy, precision, recall, specificity and the F1 score. Compute the baseline that always predicts the majority class, and use it to argue why accuracy is misleading on this data.
- **Task 2 — The decision threshold and the operating point.** Sweep the decision threshold from 0.05 to 0.95 over the probabilities produced by logistic regression, and plot precision, recall and the F1 score against it. Choose an operating threshold and justify it against a cost scenario in which a missed positive case is ten times as expensive as a false alarm.
- **Task 3 — Curves and prevalence.** Plot the receiver operating characteristic curve and the precision-recall curve, and interpret the area under each of them. Then repeat the experiment with a positive rate of two percent, and quantify why the two curves respond so differently to the change.
- **Task 4 — Choosing the number of neighbors.** Evaluate one, three, five, eleven, thirty-one and one hundred and one neighbors on training and validation accuracy and on the F1 score. Draw the decision boundary for two of those values, choose one on the validation evidence, and verify what feature scaling changes for a single value of the parameter and why.

## What you need in order to run it

Python together with `numpy`, `pandas`, `matplotlib` and `scikit-learn`; the course environment already provides all of them. The two-class dataset is synthetic and is generated inside the notebook, so nothing has to be downloaded. Every random process is seeded, so your results should reproduce closely. The notebook takes one to two minutes on an ordinary laptop processor, and no graphics card is required.

## How to open the notebook

- **On your own machine:** from the root of the repository run `jupyter notebook materials/homeworks/ha02/ha02.ipynb`, or open the same file in JupyterLab or Visual Studio Code.
- **In Google Colab:** open [https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha02/ha02.ipynb](https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha02/ha02.ipynb).

## How it is graded

Five points in total, 1.25 points for each of the four tasks. Every task is judged on the same five steps that structure every experiment in this course: the **experiment** you ran, the **decision** you made, the **evidence** you produced, the **interpretation** you drew from it, and the **counterfactual** you predicted. The full breakdown is in [the rubric](rubric.md).

Each student has five late days for all homework assignments taken together, and one late day covers up to 24 hours. Once those days are used up, the maximum score falls by 25 percent for every further 24 hours.

## A reminder about artificial-intelligence tools

Artificial-intelligence tools are permitted for this assignment. You must complete the disclosure block at the top of the notebook, describing which tools you used, what kind of help they gave you, a few representative prompts, and which parts of the work you verified or rewrote yourself. You remain responsible for every claim in the submission and must be able to explain any part of it in a short oral check. These tools, and any other outside help, are prohibited during the midterm and the final examination.
