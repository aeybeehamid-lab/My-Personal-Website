import { coverLetters } from '../../content/coverLetters'
import PlaceholderText from './PlaceholderText'
import { useSiteContent } from '../../hooks/useSiteContent'

export default function CoverLetterDocument({ variant = 'engineering' }) {
  const { content } = useSiteContent()
  const { personal } = content
  const letter = coverLetters[variant] ?? coverLetters.engineering

  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="resume-document mx-auto max-w-[210mm] bg-white px-8 py-10 text-[#1a1a1a] sm:px-12 sm:py-12">
      <header className="border-b border-[#d0d7de] pb-4">
        <h1 className="text-2xl font-bold text-[#0a1628]">{personal.fullName}</h1>
        <p className="mt-1 text-sm text-[#333]">
          {personal.location} · {personal.email} · +234{' '}
          {personal.phone?.replace(/^0/, '') ?? '810 997 9402'}
        </p>
      </header>

      <div className="mt-6 space-y-1 text-sm">
        <p>{date}</p>
        <p className="font-semibold">Hiring Manager</p>
        <PlaceholderText text="[Company Name]" />
        <PlaceholderText text="[Company Address — City, Country]" />
        <p className="pt-2 font-semibold">
          Re: Application for{' '}
          <mark className="rounded bg-amber-100 px-1 text-amber-950">[Job Title — {letter.roleHint}]</mark>
        </p>
      </div>

      <p className="mt-6 text-sm">Dear Hiring Manager,</p>

      <div className="mt-4 space-y-4">
        {letter.paragraphs.map((para) => (
          <PlaceholderText key={para.slice(0, 40)} text={para} className="text-justify text-sm leading-relaxed" />
        ))}
      </div>

      <div className="mt-8 text-sm">
        <p>Sincerely,</p>
        <p className="mt-2 font-bold">{personal.fullName}</p>
      </div>

      <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-950 print:hidden">
        Yellow highlights are placeholders — edit in{' '}
        <code className="font-mono">src/content/coverLetters.js</code> or replace before you print.
      </p>
    </article>
  )
}
