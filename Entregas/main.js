const fs = require('fs');

export class Product {
    constructor(filePath) {
        this.products = [];
        this.path = filePath;
        this.CargarProducts();
    }

    CargarProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    saveProducts() {
        try {
            const data = JSON.stringify(this.products, null, 2);
            fs.writeFileSync(this.path, data);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    getNextId() {
        const maxId = this.products.reduce((max, product) => Math.max(max, product.id), 0);
        return maxId + 1;
    }

    agregarProduct(newProduct) {
        const { code } = newProduct;

        if (this.products.find((product) => product.code === code)) {
            console.log(`El código ${code} está repetido.`);
            return;
        }

        const newId = this.getNextId();
        this.products.push({ ...newProduct, id: newId });
        this.saveProducts();
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            console.log('Producto no encontrado.');
        } else {
            console.log(product);
        }
    }

    updateProduct(id, field, value) {
        const product = this.products.find((product) => product.id === id);

        if (!product) {
            console.log('Producto no encontrado.');
            return;
        }

        product[field] = value;
        this.saveProducts();
    }

    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);

        if (index === -1) {
            console.log('Producto no encontrado.');
            return;
        }

        this.products.splice(index, 1);
        this.saveProducts();
    }
}

const productos = new Product('productos.json');

console.log(productos.getProducts());

productos.agregarProduct({
    title: 'Cafe La Virginia',
    descripcion: 'Este es un cafe unico...',
    price: '1000',
    image: 'Lavirginia.jpg',
    code: 'cf24',
    stock: '1'
});

productos.agregarProduct({
    title: 'Cafe Nescafe',
    descripcion: 'Este cafe tiene un aroma...',
    price: '1200',
    image: 'Nescafe.jpg',
    code: 'nfc24',
    stock: '5'
});

productos.agregarProduct({
    title: 'Cafe Dolca',
    descripcion: 'Este tipo de cafe es..',
    price: '1300',
    image: 'Dolca.jpg',
    code: 'cd212',
    stock: '3'
});

console.log(productos.getProducts());

productos.getProductById(2);
productos.getProductById(1);
productos.getProductById(3);

productos.updateProduct(1, 'price', '1100');
productos.getProductById(1);

productos.deleteProduct(2);
console.log(productos.getProducts());
