const consoleLogT = document.querySelector('#consoleLog');
const alertT = document.querySelector('#alert');
const promptT = document.querySelector('#prompt');

consoleLogT.addEventListener('click', 
    (event) => {
            alert("Console log выводит что-то в консоль");
            document.querySelector('#consoleCode').textContent = "console.log('Текст, выведенный в консоль')";
    }   
)

alertT.addEventListener('click', 
    (event) => {
            alert("Alert выводит что-то в окне оповещения");
            document.querySelector('#alertCode').textContent = "alert('Текст, появившийся в оповещении')";
    }   
)

promptT.addEventListener('click', 
    (event) => {
            alert("Prompt выводит форму для ввода данных");
            document.querySelector('#promptCode').textContent = "prompt('Заголовок формы для ввода')";
    }   
)
