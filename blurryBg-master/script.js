const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let timer = setInterval(blurring, 30);

function blurring(){
    load++;

    // clear the timer if the load is above 99%
if (load > 99){
        clearInterval(timer);
    }



    
   // It sets the value of the load variable to 100.
   

 loadText.innerText = `${load}%`;
 loadText.style.opacity = scale(load, 0, 100, 1, 0);
 bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


// This function takes a number and scales it from one range to another.
// It takes a number, the min and max of the range you want to scale from,
// and the min and max of the range you want to scale to.

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) 
    / (in_max - in_min) + out_min;

}