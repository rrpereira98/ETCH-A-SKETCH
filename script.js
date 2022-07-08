let canvas = document.querySelector(".canvas")

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    row.classList.add("canvas-row")
    for (let i = 0; i < 16; i++) {
        let pixel = document.createElement("div")
        pixel.classList.add("canvas-pixel")
        row.appendChild(pixel)
    }
    canvas.appendChild(row)
}