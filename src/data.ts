import type { Section } from './types'

const assets = {
  logo: 'https://www.figma.com/api/mcp/asset/45adc6a7-5d2f-4b86-b221-5f1dee19c689',
  design01: 'https://www.figma.com/api/mcp/asset/9d07cb0d-7c75-4316-bbb1-29ae6731e9ed',
  design02: 'https://www.figma.com/api/mcp/asset/7198f00b-ea70-4e65-8e52-36052dee6aff',
  design03: 'https://www.figma.com/api/mcp/asset/ab557236-8928-4faa-82b6-5b6f871f793b',
  design04: 'https://www.figma.com/api/mcp/asset/40394c8f-ec2c-45a2-a422-a1ea4fa3c2d7',
  design05: 'https://www.figma.com/api/mcp/asset/4da644d9-c380-418a-b0a2-fc8c664eef0a',
  design06: 'https://www.figma.com/api/mcp/asset/f810df93-dee2-42ee-8edd-5bf03ac3d459',
  design07: 'https://www.figma.com/api/mcp/asset/e2d68334-4ddf-4ccc-9b2f-8d018fe483c1',
  dev01: 'https://www.figma.com/api/mcp/asset/fbd5b6f7-4bad-45f9-a8ef-ae7ff9566c17',
  dev02: 'https://www.figma.com/api/mcp/asset/d8ad551b-81d1-4c36-a7b5-446b7baee69c',
  dev03: 'https://www.figma.com/api/mcp/asset/76a9b1af-28e8-43a0-9495-d17c157d9968',
  dev07: 'https://www.figma.com/api/mcp/asset/1911d70b-5a82-4d0f-ad72-68a8afbc5534',
  dev08: 'https://www.figma.com/api/mcp/asset/e3e30822-06d0-4605-91c0-68068307f71c',
  weekly01: 'https://www.figma.com/api/mcp/asset/d261cfbe-9c4b-4f6a-93e5-da1bd893a8e7',
  weekly02: 'https://www.figma.com/api/mcp/asset/ced40cd7-648a-4b50-bb46-8ce64e55299e',
  weekly03: 'https://www.figma.com/api/mcp/asset/183804b1-c259-43d4-af83-a22a7f012cc2',
  latest01: 'https://www.figma.com/api/mcp/asset/ecc51715-6529-4aa5-83fe-2191318838fa',
  latest02: 'https://www.figma.com/api/mcp/asset/98b57d87-e698-42d4-a02b-1d02b5c1081c',
  latest03: 'https://www.figma.com/api/mcp/asset/5abdafff-4dda-4289-9ed0-d79127aa98df',
  latest04: 'https://www.figma.com/api/mcp/asset/bbc6e1fa-a554-442f-b67e-3929170154bc',
  latest05: 'https://www.figma.com/api/mcp/asset/8ebdacad-5505-403a-88fa-cfa8189e1783',
  latest06: 'https://www.figma.com/api/mcp/asset/a3004ce3-91ef-4775-8d39-e9cca3783db8',
  docs01: 'https://www.figma.com/api/mcp/asset/3d10df14-d15e-44b2-99b5-dd778b75128d',
  docs02: 'https://www.figma.com/api/mcp/asset/bb4dd33c-d504-4404-9e06-bf3080f2a712',
  docs03: 'https://www.figma.com/api/mcp/asset/6261614f-e467-47cc-8c5f-0703ed4195d6',
}

export const headerItems = ['首页', '周刊', '帮助', '专题', '标签']

export const sections: Section[] = [
  {
    title: '设计',
    articles: [
      { title: '为什么选择 Moonvy 月维？', date: '2026/01/08', image: assets.design01, variant: 'light', layout: 'image-only' },
      { title: '月维新增设计图字体下载功能', date: '2026/01/04', image: assets.design02, variant: 'light' },
      { title: 'Figma 年度报告', date: '2025/12/31', image: assets.design03, variant: 'light' },
      { title: 'AI Prompt', date: '2025/11/30', image: assets.design04, variant: 'light', badge: 'AI Prompt' },
      { title: '2025 年主流设计交付工具全面对比', date: '2025/10/16', image: assets.design05, variant: 'dark' },
      { title: 'AI 工作流生成式创作管线', date: '2025/09/19', image: assets.design06, variant: 'dark' },
      { title: 'Figma 设计系统深度实践', date: '2025/09/03', image: assets.design07, variant: 'dark', layout: 'image-only' },
    ],
  },
  {
    title: '开发',
    articles: [
      { title: '开发体验优化探索，从 Vite 包拆分开始', date: '2024/09/04', image: assets.dev01, variant: 'light' },
      { title: 'JPEG XL AVIF WebP 2 次世代图片格式评测', date: '2024/08/28', image: assets.dev02, variant: 'light' },
      { title: '旧项目升级到现代构建工具的观察', date: '2024/08/27', image: assets.dev03, variant: 'light' },
      { title: '都 2022 年了，SVG 的未来在哪里', date: '2022/01/10', image: assets.dev07, variant: 'dark' },
      { title: '在不同设备上显示不一样内容的 PNG 图片', date: '2021/12/15', image: assets.dev08, variant: 'dark' },
    ],
  },
  {
    title: '设计素材周刊',
    articles: [
      { title: '设计素材周刊 2024/06', date: '2024/06/28', image: assets.weekly01, variant: 'light', layout: 'image-only' },
      { title: '设计素材周刊 2024/03', date: '2024/03/16', image: assets.weekly02, variant: 'light', layout: 'image-only' },
      { title: '设计素材周刊 2024/02', date: '2024/02/08', image: assets.weekly03, variant: 'light', layout: 'image-only' },
    ],
  },
  {
    title: '最新文章',
    articles: [
      { title: '月维功能更新', date: '2025/01/02', image: assets.latest01, variant: 'light', layout: 'image-only' },
      { title: 'FigmaEX 更新日志', date: '2024/12/10', image: assets.latest02, variant: 'dark', layout: 'image-only' },
      { title: '12.12 月维年度特辑', date: '2024/12/12', image: assets.latest03, variant: 'light', layout: 'image-only' },
      { title: '2024.10 月维更新', date: '2024/10/18', image: assets.latest04, variant: 'light', layout: 'image-only' },
      { title: '2024.8 月维更新', date: '2024/08/27', image: assets.latest05, variant: 'light', layout: 'image-only' },
      { title: '2024.2 月维更新', date: '2024/02/03', image: assets.latest06, variant: 'light', layout: 'image-only' },
    ],
  },
  {
    title: '帮助文档',
    articles: [
      { title: 'FigmaEX 功能介绍', date: '文档', image: assets.docs01, variant: 'dark', layout: 'image-only' },
      { title: '月维交流群常见问题', date: '文档', image: assets.docs02, variant: 'light', layout: 'image-only' },
      { title: 'Mac 版 FigmaEX 安装与使用', date: '文档', image: assets.docs03, variant: 'light', layout: 'image-only' },
    ],
  },
]

export const footerColumns = [
  {
    title: '产品',
    links: ['Moonvy · 月维', 'FigmaEX'],
  },
  {
    title: '链接',
    links: ['X', 'Github', '微信公众号', '知乎专栏', '哔哩哔哩', 'RSS'],
  },
  {
    title: '群组',
    links: ['微信群', 'QQ 群'],
  },
]

export const brand = {
  name: 'Moonvy',
  subtitle: '月球背面',
  description: '月维的创造者们对「设计」和「开发」的思考与讨论',
  logo: assets.logo,
}
