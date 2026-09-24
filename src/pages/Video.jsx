import { Link } from 'react-router-dom'

function Video() {
  return (
    <main className="video-page" id="top">

      {/* NAVIGATION */}
      <header className="portfolio-nav">
        <Link to="/" className="brand-logo">
          <img src="/images/logo.png" alt="Brandon logo" />
        </Link>

        <nav>
          <Link to="/#work">WORK</Link>
          <Link to="/photo">PHOTO</Link>
          <Link to="/video" className="active-nav">VIDEO</Link>
          <Link to="/#about">ABOUT</Link>
          <Link to="/#contact">CONTACT</Link>
        </nav>
      </header>


      {/* VIDEO INTRO */}
      <section className="video-hero">

        <p className="section-number">
          VIDEO — SELECTED WORK
        </p>

        <h1>
          Editing.
          <br />
          Shooting.
          <br />
          Creating.
        </h1>

        <div className="video-hero-bottom">

          <p>
            Video editing, production and digital storytelling
            across creators, brands and social platforms.
          </p>

          <a href="#video-work" className="video-scroll">
  SCROLL TO EXPLORE ↓
</a>

        </div>

      </section>
      {/* SELECTED WORK */}
      <section className="video-work" id="video-work">

        <div className="video-work-heading">
          <p className="section-number">
            01 — SELECTED WORK
          </p>

          <p className="video-work-description">
            Selected editing, production and motion work
            created for digital creators and online audiences.
          </p>
        </div>


        {/* JAMES CHARLES — FEATURED PROJECT */}
        <article className="video-project video-project-featured">

          <a
            href="https://youtu.be/Is-mtgOP3aA"
            target="_blank"
            rel="noreferrer"
            className="video-thumbnail"
          >
            <img
              src="https://img.youtube.com/vi/Is-mtgOP3aA/maxresdefault.jpg"
              alt="James Charles video edited by Brandon"
            />

            <div className="video-play">
              <span>WATCH ↗</span>
            </div>
          </a>


          <div className="video-project-info">

            <div className="video-project-title">
              <p>JAMES CHARLES</p>
              <h2>Full Video Edit</h2>
            </div>

            <div className="video-project-meta">
              <div>
                <span>ROLE</span>
                <p>Video Editor</p>
              </div>

              <div>
                <span>PROJECT</span>
                <p>Entertainment · Creator Content</p>
              </div>

              <div>
                <span>AUDIENCE</span>
                <p>23.7M+ YouTube</p>
              </div>

              <div>
                <span>SCOPE</span>
                <p>Full Edit</p>
              </div>
            </div>

          </div>

        </article>
        {/* SUPPORTING PROJECTS */}
        <div className="video-project-grid">

          {/* JAMES CHARLES — ROUGH CUT */}
          <article className="video-project video-project-small">

            <a
              href="https://youtu.be/VzY6bj7Bt8w"
              target="_blank"
              rel="noreferrer"
              className="video-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/VzY6bj7Bt8w/maxresdefault.jpg"
                alt="James Charles video rough cut by Brandon"
              />

              <div className="video-play video-play-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="video-small-info">

              <div>
                <p className="video-client">JAMES CHARLES</p>
                <h3>Rough Cut Edit</h3>
              </div>

              <div className="video-small-meta">
                <span>VIDEO EDITOR · ROUGH CUT</span>
                <span>23.7M+ YOUTUBE</span>
              </div>

            </div>

          </article>


          {/* LARRAY */}
          <article className="video-project video-project-small">

            <a
              href="https://youtu.be/PiIdq0z__5o"
              target="_blank"
              rel="noreferrer"
              className="video-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/PiIdq0z__5o/maxresdefault.jpg"
                alt="Larray video edited by Brandon"
              />

              <div className="video-play video-play-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="video-small-info">

              <div>
                <p className="video-client">LARRAY</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="video-small-meta">
                <span>VIDEO EDITOR · ENTERTAINMENT</span>
                <span>10.1M+ YOUTUBE</span>
              </div>

            </div>

          </article>
          {/* DON STEVER */}
          <article className="video-project video-project-small">

            <a
              href="https://youtu.be/52pWxl5URsY"
              target="_blank"
              rel="noreferrer"
              className="video-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/52pWxl5URsY/maxresdefault.jpg"
                alt="Don Stever video edited by Brandon"
              />

              <div className="video-play video-play-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="video-small-info">

              <div>
                <p className="video-client">DON STEVER</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="video-small-meta">
                <span>VIDEO EDITOR · CREATOR CONTENT</span>
                <span>1.49M+ YOUTUBE</span>
              </div>

            </div>

          </article>


          {/* JOLLZTV */}
          <article className="video-project video-project-small">

            <a
              href="https://youtu.be/3tAmPZv7w4o"
              target="_blank"
              rel="noreferrer"
              className="video-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/3tAmPZv7w4o/maxresdefault.jpg"
                alt="JollzTV video edited by Brandon"
              />

              <div className="video-play video-play-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="video-small-info">

              <div>
                <p className="video-client">JOLLZTV</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="video-small-meta">
                <span>VIDEO EDITOR · GAMING</span>
                <span>502K+ YOUTUBE</span>
              </div>

            </div>

          </article>


          {/* STEVEN PARK */}
          <article className="video-project video-project-small">

            <a
              href="https://youtu.be/HGHvgUIaQag"
              target="_blank"
              rel="noreferrer"
              className="video-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/HGHvgUIaQag/maxresdefault.jpg"
                alt="Steven Park video edited by Brandon"
              />

              <div className="video-play video-play-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="video-small-info">

              <div>
                <p className="video-client">STEVEN PARK</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="video-small-meta">
                <span>VIDEO EDITOR · CREATOR CONTENT</span>
                <span>293K+ YOUTUBE</span>
              </div>

            </div>

          </article>


          {/* XUMIIZ */}
          <article className="video-project video-project-small">

            <a
              href="https://youtu.be/qgKH_Va8_WA"
              target="_blank"
              rel="noreferrer"
              className="video-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/qgKH_Va8_WA/maxresdefault.jpg"
                alt="Xumiiz video edited by Brandon"
              />

              <div className="video-play video-play-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="video-small-info">

              <div>
                <p className="video-client">XUMIIZ</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="video-small-meta">
                <span>VIDEO EDITOR · CREATOR CONTENT</span>
                <span>14K+ YOUTUBE · 673K+ INSTAGRAM</span>
              </div>

            </div>

          </article>
        </div>
      </section>
            {/* NIHACHU — SELECTED COLLABORATION */}
      <section className="collab-section">

        <div className="collab-intro">

          <p className="section-number">
            02 — SELECTED COLLABORATION
          </p>

          <div className="collab-title-row">

            <div>
              <p className="collab-label">
                CREATOR COLLABORATION
              </p>

              <h2>NIHACHU</h2>
            </div>

            <div className="collab-overview">

              <p>
                Editing, production and behind-the-scenes work
                across multiple creator projects.
              </p>

              <div className="collab-audience">
                <span>1.24M+ YOUTUBE</span>
                <span>1.3M+ INSTAGRAM</span>
                <span>2.6M+ TIKTOK</span>
              </div>

            </div>

          </div>

        </div>


        {/* BILLIE CREEK — FEATURED PROJECT */}
        <article className="collab-feature">

          <a
            href="https://youtu.be/4xB_P-ZwPlg"
            target="_blank"
            rel="noreferrer"
            className="collab-thumbnail"
          >
            <img
              src="https://img.youtube.com/vi/4xB_P-ZwPlg/maxresdefault.jpg"
              alt="Nihachu paranormal collaboration video edited by Brandon"
            />

            <div className="collab-watch">
              <span>WATCH ↗</span>
            </div>
          </a>


          <div className="collab-project-info">

            <div>
              <p className="collab-client">
                NIHACHU
              </p>

              <h3>Billie Creek</h3>
            </div>


            <div className="collab-meta">

              <div>
                <span>ROLE</span>
                <p>Video Editor</p>
              </div>

              <div>
                <span>TYPE</span>
                <p>Paranormal · Collaboration</p>
              </div>

              <div>
                <span>SCOPE</span>
                <p>Full Edit</p>
              </div>

              <div>
                <span>FEATURING</span>
                <p>Sam and Colby + Creators</p>
              </div>

            </div>

          </div>

        </article>
        {/* NIHACHU — ADDITIONAL EDITS */}
        <div className="collab-project-grid">

          {/* NIHACHU EDIT 01 */}
          <article className="collab-project-small">

            <a
              href="https://youtu.be/u36Dkts_XCY"
              target="_blank"
              rel="noreferrer"
              className="collab-small-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/u36Dkts_XCY/maxresdefault.jpg"
                alt="Nihachu video edited by Brandon"
              />

              <div className="collab-watch collab-watch-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="collab-small-info">

              <div>
                <p className="collab-client">NIHACHU</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="collab-small-meta">
                <span>VIDEO EDITOR · CREATOR CONTENT</span>
                <span>FULL EDIT</span>
              </div>

            </div>

          </article>


          {/* NIHACHU EDIT 02 */}
          <article className="collab-project-small">

            <a
              href="https://youtu.be/1-wN620Cs_A"
              target="_blank"
              rel="noreferrer"
              className="collab-small-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/1-wN620Cs_A/maxresdefault.jpg"
                alt="Nihachu video edited by Brandon"
              />

              <div className="collab-watch collab-watch-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="collab-small-info">

              <div>
                <p className="collab-client">NIHACHU</p>
                <h3>Full Video Edit</h3>
              </div>

              <div className="collab-small-meta">
                <span>VIDEO EDITOR · CREATOR CONTENT</span>
                <span>FULL EDIT</span>
              </div>

            </div>

          </article>

        </div>
               {/* NIHACHU × SAM & COLBY */}
        <article className="collab-secondary-feature">

          <a
            href="https://youtu.be/L3SIO60cRX4"
            target="_blank"
            rel="noreferrer"
            className="collab-secondary-thumbnail"
          >
            <img
              src="https://img.youtube.com/vi/L3SIO60cRX4/maxresdefault.jpg"
              alt="Nihachu and Sam and Colby collaboration edited by Brandon"
            />

            <div className="collab-watch">
              <span>WATCH ↗</span>
            </div>
          </a>

          <div className="collab-secondary-info">

            <div>
              <p className="collab-client">
                NIHACHU × SAM & COLBY
              </p>

              <h3>Livestream Highlights</h3>
            </div>

            <div className="collab-secondary-meta">
              <span>VIDEO EDITOR</span>
              <span>LIVESTREAMING · COLLABORATION</span>
              <span>FULL EDIT</span>
            </div>

          </div>

        </article>


        {/* BILLIE CREEK — BEHIND THE SCENES */}
        <div className="collab-production-grid">

          <article className="collab-production-project">

            <a
              href="https://youtu.be/mJ4-5BB6DWg"
              target="_blank"
              rel="noreferrer"
              className="collab-small-thumbnail"
            >
              <img
  src="https://img.youtube.com/vi/mJ4-5BB6DWg/hqdefault.jpg"
  alt="Billie Creek behind-the-scenes video edited by Brandon"
/>

              <div className="collab-watch collab-watch-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="collab-production-info">

              <p className="collab-client">
                BILLIE CREEK
              </p>

              <h3>Behind the Scenes</h3>

              <div className="collab-production-meta">
                <span>VIDEO EDITOR</span>
                <span>BTS · PARANORMAL</span>
                <span>FULL EDIT</span>
              </div>

            </div>

          </article>


          {/* PRODUCTION / BTS */}
          <article className="collab-production-project">

            <a
              href="https://youtu.be/PYlmgtyFVYc"
              target="_blank"
              rel="noreferrer"
              className="collab-small-thumbnail"
            >
              <img
                src="https://img.youtube.com/vi/PYlmgtyFVYc/maxresdefault.jpg"
                alt="Nihachu production and behind-the-scenes project"
              />

              <div className="collab-watch collab-watch-small">
                <span>WATCH ↗</span>
              </div>
            </a>

            <div className="collab-production-info">

              <p className="collab-client">
                NIHACHU
              </p>

              <h3>Production & BTS</h3>

              <div className="collab-production-meta">
                <span>PRODUCTION ASSISTANT</span>
                <span>BEHIND THE SCENES</span>
                <span>ON-SET PRODUCTION</span>
              </div>

            </div>

          </article>

        </div> 
      </section>
            {/* MOTION & ANIMATION */}
      <section className="motion-section">

        <div className="motion-heading">

          <p className="section-number">
            03 — MOTION & ANIMATION
          </p>

          <p className="motion-description">
            Motion graphics and animation created for
            digital-first content and social platforms.
          </p>

        </div>


        {/* MRBEAST */}
        <div className="motion-intro">

          <div>
            <p className="motion-client">
              MRBEAST
            </p>

            <h2>
              Motion built
              <br />
              for millions.
            </h2>
          </div>


          <div className="motion-overview">

            <p>
              TV animation work created for short-form
              social content.
            </p>

            <div className="motion-meta">

              <div>
                <span>ROLE</span>
                <p>Motion Designer</p>
              </div>

              <div>
                <span>WORK</span>
                <p>TV Animations</p>
              </div>

              <div>
                <span>FORMAT</span>
                <p>Short-Form</p>
              </div>

              <div>
                <span>AUDIENCE</span>
                <p>518M+ YouTube</p>
              </div>

            </div>

          </div>

        </div>


        {/* MRBEAST SHORTS */}
        <div className="motion-shorts-grid">


          {/* 250M SUBSCRIBER MILESTONE */}
          <article className="motion-short-project">

            <a
              href="https://youtube.com/shorts/6GzHPS0rEgc"
              target="_blank"
              rel="noreferrer"
              className="motion-video"
            >

              <img
                src="https://img.youtube.com/vi/6GzHPS0rEgc/hqdefault.jpg"
                alt="MrBeast 250 million subscriber milestone short"
              />

              <div className="motion-watch">
                <span>WATCH ↗</span>
              </div>

            </a>


            <div className="motion-project-info">

              <p className="motion-project-client">
                MRBEAST
              </p>

              <h3>250M Subscriber Giveaway</h3>

              <div className="motion-project-meta">
                <span>TV ANIMATION</span>
                <span>SHORT-FORM</span>
              </div>

            </div>

          </article>


          {/* MRBEAST SHORT 02 */}
          <article className="motion-short-project">

            <a
              href="https://www.youtube.com/shorts/bvlFjrcpD6s"
              target="_blank"
              rel="noreferrer"
              className="motion-video"
            >

              <img
                src="https://img.youtube.com/vi/bvlFjrcpD6s/hqdefault.jpg"
                alt="MrBeast short featuring TV animation work by Brandon"
              />

              <div className="motion-watch">
                <span>WATCH ↗</span>
              </div>

            </a>


            <div className="motion-project-info">

              <p className="motion-project-client">
                MRBEAST
              </p>

              <h3>225M Subscriber Milestone</h3>

              <div className="motion-project-meta">
                <span>TV ANIMATION</span>
                <span>SHORT-FORM</span>
              </div>

            </div>

          </article>


        </div>

      </section>
            {/* VIDEO PAGE — CLOSING CTA */}
      <section className="video-closing">

        <div className="video-closing-top">

          <p className="section-number">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING.
          </h2>

        </div>


        <div className="video-closing-bottom">

          <p>
            AVAILABLE FOR VIDEO EDITING,
            PHOTOGRAPHY, VIDEOGRAPHY
            AND CREATIVE PRODUCTION.
          </p>

          <a
  href="mailto:soloediting.business@gmail.com?subject=Project%20Inquiry"
  className="video-contact-link"
>
  GET IN TOUCH ↗
</a>

        </div>


        <footer className="video-footer">

          <p>
            © 2026 BRANDON
          </p>

          <p>
            EDITING · PHOTOGRAPHY · PRODUCTION
          </p>

          <a href="#top">
            BACK TO TOP ↑
          </a>

        </footer>

      </section>
    </main>
  )
}

export default Video