// Carrossel
const imgs = document.querySelectorAll('.carousel img');
let i = 0;
setInterval(() => {
  imgs[i].classList.remove('active');
  i = (i + 1) % imgs.length;
  imgs[i].classList.add('active');
}, 2500);

// Data de início do relacionamento
const dataInicio = new Date("2025-04-26T00:00:00");

function resposta(res) {
  if (res === 'sim') {
    alert('TE AMO MINHA VIDA 💘');
    document.getElementById('contador').style.display = 'block';  // Torna o contador visível
    iniciarContador();
  } else {
    alert('Tem certeza? 🥺😭');
  }
}

function iniciarContador() {
  function atualizarTempo() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("tempo").innerText =
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;  // Formato de relógio digital
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000); // Atualiza a cada 1 segundo
}

// Botão "Não" fujão
const botaoNao = document.getElementById("botaoNao");
botaoNao.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - botaoNao.offsetWidth;
  const maxY = window.innerHeight - botaoNao.offsetHeight;
  const novoX = Math.floor(Math.random() * maxX);
  const novoY = Math.floor(Math.random() * maxY);
  botaoNao.style.position = "absolute";
  botaoNao.style.left = `${novoX}px`;
  botaoNao.style.top = `${novoY}px`;
});
