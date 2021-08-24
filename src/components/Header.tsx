import Image from "next/image";

import useCartContext from "../hooks/useCartContext";
import useCartModalContext from "../hooks/useCartModal";

const Header: React.FC = () => {
    const {showCartModal} = useCartModalContext();
    const {products} = useCartContext();

    const itemsInCart = products.reduce((a, product) => a + product.quantity, 0);

    return (
        <header className="container flex items-center py-10">
            <div className="hidden md:block">
                <Image
                    alt="Basement"
                    height={32}
                    src={`/logo.svg`}
                    width={192}
                />
            </div>

            <div className="md:hidden">
                <Image
                    alt="Basement"
                    height={43}
                    src={`/logo-mobile.svg`}
                    width={40}
                />
            </div>

            <div className="flex-1 hidden text-center md:block">
                <Image
                    alt=""
                    height={24}
                    src={`/header-icons.svg`}
                    width={284}
                />
            </div>

            <button
                className="px-8 py-3 ml-auto border border-white border-solid rounded-full"
                onClick={showCartModal}
            >
                Cart ({itemsInCart})
            </button>
        </header>
    );
};

export default Header;
