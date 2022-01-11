// Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
  preloader.classList.add('fade-out');
  setTimeout(() => preloader.className = 'hidden', 1000);
});

// Counter
let i;

// Dark Mode
let darkMode = localStorage.getItem('DarkMode');
const themeToggleBtn = document.getElementById('theme-btn');

function enableDarkMode() {
  localStorage.setItem('DarkMode', 'enabled');
  themeToggleBtn.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>'
  document.body.classList.add('dark');
}

function disableDarkMode() {
  localStorage.setItem('DarkMode', null);
  themeToggleBtn.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
  document.body.classList.remove('dark');
}

if (darkMode === 'enabled') enableDarkMode();

document.getElementById('theme-btn').addEventListener('click', () => {
  darkMode = localStorage.getItem('DarkMode');
  darkMode != 'enabled' ? enableDarkMode() : disableDarkMode();
});

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

// Open Menu Overlay
const menu = document.getElementById('menu-overlay');
document.getElementById('menu-btn').addEventListener('click', () => menu.classList.toggle('show'));

// Language
let jpMode = localStorage.getItem('JPMode');
const en = document.getElementsByClassName('en');
const jp = document.getElementsByClassName('jp');

function enableJPMode() {
  localStorage.setItem('JPMode', 'enabled');
  for (i = 0; i < en.length; i++) en[i].style.display = 'none';
  for (i = 0; i < jp.length; i++) jp[i].style.display = 'inline';
}

function disableJPMode() {
  localStorage.setItem('JPMode', null);
  for (i = 0; i < en.length; i++) en[i].style.display = 'inline';
  for (i = 0; i < jp.length; i++) jp[i].style.display = 'none';
}

jpMode === 'enabled' ? enableJPMode() : disableJPMode();

document.getElementById('lang-btn').addEventListener('click', () => {
  jpMode = localStorage.getItem('JPMode');
  jpMode != 'enabled' ? enableJPMode() : disableJPMode();
});

// Back to Top
const topBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  let y = window.scrollY || document.body.scrollTop;
  y > 48 ? topBtn.classList.add('show') : topBtn.classList.remove('show');
});

topBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});