// Lista vazia onde as informações serão armazenadas
let infoList = [];

// Função para abrir o formulário
document.getElementById('openFormButton').addEventListener('click', () => {
  document.getElementById('formContainer').style.display = 'block';
});

// Função para processar o envio do formulário
document.getElementById('submitFormButton').addEventListener('click', () => {
  const dayInput = document.getElementById('dayInput').value;
  
  if (dayInput) {
    // Adiciona o valor do formulário à lista
    infoList.push(dayInput);
    
    // Exibe as informações na lista
    updateInfoList();

    // Esconde o formulário após o envio
    document.getElementById('formContainer').style.display = 'none';
  } else {
    alert('Por favor, preencha o dia!');
  }
});

// Função para atualizar a lista exibida
function updateInfoList() {
  const infoListElement = document.getElementById('infoList');
  infoListElement.innerHTML = ''; // Limpa a lista antes de adicionar os itens
  
  infoList.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    infoListElement.appendChild(listItem);
  });
}
