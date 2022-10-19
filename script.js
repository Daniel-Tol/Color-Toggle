let dropdownMenu = document.querySelector(".dropdown-menu");
let menu = document.querySelector(".menu");
menu.addEventListener("mouseover", function () {
  dropdownMenu.style.opacity = "1";
  dropdownMenu.style.visibility = "visible";
});
menu.addEventListener("mouseout", function () {
  dropdownMenu.style.opacity = "0";
  dropdownMenu.style.visibility = "hidden";
});

let colorToggle = document.querySelectorAll(".color-toggle");
for (let i = 0; i < colorToggle.length; i++) {
  colorToggle[i].addEventListener("click", function () {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.visibility = "hidden";
  });
}

let clickHome = document.getElementById("home");
let clickRed = document.getElementById("red");
let clickOrange = document.getElementById("orange");
let clickPurple = document.getElementById("purple");
let clickGreen = document.getElementById("green");

clickHome.addEventListener("click", function () {
  document.body.style.background = "grey";
  document.getElementById("radio-home").checked = true;
});
clickRed.addEventListener("click", function () {
  document.body.style.background = "red";
  document.getElementById("radio-red").checked = true;
});
clickOrange.addEventListener("click", function () {
  document.body.style.background = "orange";
  document.getElementById("radio-orange").checked = true;
});
clickPurple.addEventListener("click", function () {
  document.body.style.background = "purple";
  document.getElementById("radio-purple").checked = true;
});
clickGreen.addEventListener("click", function () {
  document.body.style.background = "green";
  document.getElementById("radio-green").checked = true;
});

addEventListener("keydown", function (e) {
  if (e.key === "1") {
    window.location = "index.html#home";
    document.body.style.background = "grey";
    document.getElementById("radio-home").checked = true;
  }
  if (e.key === "2") {
    window.location = "index.html#red";
    document.body.style.background = "red";
    document.getElementById("radio-red").checked = true;
  }
  if (e.key === "3") {
    window.location = "index.html#orange";
    document.body.style.background = "orange";
    document.getElementById("radio-orange").checked = true;
  }
  if (e.key === "4") {
    window.location = "index.html#purple";
    document.body.style.background = "purple";
    document.getElementById("radio-purple").checked = true;
  }
  if (e.key === "5") {
    window.location = "index.html#green";
    document.body.style.background = "green";
    document.getElementById("radio-green").checked = true;
  }
});
