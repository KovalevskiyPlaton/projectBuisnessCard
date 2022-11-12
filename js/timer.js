const timer =()=>{
    const timerBlock = document.querySelector('.timer__time');
    const deadline ='31 december 2022';
    let interval;

    const updateClock=()=>{
        const date =new Date().getTime();
        const dateDeadline =new Date(deadline).getTime();
        const timeRemaining = (dateDeadline-date)/1000;

        const hours = Math.floor(timeRemaining/60/60);
        const minutes = Math.floor((timeRemaining/60)%60);
        const seconds = Math.floor(timeRemaining%60);

        const fHours = hours<10?'0'+hours:hours;
        const fMinutes = minutes<10?'0'+minutes:minutes;
        const fSeconds = seconds<10?'0'+seconds:seconds;

        timerBlock.innerHTML=`${fHours}: ${fMinutes} :${fSeconds}`;

        if (timeRemaining <=0){
            clearInterval(interval);
            timerBlock.innerHTML=`00: 00 :00`
        }else{
            timerBlock.innerHTML=`${fHours}: ${fMinutes} :${fSeconds}`;
        }
    }
    updateClock();

    interval = setInterval(updateClock,500);
}

timer();




