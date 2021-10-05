var mudarCor = true;
function mudaModo() {
  document.body.classList.toggle("dark");
  if (mudarCor == true) {
    document.getElementById("github").src =
      "https://cdn-icons-png.flaticon.com/512/2111/2111612.png";
    document.getElementById("instagram").src =
      "https://cdn-icons-png.flaticon.com/512/1051/1051364.png";
    document.getElementById("linkedin").src =
    "https://img-premium.flaticon.com/png/512/3128/premium/3128219.png?token=exp=1633413608~hmac=5620df6c9fb628d7eb82fd4e5b35a6a8";
    mudarCor = false;
  } else {
    document.getElementById("github").src =
      "https://cdn-icons-png.flaticon.com/512/733/733609.png";
    document.getElementById("instagram").src =
      "https://cdn-icons-png.flaticon.com/512/1051/1051313.png";
    document.getElementById("linkedin").src =
      "https://cdn-icons-png.flaticon.com/512/61/61109.png";
    mudarCor = true;
  }
}