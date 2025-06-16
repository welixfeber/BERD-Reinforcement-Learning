+++
title="Unit 3"
weight=2
extra.footer_nav=true
extra.main_nav = true
extra.sub_nav =["Meeting Information", "Slides and Readings", "Course Videos"]
+++

{% title_block(title="Learning in the state-action-space (Unit 3)" bg="white") %}
placeholder
{% end %}

{{ anchor(title="Meeting Information")}}
{% block_1c_nopad(title="Meeting" bg="grey" class="mt-0") %}

**July 08, 2025, 4:30pm – 5:30pm CEST***

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
            <a href="https://github.com/BERD-NFDI/BERD-Reinforcement-Learning/blob/main/content/unit3/relearn3-1.pdf" download class="text-blue-500">
                Unit 3-1: Overview Reinforcement Learning (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/BERD-NFDI/BERD-Reinforcement-Learning/blob/main/content/unit3/relearn3-2.pdf" download class="text-blue-500">
                Unit 3-2: Monte Carlo Learning (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/BERD-NFDI/BERD-Reinforcement-Learning/blob/main/content/unit3/relearn3-3.pdf" download class="text-blue-500">
                Unit 3-3: Temporal Difference Learning (PDF)
            </a>
        </div>
        <div style="display: flex; align-items: center; justify-content: left; margin-top: 20px;">
            <span style="margin-right: 16px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.52655H11.2609V2.76181H4.43671V0H14V9.52655Z" fill="#071A2D"/>
                    <path d="M11.5818 0.368914L-0.000976562 12.0476L1.93586 14.0005L13.5186 2.32179L11.5818 0.368914Z" fill="#071A2D"/>
                </svg>
            </span>
            <a href="https://github.com/BERD-NFDI/BERD-Reinforcement-Learning/blob/main/content/unit3/relearn3-4.pdf" download class="text-blue-500">
                Unit 3-4: Q-Learning (PDF)
            </a>
        </div>
        <br><br>
         <!-- Citation section -->
        <a class="text font-bold" style="text-decoration: none;">
            Please find the required readings for this unit here:
        </a>
        <br><br>
        <span>
        Sutton and Barto (2018, section 5.1-5.3, 6.1-6.3, 6.5) <br>
        Szepesvari (2022, section 3.1, 4.3) <br>
        Sigaud and Buffet (2013, section 2.1-2.5) <br>
        Russell and Norvig (2016, section 21.1-21.3) <br>
        </span>
         <br><br>
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
        Sigaud, O., and O. Buffet (2013): Markov decision processes in artificial intelligence. John Wiley & Sons.
        </span>
        <br><br>
        <span>
        Russell, S. J., and P. Norvig (2016): Artificial intelligence: a modern approach. Pearson.
        </span>
        <br>
    </div>
</div>
{% end %}

{{ anchor(title="Course Videos")}}
{% block_1c_nopad(title= "Course Videos" bg="grey" class="mt-0") %}

Coming soon. 

{% end %}