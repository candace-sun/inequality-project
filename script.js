let imgs = ["title-page-draft.gif", "2.gif", "3.gif"];
let currIndex = 0;

function nextPage() {
  if (currIndex < imgs.length - 1) {
    currIndex += 1;
  }
  document.getElementById(
    "bg"
  ).style.backgroundImage = `url('${imgs[currIndex]}')`;
}

function prevPage() {
  if (currIndex > 0) {
    currIndex -= 1;
  }
  document.getElementById(
    "bg"
  ).style.backgroundImage = `url('${imgs[currIndex]}')`;
}

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const light = document.getElementById("light");
  light.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
});
