import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevfire Development",
    description: "This site outlines the projects for the Kevfire development team.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development', link: '/Development/development' },
      { text: 'Games', link: '/Games/games' },
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
            { text: 'Development', link: '/Development/development' },
            { text: 'Games', link: '/Games/games' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    },
    cleanUrls: true
})
