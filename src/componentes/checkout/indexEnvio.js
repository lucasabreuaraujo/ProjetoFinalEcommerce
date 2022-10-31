import Endereco from "./indexEndereco";

import "./styleEnvio.css";

function Envio({
  usuario,
  handleAdressChange,
  handleObsChange,
  handleFormaPagamentoChange,
}) {
  return (
    <section id="envio">
      <h3>Destino</h3>
      <details>
        <summary>Envio para {usuario.nome}</summary>
        <div id="endereco_cont">
          {usuario.enderecos.map((endereco, i) => (
            <Endereco
              userId={usuario.id}
              id={endereco.id}
              apelido={endereco.apelido}
              nome={endereco.nome}
              rua={endereco.rua}
              numero={endereco.rua}
              bairro={endereco.bairro}
              cidade={endereco.cidade}
              estado={endereco.estado}
              cep={endereco.cep}
              handleAdressChange={handleAdressChange}
              key={i}
            />
          ))}
        </div>
      </details>
      <details>
        <summary>Pagamento</summary>
        <div id="pagamentos">
          <table cellSpacing="0" cellPadding="0" width="100%">
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="forma_pagamento"
                    value="1"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-qrcode" />
                </td>
                <td>
                  <p className="forma_pagamento_titulo">Pix</p>
                </td>
                <td>
                  <p className="forma_pagamento_desc"></p>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="forma_pagamento"
                    value="2"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-barcode" />
                </td>
                <td>
                  <p className="forma_pagamento_titulo">Boleto</p>
                </td>
                <td>
                  <p className="forma_pagamento_desc">à vista</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="forma_pagamento"
                    value="3"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-credit-card" />
                </td>
                <td>
                  <p className="forma_pagamento_titulo">Cartão de Crédito</p>
                </td>
                <td>
                  <p className="forma_pagamento_desc">
                    em 2X sem juros ou até 3x no cartão.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="forma_pagamento"
                    value="4"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-money-bill-transfer" />
                </td>
                <td>
                  <p className="forma_pagamento_titulo">Depósito Bancário</p>
                </td>
                <td>
                  <p className="forma_pagamento_desc">
                    <img
                      className="forma_pagamento_img"
                      src="./img/bb.png"
                      alt="Banco do Brasil"
                    />
                    <img
                      className="forma_pagamento_img"
                      src="./img/bradesco.png"
                      alt="Bradesco"
                    />
                    <img
                      className="forma_pagamento_img"
                      src="./img/caixa.png"
                      alt="Caixa Econômica Federal"
                    />
                    <img
                      className="forma_pagamento_img"
                      src="./img/itau.png"
                      alt="Itaú"
                    />
                    <img
                      className="forma_pagamento_img"
                      src="./img/sicoob.png"
                      alt="SICOOB"
                    />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <p id="obs_label">Observações</p>
      <textarea
        name="obs"
        id="obs"
        cols="30"
        rows="5"
        onChange={handleObsChange}
      ></textarea>
    </section>
  );
}
export default Envio;