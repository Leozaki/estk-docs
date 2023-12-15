import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/',


  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'eSTK.me Group'
    },
    '/en/': {
      lang: 'en-US',
      title: 'eSTK.me English'
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    // navbar
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '小知识',
        link: '/tutorial/',
      },
      {
        text: 'eSTK 智能卡',
        link: '/estk.me-sc/',
      },
      {
        text: 'LPAc',
        link: '/lpac/',
      },
      {
        text: '帮助',
        link: '/troubleshooting/',
      },
    ],
    sidebar: {
      '/tutorial/': [
        {
          text: '小知识',
          children: ['/tutorial/README.md'],
        },
      ],
      '/estk.me-sc/': [
        {
          text: 'eSTK 智能卡',
          children: ['/estk.me-sc/README.md', '/estk.me-sc/quickstart/oobe.md', '/estk.me-sc/quickstart/activate.md'],
        },
        {
          text: 'eSTK 菜单',
          children: ['/estk.me-sc/stk/Profiles.md', '/estk.me-sc/stk/Settings.md', '/estk.me-sc/stk/Tools.md', '/estk.me-sc/stk/About.md'],
        },
        {
          text: 'eSTK 其他',
          children: ['/estk.me-sc/others/stk.md', '/estk.me-sc/others/faq.md', '/estk.me-sc/others/update.md'],
        },
      ],
      '/lpac/': [
        {
          text: 'LPAc',
          children: ['/lpac/README.md'],
        },
      ],
      '/troubleshooting/': [
        {
          text: '帮助',
          children: ['/troubleshooting/README.md', '/troubleshooting/document.md'],
        },
      ],
    },
  })
})