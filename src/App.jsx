import { useContext } from "react";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/intro/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/intro/productList/ProductList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "black" : "white", color: darkMode && "white" }}>
      <Toggle/>
      <Intro />
      <About />
      <ProductList />
      <Contact />
  </div>
  );
};

export default App;