import Image from "next/image";
import {disableBodyScroll, clearAllBodyScrollLocks} from "body-scroll-lock";
import {useEffect, useRef} from "react";

import useCartContext from "../../hooks/useCartContext";
import useCartModalContext from "../../hooks/useCartModal";

import ProductItem from "./Item";
import Checkout from "./Checkout";

const CartModal = () => {
    const bodyScrollElementRef = useRef<HTMLDivElement>(null);
    const {products} = useCartContext();
    const {show, hideCartModal} = useCartModalContext();

    useEffect(() => {
        if (show) {
            if (!bodyScrollElementRef.current) return;

            disableBodyScroll(bodyScrollElementRef.current);
        } else {
            clearAllBodyScrollLocks();
        }
    }, [show]);

    return show ? (
        <div className="fixed inset-0 z-30 flex">
            <div
                className="absolute inset-0 z-10 bg-black opacity-50 inset"
                onClick={() => hideCartModal()}
            />

            <div
                ref={bodyScrollElementRef}
                className="relative z-20 flex flex-col max-h-screen min-h-screen pt-8 ml-auto overflow-y-scroll bg-black border-b border-l border-solid md:w-10/12 lg:w-7/12"
            >
                <div className="px-8">
                    <div className="block mb-8 text-2xl text-right uppercase">
                        <span className="cursor-pointer" onClick={() => hideCartModal()}>
                            → Close
                        </span>
                    </div>

                    <div className="hidden sm:block">
                        <Image
                            alt="Your cart"
                            height={93}
                            src={`/your-cart.svg`}
                            width={761}
                        />
                    </div>

                    <div className="flex justify-center sm:hidden">
                        <Image
                            alt="Your cart"
                            height={193}
                            src={`/your-cart-mobile.svg`}
                            width={343}
                        />
                    </div>

                    <ul className="grid gap-4 mt-8 grid-cols mb-36">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </ul>
                </div>

                {products.length > 0 ? (
                    <Checkout />
                ) : (
                    <div className="container text-center">
                        <p>The cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default CartModal;
