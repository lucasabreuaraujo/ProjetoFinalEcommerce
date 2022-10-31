import Produto from "../componentes/produto/indexProduto";
import Relacionados from "../componentes/relacionados/index";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Product() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});
  const [relacionados, setRelacionados] = useState([]);
  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/produtos?id=" + id,
      method: "get",
    }).then((resp) => {
      setProduto(resp.data);
      axios({
        url: "https://hoshi-api.herokuapp.com/produtos",
        method: "get",
      }).then((resp_all) => {
        let rel = [];
        resp.data.categorias.forEach((categoria) => {
          rel.push({
            produtos: handleRelacionados(resp_all.data, categoria, id),
            categoria: categoria.codigo,
          });
        });
        setRelacionados(rel);
      });
    });
  }, [id]);

  const handleRelacionados = (produtos, categoria, id) => {
    let i = 0;
    let relacionados = [];
    while (i < 5) {
      let x = Math.round(Math.random() * (produtos.length - 1));
      if (
        produtos[x].id !== parseInt(id) &&
        relacionados.indexOf(produtos[x]) === -1
      ) {
        produtos[x].categorias.forEach((cat) => {
          if (cat.codigo === categoria.codigo) relacionados.push(produtos[x]);
        });
        i++;
      }
    }
    return relacionados;
  };

  return (
    <>
      <Produto item={produto} />
      {relacionados.map((produtos, idx) => (
        <Relacionados rel={produtos} key={idx} />
      ))}
    </>
  );
}
export default Product;