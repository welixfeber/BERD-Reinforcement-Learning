+++
title="Unit 1"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Slides and Readings", "Course Videos"]
+++

{% title_block(title="Multi-armed bandits and learning algorithms (Unit 1)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting" bg="grey" class="mt-0") %}

**June 17, 2025, 4:30pm – 5:30pm CEST***

Please find the information on how to join the zoom meeting in the corresponding e-mail.

*Note the timezone if you are joining from outside of Germany.

{% end %}

{{ anchor(title="Slides and Readings")}}
{% block_1c_nopad(title="Slides and Readings" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-bold" style="text-decoration: none;">
                Please find the slides for Unit 1 here:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit1/relearn1-1.pdf" download class="text-blue-500">
                Unit 1-1: Multi-armed bandits (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit1/relearn1-2.pdf" download class="text-blue-500">
                Unit 1-2: Greedy, e-greedy, decayed, e-greedy (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit1/relearn1-3.pdf" download class="text-blue-500">
                Unit 1-3: Upper Confidence Bound (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit1/relearn1-4.pdf" download class="text-blue-500">
                Unit 1-4: Thompson Sampling (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit1/relearn1-5.pdf" download class="text-blue-500">
                Unit 1-5: Inference with Batched Bandits (PDF)
            </a>
        </div>
        <br><br>
        <!-- Citation section -->
        <a class="text font-bold" style="text-decoration: none;">
            Please find the required readings for this unit here:
        </a>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px; margin-bottom: 0px">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
           <a href="https://www.dropbox.com/scl/fo/8c9f5e6j6fw6ie05t9zu5/AHaCF_6F9iS0LtJd2IgIf_c/unit%201?dl=0&preview=relearn1+readings.txt&rlkey=d5yoglc7pmu12akogfqflfjo9&subfolder_nav_tracking=1" download class="text-blue-500">
               Readings Unit 1 (txt)
            </a>
        </div>
        <br>
    </div>
</div>
{% end %}


{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="grey" class="mt-0") %}

## Introduction to Reinforced Learning
<iframe width="560" height="315" src="https://www.youtube.com/embed/68tVOESzcWM&list" title="Introduction to reinforced learning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 1-1: Multi-armed bandits
<iframe width="560" height="315" src="https://www.youtube.com/embed/5V_qKCzS9Ps" title="Unit 1-1: Multi-armed bandits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 1-2: Greedy, e-greedy, decayed, e-greedy
<iframe width="560" height="315" src="https://www.youtube.com/embed/EvSTdV4oF6k" title="Unit 1-2: Greedy, e-greedy, decayed, e-greedy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 1-3: Upper Confidence Bound
<iframe width="560" height="315" src="https://www.youtube.com/embed/86B6XDMlSHY" title="Unit 1-3: Upper Confidence Bound" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 1-4: Thompson Sampling
<iframe width="560" height="315" src="https://www.youtube.com/embed/lwWRwDAb40I" title="Unit 1-4: Thompson Sampling" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br><br>

## Unit 1-5: Inference with Batched Bandits
<iframe width="560" height="315" src="https://www.youtube.com/embed/dY6aNFg6SqU" title="Unit 1-5: Inference with Batched Bandits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{% end %}