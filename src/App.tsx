import Hero from "./components/hero/hero";
import CardContent from "./components/Card/CardContent";
import peruFlag from "./assets/peruFlag.webp";

import "./App.css";
import styles from "./components/Card/CardContent.module.css";

interface Country {
  name: string;
  capital: string;
  population: string;
}

function App({ country }: { country: Country }) {
  return (
    <>
      <div className="container">
        <Hero />

        <CardContent>
          <img src={peruFlag} className={styles.peruFlag} alt="flag of Peru" />
          <div className={styles.details}>
            <div>
              <h1>Country: {country.name}</h1>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
            </div>
          </div>
        </CardContent>
      </div>
    </>
  );
}

export default App;
