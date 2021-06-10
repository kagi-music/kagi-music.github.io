// Back To Top
$(document).ready(function () {
  $(window).scroll(function () { 
    if($(this).scrollTop() > 176 ) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').click(function () { 
    $('html').animate({scrollTop: 0}, 'fast');
  });
});

// Dark Mode
var i = 0;
let darkmode = localStorage.getItem('DarkMode');
const darkmodeToggle = document.getElementById('theme-btn');
var nav = document.querySelector('nav');
var line = document.getElementsByClassName('line');
var container = document.getElementsByClassName('container');
var card = document.getElementsByClassName('card');
var downloadlist = document.getElementsByClassName('download-list');
var footer = document.querySelector('footer');

function enableDarkMode() {
  localStorage.setItem('DarkMode', 'enabled');
  darkmodeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkmodeToggle.style.transform = 'scaleX(-1)';
  document.body.classList.add('dark');
  nav.classList.add('dark');
  for (i = 0; i < line.length; i++) {
    line[i].classList.add('dark');
  }
  for (i = 0; i < container.length; i++) {
    container[i].classList.add('dark');
  }
  for (i = 0; i < card.length; i++) {
    card[i].classList.add('dark');
  }
  for (i = 0; i < downloadlist.length; i++) {
    downloadlist[i].classList.add('dark');
  }
  footer.classList.add('dark');
}

function disableDarkMode() {
  localStorage.setItem('DarkMode', null);
  darkmodeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  darkmodeToggle.style.transform = 'scaleX(1)';
  document.body.classList.remove('dark');
  nav.classList.remove('dark');
  for (i = 0; i < line.length; i++) {
    line[i].classList.remove('dark');
  }
  for (i = 0; i < container.length; i++) {
    container[i].classList.remove('dark');
  }
  for (i = 0; i < card.length; i++) {
    card[i].classList.remove('dark');
  }
  for (i = 0; i < downloadlist.length; i++) {
    downloadlist[i].classList.remove('dark');
  }
  footer.classList.remove('dark');
}

if (darkmode === 'enabled') {
  enableDarkMode();
}

document.getElementById('theme-btn').addEventListener('click', () => {
  darkmode = localStorage.getItem('DarkMode');
  if (darkmode != 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Open Menu Overlay
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
});

// Close Menu Overlay
document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.remove('show');
  document.body.style.overflow = 'auto';
});

// Download
document.querySelector('.download-btn').addEventListener('click', () => {
  document.getElementById('download-list').classList.toggle('show');
  document.getElementById('arrow').classList.toggle('rotate');
});

// Character
var chara = document.getElementById('character');
function character(num) {
  var num = Math.floor(Math.random() * img.length);
  chara.src = img[num];
}
character();

