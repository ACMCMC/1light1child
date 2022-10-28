import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/background.png')",
      },
      fontFamily: {
        display: ['Londrina Solid', 'sans-serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    }
  }
}