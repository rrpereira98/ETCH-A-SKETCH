let canvas = document.querySelector(".canvas")
let gridSizeBtn = document.querySelector(".gridSizeBtn")
let rainbowBtn = document.querySelector(".rainbowBtn")
let clearBtn = document.querySelector(".clearBtn")

let currentColor = "#000000"
let UserGrid = 0

/* create a number of rows and inside those rows the same number of individual
pixels (number in gridSize variable) and append them to the canvas div, also
adds a event listener to when mouse enters pixel and changes color to black*/

function createGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div")
        row.classList.add("canvas-row")
        for (let i = 0; i < gridSize; i++) {
            let pixel = document.createElement("div")
            pixel.classList.add("canvas-pixel")
            row.appendChild(pixel)

            pixel.addEventListener("mouseenter", () => pixel.style.backgroundColor = currentColor)
        }
        canvas.appendChild(row)
    }
    currentColor = "black"
}

createGrid()

gridSizeBtn.addEventListener("click", () => {
    userGrid = prompt("choose grid size")
    if(userGrid < 1 || userGrid > 64)
        alert("grid size must be between 1 and 64")
    else {
        canvas.innerHTML = ""
        createGrid(userGrid)
        UserGrid = userGrid
    }
})

rainbowBtn.addEventListener("click", () => {
    let pixels = document.querySelectorAll(".canvas-pixel")
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            currentColor = color
        }
    }))
})

clearBtn.addEventListener("click", () => {
    canvas.innerHTML = ""
    createGrid(UserGrid)
})