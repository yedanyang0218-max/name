import { useState } from 'react'

type EntryType = {
  title: string
  desc: string
  cta: string
  note: string
  hero?: boolean
  steps: { n: string; title: string; time: string; detail: string }[]
}

const navItems = ['首页', '入驻材料与费用', '热招行业', '常见问题', '电商学习中心', '入驻即时零售', '更多']
const heroTabs = ['0元入驻', '新商三大利好', '限时老带新', '商品卡免佣', '宝藏小店热招']

const entryTypes: EntryType[] = [
  {
    title: '个体工商户',
    desc: '适合营业执照类型为“个体工商户”',
    cta: '立即入驻',
    note: '入驻成功限时享新商专属最高800元流量券扶持',
    steps: [
      { n: '01', title: '提交材料', time: '约15分钟', detail: '上传营业执照、经营者身份证件等相关资质材料' },
      { n: '02', title: '平台审核', time: '约1-3个工作日', detail: '平台进行资质审核' },
    ],
  },
  {
    title: '企业/公司',
    desc: '适合营业执照类型为“公司/企业/个人独资企业”等',
    cta: '立即入驻',
    note: '入驻成功限时享新商专属最高800元流量券扶持',
    hero: true,
    steps: [
      { n: '01', title: '提交材料', time: '约30分钟', detail: '上传营业执照、法定代表人身份证件等相关资质材料' },
      { n: '02', title: '平台审核', time: '约1-3个工作日', detail: '平台进行资质审核' },
    ],
  },
  {
    title: '个人身份',
    desc: '无营业执照，个人身份开店',
    cta: '立即入驻',
    note: '年累计销售额不超过10万元，部分类目不支持',
    steps: [
      { n: '01', title: '提交材料', time: '约10分钟', detail: '上传身份证件后人脸验证，填写店铺信息' },
      { n: '02', title: '平台审核', time: '约1-3个工作日', detail: '平台进行资质审核，审核通过后即可成功开店' },
    ],
  },
]

function App() {
  const [heroIndex, setHeroIndex] = useState(0)

  return (
    <div className="fxg-page">
      <section className="hero-wrap">
        <header className="fxg-header">
          <div className="header-inner">
            <div className="logo-wrap">
              <div className="logo-dot">d</div>
              <span>抖店</span>
            </div>
            <nav>
              {navItems.map((item, i) => (
                <a key={item} href="#" className={i === 0 ? 'active' : ''}>
                  {item}
                </a>
              ))}
            </nav>
            <div className="header-cta">
              <button className="app-btn">⌕ 下载抖店App</button>
              <button className="btn solid">登录抖店</button>
              <button className="btn ghost">入驻即时零售</button>
            </div>
          </div>
        </header>

        <main className="hero-main-full">
          <div className="hero-copy">
            <div className="dy">抖音电商</div>
            <h1>
              保证金大幅降低
              <br />
              开店经营无忧!
            </h1>
            <ul>
              <li>基础保证金不区分类目，按GMV规模收取，最高缴5千元</li>
              <li>全类目开放0元试运营，满足规则的新商家无需缴纳基础保证金</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="cube" />
            <div className="music">♪</div>
          </div>
        </main>

        <div className="hero-tabs">
          {heroTabs.map((tab, i) => (
            <button key={tab} className={i === heroIndex ? 'active' : ''} onClick={() => setHeroIndex(i)}>
              ★ {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="entry-grid-wrap">
        <div className="entry-grid">
          {entryTypes.map((entry) => (
            <article key={entry.title} className="entry-card">
              <div className={`entry-head ${entry.hero ? 'hero' : ''}`}>
                <h3>{entry.title}</h3>
                <p>{entry.desc}</p>
                <button className="btn solid small">{entry.cta}</button>
                {entry.hero && <span className="badge">免佣金</span>}
              </div>
              <p className="note">◇ {entry.note}</p>
              <div className="steps">
                {entry.steps.map((step) => (
                  <div key={step.n} className="step">
                    <span>{step.n}</span>
                    <div>
                      <h4>
                        {step.title} <em>{step.time}</em>
                      </h4>
                      <p>{step.detail}</p>
                      <a href="#">查询材料</a>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="float-tools">
        <button>AI</button>
        <button>✉</button>
        <button>✎</button>
        <button>⌂</button>
      </aside>
    </div>
  )
}

export default App
