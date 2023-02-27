import data from "./wordBank.js";

const MAX_RANGE = 151;

//Capitalize a word
const capital = word => {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

// Generate a random number
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

// Generate a line with n words
const lineGen = (n) => {

    let line = '';
    for(let i = 0; i < n; i++) {

        let sortWord = data[Math.floor(Math.random() * MAX_RANGE)];
		
        line += `${sortWord} `;

		if(i == n - 1) {
			line = line.trimEnd();
	        line += '.';
		}

    }
    return line[0].toUpperCase() + line.substring(1);
}

const form = document.querySelector('#form');
const textArea = document.querySelector('#text-area');
const numberInput = document.querySelector('#number-input');


numberInput.addEventListener('keyup', ()=> {
    if(numberInput.value == '')
        numberInput.style.borderBottom = '3px solid rgb(128, 128, 128)';
    else
        numberInput.style.borderBottom = '3px solid rgb(255, 0, 0)';

})

form.addEventListener('submit', event => {
	event.preventDefault();

	textArea.textContent = '';

    for (let i = 0; i < numberInput.value; i++) { 

        const lines = random(3, 10);
        const paragraphElement = document.createElement('p');

        for(let j = 0; j < lines; j++) 
            paragraphElement.textContent += `${lineGen(random(15, 30))}\n`;

        textArea.appendChild(paragraphElement);    
    }



})


