const imgs = [
    "hghj",
    "hhg",
    "bfghg",
    "ghdghh"
]
const container = document.getElementById("container")

function renderImages () {
    let imgsDOM = ""
    for(let i = 0; i<imgs.length; i++) {
        imgsDOM += `<img class="team-img" src=" ${imgs[i]}`
    }
    container.innerHTML = imgsDOM
}
renderImages()
