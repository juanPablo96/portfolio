/* import { useState } from 'react' */

import "./App.css";
import Card1 from "./Components/Card1/Card1";

function App() {
  /*  const [count, setCount] = useState(0) */

  return (
    <>
      <Card1
        name="Juan Pablo Rodríguez"
        position="Desarrollador Full Stack"
        posts="350"
        followers="150K"
        following="250"
      />
    </>
  );
}

export default App;
