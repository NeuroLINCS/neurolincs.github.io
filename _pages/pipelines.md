---
layout: single
permalink: /pipelines/
---

# NeuroLINCS Project  

The NeuroLINCS Project is part of the NIH Common Fund's Library of Integrated Network-based Cellular Signatures (LINCS) program, which aims to characterize how a variety of human cells, tissues and entire organism respond to perturbations by drugs and other molecular factors.
As Part of the LINCS program, the NeuroLINCS study concentrates on human brain cells, which are far less understood than other cells in the body. Our initial focus is to produce diseased motor neurons from patients by utilizing high-quality induced pluripotent stem cell (iPSC) lines from Amyotrophic Lateral Sclerosis (ALS) and Spinal Muscular Atrophy (SMA) patients in addition to unaffected normal healthy controls. Using state-of-the-art OMICS methods (genomics, epigenomics, transcriptomics, and proteomics), we intend to create a wealth of cellular data that is patient-specific in the context of their baseline genetic perturbations and in the presence of other genetic and environmental perturbagens (e.g. endoplasmic reticulum stress). The primary data will be used to build cell signatures that convey the key features that distinguish the state of a cell and determine its behavior. Ultimately, the analysis of these datasets will lead to the identification of a network of unique signatures relevant to each of these motor neuron diseases. 

## Getting You Started

