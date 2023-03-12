const num = document.getElementById('num');
const playBtn = document.getElementById('play-btn');
const label = document.getElementById('lb');

let fb = (n) => {
    let text = "";

    for(let i = 1; i <= n; i++){
        text += i % 3 == 0 ? "Fizz" 
        : i % 5 == 0 ? "Buzz" 
        : i % 3 == 0 && i % 5 == 0 ? "Fizz Buzz"
        : i;

        text+= " ";
    }   

    return text
}

playBtn.addEventListener('click', (event) => {
    label.textContent = fb(num.value);
})
