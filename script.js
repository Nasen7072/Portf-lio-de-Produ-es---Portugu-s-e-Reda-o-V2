// Dados das produções
const productions = [
    {
        id: 1,
        title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
        description: "Análise sobre o crescimento da busca por procedimentos estéticos entre o público jovem e seus impactos sociais.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção analisa o aumento significativo de procedimentos estéticos entre os jovens brasileiros. O trabalho explora fatores como influência das redes sociais, padrões de beleza contemporâneos e a busca por aceitação social.</p><p>A redação aborda também os riscos associados a essas intervenções quando realizadas sem orientação adequada e a importância da valorização da diversidade corporal.</p>",
        pages: 3,
        words: 1500
    },
    {
        id: 2,
        title: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
        description: "Reflexão sobre os desafios e avanços na inclusão de pessoas com deficiência na sociedade brasileira.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção discute a situação da acessibilidade e inclusão de pessoas com deficiência no Brasil. O texto aborda desde barreiras arquitetônicas até preconceitos sociais que dificultam a plena participação desses cidadãos na sociedade.</p><p>A redação também analisa a legislação brasileira sobre o tema e propõe medidas para promover uma sociedade verdadeiramente inclusiva.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 3,
        title: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
        description: "Análise dos elementos que impactam diretamente na qualidade de vida e bem-estar dos cidadãos.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção examina os principais fatores que influenciam na qualidade de vida e bem-estar da população, incluindo aspectos como saúde, educação, segurança, moradia e relações sociais.</p><p>O texto discute como políticas públicas eficazes podem melhorar esses indicadores e promover maior equidade social.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 4,
        title: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
        description: "Análise dos impactos das mudanças climáticas no território brasileiro e os desafios para enfrentá-los.",
        image: "https://images.unsplash.com/photo-1569163139394-de44cb54d521?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção aborda as mudanças climáticas no contexto brasileiro, analisando seus efeitos em diferentes biomas e regiões do país. O texto discute eventos extremos, alterações nos padrões de chuva e impactos na agricultura.</p><p>A redação também propõe medidas de adaptação e mitigação que podem ser implementadas em nível nacional e local.</p>",
        pages: 3,
        words: 1800
    },
    {
        id: 5,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de resíduos eletrônicos.",
        image: "https://images.unsplash.com/photo-1618477388957-7b5c0c6f39e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção analisa as consequências do descarte inadequado de lixo eletrônico, abordando desde a contaminação do solo e da água até os riscos à saúde humana.</p><p>O texto também discute a responsabilidade compartilhada entre fabricantes, governo e consumidores no gerenciamento adequado desses resíduos.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 6,
        title: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
        description: "Análise dos impactos do consumo de alimentos ultraprocessados na saúde da população.",
        image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção examina o crescimento do consumo de alimentos ultraprocessados e suas consequências para a saúde pública. O texto aborda a relação entre esses produtos e o aumento de doenças crônicas como obesidade, diabetes e hipertensão.</p><p>A redação também discute estratégias para promover alimentação mais saudável e consciente na população.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 7,
        title: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
        description: "Reflexão sobre os fatores que levam à dependência em jogos de apostas online e seus efeitos na vida dos usuários.",
        image: "https://images.unsplash.com/photo-1593110121193-3c4a4a59a8cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção analisa os fatores psicológicos, sociais e econômicos que contribuem para a dependência em jogos de apostas online. O texto explora também os efeitos devastadores dessa dependência na vida financeira, familiar e profissional dos usuários.</p><p>A redação discute ainda a necessidade de regulamentação e políticas de prevenção para esse problema crescente.</p>",
        pages: 3,
        words: 1750
    },
    {
        id: 8,
        title: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
        description: "Análise do papel do trabalho voluntário na redução das desigualdades sociais no Brasil.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção discute a importância do trabalho voluntário como ferramenta de combate às desigualdades sociais. O texto aborda como iniciativas voluntárias podem complementar ações governamentais e promover transformação social.</p><p>A redação também reflete sobre os benefícios do voluntariado tanto para quem recebe quanto para quem oferece o serviço.</p>",
        pages: 3,
        words: 1650
    },
    {
        id: 9,
        title: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
        description: "Reflexão sobre o fenômeno da adultização infantil e suas consequências no desenvolvimento das crianças.",
        image: "https://images.unsplash.com/photo-1516627145497-ae69578a8d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção analisa o fenômeno da adultização infantil, explorando como a exposição precoce a responsabilidades, informações e comportamentos adultos pode impactar negativamente o desenvolvimento das crianças.</p><p>O texto discute também o papel da mídia, da publicidade e das redes sociais nesse processo e propõe caminhos para preservar a infância.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 10,
        title: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
        description: "Análise do etarismo (idadeísmo) e propostas para combatê-lo nas relações sociais.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção examina o etarismo - discriminação baseada na idade - e suas manifestações na sociedade contemporânea. O texto aborda estereótipos relacionados tanto a jovens quanto a idosos e seus impactos nas relações sociais.</p><p>A redação propõe caminhos para combater esse tipo de preconceito e promover uma sociedade mais inclusiva para todas as idades.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 11,
        title: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
        description: "Reflexão sobre a relevância da educação financeira na formação dos jovens e seu impacto no futuro.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção discute a importância da educação financeira para os jovens, abordando como o conhecimento sobre finanças pessoais pode impactar positivamente suas vidas adultas.</p><p>O texto analisa também a necessidade de incluir esse tema no currículo escolar e propõe estratégias para tornar o aprendizado financeiro mais acessível e atraente para os jovens.</p>",
        pages: 3,
        words: 1550
    },
    {
        id: 12,
        title: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
        description: "Análise dos desafios enfrentados para a preservação e valorização da cultura popular brasileira.",
        image: "https://images.unsplash.com/photo-1485795959901-60c3d73cd1e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção examina os desafios para a valorização da cultura popular brasileira em um contexto de globalização e homogeneização cultural. O texto aborda desde a falta de incentivos até o desconhecimento da população sobre suas próprias tradições.</p><p>A redação propõe medidas para preservar e revitalizar manifestações culturais populares, reconhecendo sua importância para a identidade nacional.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 13,
        title: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
        description: "Reflexão sobre os desafios e possíveis soluções para universalizar o saneamento básico no Brasil.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção analisa os desafios para a universalização do saneamento básico no Brasil, abordando desde questões técnicas e financeiras até desigualdades regionais e sociais.</p><p>O texto discute também os impactos da falta de saneamento na saúde pública e propõe caminhos para superar essas barreiras, garantindo acesso universal a esse direito fundamental.</p>",
        pages: 3,
        words: 1800
    },
    {
        id: 14,
        title: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
        description: "Análise do potencial do esporte como instrumento de transformação e inclusão social.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção examina o papel do esporte como ferramenta de transformação social, analisando como práticas esportivas podem promover inclusão, desenvolvimento de habilidades socioemocionais e construção de valores.</p><p>O texto discute também iniciativas esportivas que têm impactado positivamente comunidades vulneráveis e propõe formas de ampliar esse potencial transformador.</p>",
        pages: 3,
        words: 1650
    },
    {
        id: 15,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de resíduos eletrônicos.",
        image: "https://images.unsplash.com/photo-1618477388957-7b5c0c6f39e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção analisa as consequências do descarte inadequado de lixo eletrônico, abordando desde a contaminação do solo e da água até os riscos à saúde humana.</p><p>O texto também discute a responsabilidade compartilhada entre fabricantes, governo e consumidores no gerenciamento adequado desses resíduos.</p>",
        pages: 3,
        words: 1600
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
const productionCount = document.getElementById('production-count');
const pageCount = document.getElementById('page-count');
const wordCount = document.getElementById('word-count');
const themeToggle = document.getElementById('theme-toggle');
const musicToggle = document.getElementById('music-toggle');
const miniMusicToggle = document.getElementById('mini-music-toggle');
const volumeSlider = document.getElementById('volume-slider');
const backgroundMusic = document.getElementById('background-music');
const musicPlayer = document.getElementById('music-player');
const playIcon = document.getElementById('play-icon');

// Estado da música
let isPlaying = false;
let isExpanded = false;
let userInteracted = false;

// Função para alternar modo claro/escuro
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    // Atualizar ícone do botão
    if (document.body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

// Verificar preferência salva ou do sistema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Função para tocar/pausar música
function toggleMusic() {
    if (!userInteracted) {
        userInteracted = true;
        // Criar contexto de áudio para desbloquear autoplay
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.001);
    }
    
    if (isPlaying) {
        backgroundMusic.pause();
        playIcon.className = 'fas fa-play';
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        const playPromise = backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                playIcon.className = 'fas fa-pause';
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
            }).catch(error => {
                console.log("Erro ao reproduzir áudio:", error);
                showMusicError();
            });
        }
    }
    isPlaying = !isPlaying;
}

