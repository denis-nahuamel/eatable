/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import CardProduct from "../components/card-product";
import InputSearch from "../components/input-search";
import ProductType from "../components/product-type";
import { getProducts } from "../services/product-service";
import {  containerFood } from "../styles/pages";

const HomePage = ({onHandlePage}) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setFilter(response);
    });
  }, []);
  const HandleFoodType = (food) => {
    if(food !=="all") setFilter(products.filter((el)=> el.category=== food))
    else setFilter(products)
  }
  return (
    <div>
       
        <ProductType onHandleFoodType={HandleFoodType}/>
        <div css={css`${containerFood}`}>
        {products.length !==0 ? (
            filter.map((product, index) => (
            <CardProduct onHandlePage={onHandlePage} key={index} product={product}  />
            ))
        ) : (
            <p>empty products</p>
        )}
        </div>
    </div>
  );
};
export default HomePage;
