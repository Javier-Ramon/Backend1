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

productos.addProduct('Cafe La Virginia', 'Este es un cafe unico...', '1000', 'https://www.lavirginia.com.ar/wp-content/uploads/2021/11/clasico-molido-torrado-1000.jpg', 'cf24', '1');
productos.addProduct('Cafe Nescafe', 'Este cafe tiene un aroma...', '1200', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.santaisabel.cl%2Fcafe-instantaneo-nescafe-200-g-fina-seleccion%2Fp&psig=AOvVaw1gHKFolRs-DuEbTzpAh_rn&ust=1708281923923000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjnwoOEs4QDFQAAAAAdAAAAABAE', 'nfc24', '5');
productos.addProduct('Cafe Dolca', 'Este tipo de cafe es..', '1300', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nescafe.com%2Fbr%2Fnossos-produtos%2Fdolca&psig=AOvVaw3xQPfu0xRtk9HMwmuef6oF&ust=1708281997588000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDun7WEs4QDFQAAAAAdAAAAABAE', 'cd212',);



console.log(productos.getproduct());

productos.getProductById(2);
productos.getProductById(1);
productos.getProductById(3)