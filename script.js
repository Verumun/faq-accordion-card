'use strict'

// select elements
const faqButton = document.querySelectorAll('.faq-button');
var i;
// const arrowEl = document.querySelector('.arrw');
// const sudoAfer = document.querySelector('.faq-button::after');
for( i =0; i<faqButton.length; i++){
    faqButton[i].addEventListener('click', function(){
        // console.log('button clicked');

        // for(i=0; i<arrowEl.length; i++){
        //     arrowEl[i].style.transform = 'rotate(180deg)';
        // }
    
        // const arrwbtn = faqButton.firstElementChild;
        // arrwbtn.style.transform = 'rotate(180deg)';
    
        this.child.style.transform = 'rotate(180deg)';
        
        this.classList.toggle('active');

        // sudoAfer.style.display = 'block';
        
        const panel = this.nextElementSibling;
        if(panel.style.display === 'block'){
            panel.style.display = 'none';
            arrwbtn.style.transform = 'rotate(0deg)';
            // arrowEl.style.transform = 'rotate(0)';

        }else{
            panel.style.display = 'block';
            arrwbtn.style.transform = 'rotate(180deg)';
            // arrowEl.style.transform = 'rotate(180deg)';
        }

        if(panel.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}


// const practiceBtn = document.querySelector('.practice');
// const panelEl = document.querySelector('.panel-e');
// const imagePract = document.querySelector('.image-practice');

// practiceBtn.addEventListener('click', ()=>{
//     console.log('btn clicke');
//     panelEl.style.display = 'block';
//     imagePract.style.transform = 'rotate(180deg)';

// })