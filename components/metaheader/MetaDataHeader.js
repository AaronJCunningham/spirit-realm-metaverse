import Head from "next/head";

const MetaDataHeader = ({
  title = "Shiloh",
  content = "In Shiloh and the Spirit Realm, we see how web3 technology can be used to create new and innovative forms of storytelling. The story follows our protagonist, Shiloh, who discovers a mysterious mask and, upon wearing it, is transported to the Spirit Realm, a parallel world inhabited by spirits. In this new realm, Shiloh must embark on a journey to find his true identity and ultimately return to the land of the living. The outcome of Shiloh's journey will be decided by our community; NFT holders can vote on what happens next as each new chapter unfolds.",
  image = "https://ik.imagekit.io/fx30u3wgcqib/web_cover_mHVP-euiV.jpg",
}) => {
  return (
    <Head>
      <title>{`Spirit Realm - ${title}`}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://spiritrealm.art" />
      <meta
        property="og:title"
        content={`Spirit Realm - ${title}`}
        key="title"
      />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={image} />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="yandex-verification" content="8d5b06a83511cd21" />
    </Head>
  );
};

export default MetaDataHeader;
