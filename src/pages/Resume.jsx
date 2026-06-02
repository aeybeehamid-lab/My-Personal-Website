import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSiteContent } from '../hooks/useSiteContent'
import { useResumeReader } from '../context/ResumeReaderContext'
import ResumeDocument from '../components/resume/ResumeDocument'
import CvFullDocument from '../components/resume/CvFullDocument'

const TABS = [
  { id: 'resume', label: 'Resume' },
  { id: 'cv', label: 'Full CV' },
]

const FOLD_THRESHOLD = 20

const btnSm =
  'rounded-full px-2.5 py-1 text-xs font-medium transition-colors sm:px-3 sm:py-1.5 sm:text-sm'

export default function Resume() {
  const { content } = useSiteContent()
  const { resume } = content
  const { folded, setFolded } = useResumeReader()
  const [searchParams, setSearchParams] = useSearchParams()
  const [resumePdfReady, setResumePdfReady] = useState(false)
  const [cvPdfReady, setCvPdfReady] = useState(false)
  const [toolbarOpen, setToolbarOpen] = useState(true)
  const scrollRef = useRef(null)

  const activeTab = searchParams.get('doc') === 'cv' ? 'cv' : 'resume'
  const setActiveTab = (id) => setSearchParams({ doc: id })

  const baseName = content.personal.fullName.replace(/\s+/g, '-')
  const slimBar = folded || !toolbarOpen

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
    setToolbarOpen(true)
    scrollRef.current?.scrollTo(0, 0)
  }, [activeTab, setFolded])

  useEffect(() => {
    return () => setFolded(false)
  }, [setFolded])

  const handleScroll = () => {
    const y = scrollRef.current?.scrollTop ?? 0
    setFolded(y > FOLD_THRESHOLD)
  }

  const handlePrint = () => window.print()

  return (
    <div className="resume-page flex h-full min-h-0 flex-col bg-slate-400/30">
      <motion.div
        initial={false}
        animate={{ height: slimBar ? 'auto' : 'auto' }}
        className="resume-toolbar z-40 shrink-0 border-b border-[var(--color-border)] bg-[var(--color-panel)]"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-1.5 sm:px-4 sm:py-2">
          <nav className="flex shrink-0 gap-1.5" aria-label="CV and resume">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`${btnSm} ${
                  activeTab === tab.id
                    ? 'bg-cyan-400 text-[var(--color-ink)]'
                    : 'border border-[var(--color-border)] text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {slimBar ? (
            <button
              type="button"
              onClick={() => {
                setToolbarOpen(true)
                setFolded(false)
                scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`${btnSm} border border-cyan-400/40 text-cyan-300`}
            >
              Tools ↓
            </button>
          ) : (
            <div className="flex flex-wrap items-center justify-end gap-1.5">
              <Link to="/" className={`${btnSm} border border-[var(--color-border)] text-slate-300`}>
                Home
              </Link>
              {resumePdfReady && (
                <a
                  href={resume.pdfPath}
                  download={`${baseName}-Resume.pdf`}
                  className={`${btnSm} ${activeTab === 'resume' ? 'bg-cyan-400/90 text-[var(--color-ink)]' : 'border border-[var(--color-border)] text-slate-300'}`}
                >
                  PDF
                </a>
              )}
              {cvPdfReady && (
                <a
                  href={resume.fullCvPdfPath}
                  download={`${baseName}-CV.pdf`}
                  className={`${btnSm} ${activeTab === 'cv' ? 'bg-cyan-400/90 text-[var(--color-ink)]' : 'border border-[var(--color-border)] text-slate-300'}`}
                >
                  CV PDF
                </a>
              )}
              <button
                type="button"
                onClick={handlePrint}
                className={`${btnSm} border border-[var(--color-border)] text-slate-300`}
              >
                Print
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="resume-print-area min-h-0 flex-1 overflow-y-auto px-1 py-2 sm:px-3 sm:py-3"
      >
        {activeTab === 'cv' ? <CvFullDocument /> : <ResumeDocument />}
      </div>
    </div>
  )
}
