var headH1 = document.getElementById('tytulstrony');
   var heaDIV = document.getElementById('element');



   if (heaDIV !== null) {
    var image = document.createElement('img');
    var button = document.createElement("button");
    image.setAttribute('src', 'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg');

    button.appendChild(image);
    document.body.appendChild(button);

    var clickCount = 0;
button.addEventListener("click", function() {
   clickCount++;
   if (clickCount == 1) {
      window.open("http://wsb.pl", "_blank");
   } else if (clickCount == 2) {
      window.open("https://vuejs.org/", "_blank");
      clickCount = 0;
   }
});

   }