+++
title="Unit 2"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Slides and Readings", "Course Videos"]
+++

{% title_block(title="Solution methods for dynamic programming (Unit 2)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting" bg="grey" class="mt-0") %}

**June 24, 2025, 4:30pm – 5:30pm CEST***

Please find the information on how to join the zoom meeting in the corresponding e-mail.

*Note the timezone if you are joining from outside of Germany.
 <br><br>

{% end %}

{{ anchor(title="Slides and Readings")}}
{% block_1c_nopad(title="Slides and Readings" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-bold" style="text-decoration: none;">
                Please find the slides for unit 2 here:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit2/relearn2-1.pdf" download class="text-blue-500">
                Unit 2-1: Markov Processes (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit2/relearn2-2.pdf" download class="text-blue-500">
                Unit 2-2: Markov Decision Processes (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit2/relearn2-3.pdf" download class="text-blue-500">
                Unit 2-3: Intro to Value Iteration with Bellman Equation (PDF)
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
                Unit 2-4: Value Iteration: Technicalities (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/welixfeber/BERD-PDFs-Research-Data/blob/main/content/unit2/relearn2-5.pdf" download class="text-blue-500">
                Unit 2-5: Policy Iteration (PDF)
            </a>
        </div>
        <br><br>
        <!-- Citation section -->
        <a class="text font-bold" style="text-decoration: none;">
            Please find the required readings for this unit here:
        </a>
        <br><br>
        <a class="text font-bold" style="text-decoration: none;">
            Markov Processes
        </a>
        <br>
             <span>
                Russell and Norvig (2016, section 15.1)
            </span>
        <br><br>
         <a class="text font-bold" style="text-decoration: none;">
            Markov decision processes
        </a>
        <br>
        <span>
        Russell and Norvig (2016, sections 17.1-17.2, 17.4) <br>
        Sutton and Barto (2018, chapter 3) <br>
        Szepesvari (2022, chapter 2) <br>
        Puterman (2014, chapters 2, 4, 5) <br>
        </span>
         <br><br>
         <a class="text font-bold" style="text-decoration: none;">
            Value Iteration
        </a>
        <br>
        <span>
        Sutton and Barto (2018, sections 4.1, 4.4) <br>
        Szepesvari (2022, sections 2.2, 2.3) <br>
        Puterman (2014, sections 6.1-6.3) <br>
        Sigaud and Buffet (2013, chapter 1) <br>
        </span>
         <br><br>
         <a class="text font-bold" style="text-decoration: none;">
            Policy Iteration
        </a>
        <br>
        <span>
        Sutton and Barto (2018, section 4.3) <br>
        Puterman (2014, sections 6.4-6.5) <br>
        Russell and Norvig (2016, section 17.3) <br>
        </span>
        <br><br><br>
        <span>
        Sutton, R. S., and A. G. Barto (2018): Reinforcement learning: An introduction, A Bradford Book.
        </span>
         <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://incompleteideas.net/book/the-book-2nd.html" download class="text-blue-500">
                Available here.
            </a>
        </div>
        <br><br>
        <span>
        Szepesvari, C. (2022): Algorithms for reinforcement learning. Springer nature.
        </span>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px; margin-bottom: 0px">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
           <a href="https://sites.ualberta.ca/~szepesva/RLBook.html" download class="text-blue-500">
               Available here.
            </a>
        </div>
        <br><br>
        <span>
        Puterman, M. L. (2014): Markov decision processes: discrete stochastic dynamic programming. John Wiley & Sons.
        </span>
        <br><br>
        <span>
        Sigaud, O., and O. Buffet (2013): Markov decision processes in artificial intelligence. John Wiley & Sons.
        </span>
        <br><br>
        <span>
        Markov, A. A. (2006): An Example of Statistical Investigation of the Text Eugene Onegin Concerning the Connection of Samples in Chains, Science in Context, 19(4), 591-600.
        </span>
        <br><br>
        <span>
        Russell, S. J., and P. Norvig (2016): Artificial intelligence: a modern approach. Pearson.
        </span>
        <br><br>
        <span>
        Bellman, R. (1957): Dynamic Programming. Princeton University Press.
        </span>
        <br>
    </div>
</div>
{% end %}

{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="grey" class="mt-0") %}

**Unit 2-1: Markov Processes**
<iframe width="560" height="315" src="https://www.youtube.com/embed/oudfBduKaKg" title="Unit 2-1: Markov Processes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br>

**Unit 2-2: Markov Decision Processes**
<iframe width="560" height="315" src="https://www.youtube.com/embed/t8HBxVofJ_M" title="Unit 2-2: Markov Decision Processes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br>

**Unit 2-3: Intro to Value Iteration with Bellman Equation**
<iframe width="560" height="315" src="https://www.youtube.com/embed/51504SRFaXg" title="Unit 2-3: Intro to Value Iteration with Bellman Equation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br>

**Unit 2-4: Value Iteration Technicalities**
<iframe width="560" height="315" src="https://www.youtube.com/embed/1Vf8yyBj5Jw" title="Unit 2-4: Value Iteration Technicalities" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br>

**Unit 2-5: Policy Iteration**
<iframe width="560" height="315" src="https://www.youtube.com/embed/p25u5OIhuAM" title="Unit 2-5: Policy Iteration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{% end %}

{{ anchor(title="Assignments")}}
{% block_1c_nopad(title="Assignments" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text" style="text-decoration: none;">
                Assignment 1: Multi-Armed Bandit Portfolio <br>
Investers seek reward.
How much should they put in which stock?
When in doubt, be epsilon-greedy (or use Thompson sampling). <br><br>
Introduction<br>
In this project, you will implement Multi-Armed Bandit algorithms. You will use first epsilon-greedy (from lecture) to build a portfolio of stocks adaptively at a daily frequency. Then, you will use Thompson Sampling (from lecture) to compare the performance and some properties of the algorithms.
Please find the instructions and code for the assignment here:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/BERD-NFDI/BERD-Reinforcement-Learning/tree/main/content/unit2/assignment_1" download class="text-blue-500">
                Assignment Unit 2
            </a>
        </div>
    </div>
</div>
{% end %}