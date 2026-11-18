import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscadorAlbumes from "./Pages/BuscadorAlbumes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscadorAlbumes />} />
      </Routes>
    </BrowserRouter>
  );
}