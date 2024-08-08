const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Expressão regular para validar números de ponto flutuante (com ponto ou vírgula)
    const regex = /^[0-9]+([.,][0-9]+)?$/;

    if (nome !== '' && regex.test(altura) && regex.test(peso)) {

        // Substitui a vírgula por um ponto, se necessário
        altura = parseFloat(altura.replace(',', '.'));
        peso = parseFloat(peso.replace(',', '.'));

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente! Exemplo de altura: 1.75 ou 1,75';
    }
}

calcular.addEventListener('click', imc);