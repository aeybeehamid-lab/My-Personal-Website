import { useSiteContent } from '../../hooks/useSiteContent'

export default function CvFullDocument() {
  const { content } = useSiteContent()
  const { personal, experience, education, certifications, projects, skills, practicalExperience } =
    content

  const profile = [
    ...content.about.paragraphs,
    'Committed to engineering excellence and community impact through humanitarian initiatives.',
  ].join(' ')

  const researchProject = projects.find((p) => p.slug === 'energy-harvesting')

  return (
    <article className="resume-document mx-auto max-w-[210mm] bg-white px-8 py-10 text-[#1a1a1a] sm:px-12 sm:py-12">
      <header className="border-b-2 border-[#0f4c5c] pb-4">
        <h1 className="text-3xl font-bold text-[#0a1628]">{personal.fullName}</h1>
        <p className="mt-1 text-sm font-semibold text-[#0f4c5c]">Curriculum Vitae</p>
        <p className="mt-2 text-sm text-[#333]">
          {personal.location} · {personal.email} · +234 {personal.phone?.replace(/^0/, '')}
        </p>
      </header>

      <CvSection title="Profile">
        <p className="text-justify text-sm leading-relaxed">{profile}</p>
      </CvSection>

      <CvSection title="Education">
        {education.map((edu) => (
          <CvEntry key={edu.degree} title={edu.degree} org={edu.school} date={edu.period} />
        ))}
      </CvSection>

      <CvSection title="Professional Experience">
        {experience.map((job) => (
          <div key={`${job.role}-${job.period}`} className="mb-4">
            <CvEntry title={job.role} org={job.company} date={job.period} />
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </CvSection>

      <CvSection title="Technical Projects">
        {projects.map((p) => (
          <div key={p.slug} className="mb-3">
            <h3 className="text-sm font-bold">{p.title}</h3>
            <p className="text-sm text-[#444]">{p.description}</p>
            {p.highlights?.length > 0 && (
              <ul className="mt-1 list-disc pl-5 text-sm">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </CvSection>

      {researchProject && (
        <CvSection title="Research">
          <h3 className="text-sm font-bold">{researchProject.title}</h3>
          <p className="mt-1 text-sm">{researchProject.description}</p>
        </CvSection>
      )}

      <CvSection title="Technical Skills">
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold uppercase text-[#0f4c5c]">{group.category}</h3>
              <ul className="mt-1 list-disc pl-5 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection title="Practical & Field Experience">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {practicalExperience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Certifications">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Languages">
        <p className="text-sm">{personal.languages.join(', ')} (fluent)</p>
      </CvSection>

      <CvSection title="References">
        <p className="text-sm">Available upon request.</p>
      </CvSection>
    </article>
  )
}

function CvSection({ title, children }) {
  return (
    <section className="mt-5 border-t border-[#e5e7eb] pt-4 first:mt-6">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-[#0f4c5c]">{title}</h2>
      {children}
    </section>
  )
}

function CvEntry({ title, org, date }) {
  return (
    <div className="flex flex-wrap justify-between gap-2">
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        {org && <p className="text-sm italic text-[#444]">{org}</p>}
      </div>
      {date && <p className="text-xs text-[#555]">{date}</p>}
    </div>
  )
}
