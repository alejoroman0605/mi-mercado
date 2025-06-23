import { Minus, Plus, Trash2 } from "lucide-react";
import { cartService } from "../service/cartService";
import type { CartItem } from "../interface/CartItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const navigate = useNavigate();

    const refresh = () => setCart(cartService.getCart());

    useEffect(() => {
        refresh();
    }, []);

    const increment = (id: number) => {
      const current = cart.find(c => c.product.id === id);
      if (!current) return;
      cartService.updateQuantity(id, current.quantity + 1);
      refresh();
    };
    const decrement = (id: number) => {
      const current = cart.find(c => c.product.id === id);
      if (!current) return;
      cartService.updateQuantity(id, current.quantity - 1);
      refresh();
    };
    const deleteItem = async (id: number) => {
      const { isConfirmed } = await Swal.fire({
        title: "¿Estas Seguro?",
        text: "Esta acción no se puede deshacer. El producto se eliminara del carrito.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (isConfirmed) {
        cartService.removeItem(id);
        refresh();
      }
    };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-3">Carrito 🛒</h2>    
      {cart.map((item) => (
        <div
          key={item.product.id}
          className="bg-white rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 p-3 sm:p-2 mb-2"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold break-words">{item.product.title}</h3>             
            </div>        
            <p className="text-sm text-gray-800">
              Total: ${item.product.price* item.quantity}
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">           
            <div className="flex items-center gap-1">
              <button
                onClick={() => decrement(item.product.id)}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
              >
                <Minus size={16} />
              </button>
                {item.quantity}
              <button
                onClick={() => increment(item.product.id)}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => deleteItem(item.product.id)}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}    
      <button
        disabled={cart.length === 0}
        className={`w-full bg-blue-600 text-white py-2 rounded-lg transition cursor-pointer ${
          cart.length === 0
            ? "bg-blue-600 text-white !cursor-not-allowed"
            : "hover:bg-blue-700"
        }`}
        onClick={() => navigate("/confirmar-pago")}
      >
        Confirmar compra
      </button>
    </div>
  );
};
