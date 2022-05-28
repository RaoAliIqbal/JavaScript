
const thumbImg=document.querySelector('.thumb-img').children;

function changeImage(event){
    document.querySelector('.pro-img').src=event.children[0].src;
    for(let i=0;i<thumbImg.length;i++){
        thumbImg[i].classList.remove('active');
    }
    event.classList.add('active');
}