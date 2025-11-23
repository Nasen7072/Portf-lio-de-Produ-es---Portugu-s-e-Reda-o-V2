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
    // ... (mantenha os outros 13 itens iguais)
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

// Estado global
let isPlaying = false;
let isExpanded = false;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando...');
    
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

    // Verificar se todos os elementos existem
    if (!productionsContainer) {
        console.error('Elemento productions-container não encontrado');
        return;
    }

    // Função para alternar modo claro/escuro
    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        
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

    // Função SIMPLES para tocar/pausar música
    function toggleMusic() {
        console.log('Toggle music clicked, isPlaying:', isPlaying);
        
        if (isPlaying) {
            // Pausar música
            backgroundMusic.pause();
            playIcon.className = 'fas fa-play';
            if (musicToggle) musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            isPlaying = false;
            console.log('Música pausada');
        } else {
            // Tentar tocar música - abordagem direta
            console.log('Tentando reproduzir música...');
            
            // Primeiro, certifique-se de que o áudio está carregado
            if (backgroundMusic.readyState < 3) {
                console.log('Áudio ainda não carregado, tentando carregar...');
                backgroundMusic.load();
            }
            
            // Tentar reproduzir
            const playPromise = backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Sucesso
                    console.log('Música reproduzida com sucesso');
                    playIcon.className = 'fas fa-pause';
                    if (musicToggle) musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                    isPlaying = true;
                }).catch(error => {
                    // Erro - tentar abordagem alternativa
                    console.error('Erro ao reproduzir:', error);
                    showSimpleError();
                    
                    // Tentar novamente após interação do usuário
                    document.addEventListener('click', function retryPlay() {
                        backgroundMusic.play().then(() => {
                            console.log('Música reproduzida após interação do usuário');
                            playIcon.className = 'fas fa-pause';
                            if (musicToggle) musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                            isPlaying = true;
                            document.removeEventListener('click', retryPlay);
                        }).catch(e => {
                            console.error('Ainda não foi possível reproduzir:', e);
                        });
                    }, { once: true });
                });
            }
        }
    }

    // Função simples para mostrar erro
    function showSimpleError() {
        const existingError = document.querySelector('.music-error');
        if (existingError) return;
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'music-error';
        errorDiv.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: #e94560; color: white; padding: 15px; border-radius: 8px; z-index: 10000; box-shadow: 0 4px 12px rgba(0,0,0,0.3); max-width: 300px; font-family: Arial, sans-serif;">
                <div style="margin-bottom: 8px; font-weight: bold; font-size: 16px;">🎵 Clique em qualquer lugar da página para ativar o áudio</div>
                <div style="font-size: 14px; line-height: 1.4;">
                    Alguns navegadores exigem interação para reproduzir áudio.
                    Clique em qualquer lugar da página e depois no botão de música novamente.
                </div>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    // Função para expandir/contrair player de música
    function toggleMusicPlayer() {
        if (isExpanded) {
            musicPlayer.classList.remove('expanded');
        } else {
            musicPlayer.classList.add('expanded');
            
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
        if (backgroundMusic && volumeSlider) {
            backgroundMusic.volume = volumeSlider.value / 100;
        }
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
        if (production && modal && modalTitle && modalBody) {
            modalTitle.textContent = production.title;
            modalBody.innerHTML = production.content;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Função para fechar o modal
    function closeModalFunc() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Função para calcular totais
    function calculateTotals() {
        const totalPages = productions.reduce((sum, production) => sum + production.pages, 0);
        const totalWords = productions.reduce((sum, production) => sum + production.words, 0);
        
        if (pageCount) animateCounter(pageCount, totalPages);
        if (wordCount) animateCounter(wordCount, totalWords);
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

    // Configurar eventos
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navMenu) navMenu.classList.toggle('active');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }

    if (miniMusicToggle) {
        miniMusicToggle.addEventListener('click', toggleMusic);
    }

    if (musicPlayer) {
        musicPlayer.addEventListener('click', toggleMusicPlayer);
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', adjustVolume);
    }

    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Fechar menu ao redimensionar
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
        }
    });

    // Configurar áudio
    if (backgroundMusic) {
        backgroundMusic.volume = 0.5;
        
        // Eventos de debug do áudio
        backgroundMusic.addEventListener('loadeddata', () => {
            console.log('Áudio carregado');
        });
        
        backgroundMusic.addEventListener('error', (e) => {
            console.error('Erro no áudio:', e);
            console.log('Código de erro:', backgroundMusic.error);
        });
        
        backgroundMusic.addEventListener('canplay', () => {
            console.log('Áudio pode ser reproduzido');
        });
    }

    // Inicializar
    renderProductions();
    calculateTotals();
    initTheme();
    
    console.log('Site inicializado com sucesso!');
});

// HTML alternativo para o áudio (adicione isso ao HTML se ainda não tiver)
/*
<audio id="background-music" loop>
    <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_1d212bc2f8.mp3?filename=relaxing-calm-acoustic-guitar-amp-pad-143039.mp3" type="audio/mpeg">
    <source src="https://assets.mixkit.co/music/preview/mixkit-chill-abstract-loop-229.mp3" type="audio/mpeg">
</audio>
*/
