---
title: Nested Slice Sampling
subtitle: ICLR 2025 Workshop Frontiers in Probabilistic Inference
summary: A GPU-native, vectorized nested sampling algorithm
date: 2025-04-28
cardimage: nss/iclr.png

params:
  math: true
---

*Presented at ICLR 2025 Workshop: Frontiers in Probabilistic Inference* | [OpenReview](https://openreview.net/forum?id=ekbkMSuPo4) | [Poster (PDF)](/papers/ICLR_dy.pdf)

Alongside co-authors Namu Kroupa and Will Handley, we present an updated, GPU-compatible nested sampling implementation.

**Key result:** A high-performance nested sampling implementation in JAX/blackJAX achieving significant GPU speedups while maintaining competitive accuracy with state-of-the-art SMC methods.

## Nested Sampling as Particle Monte Carlo

Nested sampling estimates the normalizing constant (evidence) associated with a target distribution:

$$Z(\beta) = \int e^{-\beta E(x)} \Pi(x) dx$$

Unlike standard annealing approaches that construct a single temperature path from the prior \\( \Pi(x) \\) to the posterior \\( P(x) \\), nested sampling constructs a unique path through constrained regions of prior mass. These constraints arise from progressively increasing likelihood thresholds.

{{< figArray subfolder="images/ns_panels" figCaption="Nested sampling bridging distribution. Left: the unique path of distributions. Right: reconstruction of posterior and volume estimate as the algorithm progresses through increasing likelihood constraints." >}}

## Vectorization and GPU Acceleration

Our implementation, Nested Slice Sampling (NSS), achieves high GPU utilization for parallel particle updates. Batch updates trade modest evidence accuracy for significant walltime speedups—updating particle subsets yields order-of-magnitude improvements on GPUs, with a manageable cost in evidence estimation accuracy.

{{< figArray subfolder="images/comparison" figCaption="Comparison on a pedagogical mixture of bivariate Gaussians. NSS produces faithful samples competitive with SMC random walk and NUTS." >}}

NSS compares favorably with SMC for state-of-the-art performance on challenging inference tasks. The probabilistic volume estimates produced by NSS provide unique advantages: evidence estimation with built-in error quantification.

## Takeaways

1. **High-Performance Nested Sampling in JAX/blackJAX** — Open source implementation integrated with the blackJAX ecosystem
2. **Massively Parallel Execution** — Significant speedups on GPUs/TPUs via vectorization
3. **Runtime Competitive with State-of-the-Art SMC** — Matches or exceeds leading population MC methods on benchmark tasks
4. **Robust Bayesian Evidence Estimation** — Excels on complex geometries, scaling efficiently to \\(\mathcal{O}(100)\\) dimensions

Code available at [handley-lab/blackjax](https://github.com/handley-lab/blackjax). See also the [Nested Sampling Book](https://handley-lab.co.uk/nested-sampling-book/intro.html) for further documentation.
