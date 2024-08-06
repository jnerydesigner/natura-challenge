export const getRandomRating = () => {
  const ratings = [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
  const randomIndex = Math.floor(Math.random() * ratings.length);
  return ratings[randomIndex].toString();
};
