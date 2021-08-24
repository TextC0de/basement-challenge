import Image from "next/image";
import {useRef} from "react";

import useCartContext from "../../hooks/useCartContext";
import {formatPrice} from "../../utils";

const Checkout: React.FC = () => {
    const checkoutRef = useRef(null);
    const {products} = useCartContext();
    const total = products.reduce(
        (a, nextProduct) => a + nextProduct.quantity * nextProduct.price,
        0,
    );

    const onCheckoutClick = () => {
        console.table(products);

        if (!checkoutRef.current) return;
    };

    return (
        <div className="flex flex-col items-center mt-auto md:border-t md:border-solid md:flex-row">
            <span className="flex w-full p-8 text-lg uppercase border-b border-solid md:border-0 md:text-4xl md:inline-block">
                Total<span className="hidden md:inline">:</span>{" "}
                <span className="ml-auto md:ml-0">${formatPrice(total)}</span>
            </span>

            <span
                ref={checkoutRef}
                className="p-8 cursor-pointer md:border-l md:border-solid md:ml-auto hover:opacity-70"
                onClick={onCheckoutClick}
            >
                <Image
                    alt="Checkout"
                    height={31}
                    src={`/checkout.svg`}
                    width={236}
                />
            </span>
        </div>
    );
};

export default Checkout;
