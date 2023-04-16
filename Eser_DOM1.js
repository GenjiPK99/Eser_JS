let p=document.querySelectorAll('.paragrafo')
let btnchangecolor=document.querySelector('#btnchangecolor')
btnchangecolor.addEventListener('click',()=>{
    
    let r = Math.floor(Math.random()* (255 -0 +1) + 0)
    let g = Math.floor(Math.random() * (255 -0 +1) + 0)
    let b = Math.floor(Math.random() * (255 -0 +1) + 0)
p.forEach((paragrafo) => 
    paragrafo.style.color = `rgb(${r}, ${g}, ${b}`)
})


let btnchangecontent=document.querySelector('#btnchangecontent')
btnchangecontent.addEventListener('click',()=>{
    p.forEach((paragrafo) => 
    paragrafo.classList.toggle(`d-none`)) 
})

let btnchangefontstyle=document.querySelector('#btnchangefontstyle')
btnchangefontstyle.addEventListener('click',()=>{
    p.forEach((paragrafo) => 
    paragrafo.classList.toggle(`fw-bold`)) 
})