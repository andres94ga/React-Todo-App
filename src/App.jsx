import { useState } from "react";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav/Nav";
import Index from "./components/Page/PageIndex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Index />
    </>
  );
}

export default App;
