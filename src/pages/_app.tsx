import type {AppProps} from "next/app";

import Seo from "../components/Seo";
import CartModalProvider from "../context/CartModal";
import CartProvider from "../context/CartProvider";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Seo />

            <CartProvider>
                <CartModalProvider>
                    <Component {...pageProps} />
                </CartModalProvider>
            </CartProvider>
        </>
    );
}
export default App;
