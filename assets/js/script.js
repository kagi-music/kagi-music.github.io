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

// Open Search Bar
document.querySelector('nav .search-btn').addEventListener('click', () => {
  document.querySelector('nav .search-container').classList.add('show');
});

document.querySelector('nav .search-container button').addEventListener('click', () => {
  document.querySelector('nav .search-container').classList.remove('show');
});

// Search List
document.getElementById('search-box').addEventListener('keyup', () => {
  var input, keyword, ul, li, a, i;
  input = document.getElementById('search-box');
  keyword = input.value.toLowerCase();
  ul = document.getElementById('search-list');
  li = document.querySelectorAll('nav .search-list li');

  if (input.value.length == 0) {
    ul.style.display = 'none';
    return 0;
  } else {
    ul.style.display = 'block';
  }

  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll('nav .search-list a')[0];
    if (a.innerHTML.toLowerCase().indexOf(keyword) > -1) {
      li[i].style.display = 'block';
    } else {
      li[i].style.display = 'none';
    }
  }
});

// Language
let jpmode = localStorage.getItem('JPMode');
const langbtn = document.getElementById('lang-btn');
var en = document.getElementsByClassName('en');
var jp = document.getElementsByClassName('jp');
var original = document.querySelectorAll('.original h4');
var cover = document.querySelectorAll('.cover h4');

function enableJPMode() {
  localStorage.setItem('JPMode', 'enabled');
  langbtn.innerHTML = '日本語';
  for (i = 0; i < en.length; i++) {
    en[i].style.display = 'none';
  }
  for (i = 0; i < jp.length; i++) {
    jp[i].style.display = 'block';
  }
  for (i = 0; i < original.length; i++) {
    original[i].innerHTML = 'オリジナル';
  }
  for (i = 0; i < cover.length; i++) {
    cover[i].innerHTML = 'カバー';
  }
}

function disableJPMode() {
  localStorage.setItem('JPMode', null);
  langbtn.innerHTML = 'English';
  for (i = 0; i < en.length; i++) {
    en[i].style.display = 'block';
  }
  for (i = 0; i < jp.length; i++) {
    jp[i].style.display = 'none';
  }
  for (i = 0; i < original.length; i++) {
    original[i].innerHTML = 'Original';
  }
  for (i = 0; i < cover.length; i++) {
    cover[i].innerHTML = 'Cover';
  }
}

if (jpmode === 'enabled') {
  enableJPMode();
} else {
  disableJPMode();
}

document.getElementById('lang-btn').addEventListener('click', () => {
  jpmode = localStorage.getItem('JPMode');
  if (jpmode != 'enabled') {
    enableJPMode();
  } else {
    disableJPMode();
  }
});

// Dark Mode
var i, menu, searchbox, searchlist, container, card, downloadlist;
let darkmode = localStorage.getItem('DarkMode');
const darkmodeToggle = document.getElementById('theme-btn');
menu = document.getElementById('menu-overlay');
searchbox = document.querySelector('nav .search-container input');
searchlist = document.getElementById('search-list');
container = document.getElementsByClassName('container');
card = document.getElementsByClassName('card');
downloadlist = document.getElementsByClassName('download-list');

function enableDarkMode() {
  localStorage.setItem('DarkMode', 'enabled');
  darkmodeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkmodeToggle.style.transform = 'scaleX(-1)';
  document.body.classList.add('dark');
  menu.classList.add('dark');
  searchbox.classList.add('dark');
  searchlist.classList.add('dark');
  for (i = 0; i < container.length; i++) {
    container[i].classList.add('dark');
  }
  for (i = 0; i < card.length; i++) {
    card[i].classList.add('dark');
  }
  for (i = 0; i < downloadlist.length; i++) {
    downloadlist[i].classList.add('dark');
  }
}

function disableDarkMode() {
  localStorage.setItem('DarkMode', null);
  darkmodeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  darkmodeToggle.style.transform = 'scaleX(1)';
  document.body.classList.remove('dark');
  menu.classList.remove('dark');
  searchbox.classList.remove('dark');
  searchlist.classList.remove('dark');
  for (i = 0; i < container.length; i++) {
    container[i].classList.remove('dark');
  }
  for (i = 0; i < card.length; i++) {
    card[i].classList.remove('dark');
  }
  for (i = 0; i < downloadlist.length; i++) {
    downloadlist[i].classList.remove('dark');
  }
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
  menu.classList.toggle('show');
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