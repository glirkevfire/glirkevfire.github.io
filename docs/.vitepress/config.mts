import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevfire Development",
  description: "A site for testing and learning.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development', link: '/development' },
      { text: 'Games', link: '/games' },
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
            { text: 'Development', link: '/development' },
            { text: 'Games', link: '/games' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    },
    cleanUrls: true
})
