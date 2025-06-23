import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  value: number;
  size?: number;
}

export default function StarRating({ value, size = 20 }: StarRatingProps) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star
          key={`f${i}`}
          size={size}
          className="text-yellow-400"
          fill="currentColor"
        />
      ))}

      {half && <StarHalf size={size} className="text-yellow-400" />}

      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} size={size} className="text-gray-300" />
      ))}
    </div>
  );
} 