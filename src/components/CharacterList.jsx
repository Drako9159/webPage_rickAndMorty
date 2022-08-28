import { useEffect, useState } from "react";
import Character from "./Character";
import style from "./CharacterList.module.css";
//d-flex justify-content-between align-items-center
function NavPage(props) {
  return (
    <header className={style.header}>
      <p>Page: {props.page}</p>
      <button
        className={style.btn}
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Next
      </button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function restApi() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setIsLoading(false);
  
    }
    restApi();
  }, [page]);

  return (
    <div className={style.container}>
      <NavPage page={page} setPage={setPage} />

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
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
