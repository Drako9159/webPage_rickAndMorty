function Character({ character }) {
  return (
    <div className="text-center p-5">
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h2>Especie: {character.species}</h2>
      <h2>Sexo: {character.gender}</h2>
      
    </div>
  );
}

export default Character;
