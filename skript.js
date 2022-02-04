const inputNumber = document.querySelector('.number');
const formSubmit = document.querySelector('.form');
const parDel = document.querySelector('form p')
const htmlArray = document.querySelector('.output');
const button = document.querySelector('.but');
const arr = [];

htmlArray.innerText = ''

formSubmit.addEventListener('submit', numberSize);


function numberSize(event) {
    event.preventDefault();

    let number = parseInt(inputNumber.value);

    if(!Number.isInteger(number)) {
        htmlArray.innerText = 'Обновите и введите число!'
    }else if(number < 1) {
        for (let i = 1; i >= number; i--) {
            arr.push(i);
        }
    }else {
        for (let i = 1; i <= number; i++) {
            arr.push(i);
        }
    }

    formSubmit.innerHTML = ''
    htmlArray.innerHTML = `<p>Факториал числа : ${arr[arr.length - 1]}</p>`
    let buttonClick = document.createElement('button')
    buttonClick.className +="result"
    buttonClick.setAttribute('role',"button");
    buttonClick.innerText = 'Расчитать';
    htmlArray.append(buttonClick)

    const lastNumber = arr[arr.length - 1];

    buttonClick.addEventListener('click',factorial(lastNumber))
        
};

function factorial(lastNumber){
    let result = 1;
    while(lastNumber){
        result *= lastNumber--;
    }
    htmlArray.innerHTML = `<p>Факториал числа : ${arr[arr.length - 1]} = ${result}</p>`
}

