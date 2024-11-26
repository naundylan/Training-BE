var colorPicker = document.getElementById("color-picker");
var colorPreview = document.getElementById("color-preview");

colorPicker.addEventListener("change", function() {
    var colorValue = colorPicker.value;
    colorPreview.style.backgroundColor = colorValue;
});