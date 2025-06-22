import { apiService } from "./apiService";

const AUTH_ENDPOINT = "/auth/login";

export const authService = {
    // Iniciar sesión (Fake Store API devuelve solo el token JWT)
    login: async (
        username: string,
        password: string
    ): Promise<{ token: string }> => {
        const { data } = await apiService.post<
            { token: string },
            { username: string; password: string }
        >(AUTH_ENDPOINT, { username, password });

        return data;
    },

    // Cerrar sesión
    logout: (): void => {
        sessionStorage.removeItem("token");
    },

    // Verificar si el usuario está autenticado
    isLoggedIn: (): boolean => {
        return sessionStorage.getItem("token") !== null;
    },

    // Guardar token JWT en el almacenamiento
    setAuthUser: (token: string): void => {
        sessionStorage.setItem("token", token);
    },

    // Obtener token de acceso
    getToken: (): string | null => {
        return sessionStorage.getItem("token");
    },
};