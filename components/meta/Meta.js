import Head from 'next/head';

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Meta;
