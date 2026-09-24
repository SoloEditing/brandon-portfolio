import { Link } from 'react-router-dom'

function Photo() {
  return (
    <main className="photo-page">

      {/* NAVIGATION */}
      <header className="portfolio-nav">
        <Link to="/" className="brand-logo">
          <img src="/images/logo.png" alt="Brandon logo" />
        </Link>

        <nav>
          <Link to="/#work">WORK</Link>
          <Link to="/photo" className="active-nav">PHOTO</Link>
          <Link to="/video">VIDEO</Link>
          <Link to="/#about">ABOUT</Link>
          <Link to="/#contact">CONTACT</Link>
        </nav>
      </header>


      {/* PHOTO INTRO */}
      <section className="photo-hero">

        <p className="section-number">
          PHOTOGRAPHY — 2021–2026
        </p>

        <h1>
          Moments.
          <br />
          People.
          <br />
          Places.
        </h1>

        <div className="photo-hero-bottom">

          <p>
            A collection of portrait, editorial, event,
            landscape and night-sky photography.
          </p>

          <span>SCROLL TO EXPLORE ↓</span>

        </div>

      </section>


      {/* PHOTO CATEGORIES */}
      <section className="photo-categories">

        <p className="section-number">
          EXPLORE BY CATEGORY
        </p>

        <div className="category-list">

          <a href="#portraits">
            <span>01</span>
            <h2>PORTRAITS & EDITORIAL</h2>
            <span className="category-arrow">↘</span>
          </a>

          <a href="#events">
            <span>02</span>
            <h2>EVENTS</h2>
            <span className="category-arrow">↘</span>
          </a>

          <a href="#landscape">
            <span>03</span>
            <h2>LANDSCAPE & NATURE</h2>
            <span className="category-arrow">↘</span>
          </a>

          <a href="#night">
            <span>04</span>
            <h2>NIGHT SKIES</h2>
            <span className="category-arrow">↘</span>
          </a>

         </div>

      </section>


      {/* PORTRAITS & EDITORIAL */}
      <section className="portrait-gallery" id="portraits">

        <div className="gallery-heading">
          <p className="section-number">
            01 — PORTRAITS & EDITORIAL
          </p>

          <p className="gallery-description">
            Portraiture, fashion and creative imagery exploring
            people, atmosphere and visual storytelling.
          </p>
        </div>


        <div className="portrait-layout">

         <figure className="gallery-photo portrait-main">
  <img
    src="/images/photo/portraits/portrait-01.jpg"
    alt="Portrait at the National Cherry Blossom Festival"
  />

  <figcaption className="photo-caption">
    <div>
      <p>National Cherry Blossom Festival</p>
      <span>Washington, D.C.</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>


<figure className="gallery-photo portrait-wide">
  <img
    src="/images/photo/portraits/portrait-03.jpg"
    alt="Behind-the-scenes photography for Nihachu's Strung Along music video"
  />

  <figcaption className="photo-caption">
    <div>
      <p>Nihachu — Strung Along</p>
      <span>Music Video · BTS Photography · Production</span>
      <span className="client-stat">
        1.2M+ YouTube · 1.3M+ Instagram
      </span>
    </div>

    <span className="caption-year">2025</span>
  </figcaption>
</figure>


<figure className="gallery-photo portrait-left">
  <img
    src="/images/photo/portraits/editorial-02.jpg"
    alt="Editorial portrait at the National Cherry Blossom Festival"
  />

  <figcaption className="photo-caption">
    <div>
      <p>National Cherry Blossom Festival</p>
      <span>Washington, D.C.</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>


<figure className="gallery-photo portrait-right">
  <img
    src="/images/photo/portraits/portrait-04.jpg"
    alt="Portrait of JaackieLantern in Scotland"
  />

  <figcaption className="photo-caption">
    <div>
      <p>JaackieLantern</p>
      <span>Scotland</span>
      <span className="client-stat">138K+ Instagram</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>


<figure className="gallery-photo portrait-graduation">
  <img
    src="/images/photo/portraits/portrait-02.jpg"
    alt="Graduation portrait at UNC Charlotte"
  />

  <figcaption className="photo-caption">
    <div>
      <p>Graduation Portrait</p>
      <span>UNC Charlotte · Charlotte, NC</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>


<figure className="gallery-photo editorial-wide">
  <img
    src="/images/photo/portraits/editorial-01.jpg"
    alt="Black and white editorial portrait of JaackieLantern in Scotland"
  />

  <figcaption className="photo-caption">
    <div>
      <p>JaackieLantern</p>
      <span>Editorial · Scotland</span>
      <span className="client-stat">138K+ Instagram</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>
<figure className="gallery-photo fort-macon-wide">
  <img
    src="/images/photo/portraits/portrait-05.jpg"
    alt="Environmental portrait on the stairs at Fort Macon"
  />

  <figcaption className="photo-caption">
    <div>
      <p>Fort Macon</p>
      <span>Environmental Portrait · Atlantic Beach, NC</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>


<figure className="gallery-photo fort-macon-portrait">
  <img
    src="/images/photo/portraits/portrait-06.jpg"
    alt="Environmental portrait overlooking Fort Macon"
  />

  <figcaption className="photo-caption">
    <div>
      <p>Fort Macon</p>
      <span>Environmental Portrait · Atlantic Beach, NC</span>
    </div>

    <span className="caption-year">2026</span>
  </figcaption>
</figure>
        </div>

      </section>
      {/* EVENTS */}
      <section className="events-gallery" id="events">

        <div className="gallery-heading">
          <p className="section-number">
            02 — EVENTS
          </p>

          <p className="gallery-description">
            Documentary-style event photography capturing
            community, atmosphere and the moments in between.
          </p>
        </div>


        <div className="events-project-heading">

          <div>
            <p className="event-label">MARCH OF DIMES</p>
<h2>March for Babies</h2>
          </div>

          <div className="event-meta">
            <p>STATE EMPLOYEES' CREDIT UNION</p>
            <span>2026</span>
          </div>

        </div>


        <div className="events-layout">

          <figure className="event-photo">
            <img
              src="/images/photo/events/event-01.jpg"
              alt="SECU team at the March of Dimes event"
            />

            <figcaption className="photo-caption">
              <div>
               <p>SECU Team</p>
<span>March for Babies</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>


          <figure className="event-photo">
            <img
              src="/images/photo/events/event-02.jpg"
              alt="SECU booth at the March of Dimes event"
            />

            <figcaption className="photo-caption">
              <div>
<p>Community Outreach</p>
<span>SECU · March for Babies</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>


          <figure className="event-photo">
            <img
              src="/images/photo/events/event-03.jpg"
              alt="SECU team group photograph at the March of Dimes event"
            />

            <figcaption className="photo-caption">
              <div>
<p>Team Photograph</p>
<span>SECU · March for Babies</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>


          <figure className="event-photo">
            <img
              src="/images/photo/events/event-04.jpg"
              alt="SECU booth and representative at the March of Dimes event"
            />

            <figcaption className="photo-caption">
              <div>
<p>Event Booth</p>
<span>SECU · March for Babies</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>

        </div>

      </section>
            {/* LANDSCAPE & NATURE */}
      <section className="landscape-gallery" id="landscape">

        <div className="gallery-heading">
          <p className="section-number">
            03 — LANDSCAPE & NATURE
          </p>

          <p className="gallery-description">
            Landscapes and natural spaces photographed across
            different places, seasons and environments.
          </p>
        </div>


        <div className="landscape-layout">

          {/* HANGING ROCK — HERO */}
          <figure className="landscape-photo landscape-hero">
            <img
              src="/images/photo/landscape/landscape-01.jpg"
              alt="Mountain landscape at Hanging Rock State Park"
            />

            <figcaption className="photo-caption">
              <div>
                <p>Hanging Rock</p>
                <span>North Carolina</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>


          {/* HANGING ROCK — SECOND */}
          <figure className="landscape-photo landscape-left">
            <img
              src="/images/photo/landscape/landscape-02.jpg"
              alt="Rocky overlook surrounded by trees at Hanging Rock State Park"
            />

            <figcaption className="photo-caption">
              <div>
                <p>Hanging Rock</p>
                <span>North Carolina</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>


          {/* HANGING ROCK — THIRD */}
          <figure className="landscape-photo landscape-right">
            <img
              src="/images/photo/landscape/landscape-03.jpg"
              alt="Mountain overlook at Hanging Rock State Park"
            />

            <figcaption className="photo-caption">
              <div>
                <p>Hanging Rock</p>
                <span>North Carolina</span>
              </div>

              <span className="caption-year">2026</span>
            </figcaption>
          </figure>


          {/* SWITZERLAND */}
          <figure className="landscape-photo landscape-switzerland">
            <img
              src="/images/photo/landscape/landscape-04.jpg"
              alt="Snow-covered mountain landscape in Switzerland"
            />

            <figcaption className="photo-caption">
              <div>
                <p>Switzerland</p>
                <span>Winter Landscape</span>
              </div>
            </figcaption>
          </figure>


          {/* NATURAL ARCH */}
          <figure className="landscape-photo landscape-arch">
            <img
              src="/images/photo/landscape/landscape-05.jpg"
              alt="Natural rock arch surrounded by greenery"
            />

            <figcaption className="photo-caption">
              <div>
                <p>Natural Arch</p>

              </div>
            </figcaption>
          </figure>


          {/* JAPAN */}
          <figure className="landscape-photo landscape-japan">
            <img
              src="/images/photo/landscape/landscape-06.jpg"
              alt="Cherry blossoms in Japan"
            />

            <figcaption className="photo-caption">
              <div>
                <p>Cherry Blossoms</p>
                <span>Japan</span>
              </div>
            </figcaption>
          </figure>

        </div>

      </section>
           {/* NIGHT SKIES */}
      <section className="night-gallery" id="night">

        <div className="night-gallery-heading">

          <p className="section-number">
            04 — NIGHT SKIES
          </p>

          <div className="night-title-row">
            <h2>
              Under open
              <br />
              skies.
            </h2>

            <p>
              Exploring landscapes after sunset through
              long exposures, stars and the night sky.
            </p>
          </div>

        </div>


        <div className="night-layout">

          {/* EMERALD ISLE — HERO */}
          <figure className="night-photo night-hero">
            <img
              src="/images/photo/night/night-01.jpg"
              alt="Milky Way photographed from Emerald Isle, North Carolina"
            />

            <figcaption className="night-caption">
              <div>
                <p>Milky Way</p>
                <span>Emerald Isle · North Carolina</span>
              </div>

              <span>2026</span>
            </figcaption>
          </figure>


          {/* EMERALD ISLE */}
          <figure className="night-photo night-coast">
            <img
              src="/images/photo/night/night-02.jpg"
              alt="Starry night sky over Emerald Isle, North Carolina"
            />

            <figcaption className="night-caption">
              <div>
                <p>Atlantic Coast</p>
                <span>Emerald Isle · North Carolina</span>
              </div>

              <span>2026</span>
            </figcaption>
          </figure>


          {/* MORROW MOUNTAIN */}
          <figure className="night-photo night-morrow-main">
            <img
              src="/images/photo/night/night-03.jpg"
              alt="Stars above silhouetted trees at Morrow Mountain, North Carolina"
            />

            <figcaption className="night-caption">
              <div>
                <p>Under the Stars</p>
                <span>Morrow Mountain · North Carolina</span>
              </div>

              <span>2026</span>
            </figcaption>
          </figure>


          {/* PILOT MOUNTAIN */}
          <figure className="night-photo night-pilot">
            <img
              src="/images/photo/night/night-04.jpg"
              alt="Silhouette beneath the night sky at Pilot Mountain, North Carolina"
            />

            <figcaption className="night-caption">
              <div>
                <p>After Dark</p>
                <span>Morrow Mountain · North Carolina</span>
              </div>

              <span>2026</span>
            </figcaption>
          </figure>


          {/* MORROW MOUNTAIN — SECOND */}
          <figure className="night-photo night-morrow-secondary">
            <img
              src="/images/photo/night/night-05.jpg"
              alt="Night sky framed by trees at Morrow Mountain, North Carolina"
            />

            <figcaption className="night-caption">
              <div>
                <p>Nightfall</p>
                <span>Morrow Mountain · North Carolina</span>
              </div>

              <span>2026</span>
            </figcaption>
          </figure>

        </div>

      </section> 
    </main>
  )
}

export default Photo