import star from "../assets/star.svg";
const Rating = ({ value }) => {
  const stars = Array(value).fill(star);
  return (
    <div className="flex gap-2">
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </div>
  );
};

export default Rating;
