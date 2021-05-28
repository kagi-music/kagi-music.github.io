// Homepage
document.getElementById('homepage-menu').addEventListener('click', function () {
  document.getElementById('homepage-btn').classList.toggle('show');
});

// Overlay Menu
function Overlay() {
  document.getElementById('overlay').classList.toggle('show');
  if (document.getElementById('menu').innerHTML == '<i class="fas fa-bars"></i>') {
    document.getElementById('menu').innerHTML = '<i class="fas fa-times"></i>';
  } else {
    document.getElementById('menu').innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Back To Top
$(document).ready(function () {
  $(window).scroll(function () {
    if($(this).scrollTop() > 20) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 'fast');
  });
});

// Download Button
function Download() {
  document.getElementById('DownloadContent').classList.toggle('show');
}

// Tabs
function Tabs(evt, song) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(song).style.display = 'block';
  evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();
