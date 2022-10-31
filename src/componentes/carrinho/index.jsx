import { useContext, useEffect, useState } from "react";
import "./style.css";
import { ProductContext } from "../../context/produtosContext";
import ItemCarrinho from "../itemCarrinho/index";
import { useNavigate } from "react-router-dom";
import CarrinhoVazio from "./img/sacola_vazia.png";

const Carrinho = () => {
    const { selectItens } = useContext(ProductContext);

    const navigate = useNavigate();

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    return (
        <div className={`container-carrinho ${animation && "active"}`}>
            {selectItens.length > 0 ? (
                <>
                    {selectItens.map((item, index) => (
                        <ItemCarrinho item={item} key={index} />
                    ))}
                    <div className='valorTotal'>
                        <h3>Valor Total: R$</h3>
                        <button
                            className='finalizar'
                            onClick={() => navigate("/checkout")}
                        >
                            {" "}
                            Finalizar Compra{" "}
                        </button>
                    </div>
                </>
            ) : (
                <img src={CarrinhoVazio} alt='Carrinho Vazio' width={400} />
            )}
        </div>
    );
};

export default Carrinho;
