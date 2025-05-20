+++
title="Unit 3"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Slides and Readings", "Course Videos", "Supplementary"]
+++

{% title_block(title="PDF Text Extraction (Unit 3)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting (Unit 3)" bg="grey" class="mt-0") %}

**April 03, 2024, 4:30pm – 5:30pm CET***

Please find the information on how to join the zoom meeting in the corresponding e-mail.

*Note the timezone if you are joining from outside of Germany.
 <br><br>
In this unit, you will learn how text is extracted from PDFs, especially with Optical Character Recognition. We will learn the theory of how Natural Language Processing (NLP) and LLM tools extract data from text. In the interactive session, you may discuss obstacles you are facing with your own project.

{% end %}

{{ anchor(title="Readings")}}
{% block_1c_nopad(title="Slides and Readings" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
    <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-bold" style="text-decoration: none;">
                Please find the slides for Unit 3 here:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/vakleisch/va.kleisch.github.io/tree/main/slides" download class="text-blue-500">
                Download here (PDF)
            </a>
        </div>
        <br><br>
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-normal" style="text-decoration: none;">
                Comparison of several OCR tools. OCR in 2024: Benchmarking Text Extraction/Capture Accuracy. (n.d.). AIMultiple: High Tech Use Cases & Tools to Grow Your Business. Retrieved 3 June 2024, from:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://research.aimultiple.com/ocr-accuracy/" download class="text-blue-500">
                 https://research.aimultiple.com/ocr-accuracy/
            </a>
        </div>
        <br>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-normal" style="text-decoration: none;">
                Introduction to ‘Nougat’ an OCR model especially for parsing tables and equations in academic papers:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://facebookresearch.github.io/nougat/" download class="text-blue-500">
                 https://facebookresearch.github.io/nougat/
            </a>
        </div>
        <br>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-normal" style="text-decoration: none;">
                Using an AI ‘BERT’ to classify open-ended text with some pre-training of BERT involved. Gweon, H., & Schonlau, M. (2024). Automated classification for open-ended questions with BERT. Journal of Survey Statistics and Methodology, 12(2), 493–504:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://doi.org/10.1093/jssam/smad015" download class="text-blue-500">
                 https://doi.org/10.1093/jssam/smad015
            </a>
        </div>
        <br>
    </div>
    
</div>
{% end %}

{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="grey" class="mt-0") %}

## Unit 3-1: Overview
<iframe width="560" height="315" src="https://www.youtube.com/embed/gTV1dLAOd0c" title="Unit 3-1: Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 3-2: Extraction
<iframe width="560" height="315" src="https://www.youtube.com/embed/zv5Z-enVf9A" title="Unit 3-2: Text Extraction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 3-3: Keyword Extraction
<iframe width="560" height="315" src="https://www.youtube.com/embed/DccGZTwzV_o" title="Unit 3-3: Keyword Extraction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 3-4: AI for Data Extraction
<iframe width="560" height="315" src="https://www.youtube.com/embed/BBuoQ4uCT84" title="Unit 3-4: AI for Data Extraction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 3-5: Retrieval Augmented Generation
<iframe width="560" height="315" src="https://www.youtube.com/embed/-hPuevlCX8M" title="Unit 3-5: Retrieval Augmented Generation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{% end %}

{{ anchor(title="Supplementary")}}
{% block_1c_nopad(title= "Supplementary" bg="white" class="mt-0") %}
Many students have expressed particular interest in extracting tables from PDFs. For this, I will present some tools for the specific use case here. If your PDF is actually a set of images (as we dicussed in this unit), you might want to try "Nougat" by Meta.

If interested, you can also view the following Colab notebook and video demonstration:

- [Example Notebook for Nougat](https://colab.research.google.com/drive/1oC7jK8UMEYRDAEPevn5VQweadjN4WyeW?usp=sharing#scrollTo=ortVi_5g3ADU)
<br> <br>
- If your PDFs have the PostScript content intact, you might consider the relatively simpler [Camelot package](https://camelot-py.readthedocs.io/en/master/).


<br><br>


**Video Demonstration of Nougat**
<iframe width="560" height="315" src="https://www.youtube.com/embed/SYO_4uhdHKM" title="Optical Character Recognition (OCR) with Meta&#39;s Nougat!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{% end %}