---
title: Practice final examination — sample questions
course: Machine Learning
university: National University of Kyiv-Mohyla Academy (NaUKMA)
instructor: Dmytro Kuzmenko
email: kuzmenko@ukma.edu.ua
exam: final
status: public — sample questions for student practice
language: en
---

# Practice final examination — sample questions

> **This is public practice material.** The questions below are samples for self-study. The questions on the real examination are drawn from a private bank and are not published.

## The format of the examination

- **How long it lasts.** Forty-five minutes, taken individually against a timer, covering all ten modules.
- **Where it happens.** On DistEdu. Questions appear one to a screen, with the timer running.
- **The rules.** Closed book. Artificial-intelligence tools and help from other people are **prohibited**, under the academic-integrity policy stated in the syllabus. An oral check afterwards is possible.
- **What it contains.** Roughly 20 to 25 percent short conceptual reasoning, 50 to 60 percent interpretation and diagnosis, and 20 to 25 percent methodological decisions. There is very little arithmetic.
- **How the weight is distributed.** Evaluation and diagnosis, the material of Modules 6 to 9, carry the largest share. The earlier modules appear in a cumulative form, folded into questions about later material.
- **What is never asked.** Reciting a definition, working through a long derivation, writing substantial code, or remembering the exact arguments of a library function.

## Sample questions

Every sample below is labeled with the same information as a real examination item: the module it comes from, the kind of reasoning it asks for, its difficulty, and how long you should expect to spend on it. Each answer is hidden until you open it. Attempt the question before you look.

---
id: PFT-01
module: 6
type: identify_leakage
difficulty: 2
time_est: 2-3 min
targets: Identify the leakage caused by filling in missing values before the split.
variantable: true
---

A team fills in the missing values of each column with the mean of that column, computed over all of the data, training and test together. Only afterwards do they split the data and train the model. (a) What is wrong with this procedure? (b) How should the missing values be filled in instead?

<details>
<summary><strong>Answer</strong></summary>

**(a)** Each column mean was computed with the test rows included, so every imputed training value carries a trace of the test set. Information has flowed backwards from the data that is supposed to be untouched, and the resulting estimate of performance is optimistically biased. The bias is usually small, but it is real and it is entirely avoidable.

**(b)** Fit the imputer on the training split alone, then use that fitted imputer to transform both splits. Inside cross-validation, fit it afresh on the training part of every fold, which is what a scikit-learn pipeline does automatically when it is passed to the cross-validation routine.

</details>


---
id: PFT-02
module: 3
type: threshold_reasoning
difficulty: 2
time_est: 2-3 min
targets: Choose a decision threshold to meet a target for recall.
variantable: true
---

A medical triage system has to reach a recall of at least 0.95, so that nearly every urgent case is flagged. At a threshold of 0.5 the model achieves a recall of 0.80 and a precision of 0.30. (a) In which direction should the threshold move? (b) Predict what happens to precision and to the number of flagged patients. (c) Why is a low precision acceptable here?

<details>
<summary><strong>Answer</strong></summary>

**(a)** Downwards, so that more patients are flagged.

**(b)** Precision falls further, and the number of flagged patients rises.

**(c)** In triage the expensive error is missing an urgent case, because the consequence is a patient who goes untreated. A false alarm costs a review by a clinician, which is comparatively cheap and can be absorbed by a second, more specific stage further down the process. When the two kinds of error differ in cost by that much, buying recall with precision is the correct trade.

</details>


---
id: PFT-03
module: 6
type: diagnose
difficulty: 3
time_est: 3-4 min
targets: Diagnose unstable scores across cross-validation folds.
variantable: true
---

Five-fold cross-validation produces the scores 0.88, 0.63, 0.90, 0.87 and 0.60. (a) On a dataset with one rare class, what most likely explains the two poor folds? (b) Which evaluation strategy repairs it? (c) What should be reported alongside the mean score?

<details>
<summary><strong>Answer</strong></summary>

**(a)** The folds were not stratified. When one class is rare, a random partition can leave a fold with almost no positive examples, and a score computed on such a fold is close to meaningless, which is what the values 0.63 and 0.60 reflect. The model is probably fine; the estimate is not.

