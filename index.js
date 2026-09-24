


document.addEventListener("click", function(e){
    if (e.target.className === "btn"){
        const color = document.getElementById("color-selected").value.substring(1)

        genrateColorScheme(color)
    }
})

function genrateColorScheme(color){
    const mode = document.getElementById("mode").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colorArray = data.colors.map( clr => {
                return {
                    hex: clr.hex.clean,
                    image : clr.image.bare
                }
            })
            console.log(colorArray)
            renderColorScheme(colorArray)
        })    
}

function renderColorScheme(colorArray) {

    const colorList = document.querySelector(".color-list")

    colorList.innerHTML = ""

    for (let i = 0; i < colorArray.length; i++) {
        colorList.innerHTML += `
            <li class="color-item">
                <img
                    class="color-image"
                    src="${colorArray[i].image}"
                    alt="Color scheme preview"
                >
                <p class="hex-value">#${colorArray[i].hex}</p>
            </li>
        `
    }
}