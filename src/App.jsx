import React from "react";
import NavBar from "./componentes/navbar/index";
import Footer from "./componentes/footer/index"
import RoutesPages from "./Routes/routes";

import "./App.css";


function App() {
    return (
        <>
            <NavBar />
            <RoutesPages />
            <Footer />
        </>
    );
}

export default App;
