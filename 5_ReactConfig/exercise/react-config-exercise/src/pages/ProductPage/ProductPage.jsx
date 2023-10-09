import React, {useEffect, useState} from "react";
import { ProductItem } from "../../components/ProductItem";
import { SearchBar } from "../../components/SearchBar";
//import "./ProductPage.css";
import { getProducts } from "../../api/products";
import { searchProducts } from "../../api/products";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
        });
    }, []);

    const getProductsByQuery = (query) => {
        searchProducts(query).then((products) => {
            setProducts(products);
        });
    }

    return (
        <div>
            <h1>Catalog</h1>
            <SearchBar onClick={getProductsByQuery} />
            {products?.products?.map((product) => {
                return <ProductItem key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ProductPage;