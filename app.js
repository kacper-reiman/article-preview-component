// SHARE
const openBtn = document.getElementById("open__btn");
const closeBtn = document.getElementById("close__btn");
const share = document.querySelector(".share");

openBtn.addEventListener("click", () => {
  if (share.classList.contains("active")) {
    share.classList.remove("active");
  } else {
    share.classList.add("active");
  }
});

closeBtn.addEventListener("click", () => {
  if (share.classList.contains("active")) {
    share.classList.remove("active");
  } else {
    share.classList.add("active");
  }
});

// THEME TOGGLE
const toggleBtn = document.querySelector(".theme__switch");

function changeTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleBtn.addEventListener("change", changeTheme);
