import { Box } from "lucide-react";

interface NoItemsProps {
  message?: string;
}

export default function NoItems({ message = "No hay elementos para mostrar" }: NoItemsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500">
      <Box className="w-12 h-12 mb-4" />
      <p className="text-lg text-center">{message}</p>
    </div>
  );
} 