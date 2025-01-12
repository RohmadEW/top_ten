"use client";

import React from "react";
import Star from "./star";

interface RatingProps {
  productId: string;
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ productId, rating }) => {
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;
  const emptyStars = 5 - fullStars - (fractionalPart > 0 ? 1 : 0);

  return (
    <div className="flex justify-between gap-2">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} className="star full" clipPathId={`full-${index}`} />
      ))}
      {fractionalPart > 0 && (
        <Star
          className="star fraction"
          clipPathId={`fractional-${productId}`}
          fractionalPart={fractionalPart}
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <Star
          key={index}
          className="star empty"
          clipPathId={`empty-${index}`}
        />
      ))}
    </div>
  );
};

export default Rating;
