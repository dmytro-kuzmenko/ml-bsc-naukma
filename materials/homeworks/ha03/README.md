# Homework 3 — Trees, ensembles and support vector machines

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy.
**Instructor:** Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).
**Module:** Weeks 4 and 5 — Trees and Ensembles; Margins, Similarity and Kernels.
**Points:** 5. The six homework assignments are worth five points each and together account for 30 percent of the final grade.

## What this assignment is about

Study how the depth of a decision tree drives overfitting, compare a random forest with gradient boosting under one fixed training, validation and test protocol, and measure how feature scaling and the two hyperparameters C and gamma change a support vector machine.

## What the folder contains

- `ha03.ipynb` — the assignment notebook. Run it from the first cell to the last, write an answer in every cell marked **Your answer**, complete the disclosure of artificial-intelligence use at the top, and submit the notebook with its output preserved.
- `rubric.md` — the grading criteria, 1.25 points for each of the four tasks.

## The four tasks

- **Task 1 — The complexity of a single tree.** Fit trees of maximum depth one, two, four, eight and unlimited. Plot training accuracy against five-fold cross-validated accuracy, identify where overfitting begins, then draw the depth-two tree and state one of its decision rules in ordinary language.
- **Task 2 — A forest against a single tree.** Compare random forests of ten, fifty and two hundred trees against the best single tree. Explain why averaging many trees reduces variance, and reason through what would happen if the individual trees were made even more random than they already are.
- **Task 3 — Boosting, forests and a single tree.** Build one comparison table across the training, validation and test splits. State which model you would prefer and why, and say explicitly what further evidence would be needed to settle the question.
- **Task 4 — Support vector machines and feature scaling.** Compare a linear kernel with a radial basis function kernel, on raw features and on standardized ones. Run a grid over C and gamma, quantify exactly what scaling changes, then choose a final pipeline and justify the choice.

## What you need in order to run it

Python together with `numpy`, `pandas`, `matplotlib` and `scikit-learn`; the course environment already provides all of them. The work uses the breast-cancer dataset that ships with scikit-learn, so nothing has to be downloaded. Every random process is seeded, so your results should reproduce closely. The notebook takes one to two minutes on an ordinary laptop processor, and no graphics card is required.

## How to open the notebook

- **On your own machine:** from the root of the repository run `jupyter notebook materials/homeworks/ha03/ha03.ipynb`, or open the same file in JupyterLab or Visual Studio Code.
- **In Google Colab:** open [https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha03/ha03.ipynb](https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha03/ha03.ipynb).

## How it is graded

Five points in total, 1.25 points for each of the four tasks. Every task is judged on the same five steps that structure every experiment in this course: the **experiment** you ran, the **decision** you made, the **evidence** you produced, the **interpretation** you drew from it, and the **counterfactual** you predicted. The full breakdown is in [the rubric](rubric.md).

Each student has five late days for all homework assignments taken together, and one late day covers up to 24 hours. Once those days are used up, the maximum score falls by 25 percent for every further 24 hours.

## A reminder about artificial-intelligence tools

Artificial-intelligence tools are permitted for this assignment. You must complete the disclosure block at the top of the notebook, describing which tools you used, what kind of help they gave you, a few representative prompts, and which parts of the work you verified or rewrote yourself. You remain responsible for every claim in the submission and must be able to explain any part of it in a short oral check. These tools, and any other outside help, are prohibited during the midterm and the final examination.
