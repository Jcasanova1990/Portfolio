import styles from './Home.module.scss';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jeremy Casanova</h1>
      <p className={styles.description}>
        I am a passionate and innovative software engineer with a relentless commitment to crafting elegant and efficient solutions. <br /> I specialize in translating complex ideas into robust, user-friendly applications through a blend of creativity and technical expertise.<br /> With a keen eye for detail and a dedication to continuous learning, I thrive on staying at the forefront of technology trends to deliver cutting-edge solutions that not only meet but exceed client expectations.<br /> My goal is to leave a lasting impact by contributing to the evolution of software development and pushing the boundaries of what is possible in the digital realm.
      </p>
      <img
        src="/img/main_pic.png"
        alt="Your Picture"
        className={styles.image}
      />
    </div>
  );
}
