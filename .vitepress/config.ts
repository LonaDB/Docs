import { defineConfig } from 'vitepress'

const ogUrl = 'https://lona.js.org/'
const ogImage = `${ogUrl}og.png#1`
const title = 'LonaDB'
const description = 'JSON based Database written in JavaScript'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3B82F6' }],
    ['meta', { name: 'author', content: 'Keksi' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@keksiqc' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
  ],
  title: "LonaDB",
  description: "JSON based Database written in JavaScript",
  themeConfig: {
    logo: '/favicon.svg',
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
      { icon: 'discord', link: 'https://discord.gg/tBWVGQt8sP' },
      { icon: 'github', link: 'https://github.com/LonaDB/Server' }
    ]
  }
})
