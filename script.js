const resetbutton = document.getElementsByClassName('reset')[0];
const clearbutton = document.getElementsByClassName('lap-clear-button')[0];
const playbutton = document.getElementsByClassName('play')[0];
const lapbutton = document.getElementsByClassName('lap')[0];
const minute = document.getElementsByClassName('minute')[0];
const second = document.getElementsByClassName('sec')[0];
const centiSecond = document.getElementsByClassName('msec')[0];
const laps = document.getElementsByClassName('laps')[0];
const bg = document.getElementsByClassName('bg')[0];

let isplay = false;
let isreset = false;
let sec;
let secCounter = 0;
let centiSec;
let centiCounter = 0;
let min;
let minCounter = 0;
let lapItem = 0;


const togglebutton = () => {
    lapbutton.classList.remove('hidden');
    resetbutton.classList.remove('hidden');
}

const play = () => {
    if (!isplay && !isreset) {
        playbutton.innerHTML = 'Pause';
        bg.classList.add('animation-bg');
        min = setInterval(() => {
            second.innerHTML = `${++minCounter} :`; // ?
        }, 60*1000);
        sec = setInterval(() => {
            if(secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`; // ?
        }, 1000);
        centiSec = setInterval(() => {
            if(centiCounter === 100){
                centiCounter = 0;
            }
            centiSecond.innerHTML = `&nbsp;${++centiCounter}`; // ?
        }, 10);
        isplay = true;
        isreset = true;

        const randomColor = function() {
            const hex = '0123456789ABCDEF';
            let color = '#';
            for(let i = 0; i < 6; i++){
                color += hex[Math.floor(Math.random() * 16)];  
            }
            return color;
        }

        let intervalId ;
        console.log(intervalId);
           if(!intervalId) {
            intervalId = setInterval(ChangingColor , 100);
            intervalId = true;
           }
            function ChangingColor() {
                bg.style.backgroundColor = randomColor();
            }
        
    }
    else {
        playbutton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isplay = false;
        isreset = false;
        bg.classList.remove('animation-bg');
    }
    togglebutton();
}

const reset = () => {
    minCounter = 0;
    secCounter = 0;
    isreset = true;
    bg.classList.remove('bg');
    play();
    lapbutton.classList.add('hidden');
    resetbutton.classList.add('hidden');
    clearbutton.classList.add('hidden');
    laps.innerHTML = '';
    second.innerHTML = `&nbsp;0 :`;
    centiSecond.innerHTML = `&nbsp;0 `;
    minute.innerHTML = `0 :`;
}

const lap = () => {
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    li.setAttribute('class' , 'lap-item' );
    number.setAttribute('class' , 'number');
    timeStamp.setAttribute('class' , 'time-stamp');

    number.innerHTML = `#${++lapItem}`;
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number , timeStamp);
    laps.append(li);

    clearbutton.classList.remove('hidden');
    laps.append(clearbutton);
}

const clearAll = () => {
    laps.innerHTML = '';
   laps.append(clearbutton);
}

playbutton.addEventListener('click', play);
resetbutton.addEventListener('click', reset);
lapbutton.addEventListener('click', lap);
clearbutton.addEventListener('click', clearAll);
