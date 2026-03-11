var i = 0
var chochorro = []
var teste
fetch("Json/chochorros.json")
.then(res =>res.json())
.then(data =>{
    chochorro = data
    showonScreen(chochorro)
    })
    function showonScreen(lista){
         const container = document.getElementById("testesec");
    container.innerHTML = "";

    lista.forEach((cachorro, index) => {
        const card = document.createElement("div");
        card.className = "Movie-card";
        card.innerHTML = `
        <h1>${cachorro.nome}</h1>
        <p><b>Raça - </b>${cachorro.nome}</p>
        <p><b>Idade - </b>${cachorro.idade}</p>
        <p><b>Porte - </b>${cachorro.porte}</p>
        <p><b>Sexo - </b>${cachorro.sexo}</p>`;
    container.appendChild(card);
    });

    }
   
    

    // <p><b>Raça - </b>`+data.cachorro[i].raca+`</p>
    // <p><b>Idade - </b>`+data.cachorro[i].idade+`</p>
    // <p><b>Porte - </b>`+data.cachorro[i].porte+`</p>
    // <p><b>Sexo - </b>`+data.cachorro[i].sexo+`</p>