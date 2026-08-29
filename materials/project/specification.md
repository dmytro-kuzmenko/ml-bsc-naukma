# Mini-project: a complete machine-learning investigation

**Course:** Machine Learning, National University of Kyiv-Mohyla Academy. **Weight:** 25 percent of the final grade. **Format:** on your own, or in a pair of two students.

## 1. What the project is

Carry out a small but **complete** empirical investigation, from formulating the question to producing a reproducible report whose conclusions are properly justified. The project is not a competition for the highest score. It is graded on the quality of your method, not on the size of the number you reach.

## 2. The eleven steps

1. **Formulate the question.** State exactly what you are predicting, and why it matters.
2. **Inspect the data.** Its size, the types of the features, missing values, the distribution of the target, and any obvious problems.
3. **Build a baseline.** Something simple — a constant prediction, the majority class, a linear model — so that any later improvement can be measured against it.
4. **Choose the preprocessing.** Justify it, and keep it free of leakage by placing every step inside a pipeline that is fitted within the cross-validation loop.
5. **Choose the models.** One to three sensible candidates, each with a reason for being there.
6. **Choose the validation scheme.** The split that is actually valid for your data: plain k-fold, stratified, grouped, or ordered in time.
7. **Choose the metrics.** Ones that suit the task and the distribution of the classes.
8. **Compare the experiments.** With tables, curves and summary statistics, not with a single number.
9. **Analyze the errors.** Where the model fails, and why it fails there.
10. **State the limitations and the conclusions.** What your results support, and just as importantly what they do not.
11. **Make the work reproducible.** Fixed random seeds, a notebook that runs from top to bottom, and documented dependencies.

## 3. What you submit

- A notebook, or a small repository, that runs from beginning to end without intervention.
- A short report, for example a README file, covering the goal, the data, the method, the results, the conclusions and the limitations.
- The results and figures, either embedded in the notebook or kept in a folder of their own.
- Instructions for reproducing the work: the environment, the dependencies, and the commands to run.
- A disclosure of artificial-intelligence use, in more detail than the homework assignments require. Section 5 explains what it should contain.
- A short presentation or demonstration at a practical session, where that is feasible.

## 4. The defense

Every project may be briefly defended, in about five to seven minutes for a pair. At least one question is put to each student individually. The defense confirms that the work is yours and that you understand it; it is not scored separately. Defenses take place at the practical session in Week 10.

## 5. Disclosing the use of artificial-intelligence tools

Describe, in substance:

- which tools you used, and for what — writing code, debugging, interpreting results, drafting prose;
- how those tools influenced your methodological decisions, if they influenced them at all;
- which parts of the code and the analysis you wrote yourself, or changed substantially;
- what you verified and understood independently.

You must be able to explain any part of the submitted work. This is checked at the defense.

## 6. Reproducibility

- Fix the random seed wherever a library allows it.
- Do not use data that somebody following your instructions could not obtain.
- Avoid very large datasets. Nobody should need unusual computing power to rerun your work.
- List the versions of the libraries that matter, either by recording them in the report or by exporting them with `pip freeze > requirements.txt`.

## 7. The limits of the task

- This is not a research project. It requires no novel method, no large model, and no training on a graphics card.
- Write as much code as the question needs, and no more.
- The quality of the conclusions counts for more than the number of plots.
