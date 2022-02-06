// Get Elements

const sec = document.querySelector('.s');
const miniet = document.querySelector('.m');
const hours = document.querySelector('.h');

setInterval( ()=>{
    let time = new Date();
    let current_sec = time.getSeconds();
    let current_miniet = time.getMinutes();
    let current_hours = time.getHours();

    sec.style.transform = `rotate( ${kata(60,current_sec)}deg)`;
    miniet.style.transform = `rotate( ${kata(60,current_miniet)}deg)`;
    hours.style.transform = `rotate( ${kata(12,current_hours)}deg)`;

},1000 )

function kata(time, current){
    return (360 * current) / time;
}