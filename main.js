document.addEventListener("DOMContentLoaded", function () {
  let arrows = document.querySelectorAll(".arrow");
  arrows.forEach(function (arrow) {
    arrow.addEventListener("click", function () {
      let dropDown = this.querySelector(".links");

      dropDown.classList.toggle("drop");

      let imgElement = this.querySelector("img");
      let src = imgElement.getAttribute("src");

      src.includes("down")
        ? (imgElement.src = src.replace("down", "up"))
        : (imgElement.src = src.replace("up", "down"));

      // if(src.includes("down")){
      //     imgElement.src = src.replace("down", "up")
      // }else{
      //     imgElement.src = src.replace("up", "down")
      // }
    });
  });
});

function menuBar() {
  let open = document.getElementById("open");
  let closed = document.getElementById("closed");
  let menu = document.getElementById("menu");

  open.classList.toggle("open");
  closed.classList.toggle("closed");
  menu.classList.toggle("ctn");
}
