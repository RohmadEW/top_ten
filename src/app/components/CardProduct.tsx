"use client";

import Image from "next/image";
import { Product } from "../../types/product";
import Rating from "../../utils/rating";

interface CardProps {
  number: number;
  product: Product;
}

export const CardProduct = ({ number, product }: CardProps) => {
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
              <div className="text-[32px] text-red-500 font-medium">
                Best Overall
              </div>
              <Image
                src={`/logo.svg`}
                alt="best overall"
                width={83}
                height={55}
              />
            </div>
          )}
        </div>
      </div>
      <div className="px-[66px] pt-[111px] pb-[40px]">
        <div className="flex space-x-[40px]">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="bg-white rounded-md">
                <Image
                  src="/product.png"
                  alt="product"
                  width={600}
                  height={600}
                />
              </div>
              <div className="flex justify-between gap-2">
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <div key={index} className={index === 3 ? "relative" : ""}>
                      {index === 3 && (
                        <div className="absolute w-[50px] h-[50px] bg-gray-200 rounded-md px-[12px] py-[15px] font-medium text-gray-400">
                          +10
                        </div>
                      )}
                      <Image
                        src={`/product-${index + 1}.png`}
                        alt="Product"
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4 text-center">
              <div className="px-[20px]">
                <Rating productId={product._id} rating={product.stars} />
              </div>
              <div className="font-bold text-[17.5px]">
                {product.stars} stars (129 reviews)
              </div>
            </div>
            <div className="px-[20px]">
              <button className="btn w-full rounded-full btn-outline text-orange-600 border-orange-600 border-2">
                <Image src="/copy.svg" alt="Copy" width={25} height={23} />
                <span className="text-[20px] font-medium">Copy Link</span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium font-app text-[40px]">
              {product.productName}
            </h2>
            <p className="text-[20px]">{product.description}</p>
            <div className="flex gap-2">
              <a
                href={product.amazon_link}
                className="btn btn-warning font-medium text-[20px]"
              >
                View on Amazon
              </a>
              <button className="btn btn-primary font-medium text-[20px] text-white bg-[#0171DC] border-[#0171DC]">
                View on Walmart
              </button>
            </div>
            <div className="bg-white border border-[#DCDCCBB2] rounded-[23px] p-[24px] spacey-[14px]">
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

export const CardProductLoading = () => {
  return (
    <div className="bg-[#F9F6F2] rounded-[48px] relative">
      <div className="px-[66px] pt-[66px] pb-[40px]">
        <div className="flex space-x-[40px]">
          <div className="space-y-4">
            <div className="skeleton w-[250px] h-[250px]"></div>
            <div className="skeleton w-[250px] h-[50px]"></div>
          </div>
          <div className="space-y-4 w-full">
            <div className="skeleton w-full h-[75px]"></div>
            <div className="skeleton w-full h-[30px]"></div>
            <div className="skeleton w-full h-[30px]"></div>
            <div className="skeleton w-full h-[30px]"></div>
            <div className="skeleton w-full h-[30px]"></div>
            <div className="skeleton w-2/3 h-[30px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
