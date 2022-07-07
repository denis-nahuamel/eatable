/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import CardProduct from "../components/card-product";
import { getProducts } from "../services/product-service";
import { cardFood, containerFood } from "../styles/pages";
import { container } from "../styles/utils";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div css={css`${containerFood}`}>
      {products ? (
        products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))
      ) : (
        <p>empty products</p>
      )}
    </div>
  );
};
export default HomePage;
