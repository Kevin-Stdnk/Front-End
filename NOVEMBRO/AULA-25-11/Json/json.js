function buscar(){
var numDog = parseFloat(document.getElementById('dog').value) - 1
fetch('Json/chochorros.json')
.then(res =>res.json())
.then(data =>{
    console.log(data)
    document.getElementById('name').innerHTML = data.cachorro[numDog].nome
    document.getElementById('raça').innerHTML = data.cachorro[numDog].raca
    document.getElementById('idade').innerHTML = data.cachorro[numDog].idade
    document.getElementById('porte').innerHTML = data.cachorro[numDog].porte
    document.getElementById('porte').innerHTML = data.cachorro[numDog].sexo
})
}