# Practical sessions 1 to 10

Machine Learning, National University of Kyiv-Mohyla Academy. Instructor: Dmytro Kuzmenko ([kuzmenko@ukma.edu.ua](mailto:kuzmenko@ukma.edu.ua)).

## What these sessions are for

There are ten practical sessions, one for each week of the course, and each one lasts about two academic hours. They exist to build skill and to prepare you for the examinations. **They are not graded.** Every notebook is built from the same five sections.

- **Warm-up.** Two to four quick diagnostic questions that bring your existing intuitions to the surface, including some intuitions that turn out to be wrong.
- **Guided exercise.** One worked experiment, already executed, with questions placed at every step. The steps follow the loop that structures every piece of work in this course: the experiment you run, the decision you make, the evidence you produce, the interpretation you draw, and the counterfactual you predict.
- **Discussion questions.** Four to six questions to talk through in class. No code is required for them.
- **Challenge.** One small experiment or diagnosis to attempt on your own or with a partner.
- **Takeaways.** Four to seven statements that summarize the reasoning patterns worth carrying forward.

Everything runs on synthetic data and on scikit-learn alone. Nothing has to be downloaded, no external dataset is used, and no graphics card is needed. Each notebook finishes in under two minutes.

## How to open a notebook

On your own machine, open the notebook file in Jupyter, using any kernel that has `numpy`, `pandas`, `matplotlib` and `scikit-learn` installed.

In Google Colab, which is the simplest option for most students, open the following address:

```
https://colab.research.google.com/github/dmytro-kuzmenko/ml-bsc-naukma/blob/main/materials/practices/p01/p01.ipynb
```

To reach the other sessions, replace `p01/p01.ipynb` with `p02/p02.ipynb` and so on, up to `p10/p10.ipynb`.

## The ten sessions, in order

| Session | Topic | Week | Module |
|---|---|---|---|
| Practical 1 | Designing an experiment, and the simplest forms of data leakage | 1 | What Does It Mean to Learn? |
| Practical 2 | Diagnosing a regression model, and model complexity | 2 | Learning a Function (Regression) |
| Practical 3 | Classification metrics, decision thresholds and class imbalance | 3 | Learning a Boundary (Classification) |
| Practical 4 | Trees and ensembles: complexity against generalization | 4 | Trees and Ensembles |
| Practical 5 | Support vector machines, feature scaling, margins and kernels | 5 | Margins, Similarity and Kernels |
| Practical 6 | Cross-validation, tuning, pipelines and leakage | 6 | Evaluation Done Properly |
| Practical 7 | Clustering and principal component analysis | 7 | Finding Structure Without Labels |
| Practical 8 | Gradient descent and a small neural network | 8 | Optimization and Neural Networks |
| Practical 9 | Debugging a model and analyzing its errors | 9 | Diagnosing Machine-Learning Systems |
| Practical 10 | A complete case study, and a clinic for the mini-project | 10 | Machine Learning in Practice |

Work through the sessions in order. Each one reuses the reasoning of the ones before it: baselines, the gap between training and validation performance, leakage, and diagnosis. The first five build the core experimental habits; the last five apply those habits to evaluation, to learning without labels, to neural networks, and to diagnosing a system as a whole.

## How the sessions relate to your grade

The practical sessions carry no points of their own. The grade comes from the homework assignments, which are worth 30 points, the midterm examination, worth 15, the mini-project, worth 25, and the final examination, worth 30.

What the sessions do is prepare you for the midterm and the final examination, because those examinations ask exactly the kind of question the sessions rehearse: read a table of training and test scores and say what it means, diagnose a plot of residuals, choose a metric for a stated cost scenario, find the leak in a described pipeline, or predict what a change to one hyperparameter would do.

The discussion questions are meant to be answered out loud. Practice saying your reasoning aloud, because the final examination rewards a precise and structured explanation far more than a recited definition. The answer cells in the notebooks are deliberately left empty: fill them in yourself first, then compare your answers with your classmates and with the instructor.

## A reminder about artificial-intelligence tools

Course policy permits these tools for homework assignments and for the mini-project, provided you disclose their use; responsibility for the submitted work remains entirely with you. The purpose of the practical sessions, however, is to develop your own reasoning, so answer the questions before you consult any tool. These tools are **not permitted** during the midterm or the final examination.
