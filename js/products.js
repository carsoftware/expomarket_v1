const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Producto añadido al carrito');
      });
    });

    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const p = item.nextElementSibling;
        p.classList.toggle('active');
        item.classList.toggle('active');
      });
    });