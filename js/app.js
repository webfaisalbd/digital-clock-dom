const digitalClock = () => {
    let moment = new Date();

    //get hour , minute , second 
    let hours = moment.getHours();
    let minutes = moment.getMinutes();
    let seconds = moment.getSeconds();
    let timeFormat = 'AM';

    //get date , week , month and full year
    let date = moment.getDate();
    let week = moment.getDay();
    let month = moment.getMonth();
    let year = moment.getFullYear();

    // set week
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    // ------- end -------

    // set month 
    var monthName = new Array(12)
    monthName[0] = "january";
    monthName[1] = "February";
    monthName[2] = "March";
    monthName[3] = "April";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "August";
    monthName[8] = "September";
    monthName[9] = "October";
    monthName[10] = "November";
    monthName[11] = "December";
    // ------  end ------- 

    // total date week and month   
    let monthWeek = `${date}th ${monthName[month]}, ${weekday[week]}, ${year} `;
    // show html file 
    document.getElementById('weekMonth').innerText = monthWeek;


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

    // total hour , minute , second   
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