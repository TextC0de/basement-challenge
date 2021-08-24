import type {NextPage} from "next";

import {Product} from "../../product/types";
import {QUERY_PRODUCTS} from "../api/constants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../views/Hero";
import ProductsList from "../views/ProductsList";
import useFetch from "../hooks/useFetch";
import CartModal from "../views/CartModal";

const Home: NextPage = () => {
    const {error, loading, data} = useFetch<Product[]>(QUERY_PRODUCTS);

    return (
        <>
            <Header />

            <main className="bg-black">
                <Hero />
                <ProductsList data={data} error={error} loading={loading} />
                <CartModal />
            </main>

            <Footer />
        </>
    );
};

export default Home;
