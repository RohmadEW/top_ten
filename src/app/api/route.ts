export async function GET() {
  return Response.json(productsDummy);
}

const productsDummy = {
  status: true,
  message: "Data fetched successfully",
  data: {
    _id: "669e28243971ff238408a091",
    url_path: "best_metal_detectors_beginners",
    title: "Best Metal Detectors for Beginners",
    description:
      "Welcome to the ultimate guide to metal detectors for beginners. Whether you end up a beachside hobbiest or a true metalhead, these are your best options to start on your metal detector journey.",
    products: [
      {
        _id: "669e21a282de8f97740ffd6b",
        productName: "Garrett ACE 300",
        description:
          "The Garrett ACE 300 is a versatile entry-level metal detector that makes treasure hunting accessible for beginners. With an easy-to-read LCD screen and user-friendly controls, it features five search modes and a depth indicator, making it perfect for detecting coins, jewelry, and relics.",
        stars: 4.5,
        pros: "Lightweight and easy to use, great for various terrains, and excellent discrimination settings.",
        cons: "Limited depth capabilities compared to advanced models and can be less effective in highly mineralized soils.",
        amazon_link:
          "https://www.amazon.com/Garrett-Ace-300-Metal-Detector/dp/B07BR1L7SR?th=1",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e21ca82de8f97740ffd6c",
        productName: "Fisher F22",
        description:
          "The Fisher F22 is designed for beginners with a simple interface and features like a waterproof search coil. It boasts a broad range of settings, including sensitivity adjustments and multiple detection modes, welcoming users to explore parks, beaches, and more.",
        stars: 4.7,
        pros: "Waterproof coil allows for use in various terrains, and has a very good target ID feature.",
        cons: "The build quality could be improved and might not withstand rough handling.",
        walmart_link:
          "https://www.walmart.com/ip/Fisher-F22-Weatherproof-Metal-Detector/122035847",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e21ec82de8f97740ffd6d",
        productName: "Minelab X-TERRA 305",
        description:
          "With its advanced technology, the Minelab X-TERRA 305 introduces beginners to a high-performance metal detecting experience. It uses VFLEX technology, allowing for quick adjustments and a clear LCD screen, ensuring effective target identification across a range of environments.",
        stars: 4.3,
        pros: "User-friendly digital controls and lightweight design make it easy to handle and great for long hunts.",
        cons: "Limited accessory options and the learning curve may be steeper for total novices.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e21fb82de8f97740ffd6e",
        productName: "Bounty Hunter Tracker IV",
        description:
          "The Bounty Hunter Tracker IV is a budget-friendly metal detector that doesn't compromise on features. It includes three modes of operation and sensitivity adjustments, making it an excellent choice for those new to the hobby and looking for straightforward functionality.",
        stars: 4,
        pros: "Affordable and lightweight, making it great for all-day use, plus it has a solid build quality.",
        cons: "Limited advanced features compared to higher-end detectors, and the performance may vary with soil conditions.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e220982de8f97740ffd6f",
        productName: "Nokta Makro Simplex+",
        description:
          "The Nokta Makro Simplex+ is a waterproof, all-terrain detector perfect for beginners seeking versatility. Featuring a fast recovery speed and multiple modes, it ensures users can easily identify various metals, from coins to relics, even in challenging environments.",
        stars: 4.8,
        pros: "Highly versatile with waterproof capabilities and excellent build quality for diverse conditions.",
        cons: "The interface may require some learning, and it could be pricier than basic models.",
        amazon_link:
          "https://www.amazon.com/Nokta-Simplex-Waterproof-Detector-Carbon/dp/B0C6KZMZ7Q?th=1",
        walmart_link:
          "https://www.walmart.com/ip/Nokta-Makro-Simplex/501808897",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e221482de8f97740ffd70",
        productName: "Teknetics Delta 4000",
        description:
          "Featuring an intuitive interface, the Teknetics Delta 4000 is a great entry-level detector for budding treasure hunters. Its graphical target ID and easy discrimination settings make it an ideal choice for effectively scanning various locations for valuable finds.",
        stars: 4.2,
        pros: "User-friendly with a large display for visibility, and offers good depth detection for the price.",
        cons: "Less effective in heavy trash areas, and the audio could be improved for better feedback.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e221c82de8f97740ffd71",
        productName: "RAD ROVER Coin Detector",
        description:
          "The RAD ROVER Coin Detector is a great starting point for novice treasure hunters. With its lightweight design and easy-to-use features, it includes adjustable sensitivity levels and a pinpoint mode to assist in locating buried treasures effectively.",
        stars: 4.1,
        pros: "Highly portable and easy to set up, with multiple sensitivity adjustments for beginners.",
        cons: "May lack depth detection capabilities and is best suited for coins rather than larger items.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e222482de8f97740ffd72",
        productName: "Whites Goldmaster GMX Sport",
        description:
          "The Whites Goldmaster GMX Sport is designed for those looking to prospect for gold and other treasures. It boasts advanced features and high sensitivity to small gold pieces while still being user-friendly for beginners.",
        stars: 4.4,
        pros: "Great sensitivity for detecting small targets and performs well in mineralized soils.",
        cons: "Higher price point than most entry-level detectors and might overwhelm absolute beginners.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e222d82de8f97740ffd73",
        productName: "Vito ProPak 2 Metal Detector",
        description:
          "The Vito ProPak 2 is specifically designed for ease of use with its automatic ground balance and simple controls. It's perfect for beginners who want a reliable detector without unnecessary complexity, making treasure hunting enjoyable.",
        stars: 4,
        pros: "Very affordable with basic features that are easy to learn, excellent for casual treasure hunting.",
        cons: "Limited advanced features and depth detection compared to more robust models.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
      {
        _id: "669e223582de8f97740ffd74",
        productName: "Tesoro Compadre",
        description:
          "The Tesoro Compadre is a compact and lightweight detector ideal for beginners who value simplicity and effectiveness. With only one knob for sensitivity, it’s straightforward and encourages learning through hands-on experience in various settings.",
        stars: 4.6,
        pros: "Extremely lightweight and simple to operate, making it great for long periods of detection.",
        cons: "Limited features compared to more advanced detectors and may not suit users looking for extensive controls.",
        created_at: "2024-07-22T05:41:15.000Z",
        "updated_at:": "2024-07-22T05:42:57.000Z",
      },
    ],
    updated_at: "2024-07-11T19:20:59.000Z",
    created_at: "2024-07-22T05:48:07.000Z",
  },
};
