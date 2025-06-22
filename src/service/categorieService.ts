import type { Product } from "../interface/Product";
import { apiService } from "./apiService";

const ENDPOINT = "products";

export const categorieService = {
    // Obtener las categorias sin repetir desde los productos, no hay endpoint para obtener las categorias en la api
    getAll: async (): Promise<string[]> => {
        const { data } = await apiService.get<Product[]>(ENDPOINT);
        const categories: string[] = [];
        for (const product of data) {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }    
        }
        return categories;
    }
}