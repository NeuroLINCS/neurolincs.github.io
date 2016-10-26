---
title: "Network-Based Interpretation of Diverse High-Throughput Datasets through the Omics Integrator Software Package."
excerpt: ""
year: 2016
author: Nurcan Tuncbag
authors: "Tuncbag N, Gosline SJ, Kedaigle A, Soltis AR, Gitter A, Fraenkel E"
links:
  - "[PLoS Comput Biol. 2016 Apr 20;12(4):e1004879. doi: 10.1371/journal.pcbi.1004879](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004879)"
---


## Abstract

High-throughput, 'omic' methods provide sensitive measures of biological responses to perturbations. However, inherent biases in high-throughput assays make it difficult to interpret experiments in which more than one type of data is collected. In this work, we introduce Omics Integrator, a software package that takes a variety of 'omic' data as input and identifies putative underlying molecular pathways. The approach applies advanced network optimization algorithms to a network of thousands of molecular interactions to find high-confidence, interpretable subnetworks that best explain the data. These subnetworks connect changes observed in gene expression, protein abundance or other global assays to proteins that may not have been measured in the screens due to inherent bias or noise in measurement. This approach reveals unannotated molecular pathways that would not be detectable by searching pathway databases. Omics Integrator also provides an elegant framework to incorporate not only positive data, but also negative evidence. Incorporating negative evidence allows Omics Integrator to avoid unexpressed genes and avoid being biased toward highly-studied hub proteins, except when they are strongly implicated by the data. The software is comprised of two individual tools, Garnet and Forest, that can be run together or independently to allow a user to perform advanced integration of multiple types of high-throughput data as well as create condition-specific subnetworks of protein interactions that best connect the observed changes in various datasets. It is available at http://fraenkel.mit.edu/omicsintegrator and on GitHub at https://github.com/fraenkel-lab/OmicsIntegrator.

Read more at [PLOS Computational Biology](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004879).
