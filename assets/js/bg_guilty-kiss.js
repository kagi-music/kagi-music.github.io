var img = [
  "https://i.schoolido.lu/cards/transparent/1014idolizedTransparent.png",
  "https://i.schoolido.lu/cards/transparent/1018idolizedTransparent.png",
  "https://i.schoolido.lu/cards/transparent/1016idolizedTransparent.png",
]

var bg = document.getElementById("bg");

function background(num) {
  var num = Math.floor(Math.random() * 3);
  bg.style.backgroundImage = 'url("' + img[num] +'")';
  bg.style.backgroundSize = 'auto 300px';
  bg.style.backgroundAttachment = 'fixed';
  bg.style.backgroundRepeat = 'no-repeat';
  bg.style.backgroundPosition = '105% 100%';
}

background();