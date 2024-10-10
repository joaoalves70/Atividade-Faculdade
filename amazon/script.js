// Abre o modal ao clicar no botão de endereço
const addressBtn = document.getElementById('addressBtn');
const addressModal = document.getElementById('addressModal');
const closeBtn = document.getElementById('closeBtn');

addressBtn.addEventListener('click', () => {
    addressModal.style.display = 'flex';
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    addressModal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (e) => {
    if (e.target == addressModal) {
        addressModal.style.display = 'none';
    }
});
