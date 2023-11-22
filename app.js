const button = document.getElementById('color_button');
button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

const audio = new Audio('Believer.mp3')
button.addEventListener("click",  ()=>{

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});