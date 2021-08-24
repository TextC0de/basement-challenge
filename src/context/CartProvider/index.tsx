import {createContext, useEffect, useState} from "react";

import {Product} from "../../../product/types";
import {DEFAULT_SIZE, LOCAL_STORAGE_KEY, Size} from "../../constants";

export type CartProduct = Product & {
    quantity: number;
    size: Size;
};

type ProductsContextData = {
    products: CartProduct[];
    addProduct: (product: Product) => void;
    removeProduct: (id: Product["id"]) => void;
    changeProductSize: (id: Product["id"], newSize: Size) => void;
};

export const CartContext = createContext<ProductsContextData | undefined>(undefined);

const CartProvider: React.FC = (props) => {
    const [products, setProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        const localProducts = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (!localProducts) return;
        setProducts(JSON.parse(localProducts));
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }, [products]);

    const addProduct = (product: Product | CartProduct) => {
        const indexOfProduct = products.findIndex(({id}) => id === product.id);

        if (indexOfProduct === -1) {
            setProducts([...products, {...product, quantity: 1, size: DEFAULT_SIZE}]);

            return;
        }

        const newProducts = [...products];

        newProducts[indexOfProduct].quantity += 1;

        setProducts(newProducts);
    };

    const removeProduct = (id: Product["id"]) => {
        const indexOfProduct = products.findIndex((product) => product.id === id);

        if (indexOfProduct === -1) {
            return;
        }

        if (products[indexOfProduct].quantity === 1) {
            setProducts([
                ...products.slice(0, indexOfProduct),
                ...products.slice(indexOfProduct + 1),
            ]);

            return;
        }

        const newProducts = [...products];

        newProducts[indexOfProduct].quantity -= 1;

        setProducts(newProducts);
    };

    const changeProductSize = (id: Product["id"], newSize: Size) => {
        const indexOfProduct = products.findIndex((product) => product.id === id);

        if (indexOfProduct === -1) {
            return;
        }

        const newProducts = [...products];

        newProducts[indexOfProduct].size = newSize;

        setProducts(newProducts);
    };

    return (
        <CartContext.Provider
            value={{
                products,
                addProduct,
                removeProduct,
                changeProductSize,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
