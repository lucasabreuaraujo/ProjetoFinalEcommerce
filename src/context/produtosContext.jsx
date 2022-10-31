import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [selectItens, setSelectItens] = useState([]);

  function addItemCart(value, item) {
    let contains = false;

    if (!selectItens.length) {
      setSelectItens((prev) => [...prev, { ...item, tamanho: value }]);
      return;
    }

    selectItens.forEach((element) => {
      if (element.id === item.id) {
        console.log("Tem iguais");
        alert("Produto já existe!");
        contains = true;
        return;
      }
    });
    if (!contains)
      setSelectItens((prev) => [...prev, { ...item, tamanho: value }]);
  }

  function removeItemCart(item) {
    const newSelectItens = selectItens.filter(
      (element) => item !== element.id && element
    );

    setSelectItens(newSelectItens);
  }

  return (
    <ProductContext.Provider
      value={{ selectItens, setSelectItens, addItemCart, removeItemCart }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;