export const metadata = {
  title: "Country | WebUtsav",
  description: "Our services are available in these countries. Country-specific content will be added soon.",
}

function toTitleCase(text) {
  return text
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default function CountryPage({ params }) {
  const country = toTitleCase(params.slug || "")

  return (
    <main className="min-h-[70vh] w-full bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {country || "Country"}
          </h1>
          <p className="mt-2 text-gray-600">
            Our services are available in these countries
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-gray-700">
            We are preparing tailored content for {country || "this country"}. Please check back soon. In the meantime, feel free to explore our services or contact us for more details.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/Services" className="inline-flex items-center rounded-md bg-brand-primary-dark px-4 py-2 text-white font-semibold shadow hover:bg-indigo-600 transition-colors">View Services</a>
            <a href="/Contact" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}
