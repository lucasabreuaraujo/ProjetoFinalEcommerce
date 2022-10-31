import React from "react";
import { useState } from "react";

import "./styleDesconto.css";

function Desconto({ handleDesconto }) {
  
  const [codigoInput, setCodigoInput] = useState("");

  const handleDescontoChange = (event) => {
    setCodigoInput(event.target.value);
  };

  return (
    <label htmlFor="desconto_input">
      Possui cupom de desconto?
      <div id="desconto_fields">
        <input
          type="text"
          id="desconto_input"
          name="desconto"
          onChange={(e) => handleDescontoChange(e)}
          value={codigoInput}
        />
        <button
          className="button"
          id="desconto_button"
          onClick={(e) => handleDesconto(e, codigoInput)}
        >
          Validar
        </button>
      </div>
    </label>
  );
}

export default Desconto;