+++
title="Unit 4"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Readings", "Course Videos"]
+++

{% title_block(title="Deep Learning (Unit 4)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting" bg="grey" class="mt-0") %}

**July 15, 2025, 4:30pm – 5:30pm CEST***

Please find the information on how to join the zoom meeting in the corresponding e-mail.

*Note the timezone if you are joining from outside of Germany.
{% end %}

{{ anchor(title="Readings")}}
{% block_1c_nopad(title="Slides and Readings" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-bold" style="text-decoration: none;">
                Slides coming soon.
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="" download class="text-blue-500">
            </a>
        </div>
        <br><br>
        <!-- Citation section -->
        <a class="text font-bold" style="text-decoration: none;">
            Please find the required readings for this unit here:
        </a>
        <br><br>
        <a class="text font-bold" style="text-decoration: none;">
            Deep Neural Networks
        </a>
        <br>
             <span>
                Goodfellow (2016, chapters 6, 7, 8)
            </span>
        <br><br>
         <a class="text font-bold" style="text-decoration: none;">
            Deep Q-networks
        </a>
        <br>
        <span>
        Sutton and Barto (2018, section 9.4, 9.7) <br>
        Szepesvari (2022, section 4.3.2) <br>
        </span>
         <br><br>
         <a class="text font-bold" style="text-decoration: none;">
            Policy Gradient Methods
        </a>
        <br>
        <span>
        Sutton and Barto (2018, section 13.1-13.3, 13.7) <br>
        Sigaud and Buffet (2013, section 5.1-5.2) <br>
        Russell and Norvig (2016, section 21.5) <br>
        </span>
         <br><br>
         <a class="text font-bold" style="text-decoration: none;">
            Actor Critic Algorithms
        </a>
        <br>
        <span>
        Sutton and Barto (2018, section 13.4-13.5) <br>
        Szepesvari (2022, section 4.4) <br>
        Sigaud and Buffet (2013, section 5.3) <br>
        </span>
        <br><br><br>
        <span>
        Goodfellow, I. (2016): Deep learning, vol. 196. MIT press.
        </span>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px; margin-bottom: 0px">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
           <a href="http://deeplearningbook.org/" download class="text-blue-500">
               Available here.
            </a>
        </div>
        <br><br>
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
            <a href="http://incompleteideas.net/book/the-book-2nd.html" download class="text-blue-500">
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
        Russell, S. J., and P. Norvig (2016): Artificial intelligence: a modern approach. Pearson.
        </span>
        <br><br>
        <span>
        Sigaud, O., and O. Buffet (2013): Markov decision processes in artificial intelligence. John Wiley & Sons.
        </span>
        <br>
    </div>
</div>
{% end %}

{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="grey" class="mt-0") %}

Coming soon. 

{% end %}

{{ anchor(title="Assignments")}}
{% block_1c_nopad(title="Assignments" bg="white" class="mb-0") %}
<div class="w-full text-left" style="display: flex;">
    <!-- Left vertical line -->
    <div style="border-left: 2.5px solid #808285; padding-left: 16px;  margin-top: 10px">
        <!-- Full report section -->
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <a class="text font-bold" style="text-decoration: none;">
                Please find the assignment for unit 4 here:
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/BERD-NFDI/BERD-Reinforcement-Learning/tree/main/content/unit4/assignment_2" download class="text-blue-500">
                Assignment Unit 4
            </a>
        </div>
    </div>
</div>
{% end %}