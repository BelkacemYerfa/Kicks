export const ProductCard = () => {
  return (
    <div className="flex flex-col gap-y-3 w-[45%] md:w-[24%]">
      <div className=" p-2 bg-white rounded-[28px] first-letter">
        <div className="relative">
          <div
            className=" absolute left-0 top-0 bg-ShopBtn text-white text-xs font-semibold 
            rounded-tl-3xl rounded-br-3xl w-[58px] h-[38px] flex items-center justify-center "
          >
            New
          </div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
            className="rounded-3xl w-full md:h-[300px] h-[164px]"
            alt="Product Name"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="px-1 text-xl font-semibold text-ViewDetails">
          ADIDAS 4DFWD X PARLEY RUNNING SHOES
        </p>
        <button
          className="Uppercase text-sm font-medium bg-ViewDetails
           text-white px-2 py-4 rounded-lg
           duration-300 ease-in-out"
        >
          View Product - <span className="text-PannelBtn">$125</span>
        </button>
      </div>
    </div>
  );
};
