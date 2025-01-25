localStorage.setItem("fullName", "Ngô Lê Nam Quyền")
var value = localStorage.getItem("fullName")
var userName = document.querySelector("#name")
userName.innerHTML = value


// change mode
const button = document.querySelector("#change")
var currentMode = localStorage.getItem("mode")
if(currentMode) {
    const body = document.querySelector("body")
    body.classList.add(currentMode)
}
if(currentMode === "dark") {
    button.innerHTML = "Sáng";
}
else if (currentMode === "") {
    button.innerHTML = "Tối";
}

const buttonChangeMode = button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.value === "dark") {
        localStorage.setItem("mode", "dark")
    }
    else {
        localStorage.setItem("mode", "")
    }

    if(currentMode === "dark") {
        button.innerHTML = "Tối";
    }
    else if (currentMode === "") {
        button.innerHTML = "Sáng";
    }

    currentMode = localStorage.getItem("mode")
})