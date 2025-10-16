import { getPayload } from "payload";
import buildConfig from "../../../payload.config";
import { BlocksRenderer } from "../../../components/blocks-renderer";
import { notFound } from "next/navigation";

interface PreviewPageProps {
  searchParams: {
    slug?: string;
  };
}

export default async function PreviewPage({ searchParams }: PreviewPageProps) {
  const { slug } = searchParams;
  
  if (!slug) {
    notFound();
  }

  const payload = await getPayload({
    config: buildConfig,
  });

  try {
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });

    const page = pages.docs[0];

    if (!page) {
      notFound();
    }

    return (
      <div className="min-h-screen">
        <BlocksRenderer page={page} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching page for preview:', error);
    notFound();
  }
}
