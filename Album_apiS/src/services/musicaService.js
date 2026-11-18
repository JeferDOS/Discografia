import axios from "axios";

export async function buscarDiscografia(artista) {
  const res = await axios.get(
    `https://itunes.apple.com/search?term=${encodeURIComponent(artista)}&entity=album&attribute=artistTerm&limit=50`
  );

  const busqueda = artista.toLowerCase().trim();

  return res.data.results.filter((item) => {
    const esDelArtista = item.artistName.toLowerCase().includes(busqueda);
    const noEsSingleNiEP =
      !item.collectionName.toLowerCase().includes("- single") &&
      !item.collectionName.toLowerCase().includes("- ep") &&
      item.trackCount > 4;

    return esDelArtista && noEsSingleNiEP;
  });
} // hola pe xd