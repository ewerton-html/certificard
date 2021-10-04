var mudarCor = true;
function mudaModo() {
  document.body.classList.toggle("dark");
  if (mudarCor == true) {
    document.getElementById("github").src =
      "https://cdn-icons-png.flaticon.com/512/2111/2111612.png";
    document.getElementById("instagram").src =
      "https://cdn-icons-png.flaticon.com/512/1051/1051364.png";
    document.getElementById("linkedin").src =
      "https://cdn-icons-png.flaticon.com/512/126/126738.png";
    mudarCor = false;
  } else {
    document.getElementById("github").src =
      "https://cdn-icons-png.flaticon.com/512/733/733609.png";
    document.getElementById("instagram").src =
      "https://cdn-icons-png.flaticon.com/512/1051/1051313.png";
    document.getElementById("linkedin").src =
      "https://cdn-icons-png.flaticon.com/512/38/38669.png";
    mudarCor = true;
  }
}