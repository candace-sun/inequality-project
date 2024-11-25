let imgs = ["title-page-draft.gif", "2.gif", "3.gif"];
let img_nums = [];
let currIndex = 0;

for (let i = 1; i <= 24; i++) {
  img_nums.push("slides/" + i + ".gif");

  if (i == 20) {
    img_nums.push("QUIZ");
  }
}

console.log(img_nums);

function nextPage() {
  if (currIndex < img_nums.length - 1) {
    currIndex += 1;
  }

  if (img_nums[currIndex] == "QUIZ") {
    document.getElementById("bg").style.backgroundImage = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("light").style.display = "none";
  } else {
    document.getElementById(
      "bg"
    ).style.backgroundImage = `url('${img_nums[currIndex]}')`;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("light").style.display = "block";
  }

  if (currIndex == 0 || currIndex == 24) {
    document.getElementById("bg").style.backgroundColor = "#cfcbca";
  } else {
    document.getElementById("bg").style.backgroundColor = "black";
  }
}

function prevPage() {
  if (currIndex > 0) {
    currIndex -= 1;
  }
  if (img_nums[currIndex] == "QUIZ") {
    document.getElementById("bg").style.backgroundImage = "none";
    document.getElementById("light").style.display = "none";
    document.getElementById("quiz").style.display = "block";
  } else {
    document.getElementById(
      "bg"
    ).style.backgroundImage = `url('${img_nums[currIndex]}')`;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("light").style.display = "block";
  }

  if (currIndex == 0 || currIndex == 24) {
    document.getElementById("bg").style.backgroundColor = "#cfcbca";
  } else {
    document.getElementById("bg").style.backgroundColor = "black";
  }
}

function checkAnswer() {
  if (document.getElementById("option-two").checked) {
    document.getElementById("answer").innerHTML = "Correct!<br/><br/>";
  } else {
    document.getElementById("answer").innerHTML = "Incorrect<br/><br/>";
  }
  document.getElementById("answer").innerHTML +=
    "Despite their accomplishments, a socioeconomic gradient is not obviously present for Asian Americans in key assimilation outcomes - particularly for political participation, but also in intermarriage, locational attainment, and mental health. This further indicates the impact of racialization in Asian assimilation.<br/><br/>As an interesting comparison, among Hispanics, SES is regarded as a strong correlate for assimilation measures, with educational achievement as a particularly strong factor. <br/><br/> (Lee and Kye)";
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