**(b)** Stratified k-fold cross-validation, which preserves the ratio between the classes inside every fold.

**(c)** Report the standard deviation across the folds alongside the mean, and report how many positive examples each fold contained. Without the second number the spread cannot be interpreted.

</details>


---
id: PFT-04
module: 6
type: predict_effect
difficulty: 2
time_est: 2-3 min
targets: Predict the effect of changing the number of cross-validation folds.
variantable: true
---

You move from three-fold to six-fold cross-validation on a dataset of 600 samples. Predict the effect on (a) the bias of the estimate of error, (b) the variance of that estimate, (c) the computational cost, and (d) the size of each held-out fold.

<details>
<summary><strong>Answer</strong></summary>

**(a)** The bias falls slightly. Each model is now trained on 500 samples instead of 400, so each one is a little closer to the model that would be trained on the whole dataset, which is the quantity the estimate is trying to describe.

**(b)** The variance rises. The six training sets overlap far more than the three did, so the fold scores are more strongly correlated with one another and averaging them removes less noise than the larger number of folds might suggest.

**(c)** The cost roughly doubles: six models are fitted instead of three.

**(d)** Each held-out fold shrinks from 200 samples to 100, which is why each individual fold score is noisier.

</details>


---
id: PFT-05
module: 7
type: interpret_plot
difficulty: 2
time_est: 2-3 min
targets: Choose the number of principal components from a table of explained variance.
variantable: true
---

Principal component analysis on eight features gives the following proportions of explained variance: 0.38, 0.25, 0.15, 0.08, 0.06, 0.04, 0.02, 0.02. (a) How many components would you keep, and why? (b) What proportion of the variance does your choice retain?

<details>
<summary><strong>Answer</strong></summary>

**(a)** Three. The curve bends sharply after the third component: the first three contribute 0.38, 0.25 and 0.15, and the fourth adds only 0.08, with every later one contributing less still. Everything after the bend looks like the flat tail that carries mostly noise.

**(b)** The three components retain 0.38 plus 0.25 plus 0.15, that is 0.78, or 78 percent of the variance.

One caution: explained variance is a property of the features alone and knows nothing about the target. If the discarded directions happen to be the ones that separate the classes, this choice will hurt. When the components feed a supervised model, confirm the number by cross-validation rather than by reading the curve.

</details>


---
id: PFT-06
module: 8
type: diagnose
difficulty: 3
time_est: 3-4 min
targets: Diagnose a loss that falls and then explodes during training.
variantable: true
---

A neural network trains normally for forty epochs, and then the loss suddenly jumps to a very large value and stays there. (a) Name the most likely cause. (b) What two changes would you try first? (c) What would you inspect in the gradient statistics?

<details>
<summary><strong>Answer</strong></summary>

**(a)** The learning rate is too high for the region of the loss surface the optimizer has reached. One step landed far outside the basin it was descending, and the parameters never returned. Exploding gradients are the same failure seen from the other side.

**(b)** Lower the learning rate, and clip the gradient norm. Switching to an adaptive optimizer with a smaller base rate achieves much the same thing.

**(c)** Look at the norm of the gradient over the epochs immediately before the jump. A norm that grows over several steps, or that becomes infinite or undefined, confirms the diagnosis and distinguishes it from a corrupted batch of data.

</details>


---
id: PFT-07
module: 8
type: predict_effect
difficulty: 1
time_est: 2 min
targets: Predict the effect of a smaller learning rate on convergence.
variantable: true
---

You train a network with a learning rate of 0.01 for 100 epochs and reach a loss of 0.4. You then retrain it with a learning rate of 0.001 for the same 100 epochs. (a) How will the final loss compare, and why? (b) What risk does the smaller rate remove?

<details>
<summary><strong>Answer</strong></summary>

**(a)** The final loss will be higher than 0.4. Every step is ten times smaller, so after the same number of epochs the optimizer has traveled a shorter distance. A smaller learning rate makes convergence slower; it does not make the result better.

