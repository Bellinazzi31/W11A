function changeColor(obj) {
    if(obj.style.color == 'orange') {
        obj.style.color = 'black';
    } else {
        obj.style.color = 'orange';
    }
}
function changeBgColor(obj, colorName) {
    obj.style.backgroundColor = colorName;
}
function changeText(obj, text) {
    obj.innerText = text;
}
function scaleUp(obj, size) {
    obj.style.fontSize = size;
}