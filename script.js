document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', e => {
            const name = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');

            if (!name.value.trim()) {
                alert('Por favor, insira seu nome.');
                e.preventDefault();
                return;
            }

            if (!email.value.trim() || !email.value.includes('@') || !email.value.includes('.')) {
                alert('Por favor, insira um e-mail válido.');
                e.preventDefault();
                return;
            }

            if (!message.value.trim()) {
                alert('Por favor, digite sua mensagem.');
                e.preventDefault();
                return;
            }

            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        });
    }
});
