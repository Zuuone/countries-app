// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import peruFlag from "./assets/peruFlag.webp";
import machupicchu from "./assets/machu-picchu.jpg";
import "./App.css";

interface Country {
  name: string;
  capital: string;
  population: string;
}

// interface CoutryProps {
//   country: Country;
// }

function App({ country }: { country: Country }) {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="header">
            <h1 className="title">Explore Inca Citadel</h1>
            <div className="nav">
              <p>Travel Guide</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>
          <img src={machupicchu} className="hero_photo" alt="machu-picchu" />
        </section>
        <section className="countryInfo">
          <img src={peruFlag} className="peruFlag" alt="flag of Peru" />
          <div className="details">
            <h1>Country: {country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
        </section>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
