import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { PaginationProps } from "../interface/PaginationProps";

export default function Pagination({
  currentPage,
  totalPages,
  limit,
  onPageChange,
  onPageSizeChange,
  pageSizes = [8, 24, 40],
}: PaginationProps) {
  const [inputPage, setInputPage] = useState(currentPage);

  const handlePageJump = () => {
    if (inputPage >= 1 && inputPage <= totalPages) {
      onPageChange(inputPage);
    }
  };

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-gray-900 rounded-xl shadow-md">
      <div className="flex items-center space-x-2">
        <label htmlFor="limit" className="text-white font-medium">
          Elementos por página:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="bg-gray-900 text-white border border-gray-500 rounded-md px-3 py-1 focus:ring-blue-400 focus:border-blue-400"
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1 || totalPages === 0}
          aria-label="Primera página"
          className={`p-2 rounded border ${
            currentPage === 1 || totalPages === 0
              ? "text-gray-500 border-gray-600 cursor-not-allowed"
              : "text-white border-gray-400 hover:bg-gray-700"
          }`}
        >
          <ChevronsLeft size={18} />
        </button>

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || totalPages === 0}
          aria-label="Página anterior"
          className={`p-2 rounded border ${
            currentPage === 1 || totalPages === 0
              ? "text-gray-500 border-gray-600 cursor-not-allowed"
              : "text-white border-gray-400 hover:bg-gray-700"
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        <span className="text-sm text-white font-semibold">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          aria-label="Página siguiente"
          className={`p-2 rounded border ${
            currentPage === totalPages || totalPages === 0
              ? "text-gray-500 border-gray-600 cursor-not-allowed"
              : "text-white border-gray-400 hover:bg-gray-700"
          }`}
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
          aria-label="Última página"
          className={`p-2 rounded border ${
            currentPage === totalPages || totalPages === 0
              ? "text-gray-500 border-gray-600 cursor-not-allowed"
              : "text-white border-gray-400 hover:bg-gray-700"
          }`}
        >
          <ChevronsRight size={18} />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={1}
          max={totalPages}
          value={inputPage}
          onChange={(e) => setInputPage(Number(e.target.value))}
          className="w-16 px-2 py-1 bg-gray-900 border border-gray-500 text-white rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePageJump}
          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Ir
        </button>
      </div>
    </div>
  );
}