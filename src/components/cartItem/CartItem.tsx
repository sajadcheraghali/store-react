import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import Button from "../button/Button"
import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
    id: number;
    qty: number;
}

function CartItem({ id, qty }: ICartItem) {
    const [cartItem, setCartItem] = useState<IProduct>();
    useEffect(() => {
        getProduct(id.toString()).then((result) => {
            setCartItem(result);
        })
    }, [id]);

    const { handleIncreaseProductQty, handleDecreaseProductQty, handleDeleteProduct } = useShoppingCartContext();

    return (
        <div className="flex flex-row-reverse mt-4 border-b pb-2 shadow rounded">
            <Link to={`/product/${cartItem?.id}`} className="text-right text-blue-500 hover:underline">
                <img className="rounded w-28" src={cartItem?.image} alt="" />
            </Link>
            <div className="mr-4">
                <h3 className="text-right">عنوان محصول {cartItem?.title}</h3>
                <div className="mt-2 flex items-center justify-end">
                    <Button onClick={() => handleDeleteProduct(id)} variant="danger" className="mr-2 ">حذف</Button>
                    <Button onClick={() => (handleIncreaseProductQty(id))} variant="primary">+</Button>
                    <span className="mx-2">{qty}</span>
                    <Button onClick={() => handleDecreaseProductQty(id)} variant="primary">-</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem