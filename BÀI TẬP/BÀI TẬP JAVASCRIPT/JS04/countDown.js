var seconds = 10;

function countDown() {
    if(seconds > 0) {
        console.log(seconds);
        --seconds;
        setTimeout(countDown, 1000);
    }
    else {
        console.log("Happy New Year!");
    }
}

countDown();