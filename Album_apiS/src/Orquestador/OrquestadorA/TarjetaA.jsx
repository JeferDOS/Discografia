import Imagen from "../../Componentes/ComponentesA/Imagen";
import Title from "../../Componentes/ComponentesA/Title";
import Artist from "../../Componentes/ComponentesA/Artist";
import "../../Style/StyleA/TarjetaA.css";

export default function TarjetaA({ album }) {
  const portadaAltaCalidad = album.artworkUrl100.replace("100x100", "300x300");

  return (
    <div className="Tarjeta">
      <Imagen imagen={portadaAltaCalidad} title={album.collectionName} />
      <Title title={album.collectionName} />
      <Artist artist={album.artistName} />
    </div>
  );
}