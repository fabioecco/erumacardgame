// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const fadeInSection = document.querySelector('.fade-in');
    const moveUpSection = document.querySelector('.move-up');

    const checkVisibility = () => {
        const rectFadeIn = fadeInSection.getBoundingClientRect();
        const rectMoveUp = moveUpSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Verifica se a seção de fade-in está aproximadamente no centro da tela
        if (rectFadeIn.top <= windowHeight * 0.75 && rectFadeIn.bottom >= windowHeight * 0.25) {
            fadeInSection.classList.add('visible');
        }

        // Verifica se a seção de movimento está visível
        if (rectMoveUp.top <= windowHeight * 0.75 && rectFadeIn.bottom >= windowHeight * 0.25) {
            moveUpSection.classList.add('visible');
        }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica a visibilidade ao carregar a página
});

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.image-container');
    const windowHeight = window.innerHeight; // Altura da janela visível
  
    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top; // Posição da imagem em relação ao topo visível

        // Verifica se a imagem já chegou ao centro e deve permanecer lá
        if (element.dataset.hasMoved === 'true') {
            // Se a imagem já atingiu o centro, ela deve ficar fixa lá
            element.style.transform = 'translateX(0vw)';
            element.style.opacity = 1;
        } else if (elementTop < windowHeight && elementTop > 0) {
            // Caso contrário, a imagem deve deslizar da direita para o centro
            const distanceToCenter = (windowHeight / 1) - elementTop; // Distância até o centro da janela
            const translateXValue = Math.max(0, 100 - (distanceToCenter / 3)); // Movimento da imagem

            // Aplica o movimento e o efeito de fade-in
            element.style.transform = `translateX(${translateXValue}vw)`; // Move a imagem
            element.style.opacity = Math.min(1, 1 - (translateXValue / 100)); // Fade-in da opacidade

            // Quando a imagem atinge o centro, marque como movida
            if (translateXValue === 0) {
                element.dataset.hasMoved = 'true'; // Marca que a imagem chegou ao centro
            }
        }
    });
});

function rotateCard(event, card) {
    const containerRect = card.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left - containerRect.width / 2;
    const mouseY = event.clientY - containerRect.top - containerRect.height / 2;

    const rotateX = -(mouseY / containerRect.height) * 45;
    const rotateY = (mouseX / containerRect.width) * 45;

    card.querySelector('.foil-card-inner').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetCard(card) {
    card.querySelector('.foil-card-inner').style.transform = 'rotateX(0deg) rotateY(0deg)';
}

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });