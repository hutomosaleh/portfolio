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

// Body Skin
const bodySkin = document.querySelectorAll(".body-skin");
const totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
     bodySkin[i].addEventListener("change", function() {
          console.log(this.value);
          if (this.value === "dark") {
               // document.body.classList.add("dark")
               document.body.className = "dark";
          }
          else {
               document.body.className = "light";
          }
     })
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
     console.log("Yo this button is working");
     document.querySelector(".style-switcher").classList.toggle("open");
})


