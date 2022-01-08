// Song List Page
const closeBtn = document.getElementsByClassName('close');
const songList = document.getElementsByClassName('song-list-wrapper');
const band = document.getElementsByClassName('band');
const group = document.getElementsByClassName('group');

if (document.URL.indexOf('bang-dream') > -1) {
  // Open BanG Dream! song list
  band[0].addEventListener('click', () => songList[0].classList.add('show'));
  band[1].addEventListener('click', () => songList[1].classList.add('show'));
  band[2].addEventListener('click', () => songList[2].classList.add('show'));
  band[3].addEventListener('click', () => songList[3].classList.add('show'));
  band[4].addEventListener('click', () => songList[4].classList.add('show'));
  band[5].addEventListener('click', () => songList[5].classList.add('show'));
  band[6].addEventListener('click', () => songList[6].classList.add('show'));
  
  // Close BanG Dream! song list
  closeBtn[0].addEventListener('click', () => songList[0].classList.remove('show'));
  closeBtn[1].addEventListener('click', () => songList[1].classList.remove('show'));
  closeBtn[2].addEventListener('click', () => songList[2].classList.remove('show'));
  closeBtn[3].addEventListener('click', () => songList[3].classList.remove('show'));
  closeBtn[4].addEventListener('click', () => songList[4].classList.remove('show'));
  closeBtn[5].addEventListener('click', () => songList[5].classList.remove('show'));
  closeBtn[6].addEventListener('click', () => songList[6].classList.remove('show'));
}

if (document.URL.indexOf('love-live') > -1) {
  // Open Love Live! song list
  group[0].addEventListener('click', () => songList[0].classList.add('show'));
  group[1].addEventListener('click', () => songList[1].classList.add('show'));
  group[2].addEventListener('click', () => songList[2].classList.add('show'));
  group[3].addEventListener('click', () => songList[3].classList.add('show'));
  
  // Close Love Live! song list
  closeBtn[0].addEventListener('click', () => songList[0].classList.remove('show'));
  closeBtn[1].addEventListener('click', () => songList[1].classList.remove('show'));
  closeBtn[2].addEventListener('click', () => songList[2].classList.remove('show'));
  closeBtn[3].addEventListener('click', () => songList[3].classList.remove('show'));
}
