const express = require("express");
const cors = require("cors");
const path = require("path");

const sendMail = require("./mailer.js");

// variables de entorno
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

// Configuración de express
const server = express();
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// configuración de CORS
server.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,PATCH,DELETE",
}));

// Mandar mails de consulta
server.get("/api/send-mail", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const { name, email, query } = req.query;

        if (!name || !email || !query) {
            return res.status(400).send({ error: "Missing relevant data" });
        }
        const result = await sendMail(name, email, query);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

// Control de errores
server.use((error, req, res, next) => {
    res.status(500).send({ success: false, message: "An error occurred on the server" });
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>The specified URL does not exist on this server</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Server NodeJS version: ${process.version}`);
    console.log(`Running on http://${HOST}:${PORT}`);
});