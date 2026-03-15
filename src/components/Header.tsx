import { brand, headerItems } from '../data'

export function Header() {
  return (
    <header className="site-header">
      <div className="brand-lockup">
        <img className="brand-mark" src={brand.logo} alt="" />
        <div className="brand-text">
          <span className="brand-name">{brand.name}</span>
          <span className="brand-subtitle">{brand.subtitle}</span>
        </div>
      </div>

      <nav className="top-nav" aria-label="主导航">
        {headerItems.map((item) => (
          <a key={item} href="/" onClick={(event) => event.preventDefault()}>
            {item}
          </a>
        ))}
      </nav>

      <label className="search-shell" aria-label="搜索">
        <input type="search" placeholder="搜索" />
      </label>
    </header>
  )
}
