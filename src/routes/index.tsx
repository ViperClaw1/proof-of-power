import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ambitious Labs × Lob — Built To Back It Up" },
      { name: "description", content: "Case studies, results, and references behind what we proposed for Lob." },
    ],
  }),
  component: Index,
});

const LOGO = "https://cdn.prod.website-files.com/66975d37f3a3e325dc111b02/66b446f6e30d9755b85c9ebb_Logo.png";
const IMG_CUREX = "https://cdn.prod.website-files.com/66a221f2d1a9fb5ce9ab780d/6a157d127dc17d1ee5df3262_curex-featured.jpg";
const IMG_OMI = "https://cdn.prod.website-files.com/66a221f2d1a9fb5ce9ab780d/6a15879b47d4a9d0820fdac9_omi-featured.jpg";
const IMG_ANCHOR = "https://cdn.prod.website-files.com/66a221f2d1a9fb5ce9ab780d/6a157d4d0e0dbfade4cbfad1_anchorpest.jpg";

function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={LOGO} alt="Ambitious Labs" className={className} />;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function SectionHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="max-w-3xl mb-12">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display uppercase text-4xl md:text-6xl mt-3">{title}</h2>
      {intro && <p className="mt-5 text-muted text-lg leading-relaxed" style={{ color: "#93A1B5" }}>{intro}</p>}
    </div>
  );
}

function StatChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold"
      style={{ background: "rgba(56,189,248,0.10)", color: "#38BDF8", border: "1px solid rgba(56,189,248,0.25)" }}>
      {children}
    </span>
  );
}

type Case = {
  img: string;
  eyebrow: string;
  title: string;
  challenge: string;
  built: string;
  stats: string[];
  whyLob: string;
  link: string;
};

const cases: Case[] = [
  {
    img: IMG_OMI,
    eyebrow: "Case Study · B2B / Technical SaaS",
    title: "Programmatic SEO for a hard-to-reach technical audience",
    challenge:
      "A niche AI-wearable brand needed visibility with developers and power users in a fast-moving, crowded category — an audience that ignores generic marketing.",
    built:
      "A programmatic SEO engine with deep intent mapping across thousands of technical, long-tail queries — a dual-layer strategy capturing both discovery and conversion-ready searches.",
    stats: ["204K+ organic clicks", "7M+ impressions", "3,900+ pages ranking"],
    whyLob:
      "The closest analog to your business — a technical B2B audience and long-tail, persona-specific search captured at scale. Exactly the opportunity you flagged.",
    link: "https://www.ambitiouslabs.io/case-study/omi",
  },
  {
    img: IMG_CUREX,
    eyebrow: "Case Study · Healthcare / Telehealth",
    title: "Replacing expensive paid search with an organic engine",
    challenge:
      "Paid search costs ($4–$7+ per click) were becoming unsustainable as the company scaled in one of the most competitive search categories online.",
    built:
      "An AI-powered programmatic SEO system generating thousands of intent-mapped pages across conditions, treatments, and location-specific demand.",
    stats: ["1M+ organic clicks", "91% of traffic from the new system", "$4M–$7M est. equivalent ad value"],
    whyLob:
      "Proof we build organic into infrastructure that lowers dependence on paid spend — the same compounding layer we'd build under your program.",
    link: "https://www.ambitiouslabs.io/case-study/curex",
  },
  {
    img: IMG_ANCHOR,
    eyebrow: "Case Study · Service / Lead Gen",
    title: "From traffic to tracked, booked leads",
    challenge:
      "Near-total dependence on a single Google Ads campaign, almost no organic visibility, and larger competitors dominating search.",
    built:
      "A rebuilt acquisition engine — search behavior mapped into topic clusters, 176+ programmatic pages, technical SEO fixes, and full lead-tracking infrastructure to measure calls and form fills.",
    stats: ["+940% organic traffic (<8 mo)", "~10% organic conversion rate", "21–25 inbound leads/week"],
    whyLob:
      "The full loop you're after — content engine + technical SEO + conversion tracking, with leads as the outcome, not vanity traffic. Maps directly to the CRO + measurement scope.",
    link: "https://www.ambitiouslabs.io/case-study/anchorpest",
  },
];

