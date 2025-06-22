import { NavLink } from "react-router-dom";

export function NavigationMenu() {
    const menuItems = [
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
                  "px-2 py-1.5 rounded-md text-base font-medium",
                  isActive
                    ? "bg-orange-700 text-white"
                    : "text-gray-300 hover:bg-orange-600 hover:text-white",
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