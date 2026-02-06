import { notFound } from "next/navigation";
import Link from "next/link";

const validSlugs = ["schengen-news", "country-updates", "visa-tips"];

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default function BlogCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!validSlugs.includes(params.slug)) notFound();
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ← Blog
        </Link>
        <h1 className="mt-6 text-2xl font-bold text-foreground">
          Bu kategorideki yazılar yakında eklenecek.
        </h1>
        <p className="mt-4 text-muted">
          Şimdilik rehberler ve ülke sayfalarından bilgi alabilirsiniz.
        </p>
      </div>
    </div>
  );
}
