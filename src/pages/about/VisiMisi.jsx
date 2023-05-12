import { lazy } from "react";
const Accordion = lazy(() => import("../../components/Accordion"));
const AccordionList = lazy(() => import("../../components/AccordionList"));
const Navbar = lazy(() => import("../../components/Navbar"));

function VisiMisi() {
  return (
    <div className="pb-5">
      <Navbar />
      <div
        className="grid place-items-center mt-[7rem]"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1 className="text-[#020181] font-bold text-[1.5rem]">HIMATIF</h1>
        <h2 className="text-[#00D179]">Universitas Islam Nusantara</h2>
      </div>
      <div className="mt-10 grid place-items-center gap-5">
        <Accordion
          title="Visi"
          content="Membangun Karakter dengan semangat bermusyawarah melalui ilmu pengetahuan, etika, dan keahlian dalam bidang teknologi dan informasi serta menjadi wadah untuk menyatukan mahasiswa jurusan Teknik Informatika UNINUS dalam menunjang proses akademis dan non akademis."
        />
        <AccordionList
          title="Misi"
          content1="1.Membentuk Mahasiswa yang bertaqwa kepada Tuhan Yang Maha Esa"
          content2="2.Membentuk Karakter setiap anggota yang kreatif, inovatif, unggul, berwawasan luas, dan bertanggung jawab."
          content3="3.Mengembangkan potensi dalam diri setiap anggota Himatif baik dalam hardskill maupun softskill."
          content4="4.Membangun sifat kekeluargaan dan profesionalisme demi mencapai tujuan yang sama dan menghargai perbedaan."
        />
        <AccordionList
          title="Tujuan"
          content1="1.Turut mempersiapkan terbentuknya sarjana-sarjana Teknik Informatika yang sadar akan tanggung jawab terhadap Tuhan Yang Maha Esa, Bangsa, dan Almamater."
          content2="2.Memelihara dan mempererat rasa kekeluargaan di antara anggota HIMATIF UNINUS maupun alumni Teknik Informatika UNINUS pada khususnya, serta keluarga besar mahasiswa UNINUS pada umumnya."
          content3="3.Ikut membantu memenuhi kebutuhan material dan spiritual mahasiswa Teknik Informatika khususnya dan mahasiswa UNINUS umumnya dalam menyalurkan cipta, karya, tenaga dan pembangunan Negara Kesatuan Republik Indonesia. "
          content4="4.Bersinergi dengan civitas akademik Program Studi Teknik Informatika UNINUS dalam merealisasikan Misi Program Studi Teknik Informatika UNINUS untuk mengembangkan ilmu pengetahuan dan teknologi informasi."
          content5="5.Aktif dalam proses pengembangan aktivitas kemahasiswaan yang berada di lingkungan Program Studi Teknik Informatika dan civitas kampus lainnya."
        />
      </div>
    </div>
  );
}

export default VisiMisi;
