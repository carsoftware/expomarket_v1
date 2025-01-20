const increaseCount = (id) => {
    const input = document.getElementById(`product-count-${id}`);
    input.value = parseInt(input.value) + 1;
  };

  const decreaseCount = (id) => {
    const input = document.getElementById(`product-count-${id}`);
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  };

  // Título animado al hacer scroll
  window.addEventListener("scroll", () => {
    const title = document.getElementById("catalog-title");
    if (window.scrollY > 100) {
      title.classList.add("visible-title", "animate__fadeInUp");
    }
  });