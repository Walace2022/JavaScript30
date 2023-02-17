const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', (e) => {

    pressed.push(e.key);
    pressed.splice(-secretCode.length-1, pressed.length-secretCode.length);

    const isRight = pressed.join('').includes(secretCode);
    if(isRight){
        console.log("Nice, you have find the secret!");
    }
})