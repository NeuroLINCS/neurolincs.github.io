---
title: "Tools"
layout: splash
permalink: /tools/

# AChroMap:
#   - image_path: tools/achromap.jpg
#     alt: "achromap"
#     title: "AChroMap"
#     excerpt: "AChroMap is a data integration tool for transcriptomic and epigenomic data. It generates a list of enriched motifs in open chromatin regions (as assayed by ATAC-seq or DNase-seq) for a given set of differentially expressed genes."
#     links:
#       - "[Use AchroMAP](http://achromap.neurolincs.org/)"

Omics:
  - image_path: tools/omics_integrator.png
    alt: "omics"
    title: "Omics Integrator"
    excerpt: "Omics Integrator is package comprised of command-line tools designed to integrate high-throughput datasets such as gene expression, phospho-proteomic data and the results from genetic screens. As shown below, Garnet is used to identify transcription factors that give rise to gene expression changes using epigenetic data while Forest integrates these data or other data by finding connections in a protein interaction network."
    links:
      - "[Use Omics Integrator](http://fraenkel-nsf.csbi.mit.edu/omicsintegrator/)"
      - "[Read More at PLOS Computational Biology](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004879)"

PIUMet:
  - image_path: tools/PIUMet.jpg
    alt: "piumet"
    title: "PIUMet"
    excerpt: "PIUMet is a network-based algorithm for integrative analysis of untargeted metabolomic data. It leverages known metabolic reactions and protein-protein interactions to analyze the ambiguous assignment of metabolomics features and identify disease-associated pathways and hidden components."
    links:
      - "[Use PIUMet](http://fraenkel-nsf.csbi.mit.edu/PIUMet/)"
      - "[Read more at Nature Methods](http://www.nature.com/nmeth/journal/v13/n9/full/nmeth.3940.html)"

Galaxy:
  - image_path: tools/galaxy.png
    alt: "galaxy"
    title: "NeuroLINCS Galaxy"
    excerpt: "We've released a custom 'flavor' of Galaxy, a docker image producing a galaxy optimized for our analyzes, available to the community."
    links:
      - "[Learn more about Galaxy](https://galaxyproject.org/)"
      - "[The NeuroLINCS Galaxy Instance](http://galaxy.neurolincs.org/)"
      - "[Information about our Galaxy Workflows](http://galaxy.neurolincs.org/u/terri/p/neurolincs-data-analysis-workflows)"
      - "[The NeuroLINCS-Galaxy Docker Image](https://github.com/fraenkel-lab/galaxy-neurolincs). If you intend to reproduce or conduct similar analyses at scale, comes pre-configured with the tools we use as part of our workflows."
---

<!-- {% include feature_row id="AChroMap" type="left" %} -->

{% include feature_row id="Omics" type="left" %}

{% include feature_row id="PIUMet" type="left" %}

{% include feature_row id="Galaxy" type="left" %}
