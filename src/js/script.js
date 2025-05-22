// Dados mockados para simular o back-end
let mockProducts = [
  {
    id: 1,
    name: "Produto 1",
    description: "Descrição do produto 1",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/150"
  }
];

let mockUsers = [
  {
    id: 1,
    name: "Luis Fernando",
    email: "luisfernando@gmail.com"
  },
  {
    id: 2,
    name: "Millena Campos de Queiroz",
    email: "millenaqueiroz@gmail.com"
  }
];

let mockOrders = [
  {
    id: 1,
    userName: "Luis Fernando",
    total: 79.98,
    date: "2025-05-20"
  },
  {
    id: 2,
    userName: "Millena Campos de Queiroz",
    total: 49.99,
    date: "2025-05-21"
  }
];

let mockReports = {
  totalSales: 129.97,
  orderCount: 2,
  productsSold: 3
};

// Função para carregar produtos
function loadProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = mockProducts.map(product => `
    <div class="product-card">
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>R$ ${product.price.toFixed(2)}</p>
    </div>
  `).join('');

  const form = document.getElementById('product-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProduct = {
        id: mockProducts.length + 1,
        name: document.getElementById('product-name').value,
        description: document.getElementById('product-description').value,
        price: parseFloat(document.getElementById('product-price').value),
        imageUrl: document.getElementById('product-image').value
      };
      mockProducts.push(newProduct);
      form.reset();
      loadProducts();
    });
  }
}

// Função para carregar usuários
function loadUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = mockUsers.map(user => `
    <div class="user-card">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    </div>
  `).join('');

  const form = document.getElementById('user-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newUser = {
        id: mockUsers.length + 1,
        name: document.getElementById('user-name').value,
        email: document.getElementById('user-email').value
      };
      mockUsers.push(newUser);
      form.reset();
      loadUsers();
    });
  }
}

// Função para carregar pedidos
function loadOrders() {
  const orderList = document.getElementById('order-list');
  orderList.innerHTML = mockOrders.map(order => `
    <div class="order-card">
      <h3>Pedido #${order.id}</h3>
      <p>Usuário: ${order.userName}</p>
      <p>Total: R$ ${order.total.toFixed(2)}</p>
      <p>Data: ${new Date(order.date).toLocaleDateString()}</p>
    </div>
  `).join('');
}

// Função para carregar relatórios
function loadReports() {
  const reportList = document.getElementById('report-list');
  reportList.innerHTML = `
    <div class="report-card">
      <h3>Relatório de Vendas</h3>
      <p>Total de Vendas: R$ ${mockReports.totalSales.toFixed(2)}</p>
      <p>Número de Pedidos: ${mockReports.orderCount}</p>
      <p>Produtos Vendidos: ${mockReports.productsSold}</p>
    </div>
  `;
}