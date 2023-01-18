function jogarDado() {
  var jogadaDoDado = Math.floor(Math.random() * 6 + 1);
  var numeroDoJogador = document.getElementById('numero').value;
  console.log(jogadaDoDado);
  console.log(numeroDoJogador);

  if (numeroDoJogador == '') {
    alert('Você não informou o número!');
    return;
  }

  switch (jogadaDoDado) {
    case 1:
      document.getElementById('face').src = 'img/face_01.png';
      break;
    case 2:
      document.getElementById('face').src = 'img/face_02.png';
      break;
    case 3:
      document.getElementById('face').src = 'img/face_03.png';
      break;
    case 4:
      document.getElementById('face').src = 'img/face_04.png';
      break;
    case 5:
      document.getElementById('face').src = 'img/face_05.png';
      break;
    case 6:
      document.getElementById('face').src = 'img/face_06.png';
      break;
  }

  if (jogadaDoDado == numeroDoJogador) {
    document.getElementById('comparacao').innerHTML = '&#61';
  } else if (jogadaDoDado != numeroDoJogador && numeroDoJogador != '') {
    document.getElementById('comparacao').innerHTML = '&#35';
  }

  document.getElementById('numero').value = '';
  document.getElementById('numeroDoJogador').innerHTML = numeroDoJogador;
}
