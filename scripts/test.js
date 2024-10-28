const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");
const headingB = document.querySelector("#heading_B");

var count = 0;
var start = 0;


buttonA.onclick = () => {
    if (start === 0) {
        start = Date();
    }
    count += 1;
    let elapsed = (Date() - start) / 1000;
    if (elapsed > 10) {
        start = 0;
        headingA.textContent = `CPS: ${elapsed}`;
        count = 0;
    }
    headingB.textContent = `${Date() - Date()}`;
    
};