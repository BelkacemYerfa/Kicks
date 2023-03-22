import { Link } from "react-router-dom";
import redirectArrow from "../assets/redirectArrow.svg";

export const ProductCategory = ({
  productId,
  productName,
  productImg,
  productRedirect,
}) => {
  return (
    <div className={`relative h-full w-full `} id={productId}>
      <img
        src={`${productImg}`}
        className={`w-full h-[348px] md:h-[600px] `}
        alt={productName}
      />
      <div className="absolute bottom-4 flex items-center justify-center w-full">
        <div className="flex items-center justify-between min-w-[80%]">
          <p className="text-ViewDetails font-semibold text-[24px] md:text-[36px] md:w-[40%]">
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
