"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../service/authService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    setLoading(true);
    try {
      const { token } = await authService.login(username, password);
      authService.setAuthUser(token);
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage(
        "Credenciales incorrectas. Por favor, inténtalo de nuevo. Si el error persiste contacte con el administrador del sistema."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <div className="rounded-[56px] p-1 bg-gradient-to-b from-blue-400 to-transparent">
        <div className="bg-white rounded-[53px] shadow-lg p-6 w-full min-w-[400px]">
          <div className="px-8 mb-3">
            <div className="flex justify-center">
              <img src="/vite.svg" alt="Logo" className="w-35 h-35" />
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Bienvenido
            </h2>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-5">
              Ingrese sus credenciales para continuar
            </h3>
            {errorMessage && (
              <div className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Usuario
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingresa tu usuario"
                    className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña"
                      className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500"
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg flex items-center justify-center disabled:opacity-50"
                disabled={loading || !username || !password}
              >
                {loading ? (
                  <span className="border-t-transparent border-white border-2 w-4 h-4 rounded-full animate-spin"></span>
                ) : (
                  "Iniciar Sesión"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;