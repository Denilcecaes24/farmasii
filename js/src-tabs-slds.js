 // Función para mostrar el contenido correspondiente
 function showContentt(tabIndex) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-contentt');
    contents.forEach(content => content.classList.remove('active-contentt'));

    // Eliminar la clase activa de las pestañas
    const tabs = document.querySelectorAll('.tabb');
    tabs.forEach(tab => tab.classList.remove('active-tabb'));

    // Mostrar el contenido correspondiente
    document.getElementById('contentt' + tabIndex).classList.add('active-contentt');

    // Agregar la clase activa a la pestaña seleccionada
    tabs[tabIndex - 1].classList.add('active-tabb');
  }
