# Custom Blocks System

This Payload CMS project now includes three custom block types with live preview functionality.

## Block Types

### 1. Hero Block
- **Purpose**: Large banner section with headline and call-to-action
- **Fields**:
  - `headline` (required): Main heading text
  - `subheadline`: Supporting text below the headline
  - `backgroundImage`: Optional background image
  - `ctaText`: Call-to-action button text (defaults to "Learn More")
  - `ctaLink`: URL for the call-to-action button

### 2. Features Block
- **Purpose**: Showcase multiple features with icons
- **Fields**:
  - `title`: Section title
  - `description`: Section description
  - `features`: Array of feature items, each with:
    - `icon`: Icon name (star, shield, rocket, heart, lightning, trophy, diamond, fire, check, target)
    - `title`: Feature title
    - `description`: Feature description

### 3. Testimonial Block
- **Purpose**: Customer testimonial with author details
- **Fields**:
  - `testimonial` (required): Quote text
  - `authorName` (required): Author's name
  - `authorTitle`: Author's job title
  - `authorCompany`: Author's company
  - `authorImage`: Optional author photo
  - `rating`: Star rating (1-5, defaults to 5)

## Live Preview

The system includes live preview functionality with three breakpoints:
- **Mobile**: 375px × 667px
- **Tablet**: 768px × 1024px  
- **Desktop**: 1440px × 900px

## How to Use

1. **Create a Page**:
   - Go to `/admin/collections/pages`
   - Click "Create New"
   - Fill in the title and slug
   - Add blocks using the "Add Block" button

2. **Add Blocks**:
   - Choose from Hero, Features, or Testimonial blocks
   - Fill in the required fields
   - Use the live preview to see changes in real-time

3. **View on Frontend**:
   - Visit the homepage to see all pages with their blocks
   - Use the preview URL for live preview: `/preview?slug=your-page-slug`

## File Structure

- `collections/Pages.ts` - Page collection with block definitions
- `components/hero-block.tsx` - Hero block React component
- `components/features-block.tsx` - Features block React component  
- `components/testimonial-block.tsx` - Testimonial block React component
- `components/blocks-renderer.tsx` - Main blocks renderer
- `app/(frontend)/preview/page.tsx` - Live preview route

## Styling

The blocks use Tailwind CSS for styling and include:
- Responsive design for mobile, tablet, and desktop
- Modern, clean UI with proper spacing and typography
- Hover effects and transitions
- Professional color scheme

## Next Steps

You can extend this system by:
- Adding more block types
- Customizing the styling
- Adding more fields to existing blocks
- Implementing block-specific admin components
- Adding validation rules
