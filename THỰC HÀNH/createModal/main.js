const openModalButton = document.getElementById("open-modal-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    })
});