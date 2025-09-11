import Head from "next/head";
import Link from "next/link";

const Error = () => {
  return (
    <main className="error-page flex">
      <Head>
        <title>404 - Ali Navidi</title>
      </Head>

      <div className="blog-item">
        <h1>404 - Page not found</h1>
        <p>
          Looks like the link you{"'"}re looking for doesn{"'"}t exist!
        </p>
        <Link href="/">
          <button className="btn from-top resume">Go to home page</button>
        </Link>
      </div>
    </main>
  );
};

export default Error;
