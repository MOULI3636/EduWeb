const searchToggle = document.getElementById('search-toggle');
const searchBox = document.getElementById('search-box');

// Toggle search box visibility
searchToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click from propagating to the document
  searchBox.classList.toggle('active');
});

// Close search box when clicking outside
document.addEventListener('click', (event) => {
  if (!searchBox.contains(event.target) && !searchToggle.contains(event.target)) {
    searchBox.classList.remove('active');
  }
});





// Get the cart button and modal elements
document.addEventListener('DOMContentLoaded', function () {
  const cartButton = document.querySelector('.header-action-btn[aria-label="cart"]');
  const cartModal = document.getElementById('cart-modal');
  const closeModal = document.querySelector('.close-modal');

  if (!cartButton || !cartModal || !closeModal) {
    console.error('One or more elements are missing!');
    return;
  }

  // Function to open the modal
  function openCartModal() {
    cartModal.style.display = 'block';
    // Add a small delay to allow the display change to take effect
    setTimeout(() => {
      cartModal.classList.add('active');
    }, 10);
  }

  // Function to close the modal
  function closeCartModal() {
    cartModal.classList.remove('active');
    // Wait for the transition to complete before hiding the modal
    setTimeout(() => {
      cartModal.style.display = 'none';
    }, 300); // Match the duration of the CSS transition
  }

  // Event listener for the cart button
  cartButton.addEventListener('click', openCartModal);

  // Event listener for the close button
  closeModal.addEventListener('click', closeCartModal);

  // Close the modal if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      closeCartModal();
    }
  });
});