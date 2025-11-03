/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-poppins)', 'Poppins', 'Inter'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0F172A',
        surface: '#1E293B',
        primary: '#6366F1',
        'primary-foreground': '#F8FAFC',
        secondary: '#06B6D4',
        highlight: '#F472B6',
        textMain: '#E5E7EB',
        textMuted: '#9CA3AF',
        border: '#1F2937',
        // Legacy support
        muted: {
          300: '#9CA3AF',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #6366F1, #06B6D4, #F472B6)',
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
        'gradient-purple-modern': 'linear-gradient(135deg, #9333EA 0%, #7C3AED 50%, #A855F7 100%)',
        'gradient-purple-deep': 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)',
        'gradient-purple-violet': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
        'gradient-pink': 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
        'gradient-purple-cyan': 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
        'gradient-cyan-pink': 'linear-gradient(135deg, #06B6D4 0%, #F472B6 100%)',
        'gradient-rainbow': 'linear-gradient(90deg, #6366F1, #06B6D4, #F472B6, #FBBF24)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
      boxShadow: {
        glow: '0 0 24px rgba(99,102,241,0.25)',
        glowViolet: '0 8px 30px rgba(124,58,237,0.14)',
        glowCyan: '0 8px 30px rgba(6,182,212,0.10)',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          },
        },
      },
    },
  },
  plugins: [],
}