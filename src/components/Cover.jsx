import { useEffect } from "react";
import image from "../assets/bgCover.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Cover = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container mx-auto rounded-lg bg-no-repeat mt-12 h-[80vh] md:h-[90vh] bg-contain bg-center"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="h-[550px] flex justify-center items-center">
        <img
          src={image}
          className="absolute w-screen z-0 h-screen md:h-[134vh] object-cover"
        />
        <div className="flex flex-col justify-center items-center z-10 w-screen h-[100vh] md:h-[134vh] backdrop-blur-[2px] bg-black bg-opacity-50">
          <div className="flex flex-col">
            <h1 className="md:text-[4rem] text-[3rem] mb-2 text-slate-300 font-bold mx-auto max-w-md relative text-justify">
              HIMATIF
            </h1>
            <h1 className="text-slate-400 text-center text-[1rem] font-semibold md:text-[1.3rem]">
              INFORMATION WEBSITE
            </h1>
          </div>
          <h2 className="font-alice md:text-[24px] text-[1rem] w-[90vw] max-w-xl leading-relaxed text-slate-50 relative text-center mt-5 md:mt-7">
            Himpunan Mahasiswa Teknik Informatika Fakultas Teknik Universitas
            Islam Nusantara
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cover;
