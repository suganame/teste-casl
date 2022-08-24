import { useContext } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Financeiro } from "./pages/Financeiro";
import { Fornecedor } from "./pages/Fornecedor";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotAuthorized } from "./pages/NotAuthorized";
import { Usuario } from "./pages/Usuario";
import { AbilityContext } from "./utility/Can";

export const Navigation = () => {
  const ability = useContext(AbilityContext);

  const FinalRoute = (props: any) => {
    if (!ability.can(props.action, props.subject)) {
      return <Navigate to="/not-authorized" />;
    }
    return props.children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/financeiro"
          element={
            <FinalRoute action="read" subject="Financeiro">
              <Financeiro />
            </FinalRoute>
          }
        ></Route>
        <Route
          path="/fornecedor"
          element={
            <FinalRoute action="manage" subject="Fornecedor">
              <Fornecedor />
            </FinalRoute>
          }
        ></Route>
        <Route path="/usuario" element={<Usuario />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/not-authorized" element={<NotAuthorized />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
