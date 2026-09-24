import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Photo from './pages/Photo.jsx'
import Video from './pages/Video.jsx'
import './App.css'

function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!revealElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    revealElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      {/* =========================
          HERO
      ========================= */}
      <section className="hero">

        <header className="navbar">
          <a href="#" className="brand-logo">
            <img src="/images/logo.png" alt="Brandon logo" />
          </a>

         <nav>
  <a href="#work">WORK</a>
  <Link to="/photo">PHOTO</Link>
  <Link to="/video">VIDEO</Link>
  <a href="#about">ABOUT</a>
  <a href="#contact">CONTACT</a>
</nav>
        </header>

        <div className="hero-image">
          <div className="hero-overlay"></div>

          <div className="hero-center">
            <p className="hero-label">MULTIDISCIPLINARY CREATIVE</p>

            <h1>BRANDON</h1>

            <p className="roles">
              VIDEO EDITOR
              <span>·</span>
              PHOTOGRAPHER
              <span>·</span>
              VIDEOGRAPHER
              <span>·</span>
              CHANNEL MANAGER
            </p>
          </div>
        </div>

        <div className="hero-footer">
          <p>NORTH CAROLINA, USA</p>

          <p className="footer-center">
            PHOTO · VIDEO · DIGITAL
          </p>

          <a href="#work">
            SCROLL TO EXPLORE
            <span>↓</span>
          </a>
        </div>

      </section>


      {/* =========================
          SELECTED WORK
      ========================= */}
      <section className="work-section" id="work">

        <div className="work-intro">
          <p className="section-number">01 — SELECTED WORK</p>

<h2>
  A mix of
  <br />
  what I do.
</h2>

<p className="work-description">
  Projects spanning video editing, photography, videography,
  production and channel management.
</p>
        </div>


        {/* NIHACHU PROJECT */}
        <div className="featured-project">

          <a
            href="https://www.youtube.com/watch?v=PYlmgtyFVYc"
            target="_blank"
            rel="noopener noreferrer"
            className="project-image project-image-large"
          >
            <img
              src="/images/nihachu-mv.jpg"
              alt="Behind the scenes photography from Nihachu music video production"
            />

            <div className="project-hover">
              <span>WATCH MUSIC VIDEO ↗</span>
            </div>
          </a>

          <div className="project-info">
            <div>
              <p className="project-category">
                PRODUCTION · PHOTOGRAPHY · BTS VIDEOGRAPHY
              </p>

              <h3>Nihachu — Music Video</h3>

              <p className="project-role">
                Production Assistant · Photographer · BTS Videographer
              </p>
            </div>

            <p className="project-year">2026</p>
          </div>

        </div>


{/* PHOTOGRAPHY + VIDEO PROJECTS */}
<div className="project-grid mixed-project-grid">

  {/* GOTHIC EDITORIAL */}
  <div className="project photo-project reveal" id="photo">

<Link to="/photo" className="project-image portrait-project-image">
  <img
    src="/images/gothic-editorial.jpg"
    alt="Gothic editorial portrait photography"
  />

  <div className="project-hover">
    <span>VIEW PHOTOGRAPHY</span>
  </div>
</Link>

    <div className="project-info">
      <div>
        <p className="project-category">
          PHOTOGRAPHY · PORTRAIT · EDITORIAL
        </p>

        <h3>Gothic Editorial</h3>

        <p className="project-role">
          Photography · Creative Direction · Photo Editing
        </p>
      </div>

      <p className="project-year">2026</p>
    </div>

  </div>


  {/* LARRAY VIDEO */}
  <a
    href="https://youtu.be/PiIdq0z__5o"
    target="_blank"
    rel="noopener noreferrer"
    className="project video-project reveal reveal-delay-1"
    id="video"
  >

    <div className="project-image video-project-image">

      <img
        src="https://img.youtube.com/vi/PiIdq0z__5o/maxresdefault.jpg"
        alt="Larray Goes To Universal Studios video editing project"
      />

      <div className="project-hover">
        <span>WATCH VIDEO ↗</span>
      </div>

    </div>

    <div className="project-info">
      <div>
        <p className="project-category">
          VIDEO EDITING · LIFESTYLE · ENTERTAINMENT
        </p>

        <h3>Larray — Universal Studios</h3>

        <p className="project-role">
          Video Editor
        </p>
      </div>

    </div>

  </a>

</div>
      
{/* NIGHT SKIES */}
<div className="night-project">

  <div className="night-project-heading">

    <div>
      <p className="project-category">
        ASTROPHOTOGRAPHY · LANDSCAPE
      </p>

      <h3 className="reveal">Night Skies</h3>
    </div>

    <p className="project-year">
      PERSONAL WORK · 2026
    </p>

  </div>

  <div className="night-project-image">

    <img
      src="/images/night-skies.jpg"
      alt="Astrophotography landscape beneath the night sky"
    />

    <div className="night-image-overlay">
      <p>UNDER THE STARS</p>
    </div>

  </div>

  <div className="night-project-footer">

    <p>
      Exploring landscapes after dark through
      long-exposure photography.
    </p>

    <span>NORTH CAROLINA</span>

  </div>

