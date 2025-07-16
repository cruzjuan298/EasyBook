import styles from "./page.module.css"

export default function Home() {
  return (
    <div className="homne-divs">
      <nav className={styles.navbar} >

        <div className={styles.navbarTitleDiv1}>
          <a className={styles.navbarTitle}>Bookme</a>
        </div>
        
        <div className={styles.navbarTitleDiv2}>
          <a href="#about" className={styles.navbarInfoTitle} > About </a>
          <a href="#features" className={styles.navbarInfoTitle} > Features </a>
          <a href="#setup" className={styles.navbarInfoTitle} > Setup </a>
          <a href="/dashboard" className={styles.navbarInfoTitle} >Try it for free </a>
        </div>
      </nav>

        <section className={styles.hero}>
          <div className={styles.heroDiv}>
            <div className={styles.heroTextComponents}>
              <h1 className={styles.heroTitle}>Streamline Your Bookings, Grow Your Business.</h1>
              <p className={styles.heroDescription}> Bookme makes it effortless for small businesses to manage appointments, send automated reminders, and delight clients.</p>
              <div className={styles.heroOptions}>
                <a className={styles.heroGetStarted} href="/dashboard">Get Started Free</a>
                <a className={styles.heroLearnMore}>Learn More</a>
              </div>
            </div>

            <div className={styles.heroMockComponents}>
              <img className={styles.heroMockImg} src="https://placehold.co/600x400/E0F2FE/2196F3?text=App+Mockup" />
            </div>
          </div>

        </section>

        <section className={styles.featuresSection}>
          <div className={styles.featuresDiv}>
            <h2 className={styles.featuresTitle}> Features Designed for Your Success </h2>
            <p className={styles.featuresSubTitle}> Everything you need to simplify scheduling, reduce no-shows, and provide an excellent client experience. </p>
            <div className={styles.featuresGrid}>

              <div className={styles.grid}>
                <div className={styles.featureIcon}>

                </div>
                <h3 className={styles.gridTitle}> Effortless Online Booking </h3>
                <p className={styles.gridSubTitle}> Allow clients to book appointments 24/7 directly from your website or a custom booking page. </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.featureIcon}>
                  
                </div>
                <h3 className={styles.gridTitle}> Automated Reminders </h3>
                <p className={styles.gridSubTitle}> Reduce no-shows with automated SMS and email reminders, confirmations, and follow-ups. </p>
              </div>
              
              <div className={styles.grid}>
                <div className={styles.featureIcon}>
                  
                </div>
                <h3 className={styles.gridTitle}> Client Management </h3>
                <p className={styles.gridSubTitle}> Keep track of client history, preferences, and notes all in one centralized place. </p>
              </div>


              <div className={styles.grid}>
                <div className={styles.featureIcon}>
                  
                </div>
                <h3 className={styles.gridTitle}> Insightful Reporting </h3>
                <p className={styles.gridSubTitle}> Gain valuable insights into your bookings, busy hours, and client trends with easy-to-read reports. </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.featureIcon}>
                  
                </div>
                <h3 className={styles.gridTitle}> Flexible Scheduling </h3>
                <p className={styles.gridSubTitle}> Set custom availability, buffer times, and manage multiple staff calendars with ease. </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.featureIcon}>
                  
                </div>
                <h3 className={styles.gridTitle}> Seamless Integrations </h3>
                <p className={styles.gridSubTitle}> Connect with your favorite tools like Google Calendar, Zoom, and popular payment gateways. </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.InstructionsSection}>
          
        </section>

        <section className={styles.ctaSection}>

        </section>

        <section className={styles.footerSection}>

        </section>
    </div>
  )
}