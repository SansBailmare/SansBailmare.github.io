var i = 0;
var txt = 'Hello, Welcome to My Site.Find Out Things About me.';
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demotype").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}