const button = document.getElementById("button_add");
let input = document.getElementById("tesk");
const ulCompleta = document.querySelector('.tesk_item')
const activar = document.querySelector('.activar')
const desactivar = document.querySelector('.desactivar')



let list_item = []
function ValiditAdicionar(){
    list_item.find(x)
}

function adicionar(){

    
   /* if (!input.value){
        alert('Adiciona o número da moto por favor!')
    }else if (ValiditAdicionar()){ 
        alert('Upss a moto já existe')        
    }else {
        list_item.push(input.value)
        mostrar()
        input.value = ''
    }
    */

    list_item.push({

       tarefa: input.value,
       feito: false
    }
)
    mostrar()
    input.value = ''
    
    /*if (!input.value){
        alert('Adiciona o número da moto por favor!')
    }else { 
              
    }
    if( input.value == `${tarefa}`) {
        alert('Upps o número da moto já foi existe!')
    }*/


}

function mostrar(){

    let novaLi=''

    list_item.forEach( (item) => {

        novaLi= novaLi + `<li class="tesk_t">${item.tarefa}</li>`
    })
   
    ulCompleta.innerHTML = novaLi
}

function feito(){
    let activar = document.querySelector('.tesk_item2')
    activar.classList.toggle("risco")
} 

function remover(){
    var desactivar = document.querySelector('.tesk_item2')
    desactivar.classList.toggle("mal")
} 
desactivar.addEventListener('click', remover)
activar.addEventListener('click', feito)
button.addEventListener('click', adicionar)