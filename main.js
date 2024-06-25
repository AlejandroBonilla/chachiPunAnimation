// import './style.css'

// let step = 1;
// const movement = 520;
// const maxStep = 7;

// setInterval(() =>{
//   const $sprite = document.querySelector('.sprite')
//   const x = step * movement
// //   const y = step * movement
//   step = step > maxStep ? 1 : step + 1
//   $sprite.style.backgroundPosition = `-${x}px 0px`
// },100)

function shakeHands(){
        let step = 1;
        const intervalId = setInterval(() => {
            let classes = 'step-' + step;
            document.querySelector('.sprite').classList.add(classes);
            step += 1;
            console.log(classes);
            if (step > 5) {
                clearInterval(intervalId); // Esto detendrá el intervalo cuando step sea mayor que 5

                for (let i = 1; i < 6; i++) {
                    let stepDelete = 'step-' + i
                    document.querySelector('.sprite').classList.remove(stepDelete)
                }
            }

        }, 100);
}

function choseScissor(){
    let element = document.querySelector('.sprite')
    element.className = '';
    element.classList.remove('sprite')
    element.classList.add('tijera')
    
    let step = 1;
    const intervalId = setInterval(() => {
        let classes = 'step-' + step;
        element.classList.add(classes);
        step += 1;
        console.log(classes);

        if (step > 5) {
            clearInterval(intervalId); // Esto detendrá el intervalo cuando step sea mayor que 5
            let elemento = document.querySelector('.tijera');
            // Remove all classes 
            elemento.className += ' sprite';
        }

    }, 100);
}

function chosePaper(){
    let element = document.querySelector('.sprite')
    element.className = '';
    element.classList.remove('sprite')
    element.classList.add('papel')
    
    let step = 1;
    const intervalId = setInterval(() => {
        let classes = 'step-' + step;
        element.classList.add(classes);
        step += 1;
        console.log(classes);

        if (step > 5) {
            clearInterval(intervalId); // Esto detendrá el intervalo cuando step sea mayor que 5
            let elemento = document.querySelector('.papel');
            // Remove all classes 
            elemento.className += ' sprite';
        }

    }, 100);
}

function cleanSprites(){
    let elemento = document.querySelector('.sprite');
            // Remove all classes 
    elemento.className = '';
    elemento.classList.add('sprite')
}

document.getElementById('cachipun').addEventListener('click', function () {
   setTimeout(shakeHands,0)
   setTimeout(shakeHands,600)
        
    
});

document.getElementById('tijera').addEventListener('click', function () {
    cleanSprites()
    setTimeout(shakeHands,0)
    setTimeout(shakeHands,600)
    setTimeout(choseScissor,1200)

});

document.getElementById('papel').addEventListener('click', function () {
    cleanSprites()
    setTimeout(shakeHands,0)
    setTimeout(shakeHands,600)
    setTimeout(chosePaper,1200)

});

// document.getElementById('tijera').addEventListener('click', function () {

//     // document.querySelector('.sprite').classList.remove('cachipun')
//     document.querySelector('.sprite').classList.add('tijera')
// });

document.getElementById('cachipun').addEventListener('dblclick', function () {
    document.querySelector('.sprite').classList.remove('cachipun')
});
