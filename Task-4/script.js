let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let lapCount = 1;

function formatTime(time){
    let ms = Math.floor((time % 1000) / 10);
    let sec = Math.floor((time / 1000) % 60);
    let min = Math.floor((time / (1000 * 60)) % 60);
    let hrs = Math.floor(time / (1000 * 60 * 60));

    return (
        (hrs < 10 ? "0" : "") + hrs + ":" +
        (min < 10 ? "0" : "") + min + ":" +
        (sec < 10 ? "0" : "") + sec + "." +
        (ms < 10 ? "0" : "") + ms
    );
}

function startTimer(){
    if(!timerInterval){
        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("timer").innerText = formatTime(elapsedTime);
        }, 10);

        let btn = document.getElementById("startBtn");
        btn.innerHTML = "⏳ Running…";
        btn.style.background = "#554df5";
        btn.style.cursor = "not-allowed";
    }
}

function pauseTimer(){
    clearInterval(timerInterval);
    timerInterval = null;

    let btn = document.getElementById("startBtn");
    btn.innerHTML = "▶ Start";
    btn.style.cursor = "pointer";
}

function resetTimer(){
    clearInterval(timerInterval);
    timerInterval = null;

    elapsedTime = 0;
    lapCount = 1;

    document.getElementById("timer").innerText = "00:00:00.00";
    document.getElementById("laps").innerHTML = "";

    let btn = document.getElementById("startBtn");
    btn.innerHTML = "▶ Start";
    btn.style.cursor = "pointer";
}

function addLap(){
    let lapTime = formatTime(elapsedTime);
    let lapList = document.getElementById("laps");

    let li = document.createElement("li");
    li.textContent = `#${lapCount} — ${lapTime}`;
    lapList.appendChild(li);

    li.classList.add("flash");
    setTimeout(() => li.classList.remove("flash"), 400);

    lapList.scrollTop = lapList.scrollHeight;

    lapCount++;
}

function clearLaps(){
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}
