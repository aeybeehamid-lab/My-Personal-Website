import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSiteContent } from '../hooks/useSiteContent'
import ResumeDocument from '../components/resume/ResumeDocument'
import CvFullDocument from '../components/resume/CvFullDocument'
import FadeIn from '../components/motion/FadeIn'

const TABS = [
  { id: 'resume', label: 'Resume' },
  { id: 'cv', label: 'Full CV' },
]

export default function Resume() {
  const { content } = useSiteContent()
  const { personal, resume } = content
  const [searchParams, setSearchParams] = useSearchParams()
  const [resumePdfReady, setResumePdfReady] = useState(false)
  const [cvPdfReady, setCvPdfReady] = useState(false)

  const activeTab = searchParams.get('doc') === 'cv' ? 'cv' : 'resume'
  const setActiveTab = (id) => setSearchParams({ doc: id })

  const baseName = personal.fullName.replace(/\s+/g, '-')
  const activeLabel = TABS.find((t) => t.id === activeTab)?.label ?? 'Document'

  useEffect(() => {
    fetch(resume.pdfPath, { method: 'HEAD' })
      .then((res) => setResumePdfReady(res.ok))
      .catch(() => setResumePdfReady(false))
  }, [resume.pdfPath])

  useEffect(() => {
    fetch(resume.fullCvPdfPath, { method: 'HEAD' })
      .then((res) => setCvPdfReady(res.ok))
      .catch(() => setCvPdfReady(false))
  }, [resume.fullCvPdfPath])

  const handlePrint = () => window.print()

  return (
    <div className="resume-page flex min-h-screen flex-col bg-[var(--color-ink)]">
      <FadeIn className="resume-toolbar sticky top-[65px] z-40 border-b border-[var(--color-border)] bg-[var(--color-panel)]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400/90">
                {resume.pageTitle}
              </p>
              <h1 className="text-lg font-semibold text-white">{personal.fullName}</h1>
              <p className="text-sm text-[var(--color-muted)]">
                Viewing: <span className="text-cyan-300/90">{activeLabel}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                to="/"
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300 hover:border-cyan-400/40 hover:text-white"
              >
                ← Back
              </Link>

              {resumePdfReady && (
                <motion.a
                  href={resume.pdfPath}
                  download={`${baseName}-Resume.pdf`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'resume'
                      ? 'bg-cyan-400 text-[var(--color-ink)] hover:bg-cyan-300'
                      : 'border border-[var(--color-border)] text-slate-200 hover:border-cyan-400/40'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {resume.resumeDownloadLabel}
                </motion.a>
              )}

              {cvPdfReady && (
                <motion.a
                  href={resume.fullCvPdfPath}
                  download={`${baseName}-CV.pdf`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'cv'
                      ? 'bg-cyan-400 text-[var(--color-ink)] hover:bg-cyan-300'
                      : 'border border-[var(--color-border)] text-slate-200 hover:border-cyan-400/40'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {resume.fullCvDownloadLabel}
                </motion.a>
              )}

              <motion.button
                type="button"
                onClick={handlePrint}
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-200 hover:border-cyan-400/40"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {resume.printLabel}
              </motion.button>
            </div>
          </div>

          <nav className="mt-4 flex gap-2" aria-label="CV and resume">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-cyan-400 text-[var(--color-ink)]'
                    : 'border border-[var(--color-border)] text-slate-400 hover:border-cyan-400/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {!resumePdfReady && !cvPdfReady && (
            <p className="mt-3 text-xs text-[var(--color-muted)]">
              To enable downloads: open each tab → <strong className="text-slate-300">Save as PDF</strong>{' '}
              → save as <code className="font-mono text-cyan-300/90">public/cv/resume.pdf</code> and{' '}
              <code className="font-mono text-cyan-300/90">public/cv/cv-full.pdf</code>, then push to
              GitHub.
            </p>
          )}
        </div>
      </FadeIn>

      <div className="resume-print-area flex-1 overflow-y-auto bg-slate-300/40 py-6 sm:py-10">
        {activeTab === 'cv' ? <CvFullDocument /> : <ResumeDocument />}
      </div>
    </div>
  )
}
