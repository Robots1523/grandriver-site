import React, { useState } from "react";

export default function Site() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Kitchener",
    service: "Handyman – General",
    details: ""
  });
  const [sent, setSent] = useState(false);

const phoneDisplay = "226-339-8763";
const phoneHref = "+12263398763";
  const email = "grandriverpropertyservices@gmail.com";

  const onSubmit = async (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Estimate Request — ${form.service} (${form.city})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\nService: ${form.service}\nDetails: ${form.details}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Grand River Property Services",
    "image": ["https://via.placeholder.com/1200x630.png?text=Grand+River+Property+Services"],
    "url": "https://grandriverpropertyservices.ca",
    "telephone": phoneHref,
    "email": email,
    "areaServed": ["Kitchener", "Waterloo", "Cambridge"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kitchener",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": [
      {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"18:00"},
      {"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday","Sunday"],"opens":"09:00","closes":"17:00"}
    ],
    "priceRange": "$$",
    "description": "Handyman & home repair in Kitchener–Waterloo–Cambridge: drywall repair, carpentry, painting, minor plumbing, installations, exterior fixes, and property maintenance plans.",
    "sameAs": []
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Kitchener, Waterloo, and Cambridge (and nearby communities like Breslau, St. Jacobs, New Hamburg, Elmira, and Guelph)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Share a few details, and we’ll provide a clear estimate. Larger or complex projects may require an on-site visit."
        }
      },
      {
        "@type": "Question",
        "name": "Are you insured and covered by WSIB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—commercial general liability insurance and WSIB are part of how we operate. Proof of insurance is available on request."
        }
      },
      {
        "@type": "Question",
        "name": "What kinds of jobs do you take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Drywall and plaster repairs, carpentry, trim, caulking, tile and grout fixes, fixture installs, minor plumbing (taps, toilets), painting touch-ups, exterior repairs, and seasonal maintenance."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold">GR</div>
            <div>
              <p className="font-semibold leading-tight">Grand River Property Services</p>
              <p className="text-xs text-neutral-600">Handyman & Home Repair — Kitchener • Waterloo • Cambridge</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#services" className="text-sm hover:text-emerald-700">Services</a>
            <a href="#areas" className="text-sm hover:text-emerald-700">Service Area</a>
            <a href="#reviews" className="text-sm hover:text-emerald-700">Reviews</a>
            <a href="#faq" className="text-sm hover:text-emerald-700">FAQ</a>
            <a href={`tel:${phoneHref}`} className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm shadow hover:bg-emerald-700">Call {phoneDisplay}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Handyman & Home Repair in Kitchener–Waterloo–Cambridge
            </h1>
            <p className="text-neutral-700 text-lg md:text-xl mb-6">
              Drywall fixes, carpentry, painting, tile repairs, minor plumbing, and exterior maintenance. Fast, reliable, insured, and WSIB-covered. Get your to-do list done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#estimate" className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 w-full sm:w-auto text-center">Get a Free Estimate</a>
              <a href="#services" className="px-5 py-3 rounded-2xl border border-neutral-300 hover:border-neutral-400 w-full sm:w-auto text-center">Browse Services</a>
            </div>
            <div className="mt-6 text-xs text-neutral-600">
              <span className="inline-flex items-center gap-2 mr-4">✅ Insured</span>
              <span className="inline-flex items-center gap-2 mr-4">✅ WSIB</span>
              <span className="inline-flex items-center gap-2">✅ Warranty on workmanship</span>
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-200">
              <h2 className="text-xl font-semibold mb-4">Request an Estimate</h2>
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3">
                <input required className="border rounded-xl px-3 py-2" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
                <input required className="border rounded-xl px-3 py-2" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
                <input className="border rounded-xl px-3 py-2" type="email" placeholder="Email (optional)" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
                <div className="grid grid-cols-2 gap-3">
                  <select className="border rounded-xl px-3 py-2" value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})}>
                    <option>Kitchener</option><option>Waterloo</option><option>Cambridge</option><option>Guelph</option><option>Other</option>
                  </select>
                  <select className="border rounded-xl px-3 py-2" value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}>
                    <option>Handyman – General</option>
                    <option>Drywall & Plaster Repair</option>
                    <option>Carpentry & Trim</option>
                    <option>Painting & Caulking</option>
                    <option>Tile & Grout Repair</option>
                    <option>Fixture Installs (TVs, shelves, etc.)</option>
                    <option>Minor Plumbing (taps, toilets)</option>
                    <option>Exterior Repairs</option>
                    <option>Seasonal Maintenance</option>
                  </select>
                </div>
                <textarea className="border rounded-xl px-3 py-2" placeholder="Describe the job" rows={4} value={form.details} onChange={(e)=>setForm({...form, details:e.target.value})} />
                <button className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700">Send</button>
                {sent && <p className="text-sm text-emerald-700">Thanks! Your email app should open—if not, email us directly at {email}.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Handyman Services</h2>
        <p className="text-neutral-700 mb-8 max-w-3xl">From quick fixes to small projects, we help homeowners and property managers across Kitchener, Waterloo, and Cambridge keep things running smoothly. Transparent estimates, clean work, and real accountability.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {title: "Drywall & Plaster Repair", desc: "Holes, water damage, texture matching, sanding, priming."},
            {title: "Carpentry & Trim", desc: "Baseboards, casing, doors, shelving, deck & fence repairs."},
            {title: "Painting & Caulking", desc: "Touch-ups, accent walls, trim painting, kitchen/bath caulking."},
            {title: "Tile & Grout Repair", desc: "Regrouting, cracked tile replacement, silicone & waterproofing."},
            {title: "Fixture Installs", desc: "TV mounting, blinds, curtain rods, mirrors, closet systems."},
            {title: "Minor Plumbing", desc: "Faucets, toilets, shutoffs, traps (no major plumbing)."},
            {title: "Exterior Repairs", desc: "Soffit/fascia fixes, siding patches, gates, weatherstripping."},
            {title: "Seasonal Maintenance", desc: "To-do list days, move-in/move-out punch lists, safety checks."},
            {title: "Property Management", desc: "Recurring maintenance plans for landlords & small HOAs."}
          ].map((s) => (
            <div key={s.title} className="border rounded-2xl p-5 hover:shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Service Area: Kitchener • Waterloo • Cambridge</h2>
          <p className="text-neutral-700 max-w-3xl mb-6">We’re a mobile service covering the Tri-City region. We also take nearby jobs in Breslau, St. Jacobs, Elmira, New Hamburg, and Guelph when schedules allow.</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-neutral-800">
            {["Kitchener","Waterloo","Cambridge","Breslau","St. Jacobs","Elmira","New Hamburg","Guelph"].map((city)=> (
              <li key={city} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-600"></span>{city}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Happy Clients</h2>
        <p className="text-neutral-700 mb-8">Ask us for references—our reputation is built on clean work, honest quotes, and showing up when we say we will.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {name: "M. Carter", text: "Fast, tidy, and professional. They handled a long list of fixes in one visit."},
            {name: "J. Singh", text: "Clear estimates, fair pricing, great communication—will hire again."},
            {name: "S. Nguyen", text: "Drywall repair was invisible. Loved the care they took with cleanup."},
          ].map((r)=> (
            <figure key={r.name} className="border rounded-2xl p-5 bg-white">
              <blockquote className="text-neutral-800">“{r.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-600">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQs</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {q: "Are estimates free?", a: "Yes—share photos and details, or we’ll do a quick site visit for larger jobs."},
              {q: "What are your hours?", a: "Evenings and weekends available for now; we aim to schedule within a week for most jobs."},
              {q: "Do you warranty your work?", a: "Yes—ask about our workmanship warranty and materials policies."},
              {q: "Do you work with landlords/property managers?", a: "Yes—recurring maintenance plans available with volume pricing."},
              {q: "Payment methods?", a: "E-transfer, credit card, or invoice on completion for approved accounts."},
            ].map((f)=> (
              <details key={f.q} className="bg-white border rounded-2xl p-4">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-neutral-700 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate CTA */}
      <section id="estimate" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to check off your list?</h2>
          <p className="text-neutral-700 mb-5">Send a few details and we’ll reply with a clear estimate and next steps.</p>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-3">
            <input required className="border rounded-xl px-3 py-2" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input required className="border rounded-xl px-3 py-2" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
            <input className="border rounded-xl px-3 py-2 md:col-span-2" type="email" placeholder="Email (optional)" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
            <select className="border rounded-xl px-3 py-2" value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})}>
              <option>Kitchener</option><option>Waterloo</option><option>Cambridge</option><option>Guelph</option><option>Other</option>
            </select>
            <select className="border rounded-xl px-3 py-2" value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}>
              <option>Handyman – General</option>
              <option>Drywall & Plaster Repair</option>
              <option>Carpentry & Trim</option>
              <option>Painting & Caulking</option>
              <option>Tile & Grout Repair</option>
              <option>Fixture Installs (TVs, shelves, etc.)</option>
              <option>Minor Plumbing (taps, toilets)</option>
              <option>Exterior Repairs</option>
              <option>Seasonal Maintenance</option>
            </select>
            <textarea className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="Describe the job" rows={4} value={form.details} onChange={(e)=>setForm({...form, details:e.target.value})} />
            <button className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 md:col-span-2">Request Estimate</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold">GR</div>
              <p className="font-semibold">Grand River Property Services</p>
            </div>
            <p className="text-sm text-neutral-700">Handyman & home repair across Kitchener, Waterloo, and Cambridge.</p>
          </div>
          <div>
            <p className="font-medium mb-2">Contact</p>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li><a className="hover:text-emerald-700" href={`tel:${phoneHref}`}>{phoneDisplay}</a></li>
              <li><a className="hover:text-emerald-700" href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Quick Links</p>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li><a className="hover:text-emerald-700" href="#services">Services</a></li>
              <li><a className="hover:text-emerald-700" href="#areas">Service Area</a></li>
              <li><a className="hover:text-emerald-700" href="#faq">FAQ</a></li>
              <li><a className="hover:text-emerald-700" href="#estimate">Get Estimate</a></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-neutral-500 text-center pb-6">© {new Date().getFullYear()} Grand River Property Services. All rights reserved.</div>
      </footer>

      {/* Sticky Call CTA (mobile) */}
      <a href={`tel:${phoneHref}`} className="md:hidden fixed bottom-4 right-4 px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow-lg">
        Call Us
      </a>
    </div>
  );
}
