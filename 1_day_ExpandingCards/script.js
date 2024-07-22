const contenedorImagenes = document.querySelectorAll('.image');

contenedorImagenes.forEach(element => {
  
  element.addEventListener('click', () => {
    
    // Remover la clase 'activo' de todas las imágenes
    contenedorImagenes.forEach(img => img.classList.remove('activo'));
    
    // Agregar la clase 'activo' al elemento clickeado
    element.classList.add('activo');
  });
});