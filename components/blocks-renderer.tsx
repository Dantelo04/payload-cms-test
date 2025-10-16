import React from 'react';
import { HeroBlock } from './hero-block';
import { FeaturesBlock } from './features-block';
import { TestimonialBlock } from './testimonial-block';
import { Page } from '../payload-types';

interface BlocksRendererProps {
  page: Page;
}

export const BlocksRenderer: React.FC<BlocksRendererProps> = ({ page }) => {
  if (!page.content || !Array.isArray(page.content)) {
    return null;
  }

  return (
    <div>
      {page.content.map((block, index) => {
        if (!block || typeof block !== 'object') {
          return null;
        }

        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={index} block={block} />;
          case 'features':
            return <FeaturesBlock key={index} block={block} />;
          case 'testimonial':
            return <TestimonialBlock key={index} block={block} />;
          default:
            console.warn(`Unknown block type: ${(block as any).blockType}`);
            return null;
        }
      })}
    </div>
  );
};
