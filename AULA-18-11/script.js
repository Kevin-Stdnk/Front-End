var visor = 0
var firstnum = 1
var numeros = []
var i = 0
var somar = 0
var subtrair = 0
var conta_final
document.getElementById('visor').innerHTML = visor;

function addnum(num){
    if(firstnum == 1){
        if(num == 0){
            return
        }
        else{
            visor = num;        
        }
    }
    else{
        visor = visor + num;    
    }
    document.getElementById('visor').innerHTML = visor;
    firstnum = 0
}

function operacao(operacao){
    numeros[i] = parseFloat(document.getElementById('visor').innerHTML)
    document.getElementById('visor').innerHTML = 0
    visor = 0
    console.log('chamou a fuçao')
    switch(operacao){
        case '+':
            somar = 1
            console.log('somou')
        break
        case '-':
            subtrair = 0
            console.log('sub')
        break
    }
    i++
    firstnum = 1
}

function finalizar(){
    numeros[i] = parseFloat(document.getElementById('visor').innerHTML)
    if(somar==1){
        conta_final = numeros[0] + numeros[1]
        console.log('somou dnv')
    }
    else if(subtrair==0){
        conta_final = numeros[0] - numeros[1]
        console.log('sub dnv')
    }
    document.getElementById('visor').innerHTML = conta_final
}