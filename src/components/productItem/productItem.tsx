import type { IProduct } from "../../types/server"

type ProductItemProps = IProduct

function productItem({title , price , description , image}: ProductItemProps ) {
    return (
        <div className=" shadow rounded pb-2 ">
            <div className="h-88">
            <img className="rounded w-full h-full" src={image} alt="" />
            </div>
            <div className="flex justify-between  p-4 mt-2 font-bold">
                <h2 className="line-clamp-1">{title}</h2>
                <p className="ml-2">{price}$</p>
            </div>
            <div className="px-4 mt-3">
                <p className="line-clamp-2 text-gray-500 text-sm">
                   {description}
                </p>
            </div>
        </div>
    )
}

export default productItem