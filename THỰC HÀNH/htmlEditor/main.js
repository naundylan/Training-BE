const htmlEditor = document.getElementById("html-editor");
const previewButton = document.getElementById("preview-button");
const previewArea = document.getElementById("preview");

previewButton.addEventListener("click", function() {
    const htmlCode = htmlEditor.value;
    previewArea.innerHTML = htmlCode;
});