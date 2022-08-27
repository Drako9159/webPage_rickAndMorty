function Character({ character }) {
  return (
    <div>
      
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
}

export default Character;
