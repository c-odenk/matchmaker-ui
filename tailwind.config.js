/** @type {import('tailwindcss').Config} */

// ── Fluide Typografie-Skala ─────────────────────────────────────────────────
// Ein clamp()-Wert pro Text-Ebene: wächst kontinuierlich mit dem Viewport.
// Die Suffix-Varianten (-sm/-md/-lg/-2xl) bleiben als Aliase erhalten,
// damit bestehendes Markup (text-h1-sm md:text-h1-md …) weiter funktioniert.
const fluidType = {
  'h1':      ['clamp(2rem, 1.6rem + 1.1vw, 2.5rem)',          { lineHeight: '1.1',  fontWeight: '700' }],
  'h2':      ['clamp(1.875rem, 1.55rem + 0.9vw, 2.25rem)',    { lineHeight: '1.15', fontWeight: '700' }],
  'h3':      ['clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)',     { lineHeight: '1.25', fontWeight: '700' }],
  'p-lead':  ['clamp(1.0625rem, 1.03rem + 0.18vw, 1.125rem)', { lineHeight: '1.6'  }],
  'p':       ['clamp(0.9375rem, 0.92rem + 0.1vw, 1rem)',      { lineHeight: '1.65' }],
  'p-small': ['clamp(0.8125rem, 0.78rem + 0.18vw, 0.9375rem)',{ lineHeight: '1.55' }],
}

const fontSize = {
  // ── Landing-Headline-Skala (originalgetreue clamp-Werte der Landingpage) ──
  'hero':     ['clamp(1.75rem, 1.2rem + 1.7vw, 2.5rem)',   { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '800' }],
  'section':  ['clamp(1.45rem, 1.1rem + 1.2vw, 1.9rem)',   { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '800' }],
  'lead':     ['clamp(0.9rem, 0.86rem + 0.26vw, 1.04rem)', { lineHeight: '1.6' }],
  'legal-h1': ['clamp(1.8rem, 1.3rem + 1.5vw, 2.4rem)',    { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
}
for (const [name, def] of Object.entries(fluidType)) {
  fontSize[name] = def
  for (const bp of ['sm', 'md', 'lg', '2xl']) {
    fontSize[`${name}-${bp}`] = def
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── CI-Palette der Landingpage (zentral, aus den früheren CSS-Variablen) ──
        navy:    { DEFAULT: '#172b4d', 2: '#1e2d42', hover: '#0f1f3a' },
        blue:    { DEFAULT: '#2976d6', hover: '#2065bd', soft: '#eaf2fc' },
        green:   '#22c55e',
        ink:     '#0f172a',
        body:    '#475569',
        muted:   '#7c8aa0',
        line:    '#e7ebf1',
        surface: '#f6f8fc',
        // Aliase / Bestand (von Auth-Seiten & Legacy genutzt)
        'light-blue': '#2976d6',
        'dark-blue':  '#172b4d',
        'browser-frame':     '#1e2d42',
        'browser-frame-bar': '#1a2a3f',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'container-h': '1.5rem', // 24px horizontal padding
      },
      maxWidth: {
        'container-sm': '95%',
        'container-md': '90%',
        'container-lg': '80rem',
        'container':    '95rem',
        'wrap':         '77rem',   // .wrap der Landingpage
        'wrap-2xl':     '84rem',   // .wrap ab ≥1536px
      },
      fontSize,
      boxShadow: {
        'card-hover':  '0 14px 30px rgba(23,43,77,.07)',
        'badge':       '0 16px 34px rgba(8,15,30,.20)',
        'hero-photo':  '0 40px 90px rgba(0,0,0,.45)',
        'browser':     '0 30px 70px rgba(23,43,77,.18)',
        'price':       '0 8px 26px rgba(23,43,77,.06)',
        'price-feat':  '0 26px 54px rgba(23,43,77,.22)',
        'modal':       '0 40px 90px rgba(8,15,30,.45)',
        'pf-modal':    '0 12px 32px rgba(23,43,77,.08)',
        'mobile-nav':  '0 24px 40px rgba(23,43,77,.10)',
      },
      borderRadius: {
        'none':   '0',
        'sm':     '0.375rem',
        'md':     '0.5rem',
        'lg':     '0.625rem',
        'xl':     '0.75rem',
        '2xl':    '1rem',
        '3xl':    '1.5rem',
        'full':   '9999px',
        'button': '0.5rem',
        'card':   '0.625rem',
        'input':  '0.5rem',
      },
    },
  },
  plugins: [],
}
