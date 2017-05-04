var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = innerWidth; //largura e altura da animação
canvas.height = innerWidth;

var party = smokemachine(ctx, [255, 255, 255, 0.1]) //cor da fumaça em rgba

party.start() // começa a animação

party.addsmoke(600, 600, 20) // adiciona a fumaça no eixo x,y,tempo

onmousemove = function(e) {
    var x = e.clientX
    var y = e.clientY
    var n = .5
    var t = Math.floor(Math.random() * 200) + 3800
    party.addsmoke(x, y, n, t)
}

setInterval(function() {
    party.addsmoke(innerWidth / 2, innerHeight, 1)
}, 100)