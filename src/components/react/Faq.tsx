/**
 * FAQ body (labels / ingredients / serving context). Head tags use Seo.astro + JSON-LD in faq.astro
 * so metadata stays in <head>; react-helmet-async would otherwise emit tags inside <main> here.
 *
 * Route: `src/pages/faq.astro` → `/faq`
 * Requested `src/pages/Faq.tsx` pattern: see `src/pages/Faq.tsx` re-export.
 */
import { faqBlocks } from "../../lib/faq-content";

export default function Faq() {
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
          <li className="font-medium text-neutral-900">FAQ</li>
        </ol>
      </nav>

      <h1 className="mb-3 text-[28px] font-bold leading-tight tracking-tight text-neutral-900">
        Health Supplements in Singapore: Frequently Asked Questions
      </h1>

      <p className="mb-10 text-[17px] leading-relaxed text-neutral-700">
        This page explains how supplement label singapore panels often present ingredients, distinguish active
        from inactive components, and tie serving size to amount per serving. It is general education only—not
        medical or dosage advice. Searches such as how to read serving size on supplements, what active
        ingredient means on supplement labels, or supplement ingredient list explanation usually aim to decode
        wording rather than pick a formula. We stay neutral: no products, rankings, or efficacy claims. If you
        use prescribed medicines, are pregnant, or manage a chronic condition, speak with a qualified clinician
        or pharmacist before changing what you take.
      </p>

      <section aria-label="Frequently asked questions">
        {faqBlocks.map(({ question, answer }) => (
          <article
            key={question}
            className="mt-0 border-t border-neutral-200 pt-8 first:border-t-0 first:pt-0"
          >
            <h2 className="mb-2.5 text-lg font-semibold leading-snug text-neutral-900">{question}</h2>
            <p className="m-0 text-[15px] leading-7 text-neutral-800">{answer}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 border-t border-neutral-200 pt-10">
        <h2 className="mb-3 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900">
          Key Takeaway
        </h2>
        <p className="text-[15px] leading-7 text-neutral-800">
          Health supplements singapore is a broad retail and regulatory context, not a single phrase on every
          bottle. Labels separate active and inactive ingredients, define serving size, then report amount per
          serving for that unit. Searching what active ingredient means on supplement labels or why people
          search health supplements singapore usually points to decoding those fields—not to choosing a product.
          This page stays descriptive; dosing and treatment decisions require professional advice.
        </p>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-10">
        <h2 className="mb-3 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900">
          Related Context
        </h2>
        <p className="text-[15px] leading-7 text-neutral-800">
          For a wider overview of categories and buying context in Singapore, see the{" "}
          <a
            className="text-[#0b63ce] no-underline hover:underline"
            href="https://supplementsingapore.neoi.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supplements Singapore guide
          </a>
          .
        </p>
      </section>
    </div>
  );
}
