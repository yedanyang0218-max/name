import type { Section } from '../types'
import { ArticleCard } from './ArticleCard'

type SectionBlockProps = {
  section: Section
}

export function SectionBlock({ section }: SectionBlockProps) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>{section.title}</h2>
        <button type="button" aria-label={`${section.title}更多`}>
          更多
        </button>
      </div>
      <div className="article-grid">
        {section.articles.map((article) => (
          <ArticleCard key={`${section.title}-${article.title}`} article={article} />
        ))}
      </div>
    </section>
  )
}
