document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      // 1. Encontrar el contenedor principal (.container) de este botón
      const container = button.closest('.container');
      
      // 2. Encontrar el bloque de contenido derecho dentro de ese contenedor
      const content = container.querySelector('.collapsible-content');
      
      // 3. Alternar las clases CSS para ejecutar la animación
      button.classList.toggle('collapsed');
      content.classList.toggle('collapsed');
    });
  });