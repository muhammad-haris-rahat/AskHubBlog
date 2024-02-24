let submitbtn = document.querySelector(".submit")
let text = document.querySelector("textarea")
let commentedbox = document.querySelector(".commentedbox")
// commentedbox.innerText = null    


submitbtn.addEventListener("click" ,()=>{
    commentedbox.innerText = text.innerText
})