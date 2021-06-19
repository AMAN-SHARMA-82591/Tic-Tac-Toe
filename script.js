let cell = document.querySelectorAll('.box-cell');
let text = document.querySelector('.winner-text');
let decision = document.querySelector('.decision-section');
let restart = document.querySelector('.restart')
let turn = document.querySelector('.turn')
let answer = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
num = []
index = []



cell.forEach((value,i) => value.addEventListener('click',function(){
 
    console.log(num)
    //Checks if the value has a node inside or not
    if(value.childNodes.length === 1){
        return value
    }
    //adding new class to the newDiv
    let newDiv = document.createElement('div')
        if(num.length >= 1){
            if(num.slice(-1)[0] === 'o'){
                newDiv.classList.add('cell-div-x','x')
            }if(num.slice(-1)[0] === 'x'){
                newDiv.classList.add('cell-div-o','o')
            }
        }if(num.length < 1){
            newDiv.classList.add('cell-div-o','o')
        }
        if(num.length === 9){
            return num
        }

        //Appending newDiv to the value
        value.appendChild(newDiv)  
        num.push(newDiv.classList[1])
        index.push([num.slice(-1)[0],i])
     
        //Filtering Values from the index Array that match the answer values in their appropriate array values
        let filteredVal = answer.map(value => value.map(newV => index.filter(V => V[1] === newV)[0])).map(value => value.map(Hell => Hell === undefined?'':Hell[0]) )

        let filtered1 = filteredVal.filter(value => value.filter(newV => newV === 'o').length === 3)

        let filtered2 = filteredVal.filter(value => value.filter(newV => newV === 'x').length === 3)

        //For Showing text when someone wins or draws the match
        if(filtered1.length === 1){
            text.innerText = 'O Wins!'
            decision.style.display = 'block'
        }else if(filtered2.length === 1){
            text.innerText = 'X Wins!'
            decision.style.display = 'block'
        }else if(index.length === 9){
            text.innerText = 'Draw!'
            decision.style.display = 'block'
        }

        //Restart Button
        restart.addEventListener('click',function(){
            decision.style.display = 'none' 
                newDiv.remove()
            num = [],index = []
        })
        
    }))

