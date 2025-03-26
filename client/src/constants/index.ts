export const featureContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const discoverContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const featureCardTitles = [
  "Trustworthy & Verified Listings",
  "Browse Rental Listings with Ease",
  "Simplify Your Reantal Search with Advanced Filters",
];

export const featureCardDescriptions = [
  "We verify all listings to ensure you're not getting scammed.",
  "Easily browse through our listings to find the perfect rental.",
  "Quickly find the perfect home you want using our advanced search filters!",
];

export const featureCardLinkTexts = ["Explore", "Search", "Discover"];
export const featureCardLinkUrls = ["/explore", "/search", "/discover"];

export const discoverContentCard = [
  {
    imageSrc: "/landing-icon-wand.png",
    title: "Find Your Perfect Rental",
    description:
      "Explore a wide range of rental properties tailored to your needs. Use advanced filters to search by location, price, and amenities to find your ideal home effortlessly.",
  },
  {
    imageSrc: "/landing-icon-calendar.png",
    title: "Seamless Booking Process",
    description:
      "Secure your dream rental with a hassle-free online booking system. Schedule viewings, compare options, and confirm your reservation—all in just a few clicks!",
  },
  {
    imageSrc: "/landing-icon-heart.png",
    title: "Settle in Comfortably",
    description:
      "Move in with confidence and start making memories in your new home. Experience convenience, security, and a smooth transition with our reliable rental services.",
  },
];
