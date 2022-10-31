import "./style.css";

function Card({ item, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <img
        src={"data:image/png;base64," + item.img}
        alt={item.peca}
        className="card-imagem"
      />
      <p>{item.peca}</p>
      <p>R$: {item.valor}</p>
    </div>
  );
}
export default Card;
