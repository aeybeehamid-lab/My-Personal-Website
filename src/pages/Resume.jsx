import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSiteContent } from '../hooks/useSiteContent'
import FadeIn from '../components/motion/FadeIn'

export default function Resume() {
  const { content } = useSiteContent()
  const { personal, resume } = content
  const iframeRef = useRef(null)
  const [pdfReady, setPdfReady] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const htmlSrc = `${resume.htmlPath}?embed=1`
  const pdfPath = resume.pdfPath
  const downloadName = `${personal.fullName.replace(/\s+/g, '-')}-Resume.pdf`

  useEffect(() => {
    fetch(pdfPath, { method: 'HEAD' })
      .then((res) => setPdfReady(res.ok))
      .catch(() => setPdfReady(false))
  }, [pdfPath])

  const handlePrintSave = () => {
    try {
      iframeRef.current?.contentWindow?.print()
    } catch {
      window.open(resume.htmlPath, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-[var(--color-ink)]">
      <FadeIn className="sticky top-[65px] z-40 border-b border-[var(--color-border)] bg-[var(--color-panel)]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400/90">
              Resume
            </p>
            <h1 className="text-lg font-semibold text-white">{personal.fullName}</h1>
            <p className="text-sm text-[var(--color-muted)]">{personal.title}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              to="/"
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300 hover:border-cyan-400/40 hover:text-white"
            >
              ← Back
            </Link>

            {pdfReady ? (
              <motion.a
                href={pdfPath}
                download={downloadName}
                className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-cyan-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {resume.downloadLabel}
              </motion.a>
            ) : (
              <motion.button
                type="button"
                onClick={handlePrintSave}
                className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-cyan-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {resume.printLabel}
              </motion.button>
            )}

            <motion.button
              type="button"
              onClick={handlePrintSave}
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-200 hover:border-cyan-400/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Print
            </motion.button>

            <a
              href={resume.htmlPath}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-200 hover:border-cyan-400/40"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>

        {!pdfReady && (
          <p className="mx-auto max-w-6xl px-4 pb-3 text-xs text-[var(--color-muted)] sm:px-6">
            No PDF file yet — use <strong className="text-slate-300">Save as PDF</strong> or{' '}
            <strong className="text-slate-300">Print</strong>, then choose “Save as PDF”. Add{' '}
            <code className="font-mono text-cyan-300/90">public/cv/resume.pdf</code> to enable
            one-click download.
          </p>
        )}
      </FadeIn>

      <div className="relative flex-1 bg-slate-200">
        {!iframeLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-panel)]">
            <p className="font-mono text-sm text-[var(--color-muted)]">Loading resume…</p>
          </div>
        )}
        <iframe
          ref={iframeRef}
          title={`${personal.fullName} — Resume`}
          src={htmlSrc}
          onLoad={() => setIframeLoaded(true)}
          className="h-[calc(100vh-11rem)] w-full border-0 bg-white sm:h-[calc(100vh-10rem)]"
        />
      </div>
    </div>
  )
}
