let duplicatedField = document.querySelector('#duplicateField');
let button = document.querySelector('button');
let stringChars = '';

button.addEventListener('click', () => {
    let input = document.querySelector('#input1').value;
    document.querySelector('#input1').value = '';
    console.log(input);
    }
)

form1.addEventListener('keypress', () => {  
   //duplicatedField.textContent = String.fromCharCode(event.charCode);
   duplicatedField.textContent = document.querySelector('#input1').value;
   }
)


