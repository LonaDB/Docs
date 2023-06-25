import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LonaDB",
  description: "JSON based Database written in JavaScript",
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/LonaDB/Website/main/.vitepress/logo_lonadb.png',
    
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Examples', link: '/guide/examples' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Deploy', link: '/guide/deploy' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Examples', link: '/guide/examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LonaDB/Server' }
    ]
  }
})
