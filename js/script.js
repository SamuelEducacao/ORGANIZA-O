 
function gerarCracha() {
  const nome = document.getElementById('entradaNome').value;
  if (!nome.trim()) {
    alert("Por favor, digite seu nome.");
    return;
  }

  document.getElementById('nome').textContent = nome;
  document.getElementById('cracha').style.display = 'block';

  window.print();
}
