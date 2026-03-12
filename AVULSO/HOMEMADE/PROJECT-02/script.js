
var slots = [3]
    slots[0] = document.getElementById('1')
    slots[1]= document.getElementById('2')
    slots[2] = document.getElementById('3')
    async function rolar(){
    zerar()
    for (let index = 0; index < slots.length; index++) {
        await rolamento(index)
    }
    if(slots[0].innerHTML == slots[1].innerHTML && slots[1].innerHTML == slots[2].innerHTML){
        console.log("ebaaaaaaaaaaaaaa")
    }
}




async function rolamento(slot){
    var numCiclos = Math.floor(Math.random() * 3) + 1
    console.log(numCiclos)

    for (let index = 1; index <= numCiclos; index++) {
        for (let index2 = 0; index2 < 3; index2 ++) {
            switch(index2){
                case 0:
                    slots[slot].innerHTML = `<h1>🍌</h1>`;
                    console.log('cu1')
                    await sleep(150)
                    break;
                    
                case 1:
                    slots[slot].innerHTML = `<h1>🍉</h1>`;
                    console.log('cu2')
                    await sleep(150)
                    break;
                case 2:
                    slots[slot].innerHTML = `<h1>🍇</h1>`;
                    console.log('cu3')
                    await sleep(150)
                    break;
            }
        }
    }
    var emojiID = Math.floor(Math.random() * 3) + 1
    console.log('emoji id = ',emojiID)
        for (let index3 = 1; index3 <= emojiID; index3 ++) {
            switch(index3){
                case 1:
                    slots[slot].innerHTML = `<h1 id="10">🍌</h1>`;
                    console.log('cu1')
                    await sleep(150)
                    break;
                    
                case 2:
                    slots[slot].innerHTML = `<h1 id="20">🍉</h1>`;
                    console.log('cu2')
                    await sleep(150)
                    break;
                case 3:
                    slots[slot].innerHTML = `<h1 id="30">🍇</h1>`;
                    console.log('cu3')
                    await sleep(150)
                    break;
            }
        }
}





function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function zerar(){
for (let index = 0; index < 3; index++) {
        slots[index].innerHTML = `<h1></h1>`
    }
    console.log(dinheiro)
}

