import Card from "../card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";

const Relacionados = ({ rel }) => {
  const paginaProduto = useNavigate();
  const [titulo, setTitulo] = useState("Veja mais peças como essa!");
  useEffect(() => {
    console.log(rel);
    switch (rel.categoria) {
      case "c":
        setTitulo("Você também pode gostar");
        break;
      default:
        setTitulo("Você também pode gostar");
    }
  }, [rel]);

  return (
    <section className="rel">
      <h3>{titulo}</h3>
      <div className="rel-container">
        <Swiper
          modules={[Navigation, EffectFade]}
          breakpoints={{
            568: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1092: { slidesPerView: 5 },
          }}
          grabCursor={true}
          loop={true}
          navigation
        >
          {rel.produtos.map((produto, i) => (
            <SwiperSlide>
              <Card
                key={i}
                item={produto}
                onClick={() => paginaProduto(`/product/${produto.id}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Relacionados;