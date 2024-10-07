window.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("sidebar-toggler");
  const sidebar = document.getElementById("sidebar-anchor");

  const innerText = toggler.children[0];

  toggler.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
    innerText.classList.toggle("fa-square-caret-right");
    innerText.classList.toggle("fa-square-caret-left");
  });
});
