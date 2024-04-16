const button = document.getElementById("button_add");
const input = document.getElementById("tesk");
const ulCompleta = document.querySelector('.tesk_item')
const activar = document.querySelector('.activar')
const desactivar = document.querySelector('.desactivar')

let list_item = []

function adicionar(){
    
    if (input.value != ''){
        list_item.push(input.value)
    }else { 
        alert('Adiciona o número da moto por favor!')       
    }

    mostrar()
    input.value = ''

}

function mostrar(){

    let novaLi=''

    list_item.forEach( (tarefa) => {

        novaLi= novaLi + `<li class="tesk_t">${tarefa}</li>`
    })
   
    ulCompleta.innerHTML = novaLi
}

function feito(){
    var activar = document.querySelector('.tesk_item2')
    activar.classList.add("risco")
} 

function remover(){
    var desactivar = document.querySelector('.tesk_item2')
    desactivar.classList.remove("risco")
} 
desactivar.addEventListener('click', remover)
activar.addEventListener('click', feito)
button.addEventListener('click', adicionar)