const fitRows: [string, string][] = [
  [
    "SEO + AEO/GEO content at scale, long-tail & persona-specific",
    "Programmatic SEO engines that launch thousands of intent-mapped pages — see Curex, Omi, Anchorpest",
  ],
  [
    "More content volume on top of the current ~20/mo",
    "Systems built to scale page production without scaling headcount",
  ],
  [
    "CRO — structured, big-swing testing",
    "Conversion + lead-tracking infrastructure, not just traffic (see Anchorpest)",
  ],
  [
    "A partner inside your tools (Webflow, VWO) and cadence",
    "We already work natively in Webflow; flat retainer, weekly cadence, we flag early",
  ],
];

const stats = [
  { num: "1M+", label: "organic clicks generated (Curex)" },
  { num: "204K+", label: "organic clicks for a technical B2B audience (Omi)" },
  { num: "+940%", label: "organic traffic growth in under 8 months (Anchorpest)" },
  { num: "200–400%", label: "typical organic traffic growth over 12 months" },
];

const pillars = [
  {
    title: "We work in your tools",
    body: "Native in Webflow + VWO; content publishes for your green-light, low lift on your side.",
  },
  {
    title: "Flat retainer",
    body: "Predictable cost, set to scope. Our incentive is performance, not your ad spend.",
  },
  {
    title: "Full-funnel + AI-search ready",
    body: "Organic, AEO/GEO, and CRO in one system, built to be cited in AI answers.",
  },
  {
    title: "Proactive cadence",
    body: "Dedicated Slack channel, weekly working calls, we flag things early.",
  },
];

type Testimonial = {
  company: string;
  domain: string;
  person: string;
  title?: string;
  quote: string;
  chips?: string[];
  rating?: string;
};

const testimonials: Testimonial[] = [
  {
    company: "Monster VoIP",
    domain: "monstervoip.com",
    person: "Colin",
    title: "Founder",
    chips: ["0 → 150+ organic leads/month"],
    quote:
      "Five months ago we had zero organic leads. Now we're getting over 150 leads a month organically — somewhere between $15K and $60K added to pipeline every month. They do what they say they're going to do.",
  },
  {
    company: "Roundhill Investments",
    domain: "roundhillinvestments.com",
    person: "Will Hershey",
    title: "Co-founder & CEO",
    chips: ["$300K+ saved in ad costs", "200K+ organic visitors"],
    quote:
      "A lot of people think SEO is commoditized. I wouldn't say that when you look at what Twiz is doing — having Lucas and the team has been invaluable for our content and search strategy.",
  },
  {
    company: "SaaStr",
    domain: "saastr.com",
    person: "Faith Story",
    rating: "★★★★★ 5.0 / 5.0",
    quote:
      "Twiz was great to work with. They're willing to work with marketing teams, communicate well, and can pivot quickly when needed. They're great if your company is scaling up a new product.",
  },
  {
    company: "Merch Farm",
    domain: "merchfarm.com",
    person: "Alex Young",
    chips: ["33% close rate on booked meetings"],
    quote:
      "Immediately we saw huge success — we haven't been able to keep up with the customers coming in. We're at a 33% close rate, which for business development is essentially unheard of.",
  },
  {
    company: "Splittesting.com",
    domain: "splittesting.com",
    person: "Dylan Ander",
    title: "Founder",
    quote:
      "The numbers they predicted were on point — they did exactly what they said. Quality leads, people showed up on time. It comes down to follow-through, and they followed through.",
  },
];

function CompanyMark({ domain, company }: { domain: string; company: string }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt={`${company} logo`}
        className="h-8 w-8 rounded-md bg-white/5 object-contain p-1"
        onError={(e) => ((e.currentTarget.style.display = "none"))}
      />
      <span className="font-semibold tracking-tight">{company}</span>
    </div>
  );
}

