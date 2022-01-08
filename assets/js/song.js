// Download
document.querySelector('.download-btn').addEventListener('click', () => {
  document.getElementById('download-list').classList.toggle('show');
  document.getElementById('arrow').classList.toggle('rotate');
});

// Character
const chara = document.getElementById('character');
function character() {
  let num = Math.floor(Math.random() * img.length);
  chara.src = img[num];
}
character();