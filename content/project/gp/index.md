---
title: Marginalised Gaussian Processes for Cosmology
summary: Further details of proposed Cambridge part III project on Gaussian processes
tags:
- part III
date: "2022-09-06T00:00:00Z"
---
{{<figure src="cmb.png" width="600">}}

This project primarily aims to build new techniques at the frontier of Machine Learning (ML), by using expertise and technology developed in Cambridge for Bayesian inference. Gaussian Processes are a class of ML model that are widely used in both ML/AI for scientific research and across industry, this project will give a good base for a further career involving ML in either setting.


## Gaussian Processes

Gaussian Processes are a flexible, generic ML model that can be used for classification or regression tasks. They have gained an popular due to their flexibility, good performance on common ML tasks like time series analysis and importantly have a natural Bayesian interpretation. The evidence for each set of model parameters can be calculated and then optimized, optimization encodes __Bayesian Occams razor__, naturally punishing overly complicated models and treading the line between overfit and optimized models neatly[^fn4].

Below is a classic example of some pseudo time series data where different realisations of the model around this optimized point are drawn. This kind of uncertainty quantification is vital for many key industrial and scientific applications of ML

{{<figure src="sampled_processes.png" width="600">}}

In this project the fundamental nature of how we optimize these sorts of models will be examined. This will build the picture of these probabilistic models from the ground up giving a good introduction to key concepts of Bayesian ML. 

### Bayesian ML and Marginal Gaussian Process

The core idea being explored is to build on recent work from the frontier of machine learning that takes an algorithm developed in this group and applies it to the training of Gaussian Process models[^fn2]. Nested Sampling, as realised in PolyChord[^fn1], was developed in this group to analyse the data from the very early universe and is a key tool for rigorous Bayesian inference. By bringing together this groups expertise in running and interpreting this algorithm with the frontier ML research we aim to answer some core questions at the heart of Bayesian ML. 

## Application to Astronomy and Cosmology

Astronomy and Cosmology are both disciplines that make extensive use of "time series" style data, a domain GPs are well suited to[^fn3]. There are a number of well established datasets and problems that are accessible, and we can consider a variety of modelling problems as a set of test cases for the novel Bayesian approach to GPs we will explore. Modelling tensions in early and late time Cosmology[^fn5] or modelling time delay of lensed quasars[^fn3] can be pulled out as two potential examples.

The proposed marginalisation aims to further refine the uncertainty estimates on the predictions from a Gaussian Process, existing analyses serve as a useful benchmark for this type of new algorithm application. By studying astronomical data we can test if we can shed any new light on the nature of the universe using this approach.


#### Technical skills and references

* This project will primarily be developing research code in Python
* Familiarity with ML libraries in python a plus e.g. sklearn, torch
* Little knowledge of Astronomy or Cosmology is required, and grounding in Bayesian statistics/ML will be developed through the project 


[^fn1]: PolyChord: next-generation nested sampling _W. Handley et al._ [[1506.00171]](https://arxiv.org/abs/1506.00171)


[^fn2]: Marginalised Gaussian Processes with Nested Sampling _F. Simpson et al._ [[2010.16344]](https://arxiv.org/abs/2010.16344)


[^fn3]: Gaussian Process regression for astronomical time-series _Suzanne Aigrain, Daniel Foreman-Mackey_ [[2209.08940]](https://arxiv.org/abs/2209.08940)


[^fn4]: Gaussian Processes for Machine Learning _Rasmussen and Williams_ [[book webpage]](https://gaussianprocess.org/gpml/)


[^fn5]: Gaussian processes and effective field theory of $f(T)$ gravity under the $H_0$ tension, _X. Ren et al._ [[2203.01926]](https://arxiv-export1.library.cornell.edu/abs/2203.01926)


<!-- https://arxiv.org/abs/2209.08940 -->