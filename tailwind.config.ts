import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
    theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/background.png')",
      }
    }
  }
}