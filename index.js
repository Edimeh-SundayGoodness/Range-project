let range = document.getElementById('input');
let paragraph = document.querySelector('p')
let p2 = document.querySelector('h6')
let input = document.querySelector('#number')
let btnClicked= document.getElementById('button')

range.addEventListener('change', () =>{
    input = range.value
    console.log(input)
})

btnClicked.addEventListener('click', (event) =>{

    let inputTyped = parseInt(document.querySelector('#number').value)
    console.log(inputTyped)

    
    // inputTyped = rangeValue
    event.preventDefault()
})

// input.addEventListener('input',)
let checkValue = () =>{
    let rangeValue = range.value
    paragraph.innerText = range.value
    console.log(rangeValue)

    try{
        //here you try a block of code
        if(rangeValue <= 2000) throw "Below Standard";
        if(rangeValue > 2000 && rangeValue < 2500) throw "Acceptable";
        if(rangeValue === 2500) throw "Standard";
        if(rangeValue > 2500) throw "Excellent";
    }
    catch(err){
        //catch any error that occured during the code block
        p2.innerHTML = err;
    }
    finally{
        //Gets executed irrespective of the result of the abovecode executed
        p2.innerHTML += '<br> The standard has been evaluated'
    }
}

range.addEventListener('change', checkValue)