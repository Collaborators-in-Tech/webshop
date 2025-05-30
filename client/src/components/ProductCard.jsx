import { Link } from "react-router-dom"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "./Button"

export const ProductCard = ({ product }) => {
  const { addToCart } = appContentStore()

  return (
    <div className="flex flex-col w-[120px]">
      <Link to={`product/${product.id}`} className="flex flex-col items-start">
        <img
          src={product.image}
          alt="Product Image"
          className="w-[120px] h-[180px] object-cover"
        />
        <div className="h-[120px] flex flex-col justify-between mt-[12px] mb-[16px]">
          <p className="text-left font-semibold text-[18px]">{product.name}</p>
          <p className="text-left text-[20px]">{product.price} kr</p>
        </div>
      </Link>

      <div className="flex ml-auto mb-[60px]">
        <Button>
          <img
            src="/icons/heart-mobile-menu.png"
            alt="Add to favorites"
            className="w-[30px] h-[30px]"
          />
        </Button>

        <Button func={() => addToCart(product)}>
          <img
            src="/icons/shopping-cart-plus.png"
            alt="Add to shopping cart"
            className="w-[30px] h-[30px] ml-[6px]"
          />
        </Button>
        <Link to={`product/${product.id}`}></Link>
      </div>
    </div>
  )
}
