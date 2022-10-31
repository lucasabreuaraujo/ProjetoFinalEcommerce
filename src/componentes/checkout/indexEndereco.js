import React from "react";

import "./styleEndereco.css";

function Endereco({
  userId,
  id,
  apelido,
  nome,
  rua,
  numero,
  bairro,
  cidade,
  estado,
  cep,
  handleAdressChange,
}) {
  return (
    <label htmlFor={`address_${id}`}>
      <div className="endereco">
        <p>
          <em>{apelido}</em>
        </p>
        <p>
          <strong>{nome}</strong>
        </p>
        <p>
          {rua}, {numero}
        </p>
        <p>
          {bairro} - {cidade} - {estado}
        </p>
        <p>{cep}</p>
        <p className="endereco_label">
          Endereço para envio{" "}
          <input
            type="radio"
            name="addresss"
            id={`address_${id}`}
            value={id}
            onChange={handleAdressChange}
          />
        </p>
      </div>
    </label>
  );
}

export default Endereco;