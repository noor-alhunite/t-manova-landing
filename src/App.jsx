import { useEffect, useState } from 'react'
import {
  ArrowLeft, ArrowRight, ArrowUpLeft, BarChart3, Check, ChevronDown, Code2,
  Database, Globe2, Mail, Menu, MessageCircle, Palette, PenTool, Smartphone,
  ExternalLink, Send, Sparkles, Target, Users, X,
} from 'lucide-react'
import logoImage from './assets/WhatsApp Image 2026-09-17 at 2.46.23 PM.jpeg'

const phone = '962785767711'

const copy = {
  ar: {
    dir: 'rtl',
    nav: { services: 'خدماتنا', why: 'لماذا نحن', pricing: 'الأسعار', work: 'أعمالنا', contact: 'تواصل معنا' },
    whatsapp: 'تواصل معنا عبر واتساب',
    hero: { eyebrow: 'وكالة رقمية تبني للمستقبل', title: 'نحوّل أفكارك إلى تجارب رقمية استثنائية', text: 'نصمم ونطور مواقع إلكترونية، منصات ويب متطورة، ونظم إدارة أعمال مخصصة ترتقي بحضورك الرقمي.', explore: 'استكشف خدماتنا', start: 'ابدأ مشروعك', floating: 'حلول رقمية\nذكية ومرنة' },
    trust: ['أداء عالٍ', 'كود نظيف', 'تسليم سريع'],
    services: {
      label: 'ما نقدمه', title: 'خدماتنا الاحترافية', intro: 'حلول رقمية مصممة خصيصاً لتلبية احتياجات عملك.',
      items: [
        { icon: Smartphone, title: 'صفحات الهبوط', desc: 'صفحات فردية سريعة ومحسنة لزيادة التحويل.', price: '120 - 160 JOD' },
        { icon: Globe2, title: 'المواقع والمنصات التفاعلية', desc: 'مواقع أعمال ديناميكية متعددة الصفحات.', price: '230 - 320 JOD' },
        { icon: Database, title: 'نظم إدارة الأعمال المخصصة', desc: 'لوحات تحكم داخلية وأنظمة CRM.', price: 'تبدأ من 350 JOD' },
        { icon: Palette, title: 'تصميم UI/UX والصيانة', desc: 'دعم فني مستمر وتحسين تجربة المستخدم.', price: 'حسب الطلب' },
      ],
    },
    portfolio: { label: 'أعمالنا', title: 'مشاريع نفخر\nبها', text: 'مجموعة من المواقع والمنصات التي صممناها وطوّرناها لعلامات في الأردن والمنطقة والعالم.', visit: 'عرض المشروع', filters: ['الكل', 'تطبيق ويب', 'ذكاء اصطناعي', 'موبايل', 'تصميم'], items: [
      { name: 'Edujor', url: 'https://edujor.com', country: 'الأردن', category: 'تطبيق ويب', year: '2025', tags: ['NEXT.JS', 'NODE.JS'], description: 'منصة تعليمية متطورة تربط الطلاب بالفرص التعليمية.', mark: 'E' },
      { name: 'نمو العالمية', url: 'https://numofoods.com', country: 'شركة نمو العالمية', category: 'تصميم', year: '2025', tags: ['FOOD', 'WEB DESIGN'], description: 'تجربة رقمية حديثة تعكس هوية شركة نمو العالمية.', mark: 'N' },
      { name: 'Trusted Pip', url: 'https://trustedpip.com', country: 'دبي', category: 'ذكاء اصطناعي', year: '2025', tags: ['AI', 'WEB APP'], description: 'منصة رقمية ذكية بتجربة واضحة وأداء موثوق.', mark: 'T' },
      { name: 'Active Arena', url: 'https://activearena.com', country: 'الولايات المتحدة', category: 'موبايل', year: '2024', tags: ['REACT NATIVE', 'MOBILE'], description: 'تجربة رياضية تفاعلية تجمع المجتمع والنشاط.', mark: 'A' },
      { name: 'VABS', url: 'https://vabs.ae', country: 'دبي', category: 'تطبيق ويب', year: '2025', tags: ['REACT', 'DASHBOARD'], description: 'حلول أعمال رقمية مصممة لتبسيط العمليات اليومية.', mark: 'V' },
      { name: 'Pillar Home', url: 'https://pillarhome.ca', country: 'كندا', category: 'تصميم', year: '2024', tags: ['REAL ESTATE', 'WEB DESIGN'], description: 'واجهة عقارية أنيقة تساعد العملاء على اكتشاف منزلهم.', mark: 'P' },
      { name: 'Matter Hair & Skin', url: 'https://matterhairandskin.com', country: 'الولايات المتحدة', category: 'تصميم', year: '2025', tags: ['E-COMMERCE', 'BRAND'], description: 'تجربة تجارة إلكترونية عصرية للعناية بالشعر والبشرة.', mark: 'M' },
    ] },
    why: { label: 'لماذا T-Manova؟', title: 'شريكك الرقمي\nفي كل خطوة', text: 'نؤمن أن أفضل المنتجات الرقمية تبدأ بفهم عميق لأهدافك وتنتهي بنتائج ملموسة.', items: [
      { icon: Target, title: 'وضوح من البداية', desc: 'خطة واضحة، مراحل محددة، وتواصل مستمر دون مفاجآت.' },
      { icon: Sparkles, title: 'حلول تصنع الفرق', desc: 'نمزج بين التفكير الاستراتيجي والتنفيذ الإبداعي لنحقق أثراً حقيقياً.' },
      { icon: Users, title: 'فريق بجانبك', desc: 'تواصل مباشر مع فريق يهتم بنجاح مشروعك على المدى الطويل.' },
    ] },
    pricing: { label: 'استثمارك الذكي', title: 'باقات الأسعار المرنة', text: 'اختر الباقة المناسبة لاحتياجاتك، وسنساعدك على تحويل فكرتك إلى واقع.', popular: 'الأكثر طلباً', order: 'اطلب الخدمة', from: 'تبدأ من', currency: 'د.أ', items: [
      { name: 'صفحات الهبوط', subtitle: 'للبدايات القوية', price: '120 - 160', features: ['تصميم متجاوب', 'لوحة تحكم', 'تصميم متجاوب', 'تحسين تجربة المستخدم'] },
      { name: 'المواقع التفاعلية', subtitle: 'للنمو بثقة', price: '230 - 320', features: ['تصميم متجاوب', 'لوحة تحكم', 'تصميم متجاوب', 'تحسين تجربة المستخدم'] },
      { name: 'الاختبار والإطلاق', subtitle: 'للطموحات الكبيرة', price: '350+', features: ['تصميم متجاوب', 'لوحة تحكم', 'تصميم متجاوب', 'تحسين تجربة المستخدم'] },
    ] },
    workflow: { label: 'كيف نعمل', title: 'رحلة العمل معنا', text: 'عملية بسيطة وشفافة تحوّل رؤيتك إلى منتج رقمي جاهز للنمو.', items: [
      { icon: MessageCircle, title: 'الاكتشاف والاستشارة', desc: 'نكتشف أهدافك ونفهم احتياجات مشروعك.' }, { icon: PenTool, title: 'التصميم وتجربة المستخدم', desc: 'نصمم تجربة واضحة ومحببة لمستخدميك.' }, { icon: Code2, title: 'التطوير الرشيق', desc: 'نبني منتجاً سريعاً وموثوقاً.' }, { icon: BarChart3, title: 'الاختبار والإطلاق', desc: 'نختبر المنتج ونطلقه بثقة.' },
    ] },
    contact: { label: 'لنبنِ شيئاً رائعاً', title: 'جاهز لتحويل\nفكرتك إلى واقع؟', text: 'أخبرنا قليلاً عن مشروعك وسنعود إليك خلال 24 ساعة لنبدأ الحديث.', name: 'الاسم الكامل', email: 'البريد الإلكتروني', service: 'الخدمة المطلوبة', message: 'حدثنا عن مشروعك', send: 'أرسل رسالتك', sent: 'تم تجهيز رسالتك، سنعود إليك قريباً', options: ['صفحة هبوط', 'موقع كامل', 'نظام إدارة', 'تصميم UI/UX', 'أخرى'] },
    footer: 'نبني منتجات رقمية تدفع أعمالك إلى الأمام.', rights: '© 2025 T-Manova. جميع الحقوق محفوظة.',
  },
  en: {
    dir: 'ltr', nav: { services: 'Services', why: 'Why us', pricing: 'Pricing', work: 'Our work', contact: 'Contact' }, whatsapp: 'Chat on WhatsApp',
    hero: { eyebrow: 'A digital agency built for what is next', title: 'We turn your ideas into exceptional digital experiences', text: 'We design and build websites, advanced web platforms, and custom business systems that elevate your digital presence.', explore: 'Explore services', start: 'Start a project', floating: 'Smart, flexible\ndigital solutions' }, trust: ['High performance', 'Clean code', 'Fast delivery'],
    services: { label: 'What we do', title: 'Our professional services', intro: 'Digital solutions built around your business.', items: [
      { icon: Smartphone, title: 'Landing pages', desc: 'Fast, conversion-focused single pages.', price: '120 - 160 JOD' }, { icon: Globe2, title: 'Interactive websites', desc: 'Dynamic multi-page business websites.', price: '230 - 320 JOD' }, { icon: Database, title: 'Custom business systems', desc: 'Internal dashboards and CRM systems.', price: 'From 350 JOD' }, { icon: Palette, title: 'UI/UX design & maintenance', desc: 'Ongoing support and UX improvements.', price: 'On request' },
    ] },
    portfolio: { label: 'Our work', title: 'Projects we are\nproud of', text: 'A selection of websites and platforms we designed and built for brands across Jordan, the region, and the world.', visit: 'View project', filters: ['All', 'Web app', 'AI', 'Mobile', 'Design'], items: [
      { name: 'Edujor', url: 'https://edujor.com', country: 'Jordan', category: 'Web app', year: '2025', tags: ['NEXT.JS', 'NODE.JS'], description: 'A modern education platform connecting students with opportunity.', mark: 'E' }, { name: 'Nomo Global', url: 'https://numofoods.com', country: 'Nomo Global Company', category: 'Design', year: '2025', tags: ['FOOD', 'WEB DESIGN'], description: 'A fresh digital experience for Nomo Global Company.', mark: 'N' }, { name: 'Trusted Pip', url: 'https://trustedpip.com', country: 'Dubai', category: 'AI', year: '2025', tags: ['AI', 'WEB APP'], description: 'A smart digital platform with a clear, trusted experience.', mark: 'T' }, { name: 'Active Arena', url: 'https://activearena.com', country: 'United States', category: 'Mobile', year: '2024', tags: ['REACT NATIVE', 'MOBILE'], description: 'An interactive sports experience bringing people together.', mark: 'A' }, { name: 'VABS', url: 'https://vabs.ae', country: 'Dubai', category: 'Web app', year: '2025', tags: ['REACT', 'DASHBOARD'], description: 'Business solutions designed to simplify daily operations.', mark: 'V' }, { name: 'Pillar Home', url: 'https://pillarhome.ca', country: 'Canada', category: 'Design', year: '2024', tags: ['REAL ESTATE', 'WEB DESIGN'], description: 'An elegant property experience to help clients find home.', mark: 'P' }, { name: 'Matter Hair & Skin', url: 'https://matterhairandskin.com', country: 'United States', category: 'Design', year: '2025', tags: ['E-COMMERCE', 'BRAND'], description: 'A modern commerce experience for hair and skin care.', mark: 'M' },
    ] },
    why: { label: 'Why T-Manova?', title: 'Your digital partner\nat every step', text: 'The best digital products begin with a deep understanding of your goals and end with measurable results.', items: [{ icon: Target, title: 'Clarity from day one', desc: 'A clear plan, defined milestones, and constant communication.' }, { icon: Sparkles, title: 'Work that stands out', desc: 'We blend strategic thinking with creative execution to make a real impact.' }, { icon: Users, title: 'A team by your side', desc: 'Direct access to a team invested in your long-term success.' }] },
    pricing: { label: 'Smart investment', title: 'Flexible pricing packages', text: 'Choose the right package for your needs and turn your idea into reality.', popular: 'Most popular', order: 'Order service', from: 'Starting from', currency: 'JOD', items: [{ name: 'Landing pages', subtitle: 'For strong beginnings', price: '120 - 160', features: ['Responsive design', 'Admin dashboard', 'Responsive design', 'UX improvements'] }, { name: 'Interactive websites', subtitle: 'For confident growth', price: '230 - 320', features: ['Responsive design', 'Admin dashboard', 'Responsive design', 'UX improvements'] }, { name: 'Testing & launch', subtitle: 'For big ambitions', price: '350+', features: ['Responsive design', 'Admin dashboard', 'Responsive design', 'UX improvements'] }] },
    workflow: { label: 'How we work', title: 'Your journey with us', text: 'A simple, transparent process that turns your vision into a digital product ready to grow.', items: [{ icon: MessageCircle, title: 'Discovery & consultation', desc: 'We understand your idea and goals.' }, { icon: PenTool, title: 'Design & UX', desc: 'We shape a clear, delightful experience.' }, { icon: Code2, title: 'Agile development', desc: 'We build a fast, reliable product.' }, { icon: BarChart3, title: 'Testing & launch', desc: 'We launch with confidence.' }] },
    contact: { label: 'Let’s build something great', title: 'Ready to turn your\nidea into reality?', text: 'Tell us a little about your project and we will get back to you within 24 hours.', name: 'Full name', email: 'Email address', service: 'Service needed', message: 'Tell us about your project', send: 'Send your message', sent: 'Message ready, we will be in touch soon', options: ['Landing page', 'Full website', 'Business system', 'UI/UX design', 'Other'] },
    footer: 'Building digital products that move your business forward.', rights: '© 2025 T-Manova. All rights reserved.',
  },
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('tm_lang') || 'ar')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const t = copy[lang]
  const isRTL = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    localStorage.setItem('tm_lang', lang)
  }, [lang, t.dir])

  const openWhatsApp = (message = '') => window.open(`https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`, '_blank', 'noopener,noreferrer')
  const goTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const updateForm = (field, value) => setForm((current) => ({ ...current, [field]: value }))
  const submit = (event) => { event.preventDefault(); openWhatsApp(`${form.name} | ${form.email} | ${form.service} | ${form.message}`); setSent(true) }

  return (
    <div className={`site-shell ${isRTL ? 'font-ar' : 'font-en'}`}>
      <header className="site-header">
        <div className="nav-wrap">
          <button className="brand" onClick={() => goTo('top')} aria-label="T-Manova home"><img className="brand-logo" src={logoImage} alt="T-Manova - Technology & Solutions" /></button>
          <nav className="desktop-nav">{Object.entries(t.nav).map(([key, label]) => <button key={key} onClick={() => goTo(key === 'work' ? 'portfolio' : key)}>{label}</button>)}</nav>
          <div className="nav-actions"><div className="lang-switch"><button className={isRTL ? 'selected' : ''} onClick={() => setLang('ar')}>AR</button><button className={!isRTL ? 'selected' : ''} onClick={() => setLang('en')}>EN</button></div><button className="button button-small button-primary whatsapp-button" onClick={() => openWhatsApp(isRTL ? 'مرحباً، أود بدء مشروع جديد' : 'Hello, I would like to start a new project')}><MessageCircle size={16} /><span>{t.whatsapp}</span></button><button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
        </div>
        {menuOpen && <nav className="mobile-nav">{Object.entries(t.nav).map(([key, label]) => <button key={key} onClick={() => goTo(key === 'work' ? 'portfolio' : key)}>{label}</button>)}<div className="mobile-langs"><button onClick={() => setLang('ar')}>AR</button><button onClick={() => setLang('en')}>EN</button></div></nav>}
      </header>

      <main id="top">
        <section className="hero section-pad"><div className="hero-glow glow-one" /><div className="hero-glow glow-two" /><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" />{t.hero.eyebrow}</div><h1>{t.hero.title}</h1><p>{t.hero.text}</p><div className="hero-actions"><button className="button button-primary" onClick={() => goTo('services')}>{t.hero.explore} {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</button><button className="button button-ghost" onClick={() => goTo('contact')}>{t.hero.start} <ArrowUpLeft size={17} /></button></div><div className="trust-row">{t.trust.map((item) => <div className="trust-item" key={item}><span><Check size={13} /></span>{item}</div>)}</div></div><div className="hero-art"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-panel"><div className="art-top"><span /><span /><span /></div><div className="art-lines"><i /><i /><i /><i /></div><div className="art-chart"><b /><b /><b /><b /><b /><b /></div><div className="art-card"><Sparkles size={17} /><span>{t.hero.floating.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span></div></div><div className="art-dot dot-one" /><div className="art-dot dot-two" /></div></section>

        <section id="services" className="section-pad section-block services-section"><div className="section-heading"><div><span className="section-label">{t.services.label}</span><h2>{t.services.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.services.intro}</p></div><div className="service-grid">{t.services.items.map(({ icon: Icon, title, desc, price }, index) => <article className="service-card" key={title}><div className="card-icon"><Icon size={34} /></div><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{desc}</p><div className="card-footer"><strong>{price}</strong><ArrowUpLeft size={17} /></div></article>)}</div></section>

        <section id="why" className="section-pad why-section"><div className="section-heading"><div><span className="section-label">{t.why.label}</span><h2>{t.why.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.why.text}</p></div><div className="why-grid">{t.why.items.map(({ icon: Icon, title, desc }) => <article className="why-item" key={title}><div className="why-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></section>

        <section id="portfolio" className="section-pad section-block portfolio-section"><div className="section-heading"><div><span className="section-label">{t.portfolio.label}</span><h2>{t.portfolio.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.portfolio.text}</p></div><div className="portfolio-filters">{t.portfolio.filters.map((filter, index) => <button className={index === 0 ? 'active' : ''} key={filter}>{filter}{index === 0 && <span>✦</span>}</button>)}</div><div className="portfolio-grid">{t.portfolio.items.map((item, index) => <article className="portfolio-card" key={item.name}><a className="portfolio-preview" href={item.url} target="_blank" rel="noreferrer" aria-label={`${t.portfolio.visit}: ${item.name}`}><span className="portfolio-year">{item.year}</span><span className={`portfolio-mark mark-${index + 1}`}>{item.mark}</span><span className="preview-lines"><i /><i /><i /></span><span className="preview-orb" /></a><div className="portfolio-meta"><div><div className="portfolio-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h3>{item.name}</h3><p>{item.country}</p></div><a href={item.url} target="_blank" rel="noreferrer" aria-label={`${t.portfolio.visit}: ${item.name}`}><ExternalLink size={17} /></a></div><p className="portfolio-description">{item.description}</p><a className="portfolio-visit" href={item.url} target="_blank" rel="noreferrer">{t.portfolio.visit}<ExternalLink size={14} /></a></article>)}</div></section>

        <section id="pricing" className="section-pad section-block pricing-section"><div className="section-heading"><div><span className="section-label">{t.pricing.label}</span><h2>{t.pricing.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.pricing.text}</p></div><div className="pricing-grid">{t.pricing.items.map((item, index) => <article className={`price-card ${index === 1 ? 'featured' : ''}`} key={item.name}>{index === 1 && <div className="popular-badge"><Sparkles size={14} />{t.pricing.popular}</div>}<span className="price-subtitle">{item.subtitle}</span><h3>{item.name}</h3><div className="price-value"><small>{t.pricing.from}</small><strong>{item.price}</strong><span>{t.pricing.currency}</span></div><ul>{item.features.map((feature, featureIndex) => <li key={`${feature}-${featureIndex}`}><span className="feature-dot" />{feature}</li>)}</ul><button className={`button ${index === 1 ? 'button-primary' : 'button-outline'}`} onClick={() => openWhatsApp(`${item.name}: ${item.subtitle}`)}>{t.pricing.order} <MessageCircle size={16} /></button></article>)}</div></section>

        <section id="workflow" className="section-pad workflow-section"><div className="section-heading"><div><span className="section-label">{t.workflow.label}</span><h2>{t.workflow.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.workflow.text}</p></div><div className="workflow-track">{t.workflow.items.map(({ icon: Icon, title, desc }, index) => <button className={`workflow-step ${activeStep === index ? 'active' : ''}`} key={title} onClick={() => setActiveStep(index)}><span className="step-number">0{index + 1}</span><span className="step-icon"><Icon size={20} /></span><strong>{title}</strong><small>{desc}</small></button>)}</div></section>

        <section id="contact" className="section-pad contact-section"><div className="contact-inner"><div className="contact-copy"><span className="section-label">{t.contact.label}</span><h2>{t.contact.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2><p>{t.contact.text}</p><button className="contact-link" onClick={() => openWhatsApp(isRTL ? 'مرحباً، أريد استشارة حول مشروعي' : 'Hello, I need a consultation')}><MessageCircle size={18} /> {t.whatsapp}</button></div><form className="contact-form" onSubmit={submit}><div className="form-grid"><label>{t.contact.name}<input required value={form.name} onChange={(event) => updateForm('name', event.target.value)} placeholder={t.contact.name} /></label><label>{t.contact.email}<input required type="email" value={form.email} onChange={(event) => updateForm('email', event.target.value)} placeholder={t.contact.email} /></label></div><label>{t.contact.service}<div className="select-wrap"><select required value={form.service} onChange={(event) => updateForm('service', event.target.value)}><option value="">{t.contact.service}</option>{t.contact.options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={17} /></div></label><label>{t.contact.message}<textarea required value={form.message} onChange={(event) => updateForm('message', event.target.value)} placeholder={t.contact.message} rows="4" /></label><button type="submit" className="button button-primary form-submit"><Send size={16} /> {t.contact.send}</button>{sent && <div className="form-success"><Check size={16} />{t.contact.sent}</div>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="footer-inner"><div><button className="brand footer-brand" onClick={() => goTo('top')}><img className="brand-logo" src={logoImage} alt="T-Manova - Technology & Solutions" /></button><p>{t.footer}</p></div><div className="footer-links"><button onClick={() => goTo('services')}>{t.nav.services}</button><button onClick={() => goTo('pricing')}>{t.nav.pricing}</button><button onClick={() => goTo('contact')}>{t.nav.contact}</button></div><div className="footer-contact"><Mail size={17} /> hello@t-manova.com</div></div><div className="footer-bottom"><span>{t.rights}</span><span>Amman, Jordan</span></div></footer>
    </div>
  )
}

export default App
