/**
 * Definitions body (label terminology). On Astro, `Seo.astro` + `<script slot="head">` in
 * `definitions.astro` emit canonical meta and JSON-LD in `<head>`. react-helmet-async does not
 * relocate tags during static build, so this component does not render `<SEOHead />` here.
 * For a standalone React shell with `HelmetProvider`, use `<SEOHead {...getDefinitionsSEOHeadProps()} />`
 * from `src/lib/definitions-content.ts`.
 *
 * Route: `src/pages/definitions.astro` → `/definitions`
 * Requested `src/pages/Definitions.tsx` pattern: see `src/pages/Definitions.tsx` re-export.
 */
import {
  definitionSections,
  definitionsIntroParagraph,
  definitionsKeyTakeaway,
  definitionsRelatedContextLead,
  definitionsRelatedGuideAnchorText,
  definitionsRelatedGuideUrl,
} from "../../lib/definitions-content";

export default function Definitions() {
  return (
    <div className="mx-auto max-w-[860px] px-1">
      <nav className="mb-5 text-[13px] text-neutral-600" aria-label="Breadcrumb">
        <ol className="m-0 flex list-none flex-wrap gap-x-1.5 p-0">
          <li className="flex items-center">
            <a className="text-neutral-600 no-underline hover:text-[#0b63ce] hover:underline" href="/">
              Home
            </a>
            <span className="ml-1.5 text-neutral-400" aria-hidden>
              /
            </span>
          </li>
          <li className="font-medium text-neutral-900">Definitions</li>
        </ol>
      </nav>

      <h1 className="mb-3 text-[28px] font-bold leading-tight tracking-tight text-neutral-900">
        Health Supplements in Singapore: Definitions
      </h1>

      <p className="definitions-intro mb-10 text-[17px] leading-relaxed text-neutral-700">
        {definitionsIntroParagraph}
      </p>

      <section aria-label="Term definitions">
        {definitionSections.map(({ heading, directAnswer, supporting }) => (
          <article
            key={heading}
            className="mt-0 border-t border-neutral-200 pt-8 first:border-t-0 first:pt-0"
          >
            <h2 className="mb-2.5 text-lg font-semibold leading-snug text-neutral-900">{heading}</h2>
            <p className="m-0 mb-4 text-[15px] leading-7 text-neutral-800">{directAnswer}</p>
            <p className="m-0 text-[15px] leading-7 text-neutral-800">{supporting}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 border-t border-neutral-200 pt-10">
        <h2 className="mb-3 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900">
          Key Takeaway
        </h2>
        <p className="text-[15px] leading-7 text-neutral-800">{definitionsKeyTakeaway}</p>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-10">
        <h2 className="mb-3 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900">
          Related Context
        </h2>
        <p className="text-[15px] leading-7 text-neutral-800">
          {definitionsRelatedContextLead}{" "}
          <a
            className="text-[#0b63ce] no-underline hover:underline"
            href={definitionsRelatedGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {definitionsRelatedGuideAnchorText}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
