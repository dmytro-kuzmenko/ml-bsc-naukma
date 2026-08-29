# Machine Learning — an undergraduate course

**National University of Kyiv-Mohyla Academy** · BSc programme · Department of Multimedia Systems

**Course website: <https://dmytro-kuzmenko.github.io/ml-bsc-naukma/>**

## Instructor

**Dmytro Kuzmenko** — Assistant Professor, Department of Multimedia Systems, NaUKMA
Email: <kuzmenko@ukma.edu.ua> · Website: <https://dmytro-kuzmenko.github.io>

Questions about the course belong in email or in class. Questions about the materials in this repository can be opened as an issue.

## The course

You learn to formulate, train, evaluate, diagnose and explain an ordinary machine-learning system: regression and classification first, then decision trees, support vector machines, clustering and small neural networks. The emphasis is on method — what an experiment actually measures, and why its result can be trusted — rather than on the syntax of any one library.

Teaching is in English. Everything runs on an ordinary laptop, on synthetic data or the datasets that ship with scikit-learn.

## Key facts

| | |
|---|---|
| Workload | 120 hours, 4 ECTS credits |
| In class | 40 hours: ten lectures and ten practical sessions |
| Independent work | about 80 hours |
| Assessment | a pass/fail credit |
| Components | ten modules, ten practical sessions, six homework assignments, a mini-project, a midterm and a final examination |

## Grading

| Component | Share |
|---|---|
| Six homework assignments, five points each | 30% |
| Midterm examination | 15% |
| Mini-project | 25% |
| Final examination | 30% |

At least 30 points are needed before you may sit the final assessment.

## Materials

Everything is on the [course website](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/), and this repository *is* that website:

| Where | What |
|---|---|
| [Syllabus](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/syllabus.html) | the week-by-week plan |
| [Practical sessions](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/practices.html) | ten notebooks, one per week, not graded |
| [Homework](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/homeworks.html) | six assignments with instructions and grading criteria |
| [Mini-project](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/project.html) | the specification, suggested directions and grading criteria |
| [Assessments](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/assessments.html) | sample midterm and final questions |
| [Lecture slides](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/modules/week-01.html) | published per week, on the module pages |
| [Policies](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/policies.html) | AI tools, oral checks, collaboration, late work |
| [Resources](https://dmytro-kuzmenko.github.io/ml-bsc-naukma/resources.html) | books and the software environment |

Every notebook opens either in Jupyter on your own machine or in Google Colab; both buttons appear under each notebook link on the site. To read the site offline, clone the repository and open `index.html`, or serve it:

```bash
python -m http.server 8000    # then open http://localhost:8000
```

## Repository Structure

```
├── index.html              home page
├── syllabus.html           the week-by-week plan
├── practices.html          the practical sessions
├── homeworks.html          the homework assignments
├── project.html            the mini-project
├── assessments.html        examinations and sample questions
├── policies.html           AI tools, oral checks, collaboration, late work
├── resources.html          books and the software environment
├── modules/                one page per week, week-01 to week-10
├── demos/                  interactive demonstrations, plain JavaScript
├── materials/
│   ├── practices/p01..p10/     practical notebooks
│   ├── homeworks/ha01..ha06/   notebooks, instructions, grading criteria
│   ├── project/                specification, directions, grading criteria
│   ├── assessments/            sample midterm and final questions
│   └── lectures/week-NN/       published lecture slides
├── assets/                 css and js
├── README.md
└── LICENSE
```

## License

These materials are licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/), whose full text is in [LICENSE](LICENSE). Attribution: © 2026 Dmytro Kuzmenko.
