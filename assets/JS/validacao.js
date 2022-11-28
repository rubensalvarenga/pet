export function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido')
    }else{
        input.parentElement.classList.add('input-container--invalido')
    }

}

const validadores ={
    dataNascimento:input=> validadaDataNascimento(input)
}



const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', evento => {
    validadaDataNascimento(evento.target)
})

function validadaDataNascimento (input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''
    
    
    if (!maiorQue18(dataRecebida)){

    mensagem = "voce deve ser maior que 18"
    }

    input.setCustomValidity(mensagem)

    
}

function maiorQue18(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

return dataMais18 <= dataAtual

}


function validaCPF(input){
    const cpfFormatado = input.value.replace(/\D/g,'')
    let mensagem= ''

    input.setCustomValidity(mensagem)




}

function checaCPFRepetido(cpf){
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido= true


    valoresRepetidos.forEach(valor => {
        if(valor == cpf){
            cpfValido =false
        }
    })

    return cpfValido

}