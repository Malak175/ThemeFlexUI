// Toggle dark/light mode
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const button = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "🌙 Dark Mode";
  } else {
    button.textContent = "🌞 Light Mode";
  }
}
// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
function toggleCustomizer() {
  document.getElementById("customizer-panel").classList.toggle("active");
}

// Change primary color on click
function toggleCustomizer() {
  document.getElementById("customizer-panel").classList.toggle("active");
}
let chosenColors = {
  background: "",
  h1: "",
  h2: "",
  p: ""
};
document.getElementById("bgColorPicker").addEventListener("input", (e) => {
  chosenColors.background = e.target.value;
});
document.getElementById("h1ColorPicker").addEventListener("input", (e) => {
  chosenColors.h1 = e.target.value;
});
document.getElementById("h2ColorPicker").addEventListener("input", (e) => {
  chosenColors.h2 = e.target.value;
});
document.getElementById("pColorPicker").addEventListener("input", (e) => {
  chosenColors.p = e.target.value;
});
document.getElementById("applyTheme").addEventListener("click", () => {
  if (chosenColors.background) document.body.style.backgroundColor = chosenColors.background;
  if (chosenColors.h1) document.querySelectorAll("h1").forEach(h1 => h1.style.color = chosenColors.h1);
  if (chosenColors.h2) document.querySelectorAll("h2").forEach(h2 => h2.style.color = chosenColors.h2);
  if (chosenColors.p) document.querySelectorAll("p").forEach(p => p.style.color = chosenColors.p);
  toggleCustomizer();
});

