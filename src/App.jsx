import "./App.css";
import Character from "./components/Character";
import ironmanImage from "./images/ironman.png";
import adamwarlockImage from "./images/adamwarlock.png";
import hulkImage from "./images/hulk.jpg";
import thorImage from "./images/thor.jpg";
import hawkeyeImage from "./images/hawkeye.jpg";
import ultronImage from "./images/ultron.jpg";
import lunaImage from "./images/luna.jpg";
import cloakImage from "./images/cloak.jpg";
import scarletImage from "./images/scarlet.jpg";
import invisibleImage from "./images/invisible.jpg";


function App() {
  return (
    <>
      <h1>Marvel Rivals Characters</h1>
      <div className="character-list">
        <a href="https://www.marvelrivals.com/heroes/index.html?id=ef114434-6c2a-48ff-a4f7-05dc278aedde" target="_blank"><Character name="Iron Man" image={ironmanImage} description="Duelist" /></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?heroId=0" target="_blank"><Character name="Adam Warlock" image={adamwarlockImage} description="Strategist"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=9471f35c-3f81-4ae2-9726-b2944dd431e9" target="_blank"><Character name="Hulk" image={hulkImage} description="Vanguard" /></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=e7e0573d-ac83-4d1e-b286-7c7e4c79fc81" target="_blank"><Character name="Hawkeye" image={hawkeyeImage} description="Duelist"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=dddc5632-ed86-4312-b8da-1616183fd909" target="_blank"><Character name="Ultron" image={ultronImage} description="Strategist"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=fcddbb53-6a99-45f6-9cc8-65c68edd96e0" target="_blank"><Character name="Thor" image={thorImage} description="Vanguard"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=1077f07b-2178-49d3-80be-d915de78d17c" target="_blank"><Character name="Luna Snow" image={lunaImage} description="Strategist"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=5b5a8c7a-c9c0-4f4c-89a3-dae465db8c7f" target="_blank"><Character name="Cloak & Dagger" image={cloakImage} description="Strategist"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=1d3f08cf-abee-4eb9-b2fd-31ce9947e5a1" target="_blank"><Character name="Scarlet Witch" image={scarletImage} description="Duelist"/></a>
        <a href="https://www.marvelrivals.com/heroes/index.html?id=9cc13662-5669-460f-adbf-f53aba63bb46" target="_blank"><Character name="Invisible Woman" image={invisibleImage} description="Strategist"/></a>
      </div>
    </>
  );
}

export default App;