// Função para mostrar erro de música
function showMusicError() {
    const errorMsg = document.createElement('div');
    errorMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e94560;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 3000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    errorMsg.innerHTML = `
        <p><strong>Erro de Áudio</strong></p>
        <p>Clique no botão de música para tentar novamente.</p>
    `;
    document.body.appendChild(errorMsg);
    
    setTimeout(() => {
        errorMsg.remove();
    }, 5000);
}

// Função para expandir/contrair player de música
function toggleMusicPlayer() {
    if (isExpanded) {
        musicPlayer.classList.remove('expanded');
    } else {
        musicPlayer.classList.add('expanded');
        
        // Recolher automaticamente após 5 segundos
        setTimeout(() => {
            if (isExpanded) {
                musicPlayer.classList.remove('expanded');
                isExpanded = false;
            }
        }, 5000);
    }
    isExpanded = !isExpanded;
}

// Função para ajustar volume
function adjustVolume() {
    backgroundMusic.volume = volumeSlider.value / 100;
}

// Função para renderizar as produções
function renderProductions() {
    productionsContainer.innerHTML = '';
    
    productions.forEach(production => {
        const card = document.createElement('div');
        card.className = 'production-card';
        card.innerHTML = `
            <img src="${production.image}" alt="${production.title}" class="production-img">
            <div class="production-content">
                <h3>${production.title}</h3>
                <p>${production.description}</p>
                <a href="#" class="read-more" data-id="${production.id}">Ler mais</a>
            </div>
        `;
        productionsContainer.appendChild(card);
    });
    
    // Adicionar event listeners aos botões "Ler mais"
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            openModal(id);
        });
    });
}

