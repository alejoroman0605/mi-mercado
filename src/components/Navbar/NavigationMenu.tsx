import { NavLink } from "react-router-dom";

export function NavigationMenu() {
    const menuItems = [
        { label: "Productos", path: "/" },
        { label: "Carrito de compras", path: "/carrito" },
    ];
    
  return (
    <nav>
      <ul className="hidden lg:flex space-x-3">
        {menuItems.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                [
                  "px-3 py-3 rounded-md text-base font-medium",
                  isActive
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-600 hover:text-white",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}