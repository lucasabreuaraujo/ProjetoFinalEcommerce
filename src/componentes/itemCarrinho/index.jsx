import { useContext, useEffect, useState } from "react";

import "./style.css";

import { ProductContext } from "../../context/produtosContext";

function ItemCarrinho({ item }) {
  const { removeItemCart } = useContext(ProductContext);

  const [mult, setMult] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(mult * item.valor);
  }, [mult, item]);

  return (
    <>
      <div className="teste">
        <div className="imagem">
          <img
            src={"data:image/png;base64," + item.img}
            alt="img"
            className="imagem"
          />
        </div>
        <div className="name">
          <h4>{item.peca}:</h4>
          <div className="price">R$ {item.valor}</div>
          <p>Tamanho: {item.tamanho}</p>
          <div className="adicionar-emover">
            <button
              onClick={() => setMult(mult - 1)}
              className="qty-Button"
              disabled={mult <= 1}
            >
              -
            </button>
            <div className="col-qty">{mult}</div>

            <button className="qty-Button" onClick={() => setMult(mult + 1)}>
              +
            </button>
          </div>
        </div>
        <p
          onClick={() => removeItemCart(item.id)}
          style={{
            textDecoration: "underline",
            color: "red",
            cursor: "pointer",
          }}
        >
          Remover item
        </p>
      </div>
      <div className="total-parcial">Total:{total.toFixed(2)}</div>
      <br />
      <hr />
    </>
  );
}
export default ItemCarrinho;
