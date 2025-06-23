// src/components/Navbar/MobileMenu.tsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { authService } from "../../service/authService";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Productos", path: "/" },
    { label: "Carrito de compras", path: "/carrito" },
  ];

  const handleLogout = () => {
    try {
      authService.logout();
      navigate("/login");
    } catch (error) {
      console.error(
        "Error inesperado. Consulte con su administrador para más detalles",
        error
      );
    }
  };

  const linkClass = (isActive: boolean) =>
    [
      "block px-4 py-2 rounded-md text-base font-medium",
      isActive
        ? "bg-gray-700 text-white"
        : "text-gray-300 hover:bg-gray-600 hover:text-white",
    ].join(" ");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md z-50">
          <ul className="py-2">
            {menuItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => linkClass(isActive)}
                  onClick={() => setIsOpen(false)} // Cierra el menú al navegar
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="flex items-center w-full text-left px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
              >
                <LogOut size={18} className="mr-2" />
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}