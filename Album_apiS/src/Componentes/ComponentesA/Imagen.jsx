import "../../Style/StyleA/TarjetaA.css";

export default function Imagen({ imagen, title }) {
  return (
    <div className="Imagen">
      <img src={imagen} alt={title} />
    </div>
  );
}