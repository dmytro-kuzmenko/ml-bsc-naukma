# Homework 6 — Neural networks and the diagnosis of machine-learning systems

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy.
**Instructor:** Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).
**Module:** Weeks 8 and 9 — Optimization and Neural Networks; Diagnosing Machine-Learning Systems.
**Points:** 5. The six homework assignments are worth five points each and together account for 30 percent of the final grade.

## What this assignment is about

Build and train a small multilayer perceptron with a training loop you write yourself, choose a learning rate, produce overfitting deliberately by adding capacity and then bring it back under control, and diagnose finished models with learning curves and permutation importance.

## What the folder contains

- `ha06.ipynb` — the assignment notebook. Run it from the first cell to the last, write an answer in every cell marked **Your answer**, complete the disclosure of artificial-intelligence use at the top, and submit the notebook with its output preserved.
- `rubric.md` — the grading criteria, 1.25 points for each of the four tasks.

## The four tasks

- **Task 1 — A small multilayer perceptron.** Write the minibatch training loop by hand with fixed seeds. Plot the training and validation loss, report validation accuracy, and justify the architecture you chose. Then compare it against a network with a single hidden layer and explain the difference.
- **Task 2 — The learning rate.** Train with learning rates of 0.001, 0.1 and 1.0, and plot the loss curve for each. Name the failure mode that each rate produces, choose one rate and justify it, then verify what a decaying schedule changes.
- **Task 3 — Capacity and overfitting.** Widen the network on data whose labels have been deliberately corrupted. Identify the signature of overfitting in the curves, choose a width, and verify what early stopping or weight decay changes.
- **Task 4 — Diagnosis.** Plot learning curves over training sets of growing size and give a verdict of bias or variance. Run permutation importance on the breast-cancer dataset, name the features that matter most and interpret them, then add a duplicated, strongly correlated feature, verify what happens to the importances, and explain why.

## What you need in order to run it

Python together with `numpy`, `pandas`, `matplotlib` and `scikit-learn`; the course environment already provides all of them. Every dataset is either generated inside the notebook or loaded from the datasets that ship with scikit-learn. PyTorch is permitted for this assignment, and only for this assignment; everything still runs on an ordinary laptop processor. Every random process is seeded, so your results should reproduce closely. The notebook takes one to two minutes on an ordinary laptop processor, and no graphics card is required.

## How to open the notebook

- **On your own machine:** from the root of the repository run `jupyter notebook materials/homeworks/ha06/ha06.ipynb`, or open the same file in JupyterLab or Visual Studio Code.
- **In Google Colab:** open [https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha06/ha06.ipynb](https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha06/ha06.ipynb).

## How it is graded

Five points in total, 1.25 points for each of the four tasks. Every task is judged on the same five steps that structure every experiment in this course: the **experiment** you ran, the **decision** you made, the **evidence** you produced, the **interpretation** you drew from it, and the **counterfactual** you predicted. The full breakdown is in [the rubric](rubric.md).

Each student has five late days for all homework assignments taken together, and one late day covers up to 24 hours. Once those days are used up, the maximum score falls by 25 percent for every further 24 hours.

## A reminder about artificial-intelligence tools

Artificial-intelligence tools are permitted for this assignment. You must complete the disclosure block at the top of the notebook, describing which tools you used, what kind of help they gave you, a few representative prompts, and which parts of the work you verified or rewrote yourself. You remain responsible for every claim in the submission and must be able to explain any part of it in a short oral check. These tools, and any other outside help, are prohibited during the midterm and the final examination.
