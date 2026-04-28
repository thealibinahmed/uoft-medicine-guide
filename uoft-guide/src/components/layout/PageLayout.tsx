import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/post-acceptance', label: 'Post-Acceptance' },
  { to: '/housing', label: 'Housing' },
  { to: '/finances', label: 'Finances' },
  { to: '/handbook', label: 'Handbook' },
]

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--paper)' }}>
      {/* Nav */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: 'var(--paper)', borderColor: 'var(--hairline)' }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link
            to="/"
            className="font-display text-lg font-semibold"
            style={{ color: 'var(--uoft-blue)' }}
          >
            UofT Medicine
          </Link>
          <nav className="flex items-center gap-1 flex-wrap">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1.5 rounded text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.to ? 'var(--uoft-blue)' : 'var(--ink-soft)',
                  background: pathname === link.to ? 'rgba(0,42,92,0.07)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        className="border-t py-8 mt-16"
        style={{ borderColor: 'var(--hairline)' }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
            Written by upper-year UofT MD students. Not an official Faculty publication.
          </p>
          <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
            Updated for the 2T9 cohort
          </p>
        </div>
      </footer>
    </div>
  )
}
