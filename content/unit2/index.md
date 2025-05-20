+++
title="Unit 2"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Readings", "Assignments", "Course Videos"]
+++

{% title_block(title="Web Scraper Bot Building (Unit 2)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting (Unit 2)" bg="grey" class="mt-0") %}

**March 20, 2024, 4:30pm – 5:30pm CET***

Please find the information on how to join the zoom meeting in the corresponding e-mail.

*Note the timezone if you are joining from outside of Germany.
 <br><br>
In this unit, you will see a practical example of building a web scraper bot, and you may attempt to apply what you’ve learned to your own context. In the interactive sessions, we can discuss any obstacles you’re encountering in your own project.

{% end %}

{{ anchor(title="Readings")}}
{% block_1c_nopad(title="Readings" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-bold" style="text-decoration: none;">
                Another web article provides a good introduction to web scraping:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href=" https://www.geeksforgeeks.org/introduction-to-web-scraping/" download class="text-blue-500">
                 https://www.geeksforgeeks.org/introduction-to-web-scraping/
            </a>
        </div>
        <br>
    </div>
</div>
{% end %}

{{ anchor(title="Assignments")}}
{% block_1c_nopad(title= "Assignment" bg="grey" class="mt-0") %}

**Deadline: March 27, 11:59pm CET**

[Example Notebook](https://colab.research.google.com/drive/115BsrFH6wFSOzQFQqkKwsF0twA_bezSQ?usp=sharing)

**To copy this code and run it yourself, click the link above and navigate: “file > save a copy in Drive”**

## Errors you might encounter:

If you encounter any of the following errors when trying to run the colab notebook, try these troubleshoots.

- Max Retries Exceeded: Sometimes caused by running some code chunks, pausing, and then running others. Wait a few minutes, then type <span class="text-yellow-500 font-mono">‘Runtime > Restart Session and Run All’</span>
- Content not found: For each statement <span class="text-purple-500 font-mono">time.sleep(10)</span> change the 10 to 20.

## Exercise

1. Read through the Colab notebook.
2. If you have a website from your own project that you are interested in scraping, you may develop your own scraping code and present it in the interactive sessions. You may also share it with the course instructor and ask for feedback.
3. If you don’t have an example from your own project, here is a collection of example websites for scraping: [https://webscraper.io/test-sites](https://webscraper.io/test-sites). You may build your own web scraper, or if you’d like an assigned task, try to extract the name and price of each laptop found on this site. You will need to press the ‘more’ button via your scraper bot to do this.
{% end %}

{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="white" class="mt-0") %}

**Unit 2: Code Demonstration**
<iframe width="560" height="315" src="https://www.youtube.com/embed/sBGKb5bAKG4" title="Unit 2: Code Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{% end %}
