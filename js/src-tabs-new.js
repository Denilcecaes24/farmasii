function showContent(tabIndex) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-content2');
    contents.forEach(content => content.classList.remove('active-content2'));
  
    // Eliminar la clase activa de las pestañas
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active-tabb'));
  
    // Mostrar el contenido correspondiente
    if (tabIndex === 1) {
      // Activar el contenido de la primera pestaña (arriba y abajo)
      document.getElementById('content1-top').classList.add('active-content2');
      document.getElementById('content2-top').classList.add('active-content2');
    } else if (tabIndex === 2) {
      // Activar el contenido de la segunda pestaña (arriba y abajo)
      document.getElementById('content1-bottom').classList.add('active-content2');
      document.getElementById('content2-bottom').classList.add('active-content2');
    }
  
    // Agregar la clase activa a la pestaña seleccionada
    const tab = tabs[tabIndex - 1];  // El índice de las pestañas comienza en 0
    if (tab) {
      tab.classList.add('active-tabb');
    }
  }