import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";
import "../CarouselButton.css";
import society from "../assets/society.png";
import goAndRust from "../assets/goAndRust.png";
import chatGPTvsGoogle from "../assets/chatGPTvsGoogle.png";
import openAi from "../assets/openai.png";
import ramadhan from "../assets/ramadhan-berkah.jpg";
import pmm from "../assets/pmm2.jpg";
import icc2 from "../assets/icc22.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Berita = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1310 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1310, min: 1115 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1115, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [differenceInDays, setDifferenceInDays] = useState(0);
  const [differenceInDays2, setDifferenceInDays2] = useState(0);
  const [differenceInDays3, setDifferenceInDays3] = useState(0);

  const today = new Date();
  const targetDate = new Date("2023-03-11");
  const targetDate2 = new Date("2023-04-06");
  const targetDate3 = new Date("2023-06-23");

  useEffect(() => {
    // Set time
    const differenceInTime = today.getTime() - targetDate.getTime();
    const differenceInTime2 = today.getTime() - targetDate2.getTime();
    const differenceInTime3 = today.getTime() - targetDate3.getTime();
    // Set day
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const differenceInDays2 = differenceInTime2 / (1000 * 3600 * 24);
    const differenceInDays3 = differenceInTime3 / (1000 * 3600 * 24);
    setDifferenceInDays(Math.floor(differenceInDays));
    setDifferenceInDays2(Math.floor(differenceInDays2));
    setDifferenceInDays3(Math.floor(differenceInDays3));
  }, [targetDate, today]);

  return (
    // ======================================
    // ==============Dekstop=================
    // ======================================
    <div className="container mx-auto mt-10 md:mt-[10vw]">
      <div className="hidden md:block">
        <div className="flex justify-center">
          <div
            className="flex border-2 border-[#020181]  pl-[50px] h-[547px] lg:h-[600px] md:w-[760px] lg:w-[83vw] my-[40px] bg-[#020181] rounded-[12px] flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-[32px] font-[400px] lg:text-[35px] m-[26px] pl-[10px] text-white py-2">
              News
            </h2>
            {/* Carousel */}
            <div>
              <div>
                <Carousel responsive={responsive} className="mx-[6vw]">
                  {/* slide */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/icc2"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[400px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={icc2}
                          alt="icc2"
                          className="rounded-t-md h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[26px] lg:mt-[14px] h-[126px] lg:h-[156px] w-[200px]">
                        <h1 className="text-[16px] lg:text-[18px]">
                          Peserta Terbaik ICC Season 2
                        </h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays3 === 0 ? (
                              <span className="text-[12px] lg:text-[13px] text-red-500">
                                Saat ini
                              </span>
                            ) : (
                              <span className="text-[12px] lg:text-[13px] text-red-500">
                                {differenceInDays3} hari yang lalu
                              </span>
                            )}
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[12px]">
                          Event ICC S2 telah hadir dan mencetak talenta baru!
                          Tema Fullstack Development dengan menggunakan ReactJS
                          dan Golang
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* slide */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/Pmm"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[400px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={pmm}
                          alt="pmm"
                          className="rounded-t-md h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[26px] lg:mt-[16px] h-[126px] lg:h-[156px] w-[200px]">
                        <h1 className="text-[16px] lg:text-[14px]">
                          Mahasiswa Informatika lolos PMM 2023
                        </h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays3 === 0 ? (
                              <span className="text-[12px] lg:text-[13px] text-red-500">
                                Saat ini
                              </span>
                            ) : (
                              <span className="text-[12px] lg:text-[13px] text-red-500">
                                {differenceInDays3} hari yang lalu
                              </span>
                            )}
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[12px]">
                          Dua Mahasiswa Informatika lolos Program Pertukaran
                          mahasiswa Merdeka yang diselenggarakan oleh
                          Kemendikbudristek Indonesia pada tahun 2023.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* slide 1 */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/Ramadhan"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[400px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={ramadhan}
                          alt=""
                          className="rounded-t-md h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[24px] lg:mt-[10px] h-[126px] lg:h-[156px] w-[200px] ">
                        <h1 className="text-[16px] lg:text-[16px]">
                          Ramadhan berkah bersama Teknik jilid VII
                        </h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays2} hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[12px]">
                          Senat mahasiswa fakultas teknik mengundang 30 orang
                          anak yatim dari rumah creative yatim dhuafa Al-Hikmah
                          Kopo Kabupaten Bandung.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* slide 2 */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/Society"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[378px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={society}
                          alt=""
                          className="rounded-t-md h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] lg:mt-[8px] h-[126px] lg:h-[156px] w-[200px] ">
                        <h1 className="text-[20px] lg:text-[21px]">
                          Apa itu Society 5.0 ?
                        </h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays} hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[14px]">
                          Society 5.0 konsep terbaru dalam kehidupan teknologi
                          di zaman sekarang.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* slide 3 */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/Bhs"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[378px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={goAndRust}
                          alt=""
                          className="rounded-t-md h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] lg:mt-[8px] h-[126px] lg:h-[156px] w-[200px] ">
                        <h1 className="text-[20px] lg:text-[22px]">
                          Golang and Rust
                        </h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays} hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[14px]">
                          Dua Bahasa Pemprograman yang sedang naik daun dan
                          dicari oleh perusahaan ternama.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* slide 4 */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/Duel"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[378px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={chatGPTvsGoogle}
                          alt=""
                          className="rounded-t-md w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] lg:mt-[8px] h-[126px] lg:h-[156px] w-[200px] ">
                        <h1 className="text-[20px] lg:text-[22px]">
                          Google vs ChatGPT
                        </h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays} hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[14px]">
                          Duel AI Terbeser antara Google dan ChatGPT, Siapa yang
                          terbaik?
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* slide 5 */}
                  <div className="w-[264px] hover:opacity-80 duration-300">
                    <Link
                      to="/OpenAi"
                      className="flex flex-col w-[261px] lg:w-[281px] h-[378px] lg:h-[412px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={openAi}
                          alt=""
                          className="rounded-t-md w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] lg:mt-[8px] h-[126px] lg:h-[156px] w-[200px] ">
                        <h1 className="text-[20px] lg:text-[22px]">Open AI</h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays} hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px] lg:text-[14px]">
                          Open Ai Merupakan sebuah perusahaan AI yang sedang
                          menjadi buah bibir di dunia maya saat ini.
                        </p>
                      </div>
                    </Link>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================================
      ==============Mobile================
      ===================================== */}
      <div className="md:hidden max-[200px]:hidden">
        <div className="flex justify-center">
          <div
            className="flex border-2 border-[#020181] w-[302px] sm:w-[385px] h-[1100px] sm:h-[1375px] my-[60px] bg-[#020181] rounded-[12px] flex-col overflow-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-[24px] sm:text-[30px] text-white m-[20px] pl-[6px] sm:pl-[22px] font-[400px]">
              News
            </h2>

            <div className="pl-[46px] sm:pl-[66px] pt-[10px]">
              {/* Slide */}
              <div className="w-[212px] sm:w-[263px] hover:opacity-80 duration-300">
                <Link
                  to="/Pmm"
                  className="flex flex-col w-[210px] h-[330px] sm:w-[261px] sm:h-[430px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                    <img
                      src={icc2}
                      alt="icc2"
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px] sm:mt-12">
                    <h1 className="text-[12px] sm:text-[18px]">
                      Peserta Terbaik ICC Season 2
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays3 === 0 ? (
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            Saat ini
                          </span>
                        ) : (
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays3} hari yang lalu
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="text-[8px] sm:text-[13px] w-[180px] mb-1">
                      Event ICC S2 telah hadir dan mencetak talenta baru! Tema
                      Fullstack Development dengan menggunakan ReactJS dan
                      Golang
                    </p>
                  </div>
                </Link>
              </div>
              {/* Slide */}
              <div className="w-[212px] sm:w-[263px] hover:opacity-80 duration-300 mt-[30px]">
                <Link
                  to="/Pmm"
                  className="flex flex-col w-[210px] h-[330px] sm:w-[261px] sm:h-[430px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                    <img
                      src={pmm}
                      alt="pmm"
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px] sm:mt-12">
                    <h1 className="text-[14px] sm:text-[18px]">
                      Mahasiswa Informatika lolos PMM 2023
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays3 === 0 ? (
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            Saat ini
                          </span>
                        ) : (
                          <span className="text-[12px] lg:text-[13px] text-red-500">
                            {differenceInDays3} hari yang lalu
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="text-[8px] sm:text-[13px] w-[180px] mb-1">
                      Dua Mahasiswa Informatika lolos Program Pertukaran
                      mahasiswa Merdeka yang diselenggarakan oleh
                      Kemendikbudristek Indonesia pada tahun 2023.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Slide 1 */}
              <div className="w-[212px] sm:w-[263px] hover:opacity-80 duration-300 mt-[30px]">
                <Link
                  to="/Ramadhan"
                  className="flex flex-col w-[210px] h-[300px] sm:w-[261px] sm:h-[450px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                    <img
                      src={ramadhan}
                      alt=""
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px] sm:mt-12 ">
                    <h1 className="text-[14px] sm:text-[18px]">
                      Ramadhan berkah bersama Teknik jilid VII
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays2} hari yang lalu
                      </span>
                    </div>
                    <p className="text-[8px] sm:text-[13px] w-[180px] mb-1">
                      Senat mahasiswa fakultas teknik mengundang 30 orang anak
                      yatim dari rumah creative yatim dhuafa Al-Hikmah Kopo
                      Kabupaten Bandung.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Slide 2 */}
              <div className="w-[212px] sm:w-[263px] mt-[30px] hover:opacity-80 duration-300">
                <Link
                  to="../Society"
                  className="flex flex-col w-[210px] h-[285px] sm:w-[261px] sm:h-[358px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                    <img
                      src={society}
                      alt=""
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px] sm:mt-3">
                    <h1 className="text-[16px] sm:text-[25px]">
                      Apa itu Society 5.0 ?
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays} hari yang lalu
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[13px] w-[180px]">
                      Society 5.0 konsep terbaru dalam kehidupan teknologi di
                      zaman sekarang.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Slide 3 */}

              <div className="w-[212px] sm:w-[263px] mt-[30px] hover:opacity-80 duration-300">
                <Link
                  to="../Bhs"
                  className="flex flex-col w-[210px] h-[290px] sm:w-[261px] sm:h-[358px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[200px] rounded-t-[0.64rem] text-center">
                    <img
                      src={goAndRust}
                      alt=""
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[126px] w-[200px]">
                    <h1 className="text-[16px] sm:text-[25px]">
                      Golang and Rust
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays} hari yang lalu
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[13px] w-[180px]">
                      Dua Bahasa Pemprograman yang sedang naik daun dan dicari
                      oleh perusahaan ternama.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Slide 4 */}
              <div className="w-[212px] sm:w-[263px] mt-[30px] hover:opacity-80 duration-300">
                <Link
                  to="../Duel"
                  className="flex flex-col w-[210px] h-[332px] sm:w-[261px] sm:h-[429px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[268px] rounded-t-[0.64rem] text-center">
                    <img
                      src={chatGPTvsGoogle}
                      alt=""
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[156px] w-[200px]">
                    <h1 className="text-[16px] sm:text-[18px] w-[150px]">
                      Google vs ChatGPT
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays} hari yang lalu
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[13px] w-[180px]">
                      Duel AI Terbeser antara Google dan ChatGPT, Siapa yang
                      terbaik?
                    </p>
                  </div>
                </Link>
              </div>

              {/* Slide 5 */}
              <div className="w-[212px] sm:w-[263px] mt-[30px] hover:opacity-80 duration-300">
                <Link
                  to="../OpenAi"
                  className="flex flex-col w-[210px] h-[332px] sm:w-[261px] sm:h-[429px] font-semibold bg-white rounded-[0.64rem]"
                >
                  <div className="w-auto h-[268px] rounded-t-[0.64rem] text-center">
                    <img
                      src={openAi}
                      alt=""
                      className="rounded-t-[0.58rem] h-full group-hover:opacity-90"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-[20px] h-[156px] w-[200px]">
                    <h1 className="text-[16px] sm:text-[18px] w-[150px]">
                      Open AI
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 animate-pulse">
                      <div className="bg-red-500 w-[7px] sm:w-[10px] rounded-full h-[7px] sm:h-[10px]"></div>
                      <span className="text-[9px] sm:text-[12px] text-red-500">
                        {differenceInDays} hari yang lalu
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[13px] w-[180px]">
                      Open Ai Merupakan sebuah perusahaan AI yang sedang menjadi
                      buah bibir di dunia maya saat ini.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
