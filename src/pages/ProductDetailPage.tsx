import { useLocation, useNavigate } from "react-router-dom";
import type { Product } from "../interface/Product";
import StarRating from "../components/StarRating";
import AddToCartButtom from "../components/AddToCartButtom";

export default function ProductDetailPage() {
  const { state } = useLocation() as { state?: { product?: Product } };
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return (
      <div className="py-10 text-center">
        <p className="mb-4">Producto no encontrado.</p>
        <button
          className="text-blue-600 hover:underline"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Volver
      </button>

      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-auto object-contain mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          {product.title}
        </h1>
        <span className="inline-block bg-gray-200 text-orange-600 px-4 py-2 rounded-full text-base font-semibold mb-4">
          {product.category}
        </span>
        <p className="text-gray-600 mb-4 text-center px-4">
          {product.description}
        </p>
        <p className="text-lg font-semibold text-gray-900 mb-6">
          Precio: ${product.price}
        </p>
        <div className="flex items-center mb-6">
          <StarRating value={product.rating.rate} size={20} />
          <span className="ml-2 text-sm text-gray-600">{product.rating.rate}</span>
        </div>
        <AddToCartButtom product={product} />
      </div>
    </div>
  );
}
