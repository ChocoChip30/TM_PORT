window.onload = function() {
    location.href = "#top";
};

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

const typed = new Typed('.multiple-text', {
    strings: ['Hello Adventurer!', "It's a pleasure to meet you", "Relax, unwind and take a look around ...", "Let me know if there's something you like :)" ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 600,
    loop: true
})