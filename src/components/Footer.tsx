import { brand, footerColumns } from '../data'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={brand.logo} alt="" />
        <strong>
          {brand.name} {brand.subtitle}
        </strong>
        <p>{brand.description}</p>
      </div>

      <div className="footer-columns">
        {footerColumns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a key={link} href="/" onClick={(event) => event.preventDefault()}>
                {link}
              </a>
            ))}
          </section>
        ))}
      </div>

      <div className="footer-meta">
        <span>© 2026 Moonvy, Class.</span>
        <span>京ICP备20010701号-1</span>
      </div>
    </footer>
  )
}
