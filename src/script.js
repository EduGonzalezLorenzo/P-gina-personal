// Se obtiene y guarda el botón de modo oscuro
const btn = document.querySelector('.btn-toggle');
// Se comprueba que exista.
if (btn) {
    btn.addEventListener('click', function () {
        const modeLabel = document.getElementById("darkMode");
        // Si existe se pone en modo noche si no estaba activado. Si lo estaba se vuelve al modo por defecto.
        if(document.body.classList.toggle('dark-theme')){
            modeLabel.innerHTML = "Modo luminoso";
        } else {
            modeLabel.innerHTML = "Modo oscuro";
        }
    })
}

onresize = (evt) => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const menu = document.getElementById('menu-list');
    const menuTitle = document.getElementById('menu-title');
    if (vw <  768) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}