import { useState } from "react";
import Achievement1 from "../assets/achievement1.jpeg";
import Achievement2 from "../assets/sukmaraka.jpg";
import Achievement3 from "../assets/achievemen_icc.jpg";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: Achievement1,
      caption: "Juara III Pagar Nusa UNINUS",
    },
    {
      id: 2,
      src: Achievement2,
      caption: "Medali Perunggu Cabor Judo",
    },
    {
      id: 3,
      src: Achievement3,
      caption: "Juara 1 & 2 ICC",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container max-w-7xl px-8 lg:px-0 mx-auto">
      <div
        className=""
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 className="bg-[#020181] text-white font-semibold p-4 rounded-lg mb-12 w-fit">
          Achievments
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative hover:scale-95 ease-in duration-200"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image)}
              className="cursor-pointer rounded-lg object-cover aspect-square"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in"
              data-aos-once="true"
            />
            <div className="absolute bottom-0 w-full bg-black text-center bg-opacity-50 text-white p-2">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
