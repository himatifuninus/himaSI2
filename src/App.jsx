import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Seminar from "./pages/Agenda/Seminar";
import Icc from "./pages/Agenda/Icc";
import VisiMisi from "./pages/about/VisiMisi";
import PesertaIcc from "./pages/Agenda/PesertaIcc";
import PesertaSeminar from "./pages/Agenda/PesertaSeminar";
import Society from "./pages/News/Society";
import Ramadhan from "./pages/News/Ramadhan";
import Bhs from "./pages/News/Bhs";
import Duel from "./pages/News/Duel";
import OpenAi from "./pages/News/OpenAi";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="Seminar" element={<Seminar />} />
          <Route path="Icc" element={<Icc />} />
          <Route path="Icc/PesertaIcc" element={<PesertaIcc />} />
          <Route path="Seminar/PesertaSeminar" element={<PesertaSeminar />} />
          <Route path="VisiMisi" element={<VisiMisi />} />
          <Route path="*" element={<Error />} />
          <Route path="Society" element={<Society />} />
          <Route path="Bhs" element={<Bhs />} />
          <Route path="Duel" element={<Duel />} />
          <Route path="OpenAi" element={<OpenAi />} />
          <Route path="Ramadhan" element={<Ramadhan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