**(b)** It removes the risk of a step so large that the loss oscillates or diverges instead of descending. That is the trade being made: stability against speed.

</details>


---
id: PFT-08
module: 3
type: choose_metric
difficulty: 2
time_est: 2-3 min
targets: Choose the right form of averaging for the F1 score when one class is rare.
variantable: true
---

A classifier for three classes, where A and B are frequent and C is rare, reports an accuracy of 0.95, a macro-averaged F1 score of 0.68 and a micro-averaged F1 score of 0.94. (a) Which number tells you the most about the rare class, and why? (b) If every class had to contribute equally to the reported score, which form of averaging would you use?

<details>
<summary><strong>Answer</strong></summary>

**(a)** The macro-averaged F1 score of 0.68. Macro averaging computes the F1 score separately for each class and then takes an unweighted mean, so the rare class C counts exactly as much as A and B. Accuracy and the micro-averaged score are both dominated by the frequent classes, which is why they sit up at 0.94 and 0.95 while the model may be performing badly on C.

**(b)** Macro averaging, for the reason just given. Report the per-class scores alongside it, so a reader can see which class is dragging the mean down.

</details>


---
id: PFT-09
module: 9
type: diagnose
difficulty: 3
time_est: 3-4 min
targets: Decide what to fix first from a breakdown of the errors.
variantable: true
---

Of 500 misclassified images, 300 are blurred, 120 have strong shadows, and 80 fall into no clear category. (a) Which group should the team address first, and why? (b) Name one check you would run before investing effort in that group.

<details>
<summary><strong>Answer</strong></summary>

**(a)** The blurred images. They account for 300 of 500 errors, which is 60 percent of everything the model gets wrong, and they form a single coherent group with a plausible common cause. That combination gives the largest expected improvement for the effort spent.

**(b)** Find out what share of the whole dataset that group represents, not just what share of the errors. If blurred images are 55 percent of all the data and 60 percent of the errors, the model is barely worse on them than it is everywhere else, and the group is not a distinct problem at all. It is also worth checking whether the errors concentrate on one class, and whether the group can be fixed at all before engineering time is committed to it.

</details>


---
id: PFT-10
module: 10
type: choose_metric
difficulty: 2
time_est: 2-3 min
targets: Choose an evaluation that matches a cost matrix in production.
variantable: true
---

A loan-approval model is evaluated offline from a confusion matrix. Approving a loan that turns out to be bad costs 5 units; refusing a loan that would have been repaid costs 1 unit. (a) Why is accuracy a poor summary here? (b) What single number, computed from the confusion matrix and the costs, would you use to compare two models?

<details>
<summary><strong>Answer</strong></summary>

**(a)** Accuracy counts both kinds of mistake as one mistake, but here one of them is five times as expensive as the other. A model that makes fewer errors in total can easily be the more expensive model to run.

**(b)** Expected cost. Take the positive class to be "this loan will default". Approving a bad loan is then a false negative, and refusing a good loan is a false positive, so the expected cost is five times the number of false negatives plus one times the number of false positives. Normalize it per thousand decisions so the figure is comparable across test sets, and prefer the model with the lower expected cost.

</details>

## How to approach these questions

- Learn the correct order of a pipeline until you no longer have to think about it: split first, then, separately within each training fold, fill in missing values, scale, select features, and train; evaluate at the end. The test set is touched exactly once.
- On questions about cross-validation, reason about the bias and the variance of the estimate separately. More folds means less bias, more variance and more computation.
- Diagnose from the pair of numbers, training error and validation error. Both high means bias; a low training error beside a high validation error means variance. Choose the remedy that matches the diagnosis.
- On imbalanced data, prefer precision, recall, the F1 score or the area under the precision-recall curve over accuracy, and use macro averaging when a rare class must count as much as the others.
- Leakage is the most common failure in real work. For every feature ask when its value actually becomes known, and for every transformation ask whether it was fitted on the training data alone.
- On questions about neural networks, connect the symptom to its cause: oscillation means the learning rate is too high; a loss that stays flat and high means too little capacity or uninformative features; a wide gap between training and validation loss means variance.
