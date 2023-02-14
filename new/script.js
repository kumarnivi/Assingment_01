// button function start

function mouseOver() {
  document.getElementById("demo").style.backgroundColor = "red";
}

function mouseOut() {
  document.getElementById("demo").style.backgroundColor = "blue";
}

// active nav bar start

// active nav bar end
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

// form validation start
function myfunc() {


  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var project = document.getElementById("project").value;
  var texaria = document.getElementById("texaria").value;




  if (/^[a-zA-Z]{2,23}/.test(fname)) {
    document.getElementById("none").innerHTML = ""
  } else {
    document.getElementById("none").innerHTML = "charecter should be 2 to 23";

  }

  if (/^[a-zA-Z]{2,5}/.test(lname)) {
    document.getElementById("none1").innerHTML = ""
  } else {
    document.getElementById("none1").innerHTML = "charecter should be 2 to 10";

  }
  if (/[a-z0-9A-Z]{1,5}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
    document.getElementById("none2").innerHTML = ""
  } else {
    document.getElementById("none2").innerHTML = "invalid email";

  }
  if (/^[a-zA-Z]{2,5}/.test(project)) {
    document.getElementById("none3").innerHTML = ""
  } else {
    document.getElementById("none3").innerHTML = "please write name";

  }

  if (/^[a-zA-Z]{2,5}/.test(texaria)) {
    document.getElementById("none4").innerHTML = " "
  } else {
    document.getElementById("none4").innerHTML = "between 2 and 5 characters .";
    return false;
  }

};
// form validation end

// msg popup succesfull start

// const myform = document.getElementById('myform');

// myform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form submited")
// });

// msg popup sucsessfull end

// carusel first
const images = ["image/newcam2.jpeg", "image/newcam3.jpg", "image/cam1.jpg"];
const carousel = document.querySelector(".carousel");
const intervel = setInterval(function () {
  startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index++]})`;
  carousel.classList.remove("slide");
  void carousel.offsetWidth;
  carousel.classList.add("slide");
  if (index > images.length - 1) index = 0;
}
// carusel first



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
    center: { lat: 9.680680, lng: 80.272148 },
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

function openPoup() {
  newwin = window.open('product.html');
}
// page loader end

// Get the button start
let mybutton = document.getElementById("myBtn");


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
// Get the button start


// // carusel 2nd
// const images1 = ["/image/logo4.svg", "/image/cm5.jpeg", "/image/logo11.jpg"];
// const carousel1 = document.querySelector(".page");
// const intervel1 = setInterval(function () {
//   startCarousel();
// }, 3000);
// var index = 1;

// startCarousel = () => {
//   carousel1.style.backgroundImage = `url(${images1[index++]})`;
//   carousel1.classList.remove("sow");
//   void carousel1.offsetWidth;
//   carousel1.classList.add("sow");
//   if (index > images1.length - 1) index = 0;
// }
// // carusel 2nd

