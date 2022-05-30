import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Components/Pages/Home";
import NavSection from "./Components/Shared/NavSection";

function App() {
  return (
    <div className='bg-lightGray'>
      <NavSection />
      <Home />
    </div>
  );
}

export default App;
