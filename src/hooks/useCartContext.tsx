import {useContext} from "react";

import {CartContext} from "../context/CartProvider";

const useCartContext = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("useCartContext must be used within the CartModalContext.Provider");
    }

    return context;
};

export default useCartContext;
