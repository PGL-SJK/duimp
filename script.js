// ====================================
// SITE EVENTO DUIMP - PGL AGENTE DE CARGAS
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ====================================
    // SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
    // ====================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ====================================
    // ANIMAÇÃO DE ENTRADA DOS CARDS AO SCROLL
    // ====================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, observerOptions);

    // Aplicar animação aos cards
    document.querySelectorAll('.objetivo-card').forEach(card => {
        observer.observe(card);
    });

    // ====================================
    // AJUSTE DE ALTURA DO IFRAME (OPCIONAL)
    // ====================================
    // Detecta quando o Microsoft Forms é carregado e ajusta altura se necessário
    const iframe = document.querySelector('.microsoft-forms-wrapper iframe');
    
    if (iframe) {
        // Listener para mensagens do iframe (se o Forms enviar eventos)
        window.addEventListener('message', function(event) {
            // Verifica se é uma mensagem do Microsoft Forms
            if (event.origin.includes('forms.office.com')) {
                // Você pode adicionar lógica aqui se precisar
                console.log('Microsoft Forms carregado com sucesso');
            }
        });

        // Fallback: garantir que o iframe está visível
        iframe.addEventListener('load', function() {
            console.log('Formulário Microsoft carregado');
        });
    }

    // ====================================
    // ANALYTICS (OPCIONAL)
    // ====================================
    // Se você usar Google Analytics, pode rastrear eventos aqui
    if (typeof gtag !== 'undefined') {
        // Rastrear quando alguém chega na seção de inscrição
        const inscricaoSection = document.getElementById('inscricao');
        if (inscricaoSection) {
            const inscricaoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gtag('event', 'visualizou_formulario', {
                            'event_category': 'engajamento',
                            'event_label': 'formulario_inscricao'
                        });
                        inscricaoObserver.unobserve(inscricaoSection);
                    }
                });
            }, { threshold: 0.5 });
            
            inscricaoObserver.observe(inscricaoSection);
        }
    }

    // ====================================
    // HEADER STICKY COM SOMBRA AO SCROLL
    // ====================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ====================================
    // CONSOLE INFO (PODE REMOVER)
    // ====================================
    console.log('%c🚀 Site Evento DUIMP - PGL Agente de Cargas', 'color: #2d5a2d; font-size: 16px; font-weight: bold;');
    console.log('%cFormulário Microsoft Forms integrado com sucesso!', 'color: #f39c12; font-size: 12px;');
    console.log('%c📞 Contato: (11) 97221-3753', 'color: #666; font-size: 12px;');
});

// ====================================
// FUNÇÕES AUXILIARES
// ====================================

// Função para detectar dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para obter parâmetros da URL (útil para campanhas)
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Exemplo de uso: detectar origem da campanha
const source = getUrlParameter('utm_source');
if (source) {
    console.log('Usuário veio de:', source);
    // Você pode salvar isso ou enviar para analytics
}