import { valida} from './validacao'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
   input.addEventListener('click', (evento) => {

    valida(evento.target)
  
})

})
