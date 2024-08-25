const link1 = document.querySelector('#link1');
let textField;

link1.addEventListener('click', (event) => {
    textField = prompt('Введите что-то здесь');
    link1.textContent = textField;
    }
)