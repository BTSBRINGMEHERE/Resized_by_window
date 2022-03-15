const bodys = document.querySelector("body");

function sizeColor() {
  const windowSize = window.innerWidth;
  if (windowSize >= 900) {
    bodys.style.backgroundColor = "orange";
  } else if (windowSize < 900 && windowSize >= 600) {
    bodys.style.backgroundColor = "violet";
  } else if (windowSize < 600 && windowSize >= 500) {
    bodys.style.backgroundColor = "skyblue";
  } else {
    bodys.style.backgroundColor = "white";
  }
}

window.addEventListener("resize", sizeColor);
