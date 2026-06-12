/** @type {import('tailwindcss').Config} */

// ── Fluide Typografie-Skala ─────────────────────────────────────────────────
// Ein clamp()-Wert pro Text-Ebene: wächst kontinuierlich mit dem Viewport,
// monoton von Smartphone bis Desktop, keine Breakpoint-Lücken (z.B. xl).
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

const fontSize = {}
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
        'light-blue': '#2976d6',
        'dark-blue':  '#172b4d',
        // Browser-Mockup-Rahmen (Hero, CTA)
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
        'container-sm': '95%',   // sm  = Smartphone  (< 768 px)   → keine Prefix nötig (Basis-Klasse)
        'container-md': '90%',    // md  = Tablet      (≥ 768 px)     (48rem ?!)
        'container-lg': '80rem',  // lg  = Laptop      (≥ 1024 px)
        'container':    '95rem',  // 2xl = Desktop     (≥ 1536 px)
      },
      // Fluide Skala – Definition siehe fluidType oben
      fontSize,

      // ── Border Styling ──────────────────────────────────────────────────────
      // Zentrales Border-Radius Management für alle Geräte-Breakpoints
      borderRadius: {
        // Basis-Radius Definitionen
        'none':     '0',
        'sm':       '0.375rem',  // 6px  - Smartphone
        'md':       '0.5rem',    // 8px  - Tablet (standardmäßig für Buttons)
        'lg':       '0.625rem',  // 10px - Laptop/Desktop (standardmäßig für Cards, Basis)
        'xl':       '0.75rem',   // 12px
        '2xl':      '1rem',      // 16px
        '3xl':      '1.5rem',    // 24px
        'full':     '9999px',

        // Component-spezifische Vorsets
        'button':   '0.5rem',          // 8px
        'card':     '0.625rem',        // 10px
        'input':    '0.5rem',          // 8px
      },
    },
  },
  plugins: [],
}

