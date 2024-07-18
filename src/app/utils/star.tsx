import Image from "next/image";
import React from "react";

interface StarProps {
  className?: string;
  clipPathId: string;
}

const Star: React.FC<StarProps> = ({ className, clipPathId }) => {
  return (
    <div className="relative">
      <Image
        src="/star-empty.svg"
        alt="star"
        className="absolute"
        width={36}
        height={36}
      />
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <defs>
          <clipPath id={clipPathId}>
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
        <path
          clipPath={`url(#${clipPathId})`}
          d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.173L12 18.897l-7.335 3.857 1.4-8.173-5.934-5.787 8.2-1.192z"
        />
      </svg>
    </div>
  );
};

export default Star;
