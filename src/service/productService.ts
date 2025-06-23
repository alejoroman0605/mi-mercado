import type { PaginatedResponse } from "../components/PaginatedResponse";
import type { Product } from "../interface/Product";
import { apiService } from "./apiService";

const ENDPOINT = "products";

export const productService = {
    getProducts: async (currentPage: number, limit: number, category: string = "all", searchTerm: string = ""): Promise<PaginatedResponse<Product>> => {
        // Índices para paginación simulada
        // El paginado deberia funcionar mandando los parametros a la api, pero ahora la api no lo soporta,
        // por lo cual lo estoy similando para mostrar visualmente el paginado, como funcionaría si la api lo soportara
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;

        const { data } = await apiService.get<Product[]>(ENDPOINT);

        // Filtrado igual la API no lo soporta de forma nativa, por lo que lo simulo también
        let list = category === "all" || !category
          ? data
          : data.filter((product) => product.category === category);
        list = searchTerm
          ? list.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
          : list;

        return {
          count: list.length,
          results: list.slice(startIndex, endIndex),
        };
    }
}