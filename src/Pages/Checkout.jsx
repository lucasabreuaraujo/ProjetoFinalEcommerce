import { useContext, useState, useEffect } from "react";
import Pedido from "../componentes/checkout/indexPedido";
import Envio from "../componentes/checkout/indexEnvio";
import Resumo from "../componentes/checkout/indexResumo";
import axios from "axios";
import { ProductContext } from "../context/produtosContext";

import "./Checkout.css";

function Checkout() {
  const { selectItens, removeItemCart } = useContext(ProductContext);

  const [cupons, setCupons] = useState([]);
  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/cupons",
      method: "get",
    }).then((resp) => {
      setCupons(resp.data);
    });
  }, []);

  //objeto fixo de usuário (com os endereços)
  const [usuario, setUsuario] = useState({
    id: 1,
    nome: "Lucas Abreu",
    username: "lucas_abreu",
    senha: "1234567",
    email:
      "lucas.abreu@watmail.com                                                                         ",
    telefone: "+556198007471",
    enderecos: [
      {
        id: 1,
        nome: "Lucas",
        apelido: "ze",
        rua: "buritis",
        numero:25,
        bairro: "sobradinho",
        cidade: "Brasilia",
        estado: "DF",
        cep: "73061270",
        usuario: 1,
      },
      {
        id: 2,
        nome: "Izailde",
        apelido: "Zaza",
        rua: "Rua Ourinhos",
        numero: 670,
        bairro: "Jacarandá",
        cidade: "Santa Rita de Cássia",
        estado: "BA",
        cep: "7765789",
        usuario: 1,
      },
    ],
  });

  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/users?id=1",
      method: "get",
    }).then((resp) => {
      console.log(resp.data);
      setUsuario(resp.data);
    });
  }, []);

  const [compra, setCompra] = useState({
    adr_id: 0,
    forma_envio: 1,
    obs: "",
    forma_pagamento: 0,
    desconto: 1,
  });

  const handleAdressChange = (event) => {
    setCompra({
      adr_id: parseInt(event.target.value),
      forma_envio: compra.forma_envio,
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
      desconto: compra.desconto,
    });
  };

  const handleFormaEnvioChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: parseInt(event.target.value),
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
      desconto: compra.desconto,
    });
  };

  const handleObsChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      obs: event.target.value,
      forma_pagamento: compra.forma_pagamento,
      desconto: compra.desconto,
    });
  };

  const handleFormaPagamentoChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      obs: compra.obs,
      forma_pagamento: parseInt(event.target.value),
      desconto: compra.desconto,
    });
  };

  const handleDesconto = (event, codigo) => {
    event.preventDefault();
    cupons.forEach((cupom) => {
      if (cupom.codigo === codigo) {
        setCompra({
          adr_id: compra.adr_id,
          forma_envio: compra.forma_envio,
          obs: compra.obs,
          forma_pagamento: compra.forma_pagamento,
          desconto: cupom.desconto,
        });
      }
    });
  };

  //função de finalização da compra
  const handleCompra = (event, valid) => {
    //TODO
    event.preventDefault();

    if (valid) {
      const produtos = [];
      selectItens.forEach((item) => {
        produtos.push({
          produto: item.id,
          tamanho: item.tamanho,
        });
      });

      const pedido = {
        usuario: usuario.id,
        adr_id: compra.adr_id,
        forma_envio: compra.forma_envio,
        obs: compra.obs,
        forma_pagamento: compra.forma_pagamento,
        desconto: parseFloat(compra.desconto),
        produtos: produtos,
      };
      console.log(pedido);
      axios({
        url: "https://hoshi-api.herokuapp.com/pedidos",
        method: "post",
        data: pedido,
      })
        .then((resp) => alert("Compra Finalizada!\n" + resp.data.data))
        .catch((error) => alert("Erro na compra!\n" + error));
    } else return null;
  };

  //formas de envio (fixas, banco de dados?)
  const forma_envio = [
    {
      id: 1,
      desc: "Retirada no local",
      preco: 0.0,
      previsao_dias: 0,
    },
    {
      id: 2,
      desc: "PAC",
      preco: 32.2,
      previsao_dias: 3,
    },
    {
      id: 3,
      desc: "SEDEX",
      preco: 39.52,
      previsao_dias: 2,
    },
  ];

  return (
    <main>
      <form
        method="POST"
        onSubmit={
          compra.adr_id === 0 ||
          compra.forma_pagamento === 0 ||
          selectItens.length === 0
            ? (e) => handleCompra(e, false)
            : (e) => handleCompra(e, true)
        }
      >
        <Pedido
          pedidos={selectItens}
          handleDeletePedido={removeItemCart}
        />
        <Envio
          usuario={usuario}
          forma_envio={forma_envio}
          handleAdressChange={handleAdressChange}
          handleFormaPagamentoChange={handleFormaPagamentoChange}
          handleObsChange={handleObsChange}
        />
        <Resumo
          subtotal={parseFloat(
            selectItens.reduce((a, p) => {
              return a + parseFloat(p.valor);
            }, 0)
          ).toFixed(2)}
          desconto={compra.desconto}
          forma_envio={forma_envio}
          forma_envio_selec={
            forma_envio.filter((fe) => fe.id === compra.forma_envio)[0]
          }
          handleDesconto={handleDesconto}
          handleFormaEnvioChange={handleFormaEnvioChange}
          validateForm={
            compra.adr_id === 0 ||
            compra.forma_pagamento === 0 ||
            selectItens.length === 0
              ? false
              : true
          }
        />
      </form>
    </main>
  );
}

export default Checkout;