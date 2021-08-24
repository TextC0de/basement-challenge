import Image from "next/image";
import React from "react";

import {CartProduct} from "../../../context/CartProvider";
import {formatPrice} from "../../../utils";

import Quantity from "./Quantity";
import Sizes from "./Sizes";

type Props = {
    product: CartProduct;
};

const CartItem: React.FC<Props> = ({product}) => {
    return (
        <li key={product.id} className="flex flex-col p-2 border border-solid md:p-5 xs:flex-row">
            <div className="flex items-center justify-center xs:w-5/12 sm:w-4/12 bg-gradient-to-b from-black to-gray-900">
                <Image
                    alt={product.name}
                    height={225}
                    src={`/products/${product.image}`}
                    width={220}
                />
            </div>

            <div className="flex flex-col flex-1 mt-6 xs:mt-0 xs:pl-3 sm:pl-7">
                <div className="mb-2">
                    <h3 className="uppercase md:text-4xl">{product.name}</h3>
                    <h2 className="text-sm text-gray-400 md:text-xl">{product.description}</h2>
                </div>

                <div className="mt-auto text-sm md:text-xl">
                    <Quantity product={product} />

                    <div className="flex flex-col md:flex-row">
                        <Sizes product={product} />

                        <span className="text-sm md:ml-auto md:text-4xl">
                            ${formatPrice(product.quantity * product.price)}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
