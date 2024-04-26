const button = document.getElementById("button_add");
const input = document.getElementById("tesk");
const ulCompleta = document.querySelector('.tesk_item')
const activar = document.querySelector('.activar')
const desactivar = document.querySelector('.desactivar')



let list_item = []

function adicionar(){

    list_item.push({

       tarefa: input.value,
       concluida: false
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