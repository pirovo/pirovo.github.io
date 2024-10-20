document.addEventListener('DOMContentLoaded', function() {
    const expandables = document.querySelectorAll('.expandable');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  
    expandables.forEach(expandable => {
      expandable.addEventListener('click', function() {
        const expanded = document.createElement('div');
        expanded.classList.add('expanded');
        
        // Añadir botón de cierre
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.classList.add('close-button');
        expanded.appendChild(closeButton);
  
        // Clonar el contenido del expandable
        const content = this.cloneNode(true);
        expanded.appendChild(content);
        
        // Mostrar el contenido expandido
        const expandedContent = expanded.querySelector('.expanded-content');
        if (expandedContent) {
          expandedContent.style.display = 'block';
        }
        
        overlay.innerHTML = '';
        overlay.appendChild(expanded);
        overlay.style.display = 'block';
  
        // Evento para cerrar con el botón
        closeButton.addEventListener('click', function(e) {
          e.stopPropagation();
          overlay.style.display = 'none';
        });
      });
    });
  
    // Cerrar al hacer clic en el overlay
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        this.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.page-nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Añadir una animación de desvanecimiento antes de cambiar de página
        document.body.style.opacity = 0;
        
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  });