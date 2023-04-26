/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        hop: {
          '10%, 50%, 90%': { transform: 'translateY(0) rotate(0)' },
          '25%': { transform: 'translateY(-30%) rotate(5deg)'},
          '75%': { transform: 'translateY(-30%) rotate(-5deg)'},
        },
        heartbeat: {
          '0%'  : { transform: 'scale(1)' },
          '14%' : { transform: 'scale(1.1)' },
          '28%' : { transform: 'scale(1)' },
          '42%' : { transform: 'scale(1.1)' },
          '70%' : { transform: 'scale(1)' }
        },
        tada: {
          '0%'  : { transform: 'scale(1)' },
          '10%, 20%' : { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%' : { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%' : { transform: 'scale(1.1) rotate(-3deg)' },
          '100%%' : { transform: 'scale(1) rotate(0)' }
        },
        sideshow:{
            "0%" : {right:"-30%"},
            "40%" : {right:"10%"},
            "80%" : {right:"10%"},
            "100%" : {right:"-30%"},
        },
      },
      animation:{
        sideshow: "sideshow 3000ms ease-in-out"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
