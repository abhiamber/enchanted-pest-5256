let userArray = JSON.parse(localStorage.getItem("userDataOfSignup")) || [];

document.querySelector("#user").addEventListener("click", showUserEntry);
document.querySelector("#firstL").addEventListener("click", showUserLogin);
document.querySelector("#secondL").addEventListener("click", showUserSignup);

let flag = true;
function showUserEntry() {
  if (flag) {
    document.querySelector("#userEntry").style.display = "block";
    // console.log("yes")
    flag = false;
  } else {
    document.querySelector("#userEntry").style.display = "none";
    document.querySelector("#signup").style.display = "none";
    document.querySelector("#login").style.display = "none";
    // console.log("no")
    flag = true;
  }
}

let flag1 = true;
function showUserLogin() {
  if (flag1) {
    flag1 = false;
    document.querySelector("#signup").style.display = "none";
    document.querySelector("#login").style.display = "flex";
    // console.log("log")
  } else {
    flag1 = true;
    document.querySelector("#login").style.display = "none";
    //   console.log("nolog")
  }
}

let flag2 = true;
function showUserSignup() {
  if (flag2) {
    flag2 = false;
    document.querySelector("#login").style.display = "none";
    document.querySelector("#signup").style.display = "flex";
  } else {
    document.querySelector("#signup").style.display = "none";
    // console.log("hellzvsvdsvo")
    flag2 = true;
  }
}

document
  .querySelector(".signupform")
  .addEventListener("submit", displaySignupForm);

function displaySignupForm(e) {
  e.preventDefault();
  if (
    document.querySelector("#emails2").value == "" ||
    document.querySelector("#mob").value == "" ||
    document.querySelector("#name").value == "" ||
    document.querySelector("#pass2").value == ""
  ) {
    alert("Please fill all required input");
  } else {
    let obj = {
      emailsignup: document.querySelector("#emails2").value,
      mobile: document.querySelector("#mob").value,
      names: document.querySelector("#name").value,
      passwordsignup: document.querySelector("#pass2").value,
    };
    alert("Signup sucessful");
    userArray.push(obj);
  }
  localStorage.setItem("userDataOfSignup", JSON.stringify(userArray));
}

document
  .querySelector(".loginform")
  .addEventListener("submit", displayLoginForm);

function displayLoginForm(e) {
  e.preventDefault();
  let flag = false;
  console.log(userArray);
  userArray.map(function (elem) {
    if (
      elem.passwordsignup == document.querySelector("#pass1").value &&
      elem.emailsignup == document.querySelector("#email1").value
    ) {
      flag = true;
    }
  });

  if (flag) {
    alert("sucessful");
  } else {
    alert("TryAgain");
  }
}

document.querySelector("#hamberg").addEventListener("click", hambergSection);

let flag3 = true;
function hambergSection() {
  // console.log("hello")
  if (flag3) {
    flag3 = false;
    document.querySelector("#ham").style.display = "block";
  } else {
    document.querySelector("#ham").style.display = "none";
    flag3 = true;
  }
}

let topDestinations = [
  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/goa-11.f1c86735cec4.jpg",
    place: "Goa",
    vac: "Vacation Rentals",
  },
  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/galle-27739.4e9874b7f375.jpg",
    place: "Galle",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/phuket-72.9d6f9e3883be.jpg",
    place: "Phuket",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/kandy-5144.2adb0839ea6a.jpg",
    place: "Koh Samui",
    vac: "Vacation Rentals",
  },
  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/lonavala-2293.ab3b797cddf6.jpg",
    place: "Lonavala",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/kerala-18.c082ce41a521.jpg",
    place: "Kerala",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/pattaya-103.efcc9f2f0593.jpg",
    place: "Pattaya",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/pattaya-103.efcc9f2f0593.jpg",
    place: "Himachal Pradesh",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/pattaya-103.efcc9f2f0593.jpg",
    place: "Alibag",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/coorg-5464.83497c6367a3.jpg",
    place: "Corogp",
    vac: "Vacation Rentals",
  },
  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/paris-12904.935a27918023.jpg",
    place: "Paris",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/cape-town-18738.a03fe431b7f0.jpg",
    place: "Cap Town",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/barcelona-13765.0b9dcf0cb99c.jpg",
    place: "Barcelona",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/sydney-12057.f0b028083eef.jpg",
    place: "Sydney",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/orlando-5996.b0bf66cecab5.jpg",
    place: "Orlando",
    vac: "Vacation Rentals",
  },

  {
    src: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/rome-12009.602b199321a4.jpg",
    place: "Rome",
    vac: "Vacation Rentals",
  },
];

