import { lazy } from "react";
import goAndRust from "../../assets/goAndRust.png";
const Navbar = lazy(() => import("../../components/Navbar"));
const Footer = lazy(() => import("../../components/Footer"));

const Bhs = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="mt-4">
            Bahasa Pemrograman yang sedang naik daun (Golang & Rust)
          </h1>
        </div>
        <p className="py-6 px-1">11 Maret 2023 | 2023</p>
        <div className="flex justify-center items-center pb-6">
          <img src={goAndRust} alt="" />
        </div>
        <div className="text-justify">
          <p className="text-2xl font-semibold">Golang</p>
          <p className="mt-2">
            Golang merupakan bahasa pemrograman yang dibuat oleh Google tahun
            2009. Merupakan bahasa pemrograman yang open source, mudah,
            sederhana, efisien. Bahasa ini memiliki level yang sama dengan Java.
            Bahasa Golang digunakan untuk pengembangan perangkat lunak karena
            memiliki nilai lebih di sisi keamanan dan skalabilitas. Bahasa ini
            juga bisa digunakan untuk membuat situs e-commerce.
          </p>
          <p className="mt-5">
            Dalam posisi back end, fungsi concurrency dan footprint yang
            memiliki kapasitas memori yang kecil, dapat digunakan untuk
            meningkatkan jumlah aktivitas pengguna aplikasi.
          </p>
          <p className="text-2xl font-semibold mt-6">Rust</p>
          <p className="mt-2">
            Rust merupakan bahasa pemrograman multi-paradigma yang dikembangkan
            oleh Mozilla. Rust dikembangkan untuk kinerja dan keamanan terutama
            konkurensi yang aman. Bahasa pemrograman ini memiliki sintaksis yang
            mirip dengan C++. Bahasa ini cukup populer bagi para web developer.
            Dengan menggunakan Rust, para web developers cenderung mengurangi
            resiko kecil kebocoran memori di dalam penulisan kode mereka.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bhs;
