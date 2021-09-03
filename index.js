let topBoxes = document.querySelectorAll('.top')
let bottomBoxes = document.querySelectorAll('.btm')


function changeColor(e) {
    pallete.style.backgroundColor= e.target.style.backgroundColor
    for (let i=0;i<topBoxes.length;i++) {
        topBoxes[i].removeEventListener('click', changeColor)
    }
}



function toggleTopBoxes(e) {
    pallete = e.target
    for (let i=0;i<topBoxes.length;i++) {
        topBoxes[i].addEventListener('click', changeColor)
    }
}

for (let i=0;i<bottomBoxes.length;i++) {
    bottomBoxes[i].addEventListener('click', toggleTopBoxes)
}