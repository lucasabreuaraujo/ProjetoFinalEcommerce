import React, { useContext } from "react";

import "./styleProduto.css";
import Button from "./indexButton";
import { ProductContext } from "../../context/produtosContext";
import { useNavigate } from "react-router-dom";

const Produto = ({ item }) => {
  const { addItemCart } = useContext(ProductContext);

  const navigate = useNavigate();

  function handleSizeSelect(e, item) {
    e.preventDefault();
    const [G, M, P] = e.target;

    switch (true) {
      case G.checked:
        addItemCart(G.value, item);
        break;

      case M.checked:
        addItemCart(M.value, item);
        break;

      case P.checked:
        addItemCart(P.value, item);
        break;

      default:
        break;
    }
  }

  return (
    <section className="produto-container">
      <div className="image">
        <img src={"data:image/png;base64," + item.img} alt={item.peca} />
      </div>
      <div className="description">
        <h1>{item.peca}</h1>
        <div className="valor__parcelas">
          <p>R$ {item.valor}</p>
          <p>em até 3x R$ {(item.valor / 3).toFixed(2)}</p>
        </div>
        <div className="tamanhos">
          <p>Escolha o tamanho</p>
          <form
            onSubmit={(e) => handleSizeSelect(e, item)}
            className="Form__container"
          >
            <section className="Section__buttons">
              <input type="radio" name="size" id="G" value={"G"} />
              <label className="Size__Button" htmlFor="G">
                G
              </label>
              <input type="radio" name="size" id="M" value={"M"} />
              <label className="Size__Button" htmlFor="M">
                M
              </label>
              <input type="radio" name="size" id="P" value={"P"} />
              <label className="Size__Button" htmlFor="P">
                P
              </label>
            </section>
            <Button type={"submit"}>Adicionar à Sacola</Button>
            <Button onClick={() => navigate("/")}>Continuar Comprando</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Produto;