
const textChange=document.getElementById("text");
const btnChange=document.getElementById("btn");


function toggleClass(){
        
    // if(btnChange.classList=='return'){
    //     btnChange.innerText='click me';
    //     btnChange.classList.remove('return');
    //     textChange.innerHTML="Click below to toggle class.."; 
    // }
    // else{
    //     btnChange.classList.add('return');
    //     textChange.innerHTML="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"; 
    //     btnChange.innerText="return me";  
    // }

    if(btnChange.getAttribute('class')=='return'){
        btnChange.innerText='Show more';
        textChange.innerText='Click below to Load More content...';
        btnChange.setAttribute('class','');
    }
    else{
        btnChange.setAttribute('class','return');
        textChange.innerText='Simply dummy text of the printing and typesetting industry.';
        btnChange.innerText='Less view...'
    }
    
}

