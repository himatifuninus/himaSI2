import { lazy } from "react";
import openai from "../../assets/openai.png";
const Navbar = lazy(() => import("../../components/Navbar"));
const Footer = lazy(() => import("../../components/Footer"));

const OpenAi = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="mt-4">OpenAI</h1>
        </div>
        <p className="py-6 px-1">11 Maret 2023 | Himatif</p>
        <div className="flex justify-center items-center pb-6">
          <img src={openai} alt="" />
        </div>
        <div className="text-justify">
          <p>
            OpenAI merupakan perusahaan kecerdasan buatan yang didirikan pada
            tahun 2015 oleh Elon Musk dan kawan-kawan. Perusahaan ini awalnya
            didorong oleh ketakutan bahwa keberadaan manusia akan terancam oleh
            kehadiran kecerdasan buatan. Perusahaan ini memiliki beberapa
            produk. Namun, yang saat ini tengah banyak diperbincangkan adalah
            chatGPT mereka yang mampu memberikan jawaban atas beragam pertanyaan
            dengan sangat cepat dan tepat.
          </p>
          <p className="mt-4">
            Beberapa produk milik openAI antara lain, Dall-E (mampu membuat
            gambar dari deskripsi teks), GPT-3, openAI Five, chatGPT, openAI
            codex.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OpenAi;
