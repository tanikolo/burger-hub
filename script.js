let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const mybutton = document.querySelector("#myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

gsap.from("#brand-name", {opacity: 0, transform: "rotateX(90deg) rotate(45deg)", duration: 3, delay: 0.5})
gsap.from(".topnav a", {opacity: 0, stagger: 0.5, duration: 1, delay: 1})
gsap.from("#btn", {x: -100, opacity: 0, duration: 1, delay: 5})
gsap.from("#brand-name-footer", {opacity: 0, duration: 2.5, repeat: -1})

const burgerImage = document.querySelectorAll(".burger-image");

burgerImage.forEach(function (item, idx) {
    item.addEventListener("mouseover", function() {
        if (idx === 0) {
          gsap.to("#burger-one", {scale: 1.15, duration: 2})
        }
        if (idx === 1) {
          gsap.to("#burger-two", {scale: 1.15, duration: 2})
        }
        if (idx === 2) {
            gsap.to("#burger-three", {scale: 1.15, duration: 2})
        }
    })
    item.addEventListener("mouseout", function() {
      if (idx === 0) {
        gsap.to("#burger-one", {scale: 1, duration: 2})
      }
      if (idx === 1) {
        gsap.to("#burger-two", {scale: 1, duration: 2})
      }
      if (idx === 2) {
        gsap.to("#burger-three", {scale: 1, duration: 2})
    }
  })
})

const menuImage = document.querySelectorAll(".menu-image");

menuImage.forEach(function (item, idx) {
    item.addEventListener("mouseover", function() {
        if (idx === 0) {
          gsap.to("#pageOne", {scale: 1.1, duration: 1})
        }
        if (idx === 1) {
          gsap.to("#pageTwo", {scale: 1.1, duration: 1})
        }
    })
    item.addEventListener("mouseout", function() {
      if (idx === 0) {
        gsap.to("#pageOne", {scale: 1, duration: 1})
      }
      if (idx === 1) {
        gsap.to("#pageTwo", {scale: 1, duration: 1})
      }
  })
})
