var second = document.getElementById("second");
var first = document.getElementById("first");
var opt = document.querySelectorAll(".option");
var selected;

opt.forEach(function (el) {
  el.onclick = function () {
    selected = this.innerHTML;
  };
});

function submit() {
  second.style.display = "flex";
  first.style.display = "none";
  document.getElementById("selected").innerHTML = `You selcted ${
    selected || "0"
  } out of 5`;
}
