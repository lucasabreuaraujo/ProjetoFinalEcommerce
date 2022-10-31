import Frete from "./indexFrete";
import Desconto from "./indexDesconto";

import "./styleResumo.css";

function Resumo({
  subtotal,
  desconto,
  forma_envio,
  forma_envio_selec,
  handleDesconto,
  handleFormaEnvioChange,
  validateForm,
}) {
  const showDesconto = () => {
    if (desconto !== 1) {
      return (
        <>
          <td className="row-div">
            <p className="prices-header">Desconto</p>
          </td>
          <td className="row-div">
            <p className="prices">- R$ {(subtotal * desconto).toFixed(2)}</p>
          </td>
        </>
      );
    } else {
      return (
        <td colSpan="2" className="row-div" id="desconto">
          <Desconto handleDesconto={handleDesconto} />
        </td>
      );
    }
  };

  return (
    <section id="resumo">
      <h2>Resumo</h2>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="row-div">
              <p className="prices-header">Subtotal</p>
            </td>
            <td className="row-div">
              <p className="prices">R$ {subtotal}</p>
            </td>
          </tr>
          <tr>{showDesconto()}</tr>
          <tr>
            <td className="row-div">
              <p className="prices-header">{forma_envio_selec.desc}</p>
            </td>
            <td className="row-div">
              <p className="prices">
                {forma_envio_selec.preco > 0
                  ? "+ R$ " + parseFloat(forma_envio_selec.preco).toFixed(2)
                  : "Grátis"}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="prices-header total-header">Total do Pedido</p>
            </td>
            <td>
              <p className="prices total">
                R${" "}
                {desconto !== 1
                  ? parseFloat(
                      parseFloat(subtotal) -
                        parseFloat(subtotal) * desconto +
                        parseFloat(forma_envio_selec.preco)
                    ).toFixed(2)
                  : parseFloat(
                      parseFloat(subtotal) + parseFloat(forma_envio_selec.preco)
                    ).toFixed(2)}
              </p>
              <p className="prices">
                em até 3X de R${" "}
                {desconto !== 1
                  ? (
                      parseFloat(
                        parseFloat(subtotal) -
                          parseFloat(subtotal) * desconto +
                          parseFloat(forma_envio_selec.preco)
                      ) / 3
                    ).toFixed(2)
                  : (
                      parseFloat(
                        parseFloat(subtotal) +
                          parseFloat(forma_envio_selec.preco)
                      ) / 3
                    ).toFixed(2)}
              </p>
              <p className="prices">
                ou R${" "}
                {desconto !== 1
                  ? parseFloat(
                      parseFloat(subtotal) -
                        parseFloat(subtotal) * desconto +
                        parseFloat(forma_envio_selec.preco)
                    ).toFixed(2)
                  : parseFloat(
                      parseFloat(subtotal) + parseFloat(forma_envio_selec.preco)
                    ).toFixed(2)}{" "}
                no
              </p>
              <p className="prices">
                depósito ou transferência com % de desconto
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="envio_cont">
        {forma_envio.map((fe, i) => (
          <div key={i}>
            <Frete
              id={fe.id}
              nome={fe.desc}
              preco={fe.preco}
              previsao={fe.previsao_dias}
              handleFormaEnvioChange={handleFormaEnvioChange}
              checked={forma_envio_selec.id}
            />
          </div>
        ))}
      </div>
      <input
        id="submit"
        className={validateForm ? "button" : "button inactive"}
        type="submit"
        value="Finalizar Compra"
      />
    </section>
  );
}
export default Resumo;