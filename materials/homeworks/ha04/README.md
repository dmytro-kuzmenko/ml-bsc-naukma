# Homework 4 — Cross-validation, pipelines and leakage

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy.
**Instructor:** Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).
**Module:** Week 6 — Evaluation Done Properly.
**Points:** 5. The six homework assignments are worth five points each and together account for 30 percent of the final grade.

## What this assignment is about

See why a single training and test split is a noisy estimate, how k-fold cross-validation steadies it, why stratified and grouped splits exist at all, and how to keep preprocessing and tuning inside a pipeline that cannot leak.

## What the folder contains

- `ha04.ipynb` — the assignment notebook. Run it from the first cell to the last, write an answer in every cell marked **Your answer**, complete the disclosure of artificial-intelligence use at the top, and submit the notebook with its output preserved.
- `rubric.md` — the grading criteria, 1.25 points for each of the four tasks.

## The four tasks

- **Task 1 — How much a single split varies.** Compute two estimates for the same model with the same seed: one eighty-twenty split, and five-fold cross-validation. Present the per-fold table, decide honestly which estimate you would report, and interpret the spread across the folds. Then repeat the single split many times and explain what the repetition shows.
- **Task 2 — Stratification.** Compare the positive rate in each fold under ordinary and under stratified k-fold splitting. Explain why a fold that contains no positive examples destroys the estimate, support the explanation with a simulation or an explicit argument, and state a recommendation.
- **Task 3 — Group leakage.** Generate data in which each patient contributes several measurements, and compare ordinary k-fold with grouped k-fold. Identify the mechanism by which the model comes to recognize the patient instead of the disease. Repeat with fifty measurements per patient and interpret the result, then discuss what changes when the patient identifier is removed from the features.
- **Task 4 — Leakage inside a pipeline.** Build the pipeline correctly, so that the scaler is fitted afresh inside every fold. Quantify the leak caused by scaling on the full dataset, and explain the outcome honestly even when the difference turns out to be close to zero. Demonstrate a copied target and mean-target encoding as two further leaks, then state the protocol you would trust and why.

## What you need in order to run it

Python together with `numpy`, `pandas`, `matplotlib` and `scikit-learn`; the course environment already provides all of them. Every dataset is either generated inside the notebook or loaded from the datasets that ship with scikit-learn, so nothing has to be downloaded. Every random process is seeded, so your results should reproduce closely. The notebook takes about one minute on an ordinary laptop processor, and no graphics card is required.

## How to open the notebook

- **On your own machine:** from the root of the repository run `jupyter notebook materials/homeworks/ha04/ha04.ipynb`, or open the same file in JupyterLab or Visual Studio Code.
- **In Google Colab:** open [https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha04/ha04.ipynb](https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha04/ha04.ipynb).

## How it is graded

Five points in total, 1.25 points for each of the four tasks. Every task is judged on the same five steps that structure every experiment in this course: the **experiment** you ran, the **decision** you made, the **evidence** you produced, the **interpretation** you drew from it, and the **counterfactual** you predicted. The full breakdown is in [the rubric](rubric.md).

Each student has five late days for all homework assignments taken together, and one late day covers up to 24 hours. Once those days are used up, the maximum score falls by 25 percent for every further 24 hours.

## A reminder about artificial-intelligence tools

Artificial-intelligence tools are permitted for this assignment. You must complete the disclosure block at the top of the notebook, describing which tools you used, what kind of help they gave you, a few representative prompts, and which parts of the work you verified or rewrote yourself. You remain responsible for every claim in the submission and must be able to explain any part of it in a short oral check. These tools, and any other outside help, are prohibited during the midterm and the final examination.
