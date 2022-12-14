const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: [
                'Lato',
                ...defaultTheme.fontFamily.sans,
            ],
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
