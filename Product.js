// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "Laptop Dell XPS 13", 25000000, 5, "Electronics", true),
  new Product(2, "iPhone 15 Pro", 30000000, 8, "Electronics", true),
  new Product(3, "Sony Headphones WH-1000XM5", 8500000, 12, "Accessories", true),
  new Product(4, "USB-C Cable", 500000, 50, "Accessories", true),
  new Product(5, "Wireless Mouse", 1500000, 0, "Accessories", false),
  new Product(6, 'Samsung Monitor 27"', 5500000, 3, "Electronics", true),
  new Product(7, "Keyboard Mechanical", 2500000, 7, "Accessories", true),
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
var productNamePrice = [];
for (var i = 0; i < products.length; i++) {
  productNamePrice[i] = {
    name: products[i].name,
    price: products[i].price,
  };
}

console.log("=== Câu 3: Mảng name, price của mỗi sản phẩm ===");
console.log(productNamePrice);
console.log("");

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
var productsInStock = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].quantity > 0) {
    productsInStock.push(products[i]);
  }
}

console.log("=== Câu 4: Sản phẩm còn hàng trong kho ===");
console.log(productsInStock);
console.log("");

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
var hasExpensiveProduct = false;
for (var i = 0; i < products.length; i++) {
  if (products[i].price >= 30000000) {
    hasExpensiveProduct = true;
    break;
  }
}

console.log("=== Câu 5: Kiểm tra sản phẩm có giá >= 30.000.000 ===");
console.log("Có sản phẩm giá >= 30.000.000: " + hasExpensiveProduct);
if (hasExpensiveProduct) {
  var expensiveProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].price >= 30000000) {
      expensiveProducts.push(products[i].name);
    }
  }
  console.log("Sản phẩm: " + expensiveProducts.join(", "));
}
console.log("");

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
var allAccessoriesAvailable = true;
var accessories = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].category === "Accessories") {
    accessories.push(products[i]);
    if (products[i].isAvailable !== true) {
      allAccessoriesAvailable = false;
    }
  }
}

console.log("=== Câu 6: Kiểm tra tất cả Accessories có sẵn bán ===");
console.log("Tất cả Accessories đều có sẵn bán: " + allAccessoriesAvailable);
console.log("Chi tiết Accessories:");
for (var i = 0; i < accessories.length; i++) {
  console.log(
    "  " + accessories[i].name + " (Sẵn: " + accessories[i].isAvailable + ")",
  );
}
console.log("");

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
var totalInventoryValue = 0;
for (var i = 0; i < products.length; i++) {
  totalInventoryValue =
    totalInventoryValue + products[i].price * products[i].quantity;
}

console.log("=== Câu 7: Tính tổng giá trị kho hàng ===");
console.log(
  "Tổng giá trị kho hàng: " +
    totalInventoryValue.toLocaleString("vi-VN") +
    " VND",
);
console.log("Chi tiết giá trị từng sản phẩm:");
for (var i = 0; i < products.length; i++) {
  var value = products[i].price * products[i].quantity;
  console.log(
    "  " + products[i].name + ": " + value.toLocaleString("vi-VN") + " VND",
  );
}
console.log("");

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("=== Câu 8: Duyệt mảng bằng for...of ===");
console.log("Tên sản phẩm - Danh mục - Trạng thái");
for (const product of products) {
  console.log(
    `${product.name} - ${product.category} - ${product.isAvailable ? "Còn bán" : "Hết bán"}`,
  );
}
console.log("");

// Câu 9: Dùng for...in để:
console.log("=== Câu 9: Dùng for...in ===");
console.log("--- In ra tên các thuộc tính của sản phẩm đầu tiên: ---");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`  ${key}: ${firstProduct[key]}`);
}
console.log("");

console.log("--- In ra giá trị kho hàng của từng sản phẩm: ---");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const inventoryValue = product.price * product.quantity;
  console.log(
    `  ${product.name}: ${inventoryValue.toLocaleString("vi-VN")} VND`,
  );
}
console.log("");

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
var availableInStockProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].isAvailable === true && products[i].quantity > 0) {
    availableInStockProducts.push(products[i].name);
  }
}

console.log("=== Câu 10: Danh sách sản phẩm đang bán và còn hàng ===");
console.log(availableInStockProducts);
console.log("");

// Export cho Node.js nếu cần sử dụng trong module khác
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Product, products };
}
