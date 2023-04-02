import { Link } from "react-router-dom";
import redirectArrow from "../../assets/redirectArrow.svg";

export const ProductCategory = ({
  productId,
  productName,
  productImg,
  productRedirect,
}) => {
  return (
    <div className={`relative h-full md:w-full `} id={productId}>
      <img
        src={`${productImg}`}
        className={`h-[348px] w-full md:h-[600px] `}
        alt={productName}
      />
      <div className="absolute bottom-4 flex w-full items-center justify-center">
        <div className="flex min-w-[80%] items-center justify-between">
          <p className="text-[24px] font-semibold text-ViewDetails md:w-[40%] md:text-[36px]">
            {productName}
          </p>
          <Link
            to={productRedirect}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-ViewDetails"
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
