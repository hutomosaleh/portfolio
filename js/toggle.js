// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var active = '#home';

// home.onclick = function () {
//   show('#home');
// };
// about.onclick = function () {
//   show('#about');
// };

// function show(page) {
//   if (page != active) {
//     console.log(active);
//     asideSectionTogglerBtn();
//     // Handles highlighting
//     var choice = document.querySelector(page);
//     choice.classList.add('active'); // highlights chosen page
//     var old_choice = document.querySelector(active);
//     old_choice.classList.remove('active'); // un-highlights old page

//     active_temp = active + '-page';
//     active = page; // saves current page information

//     // Handles show page
//     page = page + '-page';
//     var choice = document.querySelector(page);
//     choice.classList.remove('hidden'); // shows chosen page
//     var old_choice = document.querySelector(active_temp);
//     old_choice.classList.add('hidden'); // hides old page

//     console.log(active);
//   }
// }

// Revised version of navbar toggle
const main = document.querySelector('.main-content').children;
const navbar = document.querySelector('.nav').children;
const navbar_length = navbar.length;
var active_navbar = 0;

for (let i = 0; i < navbar_length; i++) {
  navbar[i].addEventListener('click', function () {
    if (i != active_navbar) {
      asideSectionTogglerBtn();
      navbar[active_navbar].children[0].classList.toggle('active');
      navbar[i].children[0].classList.toggle('active');
      main[active_navbar].classList.toggle('hidden');
      main[i].classList.toggle('hidden');
      active_navbar = i;
    }
  });
}

const pmenu = document.querySelector('.project-menu').children;
const pmenu_length = pmenu.length;
const pgroup = document.querySelector('.project-group').children;
var active_project = 1;

// Changes the project menu highlight and shows/hides relevant projects
for (let i = 0; i < pmenu_length; i++) {
  pmenu[i].addEventListener('click', function () {
    if (i != active_project) {
      pmenu[active_project].children[0].classList.toggle('active');
      pmenu[i].children[0].classList.toggle('active');
      pgroup[active_project].classList.toggle('hidden');
      pgroup[i].classList.toggle('hidden');
      active_project = i;
    }
  });
}


const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});

// Toggles the navbar
function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
}

// swiped-left
document.addEventListener('swiped-left', function(e) {
  if (aside.classList.contains('open') !=  false && styleswitcher.classList.contains('open') !=  true) {
    asideSectionTogglerBtn();
  }
});

// swiped-right
document.addEventListener('swiped-right', function(e) {
  if (aside.classList.contains('open') !=  true && styleswitcher.classList.contains('open') !=  true) {
    asideSectionTogglerBtn();
  }
});
