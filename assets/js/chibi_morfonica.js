var img = [
  "https://i.bandori.party/u/cos/chibi/2304u-cos-chibi-tiny-2304u-cos-chibi-Q7YMGAMashiro-Kurata-cos-chibi-x74Wn3-pn-H6O5fR.png",
  "https://i.bandori.party/u/cos/chibi/2307u-cos-chibi-tiny-2307u-cos-chibi-6cYuBQTouko-Kirigaya-cos-chibi-6WifQ2-pn-DjugDP.png",
  "https://i.bandori.party/u/cos/chibi/2314u-cos-chibi-tiny-2314u-cos-chibi-HJy76YNanami-Hiromachi-cos-chibi-94yRE5--Rc52RC.png",
  "https://i.bandori.party/u/cos/chibi/2317u-cos-chibi-tiny-2317u-cos-chibi-wlM5j8Tsukushi-Futaba-cos-chibi-H4A3pM-p-gcZb2Q.png",
  "https://i.bandori.party/u/cos/chibi/2312u-cos-chibi-tiny-2312u-cos-chibi-NCaqQ4Rui-Yashio-cos-chibi-8FXWuZ-png-Wv-UbSiMZ.png",
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