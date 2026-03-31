import type { SEOHeadProps } from "../components/react/SEOHead";
import site from "../../data/site.json";
import {
  buildBreadcrumbListJsonLd,
  buildDefinedTermSetJsonLd,
  buildWebPageJsonLd,
  serializeJsonLd,
} from "./schema-jsonld";

const domain = site.domain.replace(/\/$/, "");
const ogImage = `${domain}/images/pharmacy-vs-online.png`;

export const definitionsPath = "/definitions";

export const definitionsPageTitle = "Health Supplements Singapore | Definitions";

export const definitionsMetaDescription =
  "Definitions of key health supplement terms in Singapore, including active ingredients, serving size, amount per serving, and daily intake wording.";

export const definitionsCanonical = `${domain}${definitionsPath}`;

export const definitionsIntroParagraph =
  "Health supplements singapore packaging typically lists supplement ingredients singapore under fixed headings so shoppers can compare products without opening every bottle. People searching serving size supplement meaning, amount per serving supplement lines, or daily intake information on supplement labels often want plain wording for what active ingredient means on supplement labels, what inactive ingredient means, how serving size is usually shown, and what amount per serving means beside the serving line. This definitions page answers those label-reading questions in neutral, quotable language. It is not medical advice, not dosing guidance, and not a recommendation for any product.";

export type DefinitionSection = {
  heading: string;
  directAnswer: string;
  supporting: string;
};

export const definitionSections: DefinitionSection[] = [
  {
    heading: "Active Ingredient",
    directAnswer:
      "An active ingredient is the named component a supplement is mainly formulated to deliver. On the label it appears by name with an amount tied to one serving as the panel defines that unit. When people ask what active ingredient means on supplement labels, they usually mean that declared line—not the shell, a flavor, or grouped blends that omit individual rows.",
    supporting:
      "For supplement ingredients singapore products, actives may be vitamins, minerals, botanical extracts, amino acids, or other declared compounds, sometimes with standardisation notes. Common names may sit alongside chemical or botanical Latin names. The active list is the starting point for comparing similar formulas or spotting repeated substances across several items you might already use. It is label transparency, not a statement that any listed level is appropriate for you. Personal questions stay outside this glossary.",
  },
  {
    heading: "Inactive Ingredient",
    directAnswer:
      "An inactive ingredient, often called an excipient, supports manufacturing or stability—binding, coating, flow, or fill—rather than being the headline substance the panel presents as the main deliverable. What inactive ingredient means is that the material holds the dosage form together; it is not the primary named active line in the usual sense.",
    supporting:
      "Excipients still appear on supplement ingredients singapore labels and can matter for allergies, intolerances, or dietary choices even though they are not the marketing focus. Examples include capsule polymers, starch, silica, or sweeteners. Packaging may list them after actives or within tables; wording varies by format and by importer. Personal tolerance questions belong with a clinician or pharmacist rather than this general reference.",
  },
  {
    heading: "Serving Size",
    directAnswer:
      "Serving size is the manufacturer-defined unit counted as one serving—one softgel, two tablets, half a scoop, ten millilitres, or similar. How serving size is usually shown is a dedicated line that anchors every per-serving number on the panel; serving size supplement meaning for comparisons depends on reading that line before interpreting anything else.",
    supporting:
      "Because health supplements singapore shelves mix capsules, powders, and liquids, the counting unit can differ even when ingredients overlap. Always align amount per serving supplement figures with the stated serving before comparing bottles. This page describes label conventions only; it does not tell you how many servings you should take.",
  },
  {
    heading: "Amount Per Serving",
    directAnswer:
      "Amount per serving states how much of each listed ingredient is present in exactly one serving as defined on the label. Units may include milligrams, micrograms, international units, colony-forming units, or extract percentages. It answers what amount per serving means as printed panel math tied to that serving line—not a personalised intake target for any reader.",
    supporting:
      "Every amount ties back to serving size: if the serving is two capsules, the numbers describe both together; if the serving is one sachet, they describe the full sachet. People comparing supplement ingredients singapore across several products should watch unit mismatches when mentally adding totals. Clinical appropriateness is not inferred from the label numbers alone.",
  },
  {
    heading: "Daily Intake Information",
    directAnswer:
      "Daily intake information on supplement labels covers suggested servings per day, percentage daily value lines where those appear, and similar frequency wording packaged with the product. It states the manufacturer’s general framing for how often the labelled serving might be used—not an individual prescription, meal plan, or clinical schedule.",
    supporting:
      "Suggested frequency differs from medical dosing; it is aimed at a broad audience on retail packaging. Percent figures, when shown, compare to reference intake values and may not reflect your needs. For medicines, pregnancy, chronic illness, or other constraints, interpret daily intake information on supplement labels with a qualified professional rather than this educational summary alone.",
  },
];

export const definitionsKeyTakeaway =
  "Reading health supplements singapore labels means separating active and inactive ingredients, locking serving size supplement meaning before reading amount per serving supplement values, then placing daily intake information on supplement labels in context as general frequency wording. Supplement ingredients singapore panels are built for transparency and comparison, not to replace professional judgement about whether any product belongs in your routine.";

export const definitionsRelatedContextLead =
  "This URL explains label vocabulary for health supplements singapore packaging. It does not cover shop policies, category law, or retail channels in depth. For broader buying context and how the market is usually described to consumers, follow the companion resource below.";

export const definitionsRelatedGuideUrl = "https://supplementsingapore.neoi.jp/";
export const definitionsRelatedGuideAnchorText = "Supplements Singapore guide";

const definedTermSetDescription =
  "Neutral glossary-style definitions for how common supplement label terms appear in a Singapore retail context. Educational wording only; not clinical, dosing, or product-specific guidance.";

const definedTermsForJsonLd = definitionSections.map(({ heading, directAnswer, supporting }) => ({
  name: heading,
  description: `${directAnswer} ${supporting}`,
}));

export const definitionsWebPageJsonLd = serializeJsonLd(
  buildWebPageJsonLd({
    name: definitionsPageTitle,
    path: definitionsPath,
    description: definitionsMetaDescription,
    speakableSelectors: ["h1", ".definitions-intro"],
  })
);

export const definitionsDefinedTermSetJsonLd = serializeJsonLd(
  buildDefinedTermSetJsonLd({
    name: "Health supplement label terminology (Singapore context)",
    path: definitionsPath,
    description: definedTermSetDescription,
    terms: definedTermsForJsonLd,
  })
);

export const definitionsBreadcrumbJsonLd = serializeJsonLd(
  buildBreadcrumbListJsonLd([
    { name: "Home", path: "/" },
    { name: "Definitions", path: definitionsPath },
  ])
);

/** Props for `<SEOHead />` + `HelmetProvider` (non-Astro or client-only shells). Astro pages use `Seo.astro` + head slot JSON-LD. */
export function getDefinitionsSEOHeadProps(): SEOHeadProps {
  return {
    title: definitionsPageTitle,
    metaDescription: definitionsMetaDescription,
    canonical: definitionsCanonical,
    ogTitle: definitionsPageTitle,
    ogDescription: definitionsMetaDescription,
    ogUrl: definitionsCanonical,
    ogImage,
    ogLocale: "en_SG",
    ogImageAlt: site.siteName,
    ogSiteName: site.siteName,
    twitterTitle: definitionsPageTitle,
    twitterDescription: definitionsMetaDescription,
    twitterImage: ogImage,
    jsonLdScripts: [
      definitionsWebPageJsonLd,
      definitionsDefinedTermSetJsonLd,
      definitionsBreadcrumbJsonLd,
    ],
  };
}
