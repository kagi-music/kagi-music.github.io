// Dark Mode
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#switch');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  var nav = document.getElementsByTagName("nav");
  var x = document.getElementById("topnav");
  var link =  x.getElementsByTagName("a");
  var box = document.getElementsByClassName("box");
  var footer = document.getElementsByTagName("footer");
  var drop = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.add("dark-nav");
  }
  for (i = 0; i < link.length; i++) {
    link[i].classList.add("dark-border");
  }
  for (i = 0; i < box.length; i++) {
    box[i].classList.add("dark-box");
  }
  for (i = 0; i < footer.length; i++) {
    footer[i].classList.add("dark-nav");
  }
  for (i = 0; i < drop.length; i++) {
    drop[i].classList.add("dark-box");
  }

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  var nav = document.getElementsByTagName("nav");
  var x = document.getElementById("topnav");
  var link =  x.getElementsByTagName("a");
  var box = document.getElementsByClassName("box");
  var footer = document.getElementsByTagName("footer");
  var drop = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.remove("dark-nav");
  }
  for (i = 0; i < link.length; i++) {
    link[i].classList.remove("dark-border");
  }
  for (i = 0; i < box.length; i++) {
    box[i].classList.remove("dark-box");
  }
  for (i = 0; i < footer.length; i++) {
    footer[i].classList.remove("dark-nav");
  }
  for (i = 0; i < drop.length; i++) {
    drop[i].classList.remove("dark-box");
  }

  localStorage.setItem('darkMode', null);
}

if (darkMode === "enabled") {
  enableDarkMode();
  if (document.getElementById("theme").src == "https://kagi-music.github.io/assets/images/sun.png") {
    document.getElementById("theme").src = "https://kagi-music.github.io/assets/images/moon.png";
  } else {
    document.getElementById("theme").src = "https://kagi-music.github.io/assets/images/sun.png";
  }
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  
  if (darkMode !== "enabled") {
    enableDarkMode();
    document.getElementById("theme").src = "https://kagi-music.github.io/assets/images/moon.png";
  } else {
    disableDarkMode();
    document.getElementById("theme").src = "https://kagi-music.github.io/assets/images/sun.png";
  }
});

// Mobile Navigation Menu
function MobileMenu() {
  var menu = document.getElementById("nav-left");
  if (menu.className === "left") {
    menu.className += " mobile";
  } else {
    menu.className = "left";
  }
}

// Dropdown
function Dropdown() {
  if (document.getElementById("dropdown").style.display == "block") {
    document.getElementById("dropdown").style.display = "none";
  } else {
    document.getElementById("dropdown").style.display = "block";
  }
}

$(document).click(function (e) {
  e.stopPropagation();
  var dropdown = $(".dropdown");

  if (dropdown.has(e.target).length === 0) {
    $(".dropdown-content").hide();
  }
});

// Back To Top
$(document).ready(function () {
  $(window).scroll(function() {
    if($(this).scrollTop() > 20) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  $(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, "fast");
  });
});
