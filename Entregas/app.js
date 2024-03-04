import express from "express";
import { Product } from "./main.js";

const products = new Product("./productos.json");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/products", async (req, res) => {
    try {
        const { limit } = req.query;

        let todoProducts = await products.getProducts();

        if (limit) {
            todoProducts = todoProducts.slice(0, parseInt(limit));
        }
        res.send(todoProducts);

    } catch (error) {
        console.log(error);

        return [];
    }
});
app.get("/products/:xid", async (req, res) => {
    try {
        const xid = parseInt(req.params.xid);
        const produ = await products.getProducts();
        const idFind = produ.find(produ => produ.id === xid);

        if (idFind) return res.send(idFind);
    } catch (error) {
        console.log(error, "No se encontro el producto");

        return;
    }
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}/products`);
});