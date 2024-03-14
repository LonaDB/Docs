import { defineConfig } from 'vitepress'

const ogUrl = 'https://docs.lona-development.org/'
const ogImage = `${ogUrl}og.png#1`
const title = 'Lona Development'
const description = 'JSON based Database written in PHP'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#86EFAC' }],
    ['meta', { name: 'author', content: 'Lona Devs' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@lona_devs' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
  ],
  title: "Lona Development",
  description: "JSON based database and written in PHP",
  themeConfig: {
    logo: '/favicon.svg',
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: 'https://lona-development.org/' },
      { text: 'Guide', link: '/guide/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/install' },
          { text: 'Webinterface', link: '/guide/webinterface' },
          { text: 'Clients', link: '/guide/clients' }
        ]
      },
      {
        text: 'Clients',
        items: [
          { text: 'PHP', link: '/guide/php' },
          { text: 'JavaScript', link: '/guide/javascript' },
          { text: 'Python', link: '/guide/python' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/tBWVGQt8sP' },
      { icon: 'github', link: 'https://github.com/LonaDB' }
    ]
  }
})
