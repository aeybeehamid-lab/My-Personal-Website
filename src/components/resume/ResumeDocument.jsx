import { useSiteContent } from '../../hooks/useSiteContent'

/**
 * On-screen & printable resume — content comes from siteContent.js (single source of truth).
 */
export default function ResumeDocument() {
  const { content } = useSiteContent()
  const { personal, experience, education, certifications, projects } = content

  const competencies = content.skills.flatMap((g) => g.items).slice(0, 10)

  const summary =
    content.summary +
    ' Co-founder of Paychat (fintech). B.Eng Electrical & Electronics Engineering; B.Sc. Cybersecurity in progress. Active in humanitarian and community development.'

  const educationEntries = education.filter((e) =>
    e.degree.includes('B.Eng') || e.degree.includes('B.Sc'),
  )

  return (
    <article className="resume-document mx-auto max-w-[210mm] bg-white px-5 py-6 text-[#1a1a1a] shadow-sm sm:px-10 sm:py-10 print:px-12 print:py-12">
      <header className="border-b-2 border-[#0f4c5c] pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-[#0a1628]">{personal.fullName}</h1>
        <p className="mt-1 text-sm font-semibold text-[#0f4c5c]">
          {personal.title} · Electrical & Embedded Systems
        </p>
        <p className="mt-2 text-sm text-[#333]">
          {personal.location}
          <span className="mx-2">·</span>
          <a href={`mailto:${personal.email}`} className="text-[#0f4c5c] underline-offset-2 hover:underline">
            {personal.email}
          </a>
          {personal.phone && (
            <>
              <span className="mx-2">·</span>
              +234 {personal.phone.replace(/^0/, '')}
            </>
          )}
        </p>
      </header>

      <ResumeSection title="Professional Summary">
        <p className="text-justify text-sm leading-relaxed">{summary}</p>
      </ResumeSection>

      <ResumeSection title="Core Competencies">
        <ul className="grid list-disc gap-1 pl-5 text-sm sm:grid-cols-2">
          {competencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Professional Experience">
        {experience.map((job) => (
          <div key={`${job.role}-${job.period}`} className="mb-4 last:mb-0">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold">{job.role}</h3>
                <p className="text-sm italic text-[#444]">{job.company}</p>
              </div>
              <p className="whitespace-nowrap text-xs text-[#555]">{job.period}</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Selected Projects">
        <div className="space-y-2 text-sm">
          {projects.slice(0, 4).map((p) => (
            <p key={p.slug}>
              <strong className="text-[#0a1628]">{p.title}</strong>
              <span className="text-[#444]"> — {p.shortDescription}</span>
            </p>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        {educationEntries.map((edu) => (
          <div key={edu.degree} className="mb-3 flex flex-wrap justify-between gap-2 last:mb-0">
            <div>
              <h3 className="text-sm font-bold">{edu.degree}</h3>
              <p className="text-sm italic text-[#444]">{edu.school}</p>
            </div>
            <p className="text-xs text-[#555]">{edu.period}</p>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Certifications">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Additional">
        <p className="text-sm">
          Languages: {personal.languages.join(', ')}. | Humanitarian & community development
          involvement. | References available upon request.
        </p>
      </ResumeSection>
    </article>
  )
}

function ResumeSection({ title, children }) {
  return (
    <section className="mt-5 border-t border-[#e5e7eb] pt-4 first:mt-6 first:border-t-0 first:pt-0">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-[#0f4c5c]">{title}</h2>
      {children}
    </section>
  )
}
