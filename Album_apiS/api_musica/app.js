const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/discografia/:artista', async (req, res) => {
  const { artista } = req.params;
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(artista)}&entity=album&attribute=artistTerm&limit=50`
  );
  const data = await response.json();

  const busqueda = artista.toLowerCase().trim();

  const soloAlbumes = data.results.filter((item) => {
    const esDelArtista = item.artistName.toLowerCase().includes(busqueda);
    const noEsSingleNiEP =
      !item.collectionName.toLowerCase().includes('- single') &&
      !item.collectionName.toLowerCase().includes('- ep') &&
      item.trackCount > 4;

    return esDelArtista && noEsSingleNiEP;
  });

  res.json(soloAlbumes);
});

app.listen(3000, () => console.log('CORRIENDO en el puerto 3000'));