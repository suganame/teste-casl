import { Navbar } from "../../components/Navbar";
import { Permissions } from "../../components/Permissions";
import { Can } from "../../utility/Can";

export const Fornecedor = () => {
  return (
    <>
      <Navbar />
      <h1>Fornecedor</h1>
      <Permissions />
      <br />
      <br />
      <Can I="create" a="Fornecedor">
        <button type="button">Inserir</button>
      </Can>
      <Can I="update" a="Fornecedor">
        <button type="button">Editar</button>
      </Can>
      <Can I="delete" a="Fornecedor">
        <button type="button">Deletar</button>
      </Can>          
    </>
  );
};
