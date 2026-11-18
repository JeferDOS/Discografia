import { useState, useEffect } from "react";
import { buscarDiscografia } from "../services/musicaService";

export function useMusica() {
  const [artista, setArtista] = useState("Kendrick Lamar");
  const [albumes, setAlbumes] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!artista.trim()) return;

    async function obtenerAlbumes() {
      setCargando(true);
      try {
        const datos = await buscarDiscografia(artista);
        setAlbumes(datos);
      } catch (error) {
        console.error("Error al consultar la API:", error);
        setAlbumes([]);
      } finally {
        setCargando(false);
      }
    }

    obtenerAlbumes();
  }, [artista]);

  return { artista, setArtista, albumes, cargando };
}