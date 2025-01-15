// Función para mostrar el contenido correspondiente
function showContent(tabIndex) {
    // Ocultar todos los contenidos
    const contents2 = document.querySelectorAll('.tab-content2');
    contents2.forEach(content => content.classList.remove('active-content2'));

    // Eliminar la clase activa de las pestañas
    const tabs2 = document.querySelectorAll('.tab-btn');
    tabs2.forEach(tab => tab.classList.remove('active-tabb'));

    // Mostrar el contenido correspondiente
    const content = document.getElementById('content' + tabIndex);
    if (content) {
        content.classList.add('active-content2');
    }

    // Agregar la clase activa a la pestaña seleccionada
    const tab = tabs2[tabIndex - 1];  // El índice de las pestañas comienza en 0
    if (tab) {
        tab.classList.add('active-tabb');
    }
  }