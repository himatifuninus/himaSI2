import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ramadhan from "../../assets/ramadhan-berkah.jpg";

const Ramadhan = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-[790px] mx-auto mt-24 px-6 md:px-0">
        <div className="flex justify-center items-center text-3xl md:text-6xl font-bold">
          <h1 className="mt-4">Ramadhan berkah bersama Teknik jilid VII</h1>
        </div>
        <p className="py-6 px-1">6 April 2023 | Himatif </p>
        <div className="flex justify-center items-center pb-6">
          <img src={ramadhan} alt="" />
        </div>
        <div className="text-justify">
          <p className="mt-6">
            Pada hari Kamis, 06 April 2023, Senat Mahasiswa Fakultas Teknik
            Universitas Islam Nusantara (UNINUS) menyelenggarakan acara santunan
            anak yatim piatu dalam rangka Ramadhan Berkah Jilid Vll di Aula
            Pasca Sarjana Lt.3, acara tersebut merupakan gabungan program kerja
            himpunan yang ada di Fakultas teknik yang diselenggarakan rutin
            setiap tahunya. Dalam acara ini senat mahasiswa fakultas teknik
            mengundang 30 orang anak yatim dari rumah creative yatim dhuafa
            Al-Hikmah Kopo Kabupaten Bandung.
          </p>
          <p className="mt-6">
            Dalam acara ini,ada beberapa kegiatan diantaranya tausiah, games dan
            pengenalan dari anak-anak yatim dan penyelenggara yang dimana
            bertujuan agar mereka saling mengenal satu sama lain, Senat
            Mahasiswa Fakultas Teknik memberikan santunan berupa uang tunai dan
            paket sembako, dan hadiah-hadiah kepada anak-anak yatim piatu yang
            hadir. Selain itu, mereka juga diberikan kesempatan untuk mengikuti
            acara iftar bersama.
          </p>{" "}
          <p className="mt-6">
            Ibu Rahmi Rismayani Deri,S.Psi.MT. Selaku Dekan 1 Fakultas Teknik
            UNINUS mengatakan bahwa kegiatan ini merupakan bagian dari tanggung
            jawab sosial kampus untuk membantu masyarakat sekitar. "Kita harus
            selalu peduli terhadap masyarakat sekitar, terutama pada saat-saat
            yang suci seperti bulan Ramadhan ini. Kegiatan ini merupakan bentuk
            kepedulian kami kepada anak-anak yatim piatu di sekitar kampus,"
            ujarnya.
          </p>
          <p className="mt-6">
            Pengurus dari Rumah Creative Dhuafa Al-Hikmah juga mengucapkan
            terima kasih atas kepedulian yang diberikan oleh Senat Fakultas
            Teknik Universitas Islam Nusantara. "Kami sangat bersyukur dan
            senang bisa mendapatkan bantuan dari kampus ini. Semoga kegiatan
            seperti ini terus dilakukan dan memberikan manfaat bagi banyak
            orang", katanya.
          </p>
          <p className="mt-6">
            Sementara itu, dicky selaku ketua pelaksana dari acara tersebut,
            mengatakan bahwa kegiatan ini merupakan bagian dari kewajiban kita
            untuk berbagi dengan sesama. "Kami sebagai mahasiswa UIN harus
            selalu siap membantu masyarakat sekitar, terutama yang kurang mampu.
            Kegiatan ini menjadi pengingat bagi kami untuk terus melakukan
            hal-hal yang bermanfaat bagi orang lain," ujarnya.
          </p>
          <p className="mt-6">
            Acara santunan anak yatim piatu yang diadakan oleh Senat Mahasiswa
            Fakultas Teknik Universitas Islam Nusantara diharapkan dapat
            memberikan manfaat yang besar bagi masyarakat sekitar. Semoga
            kegiatan seperti ini dapat terus dilakukan dan mempererat hubungan
            antara kampus dengan masyarakat di sekitarnya.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ramadhan;
