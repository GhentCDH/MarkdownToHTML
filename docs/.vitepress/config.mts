import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Markdown to HTML",
  description: "A demo vitepress site",

  // To work correctly on github pages, set the base directory to the repository name
  base: "/MarkdownToHTML/" ,

  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Readme', link: '/README' }
    ],

    // Enable search
    search: {
      provider: 'local'
    },

    // Populate the sidebar
    sidebar: [
      {
        text: 'Content pages',
        items: [
          { text: 'Readme', link: '/README' },
          { text: 'GhentCDH', link: '/GhentCDH' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/GhentCDH/MarkdownToHTML' }
    ]
  }
})
