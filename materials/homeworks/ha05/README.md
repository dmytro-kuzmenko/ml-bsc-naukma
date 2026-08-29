# Homework 5 — Clustering and principal component analysis

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy.
**Instructor:** Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).
**Module:** Week 7 — Finding Structure Without Labels.
**Points:** 5. The six homework assignments are worth five points each and together account for 30 percent of the final grade.

## What this assignment is about

Choose the number of clusters from inertia and the silhouette score, see how feature scaling changes k-means, use principal component analysis for both visualization and compression, and recognize the point at which distance-based clustering fails and a density-based method takes over.

## What the folder contains

- `ha05.ipynb` — the assignment notebook. Run it from the first cell to the last, write an answer in every cell marked **Your answer**, complete the disclosure of artificial-intelligence use at the top, and submit the notebook with its output preserved.
- `rubric.md` — the grading criteria, 1.25 points for each of the four tasks.

## The four tasks

- **Task 1 — k-means and the number of clusters.** Compute inertia and the silhouette score for every number of clusters from two to ten, and plot both curves. Decide on a number and discuss honestly where the evidence is ambiguous. Then repeat the experiment with heavily overlapping clusters and interpret what changes.
- **Task 2 — Feature scaling.** Run k-means on raw and on standardized clusters that are stretched along one direction. Report the adjusted Rand index against the ground truth, visualize the assignments, and state when scaling is the right decision. Then verify what happens when only one of the features is scaled.
- **Task 3 — Principal component analysis on handwritten digits.** Plot the explained variance, the scree curve and the cumulative variance, and report how many components are needed to reach ninety and ninety-five percent of the variance. Project the digits into two dimensions, color them by class, and interpret which classes overlap. Verify the difference between raw and standardized pixels.
- **Task 4 — Clustering after projection, and where it breaks.** Compare k-means in the original feature space with k-means in the projected space using the adjusted Rand index. Use a ring-shaped dataset to show where k-means fails and a density-based method succeeds. Close by synthesizing when the projection serves visualization, when it serves compression, and when it belongs in the preprocessing pipeline.

## What you need in order to run it

Python together with `numpy`, `pandas`, `matplotlib` and `scikit-learn`; the course environment already provides all of them. Every dataset is either generated inside the notebook or loaded from the datasets that ship with scikit-learn, so nothing has to be downloaded. Every random process is seeded, so your results should reproduce closely. The notebook takes about one minute on an ordinary laptop processor, and no graphics card is required.

## How to open the notebook

- **On your own machine:** from the root of the repository run `jupyter notebook materials/homeworks/ha05/ha05.ipynb`, or open the same file in JupyterLab or Visual Studio Code.
- **In Google Colab:** open [https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha05/ha05.ipynb](https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/homeworks/ha05/ha05.ipynb).

## How it is graded

Five points in total, 1.25 points for each of the four tasks. Every task is judged on the same five steps that structure every experiment in this course: the **experiment** you ran, the **decision** you made, the **evidence** you produced, the **interpretation** you drew from it, and the **counterfactual** you predicted. The full breakdown is in [the rubric](rubric.md).

Each student has five late days for all homework assignments taken together, and one late day covers up to 24 hours. Once those days are used up, the maximum score falls by 25 percent for every further 24 hours.

## A reminder about artificial-intelligence tools

Artificial-intelligence tools are permitted for this assignment. You must complete the disclosure block at the top of the notebook, describing which tools you used, what kind of help they gave you, a few representative prompts, and which parts of the work you verified or rewrote yourself. You remain responsible for every claim in the submission and must be able to explain any part of it in a short oral check. These tools, and any other outside help, are prohibited during the midterm and the final examination.
