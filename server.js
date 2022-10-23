const { response } = require("express");
const express = require("express");
const Contenedor = require("./productos");
const PORT = 8080;
const app = express();

const contenedor = new Contenedor("productos.txt");

const randomEx = (max) => {
    return Math.floor(Math.random() * max);
}

app.get("/productos", async (request, response) => {
    const productos = await contenedor.getAll();
    response.send(productos);
})

app.get("/productoRandom", async (request, response) => {
    const productos = await contenedor.getAll();
    const randomid = randomEx(productos.length);
    const producto = await contenedor.getById(randomid);
    response.send(producto);
})

app.listen(PORT, () => console.log(`Servidor ejecutandose en el puerto ${PORT}`));

