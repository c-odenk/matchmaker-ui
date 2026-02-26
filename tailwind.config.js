/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#2976d6',
        'blue':       '#172b4d',
        // 'blue':       '#0047AB',
        'deep-blue':  '#172b4d',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'container-h': '1.5rem', // 24px horizontal padding
      },
      maxWidth: {
        'container-sm': '100%',   // sm  = Smartphone  (< 768 px)   → keine Prefix nötig (Basis-Klasse)
        'container-md': '60vw',   // md  = Tablet      (≥ 768 px)     (48rem ?!)
        'container-lg': '80rem',  // lg  = Laptop      (≥ 1024 px)
        'container':    '95rem',  // 2xl = Desktop     (≥ 1536 px)
      },
      fontSize: {
        // ── Standard-Skala ──────────────────────────────────────────────────
        
        

        // ── H1 ──────────────────────────────────────────────────────────────
        
        'h1-sm':  ['2.25rem',  { lineHeight: '1.15', fontWeight: '700' }],  // Smartphone   
        'h1-md':  ['3rem',     { lineHeight: '1.1',  fontWeight: '700' }],  // Tablet  
        'h1-lg':  ['3rem',     { lineHeight: '1.05',  fontWeight: '700' }], // Laptop 
        'h1-2xl': ['3.5rem',  { lineHeight: '1.1', fontWeight: '700' }],  // Desktop  

        // ── H2 ──────────────────────────────────────────────────────────────
   
        'h2-sm':  ['1.875rem', { lineHeight: '1.2',  fontWeight: '700' }],  // Smartphone 
        'h2-md':  ['2.25rem',  { lineHeight: '1.15', fontWeight: '700' }],  // Tablet
        'h2-lg':  ['1.9rem',   { lineHeight: '1.1',  fontWeight: '700' }],  // Laptop
        'h2-2xl': ['2rem',  { lineHeight: '1.1',  fontWeight: '700' }],  // Desktop

        // ── H3 ──────────────────────────────────────────────────────────────
        
        'h3-sm':  ['1.25rem',  { lineHeight: '1.3',  fontWeight: '700' }],  // Smartphone 
        'h3-md':  ['1.5rem',   { lineHeight: '1.25', fontWeight: '700' }],  // Tablet
        'h3-lg':  ['1.2rem',   { lineHeight: '1.2',  fontWeight: '700' }],  // Laptop 
        'h3-2xl': ['1.4rem',   { lineHeight: '1.2',  fontWeight: '700' }],  // Desktop 

        // ── P Lead (Hero-Subline) ─────────────────────────────────────────────
        
        'p-lead-sm':   ['1.0625rem', { lineHeight: '1.65' }],   // Smartphone
        'p-lead-md':   ['1.125rem',  { lineHeight: '1.65' }],   // Tablet
        'p-lead-lg':   ['1.15rem',   { lineHeight: '1.4'  }],   // Laptop
        'p-lead-2xl':  ['1.15rem',  { lineHeight: '1.6'  }],    // Desktop 

        // ── P (Standard-Fließtext für Absätze) ──────────────────────────────
        
        'p-sm':   ['0.9375rem', { lineHeight: '1.6' }],   // Smartphone
        'p-md':   ['1rem',      { lineHeight: '1.6' }],   // Tablet
        'p-lg':   ['1rem',      { lineHeight: '1.7' }],   // Laptop
        'p-2xl':  ['1rem',  { lineHeight: '1.7' }],   // Desktop

        // ── P Small (List Items, Nebentext, Labels) ──────────────────────────
        
        'p-small-sm':  ['0.8125rem', { lineHeight: '1.55' }], // Smartphone
        'p-small-md':  ['0.875rem',  { lineHeight: '1.55' }], // Tablet
        'p-small-lg':  ['0.875rem',  { lineHeight: '1.6'  }], // Laptop
        'p-small-2xl': ['1rem', { lineHeight: '1.6'  }], // Desktop
      }
    },
  },
  plugins: [],
}

