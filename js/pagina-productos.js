const products = [
    { name: "Camarón Crudo", price: 36000, img: "img/banner.jpg" },
    { name: "Camarón Precocido", price: 42000, img: "img/news-bg-3.jpg" },
    { name: "Langostino Crudo Entero", price: 65000, img: "img/produc-langostino.jpg" },
    { name: "Langostino Precocido", price: 75000, img: "img/produc-langostino-pre.jpg" },
    { name: "Filete de Tilapia", price: 21000, img: "img/filetes.jpg" },
    { name: "Salmón Porción Filete", price: 64000, img: "img/catalogo-salmon.jpg" },
    { name: "Mojarra", price: 19500, img: "img/mojarra.jpg" },
    { name: "Pargo Rojo", price: 38000, img: "img/7.jpg" },
    { name: "Surimi Entero", price: 9000, img: "img/16.jpg" },
    { name: "Anillos Illex", price: 20000, img: "img/anillos-illex.png" },
    { name: "Mixtura", price: 18000, img: "img/news-bg-6.jpg" },
    { name: "Bagre Basa Entero", price: 11000, img: "img/sect-prod-4.jpg" },
];

const productsPerPage = 4;
let currentPage = 1;

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = products.slice(start, end);

    productsToShow.forEach((product) => {
    productContainer.innerHTML += `
        <div class="col">
        <div class="card product-card h-100">
            <img src="${product.img}" class="card-img-top catalog-img img-fluid" alt="${product.name}">
            <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text text-success fw-bold">$${product.price.toLocaleString()} / kg</p>
            <button class="btn btn-primary btn-sm">Añadir al carrito</button>
            </div>
        </div>
        </div>
    `;
    });
}

function setupPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(products.length / productsPerPage);
    
    for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
        <li class="page-item ${i === currentPage ? "active" : ""}">
        <button class="page-link" onclick="changePage(${i})">${i}</button>
        </li>
    `;
    }
}

function changePage(page) {
    currentPage = page;
    displayProducts();
    setupPagination();


    window.scrollTo({ top: 0, behavior: "smooth" });
}

displayProducts();
setupPagination();