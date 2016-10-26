---
title: "Tools"
layout: splash
permalink: /tools/

AChroMap:
  - image_path: tools/achromap.jpg
    alt: "achromap"
    title: "AChroMap"
    excerpt: "AChroMap is a data integration tool for transcriptomic and epigenomic data. It generates a list of enriched motifs in open chromatin regions (as assayed by ATAC-seq or DNAseH) for a given set of differentially expressed genes."
    links:
      -"[Use AchroMAP](http://www.neurolincs.org/shiny/achromap/)"
      
Omics:
  - image_path: tools/omics_integrator.png
    alt: "omics"
    title: "Omics Integrator"
    excerpt: "Omics Integrator is package comprised of command-line tools designed to integrate high-throughput datasets such as gene expression, phospho-proteomic data and the results from genetic screens. As shown below, Garnet is used to identify transcription factors that give rise to gene expression changes using epigenetic data while Forest integrates these data or other data by finding connections in a protein interaction network."
    links:
      -"[Use Omics Integrator](http://fraenkel-nsf.csbi.mit.edu/omicsintegrator/)"
      -"[Read More at PLOS Computational Biology](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004879)"

PIUMet:
  - image_path: tools/transcriptomics.jpg
    alt: "piumet"
    title: "PIUMet"
    excerpt: "PIUMet is a network-based algorithm for integrative analysis of untargeted metabolomic data. It leverages known metabolic reactions and protein-protein interactions to analyze the ambiguous assignment of metabolomics features and identify disease-associated pathways and hidden components.  
    links:
      - "[Use PIUMet](http://fraenkel-nsf.csbi.mit.edu/PIUMet/)"
      - "[Read more at Nature Methods](http://www.nature.com/nmeth/journal/v13/n9/full/nmeth.3940.html)"
---

<!-- Note: We're sketchily using the alt tag to pass the ID through to feature row. -->
<!-- Make sure the alt tags are properly set above.  -->

{% include feature_row id="AChroMap" type="left" %}

{% include feature_row id="Omics" type="left" %}

{% include feature_row id="PIUMet" type="left" %}
