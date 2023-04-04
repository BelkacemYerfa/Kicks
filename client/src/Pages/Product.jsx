import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../actions/createSingleProduct";

const Product = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);
  console.log(product);
  return <section></section>;
};

export default Product;
