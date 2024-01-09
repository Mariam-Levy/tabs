const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

// Agregar un evento de click al elemento "about"
about.addEventListener('click', function(e) {
    // Obtener el valor del atributo "data-id" del elemento clickeado
    const id = e.target.dataset.id;

    // Verificar si hay un valor en "id"
    if(id) {
        // Remover la clase "active" de todos los botones
        btns.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Agregar la clase "active" al botón clickeado
        e.target.classList.add('active');

        // Ocultar todos los artículos
        articles.forEach(function(article) {
            article.classList.remove('active');
        });

        // Encontrar el elemento por su ID y agregar la clase "active" para mostrarlo
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})





