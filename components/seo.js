import Head from "next/head";

function Seo({ meta, defaultTitle, description, }) {
  const domain = 'localhost:3000';
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  const path = `https://${domain}${url}`;

  return (
    <Head
      title={defaultTitle}
      meta={[
        {
          name: `description`,
          content: 'por llenar',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: path,
        },
        {
          property: `og:image`,
          content: `https://${domain}images/logo.png`,
        },
        {
          property: `og:description`,
          content: 'por llenar',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '@rich1n',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: 'por llenar',
        },
        {
          name:`twitter:image`,
          content: `https://${domain}images/logo.png`,
        },
        {
          name: `twitter:site`,
          content: `@rich1n`,
        },
      ].concat(meta)}
    />
  )
}
export default Seo
