let screen = document.getElementById('screen');
btn = document.querySelectorAll('button');

let inputValue='';
for (each of btn) {
    each.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
            inputValue += buttonText;
            screen.value = inputValue;
        }
        else if (buttonText == '^') {
            buttonText = '**';
            inputValue += buttonText;
            screen.value = inputValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            inputValue += buttonText;
            screen.value = inputValue;
        }
        else if (buttonText == 'C') {
            inputValue = "";
            screen.value = inputValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            screen.value = inputValue;
        }

    })
}
