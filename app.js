const RandomColors = [
    '#ff0276', 
    '#eba80c', 
    '#ebd40c', 
    '#CD3333', 
    '#C5FF6C', 
    '#ffa7a7', 
    '#a7e5a2', 
    '#73993d', 
    '#d6f5f3'
];

var random = document.getElementById('random');
var paint = document.getElementById('paint');
var Input = document.getElementById('input');

random.addEventListener('click', () => {
    var RandomNum = Math.floor(Math.random()*8);
    paint.style.backgroundColor = RandomColors[RandomNum];
    Input.value = RandomColors[RandomNum];
})

Input.addEventListener('keypress', () => {
    paint.style.backgroundColor = Input.value;
})

paint.addEventListener('mousemove', () => {
    var RandomNum = Math.floor(Math.random()*8);
    setTimeout(() => {
        paint.style.backgroundColor = RandomColors[RandomNum];
        Input.value = RandomColors[RandomNum];
    }, '500')
})
