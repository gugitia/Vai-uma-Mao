const express = require("express");

const uPController = require("./controller/uPController");
const uCController = require("./controller/uCController");
const ocController = require("./controller/ocController");
const uPProfileController = require("./controller/uPProfileController");
const sessController = require("./controller/sessController");

const connection = require("./database/connection");
const { request } = require("http");
const histController = require("./controller/histController");

const routes = express.Router();

routes.post("/login", sessController.create);

routes.get("/usera", uPController.list);

routes.post("/usera", uPController.create);

routes.get("/userb", uCController.list);

routes.post("/userb", uCController.create);

routes.get("/perfil", uPProfileController.index);

routes.get("/servico", ocController.list);

routes.post("/servico", ocController.create);

routes.delete("/servico", ocController.delete);

routes.post("/ocorrencia", histController.create);

routes.get("/ocorrencia", histController.listByUserId);

routes.get("/ocorrencia/all", histController.listAll);

routes.delete("/ocorrencia", histController.delete);

module.exports = routes;
