var numdado = 0
function rolar(){
    const NovoDado = document.createElement('h1')
    NovoDado.id = numdado;
    NovoDado.innerHTML = sorteio()
    const dados = document.getElementById('dados')
    dados.appendChild(NovoDado)
};

function sorteio(){
    return Math.floor(Math.random() * 6) + 1
}