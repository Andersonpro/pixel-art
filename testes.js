const tela = document.querySelector('canvas');
const cor = document.querySelector('#pincel-color');
const cx = tela.getContext('2d');
const telaWidth = 600;
const telaHeight = 600;
tela.width = telaWidth;
tela.height = telaHeight;

tela.addEventListener('click', (evento) => {
    desenha(evento);
});

cx.strokeStyle = "#CACACA";
for(let i = 0; i < 600; i = i + 20){
    for(j = 0; j < 600; j = j + 20){
        cx.strokeRect(i, j, 20, 20);
    }
}

function desenha(evento){
    cx.fillStyle = cor.value;
    var posX = evento.pageX - tela.offsetLeft;
    var posY = evento.pageY - tela.offsetTop
    cx.fillRect(posX - (posX%20), posY - (posY%20), 20, 20);
}