import { lazy } from "react";
import chatGPTvsGoogle from "../../assets/chatGPTvsGoogle.png";
const Navbar = lazy(() => import("../../components/Navbar"));
const Footer = lazy(() => import("../../components/Footer"));

const Duel = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="mt-4">ChatGPT vs Google "Apprentice Bard"</h1>
        </div>
        <p className="py-6 px-1">11 Maret 2023 | Himatif</p>
        <div className="flex justify-center items-center pb-6">
          <img src={chatGPTvsGoogle} alt="" />
        </div>
        <div className="text-justify">
          <p>
            Antusiasme terhadap chatGPT tentu membuat Google tak ingin
            ketinggalan. Mereka mulai menyusun dan melakukan uji coba untuk
            membuat pesaing dari chatbot yang sedang populer saat ini. Chatbot
            yang dikembangkan oleh Google ini bernama "Apprentice Bard".
            Fungsinya sama dengan chatGPT yang mampu memberikan respon pada
            pengguna dalam bentuk teks. Selain fitur chatbot, Google juga
            mengembangkan "Universal Speech Model" yang mendukung 1000 bahasa.
          </p>
          <p className="mt-4">
            "Apprentice Bard" ini digadang-gadang memiliki kemampuan menyimpan
            informasi dari peristiwa masa lalu hingga terkini dalam jangka waktu
            lama. Berbeda dari pesaingnya yang hanya bisa menyimpan informasi
            pengetahuan sampai 2021. Sehingga, chatGPT akan ketinggalan selama 2
            tahun.
          </p>
          <p className="mt-4">
            Dalam tahap uji coba, chatbot milik Google juga akan menampilkan
            jawaban-jawaban yang relevan serta menampilkan pertanyaan lanjutan
            yang bisa diakses oleh pengguna. Untuk saat ini, chatbot milik
            Google masih dalam pengembangan. Namun, dengan reputasi Google,
            dapat dipastikan Google akan menciptakan fitur-fitur chatbot terbaik
            dan unggul dari pesaingnya.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Duel;
