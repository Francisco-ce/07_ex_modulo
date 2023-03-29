const form = document.getElementById('number-check');


function checkSecondNumber(number1, number2) {
    const check =  number2 >= number1;
    return check;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const number1 = parseFloat(document.getElementById('number-1').value);
    const number2 = parseFloat(document.getElementById('number-2').value);

    const messageerror = 'Número menor que o anterior';
    const messageSuccess = 'Números corretos'

    valor_1 = checkSecondNumber(number1, number2);

    if (!valor_1) {
        const espacomensagem = document.querySelector('.message-error');
        espacomensagem.innerHTML = messageerror;
        espacomensagem.style.display = 'block';

    } else {
        const espacomensagem = document.querySelector('.message-error');
        espacomensagem.innerHTML = messageSuccess;
        espacomensagem.style.display = 'block';
        espacomensagem.style.backgroundColor = 'green';
    }


})