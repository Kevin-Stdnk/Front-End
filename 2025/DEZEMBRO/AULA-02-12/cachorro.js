var chochorro = []
var teste = []
fetch("cachorro.json")
.then(res =>res.json())
.then(data =>{
    chochorro = data
    showonScreen(chochorro)
    })



    function showonScreen(lista){
         const loadDogs = document.getElementById("loadDogs");
         loadDogs.innerHTML = "";
        lista.forEach((cachorro, index) => {
        const dogtype = document.createElement("div");
        dogtype.id = index
        dogtype.innerHTML = `
        <h1 class="tittle">${cachorro.nome}</h1>
        <p id="raca${index}"><b>Raça - </b>${cachorro.raca}</p>
        <p id="idade${index}"><b>Idade - </b>${cachorro.idade}</p>
        <p id="porte${index}"><b>Porte - </b>${cachorro.porte}</p>
        <p id="sexo${index}"><b>Sexo - </b>${cachorro.sexo}</p>
        <div class="center">
        <button id="mudar" class="button" onclick="editar(${index})">EDITAR</button></div>`;
        loadDogs.appendChild(dogtype);
        teste[index] = dogtype.innerHTML
    });
    }

    function editar(num){
        document.getElementById('raca'+String(num)).innerHTML = 'TESTE' 
    }