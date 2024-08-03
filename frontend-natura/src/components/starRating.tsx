import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const ratingToNumber = Number(rating.replace(",", "."));
  const fullStars = Math.floor(ratingToNumber);
  const halfStar = ratingToNumber % 1 !== 0;
  const emptyStars = Math.floor(5 - ratingToNumber);
  const formattedRating = ratingToNumber.toFixed(1).replace(".", ",");

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
