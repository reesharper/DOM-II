
//1
const loginButton = document.querySelector('.btn');

loginButton.addEventListener('click', (event) => {
    window.open ("https://www.facebook.com/login", "Facebook_WindowName", "resizable, status");
});



//2
const fullImage = document.querySelector('header img');

fullImage.addEventListener('dblclick', (event) => {
    window.open ("http://localhost:58496/fun-bus.927a34f2.jpg", "fun bus", "resizeable");
});



//3
const imgBorder = document.querySelector('header img');

imgBorder.addEventListener('mouseenter', (event) => {
    event.target.style.border = "5px solid black"
});


//4
imgBorder.addEventListener('mouseleave', (event) => {
    event.target.style.border = "none"
});



//5
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.001;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.content-destination img');
el.onwheel = zoom;



//6
document.addEventListener('keydown', (event) => {
    if (event.key === '+') {
        body.taget.style.color = 'red'
    }
})