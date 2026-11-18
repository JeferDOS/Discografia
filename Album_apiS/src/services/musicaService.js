import axios from "axios";

export async function buscarDiscografia(artista) {
  const res = await axios.get(`http://localhost:3000/discografia/${artista}`);
  return res.data;
}