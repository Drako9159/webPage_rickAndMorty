import { useEffect, useState } from "react";
import Character from "./Character";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function restApi() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      setIsLoading(false);
    }
    restApi();
  }, []);

  return (
    <div className="container bg-danger">
      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
