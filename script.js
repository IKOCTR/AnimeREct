let canvas = document.querySelector('.rec');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let rec = canvas.getContext("2d");
let s = 20;

let width = canvas.width;
let height = canvas.height;

let x = width / 2 - 500;
let y = height / 2;
let b = width / 2 + 200;

document.addEventListener('mousemove', function (e) {
    x = -(e.pageX - width / 2) / 15 + width / 2;
    // b = -(e.pageX - width / 2) / 1.2 + width / 2;
    y = -(e.pageY - height / 2) / 15 + height / 2;
});

let timer;
timer = setInterval(up, 10);
function up() {
    s += 1;
    b += 1;
    rec.lineWidth = s;
    rec.strokeStyle = "red";
    rec.beginPath();
    rec.clearRect(0,0,1000,1000);
    rec.moveTo(x, y);
    rec.lineTo(b, y);
    rec.closePath()
    rec.stroke();
    if (s >= 200) {
        clearInterval(timer);
        rec.clearRect(0,0,1000,1000);
        timer = setInterval(down, 10);
    }
}
function down() {
    s -= 1;
    b -= 1;
    rec.lineWidth = s;
    rec.strokeStyle = "black";
    rec.beginPath();
    rec.clearRect(0,0,1000,1000);
    rec.moveTo(x, y);
    rec.lineTo(b, y);
    rec.closePath()
    rec.stroke();
    if (s <= 50) {
        clearInterval(timer);
        rec.clearRect(0,0,1000,1000);
        timer = setInterval(up, 10);
    }
}



