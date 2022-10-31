import {
    IoPersonOutline,
    IoBagOutline,
    IoSearchOutline,
} from "react-icons/io5";

import "./style.css";
import Logo from "./img/Hoshi.svg";
import { useContext, useEffect, useRef, useState } from "react";
import Carrinho from "../carrinho/index";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/produtosContext";

function Navbar() {
    const { selectItens } = useContext(ProductContext);

    const [openModal, setOpenModal] = useState(false);
    const cartRef = useRef();

    const pathPagina = useNavigate();

    useEffect(() => {
        function handleClick(e) {
            if (
                cartRef.current &&
                openModal &&
                !cartRef.current.contains(e.target)
            )
                setOpenModal(false);
        }

        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [openModal]);

    return (
        <>
            <nav className='NavBar' ref={cartRef}>
                <div
                    onClick={() => {
                        pathPagina("/");
                    }}
                    style={{ cursor: "pointer" }}
                >
                    <img className='NavBar__Logo' src={Logo} alt='' />
                </div>
                <ul className='NavBar__Lista'>
                    <li className='NavBar__Lista--Seção'>Populares</li>
                    <li className='NavBar__Lista--Seção'>Masculino</li>
                    <li className='NavBar__Lista--Seção'>Feminino</li>
                </ul>
                <div className='NavBar__CampoDeBusca'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Pesquise aqui'
                    />
                    <IoSearchOutline />
                </div>
                <div className='NavBar__Icons'>
                    <IoPersonOutline
                        onClick={() => pathPagina("/login")}
                        style={{ cursor: "pointer" }}
                    />
                    <div>
                        <IoBagOutline
                            className='NavBar__Icon__bag'
                            onClick={() => setOpenModal(!openModal)}
                        />
                        {selectItens.length > 0 && (
                            <sup
                                style={{
                                    backgroundColor: "#c1b0ec",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                    width: "15.5px",
                                    height: "15.5px",
                                    textAlign: "center",
                                    fontSize: "0.8rem",
                                }}
                            >
                                {selectItens.length}
                            </sup>
                        )}
                    </div>
                </div>
                {openModal && <Carrinho />}
            </nav>
        </>
    );
}

export default Navbar;
