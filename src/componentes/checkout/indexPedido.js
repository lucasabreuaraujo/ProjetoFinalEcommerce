import "./stylePedido.css";

function Pedido({ pedidos, handleDeletePedido }) {
  return (
    <section id="pedido">
      <span>
        <h2>Seu pedido</h2>
      </span>
      <span id="return">
        <div>
          <i className="fa-solid fa-angle-left"></i> Continuar comprando
        </div>
      </span>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td colSpan="4" id="empty_list">
              {pedidos.length === 0 ? "Carrinho Vazio" : ""}
            </td>
          </tr>
          {pedidos.map((pedido, i) => (
            <tr id="produtos_body" key={i}>
              <td className="produto_img">
                <img
                  src={"data:image/png;base64," + pedido.img}
                  alt={pedido.peca}
                />
              </td>
              <td>
                <p className="produto_nome">{pedido.peca}</p>
                <p className="produto_ref">Referência {pedido.id}</p>
                <p className="produto_atributo" key={i}>
                  <span>Tamanho&nbsp;</span>
                  <span>
                    <strong>{pedido.tamanho}</strong>
                  </span>
                </p>
              </td>
              <td id="preco">
                <p className="produto_preco">
                  <span className="dashed">R$ {pedido.valor}</span>
                </p>
                <p className="produto_preco">
                  <span>R$ {pedido.valor}</span>
                </p>
                <p className="produto_preco produto_total">
                  <span>R$ {pedido.valor}</span>
                </p>
              </td>
              <td>
                <div
                  onClick={() => handleDeletePedido(pedido)}
                  className="delete_produto"
                >
                  <i className="fa-solid fa-xl fa-xmark"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default Pedido;