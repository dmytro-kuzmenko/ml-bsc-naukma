# Mini-project: directions and data

Choose one of the directions below, or propose one of your own with the instructor's approval. Every dataset recommended here is small and loads from a stable source. If a dataset is not built into scikit-learn, include a reliable way of downloading it in the notebook, together with its attribution.

## Ten suggested directions

1. **Classifying wines.** The `load_wine` dataset in scikit-learn: thirteen features and three classes. It suits pipelines, feature scaling, model comparison and principal component analysis. *The question to answer:* does this data need scaling, and how many principal components are enough to preserve the information that matters?

2. **Diagnosing breast cancer.** The `load_breast_cancer` dataset in scikit-learn, a reasonably balanced two-class problem. *The question to answer:* which metric reflects the real cost of each kind of error, and how does moving the decision threshold trade precision against recall?

3. **Handwritten digits.** The `load_digits` dataset in scikit-learn: 1797 images of eight pixels by eight. *The question to answer:* which pairs of digits are confused most often, and how many principal components are needed to retain 95 percent of the variance? Classifying them without a neural network, using nearest neighbors, a support vector machine or a tree, is perfectly appropriate.

4. **Predicting house prices.** The `fetch_california_housing` dataset in scikit-learn: roughly twenty thousand rows, and a regression target. *The question to answer:* how does geographical grouping affect validation, once the split is made by region rather than at random, and which features matter most when they are ranked by permutation importance?

5. **Measurements of living things.** The `penguins` dataset that ships with seaborn, or any comparable table. *The question to answer:* can the species be predicted from body measurements alone, and what does clustering the data without its labels add to that picture?

6. **A small amount of text.** A modest collection of short documents in two to four categories, for example a subset of `fetch_20newsgroups` in scikit-learn, represented by term frequency and inverse document frequency and classified with logistic regression. *The question to answer:* how does that representation behave in practice, and which words carry the most information?

7. **A short time series.** Data with a dependence on time, such as weather or traffic measurements. *The question to answer:* why does this data need a split that respects the order of time, and how much more conservative is an honest evaluation than a random split?

8. **A synthetic grouped dataset.** Generate data with a group structure, for example several measurements taken from each patient. *The question to answer:* what happens to the estimate of quality when the members of a group are allowed to fall on both sides of the split, that is, when grouped cross-validation is replaced by ordinary cross-validation?

9. **A small set of images.** Images that can be turned into feature vectors, for instance raw pixels followed by a projection onto principal components, and then classified with a classical method. *The question to answer:* how much of the information needed for classification survives that compression?

10. **A dataset of your own.** Subject to the instructor's approval. It must be small, legally usable, and clearly attributed.

## How to judge whether a dataset is suitable

- **Size.** Up to roughly fifty to one hundred thousand rows, or any equivalent workload that finishes on a laptop in minutes.
- **Provenance.** Its origin is known and its attribution is clear.
- **Interest.** It presents a genuine methodological difficulty: imbalance between the classes, a group structure, noise, or strongly correlated features.
- **Cost.** It does not require a graphics card.
