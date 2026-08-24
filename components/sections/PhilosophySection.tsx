"use client";

import { useState } from "react";
import PageSection from "@/components/layout/PageSection";

const approaches = {
  "Problem Approach": {
    intro: "Business impact before code. What's the SLA? What's the failure mode? What does 'done' actually mean?",
    steps: ["Understand the business requirement and real constraints", "Model the domain — entities, boundaries, invariants", "Design the API contract before any implementation", "Map out failure modes and edge cases upfront", "Build from the outside in with clear acceptance criteria"],
    labels: ["Business", "Domain", "Contract", "Failure Modes", "Build"],
  },
  "Debugging Style": {
    intro: "Start with evidence, narrow the blast radius, and verify the fix against the original failure path.",
    steps: ["Reproduce the issue and capture the exact failing path", "Use logs, metrics, and traces to identify the affected boundary", "Validate assumptions against requests, data, and downstream dependencies", "Fix the root cause and protect the edge case with a test", "Observe the release and document the learning"],
    labels: ["Reproduce", "Observe", "Trace", "Protect", "Verify"],
  },
  Architecture: {
    intro: "Choose simple boundaries first, then make reliability, security, and observability explicit before scale forces the issue.",
    steps: ["Clarify ownership, users, and the most important domain events", "Set service and data boundaries around the domain", "Choose synchronous and asynchronous contracts deliberately", "Design for security, failure recovery, and visibility", "Evolve with measured operational feedback"],
    labels: ["Context", "Boundaries", "Contracts", "Reliability", "Evolve"],
  },
} as const;

type Approach = keyof typeof approaches;

export default function PhilosophySection() {
  const [active, setActive] = useState<Approach>("Problem Approach");
  const content = approaches[active];
  return (
    <PageSection id="philosophy" variant="elevated" ariaLabelledBy="philosophy-heading">
      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-warm)]">Engineering Philosophy</p>
      <h2 id="philosophy-heading" className="mt-3 font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.045em] text-[var(--text-primary)]">How I Think</h2>
      <p className="mt-4 max-w-2xl text-[var(--text-muted)]">My engineering philosophy and problem-solving approach.</p>
      <div className="mt-8 flex flex-wrap gap-2 border-b border-white/[0.1] pb-4">
        {(Object.keys(approaches) as Approach[]).map((tab) => <button key={tab} type="button" onClick={() => setActive(tab)} className={`rounded-md px-4 py-2.5 text-sm font-semibold transition ${active === tab ? "bg-[rgba(79,214,161,0.14)] text-[#a3f4cf]" : "text-[var(--text-muted)] hover:bg-white/[0.05] hover:text-white"}`}>{tab}</button>)}
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white">{active}</h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{content.intro}</p>
          <ol className="mt-7 grid gap-4 p-0">
            {content.steps.map((step, index) => <li key={step} className="grid grid-cols-[2rem_1fr] items-start gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] p-4"><span className="font-[family-name:var(--font-syne)] text-lg font-bold text-[var(--accent-warm)]">{index + 1}</span><span className="pt-0.5 text-[var(--text-primary)]">{step}</span></li>)}
          </ol>
        </div>
        <aside className="self-start rounded-xl border border-[rgba(79,214,161,0.18)] bg-[rgba(79,214,161,0.045)] p-5 sm:p-7">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-warm)]">Thought process</p>
          <ol className="mt-6 grid gap-4 p-0">
            {content.labels.map((label, index) => <li key={label} className="flex items-center gap-4"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(79,214,161,0.4)] font-[family-name:var(--font-syne)] text-sm font-bold text-[#a3f4cf]">{index + 1}</span><span className="font-semibold text-white">{label}</span></li>)}
          </ol>
        </aside>
      </div>
    </PageSection>
  );
}
