export type Article = {
  title: string
  date: string
  image: string
  variant?: 'light' | 'dark'
  badge?: string
  layout?: 'image-only' | 'overlay'
}

export type Section = {
  title: string
  articles: Article[]
}
