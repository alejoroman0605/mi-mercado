import { Route, Routes, useLocation } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import ConfirmPayment from "./pages/ConfirmPayment";

const protectedRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "product/:id", element: <ProductDetailPage /> },
    { path: "carrito", element: <CartPage /> },
    { path: "confirmar-pago", element: <ConfirmPayment /> }
];

export function AppRoutes() {
  const location = useLocation();

  if (location.pathname === "/login") {
    return (
      <LoginLayout>
        <LoginPage />
      </LoginLayout>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />

      {/* Rutas protegidas */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {protectedRoutes.map(({ path, element }) => (
          <Route key={path || "index"} path={path} element={element} />
        ))}
      </Route>

      {/* Página 404 personalizada */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
