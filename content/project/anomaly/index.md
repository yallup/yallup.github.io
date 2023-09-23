---
title: Neural Anomaly detection for Collider physics
summary: Further details of proposed Cambridge part III project on Anomaly detection
tags:
- part III
date: "2023-09-23T00:00:00Z"
---

This project primarily aims to build new techniques at the frontier of Machine Learning (ML) in science, using local expertise in Bayesian inference. This project is heavily based around ML and working with neural networks, so will be a good base for a further career in this topic


## Anomaly Detection

The search for new physics in fundamental physics disciplines requires processesing vast amounts of data, and searching for increasingly hard to identify signals. In searches for new physics at colliders we would like to scan distributions of collision event histograms for anomalous bumps in the examined spectra[^fn0][^fn1]

As we rule out the obvious bumps, classical techniques become less well suited to surveying the complex landscape of increasingly marginal signals, and are restrictive in requiring compressed representations of the data. It is here that machine learning can help us, provided we can make sure the predictions are "well calibrated" (keeping the number of true positive identificaitons of signal high, without raising too many false alarms)

## The project aim

In this project we will attempt to build a new anomaly detection method that can explore a higher dimensional space of models and data than the traditional techniques. To do this we will look to build on recent advancements in Bayesian computation using neural networks[^fn3], and create an anomaly detection tool for some realistic challenge problems in particle physics[^fn1].


If successful we will develop and demonstrate a technique that can search for millions of potential signals in collider data for anomalies, whilst still giving precise estimation of how confident we are in these signals. There is potential for broader application of these techniques to the search for graviational wave signals[^fn2] that can be considered throughout this project.

#### Technical skills and references

* This project will primarily be developing research code in Python
* Familiarity with ML libraries in python a plus e.g. sklearn, torch. As well as personal computer capable of running small ML models
* Little knowledge of Particle Physics or Cosmology is required, and grounding in Bayesian statistics/ML will be developed through the project 

[^fn0]: Hunting for bumps in the margins [[2211.10391]](https://arxiv.org/abs/2211.10391)

[^fn1]: The LHC Olympics 2020: A Community Challenge for Anomaly Detection in High Energy Physics [[2101.08320]](https://arxiv.org/abs/2101.08320)

[^fn2]: Gravitational wave detection without boot straps: a Bayesian approach [[1909.11872]](https://arxiv.org/abs/1909.11872)

[^fn3]: Evidence Networks: simple losses for fast, amortized, neural Bayesian model comparison [[2305.11241]](https://arxiv.org/abs/2305.11241)