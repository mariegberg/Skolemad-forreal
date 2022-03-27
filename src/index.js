const burgerMenu = document.querySelector("#burgerimg");
const exitButton = document.querySelector("#exitbutton");

burgerMenu.addEventListener("click", () => {
  document.querySelector("#burgerimg").classList.add("hidden");
  document.querySelector("#fullscreenmenu").classList.remove("hidden");
});

exitButton.addEventListener("click", () => {
  document.querySelector("#burgerimg").classList.remove("hidden");
  document.querySelector("#fullscreenmenu").classList.add("hidden");
});
