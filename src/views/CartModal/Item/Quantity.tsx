import {CartProduct} from "../../../context/CartProvider";
import useCartContext from "../../../hooks/useCartContext";

type Props = {
    product: CartProduct;
};

const Sizes: React.FC<Props> = ({product}) => {
    const {addProduct, removeProduct} = useCartContext();

    const onRemoveClick = () => {
        removeProduct(product.id);
    };

    const onAddClick = () => {
        addProduct(product);
    };

    return (
        <div className="flex items-center mb-2">
            <label className="block mr-4 uppercase">Quantity:</label>
            <div className="py-1 border border-solid rounded-full select-none">
                <span className="pl-3 pr-2 cursor-pointer" onClick={onRemoveClick}>
                    -
                </span>

                <span className="cursor-default">{product.quantity}</span>

                <span className="pl-2 pr-3 cursor-pointer" onClick={onAddClick}>
                    +
                </span>
            </div>
        </div>
    );
};

export default Sizes;
