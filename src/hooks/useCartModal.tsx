import {useContext} from "react";

import {CartModalContext} from "../context/CartModal";

const useCartModalContext = () => {
    const context = useContext(CartModalContext);

    if (context === undefined) {
        throw new Error("useCartModalContext must be used within the CartModalContext.Provider");
    }

    return context;
};

export default useCartModalContext;
