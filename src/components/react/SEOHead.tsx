import { Helmet } from "react-helmet-async";

/**
 * react-helmet-async head tags for standalone React apps (Vite SPA, Storybook, etc.).
 * On Astro static pages, prefer `Seo.astro` plus `<script slot="head" type="application/ld+json">`
 * so metadata is emitted in `<head>`. Helmet rendered under `<main>` does not relocate tags during Astro SSG.
 *
 * FAQ page: use `getFaqSEOHeadProps()` from `src/lib/faq-content.ts` with `<SEOHead {...getFaqSEOHeadProps()} />`.
 */
export type SEOHeadProps = {
  title: string;
  metaDescription: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  /** e.g. en_SG */
  ogLocale: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogImageAlt?: string;
  ogSiteName?: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  /** ISO language-region for hreflang */
  hreflangLocale?: string;
  jsonLdScripts: string[];
};

/**
 * Head tags for React pages (react-helmet-async). Mirrors the default Astro Seo.astro surface.
 */
export default function SEOHead({
  title,
  metaDescription,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogLocale,
  ogImageWidth = "1080",
  ogImageHeight = "607",
  ogImageAlt = "",
  ogSiteName = "",
  twitterTitle,
  twitterDescription,
  twitterImage,
  hreflangLocale = "en-SG",
  jsonLdScripts,
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content="index,follow" />
      {metaDescription ? (
        <meta name="description" content={metaDescription} />
      ) : null}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hreflang={hreflangLocale} href={canonical} />
      <link rel="alternate" hreflang="x-default" href={canonical} />

      <link rel="icon" type="image/png" href="/images/neoi-logo.png" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      {ogDescription ? (
        <meta property="og:description" content={ogDescription} />
      ) : null}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      {ogImageAlt ? (
        <meta property="og:image:alt" content={ogImageAlt} />
      ) : null}
      <meta property="og:locale" content={ogLocale} />
      {ogSiteName ? (
        <meta property="og:site_name" content={ogSiteName} />
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      {twitterDescription ? (
        <meta name="twitter:description" content={twitterDescription} />
      ) : null}
      <meta name="twitter:image" content={twitterImage} />
      {ogImageAlt ? (
        <meta name="twitter:image:alt" content={ogImageAlt} />
      ) : null}

      {jsonLdScripts.map((raw, i) => (
        <script key={i} type="application/ld+json">
          {raw}
        </script>
      ))}
    </Helmet>
  );
}
