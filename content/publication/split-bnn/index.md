---
title: "Split personalities in Bayesian Networks"
authors:
- admin
- Will Handley
- Mike Hobson
- Anthony Lasenby
- Pablo Lemos
date: "2022-08-27T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
#publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
# publication: In *Source Themes Conference*
publication_short: Prepared for conference submission

abstract: The true posterior distribution of a Bayesian neural network is massively multimodal. Whilst most of these modes are functionally equivalent, we demonstrate that there remains a level of real multimodality that manifests in even the simplest neural network setups. It is only by fully marginalising over all posterior modes, using appropriate Bayesian sampling tools, that we can capture the split personalities of the network. The ability of a network trained in this manner to reason between multiple candidate solutions dramatically improves the generalisability of the model, a feature we contend is not consistently captured by alternative approaches to the training of Bayesian neural networks. We provide a concise minimal example of this, which can provide lessons and a future path forward for correctly utilising the explainability and interpretability of Bayesian neural networks.

# Summary. An optional shortened abstract.
summary: We demonstrate that even the simplest neural networks have truly multimodal solutions and it is only by combining these candidate models that the true probabilistic description can emerge.

tags:
- bayes
- neural network
- machine learning
featured: true

links:
- name: arXiv
  url: https://arxiv.org/abs/2205.11151
# - name: sub
#   url: test
#  url_pdf: http://eprints.soton.ac.uk/352095/1/Cushen-IMV2013.pdf
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: the authors'
  focal_point: "Smart"
  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

## Lightning summary:


Starting from the simplest problem, a noisy XOR classifier, and the simplest Bayesian Neural Network,

{{<figure src="featured.png" width="800">}}

We show that a posterior that is multimodal in _parameter_ space emerges,

{{<figure src="layer.png" width="800">}}

Which in turns induces a full solution that gives better generalisability on the problem,

{{<figure src="money.png" width="800">}}

#### Capturing this is a strong challenge to almost all Bayesian inference methods over neural architectures.