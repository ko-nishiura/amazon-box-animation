let box = document.getElementById("box");
window.onmousemove = function (e) {
  box.style.transform = "rotateX(-30deg) rotateY(" + e.clientX * 0.5 + "deg)";
};
