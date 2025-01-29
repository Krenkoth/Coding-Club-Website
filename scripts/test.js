// Javascript to make the hidden test page work. It is a clicks per second tracker thing.


const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");
const headingB = document.querySelector("#heading_B");

var count = 0;
var start = 0;


buttonA.onclick = () => {
    if (start === 0) {
        start = Date.now();
    };
    count += 1;
};


var elapsed;
function checkTime() {
    if (start === 0) {
        elapsed = 0;
    }
    else {
        elapsed = (Date.now() - start) / 1000;
    }
    
    if (elapsed > 10) {
        start = 0;
        headingA.textContent = 
            `CPM: ${Math.floor(count / elapsed * 6000) / 100}`;
        count = 0;
    };
}

setInterval(checkTime, 5)
function updateTime() {
    headingB.textContent = Math.floor(elapsed * 100) / 100;
}

setInterval(updateTime, 10);