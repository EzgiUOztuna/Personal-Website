import "./App.css";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DarkModeContextProvider from "./contexts/DarkModeContext";
import LanguageContextProvider from "./contexts/LanguageContext";
function App() {

  return (
    <>
      <DarkModeContextProvider>
        <LanguageContextProvider>
          <Introduction />
          <Skills />
          <Profile />
          <Projects />
        </LanguageContextProvider>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
