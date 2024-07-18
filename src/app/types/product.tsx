export interface Product {
  id: number;
  title: string;
  description: string;
  pros: string;
  cons: string;
  rating: number;
  is_best_overall?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    is_best_overall: true,
    rating: 4.6,
    title: "Minelab Vanquish 440 Metal Detector",
    description:
      "The Minelab Vanquish 440 offers a tremendous amount of functionality for less than the cost of some less powerful VLF detectors. For about $300, it’s a little more expensive than true entry-level models, but it offers a lot of features that enthusiasts look for.",
    pros: "Excellent audio quality with woofer and tweeter. Longer battery life compared to Buds Pro. Adaptive noise cancellation and ambient mode adjust themselves when sensing conversations. 3D audio lets music feel immersive. Strong water resistance.",
    cons: "Advanced features require Samsung devices running OneUI software.",
  },
  {
    id: 2,
    title: "Minelab Vanquish 440 Metal Detector",
    rating: 3.3,
    description:
      "The Minelab Vanquish 440 offers a tremendous amount of functionality for less than the cost of some less powerful VLF detectors. For about $300, it’s a little more expensive than true entry-level models, but it offers a lot of features that enthusiasts look for.",
    pros: "Excellent audio quality with woofer and tweeter. Longer battery life compared to Buds Pro. Adaptive noise cancellation and ambient mode adjust themselves when sensing conversations. 3D audio lets music feel immersive. Strong water resistance.",
    cons: "Advanced features require Samsung devices running OneUI software.",
  },
  {
    id: 3,
    title: "Minelab Vanquish 440 Metal Detector",
    rating: 2.4,
    description:
      "The Minelab Vanquish 440 offers a tremendous amount of functionality for less than the cost of some less powerful VLF detectors. For about $300, it’s a little more expensive than true entry-level models, but it offers a lot of features that enthusiasts look for.",
    pros: "Excellent audio quality with woofer and tweeter. Longer battery life compared to Buds Pro. Adaptive noise cancellation and ambient mode adjust themselves when sensing conversations. 3D audio lets music feel immersive. Strong water resistance.",
    cons: "Advanced features require Samsung devices running OneUI software.",
  },
  {
    id: 4,
    title: "Minelab Vanquish 440 Metal Detector",
    rating: 1.8,
    description:
      "The Minelab Vanquish 440 offers a tremendous amount of functionality for less than the cost of some less powerful VLF detectors. For about $300, it’s a little more expensive than true entry-level models, but it offers a lot of features that enthusiasts look for.",
    pros: "Excellent audio quality with woofer and tweeter. Longer battery life compared to Buds Pro. Adaptive noise cancellation and ambient mode adjust themselves when sensing conversations. 3D audio lets music feel immersive. Strong water resistance.",
    cons: "Advanced features require Samsung devices running OneUI software.",
  },
];
