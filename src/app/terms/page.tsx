import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Yarl Lankan",
  description:
    "Terms and conditions for using the Yarl Lankan website, content, and customer inquiry channels.",
};

const terms = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using this website, you agree to these Terms of Use. If you do not accept these terms, please stop using the site.",
  },
  {
    title: "2. Website Scope",
    body: "This website provides information and inquiry access related to Yarl Lankan services, including spices, bakery products, grocery selections, and restaurant-focused offerings.",
  },
  {
    title: "3. Product and Service Information",
    body: "We strive to keep descriptions, availability indicators, images, and pricing guidance accurate. However, information may be updated without prior notice.",
  },
  {
    title: "4. User Responsibilities",
    body: "You agree to provide accurate information when submitting forms and to use the website only for lawful purposes. Misuse, spam, or harmful submissions are prohibited.",
  },
  {
    title: "5. Communication Channels",
    body: "When you submit an inquiry, we may contact you via email, phone, or messaging channels you initiate. Response times may vary based on request complexity and business hours.",
  },
  {
    title: "6. Intellectual Property",
    body: "All branding, text, visuals, and design elements on this website are owned by Yarl Lankan or used with permission. Unauthorized copying, reuse, or redistribution is not allowed.",
  },
  {
    title: "7. External Links and Tools",
    body: "The site may contain links to third-party services, such as map or messaging platforms. Their independent terms and privacy rules apply when you use those services.",
  },
  {
    title: "8. Disclaimer and Limitation of Liability",
    body: "Website content is provided on an as-available basis. Yarl Lankan is not responsible for indirect or consequential losses resulting from use of the website or linked third-party services.",
  },
  {
    title: "9. Changes to Terms",
    body: "We may revise these Terms of Use at any time. Continued use of the website after updates indicates your acceptance of the revised terms.",
  },
  {
    title: "10. Contact for Terms Questions",
    body: "If you have questions about these terms, contact us using the official contact details listed below.",
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#f3eee7]" style={{ animation: "fadeIn 0.6s ease-out" }}>
      <section className="relative bg-[#262626] text-white py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[2px] bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-start gap-3">
            <FileText className="mt-1" size={24} />
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-semibold">Terms of Use</h1>
              <p className="text-white/90 mt-3 text-sm md:text-base max-w-3xl leading-relaxed">
                These terms govern use of the Yarl Lankan website and explain the responsibilities of both users and our business.
              </p>
              <p className="text-[12px] uppercase tracking-[2px] text-white/70 mt-4">Effective Date: March 14, 2026</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_30%,white_0,transparent_30%)]" />
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-5">
          {terms.map((term) => (
            <article
              key={term.title}
              className="bg-white rounded-2xl border border-yarl-brown/10 shadow-sm p-6 md:p-8"
            >
              <h2 className="text-xl md:text-2xl font-playfair text-yarl-brown">{term.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">{term.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <div className="bg-yarl-brown text-white rounded-2xl p-6 md:p-8 border border-white/10">
          <h3 className="text-2xl font-playfair">Need Clarification?</h3>
          <p className="text-white/90 mt-2 text-sm md:text-base">
            Reach out to us for questions about website usage terms.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2"><Mail size={16} /> yarllankan@gmail.com</div>
            <div className="flex items-center gap-2"><Phone size={16} /> +65 8819 5910</div>
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
