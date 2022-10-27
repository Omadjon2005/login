const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));




const pictures = [
    {
        id:1,
        img:'1.webp',
    },
    {
        id:2,
        img:'2.webp',
    },
    {
        id:3,
        img:'3.webp'
    },
    {
        id:4,
        img:'cinema.webp'
    },
    {
        id:5,
        img:'5.webp'
    },
]

let overlay = document.querySelector('.overlay')
window.addEventListener('DOMContentLoaded',()=>{
    timePicture();
})


let index = 0;
function timePicture(){
    let item = pictures[index];
    overlay.style.background = ` url(${item.img})`
    overlay.style.background = 'linear-gradient(rgba(0,0,0,.5) rgba(0,0,0,.5))'
    overlay.style.backgroundSize = 'cover';
    overlay.style.transition = 'all 0.3s ease-in-out'
}

function theTimePictures(){
    timePicture();
    index+=1;
    if(index>pictures.length-1){
        index=0;
    }
}
setInterval(theTimePictures,7000)
