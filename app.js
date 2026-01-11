let products = [];


// Load JSON
fetch('products.json')
    .then(res => res.json())
    .then(data => {
        products = data;
        renderStore();
        renderAdmin();
    });


// ---------- Store ----------
function renderStore() {
    const el = document.getElementById('products');
    if (!el) return;


    el.innerHTML = '';
    products.forEach(p => {
        el.innerHTML += `<div>${p.name} - $${p.price}</div>`;
    });
}


// ---------- Admin ----------
function renderAdmin() {
    const el = document.getElementById('adminProducts');
    if (!el) return;


    el.innerHTML = '';
    products.forEach((p, i) => {
        el.innerHTML += `
<div>
${p.name} - $${p.price}
<button onclick="removeProduct(${i})">Delete</button>
</div>`;
    });
}


function addProduct() {
    products.push({
        id: Date.now(),
        name: name.value,
        price: price.value
    });


    renderStore();
    renderAdmin();


    alert('Product added (NOT saved to JSON file)');
}


function removeProduct(index) {
    products.splice(index, 1);
    renderStore();
    renderAdmin();
}