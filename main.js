class Product {
    constructor() {
        this.products = []
    }
    static id = 0
    addProduct(title, descripcion, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }
        const newProduct = {
            title, descripcion, price, code, image, stock,

        }
        if (!Object.values(newProduct).includes(undefined)) {

            Product.id++
            this.products.push({ ...newProduct, id: Product.id });
        } else
            console.log('Todos los campos son requeridos');
    }

    getproduct() {
        return this.products;
    }

    Existe(id) {
        return (this.products.find((producto) => producto.id === id))
    }


    getProductById(id) {
        !this.Existe(id) ? console.log('Not Found') : console.log(this.Existe(id));
    }
}

const productos = new Product();
console.log(productos.getproduct());

productos.addProduct('Cafe La Virginia', 'Este es un cafe unico...', '1000', 'Lavirginia.jpg', 'cf24', '1');
productos.addProduct('Cafe Nescafe', 'Este cafe tiene un aroma...', '1200', 'Nescafe.jpg', 'nfc24', '5');
productos.addProduct('Cafe Dolca', 'Este tipo de cafe es..', '1300', 'Dolca.jpg', 'cd212',);



console.log(productos.getproduct());

productos.getProductById(2);
productos.getProductById(1);
productos.getProductById(3)