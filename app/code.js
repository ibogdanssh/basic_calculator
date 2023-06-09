let screen_text = document.querySelector("#screen_text");
const buttons = document.querySelectorAll("button");

let a = 0;
let b = 0;
let dot = '.'

buttons.forEach(b => b.onclick = e => 
    {
        if(e.target.value <= '9' && e.target.value >= '0')
            {

                screen_text.innerHTML += e.target.value;
                a = parseFloat(screen_text.innerHTML);
            }
        
        else if(screen_text.innerHTML.trim() !== '' && e.target.value === '.' &&  !screen_text.innerHTML.includes(dot)) {
            screen_text.innerHTML += e.target.value;
        }
        else if(e.target.value === 'C') {
            screen_text.innerHTML = '';
            a = 0;
        }
        else if(e.target.value === '+') {
            screen_text.innerHTML = '';
        }
            console.log(a);
            console.log(typeof a);
        
    });