import styles from './Projects.module.scss';

export default function Projects(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.header}>Team Project</div>
      <div className={styles.header2}>Social Media App</div>
      <div className={styles.buttonsContainer}>
        <a href="https://goose.danwheeler.me/auth/" target="_blank" rel="noopener noreferrer" className={styles.button}>Live Link</a>
        <a href="https://github.com/dwheeler7/goose" target="_blank" rel="noopener noreferrer" className={styles.button}>Git Repo</a>
      </div>
      <div className={styles.header}>PartLyfe</div>
      <div className={styles.header2}>Ecommerce App</div>
      <div className={styles.buttonsContainer}>
        <a href="https://partlyfe.jeremycasanova.me/" target="_blank" rel="noopener noreferrer" className={styles.button}>Live Link</a>
        <a href="https://github.com/Jcasanova1990/PartLyfe" target="_blank" rel="noopener noreferrer" className={styles.button}>Git Repo</a>
      </div>
      <div className={styles.header}>Bookmarkz</div>
      <div className={styles.header2}>URL Storage App</div>
      <div className={styles.buttonsContainer}>
        <a href="https://bookmarkz.jeremycasanova.me/" target="_blank" rel="noopener noreferrer" className={styles.button}>Live Link</a>
        <a href="https://github.com/Jcasanova1990/Bookmarkz" target="_blank" rel="noopener noreferrer" className={styles.button}>Git Repo</a>
      </div>
      <div className={styles.header}>Loving Paws Adoption Agency</div>
      <div className={styles.header2}>Shelter Website</div>
      <div className={styles.buttonsContainer}>
        <a href="https://lovingpawsadoptionagency.jeremycasanova.me/" target="_blank" rel="noopener noreferrer" className={styles.button}>Live Link</a>
        <a href="https://github.com/Jcasanova1990/Loving-Paws-Adoption-Agency" target="_blank" rel="noopener noreferrer" className={styles.button}>Git Repo</a>
      </div>
    </div>
  );
}

