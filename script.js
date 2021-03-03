let btn = document.querySelector('#btn');
let btnC= document.querySelector('#cv');
let hidden = document.querySelector('.container2')

console.log(hidden.classList)

btn.addEventListener('click',()=>{
       hidden.style.visibility = "visible"
})

btnC.addEventListener('click',()=>{
    hidden.style.visibility = "hidden"
})