import type { Product } from "../interface/Product";

export default function ProductCardDetailed({ product }: { product: Product }) {  
  return (
    <div className="relative rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 flex flex-col items-center bg-white border border-gray-200 p-4 h-full">
      {product.image ? (
        <img
          src={product.image}
          alt={product.title}
          className="h-32 w-auto object-contain mb-2 mt-2"
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

      {/* Botón agregar */} 
      <button onClick={() => { }}
        className="w-full text-sm font-semibold py-2 rounded-lg transition bg-blue-600 hover:bg-blue-700 text-white mt-auto cursor-pointer"
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
