import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Achievments from "../components/Achievments";
import Carousel from "../components/MyCarousel";
import Footer from "../components/Footer";
import Event from "../components/Event";

const First = () => {
  const images = [
    {
      url: "https://source.unsplash.com/250x250?cars",
      title: "Judul untuk Berita 1",
      desc: "Deskripsi untuk Berita",
    },
    {
      url: "https://source.unsplash.com/250x250?home",
      title: "Judul untuk Berita 2",
      desc: "Deskripsi untuk Berita",
    },
    {
      url: "https://source.unsplash.com/250x250?flowers",
      title: "Judul untuk Berita 3",
      desc: "Deskripsi untuk Berita",
    },
    {
      url: "https://source.unsplash.com/250x250?man",
      title: "Judul untuk Berita 4",
      desc: "Deskripsi untuk Berita",
    },
    {
      url: "https://source.unsplash.com/250x250?man",
      title: "Judul untuk Berita 5",
      desc: "Deskripsi untuk Berita",
    },
  ];
  return (
    <div className="bg-[FAFEFF] overflow-x-hidden">
      <Navbar />
      <Cover />
      <Carousel images={images} />
      <Event />
      <Achievments />
      <Footer />
    </div>
  );
};

export default First;
