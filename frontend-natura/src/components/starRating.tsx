import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = Math.floor(5 - rating);
  const formattedRating = rating.toFixed(1).replace(".", ",");

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-gold" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-gold" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i + fullStars + 1} className="text-gold" />
        ))}
      </div>
      <span className="ml-2 text-gray-700">{formattedRating}/5</span>
    </div>
  );
};
