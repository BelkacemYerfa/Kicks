import { useParams } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../actions/createSingleProduct";
const ProductInfo = lazy(() => import("../Components/Products/ProductInfo"));

const Product = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);
  console.log(product);
  return (
    <section className="w-[95%]">
      <ProductInfo
        name={product?.name}
        thumbnail={product?.thumbnail}
        price={product?.price}
        description={product?.description}
        category={product?.category}
        brand={product?.brand}
        features={product?.features}
        images={product?.images}
        url={product?.url}
      />
    </section>
  );
};

export default Product;
