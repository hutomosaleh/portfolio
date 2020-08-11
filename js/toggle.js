var home = document.querySelector('#home');
var about = document.querySelector('#about');
var active = '#home'


home.onclick=function () {
     show("#home");
}
about.onclick=function () {
     show("#about");
}

function show(page){

     if ( page != active) {
          console.log(active)
          asideSectionTogglerBtn();
          // Handles highlighting
          var choice = document.querySelector(page);
          choice.classList.add("active");  // highlights chosen page
          var old_choice = document.querySelector(active);
          old_choice.classList.remove("active");  // un-highlights old page
     
          active_temp = active + "-page"
          active = page  // saves current page information
     
          // Handles show page
          page = page + "-page"
          var choice = document.querySelector(page);
          choice.classList.remove("hidden");  // shows chosen page
          var old_choice = document.querySelector(active_temp);
          old_choice.classList.add("hidden");  // hides old page
          
          console.log(active)
     }
}

// var navBar = document.querySelector(".nav").children;
// var navBarlength = navBar.length;

// for (let i = 0; i < navBarlength; i++) {
//      navBar[i].addEventListener("click", function() {
//           console.log(this.children[0].id);
//           var choice = this.children[0];
//           choice.classList.add("active");
//           active = choice.id
//           choice.classList.add("active");
//      })
// }

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
     asideSectionTogglerBtn();
})

// Toggles the navbar
function asideSectionTogglerBtn() {
     aside.classList.toggle("open");
     navTogglerBtn.classList.toggle("open");
}