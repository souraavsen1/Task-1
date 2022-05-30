import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Components/Pages/Home";
import NavSection from "./Components/Shared/NavSection";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className='bg-lightGray'>
      <NavSection />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
