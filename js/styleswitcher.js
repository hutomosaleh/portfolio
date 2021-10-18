const links = document.querySelectorAll(".alternate-style");
const totalLinks = links.length;

function setActiveStyle(color) {
     for (let i = 0; i < totalLinks; i++)  {
          if (color === links[i].getAttribute("title")) {
               links[i].removeAttribute("disabled");
          }
          else {
               links[i].setAttribute("disabled", "true");
          }
     }
}

// Skin color changer: detects changes from radio button
const bodySkin = document.querySelectorAll(".body-skin");
const totalBodySkin = bodySkin.length;

// Set default to dark
document.body.className = "dark";
for (let i = 0; i < totalBodySkin; i++) {
     bodySkin[i].addEventListener("change", function() {
          console.log(this.value);
          if (this.value === "dark") {
               // document.body.classList.add("dark") | Alternative
               document.body.className = "dark";
          }
          else {
               document.body.className = "light";
          }
     })
}

const styleswitcher = document.querySelector(".style-switcher");

// Won't detect the navbar opening, somehow
// // swiped-left
// document.addEventListener('swiped-left', function(e) {
//      // if styles is closed AND navbar is CLOSED, we can swipe it open
//      if (aside.classList.contains('open') != true && styleswitcher.classList.contains('open') != true) {
//           styleswitcher.classList.toggle("open");
//           console.log(aside.classList.contains('open'));
//      };
// });

//    // swiped-right
// document.addEventListener('swiped-right', function(e) {
//      // if styles is open AND navbar is CLOSED, we can swipe it closed
//      if (styleswitcher.classList.contains('open') != false && aside.classList.contains('open') !=  true) {
//           styleswitcher.classList.toggle("open");
//      }
// });

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
     console.log("Yo this button is working");
     styleswitcher.classList.toggle("open");
})


