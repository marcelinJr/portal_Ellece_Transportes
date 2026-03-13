// Mostrar balão
function mostrarProcesso(idBalao) {
    const todosBaloes = document.querySelectorAll('.balao-instrucao');
    todosBaloes.forEach(balao => balao.classList.remove('ativo'));
    if (idBalao && idBalao !== '') {
        const balaoSelecionado = document.getElementById(idBalao);
        if (balaoSelecionado) balaoSelecionado.classList.add('ativo');
    }
}

// Filtrar cards
function filtrarCards() {
    const texto = document.getElementById('busca').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(texto)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle menu mobile
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const layout = document.querySelector('.layout');
    sidebar.classList.toggle('collapsed');
    layout.classList.toggle('shifted');
}