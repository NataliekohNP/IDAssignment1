var i = 0;
var txt = 'Yaosobi is a Japanese music duo that was formed and debuted in 2019 under Sony Music Entertainment Japan, composing of Vocaloid (voice synthesizer software) producer and songwriter Ayase, and singer-songwriter Lilas Ikuta under the stage name Ikura. The group has released songs based on short stories posted on Monogatary.com, a website operated by their label, later also from various novels, book tie-ups, and letter. The duo debuted with the single "Yoru ni Kakeru" in December 2019. It became successful on the music chart in Japan with charting atop for three consecutive weeks and 2020 year-end on Billboard Japan Hot 100. Their debut extended play The Book was released in January 2021 and reached number two on both Oricon Albums Chart and Billboard Japan Hot Albums.';
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



