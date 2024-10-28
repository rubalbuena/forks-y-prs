import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase:number) {
    let productos = products.filter(p => p.price <= precioBase)
    return productos ;
   }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    // pista: push no suma muchos items (agrega de a uno)
    newProducts.forEach(p => this.products.push(p))
  }
}

export { User, Product };
