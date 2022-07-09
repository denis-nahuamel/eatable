/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import CardProduct from "../components/card-product";
import InputSearch from "../components/input-search";
import ProductType from "../components/product-type";
import { getProducts } from "../services/product-service";
import {  containerFood } from "../styles/pages";

const HomePage = ({onHandlePage, search}) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [foodFilter, setFoodFilter] = useState(null);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setFilter(response);
    });
  }, []);
  useEffect(()=>{
    if(foodFilter === "all"){
      console.log("enct", search)
      setFilter(products.filter((data)=>data.name.includes(search) ))
    }
    else {
      setFilter(
        products
        .filter((el)=> el.category=== foodFilter)
        .filter((data)=>data.name.includes(search) )
        )
    }
  },[search])
  const HandleFoodType = (food) => {
    setFoodFilter(food)
    if(food !=="all") setFilter(products.filter((el)=> el.category=== food))
    else setFilter(products)
  }
  return (
    <>
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
    </>
  );
};
export default HomePage;
