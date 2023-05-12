import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Cover = lazy(() => import("../components/Cover"));
const Achievments = lazy(() => import("../components/Achievments"));
const Carousel = lazy(() => import("../components/MyCarousel"));
const Footer = lazy(() => import("../components/Footer"));
const Event = lazy(() => import("../components/Event"));

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