let x=document.querySelector("#left")
x && x.addEventListener("click", leftSliding);
let y=document.querySelector("#right")
y && y.addEventListener("click", rightSliding);
// let count=0
let start = 0;
let last = 4;
display(start, last);

function leftSliding() {
  if (start >= 1 && last >= 5) {
    start--;
    last--;
    display(start, last);
  }else{
    start=0
    last=4
    display(start, last);

  }
}

function rightSliding() {
  if (last < topDestinations.length - 1) {
    start++;
    last++;
    display(start, last);
  } else {
    start = 0;
    last = 4;
    display(start, last);
  }
}

function display(start, last) {
  document.querySelector("#destination").innerHTML= "";
  // console.log("hello");ss
  // let start=0
  // let last=4
  for (start; start <= last; start++) {
    let div = document.createElement("div");
    div.addEventListener("click",function(){
      window.location.href="Booking.html"
     })
    let image=document.createElement("img")
  image.src= topDestinations[start].src;
  // div.style.backgroundColor="red"

    let h2 = document.createElement("h2");
    h2.innerText = topDestinations[start].place;
    let p = document.createElement("p");
    p.innerText = topDestinations[start].vac;
    div.append(image,h2, p);
  
    document.querySelector("#destination").appendChild(div);
  }
}


// ************************************************

let vacationArray=[
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/phuket.jpg",place:"Phukets Best Pool Villas"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/vindhyas-homestay.jpg",place:"Coorg Homestays"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/lonavala.jpg",place:"Family Bungalows in Lonavala"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/beautiful-Bali-Gazebo_1.jpg",place:"Bali Family Villas"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/sri_lanka.jpg",place:"Sri Lanka - Rural solitude and luxury combined"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/Louvre_Museum_Wikimedia_Commons.jpg",place:"Apartments near the Louvre in Paris"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/planters-bungalow.PNG",place:"Cheap & Affordable Homestays & Resorts in Sakleshpur"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/goaluxury_272x204.jpg",place:"Luxury Vacation in Goa"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/dsc_1386.JPG",place:"Top Homestays and resorts in Chikmagalur"},
  {link:"https://d2vcelvjdj7n25.cloudfront.net/media/collection/slide-13.jpg",place:"Escape to the Nilgiris - Homestays, Resorts, Cottages in Coonoor"}
]


document.querySelector("#leftvac").addEventListener("click", leftSlidingvac);
document.querySelector("#rightvac").addEventListener("click", rightSlidingvac);
// let count=0
let start2 = 0;
let last2 = 4;
displayVacation(start2, last2);

function leftSlidingvac() {
  if (start2 >= 1 && last2 >= 5) {
    start2--;
    last2--;
    displayVacation(start2, last2);
  }else{
    start2=0
    last2=4
      displayVacation(start2, last2);
  }
}

function rightSlidingvac() {
  if (last2 < vacationArray.length - 1) {
    start2++;
    last2++;
    displayVacation(start2, last2);
  } else {
    start2 = 0;
    last2 = 4;
    displayVacation(start2, last2);
  }
}

function displayVacation(start2, last2) {
  document.querySelector("#Vacation").innerHTML = "";

  for (start2; start2 <= last2; start2++) {
    let div = document.createElement("div");
    let image=document.createElement("img")
  image.src= vacationArray[start2].link;


    let h2 = document.createElement("h2");
    h2.innerText = vacationArray[start2].place;
   div.addEventListener("click",function(){
    window.location.href="Booking.html"
   })
    div.append(image,h2);
  
    document.querySelector("#Vacation").appendChild(div);
  }
}



