var path = document.querySelectorAll("path");



for (let index = 0; index < path.length; index++) {
    
    path[index].setAttribute("style", "stroke-dashoffset:" + path[index].getTotalLength() + ";  stroke-dasharray:" + path[index].getTotalLength() );
    
    console.log(path[index].getTotalLength());
    
}

var myVar = setInterval(gg, 200);

var i = 0;
function gg() {
    if (i >= path.length) {
        
            clearInterval(myVar);
          
    }else{
        path[i].classList.add("run");
        i++;
    }
    console.log(i);
}

path.forEach(element => {
    element.addEventListener('animationend', () => {
        element.classList.add("animation-ended");
      });
});



