import type { Article } from '../types'

type ArticleCardProps = {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const isImageOnly = article.layout === 'image-only'

  return (
    <article className={`article-card article-card--${article.variant ?? 'light'}`}>
      <img className="article-image" src={article.image} alt={article.title} />
      {!isImageOnly ? <div className="article-overlay" /> : null}
      {!isImageOnly ? (
        <div className="article-content">
          {article.badge ? <span className="article-badge">{article.badge}</span> : null}
          <h3>{article.title}</h3>
          <span className="article-date">{article.date}</span>
        </div>
      ) : null}
    </article>
  )
}
