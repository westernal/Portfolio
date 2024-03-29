import Head from "next/head";

const HeadTags = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Ali Navidi - Frontend Developer" />
      <meta name="keywords" content="developer, frontend, reactjs, nextjs" />
      <title>Ali Navidi | Frontend Developer</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <meta
        name="google-site-verification"
        content="YLuaosUg6yxkQ9Gx8jXCn9wS54jjWRv6fMq_Y0Uln8c"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#030a17" />
      <link rel="shortcut icon" href="https://alinavidi.dev/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#030a17" />
    </Head>
  );
};

export default HeadTags;
