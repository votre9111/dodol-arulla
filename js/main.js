document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('header nav');

  if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener('click', () => {
      nav.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  }

  // Cart Modal
  const cartModal = document.querySelector('.cart-modal');
  const cartButton = document.querySelector('.cart-button');
  const closeCart = document.querySelector('.close-cart');

  if (cartButton && cartModal && closeCart) {
    cartButton.addEventListener('click', () => {
      cartModal.style.display = 'block';
    });

    closeCart.addEventListener('click', () => {
      cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target == cartModal) {
        cartModal.style.display = 'none';
      }
    });
  }

  // Shopping Cart Logic
  let cart = [];
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalAmount = document.getElementById('cart-total-amount');
  const cartCount = document.querySelector('.cart-count');

  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    renderCart();
  }

  function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
  }

  function renderCart() {
    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '';
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <p>${item.name} (x${item.quantity})</p>
          <p>Rp ${item.price * item.quantity}</p>
          <button class="remove-from-cart" data-name="${item.name}">Hapus</button>
        `;
        cartItemsContainer.appendChild(cartItem);
      });

      const removeButtons = document.querySelectorAll('.remove-from-cart');
      removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          const name = event.target.getAttribute('data-name');
          removeFromCart(name);
        });
      });
    }

    updateCartTotal();
    updateCartCount();
  }

  function updateCartTotal() {
    if (cartTotalAmount) {
      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      cartTotalAmount.textContent = `Rp ${total}`;
    }
  }

  function updateCartCount() {
    if (cartCount) {
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      cartCount.textContent = totalItems;
    }
  }

  document.body.addEventListener('add-to-cart', (event) => {
    const { name, price } = event.detail;
    addToCart(name, price);
  });

  const checkoutButton = document.querySelector('.checkout-button');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      // Temporarily disable checkout functionality
      alert('Halaman checkout sedang dalam pengembangan.');
      // window.location.href = 'checkout.html';
    });
  }
});
