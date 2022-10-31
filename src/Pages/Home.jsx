import BannerInicial from "../componentes/banner/index"
import Card from "../componentes/card/index"
import axios from "axios";

import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerFinal from "../componentes/banner/index2"


function Home() {
  const pathPage = useNavigate();
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/produtos",
      method: "get",
    }).then((resp) => setProdutos(resp.data));
  }, []);

  return (
    <>
      <BannerInicial />
      <div className="Cards">
        {produtos.map((item, idx) => {
          if (item.id < 6)
            return (
              <Card
                key={idx}
                item={item}
                onClick={() => pathPage(`/product/${item.id}`)}
              />
            );
          return null;
        })}
      </div>
      <BannerFinal />
      <div className="Cards">
        {produtos.map((item, idx) => {
          if (item.id >= 6)
            return (
              <Card
                key={idx}
                item={item}
                onClick={() => pathPage(`/product/${item.id}`)}
              />
            );
          return null;
        })}
      </div>
    </>
  );
}
export default Home;