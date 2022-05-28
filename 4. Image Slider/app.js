
const slides=document.querySelector('.slider-items').children;
const prevSlide=document.querySelector('.left-side');
const nextSide=document.querySelector('.right-side');
var totalSlides=slides.length;
var index=0;

nextSide.onclick=function(){
    next('next');
    resetTimer();
}

prevSlide.onclick=function(){
    next('prev');
    resetTimer();   
}

function next(direction){
    if(direction=='next'){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }

    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');

}


function resetTimer(){
    // stop timer after clicked next & prev Button
    clearInterval(timer);
    // then start again timer
    timer = setInterval(autoPlay,5000);
   }
   
   function autoPlay(){
    next('next');
   }
   
    var timer = setInterval(autoPlay,5000);