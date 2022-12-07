var timer = document.getElementById('timer');
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var setTimer = document.getElementById('set-timer')

var defaultTimer = 5;
var time = defaultTimer * 60;

setInterval(Timer, 1000);

function Timer ()  {
        let minutes = Math.floor(time /60);
        let seconds = time % 60;
        timer.innerHTML = `${minutes}m: ${seconds}s`;
        if (time >= 1 ) {
            time--;
        } else {
            time = 0;
            timer.style.color = 'red';
        }
}

start.addEventListener('click', () => {
        time = setTimer.value * 60;
})

reset.addEventListener('click', () => {
    time = 5 * 60;
    timer.innerHTML = `${5}: ${00}`;
})