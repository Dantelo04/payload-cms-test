import React from 'react';
import { Page } from '../payload-types';

type HeroBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'hero' }>;

interface HeroBlockProps {
  block: HeroBlock;
}

export const HeroBlock: React.FC<HeroBlockProps> = ({ block }) => {
  const backgroundStyle = block.backgroundImage && typeof block.backgroundImage === 'object' 
    ? { backgroundImage: `url(${block.backgroundImage.url})` }
    : {};

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {block.headline}
        </h1>
        {block.subheadline && (
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            {block.subheadline}
          </p>
        )}
        {block.ctaText && block.ctaLink && (
          <a
            href={block.ctaLink}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            {block.ctaText}
          </a>
        )}
      </div>
    </section>
  );
};
