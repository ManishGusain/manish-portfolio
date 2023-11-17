'use client'

import styles from './page.module.css';

const projects_list = [
  { title: 'Stock Average Calculator', link: "https://play.google.com/store/apps/details?id=com.sac.android" }
]

export default function Home() {
  return (
    <section className={`section-container ${styles.home_container}`}>
      <div className={styles.homelhs}>
        <div className={styles.infoCard}>
          <p className={styles.name}>MANISH GUSAIN</p>
          <p className={styles.designation}>Full Stack Engineer</p>
          <div className={styles.seperator} />
          <div className={styles.contact_card}>
            <p className={styles.email}>manishgusain66@gmail.com</p>
            <a
              href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download="Manish Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.contactBtn}>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.homerhs}>
        <div className={styles.projectsCard}>
          <p className={styles.project_title}>Projects</p>
          <div className={styles.projects_list}>
            {
              projects_list.map((edx, ind) => {
                return (
                  <div className={styles.project_chip} onClick={() => window.open(edx.link)}>
                    <p>{edx.title}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
