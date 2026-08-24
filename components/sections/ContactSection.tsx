"use client";

import { FormEvent, useState } from "react";
import PageSection from "@/components/layout/PageSection";
import { PROFILE } from "@/lib/portfolio/profile";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\n${message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <PageSection id="contact" ariaLabelledBy="contact-heading">
      <div className="rounded-2xl border border-[rgba(79,214,161,0.18)] bg-[linear-gradient(135deg,rgba(79,214,161,0.09),rgba(18,20,24,0.88)_44%,rgba(122,197,238,0.06))] p-6 sm:p-8 md:p-10 lg:p-12">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-warm)]">Contact</p>
        <h2 id="contact-heading" className="mt-3 font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.05em] text-white">Let&apos;s Build Something</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">I&apos;m actively looking for backend engineering roles. If you&apos;re working on systems that need scale, reliability, and someone who thinks in systems — let&apos;s talk.</p>
        <p className="mt-5 font-semibold text-[#a3f4cf]">Open to backend engineering roles where depth matters.</p>
        <div className="mt-9 grid gap-8 border-t border-white/[0.1] pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <div className="grid gap-3">
              <a href={`mailto:${PROFILE.email}`} className="contact-link">{PROFILE.email}</a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="contact-link">github.com/NikhilTiwari29</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/nikhil-tiwari-0b6980212</a>
            </div>
            <div className="mt-9 rounded-xl border border-white/[0.09] bg-black/10 p-5">
              <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">Want the full picture?</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Download my resume for a formatted view of my experience, skills, and education.</p>
              {PROFILE.resumeUrl ? <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-lg bg-[#4fd6a1] px-4 py-2.5 text-sm font-semibold text-[#062219] no-underline transition hover:bg-[#7aebbd]">Download Resume</a> : null}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="contact-field">Name *<input required name="name" autoComplete="name" placeholder="Your Name" /></label>
              <label className="contact-field">Email *<input required name="email" type="email" autoComplete="email" placeholder="Your Email" /></label>
            </div>
            <label className="contact-field">Company <input name="company" autoComplete="organization" placeholder="Company (optional)" /></label>
            <label className="contact-field">Message *<textarea required name="message" rows={6} placeholder="Tell me about the role or project..." /></label>
            <div className="flex flex-wrap items-center gap-4"><button type="submit" className="rounded-lg bg-[#4fd6a1] px-5 py-3 font-semibold text-[#062219] transition hover:bg-[#7aebbd]">Send Message</button>{sent ? <span className="text-sm text-[#a3f4cf]">Opening your email app…</span> : null}</div>
          </form>
        </div>
      </div>
    </PageSection>
  );
}
