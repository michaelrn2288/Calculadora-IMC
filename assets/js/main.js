
function calculateIMC() {
    
    const weightInput = Number(document.querySelector('#weightInput').value);
    const heightInput = Number(document.querySelector('#heightInput').value);
    const result = document.querySelector('#result');
    const IMC = weightInput / heightInput**2;

    if (!weightInput || !heightInput) {
        invalidInput()
    } else {
        IMCResult()
    };

    function IMCType() {
        if (IMC < 18.5) {
            return 'abaixo do peso';
        } else if (IMC < 25) {
            return 'com peso normal'
        } else if (IMC < 30) {
            return 'com sobrepeso'
        }else if (IMC < 35) {
            return 'com obesidade grau 1'
        } else if (IMC < 40) {
            return 'com obesidade grau 2'
        } else { //acima de 40
            return 'com obesidade grau 3'
        }
    };

    function invalidInput() {
        result.innerHTML = !weightInput ? 'peso inválido' : !heightInput ? 'altura inválida' : '';
        result.classList.add('invalid-input');
        result.classList.remove('valid-input')
    };

    function IMCResult() {
        result.innerHTML = `Seu IMC é: ${IMC.toFixed(2)}<p>você está ${IMCType()}</p>`;
        result.classList.add('valid-input');
        result.classList.remove('invalid-input')
    };
}