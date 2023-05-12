import { useEffect } from "react";
import image from "../assets/cover.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Cover = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container mx-auto rounded-lg  bg-no-repeat mt-12 h-[80vh] md:h-[90vh]  bg-contain bg-center"
      style={{ backgroundImage: `url(${image})` }}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="h-[550px] flex justify-center items-center mx-5">
        <div className="text-center">
          <h1 className="md:text-[32px] text-2xl mb-2 font-semibold text-[#020181] mx-auto max-w-md">
            HIMATIF <br /> INFORMATION WEBSITE
          </h1>
          <h2 className="md:text-[24px] text-lg max-w-xl leading-relaxed">
            Himpunan Mahasiswa Teknik Informatika Fakultas Teknik Universitas
            Islam Nusantara
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cover;
