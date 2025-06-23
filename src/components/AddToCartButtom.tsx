import type { Product } from "../interface/Product";
import { cartService } from "../service/cartService";
import { toast } from "react-hot-toast";

export default function AddToCartButtom({ product }: { product: Product }) {
  const handleAdd = () => {
    cartService.addToCart(product, 1);
    toast.success("Producto añadido al carrito");
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full text-sm font-semibold py-2 rounded-lg transition bg-blue-600 hover:bg-blue-700 text-white mt-auto cursor-pointer"
    >
      Agregar al Carrito
    </button>
  );
}