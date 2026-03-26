
// TYPES Y UNIONS


// Qué: métodos de pago disponibles
// Para: definir cómo se paga una compra
// Impacto: evita valores inválidos
type PaymentMethod = "cash" | "card" | "transfer";


//  INTERFACES (ENTIDADES)


// Qué: representa un producto de ferretería
// Para: gestionar inventario
// Impacto: estructura clara de los productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// Qué: representa una venta
// Para: registrar compras de clientes
// Impacto: control de ingresos
export interface Sale {
  id: number;
  products: Product[];
  total: number;
  status: "pending" | "completed" | "cancelled"; // 👈 literal
  paymentMethod: PaymentMethod;
}


//  FUNCIONES


// Qué: calcula el total de la venta
// Para: saber cuánto debe pagar el cliente
// Impacto: evita errores en cálculos
export function calculateTotal(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

// Qué: crea una nueva venta
// Para: facilitar el registro de compras
// Impacto: reutilización de código
export function createSale(
  id: number,
  products: Product[],
  paymentMethod: PaymentMethod
): Sale {
  return {
    id,
    products,
    total: calculateTotal(products),
    status: "pending",
    paymentMethod,
  };
}

// Qué: cambia el estado de una venta
// Para: actualizar su proceso
// Impacto: control del flujo del sistema
export function updateSaleStatus(
  sale: Sale,
  newStatus: "pending" | "completed" | "cancelled"
): Sale {
  sale.status = newStatus;
  return sale;
}

// Qué: reduce el stock de los productos vendidos
// Para: mantener inventario actualizado
// Impacto: evita vender productos inexistentes
export function updateStock(products: Product[]): void {
  products.forEach(product => {
    if (product.stock > 0) {
      product.stock -= 1;
    } else {
      console.log(`⚠️ Sin stock: ${product.name}`);
    }
  });
}


//  PRUEBA DEL SISTEMA


// Productos de ejemplo
const product1: Product = {
  id: 1,
  name: "Martillo",
  price: 15000,
  stock: 10,
};

const product2: Product = {
  id: 2,
  name: "Taladro",
  price: 120000,
  stock: 5,
};

const product3: Product = {
  id: 3,
  name: "Caja de clavos",
  price: 5000,
  stock: 20,
};

// Crear venta
const sale1 = createSale(1, [product1, product2, product3], "cash");

// Actualizar stock
updateStock(sale1.products);

// Completar venta
updateSaleStatus(sale1, "completed");

// Mostrar resultado
console.log("🧾 Venta realizada:");
console.log(sale1);

console.log("📦 Stock actualizado:");
console.log(product1, product2, product3);