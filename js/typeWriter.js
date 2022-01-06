function typeWriter() {
    if (i < txt.length) {
      document.getElementById("SansIntro").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }