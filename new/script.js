// button function start

function mouseOver() {
    document.getElementById("demo").style.backgroundColor = "red";
}

function mouseOut() {
    document.getElementById("demo").style.backgroundColor = "blue";
}

// form validation start
function myfunc(){


  var name = document.getElementById("fname").value;
  var zipCode= document.getElementById("lname").value;
  var email = document.getElementById("email").value;
 var phoneNumber =document.getElementById("project").value;
  
  
  
  
  if (/^[a-zA-Z]{2,15}/.test(name)) {
      document.getElementById("none").innerHTML = " "
  } else {
      document.getElementById("none").innerHTML = "less than 15 characters";
    
  }
  
  if (/^[a-zA-Z]{2,15}/.test(zipCode)) {
    document.getElementById("none1").innerHTML = " "
} else {
    document.getElementById("none1").innerHTML = "invalid name";

}
  
  if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
      document.getElementById("none3").innerHTML = " "
  } else {
      document.getElementById("none3").innerHTML = "invalid email";
  
  }
  
  
  if (/^\d{10}$/.test(phoneNumber)) {
      document.getElementById("none3").innerHTML = " "
  } else {
      document.getElementById("none3").innerHTML = "phone number should be 10.";
      return false;
  }
  
  
  };
// form validation end


// carusel first
const images = ["image/newcam2.jpeg","image/newcam3.jpg","image/cam1.jpg"];
const carousel = document.querySelector(".carousel");
const intervel = setInterval(function(){
    startCarousel();
}, 3000);
var index = 1;

startCarousel = () =>{
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("slide");
    void carousel.offsetWidth;
    carousel.classList.add("slide");
    if(index > images.length-1) index = 0;
}
// carusel first

// zoom in start
function bigImg(x) {
    x.style.height = "250px";
    x.style.width = "250px";
  }
  
  function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
  }
// zoom in end

// img_gallery filter start
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;
  
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
  
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
      })
    }
// img_gallery filter end

// js assinmgent carousel start
// js assinmgent carousel start



 // map function start
 let map;

 function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
     center: {lat: 9.680680, lng: 80.272148  },
     zoom: 8,
   });
 }
 
 window.initMap = initMap;
 
 
   // map function end

//  text animation JS Start  
// text animation JS end 

// page loader start
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function openPoup(){
  newwin = window.open('loader.html');
}
// page loader end