---
title: Bayesian Symbolic regression
summary: Further details of proposed Cambridge part III project on Symbolic Regression
tags:
- part III
date: "2023-06-20T00:00:00Z"
---


## Symbolic regression

Symbolic regression (SR)[^fn1] is a popular paradigm for marrying classical modelling (think defining an inverse square law for gravitational potentials) and modern ML model fitting (think fitting a neural network to predict a function). The interplay between choosing a representation of the data and learning the parameters (a very physics-ey notion) and purely learning the representation from data (a very ML-ey notion), is an important area of study and SR attempts to bridge this gap.

## Compression and Model selection

The task when fitting an ML model can be defined in two parts, compressing the information contained in the data into the parameters of the model and selecting the initial model to fit. The promise of Neural techniques is the latter doesn't matter, and you can simply overparameterise the model and learn a useful representation. For scientific purposes we are less concerned with practical usefulness and more concerned with uncovering ground truth about the world, hence the model specification problem is much harder to gloss over.

## The project aim

SR uses a genetic algorithm to perform compression and model selection at once, and there have been previous attempts to put this on a more formal probabilistic footing[^fn2]. In this project we will attempt to bring the state of the art in precise model comparison (in the guise of nested sampling[^fn3]), to study how well the genetic algorithms at the heart of SR tackle the model selection problem.


#### Technical skills and references

* This project will primarily be developing research code in Python
* Familiarity with ML libraries in python a plus e.g. sklearn, torch
* Little knowledge of Astronomy or Cosmology is required, and grounding in Bayesian statistics/ML will be developed through the project 

[^fn1]: Interpretable Machine Learning for Science with PySR and SymbolicRegression.jl _Cranmer_ [[2305.01582]](https://arxiv.org/abs/2305.01582)

[^fn2]: Priors for symbolic regression _Bartlett et al._ [[2304.06333]](https://arxiv.org/abs/2304.06333)

[^fn3]: PolyChord: next-generation nested sampling _W. Handley et al._ [[1506.00171]](https://arxiv.org/abs/1506.00171)