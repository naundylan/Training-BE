var notification = document.getElementById("notification");

function fadeOut() {
    var opacity = 1;
    var timer = setInterval(function() {
        if(opacity < 0) {
            clearInterval(timer);
            notification.style.display = "none";
        }
        else {
            notification.style.opacity = opacity;
            opacity -= 0.01;
            console.log(opacity);
            
        }
    }, 100);
};

setTimeout(fadeOut, 3000);