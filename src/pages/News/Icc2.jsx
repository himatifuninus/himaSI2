import { lazy } from "react";
import icc2 from "../../assets/iccs2.png";
const Navbar = lazy(() => import("../../components/Navbar"));
const Footer = lazy(() => import("../../components/Footer"));

const Bhs = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="mt-4">
            Peserta Terbaik Informatika Coding Camp Season 2 2023
          </h1>
        </div>
        <p className="py-6 px-1">23 Juni 2023 | Himatif</p>
        <div className="flex justify-center items-center pb-6">
          <img src={icc2} alt="pmm" />
        </div>
        <div className="text-justify">
          <div className="flex flex-col gap-4">
            <p>
              Selamat kepada Azrill dan Aldo, peserta terbaik dari event
              Informatika Coding Camp Season dua! Kami ingin mengucapkan
              apresiasi yang setinggi-tingginya atas prestasi luar biasa yang
              telah kalian raih.
            </p>
            <p>
              Dalam persaingan yang sengit, kalian telah berhasil menonjol
              dengan kemampuan coding dan pemrograman yang luar biasa. Dedikasi,
              semangat, dan kerja keras yang kalian tunjukkan selama event ini
              benar-benar mengesankan. Kalian adalah contoh nyata dari bagaimana
              kegigihan dan keahlian dapat menghasilkan hasil yang gemilang.
            </p>
            <p>
              Partisipasi kalian dalam Informatika Coding Camp Season dua telah
              membuktikan bahwa kalian memiliki potensi besar dalam bidang
              teknologi informasi. Kemampuan kalian dalam memecahkan masalah,
              menguasai bahasa pemrograman, dan menghadapi tantangan kompleks
              adalah kualitas yang sangat berharga dalam dunia industri.
            </p>
            <p>
              Kami berharap bahwa prestasi ini menjadi awal dari perjalanan yang
              sukses dan membanggakan bagi kalian di dunia teknologi informasi.
              Teruslah mengasah dan mengembangkan keterampilan kalian, teruslah
              mengejar impian dan tujuan yang lebih tinggi.
            </p>
            <p>
              Kami, sebagai komunitas Informatika, merasa sangat bangga dan
              terinspirasi oleh keberhasilan kalian. Kalian adalah panutan bagi
              peserta lainnya dan generasi muda yang ingin meniti karir di dunia
              teknologi. Kami berharap kalian dapat terus memberikan kontribusi
              berharga dan inovasi yang menginspirasi dalam industri ini.
            </p>
            <p>
              Selamat kembali kebanggaan bagi kalian, Azrill dan Aldo. Teruslah
              mengejar keunggulan, berinovasi, dan menjadi agen perubahan dalam
              dunia teknologi informasi. Kami berharap kesuksesan ini menjadi
              langkah awal dalam karir yang cemerlang bagi kalian.
            </p>
            <p>
              Semoga kalian terus diberikan motivasi, semangat, dan dukungan
              yang tak terbatas dalam perjalanan kalian. Terima kasih telah
              menjadi bagian dari Informatika Coding Camp Season dua dan telah
              menginspirasi kami semua. Selamat dan teruslah berprestasi!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bhs;