function Rocket({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#glow)" />
      <g transform="translate(60 40) rotate(20 40 60)">
        <path d="M40 0 C60 30 60 70 40 110 C20 70 20 30 40 0 Z" fill="#fff" opacity="0.95" />
        <circle cx="40" cy="45" r="10" fill="#0D2748" />
        <path d="M40 110 L25 130 L40 120 L55 130 Z" fill="#38BDF8" />
        <path d="M15 70 L0 90 L25 85 Z" fill="#2563EB" />
        <path d="M65 70 L80 90 L55 85 Z" fill="#2563EB" />
      </g>
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0E17", color: "#fff" }}>
      {/* HERO */}
      <section className="panel-gradient panel-streak">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-8 pb-24 md:pb-32 relative">
          <header className="flex items-center justify-between">
            <Logo className="h-9" />
            <a
              href="mailto:jackson@ambitiouslabs.io"
              className="hidden md:inline-flex text-sm font-medium text-white/80 hover:text-white"
            >
              jackson@ambitiouslabs.io
            </a>
          </header>

          <div className="grid md:grid-cols-12 gap-10 mt-20 md:mt-28 items-center relative">
            <div className="md:col-span-8 relative z-10">
              <Eyebrow>Prepared for Lob · June 2026</Eyebrow>
              <h1 className="font-display uppercase mt-5 text-[3.25rem] sm:text-7xl md:text-8xl">
                Built To<br />Back It Up
              </h1>
              <p className="mt-7 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
                The results, case studies, and references behind what we proposed — so you can see
                exactly the kind of work we'd do for Lob.
              </p>
              <p className="mt-6 text-sm text-white/60">
                For Aaron Gingras, Lob · Prepared by Ambitious Labs
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Rocket className="w-64 md:w-80 h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE FIT */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <SectionHeader
          eyebrow="Section 02"
          title="A fit for exactly what you're building"
          intro="Lob already runs a strong in-house engine. Here's where we slot in — and where we've done this exact work before."
        />
        <div className="card-base overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 text-sm md:text-base">
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r font-semibold uppercase tracking-wider text-xs" style={{ color: "#38BDF8" }}>
              What Lob is looking for
            </div>
            <div className="px-6 py-4 font-semibold uppercase tracking-wider text-xs hidden md:block" style={{ color: "#38BDF8" }}>
              What we bring (with proof)
            </div>
            {fitRows.map(([a, b], i) => (
              <div key={i} className="contents">
                <div className="px-6 py-6 border-t md:border-r" style={{ borderColor: "#1F2D45" }}>
                  <p className="font-medium">{a}</p>
                </div>
                <div className="px-6 py-6 border-t" style={{ borderColor: "#1F2D45", color: "#cdd6e3" }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t" style={{ borderColor: "#1F2D45" }}>
        <SectionHeader
          eyebrow="Results at a glance"
          title="The numbers"
          intro="Representative results from our organic & conversion work. Actual results vary with market, offer, and starting point."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.num} className="card-base p-7">
              <div className="stat-num">{s.num}</div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#93A1B5" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t" style={{ borderColor: "#1F2D45" }}>
        <SectionHeader
          eyebrow="Proof"
          title="Case studies"
          intro="Three different categories, one repeatable system: capture high-intent search at scale, then turn it into tracked pipeline."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="card-base overflow-hidden flex flex-col">
              <div className="aspect-[16/10] overflow-hidden bg-black/40">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <Eyebrow>{c.eyebrow}</Eyebrow>
                <h3 className="font-display uppercase mt-3 text-2xl md:text-[1.6rem] leading-[1.05]">
                  {c.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#cdd6e3" }}>
                  <div>
                    <div className="text-white font-semibold mb-1">The challenge</div>
                    <p>{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">What we built</div>
                    <p>{c.built}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {c.stats.map((s) => <StatChip key={s}>{s}</StatChip>)}
                </div>

                <div
                  className="mt-6 rounded-xl p-4 border"
                  style={{ borderColor: "rgba(56,189,248,0.25)", background: "rgba(56,189,248,0.06)" }}
                >
                  <div className="eyebrow mb-1">Why it matters for Lob</div>
                  <p className="text-sm leading-relaxed text-white/90">{c.whyLob}</p>
                </div>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                  style={{ color: "#38BDF8" }}
                >
                  Read the full study <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t" style={{ borderColor: "#1F2D45" }}>
        <SectionHeader
          eyebrow="How we work"
          title="An extension of your team"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div key={p.title} className="card-base p-7">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center font-display text-lg"
                style={{ background: "rgba(56,189,248,0.12)", color: "#38BDF8" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display uppercase mt-5 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#93A1B5" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOUNT LEAD */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t" style={{ borderColor: "#1F2D45" }}>
        <SectionHeader
          eyebrow="Your team"
          title="Meet your account lead"
          intro="Lucas will personally lead Lob's engagement. Before Ambitious Labs, he founded and ran Twiz, a growth marketing agency focused on SEO and lead generation. A sample of his work below."
        />

        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="card-base p-7 lg:col-span-5 flex flex-col sm:flex-row gap-6 items-start">
            <div
              className="h-28 w-28 rounded-2xl flex-shrink-0 flex items-center justify-center text-xs"
              style={{ background: "linear-gradient(135deg,#0D2748,#1B4DCB)", color: "#93A1B5" }}
            >
              [HEADSHOT]
            </div>
            <div>
              <div className="eyebrow">Account Lead</div>
              <h3 className="font-display uppercase mt-2 text-3xl">Lucas [LAST NAME]</h3>
              <p className="mt-2 text-sm" style={{ color: "#38BDF8" }}>
                Head of Growth Services, Ambitious Labs · Founder, Twiz
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#cdd6e3" }}>
                Lucas founded Twiz, a growth agency specializing in SEO and lead generation for
                B2B and service businesses, before joining Ambitious Labs to lead growth-services
                engagements. He'll be your day-to-day lead and primary point of contact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="text-xs uppercase tracking-widest" style={{ color: "#93A1B5" }}>
              Results below are from Lucas's work at Twiz.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <figure key={t.company} className="card-base p-6 md:p-7 flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <CompanyMark domain={t.domain} company={t.company} />
                <span className="text-xs" style={{ color: "#93A1B5" }}>{t.domain}</span>
              </div>
              {t.chips && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.chips.map((c) => <StatChip key={c}>{c}</StatChip>)}
                </div>
              )}
              {t.rating && (
                <div className="mt-4 text-sm font-semibold" style={{ color: "#38BDF8" }}>{t.rating}</div>
              )}
              <blockquote className="mt-5 text-[15px] leading-relaxed text-white/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm" style={{ color: "#93A1B5" }}>
                — <span className="text-white font-medium">{t.person}</span>
                {t.title && <>, {t.title}</>}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* REFERENCES */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t" style={{ borderColor: "#1F2D45" }}>
        <SectionHeader
          eyebrow="Talk to people we've worked with"
          title="References"
          intro="Happy to connect you directly — here are references you can call."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-base p-7">
              <div className="eyebrow">Reference {i.toString().padStart(2, "0")}</div>
              <h3 className="font-display uppercase mt-3 text-2xl">[Name]</h3>
              <p className="mt-2 text-sm" style={{ color: "#38BDF8" }}>[Title] — [Company]</p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#cdd6e3" }}>
                [One-line context about the engagement and outcome.]
              </p>
              <blockquote className="mt-4 text-sm italic text-white/85">
                "[Optional ≤1-sentence quote]"
              </blockquote>
              <div className="mt-6 pt-4 border-t text-sm" style={{ borderColor: "#1F2D45", color: "#93A1B5" }}>
                [email or available on request]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <div className="panel-gradient panel-streak rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-10 items-center relative z-10">
            <div className="md:col-span-8">
              <Logo className="h-8" />
              <h2 className="font-display uppercase mt-8 text-5xl md:text-7xl leading-[0.95]">
                Let's put it<br />to work.
              </h2>
              <p className="mt-6 text-lg text-white/85 max-w-xl">
                We'll walk you through how we'd approach Lob's goals — and answer anything on the
                studies above.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:jackson@ambitiouslabs.io"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-sm transition-colors"
                  style={{ background: "#fff", color: "#0D2748" }}
                >
                  Book time →
                </a>
                <a
                  href="mailto:jackson@ambitiouslabs.io"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-sm border border-white/30 text-white hover:bg-white/10"
                >
                  jackson@ambitiouslabs.io
                </a>
                <a
                  href="https://ambitiouslabs.io"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-sm border border-white/30 text-white hover:bg-white/10"
                >
                  ambitiouslabs.io
                </a>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Rocket className="w-56 md:w-72 h-auto" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: "#1F2D45" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-xs" style={{ color: "#93A1B5" }}>
          <div className="flex items-center gap-3">
            <Logo className="h-6 opacity-80" />
            <span>© {new Date().getFullYear()} Ambitious Labs</span>
          </div>
          <div>Prepared for Lob · June 2026</div>
        </div>
      </footer>
    </main>
  );
}
