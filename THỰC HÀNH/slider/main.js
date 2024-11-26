const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("valueDisplay");
slider.addEventListener("input", function() {
    var value = slider.value;
    valueDisplay.textContent = value;
})