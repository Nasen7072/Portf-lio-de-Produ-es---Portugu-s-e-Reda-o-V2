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

// Dados das produções com novos temas
const productions = [
    {
        id: 1,
        title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
        description: "Análise sobre o crescimento dos procedimentos estéticos entre o público jovem e seus impactos sociais.",
        image: "https://images.unsplash.com/photo-1594489573857-58baae929016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta produção analisou o crescimento exponencial dos procedimentos estéticos entre os jovens, explorando fatores como influência das redes sociais, padrões de beleza contemporâneos e acesso facilitado a tratamentos.</p><p>O trabalho abordou tanto os aspectos psicológicos quanto os riscos à saúde envolvidos nessa tendência, propondo reflexões sobre autoestima e aceitação corporal.</p>",
        pages: 3,
        words: 1500,
        badge: "Redação"
    },
    {
        id: 2,
        title: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
        description: "Reflexão sobre os desafios e avanços na inclusão de pessoas com deficiência na sociedade brasileira.",
        image: "https://images.unsplash.com/photo-1544174232-5d273c562b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Este trabalho examinou a situação da acessibilidade e inclusão de pessoas com deficiência no Brasil, analisando desde a infraestrutura urbana até as políticas públicas e a conscientização social.</p><p>A produção destacou a importância da inclusão como direito fundamental e apresentou propostas para uma sociedade mais acessível e igualitária.</p>",
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 3,
        title: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
        description: "Estudo sobre os elementos que determinam a qualidade de vida e bem-estar social.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta análise explorou os múltiplos fatores que influenciam a qualidade de vida, incluindo saúde, educação, segurança, meio ambiente e relações sociais.</p><p>O trabalho apresentou uma visão holística do bem-estar, considerando tanto aspectos objetivos quanto subjetivos da felicidade humana.</p>",
        pages: 4,
        words: 2000,
        badge: "Redação"
    },
    {
        id: 4,
        title: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
        description: "Análise dos impactos das mudanças climáticas no território brasileiro e os desafios enfrentados.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta produção investigou os efeitos das mudanças climáticas no Brasil, com foco em eventos extremos, alterações nos biomas e impactos na agricultura.</p><p>O trabalho também discutiu políticas de adaptação e mitigação, destacando a importância do desenvolvimento sustentável.</p>",
        pages: 3,
        words: 1700,
        badge: "Redação"
    },
    {
        id: 5,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de lixo eletrônico.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Este trabalho analisou as graves consequências do descarte inadequado de lixo eletrônico, incluindo contaminação do solo e água, e problemas de saúde pública.</p><p>A produção também explorou soluções como reciclagem, logística reversa e conscientização ambiental.</p>",
        pages: 3,
        words: 1550,
        badge: "Redação"
    },
    {
        id: 6,
        title: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
        description: "Estudo sobre os impactos do consumo de alimentos ultraprocessados na saúde humana.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta análise examinou os efeitos do consumo regular de alimentos ultraprocessados, relacionando-o ao aumento de doenças crônicas como obesidade, diabetes e problemas cardiovasculares.</p><p>O trabalho também discutiu políticas públicas de alimentação saudável e educação nutricional.</p>",
        pages: 3,
        words: 1650,
        badge: "Redação"
    },
    {
        id: 7,
        title: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
        description: "Investigação sobre a dependência em jogos de apostas online e seus impactos sociais.",
        image: "https://images.unsplash.com/photo-1593110121193-30e1e7ea36a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Este trabalho explorou os fatores psicológicos e sociais que levam à dependência em jogos de apostas online, analisando seus efeitos devastadores nas finanças e relações familiares.</p><p>A produção também discutiu medidas de prevenção e tratamento para esse tipo de dependência.</p>",
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 8,
        title: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
        description: "Reflexão sobre o papel do voluntariado na redução das desigualdades sociais.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta produção destacou a importância do trabalho voluntário como instrumento de transformação social, analisando seu impacto no combate à pobreza e na promoção da cidadania.</p><p>O trabalho apresentou casos de sucesso e incentivou a participação social como forma de construir uma sociedade mais justa.</p>",
        pages: 3,
        words: 1550,
        badge: "Redação"
    },
    {
        id: 9,
        title: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
        description: "Análise sobre a adultização precoce das crianças e seus impactos no desenvolvimento.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Este trabalho investigou o fenômeno da adultização infantil, examinando como a exposição precoce a responsabilidades e informações adultas afeta o desenvolvimento psicológico das crianças.</p><p>A produção alertou para a importância de preservar a infância como fase fundamental de formação.</p>",
        pages: 3,
        words: 1700,
        badge: "Redação"
    },
    {
        id: 10,
        title: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
        description: "Reflexão sobre o preconceito etário e estratégias para combatê-lo.",
        image: "https://images.unsplash.com/photo-1576097449797-4c9a9ed6b2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta análise explorou o etarismo (preconceito baseado na idade) em suas diferentes manifestações, desde o mercado de trabalho até as relações interpessoais.</p><p>O trabalho propôs estratégias educacionais e políticas para promover o respeito à diversidade etária.</p>",
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 11,
        title: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
        description: "Estudo sobre a relevância do ensino de educação financeira para a formação dos jovens.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Este trabalho destacou a importância da educação financeira desde cedo, analisando como ela contribui para a autonomia, planejamento de vida e prevenção de problemas como endividamento.</p><p>A produção defendeu a inclusão da educação financeira no currículo escolar como forma de empoderamento juvenil.</p>",
        pages: 3,
        words: 1550,
        badge: "Redação"
    },
    {
        id: 12,
        title: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
        description: "Análise dos obstáculos enfrentados pela cultura popular brasileira e estratégias de valorização.",
        image: "https://images.unsplash.com/photo-1485795959901-5cdaec9ce83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta produção investigou os desafios para preservação e valorização da cultura popular brasileira frente à globalização e homogeneização cultural.</p><p>O trabalho apresentou propostas para fortalecer as manifestações culturais tradicionais como patrimônio nacional.</p>",
        pages: 3,
        words: 1650,
        badge: "Redação"
    },
    {
        id: 13,
        title: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
        description: "Reflexão sobre os desafios e soluções para universalizar o saneamento básico no país.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Este trabalho analisou a situação do saneamento básico no Brasil, destacando as desigualdades regionais e os impactos na saúde pública.</p><p>A produção discutiu investimentos necessários, políticas públicas e tecnologias para alcançar a universalização do saneamento.</p>",
        pages: 3,
        words: 1700,
        badge: "Redação"
    },
    {
        id: 14,
        title: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
        description: "Estudo sobre o potencial do esporte na promoção da inclusão e transformação social.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta análise explorou como o esporte pode ser utilizado como ferramenta de transformação social, promovendo valores como trabalho em equipe, disciplina e superação.</p><p>O trabalho apresentou casos de projetos sociais que utilizam o esporte para inclusão de jovens em situação de vulnerabilidade.</p>",
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 15,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Análise aprofundada sobre os impactos ambientais do lixo eletrônico e soluções sustentáveis.",
        image: "https://images.unsplash.com/photo-1587334941771-424db0367c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: "<p>Esta produção complementar aprofundou a análise sobre o lixo eletrônico, focando em soluções inovadoras como economia circular, reutilização de componentes e conscientização do consumidor.</p><p>O trabalho destacou a importância da responsabilidade compartilhada entre governo, empresas e cidadãos.</p>",
        pages: 3,
        words: 1650,
        badge: "Redação"
    }
];

// Elementos DOM
const productionsContainer = document.getElementById('productions-container');
const modal = document.getElementById('production-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const productionCount = document.getElementById('production-count');
const pageCount = document.getElementById('page-count');
const wordCount = document.getElementById('word-count');

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

// Função para fechar o modal
function closeModalFunc() {
    modal.style.display = 'none';
}

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

// Event listeners
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});
