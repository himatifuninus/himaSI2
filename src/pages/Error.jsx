import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="text-[#2E3BC4] font-bold text-5xl">
            ERROR 404 NOT FOUND
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
