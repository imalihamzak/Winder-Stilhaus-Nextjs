interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1 mt-8   justify-center">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-primary-light" : "text-white/30"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

