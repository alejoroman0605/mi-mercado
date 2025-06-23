import { cartService } from "../service/cartService";
import type { CartItem } from "../interface/CartItem";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  const refresh = () => setCart(cartService.getCart());

  useEffect(() => {
    refresh();
  }, []);

  const handleFinalizeSale = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Deseas finalizar la compra?",
      text: `Total a pagar: $${cartService.getTotal()}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, comprar",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      const ok = cartService.handleFinalizeSale?.() ?? true;
      await Swal.fire({
        title: ok ? "Compra finalizada" : "Error",
        text: ok ? "Gracias por tu compra" : "No se pudo finalizar la compra",
        icon: ok ? "success" : "error",
      });
    }    
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center">Compra 🛒</h2>    
      {cart.map((item) => (
        <div
          key={item.product.id}
          className="rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 p-3 sm:p-2 mb-2"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold break-words">{item.product.title}</h3>             
            </div>            
            <div className="flex items-center text-sm text-gray-800 gap-1">
              <span>
                Precio: ${item.product.price}
              </span>             
            </div>
            <p className="text-sm text-gray-800">
              Subtotal: ${item.product.price* item.quantity}
            </p>
          </div>       
        </div>
      ))}

      <div className="flex justify-between items-center border-t border-gray-600 pt-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-bold text-green-400">
          ${cartService.getTotal()}
        </span>
      </div>

      <button
        disabled={cart.length === 0}
        className={`w-full bg-blue-600 text-white py-2 rounded-lg transition cursor-pointer ${
          cart.length === 0
            ? "bg-blue-600 text-white !cursor-not-allowed"
            : "hover:bg-blue-700"
        }`}
        onClick={() => handleFinalizeSale()}
      >
        Finalizar compra
      </button>
    </div>
  );
};
