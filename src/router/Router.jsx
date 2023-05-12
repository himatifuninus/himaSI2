import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("../pages/Index"));
const Seminar = lazy(() => import("../pages/Agenda/Seminar"));
const Icc = lazy(() => import("../pages/Agenda/Icc"));
const VisiMisi = lazy(() => import("../pages/about/VisiMisi"));
const PesertaIcc = lazy(() => import("../pages/Agenda/PesertaIcc"));
const PesertaSeminar = lazy(() => import("../pages/Agenda/PesertaSeminar"));
const Society = lazy(() => import("../pages/News/Society"));
const Ramadhan = lazy(() => import("../pages/News/Ramadhan"));
const Bhs = lazy(() => import("../pages/News/Bhs"));
const Duel = lazy(() => import("../pages/News/Duel"));
const OpenAi = lazy(() => import("../pages/News/OpenAi"));
const Error = lazy(() => import("../pages/Error"));
// const Loading = lazy(() => import("../components/Loading"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/Seminar" element={<Seminar />} />
        <Route path="/Icc" element={<Icc />} />
        <Route path="/Icc/PesertaIcc" element={<PesertaIcc />} />
        <Route path="/Seminar/PesertaSeminar" element={<PesertaSeminar />} />
        <Route path="/VisiMisi" element={<VisiMisi />} />
        <Route path="/*" element={<Error />} />
        <Route path="/Society" element={<Society />} />
        <Route path="/Bhs" element={<Bhs />} />
        <Route path="/Duel" element={<Duel />} />
        <Route path="/OpenAi" element={<OpenAi />} />
        <Route path="/Ramadhan" element={<Ramadhan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
