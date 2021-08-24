import React from "react";

import {Product} from "../../../product/types";
import {UseFetchResult} from "../../hooks/useFetch";
import Spinner from "../../components/Spinner";

import ProductItem from "./Item";

type Props = UseFetchResult<Product[]>;

const ProductsList: React.FC<Props> = ({data: products, loading, error}) => (
    <div className="container pt-32 md:pt-40">
        {loading && (
            <div className="flex items-center justify-center">
                <Spinner />
            </div>
        )}

        {error && (
            <section>
                <p>There was an error while loading the products</p>
            </section>
        )}

        {products !== null && products.length > 0 ? (
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        ) : (
            <section className="text-center">
                <p>No products yet</p>
            </section>
        )}
    </div>
);

export default ProductsList;
