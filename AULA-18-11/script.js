var visor = 0;
document.getElementById('visor').innerHTML = visor;
function addnum(num){
    visor = visor + num;
    document.getElementById('visor').innerHTML = visor;
}