// Select Elements

const timeHourDisplay = document.querySelectorAll(".time-hour")[0];
const timeMinDisplay = document.querySelectorAll(".time-min")[0];
const timeSecDisplay = document.querySelectorAll(".time-sec")[0];
const content = document.querySelectorAll(".content")[0];
const fullScreenButton = document.getElementById("full-screen-button");
const exitFullScreenButton = document.getElementById("exit-full-screen-button");
const checkbox = document.getElementById("checkbox");
const whichMode = document.querySelectorAll(".which-mode")[0];
const clockTitle = document.querySelectorAll(".clock-title")[0];
const timeNow = document.querySelectorAll(".time-now")[0];
let mode;


refresh();


checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        mode = "dark"
    }
    else {
        mode = "white"
    }
    changeMode(mode);
})


fullScreenButton.addEventListener("click", function () {

    if (content.requestFullscreen) {
        content.requestFullscreen();
        fullScreenButton.style.display = "none";
        exitFullScreenButton.style.display = "inline";
    }

})

exitFullScreenButton.addEventListener("click", function () {
    document.exitFullscreen();
    fullScreenButton.style.display = "inline";
    exitFullScreenButton.style.display = "none";
})


function refresh() {

    setInterval(
        function () {
            const date = new Date();
            changeSecond(date);
            changeMinute(date);
            changeHour(date);
        }, 1000);
}

function changeSecond(date) {
    let timeSec = date.getSeconds();
    if (timeSec < 10) {
        timeSec = `0${timeSec}`
    }
    timeSecDisplay.textContent = timeSec;
}

function changeMinute(date) {
    let timeMin = date.getMinutes();
    if (timeMin < 10) {
        timeMin = `0${timeMin}`
    }
    timeMinDisplay.textContent = timeMin;
}

function changeHour(date) {
    let timeHour = date.getHours();
    if (timeHour < 10) {
        timeHour = `0${timeHour}`
    }
    timeHourDisplay.textContent = timeHour;
}

function changeMode(mode) {

    if (mode === "white") {
        content.className = "content content-white"
        clockTitle.className = "clock-title clock-title-white"
        timeNow.className = "time-now time-now-white"
        whichMode.className = "which-mode which-mode-white"
        whichMode.textContent="Dark Mode";

    }
    else {
        content.className = "content"
        clockTitle.className = "clock-title"
        timeNow.className = "time-now"
        whichMode.className = "which-mode"
        whichMode.textContent="White Mode";
    }
}