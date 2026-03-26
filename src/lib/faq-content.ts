import type { SEOHeadProps } from "../components/react/SEOHead";
import site from "../../data/site.json";

const domain = site.domain.replace(/\/$/, "");
const ogImage = `${domain}/images/pharmacy-vs-online.png`;

export const faqCanonical = `${domain}/faq`;
export const faqMetaDescription =
  "Frequently asked questions about health supplement labels, ingredient terminology, and serving information in Singapore.";
export const faqPageTitle = "Health Supplements Singapore | FAQ";

export const faqBlocks: { question: string; answer: string }[] = [
  {
    question: 'What does "health supplements singapore" usually mean?',
    answer:
      "In everyday language, it refers to consumer products sold in Singapore that add nutrients or other substances to the diet beyond normal food. The phrase covers vitamins, minerals, botanicals, and similar items regulated differently from registered medicines. It is mainly a search and retail context label, not one uniform legal wording on every package.",
  },
  {
    question: "What is the difference between active and inactive ingredients?",
    answer:
      "Active ingredients are the components the product is mainly intended to deliver, usually listed with amounts per serving. Inactive ingredients are excipients that support manufacturing or stability, such as binders, fillers, coatings, or flow agents. Both can appear on labels and both may matter for sensitivities or dietary preferences.",
  },
  {
    question: "How is serving size usually shown on supplement labels?",
    answer:
      "Serving size names the amount that counts as one serving, for example one capsule, two tablets, or one measured scoop. Other figures on the panel are tied to that unit. Comparing products only works if you read serving size first; otherwise similar numbers may describe different intake units.",
  },
  {
    question: "What does amount per serving usually mean?",
    answer:
      "It states how much of each listed ingredient is present in one serving as defined on the label. Units may include milligrams, micrograms, IU, CFU, or extract percentages. This is label arithmetic and product transparency, not individualized intake guidance, which depends on context the label cannot assess.",
  },
  {
    question: "Why do people search for supplement ingredient explanations?",
    answer:
      "Labels often mix common names, chemical names, Latin botanical names, and grouped blends. Queries such as what active ingredient means on supplement labels or supplement ingredient list explanation reflect a need to translate jargon into roles: what the substance is and how quantity is disclosed for supplement ingredients singapore shoppers encounter.",
  },
  {
    question: "Is this site giving medical or dosage advice?",
    answer:
      "No. This site explains how labels, serving size supplement meaning, and supplement label singapore conventions are usually presented. It does not diagnose, treat, or prescribe. Personal decisions belong with a qualified clinician or pharmacist who knows your health status and medicines.",
  },
];

export const faqWebPageJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: faqPageTitle,
  url: faqCanonical,
  description: faqMetaDescription,
  inLanguage: "en-SG",
});

export const faqFaqPageJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": faqCanonical,
  url: faqCanonical,
  inLanguage: "en-SG",
  mainEntity: faqBlocks.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

export const faqBreadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: domain,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: faqCanonical,
    },
  ],
});

/** Props for `<SEOHead />` + `HelmetProvider` (non-Astro or client-only shells). */
export function getFaqSEOHeadProps(): SEOHeadProps {
  return {
    title: faqPageTitle,
    metaDescription: faqMetaDescription,
    canonical: faqCanonical,
    ogTitle: faqPageTitle,
    ogDescription: faqMetaDescription,
    ogUrl: faqCanonical,
    ogImage,
    ogLocale: "en_SG",
    ogImageAlt: site.siteName,
    ogSiteName: site.siteName,
    twitterTitle: faqPageTitle,
    twitterDescription: faqMetaDescription,
    twitterImage: ogImage,
    jsonLdScripts: [faqWebPageJsonLd, faqFaqPageJsonLd, faqBreadcrumbJsonLd],
  };
}
