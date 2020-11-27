const title = document.querySelector('h1')
title.addEventListener('mouseover', function() {
    title.innerText = 'mouseover event'
    title.style.backgroundColor = 'skyblue'
})

title.addEventListener('click', function() {
    title.innerText = 'click event'
    title.style.backgroundColor = 'red'
})
document.addEventListener('keypress', function(e) {
    if (e.keyCode === 32) {
        title.innerText = 'space bar'
        title.style.backgroundColor = 'yellow'
    }
})