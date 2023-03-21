import { Link } from "react-router-dom";
import redirectArrow from "../assets/redirectArrow.svg";

export const ProductCategory = ({
  productId,
  productName,
  productImg,
  productRedirect,
  index,
}) => {
  return (
    <div className={`relative h-full w-full `} id={productId}>
      <img
        src={`${productImg}`}
        className={`w-full h-[600px] ${
          index % 2 === 0 ? "rounded-none" : "rounded-tl-[4rem]"
        }`}
        alt={productName}
      />
      <div className="absolute bottom-4 flex items-center justify-center w-full">
        <div className="flex items-center justify-between min-w-[80%]">
          <p className="text-ViewDetails font-semibold text-[36px] w-[40%]">
            {productName}
          </p>
          <Link
            to={productRedirect}
            className="flex items-center justify-center h-10 w-10 bg-ViewDetails rounded-lg"
          >
            <img
              src={redirectArrow}
              className="h-8 w-8"
              alt="redirect arrow "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
