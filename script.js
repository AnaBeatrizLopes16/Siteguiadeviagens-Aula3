document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const pane = tabPanes[index];
            const spinner = pane.querySelector('.spinner-border');
            const content = pane.querySelector('.conteudo');

            content.classList.add('d-none');
            spinner.style.display = 'inline-block';

            setTimeout(() => {
                spinner.style.display = 'none';
                content.classList.remove('d-none');

                mostrarToast(`Você abriu a aba: ${btn.textContent}`);
            }, 1000);
        });
    });

    function mostrarToast(mensagem) {
        const toastContainer = document.getElementById('toastContainer');
        const toastEl = document.createElement('div');
        toastEl.className = 'toast show';
        toastEl.setAttribute('role', 'alert');
        toastEl.innerHTML = `<div class="toast-body">${mensagem}</div>`;
        toastContainer.appendChild(toastEl);

        setTimeout(() => {
            toastEl.remove();
        }, 4000);
    }

    function mostrarHoraAtual() {
        const agora = new Date();
        const hora = agora.toLocaleTimeString();
        mostrarToast(`Hora atual: ${hora}`);
    }

    mostrarHoraAtual();
    setInterval(mostrarHoraAtual, 10000);
});
