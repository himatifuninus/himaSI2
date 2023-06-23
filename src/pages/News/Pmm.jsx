import { lazy } from "react";
import Pmm from "../../assets/Pmm.png";
const Navbar = lazy(() => import("../../components/Navbar"));
const Footer = lazy(() => import("../../components/Footer"));

const Bhs = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="mt-4">
            Mahasiswa Teknik Informatika Uninus lolos program PMM MBKM 2023
          </h1>
        </div>
        <p className="py-6 px-1">23 Juni 2023 | Himatif</p>
        <div className="flex justify-center items-center pb-6">
          <img src={Pmm} alt="pmm" />
        </div>
        <div className="text-justify">
          <div className="flex flex-col gap-4">
            <p>
              Halo pembaca setia blog kami! Kami dengan bangga ingin berbagi
              kabar gembira tentang prestasi gemilang yang dicapai oleh
              mahasiswa-mahasiswa terbaik kita. Dalam kesempatan kali ini, kami
              ingin mengucapkan selamat kepada Delaisya Lisyiami Wungu dari
              Universitas Haluoleo Sulawesi Tenggara, dan kepada Hafizh dari
              Universitas Samudra Aceh, yang telah berhasil lolos program Kampus
              Merdeka!
            </p>
            <p>
              Pencapaian ini bukanlah hal yang bisa dianggap remeh. Delaisya
              Lisyiami Wungu dan Hafizh telah melewati seleksi ketat dan
              kompetitif untuk menjadi bagian dari program pendidikan yang
              sangat prestisius ini. Mereka telah menunjukkan bakat, dedikasi,
              dan semangat yang luar biasa dalam mengejar impian mereka.
            </p>
            <p>
              Sebagai Himpunan Mahasiswa Teknik Informatika Universitas Islam
              Nusantara, kami dengan tulus mengucapkan apresiasi dan penghargaan
              setinggi-tingginya kepada kedua mahasiswa tersebut. Mereka adalah
              contoh teladan bagi sesama mahasiswa, inspirasi bagi generasi
              muda, dan harapan bagi masa depan teknologi dan masyarakat.
            </p>
            <p>
              Program Kampus Merdeka merupakan tonggak bersejarah dalam
              perjalanan akademik mereka. Melalui program ini, Delaisya Lisyiami
              Wungu dan Hafizh akan mendapatkan kesempatan yang tak terhingga
              untuk mengembangkan diri, memperluas pengetahuan, dan mengejar
              impian mereka di bidang yang mereka geluti.
            </p>
            <p>
              Kami percaya bahwa mereka akan menjadikan kesempatan ini sebagai
              batu loncatan untuk mencapai kesuksesan yang lebih besar lagi.
              Dengan semangat belajar yang tak kenal lelah, keterampilan yang
              terus diasah, dan kegigihan dalam menghadapi tantangan, mereka
              akan menjadi agen perubahan yang membawa dampak positif bagi
              bangsa dan masyarakat.
            </p>
            <p>
              Kami mengajak seluruh pembaca untuk memberikan dukungan penuh
              kepada Delaisya Lisyiami Wungu dan Hafizh dalam perjalanan mereka.
              Mari kita bersama-sama memberikan semangat dan motivasi agar
              mereka dapat meraih prestasi yang gemilang, menjadikan nama
              Universitas Haluoleo Sulawesi Tenggara dan Universitas Samudra
              Aceh semakin bersinar di dunia pendidikan.
            </p>
            <p>
              Selamat kembali kebanggaan bagi Himpunan Mahasiswa Teknik
              Informatika Universitas Islam Nusantara! Kami percaya bahwa
              prestasi mahasiswa-mahasiswa terbaik kita ini adalah cermin dari
              keunggulan dan dedikasi yang kami miliki. Teruslah bersemangat,
              teruslah mengejar ilmu, dan teruslah menjadi agen perubahan yang
              berdampak dalam masyarakat.
            </p>
            <p>
              Terima kasih telah menyimak berita keberhasilan ini. Mari kita
              berikan dukungan dan doa terbaik untuk Delaisya Lisyiami Wungu dan
              Hafizh dalam perjalanan mereka. Tetaplah mengikuti blog kami untuk
              mendapatkan informasi terbaru seputar prestasi dan perjalanan
              inspiratif mahasiswa-mahasiswa terbaik kita. Sampai jumpa di
              postingan berikutnya!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bhs;
