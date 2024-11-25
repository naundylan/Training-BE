var notification = document.getElementById("notification");

function hiddenNotification() {
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);
};

hiddenNotification();