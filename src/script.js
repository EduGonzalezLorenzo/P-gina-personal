// Se obtiene y guarda el botón de modo oscuro
const btn = document.querySelector('.btn-toggle');
// Se comprueba que exista.
if (btn) {
    btn.addEventListener('click', function () {
        // Si existe se pone en modo noche si no estaba activado. Si lo estaba se vuelve al modo por defecto.
        if(document.body.classList.toggle('dark-theme')){
            document.getElementById("darkMode").innerHTML = "Modo luminoso";
        } else {
            document.getElementById("darkMode").innerHTML = "Modo oscuro";
        }
    })
}