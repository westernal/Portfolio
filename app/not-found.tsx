import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page not found",
};

const NotFound = () => {
  return (
    <main className="error-page">
      <div className="error-card">
        <h1>404 — Page not found</h1>
        <p>The link you followed doesn&apos;t point anywhere.</p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
