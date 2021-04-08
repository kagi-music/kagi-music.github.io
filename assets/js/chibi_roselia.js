var img = [
  "https://i.bandori.party/u/cos/chibi/2347u-cos-chibi-tiny-2347u-cos-chibi-vpb8koYukina-Minato-Happy-chibi-ibp17u-p-tKqW9o.png",
  "https://i.bandori.party/u/cos/chibi/2341u-cos-chibi-tiny-2341u-cos-chibi-e4kEpwSayo-Hikawa-Cool-chibi-Fcaalr-png--t1jQ70.png",
  "https://i.bandori.party/u/cos/chibi/2344u-cos-chibi-tiny-2344u-cos-chibi-gveBU9Lisa-Imai-Power-chibi-SBaWH5-png-6-G3mlPi.png",
  "https://i.bandori.party/u/cos/chibi/2338u-cos-chibi-tiny-2338u-cos-chibi-CWNLgNAko-Udagawa-Pure-chibi-26hp1j-png--X04cSQ.png",
  "https://i.bandori.party/u/cos/chibi/2335u-cos-chibi-tiny-2335u-cos-chibi-9V72uKRinko-Shirokane-Power-chibi-oGQfr5-CAUkL8.png",
]

var bg = document.getElementById("chibi");

function chibi(num) {
  var num = Math.floor(Math.random() * 5);
  bg.style.backgroundImage = 'url("' + img[num] +'")';
  bg.style.backgroundSize = 'auto 200px';
  bg.style.backgroundAttachment = 'fixed';
  bg.style.backgroundRepeat = 'no-repeat';
  bg.style.backgroundPosition = '100% 100%';
}

chibi();