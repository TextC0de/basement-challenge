import {createContext, useState} from "react";

type CartModalData = {
    show: boolean;
    showCartModal: () => void;
    hideCartModal: () => void;
};

export const CartModalContext = createContext<CartModalData | undefined>(undefined);

const CartModalProvider: React.FC = (props) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <CartModalContext.Provider
            value={{
                show,
                showCartModal: () => setShow(true),
                hideCartModal: () => setShow(false),
            }}
        >
            {props.children}
        </CartModalContext.Provider>
    );
};

export default CartModalProvider;
