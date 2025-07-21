let cartCount = 0;
document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('Añadir')) {
        btn.addEventListener('click', () => {
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
            alert('Producto añadido al carrito.');
        });
    }
});

// Validación y alerta del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente, ¡gracias por contactarnos!');
    this.reset();
});
