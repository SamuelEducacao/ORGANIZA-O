function gerarCracha() {
  const nomeInput = document.getElementById('entradaNome');
  const nome = nomeInput.value.trim();
  const nomeDisplay = document.getElementById('nome');
  const cracha = document.getElementById('cracha');

  if (!nome) {
    alert("Por favor, digite seu nome.");
    return;
  }

  nomeDisplay.textContent = nome;
  cracha.style.display = 'block';

  // Ajuste de tamanho de fonte conforme o comprimento do nome
  const baseSize = 32;
  let adjustedSize = baseSize;

  if (nome.length > 18) {
    adjustedSize = 26;
  }
  if (nome.length > 22) {
    adjustedSize = 22;
  }
  if (nome.length > 26) {
    adjustedSize = 18;
  }

  nomeDisplay.style.fontSize = adjustedSize + 'px';

  window.print();
}

