import React from 'react';
import { Page } from '../payload-types';

type TestimonialBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'testimonial' }>;

interface TestimonialBlockProps {
  block: TestimonialBlock;
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
      ★
    </span>
  ));
};

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({ block }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          {/* Rating */}
          {block.rating && (
            <div className="flex justify-center mb-6 text-2xl">
              {renderStars(block.rating)}
            </div>
          )}
          
          {/* Testimonial */}
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
            "{block.testimonial}"
          </blockquote>
          
          {/* Author */}
          <div className="flex items-center justify-center">
            {block.authorImage && typeof block.authorImage === 'object' && block.authorImage.url && (
              <img
                src={block.authorImage.url}
                alt={block.authorName}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
            )}
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">
                {block.authorName}
              </div>
              {block.authorTitle && (
                <div className="text-gray-600">
                  {block.authorTitle}
                </div>
              )}
              {block.authorCompany && (
                <div className="text-gray-500 text-sm">
                  {block.authorCompany}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
