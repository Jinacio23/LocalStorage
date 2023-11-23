const input = document.getElementById('input')
const addBtn = document.getElementById('btn1')
const showBtn = document.getElementById('btn2')
const clearBtn = document.getElementById('btn3')
const box = document.getElementById('box')
let lista = []

//Lembrete: O LocalStorage armazena registros através do método chave-valor  

//Função para adiciona itens ao LocalStorage
function addLocalStorage(valor) {

    //Se a chave já existir, recupera valores 
    if(localStorage.meuTest){
        lista = JSON.parse(localStorage.getItem('meuTest'))
    }

    if(valor != ''){
        box.innerHTML = ''

        //Adiciona o valor desejado a uma lista de referência
        lista.push(valor)

        //Adiciona os valores armazenados na lista no próprio LocalStorage
        localStorage.meuTest = JSON.stringify(lista)

    } else {
        box.innerHTML = 'Valor Inválido'
    }

}

//Função para recuperar valores do LocalStorage
function getLocalStorage() {

    //Se a chave já existir, recupera valores na lista
    if (localStorage.meuTest) {
        lista = JSON.parse(localStorage.getItem('meuTest'))
        
        //Exibi cada valor armazenado na lista
        lista.forEach(valor => {
            const p = document.createElement('p')
            p.innerHTML = valor
            box.appendChild(p)
        })

    } else {
        box.innerHTML = 'Não existem itens ou valores armazenados'
    }
}

//Função para deletar TODOS os valores do LocalStorage
function clearLocalStorage() {
    //Limpa valores da lista
    lista = []

    //Deleta valores do LocalStorage
    localStorage.clear
}

//botão para adicionar itens
addBtn.addEventListener('click', () => {
    valor = input.value
    input.value = ''

    addLocalStorage(valor)   
})

//botão para mostrar itens
showBtn.addEventListener('click', () => {
    box.innerHTML = ''
    getLocalStorage()
})

//botão para deletar LocalStorage
clearBtn.addEventListener('click', () => {

    if(localStorage.meuTest){
        localStorage.removeItem('meuTest')
    } else {
        box.innerHTML = 'Não existem itens para deletar'
    }
})