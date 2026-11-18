import { useState } from "react";
import { useMusica } from "../hooks/useMusica";
import TarjetaA from "../Orquestador/OrquestadorA/TarjetaA";
import "../Style/StyleA/TarjetaA.css";

export default function BuscadorAlbumes() {
  const { artista, setArtista, albumes, cargando } = useMusica();
  const [textoInput, setTextoInput] = useState(artista);

  function manejarBusqueda(e) {
    e.preventDefault();
    setArtista(textoInput);
  }

  return (
    <div className="ContenedorPrincipal">
    <div className="TituloPrincipal">Discografía.com</div>
      <form className="Buscador" onSubmit={manejarBusqueda}>
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder="Buscar artista..."
        />
        <button type="submit">Buscar</button>
      </form>

      {cargando && <div className="Mensaje">Cargando discografía...</div>}

      <div className="GridTarjetas">
        {albumes.map((album) => (
          <TarjetaA key={album.collectionId} album={album} />
        ))}
      </div>
    </div>
  );
}