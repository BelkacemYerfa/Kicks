import logo from "../assets/userlogo.svg";
import searchLogo from "../assets/searchLogo.svg";

export const Navigationbar = () => {
  return (
    <nav
      className="flex items-center justify-between w-full
     bg-white rounded-3xl p-8
    "
    >
      <div className="flex items-center gap-x-10 font-semibold text-ViewDetails ">
        <p className="">New Drops 🔥</p>
        <p>Men</p>
        <p>Woman</p>
      </div>
      <div>
        <h3>Kicks</h3>
      </div>
      <div className="flex items-center gap-x-10">
        <button className="cursor-pointer flex items-center justify-center h-10 w-10">
          <img src={searchLogo} alt="" />
        </button>
        <div className="cursor-pointer flex items-center justify-center h-10 w-10">
          <img src={logo} alt="" />
        </div>
        <div className="cursor-pointer bg-PannelBtn w-8 h-8 rounded-full flex items-center justify-center ">
          0
        </div>
      </div>
    </nav>
  );
};
