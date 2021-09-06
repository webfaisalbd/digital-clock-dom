const digitalClock = () => {
    let moment = new Date();
    let hours = moment.getHours();
    let minutes = moment.getMinutes();
    let seconds = moment.getSeconds();
    let timeFormat = 'AM';

    // time format change 
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = 'PM';
    }

    /*
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
    */
    // using ternary operator for avoiding single digit output
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // total time 
    let finalTime = `${hours}:${minutes}:${seconds}`;

    // show html file 
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;

    // console.log(finalTime);
    setInterval(digitalClock, 1000);
}
digitalClock();

// title text blink  
setInterval(blink, 400);

function blink() {
    const element = document.getElementById('showText');
    element.classList.toggle("design");
}