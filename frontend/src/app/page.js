import styles from "./page.module.css"
import config from "@/config"

export default function Home() {
  return (
    <div className="homne-divs">
      <nav className={styles.navbar} >

        <div className={styles.navbarTitleDiv1}>
          <a className={styles.navbarTitle}>EasyBook</a>
        </div>
        
        <div className={styles.navbarTitleDiv2}>
          <a href="#about" className={styles.navbarInfoTitle} > About </a>
          <a href="#features" className={styles.navbarInfoTitle} > Features </a>
          <a href="#setup" className={styles.navbarInfoTitle} > Setup </a>
          <a href={config.routes.DASHBOARD} className={styles.navbarInfoTitle} >Try it for free </a>
        </div>
      </nav>

        <section className={styles.hero}>
          <div className={styles.heroDiv}>
            <div className={styles.heroTextComponents}>
              <h1 className={styles.heroTitle}>Streamline Your Bookings, Grow Your Business.</h1>
              <p className={styles.heroDescription}> Bookme makes it effortless for small businesses to manage appointments, send automated reminders, and delight clients.</p>
              <div className={styles.heroOptions}>
                <a className={styles.heroGetStarted} href={config.routes.DASHBOARD}>Get Started Free</a>
                <a className={styles.heroLearnMore}>Learn More</a>
              </div>
            </div>

            <div className={styles.heroMockComponents}>
              <img className={styles.heroMockImg} src="https://placehold.co/600x400/E0F2FE/2196F3?text=App+Mockup" />
            </div>
          </div>

        </section>

        <section className={styles.featuresSection} id="features">
          <div className={styles.featuresDiv}>
            <h2 className={styles.featuresTitle}> Features Designed for Your Success </h2>
            <p className={styles.featuresSubTitle}> Everything you need to simplify scheduling, reduce no-shows, and provide an excellent client experience. </p>
            <div className={styles.featuresGrid}>

              <div className={styles.grid}>
                <div className={styles.featureIcon} id={styles.calenderIcon}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#2563eb"><path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Z"/></svg>
                </div>
                <h3 className={styles.gridTitle}> Effortless Online Booking </h3>
                <p className={styles.gridSubTitle}> Allow clients to book appointments 24/7 directly from your website or a custom booking page. </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.featureIcon} id={styles.bellIcon}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#16a34a"><path d="M160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z"/></svg>
                </div>
                <h3 className={styles.gridTitle}> Automated Reminders </h3>
                <p className={styles.gridSubTitle}> Reduce no-shows with automated SMS and email reminders, confirmations, and follow-ups. </p>
              </div>
              
              <div className={styles.grid}>
                <div className={styles.featureIcon} id={styles.clientIcon}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#9336eb"><path d="M0-240v-56.33q0-40.05 42.33-65.19 42.34-25.15 111.25-25.15 12.45 0 23.93.5 11.49.5 22.49 2.27-10 18.57-15 38.11-5 19.55-5 40.79v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-21.91-4.5-41.29t-14.17-37.56q11-1.82 22.28-2.32 11.29-.5 23.06-.5 69 0 111.16 24.68Q960-337.31 960-296.33V-240H780Zm-471.67-66.67H652v-4q-3.33-31.33-52.17-52Q551-383.33 480-383.33t-119.83 20.66Q311.33-342 308.33-310v3.33ZM153.04-420q-30.04 0-51.54-21.54T80-493.33q0-30.67 21.54-52 21.54-21.34 51.79-21.34 30.67 0 52 21.34 21.34 21.33 21.34 52.29 0 30.04-21.34 51.54Q184-420 153.04-420Zm653.34 0q-30.05 0-51.55-21.54-21.5-21.54-21.5-51.79 0-30.67 21.55-52 21.54-21.34 51.79-21.34 30.66 0 52 21.34Q880-524 880-493.04q0 30.04-21.33 51.54-21.34 21.5-52.29 21.5ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.23-66.67q22.77 0 37.94-15.4 15.16-15.4 15.16-38.16 0-22.77-15.26-37.94-15.27-15.16-37.84-15.16-22.56 0-38.06 15.26-15.5 15.27-15.5 37.84 0 22.56 15.4 38.06 15.4 15.5 38.16 15.5Zm.1 240ZM480-600Z"/></svg>
                </div>
                <h3 className={styles.gridTitle}> Client Management </h3>
                <p className={styles.gridSubTitle}> Keep track of client history, preferences, and notes all in one centralized place. </p>
              </div>


              <div className={styles.grid}>
                <div className={styles.featureIcon} id={styles.insightIcon}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ca8a02"><path d="M282.67-278h66.66v-276.67h-66.66V-278Zm164 0h66.66v-404h-66.66v404Zm164 0h66.66v-152h-66.66v152Zm-424 158q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
                </div>
                <h3 className={styles.gridTitle}> Insightful Reporting </h3>
                <p className={styles.gridSubTitle}> Gain valuable insights into your bookings, busy hours, and client trends with easy-to-read reports. </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.featureIcon} id={styles.scheduleIcon}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#dc2626"><path d="M360-853.33V-920h240v66.67H360Zm86.67 444.66h66.66V-642h-66.66v233.33Zm33.33 328q-74 0-139.5-28.5T226-186.67q-49-49-77.5-114.5T120-440.67q0-74 28.5-139.5t77.5-114.5q49-49 114.5-77.5t139.5-28.5q65.33 0 123.67 21.67 58.33 21.67 105.66 61L762-770.67 808.67-724 756-671.33Q792.67-628 816.33-571 840-514 840-440.67q0 74-28.5 139.5T734-186.67q-49 49-114.5 77.5T480-80.67Zm0-66.66q122 0 207.67-85.67 85.66-85.67 85.66-207.67 0-122-85.66-207.66Q602-734 480-734q-122 0-207.67 85.67-85.66 85.66-85.66 207.66T272.33-233Q358-147.33 480-147.33ZM480-440Z"/></svg>
                </div>
                <h3 className={styles.gridTitle}> Flexible Scheduling </h3>
                <p className={styles.gridSubTitle}> Set custom availability, buffer times, and manage multiple staff calendars with ease. </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.featureIcon} id={styles.integrationIcon}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#4f46e5"><path d="M293.33-366.67v-240q0-27.66 19.59-47.16 19.58-19.5 47.08-19.5h342L592.33-783 640-830l190 190-190 190.67L592.33-496 702-606.67H360v240h-66.67ZM186.67-120q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-626.66h66.67v626.66h506.66v-180H760v180q0 27.5-19.58 47.09Q720.83-120 693.33-120H186.67Z"/></svg>
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
          <div className={styles.ctaDiv}>
            <h2 className={styles.ctaTitle}>Ready to Simplify Your Scheduling? </h2>
            <p className={styles.ctaSubSection}> Become one of the first users of bookme. Start tracking your appointments today! </p>
            <a className={styles.ctaTrial} href={config.routes.DASHBOARD}>Start For Free </a>
          </div>
        </section>

        <footer className={styles.footerSection}>
          <div className={styles.footerDiv}>
            <div className={styles.footerDivs}>
              <h3 className={styles.footerH3}> Bookme Scheduling </h3>
            </div>

            <div className={styles.footerDivs}>
              <h3 className={styles.footerH3}> Quick Links </h3>
              <ul className={styles.footerLinks}>
                <li className={styles.footerTitle}>
                  <a className={styles.footerQlContent} href="#features" >Features</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerDivs}> 
              <h3 className={styles.footerH3}>Contact Me</h3>
              <p className={styles.footerP}> Email:
                <a className={styles.footerEmail} href="mailto:cruzjuan298@gmail.com"> cruzjuan298@gmail.com</a>
              </p>
            </div>

          </div>
        </footer>
    </div>
  )
}