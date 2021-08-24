import Image from "next/image";

import {Product} from "../../../product/types";
import useCartContext from "../../hooks/useCartContext";
import useCartModalContext from "../../hooks/useCartModal";

type Props = {
    product: Product;
};

const ProductItem: React.FC<Props> = ({product}) => {
    const {addProduct} = useCartContext();
    const {showCartModal} = useCartModalContext();

    const onClick = () => {
        addProduct(product);
        showCartModal();
    };

    return (
        <li>
            <div className="relative cursor-pointer" onClick={onClick}>
                <div className="flex justify-center bg-gradient-to-b from-black to-gray-900">
                    <Image
                        alt={product.name}
                        height={578}
                        src={`/products/${product.image}`}
                        width={440}
                    />
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center duration-200 opacity-0 hover:opacity-100">
                    <Image
                        alt="Add to cart"
                        height={127}
                        src={`/add-to-car.svg`}
                        width={231}
                    />
                </div>
            </div>

            <div className="flex pt-4 text-xl border-t-2 border-solid">
                <h2>{product.name}</h2>
                <span className="ml-auto">${product.price}</span>
            </div>
        </li>
    );
};

export default ProductItem;
