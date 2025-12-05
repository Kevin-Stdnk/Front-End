function operacao(operacao){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var conta
    switch(operacao){
        case '+':
            conta = num1+num2
            document.getElementById('resultado').innerHTML = '<h1> O resultado da soma é : '+conta+'</h1> '
        break
        case '-':
            conta = num1-num2
            document.getElementById('resultado').innerHTML = '<h1> O resultado da subtração é : '+conta+'</h1> '
        break
        case '*':
            conta = num1*num2
            document.getElementById('resultado').innerHTML = '<h1> O resultado da multiplicação é : '+conta+'</h1> '
        break
        case '/':
            if(num2==0){
                document.getElementById('resultado').innerHTML = '<h1> Não é possivel dividir por zero </h1>'
            }
            else{
            conta = num1/num2
            document.getElementById('resultado').innerHTML = '<h1> O resultado da divisão é : '+conta+'</h1> '
            }
        break
        case 'resto':
            if(num2==0){
                document.getElementById('resultado').innerHTML = '<h1> Não é possivel dividir por zero </h1>'
            }
            else{
            conta = num1%num2
            document.getElementById('resultado').innerHTML = '<h1> O resto da divisão é : '+conta+'</h1> '
            }
        break
        case 'exp':
            conta = num1**num2
            document.getElementById('resultado').innerHTML = '<h1> O resultado da exponenciação é : '+conta+'</h1> '
        break
        

    }
}