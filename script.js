let imgs = ["title-page-draft.gif", "2.gif", "3.gif"];
let img_nums = [];
let currIndex = 0;

for (let i = 1; i <= 24; i++) {
  img_nums.push("slides/" + i + ".gif");
}

console.log(img_nums);

function nextPage() {
  if (currIndex < img_nums.length - 1) {
    currIndex += 1;
  }
  document.getElementById(
    "bg"
  ).style.backgroundImage = `url('${img_nums[currIndex]}')`;
}

function prevPage() {
  if (currIndex > 0) {
    currIndex -= 1;
  }
  document.getElementById(
    "bg"
  ).style.backgroundImage = `url('${img_nums[currIndex]}')`;
}

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const light = document.getElementById("light");
  light.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
});

document.addEventListener("keydown", (event) => {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (event.key) {
    case "ArrowLeft":
      // Left pressed
      prevPage();
      break;
    case "ArrowRight":
      // Right pressed
      nextPage();
      break;
    case "ArrowUp":
      // Up pressed
      break;
    case "ArrowDown":
      // Down pressed
      break;
  }
});

// Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
