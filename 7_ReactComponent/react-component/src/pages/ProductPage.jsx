import React from "react";
import { products } from "../../data/products";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import "./ProductPage.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { FilterProduct } from "../../components/FilterProduct/FilterProduct";
const ProductPage = () => {
  const uniqueProductList =     [
    ...new Set(
      products.map((product) => {
        return product.category;
      })
    ),
  ];
  const filterOptions = uniqueProductList.map((item) => {
    return {
      title: item,
      value: item,
    };
  });
  return (
    <div>
      <h1>Catalog</h1>
      <SearchBar />
      <FilterProduct options={filterOptions} />
      {products.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};
export default ProductPage;
