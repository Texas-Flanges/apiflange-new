import relatedResources from '@/data/related-resources.json';

export default function RelatedResources() {
  const { heading, links } = relatedResources;

  if (links.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-resources"
      className="bg-parchment py-20 md:py-28 border-y border-silver/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="related-resources"
              className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4"
            >
              {heading}
            </h2>
          </div>
          <ul className="space-y-5 text-iron-mid leading-relaxed">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="text-brass hover:text-brass-light underline"
                >
                  {link.label}
                </a>
                {` — ${link.note}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
