const consoleLogT = document.querySelector('#consoleLog');
const alertT = document.querySelector('#alert');
const promtT = document.querySelector('#promt');

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

promtT.addEventListener('click', 
    (event) => {
            alert("Promt выводит форму для ввода данных");
            document.querySelector('#promtCode').textContent = "promt('Заголовок формы для ввода')";
    }   
)
