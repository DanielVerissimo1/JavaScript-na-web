const inputNome= document.getElementById("inputNome")
const inputEmail = document.getElementById("inputEmail")
const inputProfissao = document.getElementById("inputProfissao")
const criarCard = document.getElementById("criarCard")
const exibicaoCard = document.getElementById("exibicaoCard")


criarCard.addEventListener("click", ()=>{


    const cardEmail = inputEmail.value
    const cardNome = inputNome.value
    const cardProfissao = inputProfissao.value
    if(cardEmail === "") return
    if(cardProfissao === "") return
    if(cardNome === "") return
    
    const div = document.createElement("div")
    div.innerHTML = `
    <p>Nome: ${cardNome}</p>
    <p>Email: ${cardEmail}</p>
    <p>Profissão: ${cardProfissao}</p>`;
    
    // const div = document.createElement("div")
    // div.innerText = cardNome
    // div.innerText = cardEmail
    // div.innerText = cardProfissao

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.style.marginLeft = "10px"
    
    removeBtn.addEventListener("click", ()=>{
        exibicaoCard.removeChild(div)
    })
    div.classList.add("card")
    removeBtn.classList.add("removeBtn")

    exibicaoCard.appendChild(div)
    div.appendChild(removeBtn)
    
    inputProfissao.value = ""
    inputNome.value = ""
    inputEmail .value = ""

})


