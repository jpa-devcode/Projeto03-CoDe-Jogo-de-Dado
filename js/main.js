var quantidadeDeJogadas = 0;
var acertosDoJogador = 0;

function reiniciarJogo() {
  window.location.reload(true);
}

document.getElementById('faceDoDado').style.animationPlayState = 'paused';

function jogarDado(event) {
  event.preventDefault();

  if (quantidadeDeJogadas < 6) {
    var jogadaDoDado = Math.floor(Math.random() * 6 + 1);
    var numeroDoJogador = document.getElementById('numero').value;

    if (numeroDoJogador == '') {
      alert('Você não informou o número!');
      return;
    }

    document.getElementById('faceDoDado').style.animationPlayState = 'running';

    switch (jogadaDoDado) {
      case 1:
        document.getElementById('faceDoDado').src = 'img/face_01.png';
        break;
      case 2:
        document.getElementById('faceDoDado').src = 'img/face_02.png';
        break;
      case 3:
        document.getElementById('faceDoDado').src = 'img/face_03.png';
        break;
      case 4:
        document.getElementById('faceDoDado').src = 'img/face_04.png';
        break;
      case 5:
        document.getElementById('faceDoDado').src = 'img/face_05.png';
        break;
      case 6:
        document.getElementById('faceDoDado').src = 'img/face_06.png';
        break;
    }

    setTimeout(function () {
      document.getElementById('faceDoDado').style.animationPlayState = 'paused';
    }, 1000);

    quantidadeDeJogadas += 1;

    document.getElementById('quantidadeDeJogadas').innerHTML =
      quantidadeDeJogadas;

    if (jogadaDoDado == numeroDoJogador) {
      acertosDoJogador += 1;
      document.getElementById('numeroDeAcertos').innerHTML = acertosDoJogador;
    }
  }

  if (quantidadeDeJogadas == 6) {
    document.getElementById('jogarDado').style.cursor = 'default';
    document.getElementById('jogarDado').style.backgroundColor = '#b4b4b4';
    document.getElementById('jogarDado').style.color = '#000';
    document.getElementById('jogarDado').style.borderColor = '#b4b4b4';
  }

  if (quantidadeDeJogadas == 6) {
  }
}

document.getElementById('jogarDado').addEventListener('submit', jogarDado);
document
  .getElementById('reiniciarJogo')
  .addEventListener('click', reiniciarJogo);
