import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1F2937] text-white px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-yellow-400" />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-2">Página no encontrada</p>
        <p className="text-gray-400 mb-6">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-[#00D1FF] text-gray-900 font-semibold rounded-md hover:bg-[#00b4e0] transition-colors"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
