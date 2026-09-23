let color = null

document.addEventListener("chnage" , function(){
    color = document.getElementById("color-selected").value
    fetchColor()
})

function fetchColor(){
    fetch(`https://www.thecolorapi.com/id?hex=${color}&format=JSON`)
    .then(response => response.json())
    .then(data => console.log(data))
}


// function renderColor(){
    
//     fetch("https://www.thecolorapi.com/scheme")
// }