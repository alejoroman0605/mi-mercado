export interface PaginationProps {
    currentPage: number;
    totalPages: number; 
    limit: number; 
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    pageSizes?: number[];
}