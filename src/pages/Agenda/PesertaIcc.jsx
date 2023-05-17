import { useState, useEffect, lazy } from "react";
import { supabase } from "../../supabase";
import logoIcc from "../../assets/logo-icc-season2.png";
const Navbar = lazy(() => import("../../components/Navbar"));

const PesertaIcc = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await supabase.from("table_icc").select();
    setUsers(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      <section className="container  mx-auto pt-24 p-6 font-inter mt-[10vw] md:mt-[5vw] lg:mt-[1vw]">
        <div className="grid place-items-center">
          <img
            src={logoIcc}
            alt="icc-season-2"
            className="w-[15vw] md:w-[8vw] lg:w-[7vw] xl:w-[5vw]"
          />
        </div>
        <div className="text-center max-w-md mx-auto md:w-full pb-5 mt-[2vw]">
          <h1 className="text-3xl font-bold font-poppins">
            Peserta ICC Season 2
          </h1>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-white  bg-[#6056DB] uppercase border-b border-gray-600">
                  <th className="px-4 py-3">No</th>

                  <th className="px-4 py-3">Nama</th>
                  <th className="px-4 py-3">NIM</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Angkatan</th>
                  <th className="px-4 py-3">Status pembayaran</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((user, index) => (
                  <tr className="text-gray-700" key={user.id}>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <p className="font-semibold text-black">{index + 1}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <p className="font-semibold capitalize text-black">
                          {user.nama}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <p className="font-semibold text-black">{user.nim}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <p className="font-semibold capitalize text-black">
                          {user.kelas}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <p className="font-semibold text-black">
                          {user.angkatan}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <p
                          className={`font-semibold ${
                            user.pembayaran.toLowerCase() === "belum bayar"
                              ? "text-red-500 bg-red-100 rounded-md p-[1vw]"
                              : user.pembayaran.toLowerCase() === "belum lunas"
                              ? "text-yellow-500 bg-yellow-100 rounded-md p-[1vw]"
                              : "text-green-500 bg-green-100 rounded-md p-[1vw]"
                          }`}
                        >
                          {user.pembayaran}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PesertaIcc;
