/ Obter o modal/
var modal = document.getElementById("myModal");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var cartCount = 0; // Contador de itens no carrinho

function addToCart() {
    cartCount++; // Incrementa o contador
    document.getElementById("cart-count").innerText = cartCount; // Atualiza o contador no HTML
}

// Adicionando evento de clique nas imagens dos produtos
var produtos = document.querySelectorAll('.produto img');
produtos.forEach(function(produto) {
    produto.addEventListener('click', addToCart); // Adiciona evento de clique
});
function toggleNavbar() {
  var navbar = document.getElementById("myNavbar");
  if (navbar.style.left === "0px") {
      navbar.style.left = "-250px"; // Esconde a barra
  } else {
      navbar.style.left = "0px"; // Mostra a barra
  }
}
let currentIndex = 0;

  function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Ajusta índice se for menor que 0 ou maior que o total
    if (index < 0) {
      currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Move o carrossel
    const offset = currentIndex * -310; // 300px (largura) + 10px (margem)
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }