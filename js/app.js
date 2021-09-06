const digitalClock = () => {
    let moment = new Date();
    let hours = moment.getHours();
    let minutes = moment.getMinutes();
    let seconds = moment.getSeconds();
    let timeFormat = 'AM';
    let finalTime = `${hours}:${minutes}:${seconds}`;

    // show html file 
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;

    console.log(finalTime);
}

setInterval(digitalClock, 1000);