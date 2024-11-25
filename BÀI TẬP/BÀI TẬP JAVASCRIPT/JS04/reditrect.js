function redirect(url, delay) {
    setTimeout(function() {
        window.location.href = url;
    }, delay);
};

const url = "<https://youtube.com/>";

redirect("https://daca.vn/", 5000);