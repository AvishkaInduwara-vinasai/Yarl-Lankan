import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Yarl Lankan",
  description:
    "How Yarl Lankan collects, uses, stores, and protects personal information from website visitors and inquiry submissions.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: "Yarl Lankan is a Singapore-based Sri Lankan food and lifestyle brand established in 2025. Through this website, we present our products and services across spices, bakery items, grocery offerings, and restaurant-focused experiences.",
  },
  {
    title: "2. Information We Collect",
    body: "When you use our contact and inquiry forms, we may collect your first name, last name, email address, phone number, subject, message details, and optional supporting image references. We also process general technical data needed for normal website operation.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use submitted information to reply to inquiries, provide order or product support, follow up about catering or custom requests, improve our customer service quality, and maintain service records for business operations.",
  },
  {
    title: "4. Communication and Delivery Tools",
    body: "Form submissions are sent through our website communication flow to our business inbox so our team can respond. We may also offer external communication options such as WhatsApp links for customer convenience.",
  },
  {
    title: "5. Cookies and Browser Storage",
    body: "Some pages may store limited preference data in your browser, such as temporary interaction states. This helps improve user experience and does not include payment card data on this site.",
  },
  {
    title: "6. Data Sharing",
    body: "We do not sell your personal data. We only share data with trusted service providers where required to operate website functions, communications, or security measures.",
  },
  {
    title: "7. Data Retention",
    body: "We keep personal information only for as long as reasonably necessary to respond to your requests, provide services, maintain records, and meet legal or regulatory obligations.",
  },
  {
    title: "8. Security",
    body: "We use reasonable technical and organizational safeguards to protect personal information. No online system can guarantee absolute security, but we continuously improve protection practices.",
  },
  {
    title: "9. Your Rights",
    body: "You may request access, correction, or deletion of your personal data by contacting us. We will review and respond in accordance with applicable data protection requirements.",
  },
  {
    title: "10. Policy Updates",
    body: "This Privacy Policy may be updated from time to time to reflect business, legal, or technical changes. The latest version published on this page is the version in effect.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]" style={{ animation: "fadeIn 0.6s ease-out" }}>
      <section className="relative bg-yarl-brown text-white py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[2px] bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-start gap-3">
            <ShieldCheck className="mt-1" size={24} />
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-semibold">Privacy Policy</h1>
              <p className="text-white/90 mt-3 text-sm md:text-base max-w-3xl leading-relaxed">
                This policy explains how Yarl Lankan handles personal information collected through this website and inquiry channels.
              </p>
              <p className="text-[12px] uppercase tracking-[2px] text-white/70 mt-4">Effective Date: March 14, 2026</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_30%,white_0,transparent_30%)]" />
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-white rounded-2xl border border-yarl-brown/10 shadow-sm p-6 md:p-8"
            >
              <h2 className="text-xl md:text-2xl font-playfair text-yarl-brown">{section.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <div className="bg-[#262626] text-white rounded-2xl p-6 md:p-8 border border-white/10">
          <h3 className="text-2xl font-playfair">Contact Us About Privacy</h3>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            For privacy requests or questions, contact our team using the details below.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2"><Mail size={16} /> yarllankan@gmail.com</div>
            <div className="flex items-center gap-2"><Phone size={16} /> +65 8819 5910</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Paya Lebar Square, Singapore</div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `,
        }}
      />
    </main>
  );
}
