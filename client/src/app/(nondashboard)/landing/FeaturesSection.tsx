"use client";

import { motion } from "framer-motion";

import {
  featureContainerVariants,
  featureCardDescriptions,
  featureCardLinkTexts,
  featureCardLinkUrls,
  featureCardTitles,
  itemVariants,
} from "@/constants";

import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={featureContainerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
          Quickly find the perfect home you want using our advanced search
          filters!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={featureCardTitles[index]}
                description={featureCardDescriptions[index]}
                linkText={featureCardLinkTexts[index]}
                linkHref={featureCardLinkUrls[index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
