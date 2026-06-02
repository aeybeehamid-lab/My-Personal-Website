import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ResumeReaderProvider } from '../../context/ResumeReaderContext'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  const isResumePage = location.pathname === '/resume'

  return (
    <ResumeReaderProvider>
    <div
      className={`flex flex-col ${isResumePage ? 'resume-layout h-screen max-h-screen overflow-hidden' : 'min-h-screen'}`}
    >
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
    </ResumeReaderProvider>
  )
}
