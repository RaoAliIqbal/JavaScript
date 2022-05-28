        const allBox=document.querySelector(".content").children;
	   const boxWidth=allBox[0].querySelector(".inner").offsetWidth;   //360
	   const boxHeight=allBox[0].querySelector(".inner").offsetHeight; //225
	   const div=document.createElement("div");
	         div.style.position="absolute";
	         div.style.height=boxHeight + "px";
	         div.style.width=boxWidth + "px";
	         div.style.backgroundColor="#E91E63";
	         div.style.transition="all 1s ease";
	         div.style.zIndex="1";
	         div.style.left=allBox[0].querySelector(".inner").offsetLeft + "px";
	         div.style.top=allBox[0].querySelector(".inner").offsetTop + "px";
	         document.querySelector(".grid-box").appendChild(div)
	    
           for(let i=0; i<allBox.length; i++){
           	 allBox[i].querySelector(".inner").addEventListener("mouseover", function(){
           	 	const height=this.offsetHeight;
           	 	const width=this.offsetWidth;
           	 	const x=this.offsetLeft;         	 	
           	 	const y=this.offsetTop;
           	 	div.style.left=x + "px";
	            div.style.top=y + "px";
	            div.style.width=width + "px";
	            div.style.height=height + "px";
           	 })
           }