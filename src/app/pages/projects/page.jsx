import styles from './page.module.css';
import Card from '../../components/card';

const skillsData=[
  {title:'Stock Average Calculator',link:"https://play.google.com/store/apps/details?id=com.sac.android", description:'2 years of experience in reactjs',img:"https://play-lh.googleusercontent.com/C7RY2Ok-pyv_FCu2NccvPMEzv9pSBEXzmX03h5rGs5XeRunyU6fAub6lpnCkizPQsg=w240-h480"},
]

export default function Projects() {
  return (
    <section className={styles.projects_container}>
      <p className='section-title'>Projects</p>
      <div className={styles.projects_card_container}>
      {
        skillsData.map((val,ind)=>{
          console.log(val)
          return(
            <Card data={val} />
          )
        })
      }
      </div>
    </section>
  )
}
