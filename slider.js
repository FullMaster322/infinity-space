var IndexV = 0;

function Slisen() {
  setTimeout(Slisen, 2500);
  var x;
  const img = document.getElementsByClassName("slides");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  IndexV++;
  if (IndexV > img.length) {
    IndexV = 1;
  }
  img[IndexV - 1].style.display = "block";
}
Slisen();
