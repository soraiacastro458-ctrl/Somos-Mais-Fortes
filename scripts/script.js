// ===== FUNCIONALIDADES INTERATIVAS =====

// Smooth scroll para links internos
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

// Ativar link de navegação ativo
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Animar elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.5s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e elementos animáveis
document.querySelectorAll('.card, .stat-card, .tipo-card, .ajuda-card, .info-card, .plano-card, .ajudar-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Adicionar classe ao header quando scrollar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Feedback visual para botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Criar ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Adicionar animação de ripple ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Contador de estatísticas com animação
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Iniciar animação de contadores quando entram na viewport
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const numberElement = entry.target.querySelector('.stat-number');
            if (numberElement) {
                const text = numberElement.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (!isNaN(number)) {
                    animateCounter(numberElement, number);
                    entry.target.dataset.animated = 'true';
                }
            }
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// Validação e feedback de formulários (se houver)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar lógica de envio de formulário
        alert('Obrigado por sua mensagem. Entraremos em contato em breve.');
        this.reset();
    });
});

// Função para copiar texto (para contatos)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Adicionar funcionalidade de compartilhamento
function shareContent(title, text, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        alert('Compartilhamento não suportado neste navegador');
    }
}

// Inicializar tooltips (se necessário)
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseover', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        tooltip.style.cssText = `
            position: absolute;
            background-color: #333;
            color: white;
            padding: 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.85rem;
            z-index: 1000;
            white-space: nowrap;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    });
});

// Detectar preferência de tema do sistema
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-theme');
    }
}

// Chamar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Log de inicialização
    console.log('Juntas Somos Mais Fortes - Site carregado com sucesso');
    console.log('Para denunciar violência doméstica, ligue 180');
});

// Service Worker para offline (opcional)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker não disponível:', err);
    });
}

// Monitorar mudanças de conectividade
window.addEventListener('online', () => {
    console.log('Conexão restaurada');
});

window.addEventListener('offline', () => {
    console.log('Sem conexão com a internet');
});

// Função para rastrear eventos (analytics)
function trackEvent(category, action, label) {
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Rastrear cliques em botões de emergência
document.querySelectorAll('a[href="tel:180"], a[href="tel:190"]').forEach(link => {
    link.addEventListener('click', () => {
        const number = link.getAttribute('href').replace('tel:', '');
        trackEvent('emergency', 'call', number);
    });
});

// Função para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para formatar telefone
function formatPhone(phone) {
    return phone.replace(/\D/g, '')
               .replace(/(\d{2})(\d)/, '($1) $2')
               .replace(/(\d{4})(\d)/, '$1-$2')
               .replace(/(\d{4})-(\d{4})(\d)/, '$1-$2-$3');
}

// Exportar funções para uso global
window.juntas = {
    copyToClipboard,
    shareContent,
    trackEvent,
    validateEmail,
    formatPhone
};

console.log('Funções disponíveis em window.juntas');
