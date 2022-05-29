import "./App.css";
import Home from "./Components/Pages/Home";
import NavSection from "./Components/Shared/NavSection";

function App() {
  return (
    <div className='bg-primary'>
      <NavSection />
      <Home />
    </div>
  );
}

export default App;
