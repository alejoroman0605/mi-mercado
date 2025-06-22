
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { NavigationMenu } from "./Navbar/NavigationMenu";
import { authService } from "../service/authService";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      authService.logout();
      navigate("/login");
    } catch (error) {
      console.error("Error inesperado consulte con su administrador para mas detalles", error);
    }
    };
    
  return (
    <nav className="bg-gray-800 text-white w-full relative">
      <div className="px-4 sm:px-6 lg:px-4 flex justify-between items-center h-16">
        <div className="flex-shrink-0 mr-6">
            <button
                onClick={() => navigate("/")}
                className="text-2xl font-bold text-white focus:outline-none"
            >
                Mercado
            </button>
        </div>
       
        <div className="ml-auto">
          <NavigationMenu/>
        </div>      

        <div className="hidden lg:flex ml-auto mr-1 items-center gap-2">        
          <button
            onClick={handleLogout}
            className="px-1 py-1 rounded-md text-base font-medium text-gray-300 hover:bg-orange-600 focus:outline-none"
          >
            <LogOut size={20} />
          </button>
        </div>        
      </div>
    </nav>
  );
}