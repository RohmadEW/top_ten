import Image from "next/image";
import { Product } from "../types/product";

interface CardProps {
  number: number;
  product: Product;
}

const Card = ({ number, product }: CardProps) => {
  return (
    <div className="bg-[#F9F6F2] rounded-[48px] relative">
      <div className="absolute w-full top-0 px-[66px]">
        <div className="w-full flex items-center gap-4">
          <div className="relative">
            <div className="absolute top-0 w-[60px] text-center text text-[51px] font-bold text-white">
              {number}
            </div>
            <Image
              src="/bg_number_product.svg"
              alt="bg"
              width={75}
              height={85}
            />
          </div>
          {product.is_best_overall && (
            <div className="w-full flex justify-between pt-[20px]">
              <div className="text-[32px] text-red-500">Best Overall</div>
              <Image
                src={`/logo.svg`}
                alt="best overall"
                width={75}
                height={85}
              />
            </div>
          )}
        </div>
      </div>
      <div className="px-[66px] pt-[111px] pb-[40px]">
        <div className="flex gap-8">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="bg-white rounded-md">
                <Image
                  src="/product.png"
                  alt="product"
                  width={800}
                  height={800}
                />
              </div>
              <div className="flex justify-between gap-2">
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <div key={index} className={index === 3 ? "relative" : ""}>
                      {index === 3 && (
                        <div className="absolute w-[60px] h-[60px] bg-gray-200 rounded-md px-[15px] py-[20px] font-medium text-gray-400">
                          +10
                        </div>
                      )}
                      <Image
                        src={`/product-${index + 1}.png`}
                        alt="Product"
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4 px-[20px] text-center">
              <div className="flex justify-between gap-2">
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <Image
                      key={index}
                      src={`/star.svg`}
                      alt="star"
                      width={32}
                      height={32}
                    />
                  );
                })}
                <Image
                  src={`/star-1-3.svg`}
                  alt="star"
                  width={32}
                  height={32}
                />
              </div>
              <div className="font-bold">4.3 stars (129 reviews)</div>
            </div>
            <button className="btn w-full rounded-full btn-outline text-orange-600 border-orange-600">
              Copy Link
            </button>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium font-app text-[40px]">
              {product.title}
            </h2>
            <p className="text-[20px]">{product.description}</p>
            <div className="flex gap-2">
              <button className="btn btn-warning">View on Amazon</button>
              <button className="btn btn-primary">View on Walmart</button>
            </div>
            <div className="bg-white border border-[#DCDCCBB2] rounded-[23px] p-[24px]">
              <div className="font-bold text-[24px]">+ Pros</div>
              <div className="text-[18px]">{product.pros}</div>
            </div>
            <div className="bg-white border border-[#DCDCCBB2] rounded-[23px] p-[24px]">
              <div className="font-bold text-[24px]">+ Cons</div>
              <div className="text-[18px]">{product.cons}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
