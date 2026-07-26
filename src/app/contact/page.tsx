import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { GlowButton } from "@/components/GlowButton";
import { VOLUNTEER_FORM_URL, CONTACT_EMAIL, MAP_EMBED_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the GDG Cloud Chandigarh organizing team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Contact us</h1>
      <p className="mt-3 text-neutral-dark/80">
        Questions about an event, partnership, or just want to say hi? Reach out below.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <GlowButton href={VOLUNTEER_FORM_URL}>Sign up to volunteer</GlowButton>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 rounded-full border border-neutral-light px-6 py-3 text-sm font-semibold text-neutral-dark hover:border-google-blue hover:text-google-blue"
        >
          <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
        </a>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Find us</h2>
        <iframe
          src={MAP_EMBED_URL}
          title="GDG Cloud Chandigarh location"
          className="mt-4 h-72 w-full rounded-2xl border border-neutral-light"
          loading="lazy"
        />
      </section>

    </div>
  );
}
