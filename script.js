// ... (o array productions permanece igual) ...

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site inicializando...');
    
    // Elementos DOM - com verificações robustas
    const elements = {
        productionsContainer: document.getElementById('productions-container'),
        modal: document.getElementById('production-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        closeModal: document.getElementById('close-modal'),
        productionCount: document.getElementById('production-count'),
        pageCount: document.getElementById('page-count'),
        wordCount: document.getElementById('word-count'),
        themeToggle: document.getElementById('theme-toggle'),
        musicToggle: document.getElementById('music-toggle'),
        miniMusicToggle: document.getElementById('mini-music-toggle'),
        volumeSlider: document.getElementById('volume-slider'),
        backgroundMusic: document.getElementById('background-music'),
        musicPlayer: document.getElementById('music-player'),
        playIcon: document.getElementById('play-icon')
    };

    // Verificar elementos críticos
    console.log('🔍 Verificando elementos DOM...');
    Object.keys(elements).forEach(key => {
        if (!elements[key]) {
            console.warn(`⚠️ Elemento não encontrado: ${key}`);
        } else {
            console.log(`✅ Elemento encontrado: ${key}`);
        }
    });

    // Estado
    let isPlaying = false;
    let isExpanded = false;
    let audioElement = null;

    // Função para inicializar áudio
    function initAudio() {
        console.log('🔊 Inicializando sistema de áudio...');
        
        // Usar o elemento de áudio existente ou criar um novo
        audioElement = elements.backgroundMusic || new Audio();
        audioElement.loop = true;
        
        // Configurar volume inicial
        if (elements.volumeSlider) {
            audioElement.volume = elements.volumeSlider.value / 100;
        } else {
            audioElement.volume = 0.5;
        }
        
        // URLs alternativas para música
        const musicUrls = [
            'https://assets.mixkit.co/music/preview/mixkit-chill-abstract-loop-229.mp3',
            'https://assets.mixkit.co/music/preview/mixkit-vibes-126.mp3',
            'https://assets.mixkit.co/music/preview/mixkit-slow-trap-175.mp3'
        ];

        let currentUrlIndex = 0;
        
        function tryNextUrl() {
            if (currentUrlIndex < musicUrls.length) {
                console.log(`🎵 Tentando carregar áudio: ${musicUrls[currentUrlIndex]}`);
                audioElement.src = musicUrls[currentUrlIndex];
                audioElement.load();
                currentUrlIndex++;
            } else {
                console.warn('❌ Todas as URLs de áudio falharam. Música não disponível.');
                disableMusicControls();
            }
        }

        audioElement.addEventListener('error', function() {
            console.warn(`❌ Falha ao carregar áudio, tentando próxima URL...`);
            tryNextUrl();
        });

        audioElement.addEventListener('canplaythrough', function() {
            console.log('✅ Áudio carregado com sucesso');
            // Atualizar UI para mostrar que o áudio está pronto
            if (elements.playIcon) {
                elements.playIcon.className = 'fas fa-play';
            }
        });

        // Iniciar com a primeira URL
        tryNextUrl();
    }

    // Função para desativar controles de música
    function disableMusicControls() {
        console.log('🔇 Desativando controles de música');
        if (elements.musicToggle) elements.musicToggle.style.display = 'none';
        if (elements.miniMusicToggle) elements.miniMusicToggle.style.display = 'none';
        if (elements.musicPlayer) elements.musicPlayer.style.display = 'none';
    }

    // Função para tocar/pausar música
    function toggleMusic() {
        console.log('🎵 Alternando estado da música');
        
        if (!audioElement) {
            console.log('Áudio não disponível');
            return;
        }

        if (isPlaying) {
            console.log('⏸️ Pausando música');
            audioElement.pause();
            updateMusicUI(false);
            isPlaying = false;
        } else {
            console.log('▶️ Reproduzindo música');
            const playPromise = audioElement.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('✅ Música iniciada com sucesso');
                    updateMusicUI(true);
                    isPlaying = true;
                }).catch(error => {
                    console.log('🔇 Interação do usuário necessária para reproduzir áudio');
                    showAudioActivationPrompt();
                });
            }
        }
    }

    // Função para mostrar prompt de ativação de áudio
    function showAudioActivationPrompt() {
        console.log('👆 Mostrando prompt de ativação de áudio');
        
        // Usar o player de música como prompt
        if (elements.musicPlayer) {
            elements.musicPlayer.style.background = 'rgba(255, 215, 0, 0.2)';
            elements.musicPlayer.style.borderColor = '#ffd700';
            
            // Reset após 3 segundos
            setTimeout(() => {
                if (elements.musicPlayer) {
                    elements.musicPlayer.style.background = '';
                    elements.musicPlayer.style.borderColor = '';
                }
            }, 3000);
        }
    }

    // Função para atualizar a UI da música
    function updateMusicUI(playing) {
        console.log(`🎛️ Atualizando UI da música: ${playing ? 'playing' : 'paused'}`);
        
        if (playing) {
            // Atualizar ícone do botão principal
            if (elements.musicToggle) {
                elements.musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                elements.musicToggle.classList.add('playing', 'active');
            }
            // Atualizar ícone do botão mini
            if (elements.playIcon) {
                elements.playIcon.className = 'fas fa-pause';
            }
            if (elements.miniMusicToggle) {
                elements.miniMusicToggle.classList.add('active');
            }
            if (elements.musicPlayer) {
                elements.musicPlayer.classList.add('playing');
            }
        } else {
            // Atualizar ícone do botão principal
            if (elements.musicToggle) {
                elements.musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                elements.musicToggle.classList.remove('playing', 'active');
            }
            // Atualizar ícone do botão mini
            if (elements.playIcon) {
                elements.playIcon.className = 'fas fa-play';
            }
            if (elements.miniMusicToggle) {
                elements.miniMusicToggle.classList.remove('active');
            }
            if (elements.musicPlayer) {
                elements.musicPlayer.classList.remove('playing');
            }
        }
    }

    // ... (as outras funções permanecem iguais) ...

    // Função para ajustar volume
    function adjustVolume() {
        if (audioElement && elements.volumeSlider) {
            const volume = elements.volumeSlider.value / 100;
            audioElement.volume = volume;
            console.log(`🔊 Volume ajustado para: ${volume}`);
        }
    }

    // Função para expandir player
    function toggleMusicPlayer() {
        isExpanded = !isExpanded;
        if (elements.musicPlayer) {
            elements.musicPlayer.classList.toggle('expanded', isExpanded);
            console.log(`🎵 Player ${isExpanded ? 'expandido' : 'recolhido'}`);
        }
    }

    // ... (restante do código permanece igual) ...

    // Configurar eventos
    function setupEventListeners() {
        console.log('🔗 Configurando event listeners...');
        
        if (elements.closeModal) {
            elements.closeModal.addEventListener('click', closeModal);
            console.log('✅ Listener do modal configurado');
        }
        
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
            console.log('✅ Listener do tema configurado');
        }
        
        if (elements.musicToggle) {
            elements.musicToggle.addEventListener('click', toggleMusic);
            console.log('✅ Listener da música principal configurado');
        }
        
        if (elements.miniMusicToggle) {
            elements.miniMusicToggle.addEventListener('click', toggleMusic);
            console.log('✅ Listener da música mini configurado');
        }
        
        if (elements.musicPlayer) {
            elements.musicPlayer.addEventListener('click', toggleMusicPlayer);
            console.log('✅ Listener do player configurado');
        }
        
        if (elements.volumeSlider) {
            elements.volumeSlider.addEventListener('input', adjustVolume);
            console.log('✅ Listener do volume configurado');
        }

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });

        // Ativar áudio na primeira interação do usuário
        document.addEventListener('click', function initAudioOnInteraction() {
            console.log('👆 Interação do usuário detectada');
            if (audioElement && !isPlaying) {
                audioElement.play().then(() => {
                    updateMusicUI(true);
                    isPlaying = true;
                    console.log('✅ Áudio ativado por interação do usuário');
                }).catch(error => {
                    console.log('❌ Falha ao ativar áudio:', error);
                });
            }
            // Remover este listener após a primeira interação
            document.removeEventListener('click', initAudioOnInteraction);
        }, { once: true });
    }

    // Inicializar tudo
    function init() {
        console.log('🎯 Inicializando componentes...');
        renderProductions();
        calculateTotals();
        initTheme();
        initAudio();
        setupEventListeners();
        
        console.log('✅ Site inicializado com sucesso!');
    }

    // Iniciar
    init();
});
