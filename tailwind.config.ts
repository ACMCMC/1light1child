import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/background.png')",
      },
      fontFamily: {
        display: ['Chakra Petch', 'sans-serif'],
        sans: ['Lexend Deca', 'Helvetica', 'Arial', 'sans-serif'],
      },
    }
  }
}