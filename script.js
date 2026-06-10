document.addEventListener('DOMContentLoaded', function() {
    const campoSenha = document.getElementById('password');
    const btnMostrarSenha = document.getElementById('btn-mostrar-senha');
    const formulario = document.getElementById('form-login');

    if (btnMostrarSenha && campoSenha) {
        btnMostrarSenha.addEventListener('click', function() {
            if (campoSenha.type === 'password') {
                campoSenha.type = 'text';
            } else {
                campoSenha.type = 'password';
            }
        });
    }

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const email = document.getElementById('email').value;
            console.log('Tentativa de login para:', email);
        });
    }
});
