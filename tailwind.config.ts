import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9953A', light: '#E8B86D' },
        ember: '#B84420',
        cream: { DEFAULT: '#FAF5EC', warm: '#FFFDF8' },
        night: '#080C16',
        ink: '#1A1208',
      },
    },
  },
  plugins: [],
}
export default config
