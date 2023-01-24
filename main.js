const form = document.getElementById('form-js')
let number1 = document.getElementById('numero-a')
let number2 = document.getElementById('numero-b')
let res = document.getElementById('res')

function verificar() {
   
    if (number1.value < number2.value) {
        let mensagemSucesso = `O número ${number2.value} é maior que o número ${number1.value}`
        let containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        number1.value = ''
        number2.value = ''
        
        document.querySelector('.error-message').style.display = 'none';
    } else {
        let mensagemErro = `[ERRO] Digite um número maior que o número A`
        let containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block'
        
        number2.value = ''
        mensagemErro.value = ''

        document.querySelector('.sucess-message').style.display = 'none';
    }
}

