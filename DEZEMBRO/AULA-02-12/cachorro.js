var chochorro = []
var teste = []
var numero
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
        <h1 id="nome${index}"class="tittle">${cachorro.nome}</h1>
        <p id="raca${index}"><b>Raça - </b>${cachorro.raca}</p>
        <p id="idade${index}"><b>Idade - </b>${cachorro.idade}</p>
        <p id="porte${index}"><b>Porte - </b>${cachorro.porte}</p>
        <p id="sexo${index}"><b>Sexo - </b>${cachorro.sexo}</p>
        <div class="center">
        <button id="mudar" class="button" onclick="editar(${index})">EDITAR</button></div>
        <button class="button" type="submit" onclick="delet(${index})">EXCLUIR</button>`;
        loadDogs.appendChild(dogtype);
        max = index + 1
    });
    }

    function editar(num){
        numero = num
        document.getElementById('nomeedit').value = chochorro[num].nome
        document.getElementById('idadeedit').value = chochorro[num].idade
        document.getElementById('porteedit').value = chochorro[num].porte
        document.getElementById('sexoedit').value = chochorro[num].sexo
        if(chochorro[num].raca == 'Srd'){
            document.getElementById('racaedit').value = 'Sem raça definida'
        }else{
        document.getElementById('racaedit').value = chochorro[num].raca
        doc
        }
    }
    function edit(){
        document.getElementById('nome'+String(numero)).innerHTML = document.getElementById('nomeedit').value
        document.getElementById('idade'+String(numero)).innerHTML = '<b>Idade - </b>'+document.getElementById('idadeedit').value+'</p>'
        document.getElementById('porte'+String(numero)).innerHTML = '<b>Porte - </b>'+document.getElementById('porteedit').value+'</p>'
        document.getElementById('sexo'+String(numero)).innerHTML = '<b>Sexo - </b>'+document.getElementById('sexoedit').value+'</p>'
        document.getElementById('raca'+String(numero)).innerHTML = '<b>Raça - </b>'+document.getElementById('racaedit').value+'</p>'
    }

    function createnew(){
        const newOBJ = document.createElement('div');
        newOBJ.id = max;
        newOBJ.innerHTML = `
        <h1 id="nome${max}"class="tittle">${document.getElementById('nomeedit').value}</h1>
        <p id="raca${max}"><b>Raça - </b>${document.getElementById('racaedit').value}</p>
        <p id="idade${max}"><b>Idade - </b>${document.getElementById('idadeedit').value}</p>
        <p id="porte${max}"><b>Porte - </b>${document.getElementById('porteedit').value}</p>
        <p id="sexo${max}"><b>Sexo - </b>${document.getElementById('sexoedit').value}</p>
        <div class="center">
        <button id="mudar" class="button" onclick="editar(${max})">EDITAR</button></div>
        <button class="button" type="submit" onclick="delet(${max})">EXCLUIR</button>`;
        const loadDogs = document.getElementById("loadDogs")
        loadDogs.appendChild(newOBJ);
        max++
    }

    function delet(num){
        document.getElementById(num).remove()
    }
