const minutesEl = document.querySelector("#minutes"),
      secondsEl = document.querySelector("#seconds"),
      millisecondsEl = document.querySelector("#milliseconds"),
      startBtn = document.querySelector("#startBtn"),
      pauseBtn = document.querySelector("#pauseBtn"),
      resumeBtn = document.querySelector("#resumeBtn"),
      resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused) {
            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }

    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

// Fução para formatar o tempo
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Função para formatar os millisegundos
function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}