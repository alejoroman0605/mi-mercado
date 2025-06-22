import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

type ApiResult<T> = { data: T; status: number };

export const apiService = {
    get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> => {
        const { data, status } = await apiClient.get<T>(url, config);
        return { data, status };
    },

    post: async <T, U = void>(url: string, data?: U, config?: AxiosRequestConfig): Promise<ApiResult<T>> => {
        const response: AxiosResponse<T> = await apiClient.post(url, data, config);
        return { data: response.data, status: response.status };
    },

    put: async <T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<ApiResult<T>> => {
        const response: AxiosResponse<T> = await apiClient.put(url, data, config);
        return { data: response.data, status: response.status };
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> => {
        const response: AxiosResponse<T> = await apiClient.delete(url, config);
        return { data: response.data, status: response.status };
    },
};

apiClient.interceptors.response.use(
    (res) => res,
    (err) => {
        // TODO: handle error
        return Promise.reject(err);
    },
);