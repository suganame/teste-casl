import { Navbar } from "../../components/Navbar";
import { Permissions } from "../../components/Permissions";
import { Can } from "../../utility/Can";

export const Financeiro = () => {
  return (
    <>
      <Navbar />
      <h1>Financeiro</h1>
      <Permissions />
      <br />
      <br />
      <Can I="create" a="Financeiro">
        <button type="button">Inserir</button>
      </Can>
      <Can I="update" a="Financeiro">
        <button type="button">Editar</button>
      </Can>
      <Can I="delete" a="Financeiro">
        <button type="button">Deletar</button>
      </Can>
    </>
  );
};
