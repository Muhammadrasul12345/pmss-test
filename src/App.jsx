import React from 'react';
import Home from './pages/home';
import About from "./pages/About"
import Aloqa from "./pages/Aloqa"
import Hamkorlar from "./pages/Hamkorlar"
import History from "./pages/History"
import Tarkibiy from "./pages/Tarkibiy"

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Aloqa />
      <Hamkorlar />
      <History />
      <Tarkibiy />
    </div>
  );
}

export default App;
