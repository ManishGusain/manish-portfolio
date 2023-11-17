import styles from './card.module.css'

export default function Card({ data }) {
    return (
        <div className={styles.card}>
            <img src={data.img} alt="Card Image" className={styles.card_image} />
            <div className={styles.card_content}>
                <h5 className={styles.card_title}>{data.title}</h5>
                <a href={data.link} target='blank' className={styles.card_link}>Link</a>
            </div>
        </div>
    );
}