const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  dropdown.addEventListener("mouseenter", function() {
    this.querySelector(".product").style.display = "block";
  });
  dropdown.addEventListener("mouseleave", function() {
    this.querySelector(".dropdown-content").style.display = "none";
  });
});
