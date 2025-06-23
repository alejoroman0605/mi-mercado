import type { Product } from "../interface/Product";
import { useNavigate } from "react-router-dom";
import AddToCartButtom from "./AddToCartButtom";

export default function ProductCard({ product }: { product: Product }) {  
  const navigate = useNavigate();

  return (
    <div className="relative rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 flex flex-col items-center bg-white border border-gray-200 p-4 h-full">
      <button
        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
        className="absolute top-2 right-2 text-blue-600 hover:underline cursor-pointer mb-2"
      >
        Más detalles
      </button>

      {product.image ? (
        <img
          src={product.image}
          alt={product.title}
          className="h-32 w-auto object-contain mb-2 mt-8 lg:mt-2"
        />
      ) : (
        <div className="text-5xl mb-2 mt-2">🛒</div>
      )}

      <h2 className="text-base font-semibold text-gray-800 text-center">
        {product.title}
      </h2>    
      <div className="text-sm text-gray-600 mb-3">
        Precio:{" "}
              <span className="text-gray-900 font-semibold">${product.price}</span>
      </div> 
      <AddToCartButtom product={product} />
    </div>
  );
}
