window.onload = function(){

  const sections = document.querySelectorAll("section");
  console.log(sections);
  [...sections].forEach(e=>e.addEventListener("mousemove", function(ev){
     e.style.backgroundPosition = `${60+ev.pageX/100}% ${ev.pageY/100}%`;
  }));

}

