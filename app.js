const express = require("express");
const app = express();

const usersData = require("./data.js");
const getContent = require("./template.js");

const PORT = 3000;

// filtro por especialidad
const specialtyFilter = (specialty) => {
  return usersData.filter(user => user.specialty === specialty);
};

// ✅ HOME usando el template (CLAVE)
app.get("/", (req, res) => {
  res.send(getContent("Home", []));
});

// MARKETING
app.get("/marketing", (req, res) => {
  res.send(getContent("marketing", specialtyFilter("marketing")));
});

// DEVELOPERS
app.get("/developers", (req, res) => {
  res.send(getContent("developers", specialtyFilter("developers")));
});

// QAs
app.get("/QAs", (req, res) => {
  res.send(getContent("QAs", specialtyFilter("QAs")));
});

// VENTAS
app.get("/ventas", (req, res) => {
  res.send(getContent("ventas", specialtyFilter("ventas")));
});

// 404
app.use((req, res) => {
  res.status(404).send("<h1>404 - Página no encontrada</h1>");
});

// servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