// Função para abrir o modal
function openModal(id) {
    const production = productions.find(p => p.id === id);
    if (production) {
        modalTitle.textContent = production.title;
        modalBody.innerHTML = production.content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Função para fechar o modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para calcular totais
function calculateTotals() {
    const totalPages = productions.reduce((sum, production) => sum + production.pages, 0);
    const totalWords = productions.reduce((sum, production) => sum + production.words, 0);
    
    animateCounter(pageCount, totalPages);
    animateCounter(wordCount, totalWords);
}

// Função para animar contadores
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Menu hamburguer
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Event listeners
closeModal.addEventListener('click', closeModalFunc);
themeToggle.addEventListener('click', toggleTheme);
musicToggle.addEventListener('click', toggleMusic);
miniMusicToggle.addEventListener('click', toggleMusic);
musicPlayer.addEventListener('click', toggleMusicPlayer);
volumeSlider.addEventListener('input', adjustVolume);

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Fechar menu ao redimensionar a tela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Permitir interação do usuário para desbloquear áudio
document.addEventListener('click', () => {
    userInteracted = true;
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderProductions();
    calculateTotals();
    initTheme();
    adjustVolume();
    
    // Configurar música
    backgroundMusic.volume = 0.5;
    backgroundMusic.load();
    
    console.log('Site carregado com sucesso!');
    console.log('Clique no botão de música para reproduzir o áudio.');
});