</div>      
      
      </section>


      {/* =========================
          DISCIPLINES
      ========================= */}
      <section className="disciplines-section">

        <div className="section-heading reveal">
          <p className="section-number">02 — WHAT I DO</p>

          <h2>
            One creative.
            <br />
            Multiple disciplines.
          </h2>
        </div>


        <div className="discipline-list">

          <div className="discipline-row reveal">
            <span className="discipline-number">01</span>

            <h3>Video Editing</h3>

            <p>
              Long-form, short-form and social-first content
              built for digital audiences.
            </p>
          </div>


          <div className="discipline-row reveal">
            <span className="discipline-number">02</span>

            <h3>Photography</h3>

            <p>
              Portrait, editorial, event, landscape and
              astrophotography.
            </p>
          </div>


          <div className="discipline-row reveal">
            <span className="discipline-number">03</span>

            <h3>Videography</h3>

            <p>
              Creative production, events, behind-the-scenes
              and visual storytelling.
            </p>
          </div>


          <div className="discipline-row reveal">
            <span className="discipline-number">04</span>

            <h3>Channel Management</h3>

            <p>
              Content strategy, publishing, optimization and
              management for online creators.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE / STATS
      ========================= */}
      <section className="stats-section">

        <div className="stats-heading reveal">
          <p className="section-number light-number">
            03 — EXPERIENCE
          </p>

          <h2>
            Experience built
            <br />
            frame by frame.
          </h2>
        </div>


        <div className="stats-grid">

          <div className="stat reveal stat-delay-1">
            <p className="stat-number">966M+</p>
            <p className="stat-label">
              VIEWS ACROSS FEATURED WORK
            </p>
          </div>

          <div className="stat reveal stat-delay-2">
            <p className="stat-number">42M+</p>
            <p className="stat-label">
              LIKES ACROSS FEATURED WORK
            </p>
          </div>

          <div className="stat reveal stat-delay-3">
            <p className="stat-number">40+</p>
            <p className="stat-label">
              FEATURED VIDEO PROJECTS
            </p>
          </div>

          <div className="stat reveal stat-delay-4">
            <p className="stat-number">10+</p>
            <p className="stat-label">
              YEARS CREATING
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CLIENTS
      ========================= */}
      <section className="clients-section">

        <p className="section-number reveal">
          04 — SELECT CLIENTS
        </p>

        <div className="client-names reveal">
  <span>MRBEAST</span>
  <span>JAMES CHARLES</span>
  <span>NIHACHU</span>
  <span>JOLLZTV</span>
  <span>XUMIIZ</span>
</div>

        <p className="clients-note reveal">
          Selected creators and channels I have contributed work to
          across editing, production and digital content.
        </p>

      </section>


      {/* =========================
          ABOUT
      ========================= */}
      <section className="about-section" id="about">

        <div className="about-label">
          <p className="section-number">
            05 — ABOUT
          </p>
        </div>

        <div className="about-content">

          <h2>
  Editing. Shooting.
  <br />
  Creating.
</h2>

          <div className="about-copy">

            <p>
  I'm Brandon, a longtime creative based in North Carolina,
  working across video editing, photography, videography and more.
</p>

<p>
  My work has taken me from editing and managing content for online
  creators to videography, photography and on-site production. I started
  working as a creator in 2016 and taught myself everything I know today
  from experience as a YouTube creator and working alongside many clients
  of different varieties. I have always enjoyed the end result and the
  reactions I get from those watching, it is my greatest motivation.
  I enjoy working across different mediums and bringing ideas to life
  from behind a screen to behind a camera.
</p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <footer className="contact-section" id="contact">

        <p className="contact-small">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          LET'S CREATE
          <span>.</span>
        </h2>

        <div className="contact-bottom">

          <p>
            NORTH CAROLINA, USA
          </p>

          <p>
            AVAILABLE FOR SELECT PROJECTS
          </p>

          <div className="contact-email">
  <span>SOLOEDITING.BUSINESS@GMAIL.COM</span>

  <button
    type="button"
    onClick={(e) => {
      navigator.clipboard.writeText("soloediting.business@gmail.com")
      e.currentTarget.textContent = "COPIED ✓"

      setTimeout(() => {
        e.currentTarget.textContent = "COPY EMAIL ↗"
      }, 2000)
    }}
  >
    COPY EMAIL ↗
  </button>
</div>

        </div>

      </footer>

    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  )
}

export default App