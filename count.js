const countdown = () =>{
    const countDate = new Date('jan 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;    

    //Time working
    const second = 1000;
    const minute = second * 60;
    const hours = minute * 60;
    const day = hours * 24;

    //calculate diffrence time and countdown time
    const txtDay = Math.floor(gap / day);
    const txtHourse = Math.floor((gap % day) / hours);
    const txtMinute = Math.floor((gap % hours) / minute);
    const txtSeconds = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = txtDay;
    document.querySelector('.hour').innerHTML = txtHourse;
    document.querySelector('.minute').innerHTML = txtMinute;
    document.querySelector('.second').innerHTML = txtSeconds;

};

setInterval( countdown, 1000)