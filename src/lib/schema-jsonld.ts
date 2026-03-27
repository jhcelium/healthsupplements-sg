import { canonicalUrl } from "./urls";

/** Stable JSON-LD string for `<script type="application/ld+json" set:html={…}>`. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data);
}

export type WebPageJsonLdInput = {
  name: string;
  /** Site path, e.g. `/definitions` */
  path: string;
  description: string;
  inLanguage?: string;
  /** Optional SpeakableSpecification cssSelector list */
  speakableSelectors?: string[];
};

export function buildWebPageJsonLd(input: WebPageJsonLdInput): object {
  const url = canonicalUrl(input.path);
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    url,
    description: input.description,
    inLanguage: input.inLanguage ?? "en-SG",
  };
  if (input.speakableSelectors?.length) {
    base.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: input.speakableSelectors,
    };
  }
  return base;
}

export type DefinedTermInput = {
  name: string;
  description: string;
};

export type DefinedTermSetJsonLdInput = {
  /** Name of the vocabulary / page */
  name: string;
  /** Page path for this set, e.g. `/definitions` */
  path: string;
  description?: string;
  terms: DefinedTermInput[];
  inLanguage?: string;
};

export function buildDefinedTermSetJsonLd(input: DefinedTermSetJsonLdInput): object {
  const setUrl = canonicalUrl(input.path);
  const inLanguage = input.inLanguage ?? "en-SG";
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: input.name,
    url: setUrl,
    ...(input.description ? { description: input.description } : {}),
    inLanguage,
    hasDefinedTerm: input.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
      inDefinedTermSet: setUrl,
    })),
  };
}

export type BreadcrumbItemInput = { name: string; path: string };

export function buildBreadcrumbListJsonLd(items: BreadcrumbItemInput[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
