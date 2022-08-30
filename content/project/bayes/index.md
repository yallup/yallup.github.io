---
title: Bayesian Machine Learning
summary: Investigating the interplay between rigorous statistical techniques used in precision science, and inference performed with modern Machine Learning. _Can techniques developed in physics help open the black box of Machine Learning?_
tags:
- bayes
- neural network
- machine learning
date: "2022-08-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: 
math: true
image:
  caption: Alexa Steinbrück / © Better Images of AI / Explainable AI / CC-BY 4.0
  focal_point: Smart
---

We primarily investigate the role of Nested Sampling as a tool to calculate the evidence,

$$ \mathcal{Z} = \int d\theta \mathcal{L} (\theta) \Pi (\theta)\, $$

Calculating this quantity is indispensable for tasks such as model comparison in a physics context. However this is not generally considered a primary quantity of interest in modern Machine Learning as a more abstract discipline. Our work investigates the vital role this quantity could play in explainable AI.

## Demonstration of Nested Sampling

Using [Nested Sampling](https://projecteuclid.org/euclid.ba/1340370944), in particular the implementation provided by [PolyChord](https://arxiv.org/abs/1506.00171), we can demonstrate the calculation of the evidence integral by sampling over a Himmelblau log likelihood,

{{<figure src="himmelblau.gif" width="800">}}

Taking the _dead_ points left behind by the algorithm we have an effective sample that is uniquely able to compute _multimodal_ target likelihoods.

{{<figure src="himmelblau_dead.png" width="800">}}


### Current interests in this field

* Gaussian processes dominate thinking in Bayesian Deep learning, are we leaving something important behind by shifting to a pure function space view?

* What does the marginal likelihood over parameters in ML models tell us about inference with modern ML? This ongoing program has initial progress documented [here](../../publication/split-bnn)

* Graph neural networks, or other symmetry exploiting networks, are well suited to sampling paradigms. Can we use parameter space sampling effectively in this context?

If you are interested in discussing any of these topics please get in contact!