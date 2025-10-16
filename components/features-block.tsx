import React from 'react';
import { Page } from '../payload-types';

type FeaturesBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'features' }>;

interface FeaturesBlockProps {
  block: FeaturesBlock;
}

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, string> = {
    star: '⭐',
    shield: '🛡️',
    rocket: '🚀',
    heart: '❤️',
    lightning: '⚡',
    trophy: '🏆',
    diamond: '💎',
    fire: '🔥',
    check: '✅',
    target: '🎯',
  };
  
  return iconMap[iconName] || '⭐';
};

export const FeaturesBlock: React.FC<FeaturesBlockProps> = ({ block }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {block.title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {block.title}
            </h2>
            {block.description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {block.description}
              </p>
            )}
          </div>
        )}
        
        {block.features && block.features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {block.features.map((feature: NonNullable<FeaturesBlock['features']>[number], index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">
                  {getIconComponent(feature.icon)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
