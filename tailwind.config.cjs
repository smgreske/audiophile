/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
	theme: {
    fontSize: {
      '13': '.8125rem',
      '14': '.875rem',
      '15': '.9375rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '28': '1.75rem',
      '32': '2rem',
      '36': '2.25rem',
      '40': '2.5rem',
      '48': '3rem',
      '56': '3.5rem',
      '64': '4rem',
      '72': '4.5rem',
    },
		extend: {
      borderWidth: {
        1: '1px'
      },
      colors: {
        clr: {
          default:'var(--clrDefault)',
          bg:'var(--clrBackground)',
          over: 'rgb(var(--clrOverlay) / .3)',
          hover: 'var(--clrHover)',
          1:'var(--color-1)',
          2:'var(--color-2)',
          3:'var(--color-3)',
          4:'var(--color-4)',
          5:'var(--color-5)',
          n1:'var(--neutral-1)',
          n2:'var(--neutral-2)',
          n3:'var(--neutral-3)',
          n4:'var(--neutral-4)',
          n5:'var(--neutral-5)',
          x1:'var(--extra-1)',
          x2:'var(--extra-2)',
          x3:'var(--extra-3)',
          x4:'var(--extra-4)',
          x5:'var(--extra-5)',
        }
      },
      fontFamily: {
        'primary': ['var(--fontPrimary)'],
        'secondary': ['var(--fontSecondary)'],
      },
      
      screens: {
        smMax: {'max':'600px'},
        mdMax: {'max':'900px'},
        md: '600px',
        lg: '900px',
      },
      spacing: {
        mobile:'var(--marginMobile)',
        tablet:'var(--marginTablet)',
        desktop:'var(--marginDesktop)',
      },
      maxWidth: {
        maxx:'var(--maxWidth)'
      }
    },
	},
}
