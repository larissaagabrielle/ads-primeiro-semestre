// let nome = 'Larissa'
// let sobrenome = 'Silva'
// let idade = '26'

// console.log(`O nome digitado foi ${nome} ${sobrenome} e a sua idade é ${idade}`);

// function nomeDaFuncao() {
//     //codigo
//     //dentro do () pode ter parâmetros
// }


// function escreve () {
//     i = 0
//     while (i < 3) {
//         let nome = prompt("Digite seu nome: ");
//         let sobrenome = prompt("Digite seu sobrenome")
//         let idade = prompt ("Digite sua idade")

//         console.log(`O nome digitado foi ${nome} ${sobrenome} e a sua idade é ${idade} <br>`);
//         document.write(`O nome digitado foi ${nome} ${sobrenome} e a sua idade é ${idade} <br>`);
//         i++
//     }
// }
//escreve()


function escreve (nome, sobrenome, idade) { //Quando se declara um parâmetro, não se declara var
    console.log(`O nome digitado foi ${nome} ${sobrenome} e a sua idade é ${idade} <br>`);
    document.write(`O nome digitado foi ${nome} ${sobrenome} e a sua idade é ${idade} <br>`);
}

escreve('Larissa', 'Gabriele', '26')
escreve('Gabriel', 'Lucas', '20')
escreve('Marcia', 'Souza', '12')