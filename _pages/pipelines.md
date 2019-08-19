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

| - | - | 
| [Introduction To Galaxy](https://vimeo.com/131811884) | Learn what Galaxy is and how you can use it | 
| [Learning Resources](https://vimeo.com/channels/usegalaxy/75940376)| A collection of videos to help you learn how |
| [Get Data: Upload File](https://vimeo.com/75938324) | How to upload your Data | 
| [Upload Data From SRA](https://galaxyproject.org/tutorials/upload/) | How to upload data from SRA | 

### NeuroLINCS Data Links

| - | - | 
| [NeuroLINCS Website](http://neurolincs.org/) | NeuroLINCS website contains information on the project, including technologies, data, and tools developed and used by the team | 
| [NeuroLINCS Data Summary](http://neurolincs.org/data/) | Data page on NeuroLINCS website showing summary of experiments and links to data | 
| [NeuroLINCS Raw Data](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001231.v2.p1) | The NCBI data base of Genotypes and Phenotypes study that hosts the NeuroLINCS raw data files for ATAC-Seq, RNA-Seq and whole genome sequences | 
| [NeuroLINCS Raw Protein Data](https://chorusproject.org/pages/authentication.html#/login) | Chorus Project site that hosts the raw data files for SWATH proteomic assay. Note, you need to sign into Chorus in order to access the files | 
| [NeuroLINCS Processed Data](http://www.lincsproject.org/) | LINCSproject.org datasets for NeuroLINCS |    

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

The workflows describes a standard analysis of bulk RNA-seq analysis. For a schematic of the pipeline, click [here](http://neurolincs.org/pdf/LINCS-RNAseq-Data-Pipeline.pdf). 

For more information on NeuroLINCS, click [here](http://neurolincs.org/). 

#### Step 1. Secondary Analysis

<details>
<summary>Galaxy Workflow | imported: fraenkel_ATAC_batch_experimental_paired (for in house usage)</summary>
<br>
<h2>Step 1: Input dataset collection</h2>
<b>input</b>
<br>
<i>select at runtime</i>
<br> 
<h2>Step 2: Input dataset</h2>
<b>encode blacklist regions</b>
<br>
<i>select at runtime</i>
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
<b>Trimmomatic Operation 1</b>
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
<br>
<i>select at runtime</i>
<br>
<b>Submodule and Limit specifing file</b>
<br>
<i>select at runtime</i>
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
hg19
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
<i>select at runtime</i>
<br>
<b>Remove reads that are NOT any of the regions</b>
<br>
<i>select at runtime</i>
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
<h2>Step 8: MarkDuplicates</h2>
<b>Select SAM/BAM dataset or dataset collection</b>
<br> 
Output dataset 'output1' from step 7
<br> 
<b>Comments</b> 
<br> 
<b>If true do not write duplicates to the output file instead of writing them with appropriate flags set</b>
<br>
True
<br>
<b>Assume the input file is already sorted</b> 
<br>
True
<br>
<b>The scoring strategy for choosing the non-duplicate among candidates</b>
<br>
SUM_OF_BASE_QUALITIES
<br> 
<b>Regular expression that can be used in unusual situations to parse non-standard read names in the incoming SAM/BAM dataset</b> 
<br>
[a-zA-Z0-9]+:[0-9]:([0-9]+):([0-9]+):([0-9]+).*.
<br> 
<b>The maximum offset between two duplicte clusters in order to consider them optical duplicates</b>
<br>
100
<br> 
<b>Barcode Tag</b> 
<br> 
Empty.
<br>
<b>Select validation stringency</b> 
<br> 
Lenient
<br> 
<br> 
<h2>Step 9: bamCoverage</h2> 
<b>BAM/CRAM file</b> 
<br> 
Output dataset 'outFile' from step 8
<br> 
<b>Bin size in bases</b> 
<br> 
50 
<br> 
<b>Scaling/Normalization method</b> 
<br> 
Normalize to reads per kilobase per million (RPKM)
<br> 
<b>Coverage file format</b> 
<br> 
bigwig
<br> 
<b>Region of the genome to limit the operation to</b> 
<br> 
Empty.
<br> 
<b>Show advanced options</b> 
<br> 
no
<br> 
<br> 
<h2>Step 10: MACS2 callpeak</h2> 
<b>Are you pooling Treatment Files?</b> 
<br> 
No
<br> 
<b>ChIP-Seq Treatment File</b> 
<br> 
<i>select at runtime</i> 
<br> 
<b>Do you have a Control File?</b> 
<br> 
No
<br> 
<b>Format of Input Files</b> 
<br> 
BAM 
<br> 
<b>Effective genome size</b> 
<br> 
H. sapiens (2.7e9)
<br> 
<b>Build Model</b> 
<br> 
Build the shifting model
<br> 
<b>Set lower mfold bound</b> 
<br> 
5
<br> 
<b>Set upper mfold bound</b> 
<br> 
50
<br> 
<b>Band width for picking regions to compute fragment size</b> 
<br> 
300
<br> 
<b>Peak detection based on</b> 
<br> 
q-value
<br> 
<b>Minimum FDR (q-value) cutoff for peak detection</b> 
<br> 
0.05
<br> 
<b>Additional Outputs</b> 
<br> 
Peaks as tabular file (compatible wih MultiQC)
<br> 
<b>Advanced Options:</b>
<br>
<b>&emsp;When set, scale the small sample up to the bigger sample</b>
<br>
&emsp;False
<br>
<b>&emsp;Use fixed background lambda as local lambda for every peak region</b>
<br>
&emsp;False
<br>
<b>&emsp;Save signal per million reads for fragment pileup profiles</b> 
<br>
&emsp;False
<br>
<b>&emsp;When set, use a custom scaling ratio of ChIP/control (e.g. calculated using NCIS) for linear scaling</b>
<br>
&emsp;1.0
<br>
<b>&emsp;The small nearby region in basepairs to calculate dynamic lambda</b>
<br>
&emsp;1000
<br>
<b>&emsp;The large nearby region in basepairs to calculate dynamic lambda</b>
<br>
&emsp;10000
<br>
<b>&emsp;Composite broad regions</b>
<br>
&emsp;No broad regions
<br>
<b>&emsp;Use a more sophisticated signal processing approach to find subpeak summits in each enriched peak region</b>
<br>
&emsp;False
<br>
<b>&emsp;How many duplicate tags at the exact same location are allowed?</b>
<br>
&emsp;1
<br>
<br>
<h2>Step 11: multiBigwigSummary</h2>
<b>Sample order matters</b>
<br>
No
<br>
<b>Bigwig files</b>
<br>
Output dataset 'outFileName' from step 9
<br>
<b>Choose computation mode</b>
<br>
Bins
<br>
<b>Bin size in bp</b>
<br>
10000
<br>
<b>Distance between bins</b>
<br>
0
<br>
<b>Region of the genome to limit the operation to</b>
<br>
Empty.
<br>
<b>Save raw counts (scores) to file</b>
<br>
True
<br>
<b>Show advanced options</b>
<br>
no
<br>
<br>
<h2>Step 12: Intersect intervals</h2>
<b>File A to intersect with B</b>
<br>
Output dataset 'output_narrowpeaks' from step 10
<br>
<b>Combined or separate output files</b>
<br>
One output file per 'input B' file
<br>
<b>File(s) B to intersect with A</b>
<br>
<i>select at runtime</i>
<br>
<b>Calculation based on strandedness?</b>
<br>
Overlaps on either strand
<br>
<b>What should be written to the output file?</b>
<br>
Write the original entry in A for each overlap (-wa)
<br>
<b>Treat split/spliced BAM or BED12 entries as distinct BED intervals when computing coverage.</b>
<br>
False
<br>
<b>Minimum overlap required as a fraction of the BAM alignment</b>
<br>
Empty.
<br>
<b>Require that the fraction of overlap be reciprocal for A and B</b>
<br>
False
<br>
<b>Report only those alignments that **do not** overlap with file(s) B</b>
<br>
True
<br>
<b>Write the original A entry _once_ if _any_ overlaps found in B.</b>
<br>
False
<br>
<b>For each entry in A, report the number of overlaps with B.</b>
<br>
False
<br>
<b>Print the header from the A file prior to results</b>
<br>
False
<br>
<br>
<h2>Step 13: plotPCA</h2> 
<b>Matrix file from the multiBamSummary or multiBigwigSummary tools</b>
<br> 
Output dataset 'outFile' from step 11
<br> 
<b>Image file format</b> 
<br> 
pdf
<br> 
<b>Title of the plot</b> 
<br> 
Empty. 
<br> 
<b>Save the matrix of PCA and eigenvalues underlying the plot.</b> 
<br> 
False 
<br> 
<b>Show advanced options</b> 
<br> 
no
<br> 
<h2>Step 14: plotCorrelation</h2> 
<b>Matrix file from the multiBamSummary tool</b> 
<br> 
Output dataset 'outFile' from step 11
<br> 
<b>Correlation method</b> 
<br> 
Spearman 
<br> 
<b>Plotting type</b> 
<br> 
Heatmap
<br> 
<b>Minimum value for the heatmap intensities</b> 
<br> 
Empty. 
<br> 
<b>Maximum value for the heatmap intensities</b> 
<br> 
Empty. 
<br> 
<b>Color map to use for the heatmap</b> 
<br> 
RdYlBu
<br> 
<b>Title of the plot</b> 
<br> 
Empty. 
<br> 
<b>Plot the correlation value</b> 
<br> 
True
<br> 
<b>Plot height</b> 
<br> 
9.5 
<br> 
<b>Plot width</b> 
<br> 
11.0 
<br> 
<b>Skip zeroes</b> 
<br> 
False 
<br> 
<b>Image file format</b> 
<br> 
pdf
<br> 
<b>Remove regions with very large counts</b> 
<br> 
True
<br> 
<b>Save the matrix of values underlying the heatmap</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 15: BED-to-bigBed</h2> 
<b>Convert</b> 
<br> 
Output dataset 'output' from step 12
<br> 
<b>Converter settings to use</b> 
<br> 
Full parameter list
<br> 
<b>Items to bundle in r-tree</b> 
<br> 
256
<br> 
<b>Data points bundled at lowest level</b> 
<br> 
512
<br> 
<b>Do not use compression</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 16: computeMatrix</h2> 
<b>Select regions</b> 
<br>
<b>&emsp;Select regions 1</b> 
<br>
<b>&emsp;Regions to plot</b> 
<br>
&emsp;Output dataset 'output' from step 12
<br> 
<b>Sample order matters</b> 
<br> 
Yes 
<br> 
<b>Score files</b> 
<br>
<b>&emsp;Score files 1</b> 
<br>
<b>&emsp;Score file</b> 
<br>
&emsp;Output dataset 'outFileName' from step 9
<br> 
<b>computeMatrix has two main output options</b> 
<br> 
reference-point
<br> 
<b>The reference point for the plotting</b> 
<br> 
center of region
<br> 
<b>Discard any values after the region end</b> 
<br> 
False 
<br>
<b>Distance upstream of the start site of the regions defined in the region file</b> 
<br> 
1000 
<br> 
<b>Distance downstream of the end site of the given regions</b> 
<br> 
1000 
<br> 
<b>Show advanced output settings</b> 
<br> 
no 
<br> 
<b>Show advanced options</b> 
<br> 
yes
<br> 
<b>Length, in bases, of non-overlapping bins used for averaging the score over the regions length</b> 
<br> 
50 
<br> 
<b>Sort regions</b> 
<br> 
maintain the same ordering as the input files
<br> 
<b>Method used for sorting</b> 
<br> 
mean 
<br> 
<b>Define the type of statistic that should be displayed.</b> 
<br> 
mean 
<br> 
<b>Convert missing values to 0?</b> 
<br> 
False 
<br> 
<b>Skip zeros</b> 
<br> 
False 
<br> 
<b>Minimum threshold</b> 
<br> 
Not available.
<br> 
<b>Maximum threshold</b> 
<br> 
Not available.
<br> 
<b>Scaling factor</b> 
<br> 
Not available.
<br> 
<b>Labels for the samples (each bigwig)</b> 
<br> 
Empty. 
<br> 
<b>Use a metagene model</b> 
<br> 
False 
<br> 
<b>trascript designator</b> 
<br> 
transcript
<br> 
<b>exon designator</b> 
<br> 
exon
<br> 
<b>transcriptID key designator</b> 
<br> 
transcript_id
<br> 
<b>Blacklisted regions in BED/GTF format</b> 
<br> 
<i>select at runtime</i> 
<br> 
<br> 
<h2>Step 17: plotHeatmap</h2> 
<b>Matrix file from the computeMatrix tool</b> 
<br> 
Output dataset 'outFileName' from step 16
<br> 
<b>Show advanced output settings</b> 
<br> 
no 
<br> 
<b>Show advanced options</b> 
<br> 
no 
</details>

#### Step 2. Statistical Analysis of gene expression

This step uses DESeq2 standard workflow to test differential expression across two groups, e.g. control vs. ALS.

<details>
<summary>Galaxy Workflow | imported: fraenkel_ATAC_batch_experimental (for in house usage)</summary>
<br>
<h2>Step 1: Input dataset collection</h2>
<b>Input FASTQs</b>
<br> 
<i>select at runtime</i>
<br>
<br>
<h2>Step 2: Input dataset</h2>
<b>Naked DNA File</b>
<br> 
<i>select at runtime</i> 
<br>
<br> 
<h2>Step 3: Input dataset</h2> 
<b>encode blacklist regions</b>
<br>
<i>select at runtime</i>
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
&emsp;<b>Minimum quality required to keep a base</b>
<br>
&emsp;15
<br>
<br>
<h2>Step 5: Bowtie2</h2> 
<b>Is this single or paired library</b> 
<br> 
Single-end 
<br> 
<b>FASTA/Q file</b> 
<br> 
Output dataset 'fastq_out' from step 4
<br> 
<b>Write unaligned reads (in fastq format) to separate file(s)</b> 
<br> 
False 
<br> 
<b>Write aligned reads (in fastq format) to separate file(s)</b> 
<br> 
False 
<br> 
<b>Will you select a reference genome from your history or use a built-in index?</b> 
<br> 
Use a built-in genome index
<br> 
<b>Select reference genome</b> 
<br> 
hg19
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
False 
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
<i>select at runtime</i> 
<br> 
<b>Remove reads that are NOT any of the regions</b> 
<br> 
<i>select at runtime</i> 
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
<h2>Step 8: MarkDuplicates</h2> 
<b>Select SAM/BAM dataset or dataset collection</b> 
<br> 
Output dataset 'output1' from step 7
<br> 
<b>Comments</b> 
<br> 
<b>If true do not write duplicates to the output file instead of writing them with appropriate flags set</b> 
<br> 
True 
<br> 
<b>Assume the input file is already sorted</b> 
<br> 
True 
<br> 
<b>The scoring strategy for choosing the non-duplicate among candidates</b> 
<br> 
SUM_OF_BASE_QUALITIES
<br> 
<b>Regular expression that can be used in unusual situations to parse non-standard read names in the incoming SAM/BAM dataset</b> 
<br> 
[a-zA-Z0-9]+:[0-9]:([0-9]+):([0-9]+):([0-9]+).*.
<br> 
<b>The maximum offset between two duplicte clusters in order to consider them optical duplicates</b> 
<br> 
100 
<br> 
<b>Barcode Tag</b> 
<br> 
Empty. 
<br> 
<b>Select validation stringency</b> 
<br> 
Lenient
<br> 
<br> 
<h2>Step 9: bamCoverage</h2> 
<b>BAM/CRAM file</b> 
<br> 
Output dataset 'outFile' from step 8
<br> 
<b>Bin size in bases</b> 
<br> 
50 
<br> 
<b>Scaling/Normalization method</b> 
<br> 
Normalize to reads per kilobase per million (RPKM)
<br> 
<b>Coverage file format</b> 
<br> 
bigwig
<br> 
<b>Region of the genome to limit the operation to</b> 
<br> 
Empty.
<br> 
<b>Show advanced options</b> 
<br> 
no 
<br> 
<br> 
<h2>Step 10: MACS2 callpeak</h2> 
<b>Are you pooling Treatment Files?</b> 
<br> 
No 
<br> 
<b>ChIP-Seq Treatment File</b> 
<br> 
<i>select at runtime</i> 
<br> 
<b>Do you have a Control File?</b> 
<br> 
No 
<br> 
<b>Format of Input Files</b> 
<br> 
Single-end BAM
<br> 
<b>Effective genome size</b> 
<br> 
H. sapiens (2.7e9)
<br> 
<b>Build Model</b> 
<br> 
Do not build the shifting model (--nomodel)
<br> 
<b>Set extension size</b> 
<br> 
200 
<br> 
<b>Set shift size</b> 
<br> 
-100 
<br> 
<b>Peak detection based on</b> 
<br> 
q-value
<br> 
<b>Minimum FDR (q-value) cutoff for peak detection</b> 
<br> 
0.01
<br> 
<b>Additional Outputs</b> 
<br> 
Peaks as tabular file (compatible wih MultiQC) Peak summits Scores in bedGraph files (--bdg) Summary page (html) Plot in PDF (only available if a model is created and if BAMPE is not used)
<br> 
<b>Advanced Options:</b> 
<br> 
<b>&emsp;When set, scale the small sample up to the bigger sample</b> 
<br>
&emsp;False 
<br>
<b>&emsp;Use fixed background lambda as local lambda for every peak region</b> 
<br>
&emsp;False 
<br>
<b>&emsp;Save signal per million reads for fragment pileup profiles</b> 
<br>
&emsp;False 
<br>
<b>&emsp;When set, use a custom scaling ratio of ChIP/control (e.g. calculated using NCIS) for linear scaling</b> 
<br>
&emsp;1.0 
<br>
<b>&emsp;The small nearby region in basepairs to calculate dynamic lambda</b> 
<br>
&emsp;1000 
<br>
<b>&emsp;The large nearby region in basepairs to calculate dynamic lambda</b> 
<br>
&emsp;10000 
<br>
<b>&emsp;Composite broad regions</b> 
<br>
&emsp;No broad regions
<br>
<b>&emsp;Use a more sophisticated signal processing approach to find subpeak summits in each enriched peak region</b> 
<br>
&emsp;True 
<br>
<b>&emsp;How many duplicate tags at the exact same location are allowed?</b> 
<br>
&emsp;1
<br> 
<br> 
<h2>Step 11: multiBigwigSummary</h2> 
<b>Sample order matters</b> 
<br> 
No 
<br> 
<b>Bigwig files</b> 
<br> 
Output dataset 'outFileName' from step 9
<br> 
<b>Choose computation mode</b> 
<br> 
Bins
<br> 
<b>Bin size in bp</b> 
<br> 
10000
<br> 
<b>Distance between bins</b> 
<br> 
0 
<br> 
<b>Region of the genome to limit the operation to</b> 
<br> 
Empty. 
<br> 
<b>Save raw counts (scores) to file</b> 
<br> 
True 
<br> 
<b>Show advanced options</b> 
<br> 
no 
<br> 
<br> 
<h2>Step 12: Intersect intervals</h2> 
<b>File A to intersect with B</b> 
<br> 
Output dataset 'output_narrowpeaks' from step 10
<br> 
<b>Combined or separate output files</b> 
<br> 
One output file per 'input B' file
<br> 
<b>File(s) B to intersect with A</b> 
<br> 
<i>select at runtime</i> 
<br> 
<b>Calculation based on strandedness?</b> 
<br> 
Overlaps on either strand
<br> 
<b>What should be written to the output file?</b> 
<br> 
Write the original entry in A for each overlap (-wa)
<br> 
<b>Treat split/spliced BAM or BED12 entries as distinct BED intervals when computing coverage.</b> 
<br> 
False 
<br> 
<b>Minimum overlap required as a fraction of the BAM alignment</b> 
<br> 
Empty. 
<br> 
<b>Require that the fraction of overlap be reciprocal for A and B</b> 
<br> 
False 
<br> 
<b>Report only those alignments that **do not** overlap with file(s) B</b> 
<br> 
True 
<br> 
<b>Write the original A entry _once_ if _any_ overlaps found in B.</b> 
<br> 
False 
<br> 
<b>For each entry in A, report the number of overlaps with B.</b> 
<br> 
False 
<br> 
<b>Print the header from the A file prior to results</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 13: plotPCA</h2>
<b>Matrix file from the multiBamSummary or multiBigwigSummary tools</b> 
<br> 
Output dataset 'outFile' from step 11
<br> 
<b>Image file format</b> 
<br> 
pdf
<br> 
<b>Title of the plot</b> 
<br> 
Empty. 
<br> 
<b>Save the matrix of PCA and eigenvalues underlying the plot.</b> 
<br> 
False 
<br> 
<b>Show advanced options</b> 
<br> 
no 
<br> 
<br> 
<h2>Step 14: plotCorrelation</h2> 
<b>Matrix file from the multiBamSummary tool</b> 
<br> 
Output dataset 'outFile' from step 11
<br> 
<b>Correlation method</b> 
<br> 
Spearman
<br> 
<b>Plotting type</b> 
<br> 
Heatmap
<br> 
<b>Minimum value for the heatmap intensities</b> 
<br> 
Empty. 
<br> 
<b>Maximum value for the heatmap intensities</b> 
<br> 
Empty. 
<br> 
<b>Color map to use for the heatmap</b> 
<br> 
RdYlBu
<br> 
<b>Title of the plot</b> 
<br> 
Empty.
<br> 
<b>Plot the correlation value</b> 
<br> 
True 
<br> 
<b>Plot height</b> 
<br> 
9.5
<br> 
<b>Plot width</b> 
<br> 
11.0 
<br> 
<b>Skip zeros</b> 
<br> 
False 
<br> 
<b>Image file format</b> 
<br> 
pdf 
<br> 
<b>Remove regions with very large counts</b> 
<br> 
True 
<br> 
<b>Save the matrix of values underlying the heatmap</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 15: BED-to-bigBed</h2> 
<b>Convert</b> 
<br> 
Output dataset 'output' from step 12
<br> 
<b>Converter settings to use</b> 
<br> 
Full parameter list
<br> 
<b>Items to bundle in r-tree</b> 
<br> 
256
<br> 
<b>Data points bundled at lowest level</b> 
<br> 
512
<br> 
<b>Do not use compression</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 16: computeMatrix</h2> 
<b>Select regions</b> 
<br> 
<b>&emsp;Select regions 1</b>
<br>
<b>&emsp;Regions to plot</b> 
<br>
&emsp;Output dataset 'output' from step 12
<br> 
<b>Sample order matters</b> 
<br> 
Yes 
<br> 
<b>Score files</b> 
<br> 
<b>&emsp;Score files 1</b> 
<br>
<b>&emsp;Score file</b> 
<br>
&emsp;Output dataset 'outFileName' from step 9
<br> 
<b>computeMatrix has two main output options</b> 
<br> 
reference-point
<br> 
<b>The reference point for the plotting</b> 
<br> 
center of region
<br> 
<b>Discard any values after the region end</b> 
<br> 
False 
<br> 
<b>Distance upstream of the start site of the regions defined in the region file</b> 
<br> 
1000 
<br> 
<b>Distance downstream of the end site of the given regions</b> 
<br> 
1000 
<br> 
<b>Show advanced output settings</b> 
<br> 
no 
<br> 
<b>Show advanced options</b> 
<br> 
yes 
<br> 
<b>Length, in bases, of non-overlapping bins used for averaging the score over the regions length</b> 
<br> 
50 
<br> 
<b>Sort regions</b> 
<br> 
maintain the same ordering as the input files
<br> 
<b>Method used for sorting</b> 
<br> 
mean
<br> 
<b>Define the type of statistic that should be displayed.</b> 
<br> 
mean
<br> 
<b>Convert missing values to 0?</b> 
<br> 
False 
<br> 
<b>Skip zeros</b> 
<br> 
False 
<br> 
<b>Minimum threshold</b> 
<br> 
Not available.
<br> 
<b>Maximum threshold</b> 
<br> 
Not available.
<br> 
<b>Scaling factor</b> 
<br> 
Not available.
<br> 
<b>Labels for the samples (each bigwig)</b> 
<br> 
Empty. 
<br> 
<b>Use a metagene model</b> 
<br> 
False 
<br> 
<b>trascript designator</b> 
<br> 
transcript
<br> 
<b>exon designator</b> 
<br> 
exon
<br> 
<b>transcriptID key designator</b> 
<br> 
transcript_id
<br> 
<b>Blacklisted regions in BED/GTF format</b> 
<br> 
<i>select at runtime</i> 
<br> 
<br> 
<h2>Step 17: plotHeatmap</h2>
<b>Matrix file from the computeMatrix tool</b> 
<br> 
Output dataset 'outFileName' from step 16
<br> 
<b>Show advanced output settings</b> 
<br> 
no 
<br> 
<b>Show advanced options</b> 
<br> 
no 
</details>
<br>
For more information regarding DESeq2, please visit this [page](https://bioconductor.org/packages/release/bioc/html/DESeq2.html). 

## Web-based Pipeline For Assay for Transposase-Accessible Chromatin followed by sequencing (ATAC-Seq)
*NeuroLINCs Epigenomics Center, MIT*

### Assay overview

The ATAC-seq experiment provides genome-wide profiles of chromatin accessibility. Briefly, the ATAC-seq method works as follows: loaded transposase inserts sequencing primers into open chromatin sites across the genome, and reads are then sequenced. The ends of the reads mark open chromatin sites. The ATAC-seq pipeline is used for statistical signal processing of short-read sequencing data and quality control, producing alignments and measures of enrichment. In its current form, it is a prototype and will likely undergo substantial change within the next year. 

### ATAC Pipeline

Our ATAC pipeline takes in BAM files containing aligned reads and outputs peaks and peak annotations.

The first step in the pipeline is to remove all reads mapped to mitochondrial DNA from the BAM file. Since we observe 30-60% mitochondrial contamination for NeuroLINCS samples, removing mitochondrial reads will remove considerable noise from downstream analysis. Afterward, peak calling is performed on BAM using MACS2 with the following parameters: --format BAM --gsize hs –qvalue .05. We have prepared a background bam file for MACS2 peak calling by extracting naked genomic DNA from iMNS, performing ATAC on the genomic DNA, and sequencing the resulting library. Peak annotation is performed using the script “map_peaks_to_known_genes.py” from the ChipSeqUtil package; we map genes to peaks within a window of +/- 10kb.  Bigwig files for the reads and BigBed files for the peaks are generated for visualization of data on a genome browser.

<details>
<summary>Galaxy Workflow | imported: fraenkel_ATAC_batch_experimental_paired (for in house usage)</summary>
<br>
<h2>Step 1: Input dataset collection</h2>
<b>input</b>
<br>
<i>select at runtime</i>
<br> 
<h2>Step 2: Input dataset</h2>
<b>encode blacklist regions</b>
<br>
<i>select at runtime</i>
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
<b>Trimmomatic Operation 1</b>
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
<br>
<i>select at runtime</i>
<br>
<b>Submodule and Limit specifing file</b>
<br>
<i>select at runtime</i>
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
hg19
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
<i>select at runtime</i>
<br>
<b>Remove reads that are NOT any of the regions</b>
<br>
<i>select at runtime</i>
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
<h2>Step 8: MarkDuplicates</h2>
<b>Select SAM/BAM dataset or dataset collection</b>
<br> 
Output dataset 'output1' from step 7
<br> 
<b>Comments</b> 
<br> 
<b>If true do not write duplicates to the output file instead of writing them with appropriate flags set</b>
<br>
True
<br>
<b>Assume the input file is already sorted</b> 
<br>
True
<br>
<b>The scoring strategy for choosing the non-duplicate among candidates</b>
<br>
SUM_OF_BASE_QUALITIES
<br> 
<b>Regular expression that can be used in unusual situations to parse non-standard read names in the incoming SAM/BAM dataset</b> 
<br>
[a-zA-Z0-9]+:[0-9]:([0-9]+):([0-9]+):([0-9]+).*.
<br> 
<b>The maximum offset between two duplicte clusters in order to consider them optical duplicates</b>
<br>
100
<br> 
<b>Barcode Tag</b> 
<br> 
Empty.
<br>
<b>Select validation stringency</b> 
<br> 
Lenient
<br> 
<br> 
<h2>Step 9: bamCoverage</h2> 
<b>BAM/CRAM file</b> 
<br> 
Output dataset 'outFile' from step 8
<br> 
<b>Bin size in bases</b> 
<br> 
50 
<br> 
<b>Scaling/Normalization method</b> 
<br> 
Normalize to reads per kilobase per million (RPKM)
<br> 
<b>Coverage file format</b> 
<br> 
bigwig
<br> 
<b>Region of the genome to limit the operation to</b> 
<br> 
Empty.
<br> 
<b>Show advanced options</b> 
<br> 
no
<br> 
<br> 
<h2>Step 10: MACS2 callpeak</h2> 
<b>Are you pooling Treatment Files?</b> 
<br> 
No
<br> 
<b>ChIP-Seq Treatment File</b> 
<br> 
<i>select at runtime</i> 
<br> 
<b>Do you have a Control File?</b> 
<br> 
No
<br> 
<b>Format of Input Files</b> 
<br> 
BAM 
<br> 
<b>Effective genome size</b> 
<br> 
H. sapiens (2.7e9)
<br> 
<b>Build Model</b> 
<br> 
Build the shifting model
<br> 
<b>Set lower mfold bound</b> 
<br> 
5
<br> 
<b>Set upper mfold bound</b> 
<br> 
50
<br> 
<b>Band width for picking regions to compute fragment size</b> 
<br> 
300
<br> 
<b>Peak detection based on</b> 
<br> 
q-value
<br> 
<b>Minimum FDR (q-value) cutoff for peak detection</b> 
<br> 
0.05
<br> 
<b>Additional Outputs</b> 
<br> 
Peaks as tabular file (compatible wih MultiQC)
<br> 
<b>Advanced Options:</b>
<br>
<b>&emsp;When set, scale the small sample up to the bigger sample</b>
<br>
&emsp;False
<br>
<b>&emsp;Use fixed background lambda as local lambda for every peak region</b>
<br>
&emsp;False
<br>
<b>&emsp;Save signal per million reads for fragment pileup profiles</b> 
<br>
&emsp;False
<br>
<b>&emsp;When set, use a custom scaling ratio of ChIP/control (e.g. calculated using NCIS) for linear scaling</b>
<br>
&emsp;1.0
<br>
<b>&emsp;The small nearby region in basepairs to calculate dynamic lambda</b>
<br>
&emsp;1000
<br>
<b>&emsp;The large nearby region in basepairs to calculate dynamic lambda</b>
<br>
&emsp;10000
<br>
<b>&emsp;Composite broad regions</b>
<br>
&emsp;No broad regions
<br>
<b>&emsp;Use a more sophisticated signal processing approach to find subpeak summits in each enriched peak region</b>
<br>
&emsp;False
<br>
<b>&emsp;How many duplicate tags at the exact same location are allowed?</b>
<br>
&emsp;1
<br>
<br>
<h2>Step 11: multiBigwigSummary</h2>
<b>Sample order matters</b>
<br>
No
<br>
<b>Bigwig files</b>
<br>
Output dataset 'outFileName' from step 9
<br>
<b>Choose computation mode</b>
<br>
Bins
<br>
<b>Bin size in bp</b>
<br>
10000
<br>
<b>Distance between bins</b>
<br>
0
<br>
<b>Region of the genome to limit the operation to</b>
<br>
Empty.
<br>
<b>Save raw counts (scores) to file</b>
<br>
True
<br>
<b>Show advanced options</b>
<br>
no
<br>
<br>
<h2>Step 12: Intersect intervals</h2>
<b>File A to intersect with B</b>
<br>
Output dataset 'output_narrowpeaks' from step 10
<br>
<b>Combined or separate output files</b>
<br>
One output file per 'input B' file
<br>
<b>File(s) B to intersect with A</b>
<br>
<i>select at runtime</i>
<br>
<b>Calculation based on strandedness?</b>
<br>
Overlaps on either strand
<br>
<b>What should be written to the output file?</b>
<br>
Write the original entry in A for each overlap (-wa)
<br>
<b>Treat split/spliced BAM or BED12 entries as distinct BED intervals when computing coverage.</b>
<br>
False
<br>
<b>Minimum overlap required as a fraction of the BAM alignment</b>
<br>
Empty.
<br>
<b>Require that the fraction of overlap be reciprocal for A and B</b>
<br>
False
<br>
<b>Report only those alignments that **do not** overlap with file(s) B</b>
<br>
True
<br>
<b>Write the original A entry _once_ if _any_ overlaps found in B.</b>
<br>
False
<br>
<b>For each entry in A, report the number of overlaps with B.</b>
<br>
False
<br>
<b>Print the header from the A file prior to results</b>
<br>
False
<br>
<br>
<h2>Step 13: plotPCA</h2> 
<b>Matrix file from the multiBamSummary or multiBigwigSummary tools</b>
<br> 
Output dataset 'outFile' from step 11
<br> 
<b>Image file format</b> 
<br> 
pdf
<br> 
<b>Title of the plot</b> 
<br> 
Empty. 
<br> 
<b>Save the matrix of PCA and eigenvalues underlying the plot.</b> 
<br> 
False 
<br> 
<b>Show advanced options</b> 
<br> 
no
<br> 
<h2>Step 14: plotCorrelation</h2> 
<b>Matrix file from the multiBamSummary tool</b> 
<br> 
Output dataset 'outFile' from step 11
<br> 
<b>Correlation method</b> 
<br> 
Spearman 
<br> 
<b>Plotting type</b> 
<br> 
Heatmap
<br> 
<b>Minimum value for the heatmap intensities</b> 
<br> 
Empty. 
<br> 
<b>Maximum value for the heatmap intensities</b> 
<br> 
Empty. 
<br> 
<b>Color map to use for the heatmap</b> 
<br> 
RdYlBu
<br> 
<b>Title of the plot</b> 
<br> 
Empty. 
<br> 
<b>Plot the correlation value</b> 
<br> 
True
<br> 
<b>Plot height</b> 
<br> 
9.5 
<br> 
<b>Plot width</b> 
<br> 
11.0 
<br> 
<b>Skip zeroes</b> 
<br> 
False 
<br> 
<b>Image file format</b> 
<br> 
pdf
<br> 
<b>Remove regions with very large counts</b> 
<br> 
True
<br> 
<b>Save the matrix of values underlying the heatmap</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 15: BED-to-bigBed</h2> 
<b>Convert</b> 
<br> 
Output dataset 'output' from step 12
<br> 
<b>Converter settings to use</b> 
<br> 
Full parameter list
<br> 
<b>Items to bundle in r-tree</b> 
<br> 
256
<br> 
<b>Data points bundled at lowest level</b> 
<br> 
512
<br> 
<b>Do not use compression</b> 
<br> 
False 
<br> 
<br> 
<h2>Step 16: computeMatrix</h2> 
<b>Select regions</b> 
<br>
<b>&emsp;Select regions 1</b> 
<br>
<b>&emsp;Regions to plot</b> 
<br>
&emsp;Output dataset 'output' from step 12
<br> 
<b>Sample order matters</b> 
<br> 
Yes 
<br> 
<b>Score files</b> 
<br>
<b>&emsp;Score files 1</b> 
<br>
<b>&emsp;Score file</b> 
<br>
&emsp;Output dataset 'outFileName' from step 9
<br> 
<b>computeMatrix has two main output options</b> 
<br> 
reference-point
<br> 
<b>The reference point for the plotting</b> 
<br> 
center of region
<br> 
<b>Discard any values after the region end</b> 
<br> 
False 
<br>
<b>Distance upstream of the start site of the regions defined in the region file</b> 
<br> 
1000 
<br> 
<b>Distance downstream of the end site of the given regions</b> 
<br> 
1000 
<br> 
<b>Show advanced output settings</b> 
<br> 
no 
<br> 
<b>Show advanced options</b> 
<br> 
yes
<br> 
<b>Length, in bases, of non-overlapping bins used for averaging the score over the regions length</b> 
<br> 
50 
<br> 
<b>Sort regions</b> 
<br> 
maintain the same ordering as the input files
<br> 
<b>Method used for sorting</b> 
<br> 
mean 
<br> 
<b>Define the type of statistic that should be displayed.</b> 
<br> 
mean 
<br> 
<b>Convert missing values to 0?</b> 
<br> 
False 
<br> 
<b>Skip zeros</b> 
<br> 
False 
<br> 
<b>Minimum threshold</b> 
<br> 
Not available.
<br> 
<b>Maximum threshold</b> 
<br> 
Not available.
<br> 
<b>Scaling factor</b> 
<br> 
Not available.
<br> 
<b>Labels for the samples (each bigwig)</b> 
<br> 
Empty. 
<br> 
<b>Use a metagene model</b> 
<br> 
False 
<br> 
<b>trascript designator</b> 
<br> 
transcript
<br> 
<b>exon designator</b> 
<br> 
exon
<br> 
<b>transcriptID key designator</b> 
<br> 
transcript_id
<br> 
<b>Blacklisted regions in BED/GTF format</b> 
<br> 
<i>select at runtime</i> 
<br> 
<br> 
<h2>Step 17: plotHeatmap</h2> 
<b>Matrix file from the computeMatrix tool</b> 
<br> 
Output dataset 'outFileName' from step 16
<br> 
<b>Show advanced output settings</b> 
<br> 
no 
<br> 
<b>Show advanced options</b> 
<br> 
no 
</details>

### New ATAC Pipeline (Coming Soon!)

Our ATAC pipeline takes in FASTQ files containing raw reads and outputs peaks and peak annotations.

First, we trim the start and end of reads using Trimmomatic to remove bases with a Phred quality of less than 10. Removing low quality bases improves accuracy of alignment. We use Bowtie2 to align our trimmed reads to the hg19 genome using the default parameters. We then use SAMtools to remove multi mapped reads, reads aligned to mitochondrial DNA, and alignments will a mapping quality of less than 10. This filtering step removes noise from downstream analysis.  Afterward, peak calling is performed on BAM using MACS2 with the following parameters: --format BAM --gsize hs –qvalue .05. We have prepared a background bam file for MACS2 peak calling by extracting naked genomic DNA from iMNS, performing ATAC on the genomic DNA, and sequencing the resulting library. Peak annotation is performed using the script “map_peaks_to_known_genes.py” from the ChipSeqUtil package; we map genes to peaks within a window of +/- 10kb. Bigwig files for the reads and BigBed files for the peaks are generated for visualization of data on a genome browser.






