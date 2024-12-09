function stickyHeader() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Adiciona o evento de rolagem para verificar a posição do cabeçalho
window.onscroll = function() {
    stickyHeader();
};

// Função para rolar suavemente para a seção quando um item do menu é clicado
document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funções para adicionar efeito de zoom nas imagens dos produtos
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});