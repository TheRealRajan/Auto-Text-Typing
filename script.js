const textEl = document.querySelector('.text')
const speeedEl = document.querySelector('.speed')
const changeText = document.querySelector('.changeText')
let text = "This sentence is magically typing itself !"

let idx = 1
let speed = 300 / speeedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice( 0, idx )
    idx++

    if(idx > text.length){
        idx = 1
    }
    setTimeout(() => writeText(), speed);
}

speeedEl.addEventListener('input', (e)=>{
    
    if(e.target.value>5){
        e.target.value = 5
    }
    speed = 300/ e.target.value
    //When user is trying to input speed value and the input remains empty the speed value is set to one which resets the time to default of 300ms and prevents the speed value to become Infinity 
    if(speed==Infinity){
        speed = 300
    }
})

changeText.addEventListener('input', (e)=> {
    text = e.target.value
    
    if(text.length === 0){
        text = "Type something in there my dude"
    }
})
