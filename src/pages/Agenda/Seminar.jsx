import { lazy, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { supabase } from "../../supabase";
import logoSeminar from "../../assets/seminar-web-development.png";
const Navbar = lazy(() => import("../../components/Navbar"));

const Seminar = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [instansi, setInstansi] = useState("");

  const [isProcessing, setIsProcessing] = useState(false);

  const validNama = nama.length > 1;
  const validInstansi = instansi.length > 2;
  const validEmail = email.includes("@");

  const navigate = useNavigate();

  const register = async (e) => {
    setIsProcessing(true);

    e.preventDefault();

    await supabase.from("table_seminar").insert({
      nama: nama,
      instansi: instansi,
      email: email,
    });

    setIsProcessing(false);

    navigate("/Seminar/PesertaSeminar");
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex h-screen">
        <div className="w-[45vw] bg-[#0C134F] lg:flex items-center justify-center hidden">
          <img
            src={logoSeminar}
            alt="seminar-web-development"
            className="object-cover w-[40vw] xl:w-[30vw]"
          />
        </div>
        <div className="lg:w-[55vw] w-full">
          <h1 className="mt-[7rem] text-center text-[1.5rem] font-semibold text-[#0C134F] font-poppins md:text-[2rem]">
            Seminar Himatif
          </h1>
          <h2 className="text-center font-alice text-[1rem] font-bold md:text-[1.5rem]">
            Web Development
          </h2>
          <h2 className="text-center font-poppins text-[1rem] font-bold mt-[1.5rem]">
            Daftar Sekarang
          </h2>
          <form onSubmit={register}>
            <div className="flex flex-col gap-2 ml-[10vw] mt-[1rem] md:ml-[20vw] lg:ml-[13vw]">
              <label htmlFor="name" className="font-bold font-poppins">
                Nama :{" "}
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#E9E9E9] w-[80vw] h-8 rounded-md outline-none focus:outline-[#1C5FD4] duration-500 pl-[5vw] md:w-[60vw] md:h-[3rem] md:pl-[2vw] lg:w-[30vw] lg:h-[2.5rem]"
                placeholder="Masukan nama"
                onChange={(event) => {
                  setNama(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col gap-2 ml-[10vw] mt-[1rem] md:ml-[20vw] lg:ml-[13vw]">
              <label htmlFor="instansi" className="font-bold font-poppins">
                Instansi :{" "}
              </label>
              <input
                type="text"
                id="instansi"
                className="bg-[#E9E9E9] w-[80vw] h-8 rounded-md outline-none focus:outline-[#1C5FD4] duration-500 pl-[5vw] md:w-[60vw] md:h-[3rem] md:pl-[2vw] lg:w-[30vw] lg:h-[2.5rem]"
                placeholder="Masukan instansi"
                onChange={(event) => {
                  setInstansi(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col gap-2 ml-[10vw] mt-[1rem] md:ml-[20vw] lg:ml-[13vw]">
              <label htmlFor="email" className="font-bold font-poppins">
                Email :{" "}
              </label>
              <input
                type="text"
                id="email"
                className="bg-[#E9E9E9] w-[80vw] h-8 rounded-md outline-none focus:outline-[#1C5FD4] duration-500 pl-[5vw] md:w-[60vw] md:h-[3rem] md:pl-[2vw] lg:w-[30vw] lg:h-[2.5rem]"
                placeholder="Masukan Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col">
              {" "}
              <button
                className={`ml-[10vw] mt-[1.5rem] bg-[#0C134F] w-[80vw] text-white h-[2rem] rounded-md duration-500 hover:bg-[#18259c] font-poppins md:w-[60vw] md:ml-[20vw] lg:ml-[13vw] lg:w-[30vw] ${
                  (!validNama || !validInstansi || !validEmail) &&
                  "cursor-not-allowed opacity-50"
                }`}
                disabled={!validNama || !validInstansi || !validEmail}
              >
                {isProcessing ? (
                  <div className="px-8">
                    <FontAwesomeIcon icon="fa-solid fa-circle-notch" spin />
                  </div>
                ) : (
                  "Daftar"
                )}
              </button>
              <Link
                to="/Seminar/PesertaSeminar"
                className="mt-[0.5rem] text-center font-poppins text-[#0C134F] font-bold text-[0.8rem] cursor-pointer md:ml-[0.5vw] lg:ml-[1vw]"
              >
                Lihat Peserta
              </Link>
              <p className="font-poppins text-center text-[0.7rem] w-[80vw] ml-[9vw] font-bold mt-[0.5rem] md:text-[1rem] md:w-[50vw] md:ml-[25vw] lg:ml-[13vw] lg:text-[0.8rem] lg:w-[30vw]">
                Dengan mendaftar, saya menyetujui Syarat dan Ketentuan yang
                telah ditentukan
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seminar;
