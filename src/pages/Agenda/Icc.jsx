import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logoIcc from "../../assets/logo-icc-season2.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { supabase } from "../../supabase";

const Icc = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [wa, setWa] = useState("");
  const [kelas, setKelas] = useState("A1");
  const [angkatan, setAngkatan] = useState("2022");
  const [laptop, setLaptop] = useState("tidak");

  const [isProcessing, setIsProcessing] = useState(false);

  const validNama = nama.length > 1;
  const validNim = nim.length > 10;
  const validWa = wa.length > 10;

  const navigate = useNavigate();

  const register = async (e) => {};

  return (
    <div className="">
      <Navbar />
      <div className="flex h-[120vh]">
        <div className="w-[45vw] bg-[#6056DB] lg:flex items-center justify-center hidden">
          <img
            src={logoIcc}
            alt="icc-season2"
            className="object-cover w-[20vw] xl:w-[15vw]"
          />
        </div>
        <div className="lg:w-[55vw] w-full">
          <h1 className="mt-[7rem] text-center text-[1.5rem] font-semibold text-[#1C5FD4] font-poppins md:text-[2rem]">
            Informatika Coding Camp
          </h1>
          <h2 className="text-center font-alice text-[1rem] font-bold md:text-[1.5rem]">
            Season 2
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
              <label htmlFor="nim" className="font-bold font-poppins">
                NIM :{" "}
              </label>
              <input
                type="number"
                id="nim"
                className="bg-[#E9E9E9] w-[80vw] h-8 rounded-md outline-none focus:outline-[#1C5FD4] duration-500 pl-[5vw] md:w-[60vw] md:h-[3rem] md:pl-[2vw] lg:w-[30vw] lg:h-[2.5rem]"
                placeholder="Masukan NIM"
                min={0}
                onChange={(event) => {
                  setNim(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col gap-2 ml-[10vw] mt-[1rem] md:ml-[20vw] lg:ml-[13vw]">
              <label htmlFor="wa" className="font-bold font-poppins">
                No whatsapp:{" "}
              </label>
              <input
                type="number"
                id="wa"
                className="bg-[#E9E9E9] w-[80vw] h-8 rounded-md outline-none focus:outline-[#1C5FD4] duration-500 pl-[5vw] md:w-[60vw] md:h-[3rem] md:pl-[2vw] lg:w-[30vw] lg:h-[2.5rem]"
                placeholder="Masukan no whatsapp aktif"
                min={0}
                onChange={(event) => {
                  setWa(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex">
              <div className="flex flex-col gap-2 ml-[10vw] mt-[1rem] md:ml-[20vw] lg:ml-[13vw]">
                <label
                  htmlFor="kelas"
                  className="font-bold font-poppins text-[0.8rem] md:text-[1rem]"
                >
                  Kelas{" "}
                </label>
                <select
                  id="kelas"
                  className="bg-[#E9E9E9] rounded-md outline-none focus:outline-[#1C5FD4] duration-500 w-[15vw] h-[2rem] font-poppins pl-[2vw] lg:w-[5vw] lg:pl-[1vw]"
                  onChange={(event) => {
                    setKelas(event.target.value);
                  }}
                >
                  <option value="A1" selected>
                    A1
                  </option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                  <option value="A6">A6</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 ml-[5vw] mt-[1rem] md:ml-[1vw]">
                <label
                  htmlFor="angkatan"
                  className="font-bold font-poppins text-[0.8rem] md:text-[1rem]"
                >
                  Angkatan{" "}
                </label>
                <select
                  id="angkatan"
                  className="bg-[#E9E9E9] rounded-md outline-none focus:outline-[#1C5FD4] duration-500 w-[20vw] h-[2rem] font-poppins pl-[2vw] lg:w-[10vw]"
                  onChange={(event) => {
                    setAngkatan(event.target.value);
                  }}
                >
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022" selected>
                    2022
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2 ml-[5vw] mt-[1rem] md:ml-[1vw]">
                <label
                  htmlFor="laptop"
                  className="font-bold font-poppins text-[0.8rem] md:text-[1rem]"
                >
                  Memiliki Laptop ?{" "}
                </label>
                <select
                  id="laptop"
                  className="bg-[#E9E9E9] rounded-md outline-none focus:outline-[#1C5FD4] duration-500 w-[35vw] h-[2rem] font-poppins pl-[2vw] md:w-[23vw] lg:w-[10vw]"
                  onChange={(event) => {
                    setLaptop(event.target.value);
                  }}
                >
                  <option value="ya">Ya</option>
                  <option value="tidak" selected>
                    Tidak
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              {" "}
              <button
                className={`ml-[10vw] mt-[1.5rem] bg-[#6056DB] w-[80vw] text-white h-[2rem] rounded-md duration-500 hover:bg-[#473fa0] font-poppins md:w-[60vw] md:ml-[20vw] lg:ml-[13vw] lg:w-[30vw] ${
                  (!validNama || !validNim || !validWa) &&
                  "cursor-not-allowed opacity-50"
                }`}
                disabled={!validNama || !validNim || !validWa}
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
                to="/Icc/PesertaIcc"
                className="mt-[0.5rem] text-center font-poppins text-[#6056DB] font-bold text-[0.8rem] cursor-pointer md:ml-[0.5vw] lg:ml-[2vw]"
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

export default Icc;
