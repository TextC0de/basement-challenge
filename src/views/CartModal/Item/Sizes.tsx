import {sizes, Size} from "../../../constants";
import {CartProduct} from "../../../context/CartProvider";
import useCartContext from "../../../hooks/useCartContext";

type Props = {
    product: CartProduct;
};

const Sizes: React.FC<Props> = ({product}) => {
    const {changeProductSize} = useCartContext();

    const onChangeSizeClick = (size: Size) => () => {
        changeProductSize(product.id, size);
    };

    return (
        <div className="flex items-center mb-2 uppercase md:mb-0">
            <label className="block mr-4">Size:</label>
            <ul className="grid grid-cols-4 gap-4 select-none">
                {sizes.map((size) => (
                    <li
                        key={size}
                        className={`cursor-pointer w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                            size === product.size ? "border border-solid" : ""
                        }`}
                        onClick={onChangeSizeClick(size)}
                    >
                        {size}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sizes;
