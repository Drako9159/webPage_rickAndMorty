import styles from "./Character.module.css";

function Character({ character }) {
  return (
    <div className="text-center p-5">
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h2 className={styles.specie}>Specie: {character.species}</h2>
      <h2 className={styles.gender}>Gender: {character.gender}</h2>
      
    </div>
  );
}

export default Character;
