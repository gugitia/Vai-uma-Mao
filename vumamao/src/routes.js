import React from "react";
import { Routes, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import RegistroServico from "./pages/NovoServico1";
import Listar from "./pages/listaUsuarios";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Logon />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/perfil/registrarservico" element={<RegistroServico />} />
      <Route path="/lista" element={<Listar />} />
    </Routes>
  );
};

export default Rotas;
