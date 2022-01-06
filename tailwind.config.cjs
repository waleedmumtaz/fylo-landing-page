const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'dark-blue': 'hsl(243, 87%, 12%)',
            'desaturated-blue': 'hsl(238, 22%, 44%)',
          },
          accent: {
            'bright-blue': 'hsl(224, 93%, 58%)',
            'moderate-cyan': 'hsl(170, 45%, 43%)',
          },
          neutral: {
            'light-grayish-blue': 'hsl(240, 75%, 98%)',
            'light-gray': 'hsl(0, 0%, 75%)',
          },
        },
      },
      backgroundImage: {
        'curve-desktop': 'url(/assets/bg-curve-desktop.svg)',
        'curve-mobile': 'url(/assets/bg-curve-mobile.svg)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
