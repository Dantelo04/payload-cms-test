import { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
        name: 'author',
        type: 'relationship',
        relationTo: 'users',
        required: true,
        hasMany: false,
    }
  ],
}