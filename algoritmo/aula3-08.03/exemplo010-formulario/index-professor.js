let nome = document.getElementById('inputNome')
let sobrenome = document.getElementById('inputSobrenome')
let idade = document.getElementById ('inputIdade')
let div = document.getElementById('conteudo')

let btn = document.getElementById('inputBtn')

function escreve() {
    // console.log(nome); dessa forma ele não traz o valor, somente a tag
    console.log(nome.valeu); //traz o valor inserido
    console.log(sobrenome.valeu);
    console.log(idade.valeu);
    
    div.innerHTML = `O nome digitado foi ${nome.valeu} ${sobrenome.valeu} e sua idade é ${idade.valeu}`
}


btn.addEventListener('click', escreve) 