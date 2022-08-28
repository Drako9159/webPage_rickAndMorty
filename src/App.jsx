
import CharacterList from "./components/CharacterList";
import About from "./components/About";
import style from "./components/App.module.css";

function App() {
  
  return (
    <div className={
      style.container
    }>
      <h1 className="text-center display-1 py-1">Rick and Morty</h1>
      <h2 className="text-center display-6 py-1">Characters</h2>
      <CharacterList/>
      <About/>
      
    </div>
  );
}

export default App;