Here are some information and videos that will help you get started using Galaxy and the NeuroLINCS pipelines. You can use these workflows/pipelines with your own data or rerun the NeuroLINCS Data found on [dbGap](https://www.ncbi.nlm.nih.gov/gap/) and [LINCSproject](http://www.lincsproject.org). Links to data provided below.

### Galaxy Resources

* [Introduction To Galaxy](https://vimeo.com/131811884)     Learn what Galaxy is and how you can use it
* [Learning Resources](https://vimeo.com/channels/usegalaxy/75940376)       A collection of videos to help you learn how
* [Get Data: Upload File](https://vimeo.com/galaxyproject/videos/all/search:get%20data/sort:date)       How to upload your Data
* [Upload Data From SRA](https://galaxyproject.org/tutorials/upload/)       How to upload data from SRA

### NeuroLINCS Data Links

* [NeuroLINCS Website](http://neurolincs.org/)      NeuroLINCS website contains information on the project, including technologies, data, and tools developed and used by the team
* [NeuroLINCS Data Summary](http://neurolincs.org/data/)        Data page on NeuroLINCS website showing summary of experiments and links to data
* [NeuroLINCS Raw Data](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001231.v2.p1)       The NCBI data base of Genotypes and Phenotypes study that hosts the NeuroLINCS raw data files for ATAC-Seq, RNA-Seq and whole genome sequences
* [NeuroLINCS Raw Protein Data](https://chorusproject.org/pages/authentication.html#/login)     Chorus Project site that hosts the raw data files for SWATH proteomic assay. Note, you need to sign into Chorus in order to access the files
* [NeuroLINCS Processed Data](http://www.lincsproject.org/)     LINCSproject.org datasets for NeuroLINCS
* Experiment 1:   ATAC-Seq, RNA-Seq and proteomics were carried out on samples obtained from induced Pluripotnent Stem Cells (iPSC) cell lines. These lines were derived from ALS, SMA and Control (unaffected) individuals (three of each). 
    * [ATAC-Seq](http://lincsportal.ccs.miami.edu/datasets-beta/#/view/LDS-1354) 
    * [RNA-Seq](http://lincsportal.ccs.miami.edu/datasets-beta/#/view/LDS-1356)
    * [Proteomics](http://lincsportal.ccs.miami.edu/datasets-beta/#/view/LDS-1423) - NOTE: We do not have a proteomic workflow in Galaxy but you can still access the data for analysis using your tools.
* Experiment 2:   ATAC-Seq, RNA-Seq and proteomics were carried out on samples obtained from motor neuron lines generated from subject induced pluripotent stem cell (iPSC) lines. 
    * [ATAC-Seq](http://lincsportal.ccs.miami.edu/datasets-beta/#/view/LDS-1400) 
    * [RNA-Seq](http://lincsportal.ccs.miami.edu/datasets-beta/#/view/LDS-1398)
    * [Proteomics](http://lincsportal.ccs.miami.edu/datasets-beta/#/view/LDS-1423) - NOTE: We do not have a proteomic workflow in Galaxy but you can still access the data for analysis using your tools.

### Analyzing data using the pipelines/workflow

#### RNA-Seq Workflow 

1. Use RNA-Seq Step 1 'Secondary Analysis' workflow below to generate the count matrix (level 3 data) for all samples using raw fastq files.
2. If technical or growth replicates are present, use the [Rcode](https://github.com/NeuroLINCS/Rscripts) to generate the differentially expressed genes (level 4 data). If not, use the RNA-Seq Step 2 'Statistical Analysis of Gene Expression' workflow below to generate the differentially expressed gene list. 

#### ATAC-Seq Workflow

The ATAC pipeline on galaxy will generate BAM files from bowtie2 alignment and narrowPeak files from MACS2 peak calling.

1. Download the BAM and narrowPeak files to your computer or server. BAM files are very large so if possible, use an FTP client to transfer them to their destination.
2. Create a sample sheet for use with DiffBind using [this](https://github.com/NeuroLINCS/Rscripts/blob/master/sample_sheet_diffbind_example.csv) example as a template. For each sample, provide the path to the BAM file in the “bamReads” column of the sample sheet and the path to the narrowPeak file in the “Peaks” column.
3. Fill out the “PeakCaller” section with “macs” for all samples.
4. The “SampleID”, “Tissue”, “Factor”, “Condition”, “Treatment”, and “Replicate” column should be filled out with appropriate values for each sample although only the “SampleID” column is required; the other columns provide information to make convenient comparisons in DiffBind.
5. Once the sample sheet has been filled out, you can start using the DiffBind ATAC R vignette [here](https://github.com/NeuroLINCS/Rscripts) to analyze your data.

# Workflows

The workflows described below are used for primary analysis of NeuroLINCS cell line data.

## Web-based Pipeline For Differential Gene Expression Analysis (RNA-Seq)
*NeuroLINCs Transcriptomics Center, UC Irvine*

The workflows describes a standard analysis of bulk RNA-seq analysis. For a schematic of the pipeline, click [here](http://neurolincs.org/pdf/LINCS-RNAseq-Data-Pipeline.pdf)

For more information on NeuroLINCS, click [here](http://neurolincs.org/)

#### Step 1. Secondary Analysis

<details>
<summary>Galaxy Workflow | imported: fraenkel_ATAC_batch_experimental_paired (for in house usage)</summary>
<br>
<h2>Step 1: Input dataset collection</h2>
<b>input</b>
<i>(select at runtime)</i>
<br> 
<h2>Step 2: Input dataset</h2>
<b>encode blacklist regions</b>
<i>(select at runtime)</i>
<br> 
<h2>Step 3: Trimmomatic</h2>
<b>Single-end or paired-end reads?</b>
<br>
Paired-end (as collection)
<br>
<b>Select FASTQ dataset collection with R1/R2 pair</b>
<br>
Output dataset 'output' from step 1
<br>
<b>Perform initial ILLUMINACLIP step?</b>
<br>
False
<br>
<b>Trimmomatic Operations</b> 
<br>
<b>&emsp;Trimmomatic Operation 1</b>
<br>
<b>&emsp;Select Trimmomatic operation to perform</b>
<br>
&emsp;Cut bases off the start of a read, if below a threshold quality (LEADING)
<br>
<b>&emsp;Minimum quality required to keep a base</b>
<br>
&emsp;15
<br>
<b>&emsp;Trimmomatic Operation 2</b>
<br>
<b>&emsp;Select Trimmomatic operation to perform</b>
<br>
&emsp;Cut bases off the end of a read, if below a threshold quality (TRAILING)
<br>
<b>&emsp;Minimum quality required to keep a base</b>
<br>
&emsp;15
<br>
<br>
<h2>Step 4: FastQC</h2>
<b>Short read data from your current history</b>
<br>
Output dataset 'fastq_out_paired' from step 3
<br>
<b>Contaminant list</b>
<i>(select at runtime)</i>
<br>
<b>Submodule and Limit specifing file</b>
<i>(select at runtime)</i>
<br>
<br>
<h2>Step 5: Bowtie2</h2>
<b>Is this single or paired library</b>
<br>
Paired-end Dataset Collection
<br>
<b>FASTQ Paired Dataset</b>
<br>
Output dataset 'fastq_out_paired' from step 3
<br>
<b>Write unaligned reads (in fastq format) to separate file(s)</b>
<br>
False
<br>
<b>Write aligned reads (in fastq format) to separate file(s)</b>
<br>
False
<br>
<b>Do you want to set paired-end options?</b>
<br>
No
<br>
<b>Will you select a reference genome from your history or use a built-in index?</b>
<br>
Use a built-in genome index
<br>
<b>Select reference genome</b>
<br>
hg38
<br>
<b>Set read groups information?</b>
<br>
Do not set
<br>
<b>Select analysis mode</b>
<br>
1: Default setting only
<br>
<b>Do you want to use presets?</b>
<br>
No, just use defaults
<br>
<b>Save the bowtie2 mapping statistics to the history</b>
<br>
True
<br>
<br>
<h2>Step 6: BAM filter</h2>
<b>Select BAM dataset</b>
<br>
Output dataset 'output' from step 5
<br>
<b>Remove reads that are smaller than</b>
<br>
Not available.
<br>
<b>Remove reads that are larger than</b>
<br>
Not available.
<br>
<b>Keep only mapped reads</b>
<br>
True
<br>
<b>Keep only unmapped reads</b>
<br>
False
<br>
<b>Keep only properly paired reads</b>
<br>
True
<br>
<b>Discard properly paired reads</b>
<br>
False
<br>
<b>Remove reads that match the mask</b>
<br>
Empty.
<br>
<b>Remove reads that have the same sequence</b>
<br>
-1
<br>
<b>Remove reads that start at the same position</b>
<br>
False
<br>
<b>Remove reads with that many mismatches</b>
<br>
Not available.
<br>
<b>Remove secondary alignment reads</b>
<br>
True
<br>
<b>Remove reads that do not pass the quality control</b>
<br>
False
<br>
<b>Remove reads that are marked as PCR dupicates</b>
<br>
False
<br>
<b>Remove reads that are in any of the regions</b>
<br>
select at runtime
<br>
<b>Remove reads that are NOT any of the regions</b>
<br>
select at runtime
<br>
<b>Strand information from BED file is ignored</b>
<br>
False
<br>
<b>Exclude reads NOT mapped to a reference</b>
<br>
Empty.
<br>
<b>Exclude reads mapped to a particular reference</b>
<br>
chrM
<br>
<b>Filter by maximum mismatch ratio</b>
<br>
Not available.
<br>
<br>
<h2>Step 7: Sort</h2>
<b>BAM File</b>
<br>
Output dataset 'outfile' from step 6
<br>
<b>Sort by</b>
<br>
Chromosomal coordinates
<br>
<br>
</details>

#### Step 2. Statistical Analysis of gene expression

This step uses DESeq2 standard workflow to test differential expression across two groups, e.g. control vs. ALS.

<details>
<summary>Galaxy Workflow | imported: fraenkel_ATAC_batch_experimental_single (for in house usage)</summary>
<br>
<h2>Step 1: Input dataset collection</h2>
<b>Input FASTQs</b>
<i>(select at runtime)</i>
<br>
<br>
<h2>Step 2: Input dataset</h2>
<b>Naked DNA File</b>
<i>(select at runtime)</i> 
<br>
<br> 
<h2>Step 3: Input dataset</h2> 
<b>encode blacklist regions</b>
<i>(select at runtime)</i>
<br>
<br> 
<h2>Step 4: Trimmomatic</h2>
<b>Single-end or paired-end reads?</b>
<br>
Single-end
<br>
<b>Input FASTQ file</b>
<br>
Output dataset 'output' from step 1
<br>
<b>Perform initial ILLUMINACLIP step?<b> 
<br>
False
<br>
<b>Trimmomatic Operations</b>
<br>
<b>&emsp;Trimmomatic Operation 1</b>
<br>
<b>&emsp;Select Trimmomatic operation to perform</b>
<br>
&emsp;Cut bases off the start of a read, if below a threshold quality (LEADING)
<br>
<b>&emsp;Minimum quality required to keep a base</b>
&emsp;15
<br>
<b>&emsp;Trimmomatic Operation 2</b>
<br>
<b>&emsp;Select Trimmomatic operation to perform</b>
<br>
&emsp;Cut bases off the end of a read, if below a threshold quality (TRAILING)
<br>
<b>&emsp;Minimum quality required to keep a base</b>
<br>
&emsp;15
<br>
<br>
</details>

For more information regarding DESeq2, please visit this [page](https://bioconductor.org/packages/release/bioc/html/DESeq2.html)

## Web-based Pipeline For Assay for Transposase-Accessible Chromatin followed by sequencing (ATAC-Seq)
*NeuroLINCs Epigenomics Center, MIT*

### Assay overview

The ATAC-seq experiment provides genome-wide profiles of chromatin accessibility. Briefly, the ATAC-seq method works as follows: loaded transposase inserts sequencing primers into open chromatin sites across the genome, and reads are then sequenced. The ends of the reads mark open chromatin sites. The ATAC-seq pipeline is used for statistical signal processing of short-read sequencing data and quality control, producing alignments and measures of enrichment. In its current form, it is a prototype and will likely undergo substantial change within the next year. 


### ATAC Pipeline

Our ATAC pipeline takes in FASTQ files containing raw reads and outputs peaks and peak annotations.

First, we trim the start and end of reads using Trimmomatic to remove bases with a Phred quality of less than 10. Removing low quality bases improves accuracy of alignment. We use Bowtie2 to align our trimmed reads to the hg38 genome using the default parameters. We then use SAMtools to remove multi mapped reads, reads aligned to mitochondrial DNA, and alignments will a mapping quality of less than 10. This filtering step removes noise from downstream analysis.  Afterward, peak calling is performed on BAM using MACS2 with the following parameters: --format BAM --gsize hs –qvalue .05. We have prepared a background bam file for MACS2 peak calling by extracting naked genomic DNA from iMNS, performing ATAC on the genomic DNA, and sequencing the resulting library. Peak annotation is performed using the script “map_peaks_to_known_genes.py” from the ChipSeqUtil package; we map genes to peaks within a window of +/- 10kb. Bigwig files for the reads and BigBed files for the peaks are generated for visualization of data on a genome browser.






