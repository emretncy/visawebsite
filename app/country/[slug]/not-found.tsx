import Link from "next/link";

export default function CountryNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="mt-2 text-muted">Bu ülke rehberi bulunamadı.</p>
      <Link
        href="/countries"
        className="mt-6 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary-hover"
      >
        Ülkelere dön
      </Link>
    </div>
  );
}
