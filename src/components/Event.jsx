import { useEffect } from "react";
import iccSeason2 from "../assets/iccSeason2.jpg";
import Discuss2 from "../assets/icc.jpg";
import studyBanding from "../assets/study-banding.jpeg";
import codingImage from "../assets/6.png";
import diesnat5 from "../assets/diesnat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Event = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto lg:ml-11">
      <div className="bg-[#FAFEFF] duration-300">
        <div className="h-[130px] flex items-center">
          <div
            className="bg-[#020181] w-[130px] h-[50px] rounded-md flex justify-center items-center max-[500px]:w-[100px] mx-[5.75vw]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-white font-semibold">Timelines</h2>
          </div>
        </div>
        {/* mobile */}
        <div className="min-[501px]:hidden flex justify-center">
          <div className="w-[80vw] h-[80vh]">
            <div className="h-[17vh] flex">
              <div className="w-[49%] flex flex-col items-end justify-center pr-5">
                <h3 className="text-semibold">Pelatihan ICC</h3>
                <h3 className="text-[#5BCDA4] text-semibold text-[0.8rem]">
                  6 Mei - 3 Juni 2023
                </h3>
              </div>
              <div className="flex items-end w-[2%]">
                <div
                  className="bg-[#020181] w-[100%] h-[100%] rounded-t"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="flex items-center w-[12%]">
                <div
                  className="bg-[#020181] w-[100%] h-[0.7vh] rounded-r"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="w-[37%] flex items-center pl-2">
                <img
                  src={iccSeason2}
                  alt="Discuss"
                  className="shadow-md w-[100px] h-[70px] rounded-md border-2 border-slate-300 object-cover"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="h-[17vh] flex">
              <div className="w-[37%] flex items-center pr-2 justify-end">
                <img
                  src={diesnat5}
                  alt="Discuss"
                  className="shadow-md w-[100px] h-[70px] rounded-md border-2 border-slate-300 object-fill"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
              <div className="flex items-center w-[12%]">
                <div
                  className="bg-[#020181] w-[100%] h-[0.7vh] rounded-l"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="flex items-end w-[2%]">
                <div
                  className="bg-[#020181] w-[100%] h-[100%]"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="w-[49%] flex flex-col justify-center pl-5">
                <h3 className="text-semibold text-[1rem]">Diesnatalis 5</h3>
                <h3 className="text-[#5BCDA4] text-semibold text-[0.8rem]">
                  24 Juni 2023
                </h3>
              </div>
            </div>
            <div className="h-[17vh] flex">
              <div className="w-[49%] flex flex-col items-end justify-center pr-5 ">
                <h3 className="text-semibold w-[23vw]">
                  Pengenalan Informatika
                </h3>
                <h3 className="text-[#5BCDA4] text-semibold text-[0.8rem]">
                  9 Agustus 2023
                </h3>
              </div>
              <div className="flex items-end w-[2%]">
                <div
                  className="bg-[#020181] w-[100%] h-[100%]"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="flex items-center w-[12%]">
                <div
                  className="bg-[#020181] w-[100%] h-[0.7vh] rounded-r"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="w-[37%] flex items-center pl-2">
                <img
                  src={codingImage}
                  alt="Discuss"
                  className="shadow-md w-[100px] h-[70px] rounded-md border-2 border-slate-300 object-cover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="h-[17vh] flex">
              <div className="w-[37%] flex items-center pr-2 justify-end">
                <img
                  src={studyBanding}
                  alt="codingImage"
                  className="shadow-md w-[100px] h-[70px] rounded-md border-2 border-slate-300 object-cover"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-once="true"
                />
              </div>
              <div className="flex items-center w-[12%]">
                <div
                  className="bg-[#020181] w-[100%] h-[0.7vh] rounded-l"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="flex items-end w-[2%]">
                <div
                  className="bg-[#020181] w-[100%] h-[100%] rounded-b"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-once="true"
                ></div>
              </div>
              <div className="w-[49%] flex flex-col justify-center pl-5">
                <h3 className="text-semibold text-[1rem]">Study Banding</h3>
                <h3 className="text-[#5BCDA4] text-semibold text-[0.8rem]">
                  19 September 2023
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* desktop */}
        <div className="w-[89vw] h-[490px] flex justify-center max-[500px]:hidden ">
          <div className="w-[27%] h-[430px]">
            <div className=" h-[210px]">
              <div className=" h-[70%] flex justify-center items-center">
                <img
                  src={iccSeason2}
                  alt="Discuss"
                  className="shadow-md w-[150px] h-[100px] rounded-lg border border-slate-300 object-cover"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-once="true"
                />
              </div>
              <div className="h-[30%] flex justify-center">
                <div
                  className="bg-[#020181] w-[5px] h-full rounded-t"
                  data-aos="fade-zoom-in"
                  data-aos-duration="700"
                  data-aos-once="true"
                ></div>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="bg-[#020181] w-[230px] h-[5px] rounded-l"
                data-aos="fade-zoom-in"
                data-aos-duration="700"
                data-aos-once="true"
              ></div>
            </div>
            <div className="h-[75px] flex justify-center flex-col items-center">
              <h3 className="text-semibold text-[1.2rem]">Pelatihan ICC</h3>
              <h3 className="text-[#5BCDA4] text-semibold text-[1rem]">
                6 Mei - 3 Juni 2023
              </h3>
            </div>
          </div>
          <div className="w-[27%] h-[430px]">
            <div className="h-[210px] flex items-end justify-center">
              <div className="h-[75px] flex justify-center flex-col items-center">
                <h3 className="text-semibold text-[1.2rem]">Diesnatalis 5</h3>
                <h3 className="text-[#5BCDA4] text-semibold text-[1rem]">
                  24 Juni 2023
                </h3>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="bg-[#020181] w-full h-[5px]"
                data-aos="fade-zoom-in"
                data-aos-duration="800"
                data-aos-once="true"
              ></div>
            </div>
            <div className="h-[20%] flex justify-center">
              <div
                className="bg-[#020181] w-[5px] h-[70%] rounded-b"
                data-aos="fade-zoom-in"
                data-aos-duration="800"
                data-aos-once="true"
              ></div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={diesnat5}
                alt="Discuss"
                className="shadow-md w-[150px] h-[100px] rounded-lg border border-slate-300 object-cover"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          </div>
          <div className="w-[27%] h-[430px]">
            <div className="h-[210px]">
              <div className="h-[70%] flex justify-center items-center">
                <img
                  src={codingImage}
                  alt="Discuss"
                  className="shadow-md w-[150px] h-[100px] rounded-lg border border-slate-300 object-cover"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-once="true"
                />
              </div>
              <div className=" h-[30%] flex justify-center">
                <div
                  className="bg-[#020181] w-[5px] h-full rounded-t"
                  data-aos="fade-zoom-in"
                  data-aos-duration="900"
                  data-aos-once="true"
                ></div>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="bg-[#020181] w-full h-[5px]"
                data-aos="fade-zoom-in"
                data-aos-duration="900"
                data-aos-once="true"
              ></div>
            </div>
            <div className="h-[75px] flex justify-center flex-col items-center">
              <h3 className="text-semibold text-[1.2rem]">
                Pengenalan Informatika
              </h3>
              <h3 className="text-[#5BCDA4] text-semibold text-[1rem">
                9 Agustus 2023
              </h3>
            </div>
          </div>
          <div className="w-[27%] h-[430px]">
            <div className="h-[210px] flex items-end justify-center">
              <div className="h-[75px] flex justify-center flex-col items-center">
                <h3 className="text-semibold text-[1.2rem]">Study Banding</h3>
                <h3 className="text-[#5BCDA4] text-semibold text-[15px]">
                  19 September 2023
                </h3>
              </div>
            </div>
            <div className="flex">
              <div
                className="bg-[#020181] w-[260px] h-[5px] rounded-r"
                data-aos="fade-zoom-in"
                data-aos-duration="600"
                data-aos-once="true"
              ></div>
            </div>
            <div className="h-[20%] flex justify-center">
              <div
                className="bg-[#020181] w-[5px] h-[70%] rounded-b"
                data-aos="fade-zoom-in"
                data-aos-duration="600"
                data-aos-once="true"
              ></div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={studyBanding}
                alt="Discuss"
                className="shadow-md w-[150px] h-[100px] rounded-lg border border-slate-300 object-cover"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-once="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
