const game = document.querySelector(".desktop");
const finish = document.querySelector(".finish");
const yesBtn = document.getElementById("yes-btn");
const btn = document.getElementById("no-btn");
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const btnHeight = 21;
const btnWidth = 75;

yesBtn.addEventListener("click", () => {
  game.classList.add("hidden");
  game.classList.remove("desktop");
  finish.classList.remove("hidden");
});

btn.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse") {
    onmouseover();
  }
  if (event.pointerType === "touch") {
    onmouseover();
  }
});

btn.addEventListener("mouseover", onmouseover);

function onmouseover() {
  const top =
    btnHeight + Math.floor(Math.random() * windowHeight - btnHeight * 2);
  const left =
    btnWidth + Math.floor(Math.random() * windowWidth - btnWidth * 2);
  btn.style.top = `${top}px`;
  btn.style.left = `${left}px`;
}
