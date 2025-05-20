+++
title="Unit 4"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Readings", "Assignments", "Course Videos"]
+++

{% title_block(title="Structured Data Extraction (Unit 4)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting (Unit 4)" bg="grey" class="mt-0") %}

**April 10, 2024, 4:30pm – 5:30pm CET***

Please find the information on how to join the zoom meeting in the corresponding e-mail.

*Note the timezone if you are joining from outside of Germany.
 <br><br>
In this unit, you will follow along with a practical example of extracting structured data from a set of documents. In the interactive session, you may discuss obstacles you are facing with your own project.
{% end %}

{{ anchor(title="Readings")}}
{% block_1c_nopad(title="Readings" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-normal" style="text-decoration: none;">
                Comparison of several industry solutions for extracting data from open text. Top AI Apps & Tools for Document data extraction. (n.d.). Deepgram. Retrieved 3 June 2024, from:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://deepgram.com/ai-apps" download class="text-blue-500">
                 https://deepgram.com/ai-apps
            </a>
        </div>
        <br>  <br>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-normal" style="text-decoration: none;">
                Comparing LLMs to dedicated Named Entity Extraction Deep Learners. How effective are large language models in named entity extraction compared to traditional machine learning algorithms? | 10 Answers from Research papers. (n.d.). SciSpace - Question. Retrieved 3 June 2024, from:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://typeset.io/questions/how-effective-are-large-language-models-in-named-entity-p29rfup468" download class="text-blue-500">
                 https://typeset.io/questions/how-effective-are-large-language-models-in-named-entity-p29rfup468
            </a>
        </div>
        <br>  <br>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-normal" style="text-decoration: none;">
                Introduction to Retrieval-Augmented Generation (RAG)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://colab.research.google.com/drive/15HQjAEiUANdagPKwUWOWUmGNwSoR--u-?usp=sharing" download class="text-blue-500">
                 https://colab.research.google.com/drive/15HQjAEiUANdagPKwUWOWUmGNwSoR--u-?usp=sharing
            </a>
        </div>
        <br>
    </div>
</div>
{% end %}

{{ anchor(title="Assignments")}}
{% block_1c_nopad(title= "Assignment" bg="grey" class="mt-0") %}

**Deadline: April 17, 11:59pm CET**

[Example Notebook](https://colab.research.google.com/drive/1tZhLAzY6wDdlOVDcdPO2uH7oWLTkKKwh?usp=sharing)

**To copy this code and run it yourself, click the link above and navigate: “file > save a copy in Drive”**

## Errors you might encounter:

If you encounter any of the following errors when trying to run the colab notebook, try these troubleshoots.

- File not found: Be sure to upload the example PDF. If you want to run the LLMs, you must get a Llama AI API key, save it to a .txt file named ‘key,’ and upload that, too.
- Model does not exist: You have most likely exceeded your API key balance. Talk to the instructor.
- JSON DECODER EXCEPTION: This seems to be a periodic problem with the Llama API, where inputs above a certain length return an empty JSON. Either try shortening your input or wait several minutes and try again.

## Exercise

If you have a specific project of your own, find some example documents and define the data you wish to extract. Use the provided Llama API key (you will only have a small 5$ budget, so be careful) to engineer some prompts of your own and try to extract the desired text. Try a few different prompts and analyze the results for errors. We will discuss your experience in class.
<br>
If you do not have a project of your own, look through the provided PDFs. The context for these PDFs is as follows. Across Bavaria, local municipalities provide websites on which can be found scans of applications for building on plots of land. Some of these documents are those ‘building plans,’ but others are supporting or unrelated documents that happened to be linked on those web pages. The task is to iterate through these PDFs and accurately record the regulations and policies by name cited in the building plans. That includes identifying when a document is not a building plan. Most important are the regulations regarding the maximum approved building height and around risk mitigation for flooding risks. Also important is the predicted frequency of major floods that occur in the area. The challenge is to see if you can engineer some prompts that effectively extract these details while minimizing false positives (claims that a certain text is present but is not) and false negatives (where regulations are mentioned, but the system doesn’t detect them). Remember that this is not a graded exercise but rather a practice session for you to experience the kinds of issues that occur in real-world examples.
{% end %}


{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="white" class="mt-0") %}

**Unit 4-1: Code Demonstration**
<iframe width="560" height="315" src="https://www.youtube.com/embed/plI-ox9aPQs" title="Unit 4-1: Code Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

**Unit 4-2: **Unit 4-1: Code Demonstration**
<iframe width="560" height="315" src="https://www.youtube.com/embed/7-dFusTThh8" title="Unit 4-2: Retrieval Augmented Generation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{% end %}
