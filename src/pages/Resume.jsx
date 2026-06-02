import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSiteContent } from '../hooks/useSiteContent'
import { useResumeReader } from '../context/ResumeReaderContext'
import ResumeDocument from '../components/resume/ResumeDocument'
import CvFullDocument from '../components/resume/CvFullDocument'

const TABS = [
  { id: 'resume', label: 'Resume' },
  { id: 'cv', label: 'Full CV' },
]

const FOLD_THRESHOLD = 56

export default function Resume() {
  const { content } = useSiteContent()
  const { personal, resume } = content
  const { folded, setFolded } = useResumeReader()
  const [searchParams, setSearchParams] = useSearchParams()
  const [resumePdfReady, setResumePdfReady] = useState(false)
  const [cvPdfReady, setCvPdfReady] = useState(false)
  const scrollRef = useRef(null)

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

  useEffect(() => {
    setFolded(false)
    scrollRef.current?.scrollTo(0, 0)
  }, [activeTab, setFolded])

  useEffect(() => {
    return () => setFolded(false)
  }, [setFolded])

  const handleScroll = () => {
    const y = scrollRef.current?.scrollTop ?? 0
    setFolded(y > FOLD_THRESHOLD)
  }

  const expandChrome = () => {
    setFolded(false)
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrint = () => window.print()

  return (
    <div className="resume-page flex h-full min-h-0 flex-col bg-[var(--color-ink)]">
      <motion.div
        layout
        initial={false}
        animate={{ boxShadow: folded ? '0 4px 24px rgba(0,0,0,0.35)' : 'none' }}
        className="resume-toolbar sticky top-0 z-40 shrink-0 border-b border-[var(--color-border)] bg-[var(--color-panel)]/95 backdrop-blur-md"
      >
        <AnimatePresence initial={false} mode="wait">
          {folded ? (
            <motion.div
              key="compact"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6"
            >
              <nav className="flex gap-2" aria-label="CV and resume">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
                      activeTab === tab.id
                        ? 'bg-cyan-400 text-[var(--color-ink)]'
                        : 'border border-[var(--color-border)] text-slate-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
              <button
                type="button"
                onClick={expandChrome}
                className="shrink-0 rounded-full border border-cyan-400/40 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-400/10 sm:text-sm"
              >
                Show menu ↑
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-6xl px-4 py-4 sm:px-6"
            >
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
                  Scroll down to focus on reading — headers fold away. Tip: use{' '}
                  <strong className="text-slate-300">Save as PDF</strong> then add files to{' '}
                  <code className="font-mono text-cyan-300/90">public/cv/</code>.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="resume-print-area min-h-0 flex-1 overflow-y-auto bg-slate-300/40 py-6 sm:py-10"
      >
        {activeTab === 'cv' ? <CvFullDocument /> : <ResumeDocument />}
      </div>
    </div>
  )
}
