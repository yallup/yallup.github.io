---
title: Particle Monte Carlo Methods for Lattice Field Theory
subtitle: Presented at NeurIPS 2025 Workshop Frontiers in Probabilistic Inference
summary: GPU-accelerated particle methods provide a strong classical baseline for sampling in lattice field theory, matching or outperforming neural samplers.
date: 2025-12-02
cardimage: lattice/neurips.png
featureimage: lattice/rg_flow.jpeg
caption: Magnetization density across inverse temperature

params:
  math: true
---

*Presented at NeurIPS 2025 Workshop: Frontiers in Probabilistic Inference* | [arXiv:2511.15196](https://arxiv.org/abs/2511.15196) | [Poster (PDF)](/papers/particle_monte_carlo_poster.pdf)

Neural samplers have gained attention for learning flexible trivialising maps in lattice field theory (LFT) problems. However, many of their strengths overlap with existing particle Monte Carlo methods. Existing ML sampling literature often presents particle methods as weak baselines, so in this work we revisited a common benchmark field sampling problem. We wanted to investigate whether particle MC methods really are as weak as is often claimed, and how good particle methods can be when put on a GPU on these problems.

**Key result:** Black-box particle Monte Carlo methods can match or outperform black-box neural samplers, while also estimating the partition function.

## Scalar field theory benchmark

We target the two-dimensional scalar \\( \phi^4 \\) theory (as in [Hackett et al. (2021)](https://arxiv.org/abs/2107.00734)), a standard benchmark characterised by strong couplings, multimodal distributions, and high-dimensional state spaces. The action is

$$
\begin{aligned}
S(\phi)=\sum_x\left[\frac{1}{2}\sum_{\nu=1}^2(\phi_x-\phi_{x+\hat\nu})^2 + \frac{1}{2}\mu^2\phi_x^2 + \frac{\lambda}{4}\phi_x^4\right]
\end{aligned}
$$

and defines the (normalized) Boltzmann target,
$$
\begin{aligned}
p(\phi) = \frac{1}{Z}e^{-S(\phi)}
\end{aligned}
$$
and associated partition function (normalization constant),
$$
\begin{aligned}
Z = \int_{\mathbb{R}^V} e^{-S(\phi)}d\phi.
\end{aligned}
$$
A measure of the magentization, the average field value over the lattice volume \\(V\\), can be used as the order parameter to understand the phase change behavior of the field
$$
\langle \phi\rangle = \tfrac{1}{V}\sum_{x\in\Lambda}\phi_x.
$$

With parameters set to \\( (\mu = -4, \lambda = 1) \\) we recover a theory with a broken phase that is realised at temperature \\(\beta = \frac{1}{kT} = 1 \\). We show that particle methods can be highly effective at sampling from this target in a fraction of the time neural methods take.

{{< figArray subfolder="images" figCaption="Sample field configurations at high and low temperature, showing the transition between ordered and disordered phases." >}}

## Takeaways

- _jax_ based implementations of LFT problems with stochastic samplers implemented in _blackjax_ ( run on NVIDIA GPUs ) can be blazingly fast
- Flow-based samplers amortize cost into training but require careful engineering of symmetries
- Particle MC provides a strong off-the-shelf baseline for black-box sampling
- For problems where *a priori* symmetry knowledge is weak, the advantage of neural methods is less clear
- Combining stochastic samplers with learned proposals offers potential for the best of both worlds
