
function calculateIMC() {
    
    const weightInput = Number(document.querySelector('#weightInput').value);
    const heightInput = Number(document.querySelector('#heightInput').value);
    let result = document.querySelector('#result');
    const IMC = weightInput / (heightInput**2);

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
        } else { //acima de 40kg
            return 'com obesidade grau 3'
        }
    };

    function invalidInput() {
        result.classList.add('invalid-result');
        result.classList.remove('valid-result')
    }

    function validResult() {
        result.classList.add('valid-result');
        result.classList.remove('invalid-result')
    }

    if (!weightInput) {
        result.innerHTML = 'peso inválido';
        invalidInput()
    } else if (!heightInput) {
        result.innerHTML = 'altura inválida';
        invalidInput()
    } else {
        result.innerHTML = `Seu IMC é: ${IMC.toFixed(2)}
        <p>você está ${IMCType()}</p>`;
        validResult()
    }
}
