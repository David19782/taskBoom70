import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const imageDiv = document.querySelector(".image");

  imageDiv.addEventListener("click", () => {
    console.log(imageDiv.style)
    imageDiv.style.transform = "scale(2)"

  })
  
});
