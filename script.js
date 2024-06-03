

const html = document.createElement('html');
const head = document.createElement('head');
const title = document.createElement('title');
title.textContent = 'Calculator';
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
head.appendChild(title);
head.appendChild(link);

const body = document.createElement('body');
const container = document.createElement('div');
container.classList.add('container');


const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
const resultP = document.createElement('p');
resultP.id = 'result';
resultP.textContent = '0';
resultDiv.appendChild(resultP);

// Create the buttons section
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');

// Array of button rows with their text content
const buttonRows = [
  ['C', 'DEL', '+', '%'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['.', '0', '=']
];


buttonRows.forEach(rowData => {
  const row = document.createElement('div');
  row.classList.add('row');
  rowData.forEach(buttonText => {
    const button = document.createElement('button');
    button.textContent = buttonText;
    row.appendChild(button);
  });
  buttonsDiv.appendChild(row);
});


container.appendChild(resultDiv);
container.appendChild(buttonsDiv);


body.appendChild(container);


html.appendChild(head);
html.appendChild(body);



document.documentElement.replaceWith(html);
let buttons = document.getElementsByTagName("button");
let result = document.getElementById("result");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        let input = e.target.innerText;
        updateDisplay(input);
    };
}
function updateDisplay(input) {
    let currentDisplay = result.innerText;
    if (currentDisplay === "0") {
        if (input !== "C" && input !== "DEL" && input !== "=") {
            result.innerText = input;
        }
    } else {
        if (input === "DEL") {
            result.innerText = currentDisplay.substring(0, currentDisplay.length - 1);
        } else if (input === "C") {
            result.innerText = "0";
        } else if (input !== "=") {
            result.innerText = currentDisplay + input;
        } else {
                let display = result.innerText;
                let resultValue = eval(display);
                result.innerText = resultValue; 
    }
}

}
