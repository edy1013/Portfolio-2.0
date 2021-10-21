import Contact from "./components/contact/Contact.jsx";
import About from "./components/intro/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/intro/productList/ProductList.jsx";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
  </div>
  );
};

export default App;