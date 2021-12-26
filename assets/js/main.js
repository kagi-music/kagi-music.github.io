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

// Counter
let i;

// Open Search Bar
const navSearchBtn = document.querySelector('nav .search-btn');
const navSearchContainer = document.querySelector('nav .search-container');
const navSearchContainerBtn = document.querySelector('nav .search-container button');
navSearchBtn.addEventListener('click', () =>  navSearchContainer.classList.add('show'));
navSearchContainerBtn.addEventListener('click', () => navSearchContainer.classList.remove('show'));

// Search List
document.getElementById('search-box').addEventListener('keyup', () => {
  const input = document.getElementById('search-box');
  let keyword = input.value.toLowerCase();
  const ul = document.getElementById('search-list');
  const li = document.querySelectorAll('nav .search-list li');
  if (input.value.length == 0) {
    ul.style.display = 'none';
    return 0;
  } else {
    ul.style.display = 'block';
  }
  for (i = 0; i < li.length; i++) {
    let a = li[i].querySelectorAll('nav .search-list a')[0];
    a.innerHTML.toLowerCase().indexOf(keyword) > -1 ? li[i].style.display = 'block' : li[i].style.display = 'none';
  }
});

// Language
let jpMode = localStorage.getItem('JPMode');
const langBtn = document.getElementById('lang-btn');
const en = document.getElementsByClassName('en');
const jp = document.getElementsByClassName('jp');
const original = document.querySelectorAll('.original h4');
const cover = document.querySelectorAll('.cover h4');

function enableJPMode() {
  localStorage.setItem('JPMode', 'enabled');
  langBtn.innerHTML = '日本語';
  for (i = 0; i < en.length; i++) en[i].style.display = 'none';
  for (i = 0; i < jp.length; i++) jp[i].style.display = 'block';
  for (i = 0; i < original.length; i++) original[i].innerHTML = 'オリジナル';
  for (i = 0; i < cover.length; i++) cover[i].innerHTML = 'カバー';
}

function disableJPMode() {
  localStorage.setItem('JPMode', null);
  langBtn.innerHTML = 'English';
  for (i = 0; i < en.length; i++) en[i].style.display = 'block';
  for (i = 0; i < jp.length; i++) jp[i].style.display = 'none';
  for (i = 0; i < original.length; i++) original[i].innerHTML = 'Original';
  for (i = 0; i < cover.length; i++) cover[i].innerHTML = 'Cover';
}

jpMode === 'enabled' ? enableJPMode() : disableJPMode();

document.getElementById('lang-btn').addEventListener('click', () => {
  jpMode = localStorage.getItem('JPMode');
  jpMode != 'enabled' ? enableJPMode() : disableJPMode();
});

// Dark Mode
let darkMode = localStorage.getItem('DarkMode');
const darkModeToggle = document.getElementById('theme-btn');
const menu = document.getElementById('menu-overlay');
const searchBox = document.querySelector('nav .search-container input');
const searchList = document.getElementById('search-list');
const card = document.getElementsByClassName('card');

function enableDarkMode() {
  localStorage.setItem('DarkMode', 'enabled');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkModeToggle.style.transform = 'scaleX(-1)';
  document.body.classList.add('dark');
  menu.classList.add('dark');
  searchBox.classList.add('dark');
  searchList.classList.add('dark');
  for (i = 0; i < card.length; i++) card[i].classList.add('dark');
}

function disableDarkMode() {
  localStorage.setItem('DarkMode', null);
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  darkModeToggle.style.transform = 'scaleX(1)';
  document.body.classList.remove('dark');
  menu.classList.remove('dark');
  searchBox.classList.remove('dark');
  searchList.classList.remove('dark');
  for (i = 0; i < card.length; i++) card[i].classList.remove('dark');
}

if (darkMode === 'enabled') enableDarkMode();

document.getElementById('theme-btn').addEventListener('click', () => {
  darkMode = localStorage.getItem('DarkMode');
  darkMode != 'enabled' ? enableDarkMode() : disableDarkMode();
});

// Open Menu Overlay
document.getElementById('menu-btn').addEventListener('click', () => menu.classList.toggle('show'));