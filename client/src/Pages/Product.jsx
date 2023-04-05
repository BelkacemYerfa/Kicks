import { useParams } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../actions/createSingleProduct";
const ProductInfo = lazy(() => import("../Components/Products/ProductInfo"));
const RelatedSuggestions = lazy(() =>
  import("../Components/Products/RelatedSuggestions")
);

const Product = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);
  console.log(product);
  return (
    <section className="w-[95%] space-y-20">
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
      <RelatedSuggestions id={id} />
    </section>
  );
};

export default Product;
