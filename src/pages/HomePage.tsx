import { useCallback, useEffect, useState } from "react";
import { productService } from "../service/productService";
import type { Product } from "../interface/Product";
import ProductCard from "../components/ProductCard";
import NoItems from "../components/NoItems";
import { categorieService } from "../service/categorieService";
import Pagination from "../components/Pagination";


export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
        const response = await productService.getProducts(currentPage, pageSize, selectedCategory || "all");
      setProducts(response.results);
      setTotalProducts(response.count);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, selectedCategory]);

  const fetchCategories = useCallback(async () => {
    const response = await categorieService.getAll();
    setCategories(response);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  useEffect(() => {
      fetchProducts();
      fetchCategories();
  }, [fetchProducts, fetchCategories]); 

  return (
    <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-2 ml-2">
            <select
                className="p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option key={"all"} value={""}>
                    Todos los productos
                </option>
                {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
                ))}
            </select>   
        </div>
      <div className="mx-2">    
        {loading ? (
          <p className="text-center text-gray-600 py-10">Cargando...</p>
        ) : products.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-2">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <NoItems message="No se encontraron productos." />
        )}  
         {products.length > 0 && (
          <div className="mt-2">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalProducts / pageSize)}
              limit={pageSize}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>
        )}      
      </div>    
    </div>
  );
}