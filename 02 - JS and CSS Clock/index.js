const handSec = document.querySelector('.second-hand');
const handMin = document.querySelector('.min-hand');
const handHour= document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');
function setDate(){
    const now = new Date();

    //Seconds
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360 ) + 90;
    
    //Fix an transition bug
    if(seconds===59 || seconds===0 ) {
        console.log("foi");
        hands.forEach(hand => hand.classList.add('notransition'));
    }else{
        console.log("foi2");
        hands.forEach(hand => hand.classList.remove('notransition'));
    }

    handSec.style.transform = `rotate(${secondsDegree}deg)`;

    //Minutes
    const min = now.getMinutes();
    const minDegree = ((min/60) * 360 ) + 90;

    handMin.style.transform =`rotate(${minDegree}deg)`;

    //Hours
    const hours = now.getHours();
    if(hours>12) hours-12;
    const hoursDegree = ((hours/12) * 360) + 90;
    
    handHour.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);