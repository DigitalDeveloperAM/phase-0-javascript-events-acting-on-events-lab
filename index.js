// Your code here

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
// dodger.style.height = "200px";

dodger.style.bottom = "100px";
dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }


}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }


}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});





// function moveDodgerRight() {
//     if (event.key === "ArrowRight") {
//         const leftNumbers = dodger.style.left.replace("px", "");
//         const left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left + 10}px`;
//     }
// }







// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowDown") {
//         const bottomNumbers = dodger.style.bottom.replace("px", "");
//         const bottom = parseInt(bottomNumbers, -100);

//         dodger.style.left = `${bottom + 1}px`;
//     }
// });