---
title: "Exploring phase space with Nested Sampling"
authors:
- admin
- Timo Janßen
- Steffen Schumann
- Will Handley
date: "2022-05-04T00:00:00Z"
doi: "10.1140/epjc/s10052-022-10632-2"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-08-27T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Eur. Phys. J. C, 82 8 (2022) 678"
publication_short: "Published in EPJC"

abstract: We present the first application of a Nested Sampling algorithm to explore the high-dimensional phase space of particle collision events. We describe the adaptation of the algorithm, designed to perform Bayesian inference computations, to the integration of partonic scattering cross sections and the generation of individual events distributed according to the corresponding squared matrix element. As a first concrete example we consider gluon scattering processes into 3-, 4- and 5-gluon final states and compare the performance with established sampling techniques. Starting from a flat prior distribution Nested Sampling outperforms the Vegas algorithm and achieves results comparable to a dedicated multi-channel importance sampler. We outline possible approaches to combine Nested Sampling with non-flat prior distributions to further reduce the variance of integral estimates and to increase unweighting efficiencies.

# Summary. An optional shortened abstract.
summary: We motivate a connection between Bayesian evidence and particle physics cross sections, and use this to introduce a new path for particle physics calculations

tags:
- particle
- bayes
featured: true

links:
- name: arXiv
  url: https://arxiv.org/abs/2205.02030
# url_pdf: http://arxiv.org/pdf/1512.04133v1
# url_code: ''
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: the authors'
  focal_point: ""
  preview_only: True

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
math: true
---

## Lightning summary:

We propose an analogy between the Bayesian evidence $Z$ and the particle physics cross section $\sigma$,

$$ \sigma = \int\limits_\Omega d\Phi |\mathcal{M}|^2 (\Phi)\, $$
$$ \mathcal{Z} = \int d\theta \mathcal{L} (\theta) \Pi (\theta)\, $$

Where the matrix element, $\mathcal{M}$ and the likelihood, $\mathcal{L}$, play similar roles.

This analogy allows us to bring a state of the art tool to calculate the evidence, Nested Sampling (NS), to the particle physics context,

{{<figure src="summary.jpg" width="1200">}}

Which demonstrates promising dimensional scaling

{{<figure src="efficiencies.jpg" width="400">}}

#### This demonstrates a path forward to fix the impending crisis in calculating predictions for LHC physics

Presentation with more information - [[yallup.github.io/bayeshep_durham]](https://yallup.github.io/bayeshep_durham/) 
