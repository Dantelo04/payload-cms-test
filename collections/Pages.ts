import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet', 
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
      url: ({ data }) => `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/preview?slug=${data?.slug}`,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        {
          slug: 'hero',
          labels: {
            singular: 'Hero Block',
            plural: 'Hero Blocks',
          },
          fields: [
            {
              name: 'headline',
              type: 'text',
              required: true,
            },
            {
              name: 'subheadline',
              type: 'textarea',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'ctaText',
              type: 'text',
              defaultValue: 'Learn More',
            },
            {
              name: 'ctaLink',
              type: 'text',
            },
          ],
        },
        {
          slug: 'features',
          labels: {
            singular: 'Features Block',
            plural: 'Features Blocks',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Icon name (e.g., "star", "shield", "rocket")',
                  },
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          slug: 'testimonial',
          labels: {
            singular: 'Testimonial Block',
            plural: 'Testimonial Blocks',
          },
          fields: [
            {
              name: 'testimonial',
              type: 'textarea',
              required: true,
            },
            {
              name: 'authorName',
              type: 'text',
              required: true,
            },
            {
              name: 'authorTitle',
              type: 'text',
            },
            {
              name: 'authorCompany',
              type: 'text',
            },
            {
              name: 'authorImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
              defaultValue: 5,
            },
          ],
        },
      ],
    },
  ],
}