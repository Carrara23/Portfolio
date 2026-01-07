document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção de Elementos
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const contatoForm = document.querySelector('#contact form');
    const mensagemSucesso = document.querySelector('#msg-sucesso');

    // 2. Menu Mobile
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // 3. Envio do Formulário
    contatoForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contatoForm);

        try {
            const response = await fetch(contatoForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Exibe o Pop-up
                mensagemSucesso.style.display = 'block';
                contatoForm.reset();

                // Esconde o Pop-up
                setTimeout(() => {
                    mensagemSucesso.style.display = 'none';
                }, 5000);
            } else {
                alert('Ops! Algo deu errado ao enviar. Verifique se o e-mail está correto.');
            }
        } catch (error) {
            alert('Erro de conexão com o servidor.');
        }
    });

    // 4. Função para fechar
    window.fecharPopup = () => {
        mensagemSucesso.style.display = 'none';
    };
});