let screen_text = document.querySelector("#screen_text");
const buttons = document.querySelectorAll("button");

let a = 0;
let temp = 0;
let dot = '.'
let result;
let operator;

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
        else if(e.target.value === '+' || e.target.value === 'x' || e.target.value === '/' || e.target.value === '-') {
            operator = e.target.value;
            screen_text.innerHTML = '';
            temp = a;
        }
        else if(e.target.value === '=' && temp != 0) {
            switch(operator) {
                case '+':
                    temp += a;
                    break;
                case '-':
                    temp -= a;
                    break;
                case 'x':
                    temp *= a;
                    break;
                case '/':
                    temp /= a;
                    break;

            }
            screen_text.innerHTML = temp.toFixed(5);
        }
            console.log(a);
            console.log(typeof a);
        
    });