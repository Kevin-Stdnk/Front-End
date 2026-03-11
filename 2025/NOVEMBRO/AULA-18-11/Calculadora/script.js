var visor = 0
var firstnum = 1
var numeros = []
var i = 0
var somar = 0
var subtrair = 0
var div = 0
var mult = 0
var rest = 0
var exp = 0
var conta_final
document.getElementById('visor').innerHTML = visor;

function addnum(num){
    if(firstnum == 1){
        if(num == '.'){
            visor = '0.'
        }
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
            subtrair = 1
            console.log('sub')
        break
        case '*':
            mult = 1
            console.log('sub')
        break
        case '/':
            div = 1
            console.log('sub')
        break
        case '^':
            exp = 1
            console.log('sub')
        break
        case '%':
            rest = 1
            console.log('sub')
        break
        case 'CE':
            numeros = 0
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
    else if(subtrair==1){
        conta_final = numeros[0] - numeros[1]
        console.log('sub dnv')
    }
    else if(mult==1){
        conta_final = numeros[0] * numeros[1]
        console.log('sub dnv')
    }
    else if(div==1){
        conta_final = numeros[0] / numeros[1]
        console.log('sub dnv')
    }
    else if(exp==1){
        conta_final = numeros[0] ** numeros[1]
        console.log('sub dnv')
    }
    else if(rest==1){
        conta_final = numeros[0] % numeros[1]
        console.log('sub dnv')
    }




    document.getElementById('visor').innerHTML = conta_final
}