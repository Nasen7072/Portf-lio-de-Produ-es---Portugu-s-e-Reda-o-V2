// ===== SISTEMA DE FILTROS DINÂMICOS =====
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona active class ao botão clicado
        button.classList.add('active');
        
        // Filtra as produções
        const filter = button.getAttribute('data-filter');
        renderProductions(filter);
    });
});

// Função de renderização com filtro
function renderProductions(filter = 'all') {
    productionsContainer.innerHTML = '';
    
    const filteredProductions = filter === 'all' 
        ? productions 
        : productions.filter(p => p.category === filter);
    
    filteredProductions.forEach(production => {
        const card = document.createElement('div');
        card.className = 'production-card fade-in';
        card.innerHTML = `
            <div class="card-badge">${production.badge}</div>
            <img src="${production.image}" alt="${production.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${production.title}</h3>
                <p class="card-description">${production.description}</p>
                <div class="card-meta">
                    <span><i class="fas fa-file-alt"></i> ${production.pages} páginas</span>
                    <span><i class="fas fa-font"></i> ${production.words} palavras</span>
                </div>
                <div class="card-actions">
                    <a href="#" class="card-btn card-btn-primary read-more" data-id="${production.id}">
                        <i class="fas fa-book-open"></i> Ler Mais
                    </a>
                    <a href="#" class="card-btn card-btn-secondary download-btn" data-id="${production.id}">
                        <i class="fas fa-download"></i> PDF
                    </a>
                </div>
            </div>
        `;
        productionsContainer.appendChild(card);
    });
    
    // Re-aplica event listeners após filtragem
    attachCardEventListeners();
}

// ===== TOGGLE DE TEMA CLARO/ESCURO =====
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    
    // Alterna ícone entre lua e sol
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // Aqui você pode adicionar mais lógica para tema escuro
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ===== MODAL EXPANDIDO =====
function openModal(id) {
    const production = productions.find(p => p.id === id);
    if (production) {
        modalTitle.textContent = production.title;
        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; margin-bottom: 2rem;">
                <img src="${production.image}" alt="${production.title}" style="width: 100%; border-radius: var(--radius);">
                <div>
                    <h4 style="margin-bottom: 1rem; color: var(--primary);">Detalhes da Produção</h4>
                    <p><strong>Categoria:</strong> ${production.badge}</p>
                    <p><strong>Páginas:</strong> ${production.pages}</p>
                    <p><strong>Palavras:</strong> ${production.words}</p>
                    <p><strong>Data de Conclusão:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
            </div>
            ${production.content}
        `;
        modal.style.display = 'flex';
    }
}

// ===== SISTEMA DE ANIMAÇÕES =====
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Inicia elementos invisíveis
    fadeElements.forEach(el => {
        el.style.opacity = '0';
    });
    
    // Anima entrada com delay
    setTimeout(() => {
        fadeElements.forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
}

// ===== CONTADORES ANIMADOS MELHORADOS =====
function calculateTotals() {
    const totalPages = productions.reduce((sum, production) => sum + production.pages, 0);
    const totalWords = productions.reduce((sum, production) => sum + production.words, 0);
    
    animateCounter(pageCount, totalPages);
    animateCounter(wordCount, totalWords);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 segundos
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString(); // Formata número
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// ===== MENU HAMBURGUER AVANÇADO =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isVisible = navMenu.style.display === 'flex';
    navMenu.style.display = isVisible ? 'none' : 'flex';
    
    // Anima ícone do hamburguer
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Fecha menu ao clicar em links (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
            // Reseta ícone do hamburguer
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// ===== INICIALIZAÇÃO COMPLETA =====
document.addEventListener('DOMContentLoaded', () => {
    renderProductions();      // Renderiza produções
    calculateTotals();        // Inicia contadores
    initAnimations();         // Inicia animações
    attachCardEventListeners(); // Aplica event listeners
    
    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Função auxiliar para event listeners dos cards
function attachCardEventListeners() {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            openModal(id);
        });
    });
    
    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            // Simula download (em produção, faria requisição para arquivo)
            alert(`Download da produção ${id} iniciado!`);
        });
    });
}
